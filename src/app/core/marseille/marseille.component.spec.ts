import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarseilleComponent } from './marseille.component';

describe('MarseilleComponent', () => {
  let component: MarseilleComponent;
  let fixture: ComponentFixture<MarseilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarseilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarseilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
