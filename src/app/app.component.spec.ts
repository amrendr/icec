import { TestBed, async } from '@angular/core/testing';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {AppNavigationService} from './services/app.navigation.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule, MatIconModule],
      declarations: [AppComponent, NavigationComponent],
      providers: [
        AppNavigationService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
