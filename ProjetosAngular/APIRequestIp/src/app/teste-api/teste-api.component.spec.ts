import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteApiComponent } from './teste-api.component';

describe('TesteApiComponent', () => {
  let component: TesteApiComponent;
  let fixture: ComponentFixture<TesteApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
