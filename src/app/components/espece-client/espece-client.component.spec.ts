import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeceClientComponent } from './espece-client.component';

describe('EspeceClientComponent', () => {
  let component: EspeceClientComponent;
  let fixture: ComponentFixture<EspeceClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspeceClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeceClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
