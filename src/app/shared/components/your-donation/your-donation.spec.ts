import { ComponentFixture, TestBed } from "@angular/core/testing";

import { YourDonation } from "./your-donation";

describe("YourDonation", () => {
  let component: YourDonation;
  let fixture: ComponentFixture<YourDonation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourDonation],
    }).compileComponents();

    fixture = TestBed.createComponent(YourDonation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
