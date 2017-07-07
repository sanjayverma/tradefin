import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonService } from './service/data.service';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
