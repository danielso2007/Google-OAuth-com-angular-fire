import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  title = 'User Profile';

  constructor(public auth: AuthService, public titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('User Profile');
  }

}
