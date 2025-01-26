import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
  @Output() availableClick = new EventEmitter<void>()
  @Output() notavailableClick = new EventEmitter<void>()

  onAvailableClick()
  {
    this.availableClick.emit();
  }

  notAvailableClick()
  {
    this.notavailableClick.emit();
  }
}
