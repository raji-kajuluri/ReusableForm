import { Component } from '@angular/core';
import { DetectChangeService } from './services/detect-change.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // data: any
  data = [
    {
      key: "common",
      title: "Main fields",
      group: [
        {
          key: "individualPerson",
          title: "Physical Person",
          group: [
            {
              key: "firstname",
              title: "First Name",
              type: "text",
              name:"firstname"
            },
            {
              key: "lastname",
              title: "Last Name",
              type: "text"
            },
            {
              key: "phone",
              title: "Phone Number",
              type: "text"
            },
            {
              key: "citizenshipCountry",
              title: "Country",
              type: "text"
            }
          ]
        },
        {
          key: "legalPerson",
          title: "Legal Person",
          group: [
            {
              key: "brandname",
              title: "Brand Name",
              type: "text"
            },
            {
              key: "fullname",
              title: "Full Name",
              type: "text"
            },
            {
              key: "phone",
              title: "Phone",
              type: "text"
            },
            {
              key: "registrationCountry",
              title: "Country",
              type: "text"
            }
          ]
        }
      ]
    }
  ];

  title = 'reusable-form-task';
  constructor(private dc: DetectChangeService) { }
  ngOninit() {

  }
  Onemployess() {
    console.log("clicked on emplyees");
    this.dc.getCompanyDetails().then(x => {
      console.log(x);
      this.data = x
    })
   }
  OnCompany() {
    console.log("clicked on company");
    this.dc.getEmployeeDetails().then(x => {
      console.log(x);
      this.data = x

    })
  }
}
