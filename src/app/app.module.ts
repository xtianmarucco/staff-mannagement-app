import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StaffComponent } from './staff/staff.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';

import { StaffItemComponent } from './staff/staff-list/staff-item/staff-item.component';
import { StaffDetailComponent } from './staff/staff-detail/staff-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListEditComponent } from './task-list/task-list-edit/task-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StaffComponent,
    StaffListComponent,

    StaffItemComponent,
    StaffDetailComponent,

    TaskListComponent,
    TaskListEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
