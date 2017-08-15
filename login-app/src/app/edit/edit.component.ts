import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
	 moduleId: module.id,
 	templateUrl: 'edit.component.html',
})
export class EditComponent implements OnInit {
	model: any = {};
	loading = false;
	constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private activatedRoute: ActivatedRoute)
	{
		
	}

	ngOnInit()
	{
		this.activatedRoute.params.subscribe((params: Params) => {
        	let userId = params['id'];
        	this.userService.getById(userId).subscribe((users: any) => { 
	      		this.model = users; 
	      	});
      	});
	}

	update()
	{
		this.loading = true;
		console.log(this.model);
		this.userService.update(this.model).subscribe(
			data => {
				this.router.navigate(['/']);
			},
			error => {
				this.alertService.error(error);
				this.loading = false;
			}
		);
	}
}
