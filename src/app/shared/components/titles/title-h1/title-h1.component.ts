import { Component, Input, OnInit } from '@angular/core';
import { ITitleh1 } from './title-h1.metadata';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.css']
})
export class TitleH1Component implements OnInit {
@Input() text= '';
@Input() type:  'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'dark';
  constructor() { }

  ngOnInit(): void {
  }

}
