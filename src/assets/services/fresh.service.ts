import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FreshService {
  isApplicationFresh = true;

  changeStatus(): void {
    setTimeout((): void => {
      this.isApplicationFresh = false;
    }, 500);
  }
}
