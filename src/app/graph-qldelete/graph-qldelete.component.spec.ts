import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQLDeleteComponent } from './graph-qldelete.component';

describe('GraphQLDeleteComponent', () => {
  let component: GraphQLDeleteComponent;
  let fixture: ComponentFixture<GraphQLDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphQLDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphQLDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
