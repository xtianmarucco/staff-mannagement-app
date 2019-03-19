import { Component, OnInit } from '@angular/core';
import { Member } from '../staff.model';
@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
 Members: Member  [] = [
   new Member( 'asdas','asdas','asdas','asdasd',
   'asdad','asdasd','sdasdas','asdas','asdasd','asdas')

   
 ];


  constructor() { }

  ngOnInit() {
  }

}
console.log(Member)
