import { SessionData } from "./SessionData";

export class Segment {
    private destinationPort: number;
    private sourcePort: number;
    private message: SessionData;

    constructor(
        destinationPort: number,
        sourcePort: number,
        message: SessionData
    ) {
        this.destinationPort = destinationPort,
        this.sourcePort = sourcePort,
        this.message = message
    }
}