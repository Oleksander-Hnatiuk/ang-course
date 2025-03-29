import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // // @Input({ required: true}) name!: string;
  // name = input.required<string>();
  // @Input() avatar?: string; // ? - tells typescript that the value can be undefined
  // @Input({ required: true}) id!: string;
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter();

  get imagePath() {
    return `assets/users/${this.user.avatar}`
  }

  onClickUser() {
    this.select.emit(this.user.id)
  }
}
