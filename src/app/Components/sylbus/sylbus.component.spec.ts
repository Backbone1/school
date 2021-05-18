import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SylbusComponent } from './sylbus.component';

describe('SylbusComponent', () => {
  let component: SylbusComponent;
  let fixture: ComponentFixture<SylbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SylbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SylbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
