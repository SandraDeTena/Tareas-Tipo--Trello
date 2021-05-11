import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../tarea.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() titulo: string;
  @Input() tareas: Tarea[];

  @Output() tareaSeleccionada: EventEmitter<number>;

  constructor() {
    this.tareaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pIndice) {
    this.tareaSeleccionada.emit(pIndice);
  }

}
