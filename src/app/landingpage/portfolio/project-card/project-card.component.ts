import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslationService } from '../../../../assets/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';




@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TranslateModule],
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
  translateliveLink: string = '';

  translate = Inject(TranslationService);

  evenOrOdd(): boolean {
    return this.index % 2 !== 0;
  }
}
