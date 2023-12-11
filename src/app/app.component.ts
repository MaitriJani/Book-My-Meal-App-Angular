import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from './auth/services/storage/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book-My-Meal-App-Angular';

  isEmployeeLoggedIn: boolean;
  isAdminLoggedIn: boolean;

  constructor(
    private router:Router
  ){}

  ngOnInit(){
    this.updateUserLoggedStatus();
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.updateUserLoggedStatus();
      }
    })
  }

  private updateUserLoggedStatus():void {
    this.isEmployeeLoggedIn = StorageService.isEmployeeLoggedIn();
    this.isAdminLoggedIn  = StorageService.isAdminLoggedIn();
  }
 
  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login")
  }

  }



