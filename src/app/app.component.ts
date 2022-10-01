import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from './user.model';
import  data   from '../data.json';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
  host:{class:'app-tabs'}
})

export class AppComponent implements OnInit { 

  public names: string[];
  public acounts: number[];
  
  constructor(private router: Router){}

  public ngOnInit():void{
    this.updateData('income',0);
  }

  public updateData(type:string, tabIndex:number):void{
    this.router.navigate(['/'],{queryParams:{tab: tabIndex}});
    let usersByType: User[]=(data.data as []).filter((user:User)=>user.type===type);
    this.names=usersByType.map((item:User)=>item.name.first+' '+item.name.last);
    this.acounts=usersByType.map((item:User)=>item.amount);
  } 
}
