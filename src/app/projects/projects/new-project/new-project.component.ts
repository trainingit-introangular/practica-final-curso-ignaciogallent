import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';

@Component( {
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
} )
export class NewProjectComponent implements OnInit {


  constructor( private projectService: ProjectService ) { }

  ngOnInit() { }

  crearProyecto( nombreProyecto ) {

    this.projectService.postProject( nombreProyecto )
      .subscribe( res => {
      } );
  }
}
