import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  onButtonClicked(text:string)
  {
    alert("button "+text+" is clicked");
  }

  
}
