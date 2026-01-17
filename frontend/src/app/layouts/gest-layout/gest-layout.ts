import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { RouterModule } from "@angular/router";
import { FooterComponent } from '../../components/footer/footer'

@Component({
  selector: 'app-gest-layout',
  imports: [HeaderComponent, RouterModule, FooterComponent],
  templateUrl: './gest-layout.html',
  styleUrl: './gest-layout.scss',
})
export class GestLayout {

}
