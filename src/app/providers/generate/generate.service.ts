import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class GenerateService {

  chars$: Observable<any>;

  constructor(public afs: AngularFirestore) {
  }

  getChars() {
    this.chars$ = this.afs.collection('suelename').valueChanges();
    return this.chars$;
  }

  removeChars(nom) {
    const db = firebase.firestore();

    db.collection('suelename').doc(nom).delete().then(e => {
      console.log('success removing');
    }).catch(error => {
      console.log('error removing : ', error);

    });
  }

  updateChars(nom) {

  }
}
