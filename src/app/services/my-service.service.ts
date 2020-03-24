import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
//初始化类 服务类 用于连接后台 操作数据缓存 发送请求
export class MyServiceService {
  constructor() { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8'})
  };

  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }

 /* /!*发送后台请求*!/
  sendUrl(){
    return this.httpClient.get("www.baidu.com",this.httpOptions).subscribe(
      val => {
        console.log('get请求成功', val)
        }
    )
  }*/

  get(key:string){
    return JSON.parse(localStorage.getItem(key))
  }
  
  remove(key:string){
    localStorage.removeItem(key);
  }
}
