import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-multirol',
  imports: [],
  templateUrl: './character-multirol.html',
  styleUrl: './character-multirol.css',
})
export class CharacterMultirol implements OnInit {

  public id: string = "";
  public character?: Character;
  constructor(private _route: ActivatedRoute, private _characterService: CharacterService) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
      this._characterService.getCharacterById(this.id).subscribe((character) => {
        this.character = character;
      });
    });
  }
}
