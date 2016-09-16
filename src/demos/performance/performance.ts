import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Data, Database, Query } from '../../models/models';

@Component({
    selector: 'home',
    templateUrl: 'dist/demos/performance/performance.html',
    styles:[`
        .Query {
            position: relative;
        }
        .Query:hover .popover {
            left: -100%;
            width: 100%;
            display: block;
        }
    `],
    providers: [DataService]
})
export class PerformanceDemo {

    private databases: any;

    constructor(private dataService: DataService) {
        this.databases = {};
        this.loadSamples();
    }

    loadSamples() {
        var newData = this.dataService.getData();
        Object.keys(newData.databases).forEach(dbname => {
            var sampleInfo = newData.databases[dbname];

            if (!this.databases[dbname]) {
              this.databases[dbname] = {
                  name: dbname,
                  samples: []
              };
            }

            var db = this.databases[dbname];
            var samples = this.databases[dbname].samples;
            samples.push({
                time: newData.startAt,
                queries: sampleInfo.queries
            });

            if (samples.length > 5) {
              samples.splice(0, samples.length - 5);
            }

            db.lastSample = db.samples[db.samples.length - 1];
            db.topFiveQueries = db.lastSample.queries.slice(0, 5);
            while (db.topFiveQueries.length < 5) {
                db.topFiveQueries.push({ query: "" });
            }

            var countClassName = "label";
            if (db.lastSample.queries.length >= 20) {
                countClassName += " label-important";
            } else if (db.lastSample.queries.length >= 10) {
                countClassName += " label-warning";
            } else {
                countClassName += " label-success";
            }

            db.countClassName = countClassName;
        });

        setTimeout(() => { this.loadSamples(); }, DataService.timeout);
    }

    getDatabases() {
        var dbs: any[] = [];
        Object.keys(this.databases).forEach(dbname => {
            dbs.push(this.databases[dbname]);
        });
        return dbs;
    }

    getClassName(query: Query) {
        var className = "elapsed short";
        if (query.elapsed >= 10.0) {
            className = "elapsed warn_long";
        } else if (query.elapsed >= 1.0) {
            className = "elapsed warn";
        }
        return "Query " + className;
    }

    formatElapsed(value: any) {
        if(!value) {
            return '';
        }
        var str = parseFloat(value).toFixed(2);
        if (value > 60) {
        var minutes = Math.floor(value / 60);
        var comps = (value % 60).toFixed(2).split('.');
        var seconds = comps[0].lpad(2, '0');
        var ms = comps[1];
        str = minutes + ":" + seconds + "." + ms;
        }
        return str;
    }
}