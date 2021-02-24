import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  connectedUser :any;
  requests:any;
  constructor(
    private authService: AuthService,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.connectedUser = this.token.getUser();
    this.getReq();
  }


  

  getReq(): void {
    this.authService.getReq(this.connectedUser.id)
      .subscribe(
        data => {
          this.requests = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

x:any
  acceptReq(id:any){
    console.log('click')
    this.authService.accept(this.connectedUser.id,id,"ss").subscribe(data => { this.x =data})
    window.location.reload();
  }
  declineReq(id:any){
    this.authService.decline(this.connectedUser.id,id,"ss").subscribe(data => { this.x =data})
    window.location.reload();

  }
}
