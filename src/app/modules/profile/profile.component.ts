import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name = "Michael";
  last_name =  "Urbina";

  position = "";
  alias = "Desarrollador";



  constructor() { }

  ngOnInit() {
  }

}
