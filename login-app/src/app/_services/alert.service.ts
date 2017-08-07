import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
	private subject = new Subject<any>();
	private keppApterNavigationChange = false;
	constructor(private router: Router) {

	}

	success(message: string, keppApterNavigationChange = false) {

	}

	error(message: string, keppApterNavigationChange = false) {

	}

	getMessage(): Observable<any> {
		return this.subject.asObservable();
	}
}