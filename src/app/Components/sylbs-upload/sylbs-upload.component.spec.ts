import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SylbsUploadComponent } from './sylbs-upload.component';

describe('SylbsUploadComponent', () => {
  let component: SylbsUploadComponent;
  let fixture: ComponentFixture<SylbsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SylbsUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SylbsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
