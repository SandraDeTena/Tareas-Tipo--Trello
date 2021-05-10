import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
    this.arrTareasCreadas = [];
    this.arrTareasTerminadas = [];
  }

  onTareaCreada($event) {
    this.arrTareasCreadas.push($event);
  }
}
