import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pokemon {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonResult[];
}
export interface PokemonResult {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  public getPokemons(offset?: number, limit?: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  public getPokemonByName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
