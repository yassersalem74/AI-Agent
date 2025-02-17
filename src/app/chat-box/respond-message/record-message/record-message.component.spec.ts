import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMessageComponent } from './record-message.component';

describe('RecordMessageComponent', () => {
  let component: RecordMessageComponent;
  let fixture: ComponentFixture<RecordMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
