import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMainComponent } from './option-main.component';

describe('OptionMainComponent', () => {
  let component: OptionMainComponent;
  let fixture: ComponentFixture<OptionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OptionMainComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
