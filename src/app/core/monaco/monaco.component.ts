import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {PlayerService} from '../../providers/player/player.service';
import {Player} from '../../providers/player/player';

@Component({
  selector: 'app-monaco',
  templateUrl: './monaco.component.html',
  styleUrls: ['./monaco.component.scss']
})
export class MonacoComponent implements OnInit {

  background: any;
  player: Player[];

  constructor(private sanitizer: DomSanitizer, private players: PlayerService) {
    this.background = sanitizer.bypassSecurityTrustStyle('url(../assets/images/monaco/monaco_bg.jpg) no-repeat center center fixed');

    this.players.getPlayer('monaco').subscribe(player => {
      this.player = player;
    });

  }

  ngOnInit() {
  }

}
