import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';

import { NgIconsModule } from '@ng-icons/core';
import { iconoirLaptopDevMode } from '@ng-icons/iconoir';
import {
  ionLogoLinkedin,
  ionLogoGithub,
  ionArrowDown
} from '@ng-icons/ionicons';
import { tablerFileDownload, tablerMailPlus } from '@ng-icons/tabler-icons';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    ExperienceComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    StartComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      iconoirLaptopDevMode,
      ionLogoLinkedin,
      ionLogoGithub,
      tablerFileDownload,
      ionArrowDown,
      tablerMailPlus
    })
  ],
  exports: [
    ExperienceComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    StartComponent
  ]
})
export class ComponentsModule { }
