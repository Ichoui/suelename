import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FutureChars} from './futureChars';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.scss']
})
export class GenerateFormComponent implements OnInit {

  // suelename = new FormGroup({
  //   nom: new FormControl(''),
  //   prenom: new FormControl(''),
  //   club: new FormControl(''),
  //   pays: new FormControl('')
  // });

  myForm: FormGroup;

  constructor(private fb: FormBuilder, public afs: AngularFirestore) {
  }

  ngOnInit() {
    this.form();
  }

  form() {
    this.myForm = this.fb.group({
      nom: [''],
      prenom: [''],
      pays: [''],
      club: ['']
    });

    // this.myForm.valueChanges.subscribe(console.log);
  }

  showData() {
    // event.preventDefault();
    const fireCollec: AngularFirestoreDocument<any> = this.afs.collection(`suelename/`).doc(`${this.myForm.value.nom}`);
    // console.log(this.myForm.value.club);
    const data: FutureChars = {
      nom: this.myForm.value.nom,
      prenom: this.myForm.value.nom,
      pays: this.myForm.value.nom,
      club: this.myForm.value.nom
    };
    this.resetFormValues();
    return fireCollec.set(data, {merge: true});
  }

  resetFormValues() {
    this.myForm.setValue({
      nom: '',
      prenom: '',
      pays: '',
      club: ''
    });
  }
}
