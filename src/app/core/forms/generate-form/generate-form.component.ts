import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FutureChars} from './futureChars';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.scss']
})
export class GenerateFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, public afs: AngularFirestore) {
  }

  ngOnInit() {
    this.form();
    console.log(this.required);

  }

  form() {
    this.myForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      pays: ['', Validators.required],
      club: ['']
    });
    // this.myForm.valueChanges.subscribe(console.log);
  }

  required: boolean;

  verifyData() {
    if (this.myForm.controls.nom.invalid || this.myForm.controls.prenom.invalid || this.myForm.controls.pays.invalid) {
      this.required = false;
    } else {
      this.required = true;
      this.showData();
    }
  }

  showData() {
    const fireCollec: AngularFirestoreDocument<any> = this.afs.collection(`suelename/`).doc(`${this.myForm.value.nom}`);
    const data: FutureChars = {
      nom: this.myForm.value.nom,
      prenom: this.myForm.value.prenom,
      pays: this.myForm.value.pays,
      club: this.myForm.value.club
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
