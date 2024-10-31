import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentInfoComponent } from './agent-info.component';

describe('AgentInfoComponent', () => {
  let component: AgentInfoComponent;
  let fixture: ComponentFixture<AgentInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentInfoComponent]
    });
    fixture = TestBed.createComponent(AgentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
