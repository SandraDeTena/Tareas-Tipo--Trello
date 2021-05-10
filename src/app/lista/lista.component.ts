import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() titulo: string;
  @Input() tareas: Tareas[];

  @Output() tareaSeleccionada: EventEmitter<number>;

  constructor() {
    this.tareaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pIndice) {
    this.tareaSeleccionada.emit(pIndice);
  }
  onTareaSeleccionada($event) {
    const tareasBorradas = this.arrTareasCreadas.splice($event, 1);
    this.arrTareasTerminadas.push(tareasBorradas[0]);

  }
}

//Cómo puedo pasar de la Lista DONE a ALL. Hay que pensar cómo se captura el output.
//¿Cómo ponerlo bonito con CSS?

