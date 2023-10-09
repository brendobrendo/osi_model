import { Medium, Modulation, Connector } from "../GeneralTypes";

/**
 * Layer 1 is the Physical Layer, which primarily deals with the
 * hardware aspect of the network, such as cables, switches, and
 * the network interface card.
 * 
 * Defines the transmission and reception of RAW BIT STREAMS
 * between a device and a SHARED physical medium.
 * 
 * It defines things like voltage levels, timing, rates, distances,
 * modulation, and connectors.
 * 
 * Think physical shared medium, starndards for transmitting onto the
 * medium, standards for receiving from the medium.
 * 
 * No means for device to device communication- besides connecting with
 * a wire. Everything that is transmitted to the medium is broadcast to
 * all other devices using that medium.
 */

export interface PhysicalLayerConnectionSpec {
    voltageLevel: number;
    timing: number;
    rate: number; // in Mbps
    maxDistance: number; // in meters
    modulation: Modulation;
    connector: Connector;
}

export class PhysicalLayerConnection {
    private medium: Medium;
    private specs: PhysicalLayerConnectionSpec;

    constructor(medium: Medium, specs: PhysicalLayerConnectionSpec) {
        this.medium = medium;
        this.specs = specs;
    }

    getMedium(): Medium {
        return this.medium;
    }

    getSpecs(): PhysicalLayerConnectionSpec {
        return this.specs;
    }

    setRate(newRate: number): void {
        this.specs.rate = newRate;
        console.log(`Rate updated to ${newRate} Mbps`);
    }
}
