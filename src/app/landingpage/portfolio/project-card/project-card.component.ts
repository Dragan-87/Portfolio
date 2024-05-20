import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() index!: number;
  @Input() projectImg: string = '';
  @Input() projectTitle: string = '';
  @Input() techStack: string = '';
  @Input() projectDescription: string = '';
  @Input() githubLink: string = '';
  @Input() liveLink: string = '';

  evenOrOdd(): boolean {
    return this.index % 2 !== 0;
  }
}
