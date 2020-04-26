import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';


/*const routes: Routes = [{
  path: '',
  component: ProjectsComponent,
  children: [
    {
      path : 'new',
      component : NewProjectComponent
    },
    {
      path : ':id',
      component : ViewerProjectComponent
    },
  ]


}
];
*/

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'viewer-project/:id',
    component: ViewerProjectComponent
  },
  {
    path: 'new-project',
    component: NewProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
