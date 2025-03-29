import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onClickCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
