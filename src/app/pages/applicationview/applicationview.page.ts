import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { ToastController,LoadingController,AlertController,NavController } from '@ionic/angular';
import {User, AccessProviders } from '../../pro/access';

@Component({
  selector: 'app-applicationview',
  templateUrl: './applicationview.page.html',
  styleUrls: ['./applicationview.page.scss'],
})
export class ApplicationviewPage implements OnInit {

  hideMe=false;
  hidepup=false;
  hideban=false;
  hidesp=false;
  hidepro=false;
  hidewit=false;

  type:string="";

  items:any;
  repo:any;
  acc:any;

  nic:string="";

  one:string="";
  app_id:number;
  icon:string="chevron-down-outline";
  icon2:string="chevron-down-outline";
  icon3:string="chevron-down-outline";
  icon4:string="chevron-down-outline";
  icon5:string="chevron-down-outline";
  icon6:string="chevron-down-outline";
  constructor(
    private router:Router,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private acessPr:AccessProviders,
    private storage:Storage,
    private navCtrl:NavController,
    public http:HttpClient,
  ) { }

  ngOnInit() {

    this.storage.get('storage_appid').then((val) => {
      this.app_id=val;
      console.log(this.app_id);



  console.log(this.app_id);
  this.http.get(AccessProviders.server+'/getapplicantdetails/'+this.app_id).map(res => res).subscribe((res:any)=>{   
    console.log(this.app_id);
    console.log(res.message);
    this.items=res.message;

    //this.nic=this.items[0].nic;
   // console.log(this.nic);

  });
});

}
set(){
  console.log(this.app_id);
  if(this.hideMe==false){
    this.icon="chevron-up-outline";
    this.hideMe=true;
  }

  else{
    this.hideMe=false;
    this.icon="chevron-down-outline";
  }
  this.hidepup=false;
  this.icon2="chevron-down-outline";
  this.hideban=false;
  this.icon4="chevron-down-outline";
  this.hidesp=false;
  this.icon3="chevron-down-outline";
  this.hidepro=false;
  this.icon5="chevron-down-outline";
  this.hidewit=false;
  this.icon6="chevron-down-outline";
}

setLoanPurposes(){
  console.log(this.app_id);
  if(this.hidepup==false){
    this.icon="chevron-up-outline";
    this.hidepup=true;
  }

  else{
    this.hidepup=false;
    this.icon2="chevron-down-outline";
  }

  this.hideMe=false;
  this.icon="chevron-down-outline";
  this.hideban=false;
  this.icon4="chevron-down-outline";
  this.hidesp=false;
  this.icon3="chevron-down-outline";
  this.hidepro=false;
  this.icon5="chevron-down-outline";
  this.hidewit=false;
  this.icon6="chevron-down-outline";

  this.type="agri";
  this.http.get(AccessProviders.server+'/getreports/'+this.app_id+'/'+this.type).map(res => res).subscribe((res:any)=>{
    console.log(res);
    this.repo=res.agr_images;
    //this.one=this.repo[0].agr_images;
    //console.log(this.one);
  });
}

setSpouseDetails(){
  if(this.hidesp==false){
    this.icon3="chevron-up-outline";
    this.hidesp=true;
  }

  else{
    this.hidesp=false;
    this.icon3="chevron-down-outline";
  }

  this.hideMe=false;
  this.icon="chevron-down-outline";
  this.hidepup=false;
  this.icon2="chevron-down-outline";
  this.hideban=false;
  this.icon4="chevron-down-outline";
  this.hidepro=false;
  this.icon5="chevron-down-outline";
  this.hidewit=false;
  this.icon6="chevron-down-outline";
}

setBankDetails(){
  if(this.hideban==false){
    this.icon4="chevron-up-outline";
    this.hideban=true;
  }

  else{
    this.hideban=false;
    this.icon4="chevron-down-outline";
  }

  this.hideMe=false;
  this.icon="chevron-down-outline";
  this.hidepup=false;
  this.icon2="chevron-down-outline";
  this.hidesp=false;
  this.icon3="chevron-down-outline";
  this.hidepro=false;
  this.icon5="chevron-down-outline";
  this.hidewit=false;
  this.icon6="chevron-down-outline";

  console.log(this.nic);

 this.http.get(AccessProviders.server+'/getaccounts/'+this.nic).map(res => res).subscribe((res:any)=>{
    console.log(res);
    this.acc=res;
  
  });


}

setPropertyDetails(){
  if(this.hidepro==false){
    this.icon5="chevron-up-outline";
    this.hidepro=true;
  }

  else{
    this.hidepro=false;
    this.icon5="chevron-down-outline";
  }

  this.hideMe=false;
  this.icon="chevron-down-outline";
  this.hidepup=false;
  this.icon2="chevron-down-outline";
  this.hidesp=false;
  this.icon3="chevron-down-outline";
  this.hideban=false;
  this.icon4="chevron-down-outline";
  this.hidewit=false;
  this.icon6="chevron-down-outline";

}

setWitnessesDetails(){
  if(this.hidewit==false){
    this.icon6="chevron-up-outline";
    this.hidewit=true;
  }

  else{
    this.hidewit=false;
    this.icon6="chevron-down-outline";
  }

  this.hideMe=false;
  this.icon="chevron-down-outline";
  this.hidepup=false;
  this.icon2="chevron-down-outline";
  this.hidesp=false;
  this.icon3="chevron-down-outline";
  this.hideban=false;
  this.icon4="chevron-down-outline";
  this.hidepro=false;
  this.icon5="chevron-down-outline";

}


}
