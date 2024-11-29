import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/roomeey/about/about.component';
import { HomeComponent } from './component/roomeey/home/home.component';
import { BlogComponent } from './component/roomeey/blog/blog.component';
import { HeaderComponent } from './component/roomeey/header/header.component';
import { FooterComponent } from './component/roomeey/footer/footer.component';
import { ContactUsComponent } from './component/roomeey/contact-us/contact-us.component';
import { CareerComponent } from './component/roomeey/career/career.component';
import { ServicesComponent } from './component/roomeey/services/services.component';
import { SignInComponent } from './component/user/sign-in/sign-in.component';
import { SignOutComponent } from './component/user/sign-out/sign-out.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { ProfileUpdateComponent } from './component/user/profile-update/profile-update.component';
import { WishlistComponent } from './component/roomeey/wishlist/wishlist.component';
import { PropertyDashboardComponent } from './component/user/property-dashboard/property-dashboard.component';
import { PropertyDescriptionComponent } from './component/user/property-description/property-description.component';
import { ErrorComponent } from './component/roomeey/error/error.component';
import { OwnerDashboardComponent } from './component/owner/owner-dashboard/owner-dashboard.component';
import { AddPropertyComponent } from './component/owner/add-property/add-property.component';
import { ShowAllPropertiesComponent } from './component/owner/show-all-properties/show-all-properties.component';
import { UpdatePropertyComponent } from './component/owner/update-property/update-property.component';
import { OwnerPropertyDescriptionComponent } from './component/owner/owner-property-description/owner-property-description.component';
import { ForgotPasswordComponent } from './component/user/forgot-password/forgot-password.component';


const routes: Routes = [
  //Roomeey
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},

  //Header
  {path:'header',component:HeaderComponent},
  {path:'service',component:ServicesComponent},
  {path:'blog',component:BlogComponent},
  {path:'login',component:SignInComponent},
  {path:'signout',component:SignOutComponent},

  //User
  {path:'profile',component:ProfileComponent},
  {path:'profile-update',component:ProfileUpdateComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'wishlist',component:WishlistComponent},

  //Owner
  {path:'owner-dashboard',component:OwnerDashboardComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'show-all-properties',component:ShowAllPropertiesComponent},
  {path:'update-property',component:UpdatePropertyComponent},
  {path:'owner-property-descroption',component:OwnerPropertyDescriptionComponent},

  //Footer
  {path:'footer',component:FooterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'career',component:CareerComponent},
  {path:'property-dashboard',component:PropertyDashboardComponent},
  {path:'property-descroption',component:PropertyDescriptionComponent},

  {path:'error',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
