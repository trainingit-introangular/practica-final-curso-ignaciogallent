import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.css']
})
export class FilterProjectsComponent implements OnInit {

  @Output() changeSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  changeFilter( textoBusqueda: string ) {

    this.changeSearch.emit( textoBusqueda );
  }
}
