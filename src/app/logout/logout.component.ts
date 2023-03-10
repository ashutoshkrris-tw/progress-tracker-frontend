import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/auth/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
    this.basicAuthenticationService.logout()
  }

}
