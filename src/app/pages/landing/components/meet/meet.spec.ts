import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Meet } from "./meet";

describe("Meet", () => {
  let component: Meet;
  let fixture: ComponentFixture<Meet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meet],
    }).compileComponents();

    fixture = TestBed.createComponent(Meet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
