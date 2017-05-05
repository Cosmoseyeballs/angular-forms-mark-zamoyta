import { Component, OnInit } from '@angular/core';
import { Employee } from "app/models/employee.model";
import { FormPoster } from "services/form-poster.services";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'form-start',
  templateUrl: './formstart.component.html',
  styleUrls: ['./formstart.component.css']
})
export class FormstartComponent implements OnInit {

  ngOnInit() {
  }


 languages = [];
  model = new Employee("Darla","Smith", true, "","default")
  primaryLanguageError = false;

  constructor(private formPoster:FormPoster){
    this.formPoster.getLanguages().subscribe(
      data=>this.languages = data.languages,
      err=>console.log('get error', err)
    )
  }

  submitForm(form:NgForm){
    console.log(this.model)
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.primaryLanguageError) {
      return
    }
    this.formPoster.postEmployeeForm(this.model)
    .subscribe(
      data=>console.log("success",data),
      err=>console.log("error",err)
    )
  }

  validatePrimaryLanguage(value){
    if(value === "default")
      this.primaryLanguageError = true;
    else
      this.primaryLanguageError = false;
  }

}
