import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notificacion } from '../models/notification.model';

@Injectable( {
  providedIn: 'root'
} )
export class NotificacionesStoreService {

  private notifications: Notificacion[] = [];
  private notifications$ = new BehaviorSubject<Notificacion[]>( [] );
  public select$ = () => this.notifications$.asObservable();

  constructor( ) { }

  public dispatch( notificacion: Notificacion ) {

    if ( notificacion ) {
      this.notifications.push( notificacion );
      this.notifications$.next( [...this.notifications] );
    }
  }
}
