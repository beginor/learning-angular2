export interface Query {
    canvasAction: string;
    canvasContextId: number;
    canvasController: string;
    canvasHostname: string;
    canvasJobTag: string;
    canvasPid: number;
    elapsed: number;
    query: string;
    waiting: boolean;
}

export interface Database {
    queries: Query[];
}

export interface Data {
    startAt: number;
    databases: { [key:string]: Database };
}