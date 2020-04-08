import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsavelModalComponent } from './responsavel-modal.component';

describe('ResponsavelModalComponent', () => {
  let component: ResponsavelModalComponent;
  let fixture: ComponentFixture<ResponsavelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsavelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsavelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
