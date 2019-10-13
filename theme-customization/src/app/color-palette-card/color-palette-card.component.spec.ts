import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteCardComponent } from './color-palette-card.component';
import { MatCardModule } from '@angular/material/card';

describe('ColorPaletteCardComponent', () => {
  let component: ColorPaletteCardComponent;
  let fixture: ComponentFixture<ColorPaletteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPaletteCardComponent],
      imports: [MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
