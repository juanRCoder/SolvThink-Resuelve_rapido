import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  template: `
    <app-dashboard />
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'smart-Watch';
}
