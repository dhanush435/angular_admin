import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybernewsComponent } from './cybernews.component';

describe('CybernewsComponent', () => {
  let component: CybernewsComponent;
  let fixture: ComponentFixture<CybernewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CybernewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CybernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
