import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SmoothedLineChartComponent } from "./smoothed-line-chart/smoothed-line-chart.component";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TrafficOrganizationComponent } from "./traffic-organization/traffic-organization.component";
import { OrganisationStatsComponent } from "./organisation-stats/organisation-stats.component";
import {  TrafficSourceTypeComponent } from "./traffic-source/traffic-source.component";
import { TodaysLogComponent } from "./todays-log/todays-log.component";
import { TrafficRecognizedComponent } from "./traffic-recognized/traffic-recognized.component";
import { ThreatCategoryComponent } from "./threat-category/threat-category.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AlertComponent } from "./alert/alert.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideNavComponent, SmoothedLineChartComponent, BarChartComponent, TrafficOrganizationComponent, OrganisationStatsComponent, TrafficSourceTypeComponent, TodaysLogComponent, TrafficRecognizedComponent, ThreatCategoryComponent, DashboardComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
