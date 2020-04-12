import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { AuthService } from 'src/app/services/auth.service';
import { Title } from '@angular/platform-browser';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthService,
        Title
      ],
      declarations: [ UserProfileComponent ]
    })
    .compileComponents();
  }));

  it(`should have as title 'User Profile'`, () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('User Profile');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
