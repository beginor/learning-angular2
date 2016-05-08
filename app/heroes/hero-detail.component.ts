import {Component} from '@angular/core';
import {OnActivate, Router, RouteSegment} from '@angular/router';
import {Hero, HeroService} from './hero.service';

@Component({
    template: `
        <h2>HEROES</h2>
        <div *ngIf="hero">
            <h3>"{{hero.name}}"</h3>
            <div>
                <label>Id: </label>{{hero.id}}
            </div>
            <div>
                <label>Name: </label>
               <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
            <p>
                <button (click)="gotoHeroes()">Back</button>
            </p>
        </div>
    `,
    providers: [HeroService]
})
export class HeroDetailComponent implements OnActivate {
    
    hero:Hero;

    constructor(private router:Router,
                private service:HeroService) {
    }

    routerOnActivate(curr:RouteSegment):void {
        let id = +curr.getParam('id');
        this.service.getHero(id).then(hero => this.hero = hero);
    }

    gotoHeroes() {
        // Like <a [routerLink]="['/heroes']">Heroes</a>
        this.router.navigate(['/heroes']);
    }
    
}
