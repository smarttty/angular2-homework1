import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftElementComponent } from './left-element.component';

describe('LeftElementComponent', () => {
  let component: LeftElementComponent;
  let fixture: ComponentFixture<LeftElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
