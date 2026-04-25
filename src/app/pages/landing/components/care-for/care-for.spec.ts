import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CareFor } from "./care-for";

describe("CareFor", () => {
  let component: CareFor;
  let fixture: ComponentFixture<CareFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareFor],
    }).compileComponents();

    fixture = TestBed.createComponent(CareFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
