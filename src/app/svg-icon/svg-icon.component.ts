import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SocialMediaService } from '../social-media.service';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent {
  @Input() class= '';
  @Input() path!: string[];
  @Input() id!: string;
  @Input() width!: string;
  @Input() height!: string;
  @Input() clickFunction!: string;
  socialMedia: any;

  constructor(socialMedia: SocialMediaService) {
    this.socialMedia = socialMedia.socialMedia;
  }

}
