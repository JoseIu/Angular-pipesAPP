import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.scss'],
})
export class BasicsPagesComponent {
  public nameLower: string = 'jose luis';
  public nameUppe: string = 'JOSE LUIS';
  public fullName: string = 'JoSe LuIs';

  public customDate: Date = new Date();
}
