import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { ES } from './content/es';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('crea la aplicación con cabecera y pie', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('app-site-header')).toBeTruthy();
    expect(element.querySelector('app-site-footer')).toBeTruthy();
    expect(element.querySelector('main#main')).toBeTruthy();
  });

  it('sirve el enlace de salto en español por defecto', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.skip-link')?.textContent).toContain(ES.header.skip);
  });
});
