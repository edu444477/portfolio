"""
Regenera el CV público sin el número de teléfono.

Toma `CV_2026.pdf` (fuente privada, fuera de git) y escribe
`public/cv/eduardo-orellana-cv.pdf` conservando el diseño original:

- borra la línea de teléfono del bloque de contacto,
- sube una fila el email y la localidad,
- desplaza una fila los iconos de la imagen del bloque de contacto.

El PDF original dibuja cada línea de texto como un bloque `q ... Q` con su
propia traslación y guarda los tres iconos en una sola imagen (113 × 328 px,
3 filas de 109,33 px). La edición es quirúrgica: se reescribe el flujo de
contenido y se desplazan los píxeles en su sitio, sin volver a insertar la
imagen, para no perder nitidez.

Requiere PyMuPDF y el PDF original en la raíz del repo.

Uso: python scripts/cv/rebuild-cv.py
"""


from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / 'CV_2026.pdf'
TARGET = ROOT / 'public' / 'cv' / 'eduardo-orellana-cv.pdf'

# Bloques de texto del contacto (unidades del PDF original) y una fila de
# separación equivalente a 26,5 pt.
PHONE_Y = 956.05206
EMAIL_Y = 1066.51294
CITY_Y = 1176.97388

CONTENT_XREF = 18
ICONS_XREF = 95
ICONS_ALPHA_XREF = 126
ICONS_ROWS = 328
ICON_SHIFT = 109  # 328 / 3, redondeado a píxel


def top_groups(stream: str) -> list[tuple[int, int]]:
    """Bloques `q ... Q` de nivel 1, ignorando cadenas y comentarios."""
    groups: list[tuple[int, int]] = []
    depth = 0
    start = 0
    i = 0
    size = len(stream)

    while i < size:
        char = stream[i]

        if char == '(':
            i += 1
            nest = 1
            while i < size and nest:
                if stream[i] == '\\':
                    i += 2
                    continue
                if stream[i] == '(':
                    nest += 1
                elif stream[i] == ')':
                    nest -= 1
                i += 1
            continue

        if char == '<':
            end = stream.find('>', i)
            i = end + 1 if end != -1 else size
            continue

        if char == '%':
            end = stream.find('\n', i)
            i = end + 1 if end != -1 else size
            continue

        if char == 'q':
            if depth == 0:
                start = i
            depth += 1
            i += 1
            continue

        if char == 'Q':
            depth -= 1
            if depth == 0:
                groups.append((start, i + 1))
            i += 1
            continue

        i += 1

    return groups


def translate_of(body: str) -> float | None:
    marker = '3.126178 0 0 3.126178 '
    head = body[:120]
    index = head.find(marker)
    if index == -1:
        return None
    parts = head[index + len(marker) :].split(' cm')[0].split()
    return float(parts[1]) if len(parts) == 2 else None


def shifted(samples: bytes, row_bytes: int, fill: int) -> bytes:
    """Sube una fila de iconos y deja la última en blanco."""
    blank = bytes([fill]) * row_bytes * ICON_SHIFT
    return samples[ICON_SHIFT * row_bytes :] + blank


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit(f'Falta el PDF de origen: {SOURCE}')

    document = pymupdf.open(SOURCE)

    # 1. Texto: fuera el teléfono; email y localidad suben una fila.
    stream = document.xref_stream(CONTENT_XREF).decode('latin-1')
    remove: tuple[int, int] | None = None
    moves: list[tuple[int, int, float, float]] = []

    for start, end in top_groups(stream):
        y = translate_of(stream[start:end])
        if y is None:
            continue
        if abs(y - PHONE_Y) < 0.5:
            remove = (start, end)
        elif abs(y - EMAIL_Y) < 0.5:
            moves.append((start, end, EMAIL_Y, PHONE_Y))
        elif abs(y - CITY_Y) < 0.5:
            moves.append((start, end, CITY_Y, EMAIL_Y))

    if remove is None or len(moves) != 2:
        raise SystemExit('No se localizaron las filas de contacto esperadas')

    for start, end, old, new in moves:
        body = stream[start:end].replace(f'{old} cm', f'{new} cm', 1)
        stream = stream[:start] + body + stream[end:]

    stream = stream[: remove[0]] + stream[remove[1] :]
    document.update_stream(CONTENT_XREF, stream.encode('latin-1'))

    # 2. Iconos: se desplazan los píxeles una fila dentro de la misma imagen.
    rgb = document.xref_stream(ICONS_XREF)
    alpha = document.xref_stream(ICONS_ALPHA_XREF)
    width = 113

    if len(rgb) != width * ICONS_ROWS * 3 or len(alpha) != width * ICONS_ROWS:
        raise SystemExit(
            f'La imagen de iconos no tiene el formato esperado: {len(rgb)} y {len(alpha)} bytes'
        )

    document.update_stream(
        ICONS_XREF,
        shifted(rgb, width * 3, 255),
        compress=True,
    )
    document.update_stream(
        ICONS_ALPHA_XREF,
        shifted(alpha, width, 0),
        compress=True,
    )

    document.set_metadata(
        {
            **document.metadata,
            'title': 'Eduardo Orellana — Currículum',
            'author': 'Eduardo Orellana',
            'subject': 'Desarrollador Full Stack',
            'keywords': 'React, React Native, Ruby on Rails, Angular, Flask, TypeScript',
        }
    )

    TARGET.parent.mkdir(parents=True, exist_ok=True)
    document.save(TARGET, garbage=4, deflate=True, clean=True)
    document.close()

    print(f'CV escrito en {TARGET.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
