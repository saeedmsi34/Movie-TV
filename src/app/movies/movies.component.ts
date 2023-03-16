import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies: any = []

  constructor(private _TrendingService: TrendingService,private spinner: NgxSpinnerService) { 

  }

  getTrendingMovies(pageNum: any) {
    this.spinner.show();
    this._TrendingService.getTrending('movie', pageNum).subscribe((respone) => {
      this.trendingMovies = respone.results.slice(0, 15)
      this.spinner.hide();
    })

  }

  ngOnInit(): void {
    this.getTrendingMovies(1)


  }
}
