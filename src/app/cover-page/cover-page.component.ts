import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../service/event-service.service';
import { eventData } from '../model/eventData';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {
  
  constructor(private eventService: EventServiceService){}


  incrementedDate: any;

  event: eventData;

  eventDateFormatted: any;

  eventDateFormatted2: any;



  ngOnInit() {

  

    this.event = {
      eventID: this.eventService.getSavedEventID(),
      eventName: this.eventService.getSavedEventName(),
      eventDate: this.eventService.getSavedEventDate(),
    };

  
     this.incrementedDate = this.eventService.addDays(this.event.eventDate,1);


  




  }
}
