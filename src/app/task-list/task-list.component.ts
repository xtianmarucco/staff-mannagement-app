import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task :  Task [] =  [
    new Task ( 'administrative','send emails to customers','In process')
    
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.task)
  }

}
