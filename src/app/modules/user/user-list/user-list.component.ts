import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { ITitleh1 } from '@shared/components/titles/title-h1/title-h1.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: ICardUser[] = [
    {
    id:1,  
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: 'Pedro de la Rosa',
    age: 20,
    description: 'Desarrollador FullSatck'
   },
   {
    id:2,
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: 'Hector Ocampos',
    age: 22,
    description: 'Desarrollador FullSatck'
   },
   {
    id:3,
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: 'Alberto Barrios',
    age: 23,
    description: 'Desarrollador FullSatck'
  },
  {
    id:4,
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: 'Sergio Rojas',
    age: 25,
    description: 'Desarrollador FullSatck'
  },
  {
    id:5,
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: 'Miguel Romero',
    age: 30,
    description: 'Desarrollador FullSatck'
  },
  {
    id:6,
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: 'Esteban Ocon',
    age: 28,
    description: 'Desarrollador FullSatck'
  },
  {
    id:7,
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: 'Ariel Rojas',
    age: 21,
    description: 'Desarrollador FullSatck'
  },
  {
    id:8,
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: 'Sebastian Ferreira',
    age: 18,
    description: 'Desarrollador FullSatck'
  },
  {
    id:9,
    avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    name: 'Berta Rojas',
    age: 30,
    description: 'Desarrollador FullSatck'
  }

  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}
