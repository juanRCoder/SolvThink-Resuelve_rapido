import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fechaActual: string = '';
  horaActual: string = '';
  ampm: string = '';

  semanas: string[] = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ];
  meses: string[] = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  ngOnInit() {
    this.actualizarFechaYHora();
    setInterval(() => this.actualizarFechaYHora(), 1000);
  }

  public actualizarFechaYHora() {
    const date = new Date();

    const day = date.getDate();
    const dayWeek = this.semanas[date.getDay() - 1];
    const monthOfYear = date.getMonth() + 1;

    let hour = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    this.ampm = ampm;

    // Asegúrate de ajustar la hora para que esté en formato de 12 horas
    if (hour > 12) {
      hour = hour % 12;
    }

    this.fechaActual = `${dayWeek}, ${day}/${
      monthOfYear < 10 ? `0${monthOfYear}` : `${monthOfYear}`
    }`;
    this.horaActual = `${hour < 10 ? `0${hour}` : hour}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  }
}
