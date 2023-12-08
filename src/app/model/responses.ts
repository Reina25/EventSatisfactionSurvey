import { EventServiceService } from "../service/event-service.service";

export class Responses {

    // public studentID =this.eventservice.getSavedStudentID();
    // public eventID =this.eventservice.getSavedEventID();
    // public studentName =this.eventservice.getSavedStudentName();
    // public faculty =this.eventservice.getSavedFaculty();
    // public campus =this.eventservice.getSavedCampus();

    constructor(
       private eventservice : EventServiceService,
       public radios1 : string,
       public radios2 : string,
       public radios3 : string,
       public suggestions : string,

    ){}
}
