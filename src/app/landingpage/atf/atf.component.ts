import { LinkService } from '../../shared/link.service';
import { SvgIconComponent } from '../../shared/svg-icon/svg-icon.component';
import { SocialMediaService } from '../../shared/social-media.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss', './atf-responsive.scss']
})
export class AtfComponent {

  socialMedia: SocialMediaService = new SocialMediaService();
  links: LinkService = new LinkService();

  constructor() { }

}
