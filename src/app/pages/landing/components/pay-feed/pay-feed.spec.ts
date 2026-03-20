import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PayFeed } from "./pay-feed";

describe("PayFeed", () => {
  let component: PayFeed;
  let fixture: ComponentFixture<PayFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayFeed],
    }).compileComponents();

    fixture = TestBed.createComponent(PayFeed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
