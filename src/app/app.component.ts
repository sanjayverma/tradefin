import { Component, Output, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public data;
  constructor(public commonService:CommonService, private http: Http){
}
  settings = {
    columns: {
      invoiceno: {
        title: 'INVOICE No.',
      },
      pono: {
        title: 'PO NO.',
      },
      shipnoticeno: {
        title: 'SHIP NOTICE NO.',
      },
      dealer: {
        title: 'DEALER',
      },
      shipdate:{
        title:'SHIP DATE',
      },
      shipfrom:{
        title:'SHIP FROM',
      },
      shipto:{
        title:'SHIP TO',
      },
      totalamount:{
        title:'TOTAL AMOUNT',
      },
      remarks:{
        title: 'REMARKS',
      },
      status:{
        title: 'STATUS'
      }

    },
    hideSubHeader : true,
    actions: {
      position: 'right',
      columnTitle:'',
      edit:false,
      delete:false,
      custom: [{ title: `...` }]
    },
    
  };
  ngOnInit(): void{
    this.commonService.getData().subscribe(response=>{
      this.data=response;
    console.log(this.data)
    })
  }
}