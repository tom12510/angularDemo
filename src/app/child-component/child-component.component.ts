import {Component, OnInit, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import {Renderer} from "@angular/compiler-cli/ngcc/src/rendering/renderer";

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor(private el:ElementRef,private renderer: Renderer) {}
  ngOnInit(): void {
  }
  showAside(){
    var asideDom:any=document.getElementById('1');
    asideDom.style.transform="translate(0,0)"
    asideDom.style.width="100px"
    asideDom.style.height="100px"
    asideDom.style.background='yellow'
    asideDom.style.display="block";
  }

  hideAside(){
    var asideDom:any=document.getElementById('1');
    asideDom.style.display="none";
  }
 //使用ElementRef获取节点
  getDom(){
  var oneDom = this.el.nativeElement.querySelector('#one')
    oneDom.style.width='100px'
    oneDom.style.height='100px'
    oneDom.style.background='red'
  }

  @ViewChild('greet')  greetDiv: ElementRef

}
