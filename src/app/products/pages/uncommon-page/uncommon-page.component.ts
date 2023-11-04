import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss'],
})
export class UncommonPageComponent {
  //i18nS elect
  public name: string = 'Jose Luis';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public changeClient(): void {
    if (this.name === 'Jose Luis') {
      this.name = 'Melissa';
      this.gender = 'female';
      return;
    }
    this.name = 'Jose Luis';
    this.gender = 'male';
  }

  //i18n Plural
  public clients: string[] = [
    'María',
    'Pedro',
    'Fermando',
    'Joselu',
    'Paula',
    'Cristina',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  public deleteClient(): void {
    this.clients.shift();
  }
  //Slice Pipe
  //JSON Ppe

  //KeyValue Pipe
  public person = {
    name: 'Joselu',
    age: 26,
    address: 'Cádiz-El Puerto De Santa María',
  };

  //Async Pipe
  public myObservabletimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, rejet) => {
    setTimeout(() => {
      resolve('Renemos data en la promesa.');
      // console.log('resolve', );
    }, 3500);
  });
}
