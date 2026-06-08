import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private _baseUrl: string = "http://localhost:8080/api"

  constructor(
    private _http: HttpClient
  ){};

  public getCharacters(): Observable<Character[]>{
    return this._http.get<Character[]>(this._baseUrl + "/characters");
  }
  public getCharacterById(id: string): Observable<Character>{
    //localhost:8080/api/characters/6a0494ntgmjre40
    return this._http.get<Character>(this._baseUrl + "/characters" + "/" + id);
  }
  public getMultirolCharacters(): Observable<Character[]>{
    return this._http.get<Character[]>(this._baseUrl + "/characters/filter/multirol");
  }
}
