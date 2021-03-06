import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookflightComponent } from './book-flight.component';

describe('BookflightComponent', () => {
  let component: BookflightComponent;
  let fixture: ComponentFixture<BookflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
