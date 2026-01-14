import { Component } from '@angular/core';
import { HeroComponent } from "../components/hero/hero";
import { AboutComponent } from "../components/about/about";
import { SkillsComponent } from "../components/skills/skills";
import { ProjectsComponent } from "../components/projects/projects";
import { ExperienceComponent } from "../components/experience/experience";
import { ContactComponent } from "../components/contact/contact";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
