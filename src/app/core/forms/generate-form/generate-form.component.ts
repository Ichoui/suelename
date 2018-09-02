import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, FormGroup, Validators} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form();
  }

  form() {
    this.myForm = this.fb.group({
      nom: ['', Validators.required]
      // prenom: '',
      // pays: '',
      // club: ''
    });

    this.myForm.valueChanges.subscribe(console.log);
  }

  showData() {
    event.preventDefault();

    console.log(this.myForm.value);
  }

}
