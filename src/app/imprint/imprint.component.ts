import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }
}
