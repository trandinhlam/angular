import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
	//array in local storage for registered users
	let users: any[] = JSON.parse(localStorage.getItem('user')) || [];

	// configure fake backend
	backend.connections.subscribe((connection: MockConnection)=> {

	});

	return new Http(backend, options);
};

export let fakeBackendProvider = {
	//use fake backend in place of Http service for backend-less development
	provide: Http,
	useFactory: fakeBackendFactory,
	deps: [MockBackend, BaseRequestOptions, XHRBackend]
};