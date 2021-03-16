import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class RedirectGuard implements CanActivate {

constructor() {}

    canActivate(route: ActivatedRouteSnapshot): boolean {

        window.location.href = route.data['externalUrl'];
        return true;

    }
}
