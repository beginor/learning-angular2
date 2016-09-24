import { Component } from '@angular/core';
import { } from '@angular/http';
import { states, statesWithFlags, WikipediaService } from '../../services/state.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: 'dist/demos/ngb/typeahead.html',
    selector: 'typeahead-demo',
    styles: [`.form-control { width: 300px; }`],
    providers: [WikipediaService]
})
export class TypeaheadDemo {

    constructor(private wikiService: WikipediaService) { }

    formatter = (result: string) => result.toUpperCase();
    
    searchState = (text$: Observable<string>) => {
        return text$.debounceTime(200)
                    .distinctUntilChanged()
                    .map(term => term.length < 2 ? []
                        : states.filter(v => new RegExp(term, 'gi').test(v)).slice(0, 10));
    };

    state: string;

    searchWiki = (text$: Observable<string>) => {
        return text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(term => { this._searchingWiki = term.length > 0; })
            .switchMap(term => term === '' ? Observable.of([]) : this.wikiService.search(term))
            .do(() => { this._searchingWiki = false; });
    };

    _searchingWiki: boolean;
    searchResult: any;

    search2 = (text$: Observable<string>) =>
        text$
        .debounceTime(200)
        .map(term => term === '' ? [] : statesWithFlags.filter(v => new RegExp(term, 'gi').test(v.name)).slice(0, 10));

    formatter2 = (x: {name: string}) => x.name;

    state2: any;

}
