import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { User, AccessProviders } from '../../pro/access';
//import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.page.html',
  styleUrls: ['./pending-requests.page.scss'],
})
export class PendingRequestsPage implements OnInit {
  bank_id:string="";
  loan_name:string="";
  items:any;
  dat: string="";

  constructor(private router: Router,
    private storage: Storage,
    public http: HttpClient,
    private acessPr: AccessProviders,
    //private navCtrl: NavController,
    ) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans(){
    this.storage.get('storage_XXX').then((val) => {
      console.log('bank id is',  val.bank_id);
      this.bank_id=val.bank_id;

      this.http.get(AccessProviders.server+'/getLoans/'+this.bank_id).map(res => res).subscribe(res=>{ 
        this.items=res;
        console.log(this.items);
        console.log(this.items.loan_name);
        //console.log(this.bank_id);
        //console.log(res);


      });

    });
  }


  ViewLoans(event:any){

    console.log(event.target.id);
    this.dat=event.target.id;
    console.log(this.dat);
    this.storage.set('storage_loan',this.dat);
   
   /* this.storage.get("storage_loan").then((res:any)=>{
      console.log(res);
    });*/
  
    this.router.navigate(['/pending-request-loan']);
  }


}