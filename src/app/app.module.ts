import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/roomeey/about/about.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { BlogComponent } from './component/roomeey/blog/blog.component';
import { ServicesComponent } from './component/roomeey/services/services.component';
import { HomeComponent } from './component/roomeey/home/home.component';
import { HeaderComponent } from './component/roomeey/header/header.component';
import { FooterComponent } from './component/roomeey/footer/footer.component';
import { ErrorComponent } from './component/roomeey/error/error.component';
import { WishlistComponent } from './component/roomeey/wishlist/wishlist.component';
import { PropertyDashboardComponent } from './component/user/property-dashboard/property-dashboard.component';
import { PropertyDescriptionComponent } from './component/user/property-description/property-description.component';
import { ProfileUpdateComponent } from './component/user/profile-update/profile-update.component';
import { ContactUsComponent } from './component/roomeey/contact-us/contact-us.component';
import { CareerComponent } from './component/roomeey/career/career.component';
import { TermsAndConditionComponent } from './component/roomeey/terms-and-condition/terms-and-condition.component';
import { PrivacyPolicyComponent } from './component/roomeey/privacy-policy/privacy-policy.component';
import { OwnerDashboardComponent } from './component/owner/owner-dashboard/owner-dashboard.component';
import { AddPropertyComponent } from './component/owner/add-property/add-property.component';
import { ShowAllPropertiesComponent } from './component/owner/show-all-properties/show-all-properties.component';
import { UpdatePropertyComponent } from './component/owner/update-property/update-property.component';
import { OwnerPropertyDescriptionComponent } from './component/owner/owner-property-description/owner-property-description.component';
import { ForgotPasswordComponent } from './component/user/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileComponent,
    BlogComponent,
    ServicesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    WishlistComponent,
    PropertyDashboardComponent,
    PropertyDescriptionComponent,
    ForgotPasswordComponent,
    ProfileUpdateComponent,
    ContactUsComponent,
    CareerComponent,
    TermsAndConditionComponent,
    PrivacyPolicyComponent,
    
    OwnerDashboardComponent,
         AddPropertyComponent,
         ShowAllPropertiesComponent,
         UpdatePropertyComponent,
         OwnerPropertyDescriptionComponent,
         


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
