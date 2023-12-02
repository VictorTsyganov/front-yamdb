import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html'
})
export class GenresPageComponent implements OnInit {

  loading = false

  term = ''

  constructor(
    public genreService: GenreService
  ) { }

  ngOnInit(): void {
    this.loading = true

    this.genreService.getGenres().subscribe(() => {
      this.loading = false
    })
  }
}
