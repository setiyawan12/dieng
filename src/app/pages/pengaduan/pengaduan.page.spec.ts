import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengaduanPage } from './pengaduan.page';

describe('PengaduanPage', () => {
  let component: PengaduanPage;
  let fixture: ComponentFixture<PengaduanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengaduanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaduanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
