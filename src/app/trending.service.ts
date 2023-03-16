import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient) { }
  getTrending(mediaType:any,pageNum:any):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=e7cbe61fe54bd4d9cd7666f81283804f&language=en-US&page=${pageNum}`)

  }

}