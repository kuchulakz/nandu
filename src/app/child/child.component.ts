import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from '../service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  text:string='Not Available';

  t='Lexi'
  notavailableClick()
  {
    const service= new ServiceService()
    service.onButtonClicked(this.text)
  }
  msg()
  {
    
  }
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