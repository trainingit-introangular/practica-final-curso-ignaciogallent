import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {
  public numProyectos: number;
  projects$: Observable<Project[]>;
  loadingError$ = new Subject<boolean>();

  constructor( private projectService: ProjectService ) {
  }

  ngOnInit() {
    this.numProyectos = 0;
    this.getProyectos();
  }




  getProyectos() {
    this.projects$ = this.projectService.getProjects().pipe(
      tap( x => x.map( () => this.numProyectos += 1 ) ),
      catchError((error) => {
        console.error('Error cargando el proyecto: ', error);
        this.loadingError$.next(true);
        return of();
      }),

    );
  }
}
