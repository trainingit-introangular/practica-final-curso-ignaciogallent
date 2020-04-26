import { Component, OnInit } from '@angular/core';
import { NotificacionesStoreService } from '../../../services/notificaciones-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  mensajeFooter: string;

  constructor(private notificacionesStore: NotificacionesStoreService ) {}

  ngOnInit() {

    this.notificacionesStore.select$().subscribe( notificaciones =>
      notificaciones.forEach( n => {
        this.mensajeFooter = n.mensaje;
      } )
    );
  }
}
