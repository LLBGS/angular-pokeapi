import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from 'src/app/components/card/card.component';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { FiltersModule } from 'src/app/components/filters/filters.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, CardComponent, DisplayComponent],
  imports: [CommonModule, DashboardRoutingModule, FiltersModule],
})
export class DashboardModule {}
