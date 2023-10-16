import { PresentationData } from "./PresentationData";

export class SessionData {
    private message: PresentationData;

    constructor(message: PresentationData) {
        this.message = message
    }
}