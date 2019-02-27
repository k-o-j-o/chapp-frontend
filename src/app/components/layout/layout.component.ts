import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScreenSizeService, ScreenSize } from '../../services/screen-size.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
import { UpdateProfileComponent } from '../modals/update-profile/update-profile.component';
import { HeaderService } from 'src/app/services/header.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private _screenSizeSubscription: Subscription;
  screen: ScreenSize = ScreenSize.Web;

  constructor(private _screenSize: ScreenSizeService, private router: Router, private dialog: MatDialog, private headerService: HeaderService) {}

  ngOnInit() {
    this._screenSizeSubscription = this._screenSize.subscribe(screen => {
      this.screen = screen;
    });
    this.router.navigateByUrl('/channel/1');
  }

  ngOnDestroy() {
    this._screenSizeSubscription.unsubscribe()
  }
  openUpdateUser() {
    let dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '50vw'
    });
  }

  Logout()
  {
    sessionStorage.clear();
    location.reload();
  }
}