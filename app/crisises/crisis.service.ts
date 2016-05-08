import {Injectable} from '@angular/core';

export class Crisis {

    constructor(public id:number, public name:string) {}
    
}

let crises = [
    new Crisis(21, 'Mr. Nice'),
    new Crisis(22, 'Narco'),
    new Crisis(23, 'Bombasto'),
    new Crisis(24, 'Celeritas'),
    new Crisis(25, 'Magneta'),
    new Crisis(26, 'RubberMan')
];

let crisesPromise = Promise.resolve(crises);

@Injectable()
export class CrisisService {

    static nextCrisisId = 100;

    getCrises() {
        return crisesPromise;
    }

    getCrisis(id:number | string) {
        return crisesPromise
            .then(crises => crises.filter(c => c.id === +id)[0]);
    }
}