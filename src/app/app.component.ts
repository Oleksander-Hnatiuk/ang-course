import { Component, Input, signal } from '@angular/core';
import { NgFor } from '@angular/common'; 

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './mocks/users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  users = DUMMY_USERS;

  selectedUser = signal<User | null>(null);
  


  onSelectUser(id:string) {
    console.log('id: ', id);
    
    const foundUser = DUMMY_USERS.find(u => u.id === id);
    
    if (foundUser) {
      this.selectedUser.set(foundUser);
    }
  }
}
