import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  currentuserr :any;
  currentUser: any;
  message = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private token: TokenStorageService,
    private authService: AuthService,
    
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }
getUser(id :any): void {
    this.authService.get(id)
      .subscribe(
        data => {
          this.currentuserr = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  
  updateUser(): void {
    this.authService.update(this.currentUser.id, this.currentuserr)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The user was updated successfully!';
          this.token.saveUser( this.currentuserr);
        },
        error => {
          console.log(error);
        });
  }
}
