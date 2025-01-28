import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent 
{
  text:string='Availabale'
  availableClick()
  {
    const service= new ServiceService()
    service.onButtonClicked(this.text)
  }
}
