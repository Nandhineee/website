import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  error:string='';
  constructor(private storage:StorageService, private router:Router){}

  onSubmit(regform: NgForm) {
    let users = this.storage.getAllUsers();
    for(let u of users) {
      if(u.email === regform.value.email){
        this.error="This mail is already used!!!!";
        this.router.navigate([''],{replaceUrl:true});

      }
      else{
        this.storage.adduser(regform.value);
      }
    }
  }
  
  
}
