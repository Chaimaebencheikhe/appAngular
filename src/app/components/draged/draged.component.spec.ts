import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragedComponent } from './draged.component';

describe('DragedComponent', () => {
  let component: DragedComponent;
  let fixture: ComponentFixture<DragedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
