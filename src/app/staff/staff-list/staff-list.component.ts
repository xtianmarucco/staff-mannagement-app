import { Component, OnInit } from '@angular/core';
import { Member } from '../staff.model';
@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  members: Member[];

  constructor() {
    this.members = [

      new Member('Matt', 'jonson', '32', 'evil corp',
        'meksikan', 'Marketing', 'universitary student', 'hardworking', 'DB engineer',
        'https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg'
      ),
      new Member('Peter', 'parker', '32', 'evil corp',
      'meksikan', 'network admin', 'universitary student', 'hardworking', 'DB engineer',
      'https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32)_gr.jpg'
    )
    ];

  }

  ngOnInit() {
    console.log(this.members)
  }
}