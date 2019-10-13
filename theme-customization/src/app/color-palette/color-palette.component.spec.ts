import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPaletteComponent } from './color-palette.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-palette-card',
  template: ''
})
export class ColorPaletteCardComponentMock {
  @Input() title: string;
  @Input() color: string;
  @Input() classes: string[];
}

describe('ColorPaletteComponent', () => {
  let component: ColorPaletteComponent;
  let fixture: ComponentFixture<ColorPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPaletteComponent, ColorPaletteCardComponentMock]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
