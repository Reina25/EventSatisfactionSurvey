import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventServiceService } from '../service/event-service.service';
import { Md5 } from 'ts-md5';

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

  studentName: any;

  eventName: any;

  eventDate: any = new Date();

  faculty: any;

  campus: any;


  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventServiceService) { }




  ngOnInit() {

    // to clear any saved data for new data to come 
    window.sessionStorage.clear();

    window.localStorage.clear();


    // fetch student data and event data from id
    this.fetchStudentData();
    
    this.fetchEventData();



    // set student and event data from url parameters
    this.studentID = this.eventService.setStudentID(this.route.snapshot.queryParamMap.get("studentID"));

    this.eventID = this.eventService.setEventID(this.route.snapshot.queryParamMap.get("eventID"));

    this.hash = this.eventService.setHash(this.route.snapshot.queryParamMap.get("hash"));

    this.eventName = this.eventService.setEventName(this.route.snapshot.queryParamMap.get("eventName"));

    this.studentName = this.eventService.setStudentName(this.route.snapshot.queryParamMap.get("studentName"));

    this.eventDate = this.eventService.setEventDate(this.eventDate);

    this.faculty = this.eventService.setFaculty(this.route.snapshot.queryParamMap.get("faculty"));

    this.campus = this.eventService.setCampus(this.route.snapshot.queryParamMap.get("campus"));



    // save student and event data from the set data above
    this.studentID = this.eventService.saveStudentID();

    this.eventID = this.eventService.saveEventID();

    this.hash = this.eventService.saveHash();

    this.eventName = this.eventService.saveEventName();

    this.studentName = this.eventService.saveStudentName();

    this.faculty = this.eventService.saveFaculty();

    this.campus = this.eventService.saveCampus();

    this.eventDate = this.eventService.saveEventDate();




    // undergo the md5 hashing
    const completeData: string = this.eventService.getStudentID() + this.eventService.getEventID() + this.salt;


    this.md5.appendStr(completeData);

    this.hash2 = this.md5.end();


    if (this.eventService.getHash() == this.hash2) {


      if (this.eventService.getStudentID() == '321') {
        this.router.navigate(['/formsubmitted']);

      } else {
        this.router.navigate(['/coverpage']);
      }

    } else {
      this.router.navigate(['/pagenotfound']);
    }



  }

  fetchStudentData() {
    this.eventService.getStudentData().subscribe(
      (data: any) => {
        this.studentID = data.studentId;
        this.studentName = data.studentName;
        this.campus = data.campus;
        this.faculty = data.faculty;
      },
      (error: any) => {
        console.error('Error fetching student data:', error);
      }
    );
  }


  fetchEventData() {
    this.eventService.getEventData().subscribe(
      (data: any) => {
        this.eventID = data.eventId;
        this.eventName = data.eventName;
        this.eventDate = data.eventDate;
      },
      (error: any) => {
        console.error('Error fetching event data:', error);
      }
    );
  }

}
