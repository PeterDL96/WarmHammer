import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumericalInput } from './numerical-input';

describe('NumericalInput', () => {
  let component: NumericalInput;
  let fixture: ComponentFixture<NumericalInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumericalInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericalInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
