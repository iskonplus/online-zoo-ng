import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DidYouKnow } from "./did-you-know";

describe("DidYouKnow", () => {
  let component: DidYouKnow;
  let fixture: ComponentFixture<DidYouKnow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DidYouKnow],
    }).compileComponents();

    fixture = TestBed.createComponent(DidYouKnow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
