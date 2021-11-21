import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQLCreateComponent } from './graph-qlcreate.component';

describe('GraphQLCreateComponent', () => {
  let component: GraphQLCreateComponent;
  let fixture: ComponentFixture<GraphQLCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphQLCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphQLCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
