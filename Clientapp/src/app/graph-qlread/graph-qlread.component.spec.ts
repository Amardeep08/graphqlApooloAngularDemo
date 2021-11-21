import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQLReadComponent } from './graph-qlread.component';

describe('GraphQLReadComponent', () => {
  let component: GraphQLReadComponent;
  let fixture: ComponentFixture<GraphQLReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphQLReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphQLReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
