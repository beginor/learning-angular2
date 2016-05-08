// TODO SOMEDAY: Feature Componetized like HeroCenter
import {Component, OnInit}   from '@angular/core';
import {Router}              from '@angular/router';
import {Hero, HeroService}   from './hero.service';

@Component({
    template: `
        <h2>HEROES</h2>
        <ul class="items">
            <li *ngFor="let hero of heroes"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
    `,
    providers: [HeroService]
})
export class HeroListComponent implements OnInit {

    heroes:Hero[];

    constructor(private router:Router,
                private service:HeroService) {
    }

    ngOnInit() {
        this.service.getHeroes().then(heroes => this.heroes = heroes)
    }

    onSelect(hero:Hero) {
        this.router.navigate(['/hero', hero.id]);
    }
}
