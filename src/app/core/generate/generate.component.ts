import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {
  background: any;

  constructor(private sanitizer: DomSanitizer) {
    this.background = sanitizer.bypassSecurityTrustStyle('url(../assets/images/pitch.png) no-repeat center center fixed');
  }

  ngOnInit() {

  }

}