import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() cancelNewTask = new EventEmitter();
  @Output() onSubmitNewTask = new EventEmitter<Task>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelNewTask() {
    this.cancelNewTask.emit();
  }

  onSubmit() {    
    this.onSubmitNewTask.emit({
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    });
    this.onCancelNewTask();
  }

  // inputChange(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   console.log('this.newTask: ', this.newTask);
  //   console.log('userId', this.userId);
    
  //   this.newTask = {
  //     ...this.newTask,
  //     userId: this.userId,
  //     [target.name]: target.value
  //   }
  // }
}
