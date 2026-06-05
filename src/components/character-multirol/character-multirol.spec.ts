import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMultirol } from './character-multirol';

describe('CharacterMultirol', () => {
  let component: CharacterMultirol;
  let fixture: ComponentFixture<CharacterMultirol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterMultirol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterMultirol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
