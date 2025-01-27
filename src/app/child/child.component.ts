import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  
}

// @Output() availableClick = new EventEmitter<void>()
  // @Output() notavailableClick = new EventEmitter<void>()

  // showAvailableClick()
  // {
  //   // console.log(event)
  //   this.availableClick.emit();
  // }

  // showNotAvailableClick()
  // {
  //   // console.log(event)
  //   this.notavailableClick.emit();
  // }