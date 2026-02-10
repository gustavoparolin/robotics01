import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';

@Component({
  selector: 'app-renewal',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CardComponent,
    AccordionComponent,
  ],
  templateUrl: './renewal.component.html',
  styleUrl: './renewal.component.scss',
})
export class RenewalComponent {}
