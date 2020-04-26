import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiURL = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {
  }

  getProjects() {
    return this.httpClient.get<any>( this.apiURL);
  }

  getProjectsCount() {
    let url = this.apiURL + '/count';
    return this.httpClient.get<any>( url );
  }

  getProject( projectId: number ) {
    let url = this.apiURL + '/' + projectId;
    return this.httpClient.get<any>( url );
  }

  postProject( nombreProyecto: string ) {
    return this.httpClient.post( this.apiURL, { name: nombreProyecto } );
  }

}
