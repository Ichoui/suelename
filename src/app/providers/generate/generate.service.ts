import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Injectable()
export class GenerateService {

  public chars$: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.chars$ = this.afs.collection('suelename').valueChanges();

  }

  getChars() {
    return this.chars$;
  }
}
