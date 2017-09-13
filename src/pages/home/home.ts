import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  startNo:string;
  endNo:string='#';
  inputNo:number;
  finalVal:string;
  constructor(public navCtrl: NavController,private callNumber: CallNumber) {
  }

  operatorSelect(operator){
    if(operator=="dialog"){
      this.startNo='*#123#';
    }else if(operator=="mobitel"){
      this.startNo='*102*';
    }else if(operator=="airtel"){
      this.startNo='*567#';
    }else if(operator=="etisalat"){
      this.startNo='*336#';
    }else if(operator=="hutch"){
      this.startNo='*355*';
    }
  }

  recharge(){
    this.finalVal=this.startNo+this.inputNo+this.endNo;
    this.callNumber.callNumber(this.finalVal, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }
}
