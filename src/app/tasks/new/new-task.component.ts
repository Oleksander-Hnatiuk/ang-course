import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() cancelNewTask = new EventEmitter();
  @Output() onSubmitNewTask = new EventEmitter();
  newTask = {};

  onCancelNewTask() {
    this.cancelNewTask.emit();
  }
  onSubmit() {
    this.onSubmitNewTask.emit(this.newTask);
    this.onCancelNewTask();
  }

  inputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('this.newTask: ', this.newTask);
    console.log('userId', this.userId);
    
    this.newTask = {
      ...this.newTask,
      userId: this.userId,
      [target.name]: target.value
    }
  }
}
