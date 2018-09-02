import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'Suelename.com';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  back() {
    window.history.go(-1);
  }

  home() {
    this.router.navigate(['/home']);
  }

}

