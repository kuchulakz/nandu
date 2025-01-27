import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='demo1';
  name:string = 'Lexi';
  dept:string = 'IT';
  location:string = 'Kerala';
  rank:number[] = [1,2,3,4]
  working:boolean = false;

  course=[
    {id: 1,courseName: 'Angular',type: 'Available'},
    {id: 2,courseName: 'React',type: 'Not Available'},
    {id: 3,courseName: 'Vue',type: 'Available'},
    {id: 4,courseName: 'Node',type: 'Not Available'},
    {id: 5,courseName: 'MongoDB',type: 'Available'},
  ]    

}


  // availableItems=this.course.filter(course => course.type === 'Available');
  // notAvailableItems=this.course.filter(course => course.type === 'Not Available');
  // show:boolean |null =null;

  // handleAvailableClick()
  // {
  //   // console.log(event);    
  //   this.show=true;

  // }

  // handleNotAvailableClick()
  // {
  //   // console.log(event);    
  //   this.show=false;
  // }
  
  // getAvailable()
  // {
  //   return this.course.filter(course => course.type === 'Available').length;
  // }

  // getNotAvailable()
  // {
  //   return this.course.filter(course => course.type =='Not Available').length;
  // }

  // onClick(greet:string):void
  // {
  //   alert('Button Clicked By'+ this.name+" "+greet);
  // }