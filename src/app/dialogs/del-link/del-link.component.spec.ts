import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelLinkComponent } from './del-link.component';

describe('DelLinkComponent', () => {
  let component: DelLinkComponent;
  let fixture: ComponentFixture<DelLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
