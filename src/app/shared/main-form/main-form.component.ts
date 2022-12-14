import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.sass']
})
export class MainFormComponent implements OnInit {

  filterForm: FormGroup;

  @Input() filterFields: any[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.filterFields !== undefined) {
      this.filterForm = this.generateFilterForm();
    
    }
  }
  generateFilterForm(): FormGroup {
    const baseForm = this.fb.group({
      // filterForm: ['', Validators.required],
      
    });
    this.filterFields.forEach(field => {
      baseForm.addControl(field.key, this.generateFormGroup(baseForm, field));
    });
    console.log(baseForm);
    return baseForm;
  }
  
generateFormGroup(baseForm: FormGroup, field: { group: any[]; }): FormGroup | FormControl {
    if (field.group) {
      const formGroup = this.fb.group({});
      field.group.forEach(item => {
        
        formGroup.addControl(item.key, this.generateFormGroup(formGroup, item));
      });
      return formGroup;
    }

    return new FormControl("");
  }
  Onsubmit() {
    console.log(this.filterForm.value)
  }
}
