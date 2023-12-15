import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../service/event-service.service';
import { studentData } from '../model/studentData';
import { eventData } from '../model/eventData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  constructor(private eventService: EventServiceService, private http: HttpClient){}
  
  student: studentData;

  event: eventData;

  studentData: any;

  fullName: string;

  eventDateFormatted: any;
  

  ngOnInit() {

 


    this.student = {
      studentID: this.eventService.getSavedStudentID(),
      fullName: this.eventService.getSavedStudentName(),
      faculty: this.eventService.getSavedFaculty(),
      campus: this.eventService.getSavedCampus(),
    };

    this.event = {
      eventID: this.eventService.getSavedEventID(),
      eventName: this.eventService.getSavedEventName(),
      eventDate: this.eventService.getSavedEventDate(),
    };




  }



}
