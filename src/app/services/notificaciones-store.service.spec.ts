import { TestBed } from '@angular/core/testing';

import { NotificacionesStoreService } from './notificaciones-store.service';

describe('NotificacionesStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificacionesStoreService = TestBed.get(NotificacionesStoreService);
    expect(service).toBeTruthy();
  });
});
