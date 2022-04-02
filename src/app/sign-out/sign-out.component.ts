import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {
  selectedFiles: any;
  urllink: string;

  constructor() { }

  ngOnInit(): void {

    
  }

  onDragEnded(event:any) {
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    let abs=boundingClientRect.x - parentPosition.left;
    console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));     
    localStorage.setItem("x",JSON.stringify(abs))  ; 
  }
  
  getPosition(el:any) {
    let x = 0;
    let y = 0;
    while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }

  
  selectFile(event) {
    this.selectedFiles = event.target.files;
    var reader= new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload=(event : any)=>{
      this.urllink=event.target.result
    }
}
}
