import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import {
  iconoirLaptopDevMode,
  iconoirGym,
  iconoirOpenInBrowser,
} from '@ng-icons/iconoir';
import {
  ionLogoLinkedin,
  ionLogoGithub,
  ionArrowDown,
  ionBriefcaseOutline,
  ionPersonCircleOutline,
  ionConstructOutline,
  ionCodeSlash
} from '@ng-icons/ionicons';
import {
  tablerFileDownload,
  tablerMailPlus,
  tablerChess,
  tablerScissors,
} from '@ng-icons/tabler-icons';

@NgModule({
  declarations: [
    ExperienceComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    StartComponent,
    HobbiesComponent,
  ],
  imports: [
    CommonModule,
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
      tablerScissors,
      iconoirGym,
      iconoirOpenInBrowser,
      ionCodeSlash
    }),
  ],
  exports: [
    ExperienceComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    StartComponent,
    HobbiesComponent,
  ],
})
export class ComponentsModule {}
