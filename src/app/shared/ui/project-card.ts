import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Project } from '../../content/types';
import { Tag } from './tag';

@Component({
  selector: 'app-project-card',
  imports: [Tag, RouterLink],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
