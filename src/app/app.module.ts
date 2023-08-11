import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import {NgOptimizedImage} from "@angular/common";
import {NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImageSliderComponent } from './home-page/image-slider/image-slider.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from "./about-me/skills/skills.component";
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectsComponent,
    AboutMeComponent,
    ImageSliderComponent,
    FooterComponent,
    SkillsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgOptimizedImage,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    NgxExtendedPdfViewerModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

