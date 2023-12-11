import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StorageService } from 'src/app/auth/services/storage/storage.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

 constructor(
 private router: Router
 ) {}

  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login")
  }

}

