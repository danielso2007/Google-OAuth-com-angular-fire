import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Welcome';

  constructor(public auth: AuthService, public titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}