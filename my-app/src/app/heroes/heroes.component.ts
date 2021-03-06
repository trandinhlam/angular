import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['../app.component.css'],
	providers: [HeroService]
})

export class HeroesComponent implements OnInit {
	title = 'Tour of Heroes';
	heroes : Hero[];
	selectedHero: Hero;

	onSelect(hero: Hero): void
	{
		this.selectedHero = hero;
	}

	constructor(
		private heroService: HeroService,
		private router: Router
	) {}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}