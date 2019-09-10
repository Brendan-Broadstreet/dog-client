import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './dog-owner-create/address/address.component';
import { OwnerDashboardComponent} from './owner-dashboard/owner-dashboard.component'
import { DogProfileComponent } from './dog-owner-create/dog-profile/dog-profile.component';
import { DogTableComponent } from './dog-owner-create/dog-table/dog-table.component';
import { OwnerProfileComponent } from './owner-dashboard/owner-profile/owner-profile.component';

import { RecentRequestsComponent } from "./owner-dashboard/recent-requests/recent-requests.component";
import { RequestWalkComponent } from "./owner-dashboard/request-walk/request-walk.component";
import { AvailableWalkersComponent } from "./owner-dashboard/available-walkers/available-walkers.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { LisuTabsComponent } from './auth/lisu-tabs/lisu-tabs.component';
import { WalkerCardsComponent } from './walker-cards/walker-cards.component';
import { ReviewWalkerComponent } from './review-walker/review-walker.component';
import { WalkerCreateComponent } from './walker-create/walker-create.component';
import { WalkerBioComponent } from './walker-bio/walker-bio.component';
import { WalkerProfileComponent } from './walker-profile/walker-profile.component';



const routes: Routes = [
  { path: "", component: AddressComponent },
  { path: "ownerdash", component: OwnerDashboardComponent },
  { path: "alice", component: DogProfileComponent },
  { path: "alice2", component: DogTableComponent },
  { path: "profile", component: OwnerProfileComponent },
  { path: "recent", component: RecentRequestsComponent },
  { path: "request", component: RequestWalkComponent },
  { path: "available", component: AvailableWalkersComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "lisu", component: LisuTabsComponent },
  { path: "walker-card", component: WalkerCardsComponent },
  { path: "review-walker", component: ReviewWalkerComponent },
  { path: "walker-create", component: WalkerCreateComponent},
  { path: "walkerbio", component: WalkerBioComponent},
  { path: "walkerprofile", component: WalkerProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
