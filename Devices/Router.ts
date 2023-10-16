/**
 * The router's DHCP server assigns unique local IP addresses
 * for all connected devices.
 */
import { MACAddress, IPAddress } from "../GeneralTypes";

export class Router {
    dhcpPool: IPAddress[];
    leasedIPs: Map<MACAddress, IPAddress>;

    constructor() {
        this.dhcpPool = [];
        this.leasedIPs = new Map();
    }

    assignIPAddress(macAddress: MACAddress): IPAddress | null {
        // If MAC address already has a leased IP, return it
        if (this.leasedIPs.has(macAddress)) {
            return this.leasedIPs.get(macAddress);
        }

        // Otherwise, assign a new IP from the pool
        const availableIP = this.dhcpPool.shift();
        if (availableIP) {
            this.leasedIPs.set(macAddress, availableIP);
            return availableIP;
        } else {
            console.error("No IPs left in DHCP pool!");
            return null;
        }
    }

    // A map with all devices connected to the local network

    // method that generates a local IP Address

    // method that adds a new device to connected devices

    // method that removes a connected device

    /**
     * method that sends out ARP request when one device
     * on the network doesn't know the MAC address of the 
     * device that's also on the local network it's trying 
     * to reach
     */
}