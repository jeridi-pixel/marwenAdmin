import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeceListComponent } from './espece-list.component';

describe('EspeceListComponent', () => {
  let component: EspeceListComponent;
  let fixture: ComponentFixture<EspeceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspeceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
