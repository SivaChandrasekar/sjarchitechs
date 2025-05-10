import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedscreenComponent } from './trustedscreen.component';

describe('TrustedscreenComponent', () => {
  let component: TrustedscreenComponent;
  let fixture: ComponentFixture<TrustedscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedscreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
