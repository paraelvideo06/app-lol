import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {
  
  public id: string = "";
  public character?: Character;

  constructor( private _router: ActivatedRoute, private _characterService: CharacterService ) {}

  ngOnInit(): void {
    this.id = this._router.snapshot.paramMap.get('id')!;
    this._characterService.getCharacterById(this.id).subscribe((character) => {
      this.character = character;
    });
  }
}
