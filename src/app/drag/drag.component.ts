import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  files: File[] = [];

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
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
	
}
