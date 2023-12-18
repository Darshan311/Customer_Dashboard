import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthService {
    isLoggedIn = false;

    redirectUrl!: string;

    login(): Observable<boolean> {
        return Observable.arguments(true).delay(1000).do(this.isLoggedIn = true);
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
