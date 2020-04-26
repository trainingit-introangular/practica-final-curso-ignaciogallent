import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component( {
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
} )
export class NewProjectFormComponent implements OnInit {

  public formProject: FormGroup;

  @Output() nuevoProyecto = new EventEmitter<string>();

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }

  crearProyecto() {
    let nombreProyecto = this.formProject.value['nombreProyecto'];
    this.formProject.reset();
    this.nuevoProyecto.emit( nombreProyecto );
  }

  private buildForm() {
    this.formProject = this.formBuilder.group( {
      nombreProyecto: ['', [Validators.required]]
    } );
  }
}
