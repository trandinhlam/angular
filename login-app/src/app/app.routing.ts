import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { EditComponent } from './edit/index';
import { AuthGuard } from './_guards/index';

const appRoutes : Routes = [
	{ path: '', 		component: HomeComponent, canActivate: [AuthGuard]},
	{ path: 'login', 	component: LoginComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'edit/:id', component: EditComponent},
	{ path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
