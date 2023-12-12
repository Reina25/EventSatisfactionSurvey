import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Responses } from '../model/responses';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http: HttpClient) {}

  eventID:string;

  eventName:string;

  studentID:string;

  studentName:string;

  faculty:string;

  campus:string;

  hash:string;

  eventDate:any;
  
  incrementedDate:any;

  surveyForm: NgForm;

 



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

  setEventDate(eventDate: any) {
    this.eventDate = eventDate;
    return eventDate;
  }


  getEventDate() {
    return this.eventDate;
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
    this.studentName = studentName;
    return studentName;
  }


  getStudentName() {
    return this.studentName;
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


  // submit student's response to database
  onSubmit(User: {studentID:string , eventID:string , radios1:string , radios2:string , radios3:string , suggestions: string}){

    console.log(User);
    const headers = new HttpHeaders({'myHeader': 'BAUEventSurvey'});
    this.http.post<{name: string}>(
        'https://eventsurvey-a3ee1-default-rtdb.firebaseio.com/responses.json', 
        User, {headers: headers})
        .subscribe((res) => {
            console.log(res);
        });
      }

  // save and get saved student and event data from local storage

      saveStudentName(){
       return localStorage.setItem('studentName',this.getStudentName());
      }

      getSavedStudentName(){
       return localStorage.getItem('studentName')
      }

      saveStudentID(){
        return localStorage.setItem('studentID',this.getStudentID());
       }
 
       getSavedStudentID(){
        return localStorage.getItem('studentID')
       }

       saveCampus(){
        return localStorage.setItem('campus',this.getCampus());
       }
 
       getSavedCampus(){
        return localStorage.getItem('campus')
       }

       saveFaculty(){
        return localStorage.setItem('faculty', this.getFaculty());
       }
 
       getSavedFaculty(){
        return localStorage.getItem('faculty')
       }

       saveEventID(){
        return localStorage.setItem('eventID',this.getEventID());
       }
 
       getSavedEventID(){
        return localStorage.getItem('eventID')
       }

       saveEventName(){
        return localStorage.setItem('eventName',this.getEventName());
       }
 
       getSavedEventName(){
        return localStorage.getItem('eventName')
       }

       saveEventDate(){
        return localStorage.setItem('eventDate',this.getEventDate());
       }
 
       getSavedEventDate(){
        return localStorage.getItem('eventDate')
       }

       saveEventDate2(){
        return localStorage.setItem('eventDate2',this.getEventDate2());
       }
 
       getSavedEventDate2(){
        return localStorage.getItem('eventDate2')
       }

       saveHash(){
        return localStorage.setItem('hash',this.getHash());
       }
 
       getSavedHash(){
        return localStorage.getItem('hash')
       }


      fetchStudentData(){
        const header = new HttpHeaders()
  
        return this.http.get<{[key: string]: Responses}>('https://library-eff58-default-rtdb.firebaseio.com/responses/'+this.getSavedStudentID()+'.json', 
        {'headers' : header,})
        .pipe(map((res) => {
            const studentPersonalData = [];
            for(const key in res){
                if(res.hasOwnProperty(key)){
                  studentPersonalData.push({...res[key], id: key})
                }
            }
            return studentPersonalData;
        }))
       
    }




    fetchEventData(){
      const header = new HttpHeaders()

      return this.http.get<{[key: string]: Responses}>('https://library-eff58-default-rtdb.firebaseio.com/responses/'+this.getSavedEventID()+'.json', 
      {'headers' : header,})
      .pipe(map((res) => {
          const eventData = [];
          for(const key in res){
              if(res.hasOwnProperty(key)){
                eventData.push({...res[key], id: key})
              }
          }
          return eventData;
      }))
     
  }


  

  
}
