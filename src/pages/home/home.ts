import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  signature = '';
  isDrawing = false;

  

  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 1,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    
  }

  drawComplete() {
    
  }
 
  drawStart() {
    
  }

  clearPad() {
    
  }

}
