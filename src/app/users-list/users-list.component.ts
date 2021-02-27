import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  connectedUser: any;
  users: any;
  currentUser : any;
  currentIndex = -1;
  title = '';
  constructor(    
    private route: ActivatedRoute,
   
    private authService: AuthService,
    private token: TokenStorageService
      
    ) { }

  ngOnInit(): void {
    this.connectedUser = this.token.getUser();
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.authService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  refreshList(): void {
    this.getAllUsers();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveUser(user : any, index : any): void {

    this.currentUser = user;
    this.currentIndex = index;

   
  }


  searchUser(): void {
    this.authService.findByUsername(this.title)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

x:any
  sendRequest(){
    console.log('ss')
    this.authService.sendRequest(this.connectedUser.id,this.currentUser._id,"ss").subscribe(
      data =>{
        this.x =data
      }
    )
  }

  staticAdd(): void {
    

    this.authService.register("panoooogo89", "a9@ooz2.e", "password",99,"famille","race","nourriture").subscribe(
      data => {
        console.log(data);
      
      })}
    
    add : any
    req : any
    
      async cliked(){
      this.add = await  this.staticAdd();
      this.req = await this.sendRequest();

      }

    
    
    
    
    }



   
