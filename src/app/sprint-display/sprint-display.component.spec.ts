import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintDisplayComponent } from './sprint-display.component';

describe('SprintDisplayComponent', () => {
  let component: SprintDisplayComponent;
  let fixture: ComponentFixture<SprintDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
