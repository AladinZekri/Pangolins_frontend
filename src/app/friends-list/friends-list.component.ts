import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  connectedUser:any
  friends : any
  constructor(
    private authService: AuthService,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.connectedUser = this.token.getUser();
    this.getFriends();
  }


  
  getFriends(): void {
    this.authService.getFriends(this.connectedUser.id)
      .subscribe(
        data => {
          this.friends = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
