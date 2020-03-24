import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/*Class 变量 */
export class HomeComponent implements OnInit {

  firstName:string;
  sex:string='男';
  address:string;
  hobby:[]
  textArea:string
  addressList =[{addressName:'北京'},{addressName:'上海'},{addressName:'深圳'},{addressName:'广州'}];
  submitForm(){
    alert("名字:"+this.firstName+ '\n' +"地址:"+this.address+ '\n' +"爱好:"+this.hobby+
         '\n'+"特殊备注:"+this.textArea+'\n'+"性别:"+this.sex)
  }

  selectHobby(){
    var items = document.getElementsByName("selectName");
    items.forEach(x=>{
      debugger
      x.innerHTML
    })
    console.log(items)
  }
  ngOnInit(): void {}


}



