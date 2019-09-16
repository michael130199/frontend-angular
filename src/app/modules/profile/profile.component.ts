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

  descrip="I am a self taught web developer with a focus on front-end development. My passions include developing websites, algorithms, music, interdimensional travel and communicating with extraterrestrial beings.My realm of expertise includes, but is not limited to:"; 

  emergency_tl= 4264186858;

  extention = 2712
  email = "root@root";



  constructor() { }

  ngOnInit() {
  }

}
