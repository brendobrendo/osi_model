/**
 * NICs primarily operate at the first two layers of the OSI Model
 * Typically they are attached to a device like a Laptop or VM.
 */

import { MACAddress, IPAddress, DataPacket } from "../GeneralTypes";
import { Router } from "./Router";

export class NIC {
    private macAddress: MACAddress;
    private ipAddress?: IPAddress;
    private connectedDevice: NIC;

    /**
     * @param macAddress type MACAddress
     */
    constructor(macAddress: MACAddress) {
        this.macAddress = macAddress;
    }

    getMACAddress(): MACAddress {
        return this.macAddress;
    }

    requestIP(router: Router) {
        this.ipAddress = router.assignIPAddress(this.macAddress);
    }

    getIPAddress(): IPAddress {
        return this.ipAddress;
    }

    connectToNetwork(router: Router): void {
        console.log(`Connected to ${router}`);
    }

    connectDevice(device: NIC): void {
        this.connectedDevice = device;
        console.log(`Connected to device with MAC: ${device.getMACAddress()}, IP: ${device.getIPAddress()}`);
    }

    sendPacket(packet: DataPacket): void {
        if (!this.connectedDevice) {
            console.log('No connected device. Cannot send packet.');
            return;
        }
        this.connectedDevice.receivePacket(packet);
    }

    receivePacket(packet: DataPacket): void {
        console.log(`Received packet: ${packet}`);
        // TODO: Implement logic to process teh received packet if necessary
    }

    disconnectDevice(): void {
        console.log(`Disconnected from device with MAC: ${this.connectedDevice?.getMACAddress()}`);
        this.connectedDevice = null;
    }
}