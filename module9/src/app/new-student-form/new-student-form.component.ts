import { Component, OnInit, Input } from '@angular/core';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {

  constructor(private _myService: StudentService) { }

  @Input() firstName: string;
  @Input() lastName: string;
  onSubmit(){
    console.log("You submitted: " + this.firstName + " " + this.lastName);
    this._myService.addStudents(this.firstName ,this.lastName);
  }

  ngOnInit() {
  }

}
