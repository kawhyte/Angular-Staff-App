import { AuthService } from './../_services/auth.service';
import { NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';


const SMALL_WIDTH_BREAKPOINT = 120;
@Component({
  selector: 'app-mainmanager',
  templateUrl: './mainmanager.component.html',
  styleUrls: ['./mainmanager.component.css']
})
export class MainmanagerComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor( zone: NgZone, public authService: AuthService,) {

    this.mediaMatcher.addListener(mql => 
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
  }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
