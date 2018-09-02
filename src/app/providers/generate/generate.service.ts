import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable()
export class GenerateService {

  constructor(public afs: AngularFirestore) {
  }


  getNames() {
    const db = firebase.firestore();

    db.collection('suelename').get().then(snap => {
      snap.forEach(doc => {
        this.list(doc);
      });
    });
  }

  list(doc) {
    const table = document.getElementById('list');
    const tr = document.createElement('tr');
    const tdNom = document.createElement('td');
    const tdPrenom = document.createElement('td');
    const tdPays = document.createElement('td');
    const tdClub = document.createElement('td');

    tr.setAttribute('id', doc.data().nom);
    tdNom.setAttribute('class', 'nom');
    tdPrenom.setAttribute('class', 'prenom');
    tdPays.setAttribute('class', 'pays');
    tdClub.setAttribute('class', 'club');

    tdNom.textContent = doc.data().nom;
    tdPrenom.textContent = doc.data().prenom;
    tdPays.textContent = doc.data().pays;
    tdClub.textContent = doc.data().club;

    tr.appendChild(tdNom);
    tr.appendChild(tdPrenom);
    tr.appendChild(tdPays);
    tr.appendChild(tdClub);
    table.appendChild(tr);
  }

}
