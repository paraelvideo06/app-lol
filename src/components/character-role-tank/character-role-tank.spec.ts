import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRoleTank } from './character-role-tank';

describe('CharacterRoleTank', () => {
  let component: CharacterRoleTank;
  let fixture: ComponentFixture<CharacterRoleTank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterRoleTank]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterRoleTank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
