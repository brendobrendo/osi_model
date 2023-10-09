/**
 * The OSI Model applies to a broad range of devices and technologies
 * that are involved in network communication.
 */

type NetworkingDeviceType = 'Router' | 'Switch' | 'Hub/Repeater';
type IPAddress = string;
export type MACAddress = string;

class NetworkingDevice {
    private deviceType: NetworkingDeviceType;
    private ipAddress: IPAddress;
    private macAddress: MACAddress;
    private connectedDevices: NetworkingDevice[];

    constructor(deviceType: NetworkingDeviceType, ipAddress: IPAddress, 
        macAddress: MACAddress) {
        if (!['Router', 'Switch', 'Hub/Repeater'].includes(deviceType)) {
            throw new Error('Invalid device type. Must be Router, Switch, or Hub/Repeater.');
        }

        this.deviceType = deviceType;
        this.ipAddress = ipAddress;
        this.macAddress = macAddress;
        this.connectedDevices = [];
        }

        getNetworkingDeviceType(): NetworkingDeviceType {
            return this.deviceType;
        }

        getIPAddress(): IPAddress {
            return this.ipAddress;
        }

        getMACAddress(): MACAddress {
            return this.macAddress;
        }

        connectDevice(device: NetworkingDevice): void {
            this.connectedDevices.push(device);
            console.log(`${device.getNetworkingDeviceType()} connected to ${this.deviceType}`);
        }

        listConnectedDevices(): void {
            console.log(`Devices connected to ${this.deviceType}`);
            this.connectedDevices.forEach(device => {
                console.log(`${device.getNetworkingDeviceType()} - IP: ${device.getIPAddress()}, MAC: ${device.getMACAddress()}`);
            })
        }

        // TODO: Implement other device-specific operations
}

