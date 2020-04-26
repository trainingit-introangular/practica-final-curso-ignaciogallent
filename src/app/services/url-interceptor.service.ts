import { DatePipe } from '@angular/common';
import { HttpErrorResponse, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Notificacion, TipoNotificacionEnum } from '../models/notification.model';
import { NotificacionesStoreService } from './notificaciones-store.service';

@Injectable( {
  providedIn: 'root'
} )
export class UrlInterceptorService implements HttpInterceptor {

  constructor( private notificacionStore: NotificacionesStoreService, private datePipe: DatePipe ) { }

  public intercept( req, next ) {

    let today = this.datePipe.transform( new Date(), 'HH:mm:ss' ).toString();

    return next.handle( req ).pipe(
      tap(
        ( event: HttpEvent<any> ) => {

          if ( event instanceof HttpResponse ) {

            let notificacion: Notificacion = {
              mensaje: today + " Status: " + event['status'],
              tipoNotificacion: TipoNotificacionEnum.success
            }
            this.notificacionStore.dispatch( notificacion );
          }
        },
        ( error: HttpErrorResponse ) => {
          let notificacion: Notificacion = {
            mensaje: today + " Status: " + error['status'],
            tipoNotificacion: TipoNotificacionEnum.error
          };
          this.notificacionStore.dispatch( notificacion );
        }
      )
    );
  }
}
