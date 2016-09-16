import { Injectable } from '@angular/core';

import { Data } from '../models/models';

@Injectable()
export class DataService {

    static rows = 100;
    static timeout = 0;

    private start = Date.now();
    private loadCount = 0;

    getData() {
        var data: Data = {
            startAt: new Date().getTime() / 1000,
            databases: {}
        };

        for (var i = 1; i <= DataService.rows; i++) {
            data.databases['cluster' + i] = {
                queries: []
            };

            data.databases['cluster' + i + 'slave'] = {
                queries: []
            };
        }

        Object.keys(data.databases).forEach(dbname => {
            var info = data.databases[dbname];

            var r = Math.floor((Math.random() * 10) + 1);
            for (var i = 0; i < r; i++) {
                var q = {
                    canvasAction: '',
                    canvasContextId: 0,
                    canvasController: '',
                    canvasHostname: '',
                    canvasJobTag: '',
                    canvasPid: 0,
                    elapsed: Math.random() * 15,
                    query: 'SELECT blah FROM something',
                    waiting: Math.random() < 0.5
                };

                if (Math.random() < 0.2) {
                    q.query = '<IDLE> in transaction';
                }

                if (Math.random() < 0.1) {
                    q.query = 'vacuum';
                }

                info.queries.push(q);
            }

            info.queries = info.queries.sort((a: any, b: any) => b.elapsed - a.elapsed);
        });

        return data;
    }

}
