// export type MACAddress = string;
export type IPAddress = string;
export type DataPacket = string;
export type Frame = string;
export type Port = number;
export type Signal = string;
export type Medium = 'WiFi' | 'Copper' | 'Fiber'
export type Modulation = 'ASK' | 'FSK' | 'PSK' | 'QAM'
export type Connector = 'RJRT' | 'USB' | 'SC' | 'ST' | 'MTP'

export class MACAddress {
    value: string;

    constructor() {
        this.value = this.generate();
    }

    generate(): string {
        let macAddress = '';
        for (let i = 0; i < 6; i++) {
            const byte = Math.floor(Math.random() * 256).toString(16);

            // Ensure it's 2 digits
            const paddedByte = byte.padStart(2, '0');

            macAddress += (i !== 0 ? ':' : '') + paddedByte;
        }
        return macAddress.toUpperCase();
    }

    toString(): string {
        return this.value;
    }
}