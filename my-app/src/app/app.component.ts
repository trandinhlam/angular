import { Component } from '@angular/core';
import { Hero } from './heroes/hero';
import { HeroService } from './heroes/hero.service';

@Component({
	selector: 'app',
	styleUrls: ['./app.component.css'],
	template: `
		<h1>{{title}}</h1>
		<a routerLink="/">Home</a>
		<nav>
			<a routerLink="/heroes">Heroes</a>
			<a routerLink="/dashboard">Dash Board</a>
		</nav>
		<router-outlet></router-outlet>
		`,
		providers: [HeroService]
})
export class AppComponent {
	title = 'tour of Heroes';
}