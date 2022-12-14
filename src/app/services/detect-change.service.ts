import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function isEmptyInputValue(value:any):boolean{
  return value == null || value.length == 0;
 }

export class CustomValidator{
   
  static message ={
    fieldIsRequired:'Field is required',
    fieldIsInvalid:'Field is invalid'
 }




  static required(errorMessage:string | null = null): ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null =>{
      return isEmptyInputValue(control.value)?{required:true,message:errorMessage || CustomValidator.message.fieldIsRequired,}:null
    };
  }
}

export const lookupSubject1 = new BehaviorSubject<any>([])
export const lookupSubject2 = new BehaviorSubject<any>(["employee", "employee2", "employee4"])
@Injectable({
  providedIn: 'root'
})

export class DetectChangeService {

  constructor(private http: HttpClient) {

  }

  getCompanyDetails() {
    return this.http.get<any>('assets/data.json')
      .toPromise()
      .then(res => <any>res.data)
      .then(data => { return data; });
  }
  getEmployeeDetails() {
    return this.http.get<any>('assets/data.json')
      .toPromise()
      .then(res => <any>res.data2)
      .then(data => { return data; });
  }



}
