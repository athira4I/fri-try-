import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for directives like *ngFor

@Component({
  selector: 'app-alert',
  standalone: true,  // Mark component as standalone
  imports: [CommonModule],  // Import CommonModule for *ngFor and *ngIf
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  alerts = [
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'suspicious', tagColor: 'orange' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'scanner', tagColor: 'lightblue' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'behavior anomaly', tagColor: 'purple' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'correlation', tagColor: 'green' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'suspicious', tagColor: 'orange' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'scanner', tagColor: 'lightblue' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'behavior anomaly', tagColor: 'purple' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'correlation', tagColor: 'green' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'suspicious', tagColor: 'orange' },
    { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod', ip: '223.2662.12', tag: 'scanner', tagColor: 'lightblue' },
  ];
}
