import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-multirol',
  imports: [],
  templateUrl: './character-multirol.html',
  styleUrl: './character-multirol.css',
})
export class CharacterMultirol implements OnInit {

  public characters: Character[] = [];

  constructor(private _characterService: CharacterService) {}

  ngOnInit(): void {
    this._characterService.getMultirolCharacters().subscribe((result) => {
      this.characters = result;
    });
  }
}
