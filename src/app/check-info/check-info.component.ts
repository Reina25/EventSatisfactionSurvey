import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventServiceService } from '../service/event-service.service';
import { Md5 } from 'ts-md5';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { studentData } from '../model/studentData';
import { NgIf } from '@angular/common';

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

  isFilled: boolean;







  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventServiceService, private http: HttpClient) { }



  fetchFilled() {

    
    this.http.get<any>(
      'http://172.30.2.8:121/api/EventSurveyResponses/'+this.eventService.getEventID()+'/'+this.eventService.getStudentID()
    )
      .subscribe((response) => {


        if (response.length === 0) {
          this.isFilled = false;
          console.log('EMPTY');
          this.eventService.fetchStudentData();
          this.eventService.fetchEventData();

          setTimeout(() => {
            this.router.navigate(['/coverpage']);
          }, 1000); 

        }else if (response.length !==0){
          this.isFilled = true;
          console.log("FILLED");
          this.router.navigate(['/formsubmitted']);

        }else{
          console.log("ERROR");
          this.router.navigate(['/pagenotfound']);
        }
          


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






    // save student and event data from the set data above

    this.studentID = this.eventService.saveStudentID();

    this.eventID = this.eventService.saveEventID();

    this.hash = this.eventService.saveHash();







    // undergo the md5 hashing
    const completeData: string = this.eventService.getStudentID() + this.eventService.getEventID() + this.salt;


    this.md5.appendStr(completeData);

    this.hash2 = this.md5.end();




    if (this.eventService.getHash() == this.hash2) {

      // fetch student data and event data if hashing was success


      this.fetchFilled();


    } else {
      this.router.navigate(['/pagenotfound']);
    }



  }
















}
