import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar";
import { TopBar } from "../../components/top-bar/top-bar";
import { RouterModule } from "@angular/router";
import { Dashboard } from "../../dashboard/dashboard";

@Component({
  selector: 'app-app-layout',
  imports: [SidebarComponent, TopBar, RouterModule, Dashboard],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})
export class AppLayout {

}
