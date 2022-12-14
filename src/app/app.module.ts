import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetectChangeService } from './services/detect-change.service';
import { MainFormComponent } from './shared/main-form/main-form.component';


import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SharedModule,
    InputTextModule,
    InputTextareaModule,
    MultiSelectModule,
    CascadeSelectModule,
    InputNumberModule,
    InputMaskModule,
    DropdownModule,
    ChipsModule,
    CalendarModule,
    AutoCompleteModule,
    CardModule,
    CheckboxModule
  ],
  providers: [DetectChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
