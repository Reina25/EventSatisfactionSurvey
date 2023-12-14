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

  // allData: studentData[] = [];

  student: studentData;
  errorMessage!: string;

  allData = null;

  countryData = null;


  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventServiceService, private http: HttpClient) { }

  // getData() {
  //   this.eventService.getData().subscribe(data => {
  //     this.allData = data;
  //   });
  // }

  data: any[] = [];



  

  fetchData(): void {
    this.eventService.getData()
      .subscribe(
        (response) => {
          this.data = response;
          console.log('Data:', this.data);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }


  ngOnInit() {

    this.fetchData();


//     this.eventService.getCountries().subscribe((data)=>{
//       this.countryData = data;
// });

    // to clear any saved data for new data to come 
    window.sessionStorage.clear();

    window.localStorage.clear();


    // fetch student data and event data from id
    


    // set student and event data from url parameters
    this.eventID = this.eventService.setStudentID(this.route.snapshot.queryParamMap.get("studentID"));

  

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


      // this.eventService.getData().subscribe({
        
      //   next: (data) => {
      //     this.allData = data;
      //     console.log(this.allData);
      //   },
      //   error: (error) => {
      //     this.errorMessage = error;
      //   },
      // });


      // this.eventService.getData().subscribe((data)=>{
      //   this.allData = data;
      //  });


      if (this.eventService.getStudentID() == '321') {


        this.router.navigate(['/formsubmitted']);

      } else {
        this.router.navigate(['/coverpage']);
      }

    } else {
      this.router.navigate(['/pagenotfound']);
    }



  }

  // fetchdata(){
  //   this.http.get<{[key: string]:studentData}>(
  //     'http://172.30.2.8:121/api/Student/stdid?stdid=202100579'
 
  //   )
  //     .pipe(map((response) => {
  //       const data = [];
       
  //       for(const key in response){
  //         if(response.hasOwnProperty(key)){
  //           data.push({...response[key], id:key})
           

  //         }
          
  //       }
  //       return data;
  //     }))
  //     .subscribe((data) => {
  //       this.alldata=data;
        
    
  //     })
  // }


 


 








}
