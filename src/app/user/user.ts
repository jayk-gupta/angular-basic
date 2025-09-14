import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // we can access the selected user property from inside the template
  selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
}
