import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bytebank';
  transferencias: { valor: number, destino: number }[] = [];

  transferir($event) {
    console.log('$event', $event);
    const transferencia = { ...$event, data: new Date() }
    this.transferencias.push(transferencia);
  }
}
