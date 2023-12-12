import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../service/event-service.service';
import { studentData } from '../model/studentData';
import { eventData } from '../model/eventData';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  constructor(private eventService: EventServiceService){}
  
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


  }

}
