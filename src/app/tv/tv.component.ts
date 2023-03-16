import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  trendingTvshows:any=[]
constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService){}

getTrendingTvShows(pageNum:any){
  this.spinner.show(); 
  this._TrendingService.getTrending('tv',pageNum).subscribe((respone)=>{
    this.trendingTvshows=respone.results.slice(0,15)
    this.spinner.hide();
  })

}
ngOnInit(): void {
  this.getTrendingTvShows(1)

}
}

