/**
 * Layer 2 of the OSI Model is the Data Link Layer. It's
 * responsible for providing reliable data transfer across
 * the physical link. This layer is further divided into 2
 * sub-layers: the Logical Link Control (LLC) sub-layer
 * and the Media Access Control (MAC) sub-layer. The Data
 * Link Layer handles error detection and correction, flow
 * control, and MAC adressing.
 */

import { MACAddress, Frame } from "../GeneralTypes"; 

class DataLinkLayer {
    private devices: Map<MACAddress, DataLinkLayer>;
    private macAddress: MACAddress;

    constructor(macAddress: MACAddress) {
        this.devices = new Map();
        this.macAddress = macAddress;
    }

    /**
     * Connect a device to this device using its MAC address
     * @param device The device to connect
     */
    public connectDevice(device: DataLinkLayer): void {
        this.devices.set(device.getMACAddress(), device);
    }

    /**
     * Get the MAC address of this device
     */
    public getMACAddress(): MACAddress {
        return this.macAddress;
    }

    /**
     * Send a frame to a device with the given MAC address
     * @param destinationMAC The MAC address of the destination device
     * @param frame The frame to send
     */
    public send(destinationMAC: MACAddress, frame: Frame): void {
        const device = this.devices.get(destinationMAC);
        if (!device) throw new Error(`Device with MAC ${destinationMAC} not found`);
        device.receive(frame, this.macAddress);
    }

    /**
     * Receive a frame from a device
     * @param frame The received frame
     * @param sourceMAC The MAC address of the source device
     */
    public receive(frame: Frame, sourceMAC: MACAddress): void {
        console.log(`Received frame from ${sourceMAC}: ${frame}`);
        // TODO: Implement logic to process the received frame
    }
}