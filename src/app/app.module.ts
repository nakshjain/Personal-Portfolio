import { NgModule } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImageSliderComponent } from './home-page/image-slider/image-slider.component';
import {NgOptimizedImage} from "@angular/common";
import {NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './about-me/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectsComponent,
    AboutMeComponent,
    ImageSliderComponent,
    NavbarComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgOptimizedImage,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

