import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Generate} from './generate';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GenerateService {

  // genCollec: AngularFirestoreDocument<Generate>;
  // gen$: Observable<any>;

  constructor(public afs: AngularFirestore) {
  }

  // getPseudos() {
  //   this.genCollec = this.afs.collection('Suelename').doc('testA');
  //   return this.gen$ = this.genCollec.valueChanges();
  // }
}
