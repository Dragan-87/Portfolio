import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SocialMediaService } from '../social-media.service';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SvgIconComponent,
    RouterOutlet,
    RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  socialMedia: any;

  constructor(socialMedia: SocialMediaService) {
    this.socialMedia = socialMedia.socialMedia;
    
  }

}
