import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


// Components
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

// Icons
import { NgIconsModule } from '@ng-icons/core';
import { iconoirLaptopDevMode } from '@ng-icons/iconoir';
import {
  ionLogoLinkedin,
  ionLogoGithub,
  ionArrowDown,
  ionBriefcaseOutline,
  ionPersonCircleOutline,
  ionConstructOutline,
  ionPlayCircle,
  ionPauseCircle
} from '@ng-icons/ionicons';
import { tablerFileDownload, tablerMailPlus, tablerChess } from '@ng-icons/tabler-icons';


@NgModule({
  declarations: [
    ExperienceComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    StartComponent,
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgIconsModule.withIcons({
      iconoirLaptopDevMode,
      ionLogoLinkedin,
      ionLogoGithub,
      tablerFileDownload,
      ionArrowDown,
      tablerMailPlus,
      ionBriefcaseOutline,
      ionPersonCircleOutline,
      ionConstructOutline,
      tablerChess,
      ionPlayCircle,
      ionPauseCircle
    })
  ],
  exports: [
    ExperienceComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    StartComponent,
    HobbiesComponent
  ]
})
export class ComponentsModule { }
