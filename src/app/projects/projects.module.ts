import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { ProjectService } from '../services/project.service';
import { UrlInterceptorService } from '../services/url-interceptor.service';
import { FilterProjectsComponent } from './projects/filter-projects/filter-projects.component';
import { NewProjectFormComponent } from './projects/new-project-form/new-project-form.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './projects/viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule( {
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    FilterProjectsComponent,
    ProjectListComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule
  ],
  providers: [
    ProjectService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptorService,
      multi: true
    }
  ]
} )
export class ProjectsModule { }
