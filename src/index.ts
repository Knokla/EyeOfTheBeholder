import { createServer } from 'http';

export type LiveReport = {
    time?: number;
    payloadLength?: number;
    idleTime?: number;
    lastIn?: number;
    lastOut?: number;
    startTime?: number;
    extra?: any;
}

export default class Eye {
    private data: LiveReport = { startTime: Date.now() };
    constructor(route: string, port: number) {
        const server = createServer((req, res) => {
            res.setHeader('Content-Type', 'application/json; charset=UTF-8');
            const baseUrl = req.url.split('?')[0];
            switch (baseUrl) {
                case route: res.end(JSON.stringify(this.data)); break;
                default: res.end(`{ "status": "error", "msg": "unknown url" }`);
            }
        });
        server.listen(port);
    };

    public setData = (data: LiveReport, ...args) => {
        this.data = { ...data };
        this.data.time = Date.now();
        this.data.extra = { ...args[0] };
    }
};

// const eye = new Eye('/getTelemetry', 7401);
// const data = {
//     time: 111,
//     payloadLength: 222,
//     idleTime: 333,
//     lastIn: 4444,
//     lastOut: 555,
//     extra: {some: 1, else: 2}
// }
// eye.setData(data, {test: 1, test2: 2, test3: 3});