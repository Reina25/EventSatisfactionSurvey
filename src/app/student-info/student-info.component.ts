import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../service/event-service.service';
import { Responses } from '../model/responses';

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

  eventDate:any;

  incrementedDate:any;

  userModel = new Responses(this.eventService,'','','','');
  



  ngOnInit() {
    
    // get saved student and event data from local storage
    this.studentID=this.eventService.getSavedStudentID();

    this.studentName = this.eventService.getSavedStudentName();

    this.eventID = this.eventService.getSavedEventID();

    this.eventName = this.eventService.getSavedEventName();

    this.hash = this.eventService.getSavedHash();
   
    this.faculty = this.eventService.getSavedFaculty();

    this.campus = this.eventService.getSavedCampus();

    this.eventDate=this.eventService.getSavedEventDate();

    this.incrementedDate=this.eventService.getSavedEventDate2();

  }

}
