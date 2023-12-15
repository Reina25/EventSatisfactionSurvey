import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { studentData } from '../model/studentData';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http: HttpClient) { }

  eventID: any;

  eventName: any;

  startDate: any;

  incrementedDate: any;

  endDate: any;


  studentID: any;

  fullName: any;

  faculty: any;

  campus: any;

  isFilled: boolean;


  hash: any;



  private studentData: any = {}; 

  private eventData: any = {}; 



  fetchStudentData() {
    this.http.get<any>(
      'http://172.30.2.8:121/api/Student/'+ this.getStudentID()
    )
      .subscribe((response) => {
       
        const student = response[0]; 

     
        this.studentData.pidm = student.pidm;
        this.studentData.studentID = student.studentID;
        this.studentData.fullName = student.fullName;
        this.studentData.faculty = student.faculty;
        this.studentData.campus = student.campus;
        this.studentData.program = student.program;

   

        this.fullName = this.setStudentName(this.studentData.fullName);
        this.fullName = this.saveStudentName();

        this.faculty = this.setFaculty(this.studentData.faculty);
        this.faculty = this.saveFaculty();

        this.campus = this.setCampus(this.studentData.campus);
        this.campus = this.saveCampus();



      });
  }


  fetchEventData() {
    this.http.get<any>(
      ' http://172.30.2.8:121/api/Events/'+this.getEventID()
    )
      .subscribe((response) => {


        const eventData = response;

        // Access individual properties:
        this.eventData.seqID = eventData.seqID;
        this.eventData.eventName = eventData.eventName;
        this.eventData.startDate = eventData.startDate;
        this.eventData.endDate = eventData.endDate;
        this.eventData.venue = eventData.venue;
        this.eventData.notes = eventData.notes;

   

        this.eventName = this.setEventName(this.eventData.eventName);
        this.eventName = this.saveEventName();

        this.startDate = this.setEventDate(this.eventData.startDate);
        this.startDate = this.saveEventDate();

        this.endDate = this.setEventDate2(this.eventData.endDate);
        this.endDate = this.saveEventDate2();



      });
  }










  // submit student's response to database
  onSubmit(User: { studentID: string, eventID: number, answer1: string, answer2: string, answer3: string, answer4: string }) {

    console.log(User);
    const headers = new HttpHeaders({ 'myHeader': 'BAUEventSurvey' });
    this.http.post<{ name: string }>(
      'http://172.30.2.8:121/api/EventSurveyResponses',
      User, { headers: headers })
      .subscribe((res) => {
        console.log(res);
      });
  }


  // sets and gets for student and event data
  setEventID(eventID: string) {
    this.eventID = eventID;
    return eventID;
  }


  getEventID() {
    return this.eventID;
  }

  setEventName(eventName: string) {
    this.eventName = eventName;
    return eventName;
  }


  getEventName() {
    return this.eventName;
  }

  setEventDate(startDate: any) {
    this.startDate = startDate;
    return startDate;
  }


  getEventDate() {
    return this.startDate;
  }

  setEventDate2(incrementedDate: any) {
    this.incrementedDate = incrementedDate;
    return incrementedDate;
  }


  getEventDate2() {
    return this.incrementedDate;
  }

  setStudentID(studentID: string) {
    this.studentID = studentID;
    return studentID;
  }


  getStudentID() {
    return this.studentID;
  }

  setStudentName(studentName: string) {
    this.fullName = studentName;
    return studentName;
  }


  getStudentName() {
    return this.fullName;
  }

  setFaculty(faculty: string) {
    this.faculty = faculty;
    return faculty;
  }


  getFaculty() {
    return this.faculty;
  }

  setCampus(campus: string) {
    this.campus = campus;
    return campus;
  }


  getCampus() {
    return this.campus;
  }

  setHash(hash: string) {
    this.hash = hash;
    return hash;
  }


  getHash() {
    return this.hash;
  }


  // increment event date by number of days (deadline for submitting the survey response)
  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }


  // save and get saved student and event data from local storage

  saveStudentName() {
    return localStorage.setItem('studentName', this.getStudentName());
  }

  getSavedStudentName() {
    return localStorage.getItem('studentName')
  }

  saveStudentID() {
    return localStorage.setItem('studentID', this.getStudentID());
  }

  getSavedStudentID() {
    return localStorage.getItem('studentID')
  }

  saveCampus() {
    return localStorage.setItem('campus', this.getCampus());
  }

  getSavedCampus() {
    return localStorage.getItem('campus')
  }

  saveFaculty() {
    return localStorage.setItem('faculty', this.getFaculty());
  }

  getSavedFaculty() {
    return localStorage.getItem('faculty')
  }

  saveEventID() {
    return localStorage.setItem('eventID', this.getEventID());
  }

  getSavedEventID() {
    return localStorage.getItem('eventID')
  }

  saveEventName() {
    return localStorage.setItem('eventName', this.getEventName());
  }

  getSavedEventName() {
    return localStorage.getItem('eventName')
  }

  saveEventDate() {
    return localStorage.setItem('eventDate', this.getEventDate());
  }

  getSavedEventDate() {
    return localStorage.getItem('eventDate')
  }

  saveEventDate2() {
    return localStorage.setItem('eventDate2', this.getEventDate2());
  }

  getSavedEventDate2() {
    return localStorage.getItem('eventDate2')
  }

  saveHash() {
    return localStorage.setItem('hash', this.getHash());
  }

  getSavedHash() {
    return localStorage.getItem('hash')
  }


}
