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
  playerShowed: Player[];

  constructor(private sanitizer: DomSanitizer, private players: PlayerService) {
    this.background = sanitizer.bypassSecurityTrustStyle('url(../assets/images/monaco/monaco_bg.jpg) no-repeat center center fixed');

    this.players.getPlayer('monaco').subscribe(player => {
      this.player = player;
    });

  }

  ngOnInit() {
  }

  show(joueur) {
    // const player = document.getElementById(joueur.nom);


    const div_delete = document.getElementById('block_delete');


    if (div_delete !== null) {
      div_delete.remove();
      this.showPlayer(joueur);
    } else {
      const block_fix = document.getElementById('block_fix');

      const div = document.createElement('div');
      div.setAttribute('id', 'block_delete');

      const div_nom = document.createElement('div');
      const div_prenom = document.createElement('div');
      const div_poste = document.createElement('div');
      const div_catposte = document.createElement('div');
      const div_numero = document.createElement('div');
      const statfifa = document.createElement('div');


      div_nom.textContent = joueur.nom + '  ' + joueur.prenom;

      block_fix.appendChild(div);
      div.appendChild(div_nom);
    }


    // div_delete.appendChild(div_prenom);
    // console.log(player);
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
