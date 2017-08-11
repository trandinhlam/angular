import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({

 	templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
	model: any = {};
	loading = false;
	constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService)
	{

	}

	ngOnInit()
	{
	}

	register()
	{
		this.loading = true;
		this.userService.create(this.model)
			.subscribe(
				data => {
					this.alertService.success('Resgistration sucessful', true);
					this.router.navigate(['/login']);
				},
				error => {
					this.alertService.error(error);
					this.loading = false;
				});
	}
}
