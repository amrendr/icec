import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AnnouncementBarComponent } from './announcement-bar/announcement-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { BylawsComponent } from './bylaws/bylaws.component';
import { MissionComponent } from './mission/mission.component';
import { MembersComponent } from './members/members.component';
import { AppService } from './app.service';
import { AppFilterListPipe } from './app.pipe';
import { RentalComponent } from './rental/rental.component';
import { AppDimensionService } from './app.dimension.service';
import { MembershipComponent } from './membership/membership.component';
import { YouthGroupComponent } from './youth-group/youth-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AnnouncementBarComponent,
    NavigationComponent,
    AboutComponent,
    BylawsComponent,
    MissionComponent,
    MembersComponent,
    AppFilterListPipe,
    RentalComponent,
    MembershipComponent,
    YouthGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AppService, AppFilterListPipe, AppDimensionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
