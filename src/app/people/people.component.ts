import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPersonal:any=[]
constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService){}

getTrendingPersonal(pageNum:any){
  this.spinner.show(); 
  this._TrendingService.getTrending('person',pageNum).subscribe((respone)=>{
    this.trendingPersonal=respone.results.slice(0,15)
    this.spinner.hide();
  })

}
ngOnInit(): void {
  this.getTrendingPersonal(1)

}
}
