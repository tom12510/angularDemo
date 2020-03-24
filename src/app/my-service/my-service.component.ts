import { Component, OnInit } from '@angular/core';
//引入服务
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent implements OnInit {

  //初始化 注入 MyServiceService 服务 this调用
  constructor(public MyServe:MyServiceService) {
  }
  keyWord:string
  public historyList:any[]=[];

  //构子函数  页面初始化调用
  ngOnInit(): void {
    var history = this.MyServe.get("getHistory");
    debugger
    if(history){ //获取缓存存进List中
      this.historyList=history;
    }
  }
  setStroge():void{
    debugger
    //添加表单数据到缓存
    this.MyServe.set("getHistory",this.keyWord);
    //更新缓存
    let historys = this.MyServe.get("getHistory");
    this.historyList.push(historys)
  }

  sendUrl(){

   /* var res =this.MyServe.sendUrl()*/
    debugger
  }
}
