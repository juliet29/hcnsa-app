import { Component, OnInit } from "@angular/core";
import * as particlesJS from "particles.js-master/particles.js";

//declare var particlesJS: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  // particle: any;
  // particlesJS = particlesJS;

  //particlesJS: any;

  ngOnInit() {
    // load particle.js for cool background
    // particlesJS.load("particles-js", "particles.json", function() {
    //   console.log("callback - particles.js config loaded");
    // });
  }
}
