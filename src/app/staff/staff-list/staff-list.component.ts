import { Component, OnInit } from '@angular/core';
import { Member } from '../staff.model';
@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
 Members: Member  [] = [
   new Member( 'sergio','lamberti','32','evil corp',
   'meksikan','big boss','universitary student','hardworking','DB engineer','https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg')

   
 ];


  constructor() { }

  ngOnInit() {
  }

}
console.log(Member)
