import { Component, OnInit } from '@angular/core';
import { combineLatest, switchMap } from 'rxjs';
import { PokeApiService } from 'src/app/services/http/poke-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public filterTitle = 'Filtrar';
  public valorRecebido!: string;
  public pokeList: any[] = [];

  constructor(private readonly pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService
      .getPokemons()
      .pipe(
        switchMap((pokemons) =>
          combineLatest([
            pokemons.results.map((pokemon) =>
              this.pokeApiService.getPokemonByName(pokemon.name)
            ),
          ])
        )
      )
      .subscribe((data) => {
        data.map((pokemon) => {
          pokemon.subscribe((data) => {
            this.pokeList.push(data);
          });
        });
      });
  }

  public getSearchValue(value: string): void {
    this.valorRecebido = value;
    this.pokeApiService.getPokemonByName(value).subscribe((data: any) => {
      this.pokeList = data.results;
    });
  }
}
