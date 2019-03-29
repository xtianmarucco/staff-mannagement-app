import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model'

@Component({
  selector: 'app-info-member',
  templateUrl: './info-member.component.html',
  styleUrls: ['./info-member.component.css']
})
export class InfoMemberComponent implements OnInit {
  task :  Task [] =  [
new Task ( ' administrative ', ' send emails to customers ','In process')

  ];

  constructor() { }

  ngOnInit() {
  }

}
