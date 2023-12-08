import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../service/event-service.service';
import { eventData } from '../model/eventData';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {
  
  constructor(private eventService: EventServiceService){}
  


  eventID:string;

  eventName:string;

  eventDate=new Date();

  incrementedDate:any;


  // userModel3 = new eventData(this.eventService.getSavedEventID(),this.eventService.getSavedEventName(),this.eventService.getSavedEventDate());



  ngOnInit() {

    this.eventID=this.eventService.getSavedEventID(); 

    this.eventName = this.eventService.getSavedEventName();

    this.incrementedDate=this.eventService.addDays(this.eventDate,1);

  }
}
