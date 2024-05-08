import { LinkService } from './../link.service';
import { SocialMediaService } from './../social-media.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  ichbineinsting = "test"
  socialMedia: any;
  links: any;
  constructor(socialMedia: SocialMediaService, links: LinkService) {
    this.socialMedia = socialMedia.socialMedia;
    this.links = links;
  }

}
