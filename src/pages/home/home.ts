import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  signature = '';
  isDrawing = false;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;  

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
    this.signaturePad.clear();  
  }

  drawComplete() {
    this.isDrawing = false;
  }
 
  drawStart() {
    this.isDrawing = true;
  }

  clearPad() {
    this.signaturePad.clear();
  }

}
