import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent,UserComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{}