import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule, MatCardModule } from '@angular/material';
import { BarComponent } from 'src/app/components/charts/bar/bar.component';
import { PieComponent } from 'src/app/components/charts/pie/pie.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BarComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatCardModule
  ]
})
export class DashboardModule { }
