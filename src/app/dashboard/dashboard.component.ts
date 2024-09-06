import { Component } from '@angular/core';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
