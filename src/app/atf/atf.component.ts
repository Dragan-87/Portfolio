import { LinkService } from '../link.service';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SocialMediaService } from './../social-media.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

  socialMedia: SocialMediaService = new SocialMediaService();
  links: LinkService = new LinkService();

  constructor() {}
}
