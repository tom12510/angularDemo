import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-demo',
  templateUrl: './css-demo.component.html',
  styleUrls: ['./css-demo.component.css']
})
export class CssDemoComponent implements OnInit {

  public  keyword:string;
  public historys=[]

  public isShow:boolean=true

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(){
    if(this.historys.indexOf(this.keyword)==-1){
      this.historys.push(this.keyword);
    }
  }

  blurChange(){
    if(this.historys.indexOf(this.keyword)==-1){
      this.isShow=false
    }else {
       this.isShow=true
    }
  }
  search(obj){
    this.keyword = obj
  }
}
