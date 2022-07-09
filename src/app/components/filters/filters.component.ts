import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  public searchInput = new FormControl('', [Validators.minLength(3)]);

  @Input()
  public pagName!: string;

  @Output()
  public search = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.searchInput.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        if (!this.searchInput.hasError('minLength')) {
          this.search.emit(value.toLowerCase());
        }
      });
  }
}
