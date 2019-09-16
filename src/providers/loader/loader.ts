import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoaderProvider {

    text_message: string = "Please wait...";

    constructor(
      public loadingCtrl: LoadingController
    ) { }

    loading: any = null;

    show(text: string) {
        this.text_message = text;
        this.loading = this.loadingCtrl.create({
            content: this.text_message
        })
        this.loading.present();
    }

    setLoadingText(text: string) {
        const elem = document.querySelector(
            "div.loading-wrapper div.loading-content");
        if(elem) elem.innerHTML = text;
    }

    hide() {
        this.loading.dismiss();
    }
}