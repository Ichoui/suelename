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
    const block_fix = document.getElementById('block_fix');

    if (this.playerShowed == joueur) {
      block_fix.classList.add('dno');
      this.playerShowed = [];
      console.log(this.playerShowed);
    } else {
      this.playerShowed = joueur;
      block_fix.classList.remove('dno');
    }
  }

}
