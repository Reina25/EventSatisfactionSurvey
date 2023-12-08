import { EventServiceService } from "../service/event-service.service";

export class studentData {
    // public studentID =this.eventservice.getSavedStudentID();
    // public eventID =this.eventservice.getSavedEventID();
    // public studentName =this.eventservice.getSavedStudentName();
    // public faculty =this.eventservice.getSavedFaculty();
    // public campus =this.eventservice.getSavedCampus();


    constructor(
        public studentID: string,
        public studentName: string,
        public faculty: string,
        public campus: string,

    ) { }
}
