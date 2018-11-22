import { Injectable } from '@angular/core';
import {PreloadAllModules} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Route} from '@angular/router/src/config';
import {delay, mergeMap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadService implements PreloadAllModules {

    public preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return of(route)
            .pipe(
                delay(3000),
                mergeMap((_: Route) => fn())
            );
    }
}
