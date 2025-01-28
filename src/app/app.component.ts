import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
text: string='iphone';

  myObv= new Observable((observer)=>
  {console.log("observable starts")
  observer.next("1")
  setTimeout(() => {observer.next("2")},1000)
  setTimeout(() => {observer.next("3")},2000)
  setTimeout(() => {observer.next("4")},4000)
  })

  ngOnInit(): void {
    this.myObv.subscribe((val)=>
    {
      console.log(val);      
    })
  }
  
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