export enum TipoNotificacionEnum {
  info = 0,
  success = 1,
  error = 2,
  warning = 3
}

export interface Notificacion {
  mensaje: string,
  tipoNotificacion: TipoNotificacionEnum;
}
