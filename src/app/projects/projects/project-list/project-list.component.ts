import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component( {
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
} )
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];
  resultadoBusqueda: Project[];
  public isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

  ngOnInit() {
    this.resultadoBusqueda = this.projects;
  }

  buscar( texto: string ) {

    let textoLowerCase = texto.toLowerCase();

    this.resultadoBusqueda = this.projects.filter( p =>
      p.name.toLowerCase().includes( textoLowerCase )
    );
  }
}
