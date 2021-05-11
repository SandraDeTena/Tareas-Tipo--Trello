import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from '../tarea.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevaTarea: Tarea;

  @Output() tareaCreada: EventEmitter<Tarea>;

  constructor() {
    this.nuevaTarea = {};
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = {};
  }

}
