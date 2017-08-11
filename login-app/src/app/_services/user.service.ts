import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { User } from '../_models/index';


@Injectable()
export class UserService {
	constructor(private http: Http)
	{

	}

	getAll()
	{

	}

	getById(id: number)
	{

	}

	create(user: User)
	{
		return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
	}

	update(user: User)
	{

	}

	delete(id: number)
	{

	}

	// private helper methods

	 private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}