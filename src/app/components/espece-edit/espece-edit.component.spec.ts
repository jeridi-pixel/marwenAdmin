import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeceEditComponent } from './espece-edit.component';

describe('EspeceEditComponent', () => {
  let component: EspeceEditComponent;
  let fixture: ComponentFixture<EspeceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspeceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
