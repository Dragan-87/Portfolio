import { LandingpageComponent } from './landingpage/landingpage.component';;
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { Routes } from '@angular/router';



export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, },
];
