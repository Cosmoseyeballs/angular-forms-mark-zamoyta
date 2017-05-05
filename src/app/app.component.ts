import { Component } from '@angular/core';
import { Employee } from "app/models/employee.model";
import { FormPoster } from "services/form-poster.services";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
startDate:Date;
public mytime:Date = new Date();
singleModel = "off";
}
