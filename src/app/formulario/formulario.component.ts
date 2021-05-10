import { Component, Input, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevaTarea: Tarea;
  @Output() tareaCreada: EventEmitter<Tarea>;


  constructor() {
    this.nuevaTarea = {};
  }

  ngOnInit(): void {
  }

  onClick() {

  }

}
