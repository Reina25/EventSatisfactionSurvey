import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventServiceService } from '../service/event-service.service';
import { Responses } from '../model/responses';
import { studentData } from '../model/studentData';
import { eventData } from '../model/eventData';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  constructor(private eventService: EventServiceService){}

  studentName:any;

  studentFirstName:any;

  eventName:string;
  
  submitted:boolean=false;

  userModel = new Responses(this.eventService,'','','','');
  // userModel2 = new studentData(this.eventService.getSavedStudentID(),this.eventService.getSavedStudentName(),this.eventService.getSavedFaculty(),this.eventService.getSavedCampus());
  // userModel3 = new eventData(this.eventService.getSavedEventID(),this.eventService.getSavedEventName(),this.eventService.getSavedEventDate())

  surveyForm: NgForm;

  student: studentData;
  event: eventData;

  noShow:boolean=false;


  q1:string="1. How would you rate your overall experience of the event?";
  q2:string="2. How satisfied were you with the overall organization of the event?";
  q3:string="3. Would you recommend BAU events to your friends?";
  q4:string="4. Please provide any additional comments or suggestions for improvement:"


  selectedOption1:any 
  savedOption1:any;

  selectedOption2:any 
  savedOption2:any;

  selectedOption3:any 
  savedOption3:any;

  selectedOption4:any 
  savedOption4:any;




ngOnInit() {

  // get saved student and event data from saved data in local storage
  // this.studentName=this.eventService.getSavedStudentName();

  // this.eventName=this.eventService.getSavedEventName();

  this.student = {
    studentID: this.eventService.getSavedStudentID(),
    studentName: this.eventService.getSavedStudentName(),
    faculty: this.eventService.getSavedFaculty(),
    campus: this.eventService.getSavedCampus(),
  }

  this.event = {
    eventID:this.eventService.getSavedEventID(),
    eventName:this.eventService.getSavedEventName(),
    eventDate:this.eventService.getSavedEventDate(),
  }


  this.studentName=this.student.studentName;

  // get the first name only from full name of student
  this.studentFirstName=this.studentName.substring(0, this.studentName.indexOf(' '));


 // save student response of survey (if changed)
  this.savedOption1 = sessionStorage.getItem('selectedOption1');

  if (this.savedOption1) {
    this.selectedOption1 = this.savedOption1;
    this.saveSelection1(this.selectedOption1);

  }

  this.savedOption2 = sessionStorage.getItem('selectedOption2');

  if (this.savedOption2) {
    this.selectedOption2 = this.savedOption2;
    this.saveSelection2(this.selectedOption2);
    
  }

  this.savedOption3 = sessionStorage.getItem('selectedOption3');

  if (this.savedOption3) {
    this.selectedOption3 = this.savedOption3;
    this.saveSelection3(this.selectedOption3);
  
  }

  this.savedOption4 = sessionStorage.getItem('selectedOption4');

  if (this.savedOption4) {
    this.selectedOption4 = this.savedOption4;
    this.saveSelection4(this.selectedOption4);
   
  }

}



// save student response of survey (if refreshed or traversed from page to page)
saveSelection1(newValue: string) {
  this.selectedOption1=newValue;
  sessionStorage.setItem('selectedOption1', this.selectedOption1);
}

saveSelection2(newValue: string) {
  this.selectedOption2=newValue;
  sessionStorage.setItem('selectedOption2', this.selectedOption2);
}
saveSelection3(newValue: string) {
  this.selectedOption3=newValue;
  sessionStorage.setItem('selectedOption3', this.selectedOption3);
}
saveSelection4(newValue: string) {
  this.selectedOption4=newValue;
  sessionStorage.setItem('selectedOption4', this.selectedOption4);
}

// submit student response and redirect to iConnect once done
  onSubmit(User: {studentID:string, eventID:string, radios1:string,radios2:string,radios3:string,suggestions: string}){
    this.submitted=true;
   
    this.eventService.onSubmit(User);

    setTimeout(() => {
      window.location.href = 'https://icas.bau.edu.lb:8443/cas/login?service=https://mis.bau.edu.lb/web/v12/iconnectv12/cas/sso.aspx';
    }, 5000); 

  }


}
