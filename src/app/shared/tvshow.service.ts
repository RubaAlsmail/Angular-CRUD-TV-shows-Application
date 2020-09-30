import { Injectable } from '@angular/core';
import { Tvshow } from './tvshow.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  formData: Tvshow;
  list: Tvshow[];
  readonly rootURL="https://localhost:44334/api";

  constructor(public http : HttpClient) { }

  postTVshow(formData : Tvshow){
    return this.http.post(this.rootURL+'/TVshows',formData);
     
   }
   
  //GetTVshow 
  refreshList(){
    this.http.get(this.rootURL+'/TVshows')
    .toPromise().then(res => this.list = res as Tvshow[]);
  }

  putTVshow(formData : Tvshow){
    return this.http.put(this.rootURL+'/TVshows/'+formData.ShowID,formData);
     
   }

   deleteTVshow(id : number){
    return this.http.delete(this.rootURL+'/TVshows/'+id);
   }
  
}
