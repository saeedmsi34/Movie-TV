import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingTvshows:any=[]
constructor(private _TrendingService:TrendingService){}

getTrendingTvShows(pageNum:any){
  this._TrendingService.getTrending('tv',pageNum).subscribe((respone)=>{
    this.trendingTvshows=respone.results
  })

}
ngOnInit(): void {
  this.getTrendingTvShows(1)

}
}
