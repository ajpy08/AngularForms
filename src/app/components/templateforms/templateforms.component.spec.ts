import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformsComponent } from './templateforms.component';

describe('TemplateformsComponent', () => {
  let component: TemplateformsComponent;
  let fixture: ComponentFixture<TemplateformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
