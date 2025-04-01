import { Component, computed, Input, signal, SimpleChanges } from '@angular/core';
import { dummyTasks } from '../mocks/tasks';
import { TaskComponent } from "./task/task.component";
import { User } from '../user/user.model';
import { NewTaskComponent } from './new/new-task.component';
import { Task } from './tasks.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input() user!: User;
  userSignal = signal<User | null>(null);
  creationMode = false;
  allTasks = signal<Array<Task>>(dummyTasks);

  log(value: any): void {
    console.log(value);
  }

  userTasks = computed(() => this.allTasks().filter(t => {    
    return t.userId === this.userSignal()?.id;
  }))

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.userSignal.set(changes['user'].currentValue);
    }
    if (changes['allTasks']) {
      console.log('ALL', changes['allTasks'].currentValue);
    }
  }

  completeCallback(id: string) {
    console.log('REMOVE id', id)
    this.allTasks.set(
      this.allTasks().filter(t => t.id !== id)
    );
  }

  onToggleCrationMode() {
    this.creationMode = !this.creationMode;
  }

  saveNewTask(data: Task) {
    this.allTasks.set([
      ...this.allTasks(),
      {
        id: `t${this.allTasks().length + 1}`,
        ...data,
      }
    ])
  }
}
