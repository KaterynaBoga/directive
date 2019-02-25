import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
  email: string;
  id: number;
  description: string;
  is_active: boolean;
  emotion: string;
  showSad: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directory';

  public users: User[] = [
    {
      name: 'Petya',
      age: 21,
      email: 'some email',
      id: 1,
      description: 'Lorem dollar',
      is_active: false,
      emotion: 'happy',
      showSad: true,
    },
    {
      name: 'Vasya',
      age: 15,
      email: 'some email2',
      id: 12,
      description: 'Lorem dolla2r',
      is_active: true,
      emotion: 'lucky',
      showSad: true,
    },
    {
      name: 'Jhon',
      age: 221,
      email: 'some emai4l',
      id: 41,
      description: 'Lorem do44llar',
      is_active: true,
      emotion: 'sad',
      showSad: true,
    }
  ];
}
