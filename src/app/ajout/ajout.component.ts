import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { userClass } from '../state/user.state';
import { Observable, Subscription } from 'rxjs';
import { Add } from "../state/user.actions";


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  ConnectedUser: any;
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(
    private authService: AuthService,
    private token: TokenStorageService,
    private store : Store<{userRed : {user : userClass[]}}>,
    //private store: Store<{ todoState: Array<Todo> }>
    

  

  ) {
    
   };
    
  ngOnInit(): void {
    this.ConnectedUser = this.token.getUser();
   

    
  }
 
    

  x:any
  y:any
 
  onSubmit(): void {

    
    const { username, email, password ,age,famille,race,nourriture} = this.form;


    this.authService.register(username, email, password,age,famille,race,nourriture).subscribe(
      (data:any) => {
        console.log(data);
       
     this.authService.sendRequest(this.ConnectedUser.id,data['user']['_id'],'ss')
        .subscribe( resp => {this.x =resp})
    
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      },
    () =>{
    
        
       
      
    }
      
    );
  
    
    

  }







}
