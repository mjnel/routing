import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  onLoadServers(param:number){
    this.router.navigate(['/servers', param, 'edit'], {queryParams:{allowEdit:param}, fragment: 'loading' })
}


  ngOnInit() {
  }

  onLogin(){
    this.authService.logIn()
    console.log(this.authService.getStatus())

  }


  onLogOut(){
    this.authService.logOut()
    console.log(this.authService.getStatus())
  }


}
