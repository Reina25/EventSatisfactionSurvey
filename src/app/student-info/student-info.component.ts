import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../service/event-service.service';
import { Responses } from '../model/responses';
import { studentData } from '../model/studentData';
import { NgForm } from '@angular/forms';
import { eventData } from '../model/eventData';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  constructor(private eventService: EventServiceService){}
  

  studentID:string;

  studentName:any;

  eventID:string;

  eventName:string;

  hash:string;

  faculty:string;

  campus:string;

  eventDate= new Date();
  eventdate:string;

  incrementedDate:any;

  // userModel2 = new studentData(this.eventService.getSavedStudentID(),this.eventService.getSavedStudentName(),this.eventService.getSavedFaculty(),this.eventService.getSavedCampus());
  // userModel2 = new studentData('','','','');
  studentInfoForm: NgForm;
  student: studentData;
  event: eventData;
  



  ngOnInit() {

    this.student = {
      studentID: this.eventService.getSavedStudentID(),
      studentName: this.eventService.getSavedStudentName(),
      faculty: this.eventService.getSavedFaculty(),
      campus: this.eventService.getSavedCampus(),
    }

    this.event = {
      eventID : this.eventService.getSavedEventID(),
      eventName : this.eventService.getSavedEventName(),
      eventDate : this.eventService.getSavedEventDate(),
    };

    // this.studentInfoForm.setValue({
      // studentID: this.eventService.getSavedStudentID(),
      // studentName: this.eventService.getSavedStudentName(),
      // faculty: this.eventService.getSavedFaculty(),
      // campus: this.eventService.getSavedCampus(),

    // });



    
    // get saved student and event data from local storage
    // this.studentID=this.eventService.getSavedStudentID();

    // this.studentName = this.eventService.getSavedStudentName();

    // this.eventID = this.eventService.getSavedEventID();


    // this.hash = this.eventService.getSavedHash();
   
    // this.faculty = this.eventService.getSavedFaculty();

    // this.campus = this.eventService.getSavedCampus();


    // this.incrementedDate=this.eventService.getSavedEventDate2();

  }

}
