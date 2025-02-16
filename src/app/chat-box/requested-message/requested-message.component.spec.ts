import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedMessageComponent } from './requested-message.component';

describe('RequestedMessageComponent', () => {
  let component: RequestedMessageComponent;
  let fixture: ComponentFixture<RequestedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestedMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
