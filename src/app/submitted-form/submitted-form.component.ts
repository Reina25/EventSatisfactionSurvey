import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitted-form',
  templateUrl: './submitted-form.component.html',
  styleUrls: ['./submitted-form.component.css']
})
export class SubmittedFormComponent implements OnInit {

  // when student already submitted the response of same event, redirect to iConnect
  ngOnInit() {
    setTimeout(() => {
      window.location.href = 'https://icas.bau.edu.lb:8443/cas/login?service=https://mis.bau.edu.lb/web/v12/iconnectv12/cas/sso.aspx';
    }, 5000); 

  }
  

}
