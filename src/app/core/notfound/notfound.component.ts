import {Component, OnInit} from '@angular/core';
import {DomSanitizer, BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  backgroundImg: any;

  constructor(private sanitizer: DomSanitizer) {
    this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url(../assets/images/petit_notfound.jpg) no-repeat center center fixed');
  }

  ngOnInit() {
  }

}
