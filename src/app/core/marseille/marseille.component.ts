import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Player} from '../../providers/player/player';
import {PlayerService} from '../../providers/player/player.service';

@Component({
  selector: 'app-marseille',
  templateUrl: './marseille.component.html',
  styleUrls: ['./marseille.component.scss']
})
export class MarseilleComponent implements OnInit {
  background: any;
  player: Player[];
  playerShowed: Player[];

  constructor(private sanitizer: DomSanitizer, private players: PlayerService) {
    this.background = sanitizer.bypassSecurityTrustStyle('url(../assets/images/marseille/marseille_bg.png) no-repeat center center fixed');

    this.players.getPlayer('marseille').subscribe(player => {
      this.player = player;
    });
  }

  ngOnInit() {
  }

  showPlayer(joueur) {
    this.playerShowed = joueur;
  }

}
