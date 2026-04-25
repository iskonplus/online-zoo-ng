import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LiveCams } from "./live-cams";

describe("LiveCams", () => {
  let component: LiveCams;
  let fixture: ComponentFixture<LiveCams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveCams],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveCams);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
