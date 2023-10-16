import { MACAddress } from "../GeneralTypes";
import { Packet } from './Packet';

export class Frame {
    private sendingMACAddress: MACAddress;
    private receivingMACAddress: MACAddress;
    private dataPacket: Packet;

    constructor(
        sendingMACAddress: MACAddress,
        receivingMACAddress: MACAddress,
        dataPacket: Packet
    ) {
        this.sendingMACAddress = sendingMACAddress,
        this.receivingMACAddress = receivingMACAddress,
        this.dataPacket = dataPacket
    }
}