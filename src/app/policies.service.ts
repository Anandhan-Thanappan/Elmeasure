import { Injectable } from '@angular/core';

import { Policy } from './policy';

//To get external json data
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  constructor(private Httpclient:HttpClient) { }

  //API call URL now local JSON
  getDetailResponse = "../assets/policies.json";

  //Getting user detail 
  public getDetail(): Observable<Policy[]> {
    var result;
    return this.Httpclient.get(this.getDetailResponse).pipe(map((response: any) => {
      result = response;
      return result;
    }));
  }


}
