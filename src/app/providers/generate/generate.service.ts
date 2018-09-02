import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {ModalComponent} from '../../shared/modal/modal.component';

@Injectable()
export class GenerateService {

  public chars$: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.chars$ = this.afs.collection('suelename').valueChanges();
  }

  getChars() {
    return this.chars$;
  }

  removeChars(nom) {
    const db = firebase.firestore();

    db.collection('suelename').doc(nom).delete().then(e => {
      console.log(e);
      console.log('success');
    }).catch(error => {
      console.log('error removing : ', error);

    });
  }

  updateChars(nom) {

  }
}
