import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Storage} from '@ionic/storage';
import { AccessProviders } from '../../pro/access';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-request-view',
  templateUrl: './new-request-view.page.html',
  styleUrls: ['./new-request-view.page.scss'],
})
export class NewRequestViewPage implements OnInit {

  appid:string="";
  items:any[];
  loan_id:string="";

  choose:string="";
  nameini:string="";

  constructor(private router: Router,
    public storage:Storage,
    private acessPr:AccessProviders,
    public http:HttpClient,
    public actionSheetController: ActionSheetController,
    public alertCtrl:AlertController,) { }

  ngOnInit() {
    this.storage.get("storage_loan").then((val)=>{
      console.log(val);
      this.loan_id=val;
    });
    this.storage.get("storage_appid").then((val)=>{
      console.log(val);
      this.appid=val;

      console.log(this.appid);
      this.http.get(AccessProviders.server+'/getFarmerDetails/'+this.appid).map(res=>res).subscribe((res:any)=>{
      console.log(res);
      this.items=res.message;
      console.log(this.items);

      this.choose=this.items[0].choose;
      this.nameini=this.items[0].nameini;

      console.log(this.choose);
    });

    });

    
  }

  viewPersonalInfo(){
    this.router.navigate(['/personal-details-view']);
  }

  viewApplicationForm(){
    this.router.navigate(['/applicationview']);
  }

  async Approve(){
    let confirm = await this.alertCtrl.create({
      header: 'Do you Approve this Application?',
      buttons:[
        {
          text: 'Yes',
        handler: () => {
          //this.postApproveData(this.loan_id, this.appid);
          this.router.navigate(['/approveloan']);
        }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  statePending(){
    this.router.navigate(['/pending-reason']);
  }

  async postApproveData(loan_id:string, appid:string){
    var date = new Date();
    console.log(date);

    let body={
      date: new Date(),
      application_id:this.appid,
      loan_id:this.loan_id,
    }
  }

}