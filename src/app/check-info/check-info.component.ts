import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventServiceService } from '../service/event-service.service';
import { Md5 } from 'ts-md5';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { studentData } from '../model/studentData';

@Component({
  selector: 'app-check-info',
  templateUrl: './check-info.component.html',
  styleUrls: ['./check-info.component.css']
})
export class CheckInfoComponent implements OnInit {

  // set data from url
  // get data that is set and save it in local storage
  // get saved data that is saved in local storage
  // display it where necessary

  md5 = new Md5();

  salt: string = "salt";

  hash2: any;

  studentID: any;

  eventID: any;

  hash: any;

  fullName: any;

  eventName: any;

  eventDate: any = new Date();

  faculty: any;

  campus: any;


  student: studentData;





  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventServiceService, private http: HttpClient) { }




  private studentData: any = {}; // Define an object to store student data

  private fetchdata() {
    this.http.get<any>(
      'http://172.30.2.8:121/api/Student/stdid?stdid='+this.eventService.getStudentID()
    )
      .subscribe((response) => {
       
        const student = response[0]; 

     
        this.studentData.pidm = student.pidm;
        this.studentData.studentID = student.studentID;
        this.studentData.fullName = student.fullName;
        this.studentData.faculty = student.faculty;
        this.studentData.campus = student.campus;
        this.studentData.program = student.program;

   

        this.fullName = this.eventService.setStudentName(this.studentData.fullName);
        this.fullName = this.eventService.saveStudentName();

        this.faculty = this.eventService.setFaculty(this.studentData.faculty);
        this.faculty = this.eventService.saveFaculty();

        this.campus = this.eventService.setCampus(this.studentData.campus);
        this.campus = this.eventService.saveCampus();


        this.fullName = this.studentData.fullName;


      });
  }



  ngOnInit() {



    // to clear any saved data for new data to come 
    window.sessionStorage.clear();

    window.localStorage.clear();





    // set student and event data from url parameters
    this.studentID = this.eventService.setStudentID(this.route.snapshot.queryParamMap.get("studentID"));


    this.eventID = this.eventService.setEventID(this.route.snapshot.queryParamMap.get("eventID"));

    this.hash = this.eventService.setHash(this.route.snapshot.queryParamMap.get("hash"));

    this.eventName = this.eventService.setEventName(this.route.snapshot.queryParamMap.get("eventName"));

    this.eventDate = this.eventService.setEventDate(this.eventDate);







    // save student and event data from the set data above

    this.studentID = this.eventService.saveStudentID();

    this.eventID = this.eventService.saveEventID();

    this.hash = this.eventService.saveHash();

    this.eventName = this.eventService.saveEventName();

    this.eventDate = this.eventService.saveEventDate();








    // undergo the md5 hashing
    const completeData: string = this.eventService.getStudentID() + this.eventService.getEventID() + this.salt;


    this.md5.appendStr(completeData);

    this.hash2 = this.md5.end();


    if (this.eventService.getHash() == this.hash2) {

      this.fetchdata();



      if (this.eventService.getStudentID() == '321') {


        this.router.navigate(['/formsubmitted']);

      } else {
        this.router.navigate(['/coverpage']);
      }

    } else {
      this.router.navigate(['/pagenotfound']);
    }



  }
















}
