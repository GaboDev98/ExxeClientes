// Default components
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";

// Native
import { Storage } from '@ionic/storage';

// Automplete service
import { AutoCompleteService } from 'ionic2-auto-complete';

@Injectable()
export class AutocompleteServiceProvider implements AutoCompleteService  {
  
  apiUrl: string;
  labelAttribute = "Nombre";

  constructor(
    private http: Http,
    private localStorage: Storage
  ) {
    this.localStorage.get('apiUrl').then((value) => {
      this.apiUrl = value;
    });
  }

  getResults(keyword: string) {
    return this.http.get(this.apiUrl + "GetCiudadesByName/" + keyword)
      .map(result => {
        console.log(result);
        return result.json()
          .filter(item => item.Nombre.toLowerCase().startsWith(keyword.toLowerCase()))
      });
  }

}
