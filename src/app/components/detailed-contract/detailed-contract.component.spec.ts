import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedContractComponent } from './detailed-contract.component';

describe('DetailedContractComponent', () => {
  let component: DetailedContractComponent;
  let fixture: ComponentFixture<DetailedContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
