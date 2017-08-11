import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend)
{
	//array in local storage for registered users
	let user1: {username:'a', password: 'a'};

	let users: any[] = JSON.parse(localStorage.getItem('users')) || [{username:'a', password: 'a'}];

	// configure fake backend
	backend.connections.subscribe((connection: MockConnection)=> 
	{
		//wrap in timeout to simulate server api call
		setTimeout(()=>
		{
			//authenticate
			if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post)
			{
				//get params from post request
				let params = JSON.parse(connection.request.getBody());
				//find if any user matches login credentials
				let filteredUsers = users.filter(user =>
				{
					return user.username === params.username && user.password === params.password;
				});

				if (filteredUsers.length)
				{
					// if login details are valid return 200 OK 
					let user = filteredUsers[0];
					connection.mockRespond(new Response(new ResponseOptions({
						status: 200,
						body :{
							id: user.id,
							username: user.username,
							token: 'fake-jwt-token'
						}
					})));
				}
				else
				{
					// else return 400
					connection.mockError(new Error('Username or password is incorrect'));
				}
				return ;
			}
			if(connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post)
			{
				let newUser = JSON.parse(connection.request.getBody());
				//validate duplicate user
				let filteredUsers = users.filter(user =>
				{
					return user.username === newUser.username;
				});

				if (filteredUsers.length)
				{
					return connection.mockError(new Error('Username "' + newUser.username + '" Exists'));
				}
				else
				{
					newUser.id = users.length + 1;
					users.push(newUser);
					localStorage.setItem('users', JSON.stringify(users));
					connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
				}
				return;
			}
			// pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });
		}, 500);
	});

	return new Http(backend, options);
};

export let fakeBackendProvider = {
	//use fake backend in place of Http service for backend-less development
	provide: Http,
	useFactory: fakeBackendFactory,
	deps: [MockBackend, BaseRequestOptions, XHRBackend]
};