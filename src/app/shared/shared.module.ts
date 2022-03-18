import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import * as fromComponents from './components';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...fromComponents.components, CardUserComponent],
  imports: [
   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //Permite Utilizar el Protocolo HTTP
    HttpClientModule,
    RouterModule
  ],
  exports:[
     
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     RouterModule,
     
     ...fromComponents.components
  ]
})
export class SharedModule { }
