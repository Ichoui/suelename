import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  player$: Observable<any>;

  constructor(private afs: AngularFirestore) { }

  getPlayer(club) {
    this.player$ = this.afs.collection(club).valueChanges();
    return this.player$
  }
}
