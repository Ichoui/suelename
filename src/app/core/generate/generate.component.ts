import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {GenerateService} from '../../providers/generate/generate.service';
import {FutureChars} from '../forms/generate-form/futureChars';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  public background: any;
  chars: FutureChars[];


  constructor(private sanitizer: DomSanitizer, public genService: GenerateService) {
    this.background = sanitizer.bypassSecurityTrustStyle('url(../assets/images/pitch.png) no-repeat center center fixed');

    this.genService.getChars().subscribe(char => {
      this.chars = char;
    })
  }


  ngOnInit() {
  }

}
