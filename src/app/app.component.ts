import { Component } from '@angular/core';
import { Tarea } from './tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareasCreadas: Tarea[];
  arrTareasTerminadas: Tarea[];

  constructor() {
    this.arrTareasCreadas = [];
    this.arrTareasTerminadas = [];
  }

  onTareaCreada($event) {
    this.arrTareasCreadas.push($event);
  }

  onTareaSeleccionada($event) {
    const tareasBorradas = this.arrTareasCreadas.splice($event, 1);
    this.arrTareasTerminadas.push(tareasBorradas[0]);
  }

}


// Cómo puedo pasar de la lista DONE otra vez a TODO - ¿Cómo se captura el OUTPUT?
// Cómo ponerlo bonito, no como YO