import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-robotics',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CardComponent,
    CtaBannerComponent,
  ],
  templateUrl: './robotics.component.html',
  styleUrl: './robotics.component.scss',
})
export class RoboticsComponent {}
