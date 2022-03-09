import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() aoExibir = new EventEmitter<any>();

  title = 'bytebank';
  transferencia: any;

  transferir($event) {
    console.log('$event', $event)
    this.transferencia = $event;
    this.aoExibir.emit(this.transferencia);
  }
}
