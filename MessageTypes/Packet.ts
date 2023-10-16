import { Segment } from './Segment';
import { IPAddress } from '../GeneralTypes';

export class Packet {
    private segment: Segment;
    private destinationIP: IPAddress;
    private sourceIP: IPAddress;

    constructor(
        segment: Segment,
        destinationIP: IPAddress,
        sourceIP: IPAddress
    ) {
        this.segment = segment;
        this.destinationIP = destinationIP;
        this.sourceIP = sourceIP;
    }
}