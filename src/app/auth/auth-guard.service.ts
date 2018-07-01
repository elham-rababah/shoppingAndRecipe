import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromAuth from './ngrx-store/auth.reducers';
import * as formApp from '../ngrx-store/app.redusers';

@Injectable()

export class AuthGuard implements CanActivate {
	
	constructor(
		private store: Store<fromAuth.State>) {
	}

	canActivate(route: ActivatedRouteSnapshot ,state:RouterStateSnapshot){
		
		let isAuthenticated;
		let x = this.store.take(1).subscribe(data=>{
			isAuthenticated = data['auth']['authenticated'];
		})
		return isAuthenticated; 
	}
}