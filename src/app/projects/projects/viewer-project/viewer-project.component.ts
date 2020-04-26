import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from '../../../models/project.model';
import { ProjectService } from '../../../services/project.service';

@Component( {
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
} )
export class ViewerProjectComponent implements OnInit {

  projectId: number;
  project$: Observable<Project>;
  loadingError$ = new Subject<boolean>();

  constructor( private activatedRoute: ActivatedRoute, private projectService: ProjectService ) {
    this.projectId = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.loadProject();
  }

  loadProject() {
    this.project$ = this.projectService.getProject(this.projectId).pipe(
      catchError((error) => {
        console.error('Error cargando el proyecto: ', error);
        this.loadingError$.next(true);
        return of();
      })
    );
  }
}
