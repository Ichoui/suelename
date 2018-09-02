import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {GenerateService} from '../../providers/generate/generate.service';
import {Generate} from '../../providers/generate/generate';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {
  public background: any;
  // public gen: Generate;

  constructor(private sanitizer: DomSanitizer, public genService: GenerateService) {
    this.background = sanitizer.bypassSecurityTrustStyle('url(../assets/images/pitch.png) no-repeat center center fixed');
    // this.genService.getPseudos().subscribe(e => {
    //   this.gen = e;
    //   console.log(e);
    // });

  }

  ngOnInit() {

  }

}
