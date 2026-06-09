import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';

@Component({
  selector: 'app-character-role-tank',
  imports: [],
  templateUrl: './character-role-tank.html',
  styleUrl: './character-role-tank.css',
})
export class CharacterRoleTank implements OnInit {

  public characters: Character[] = [];
  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this._characterService.getTankRoleCharacters().subscribe((result) => {
      this.characters = result;
    });
  }

}
