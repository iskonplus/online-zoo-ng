import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OurUser } from "./our-user";

describe("OurUser", () => {
  let component: OurUser;
  let fixture: ComponentFixture<OurUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurUser],
    }).compileComponents();

    fixture = TestBed.createComponent(OurUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
