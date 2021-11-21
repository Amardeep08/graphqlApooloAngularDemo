import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQLUpdateComponent } from './graph-qlupdate.component';

describe('GraphQLUpdateComponent', () => {
  let component: GraphQLUpdateComponent;
  let fixture: ComponentFixture<GraphQLUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphQLUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphQLUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
