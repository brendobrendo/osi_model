import { NIC } from './NIC';
import { MACAddress } from '../GeneralTypes';

export class Laptop {
    private nic: NIC | null;
    private model: string;
    private os: string;
    private memoryCapacity: number;
    private memoryUsage: number;
    private processorArchitectureType: string;
    private processorType: string;
    private processorSpeed: number;
    private portRange: number;
    private macAddress: MACAddress;

    constructor(
        model: string = 'MacBook Air',
        os: string = 'MacOS',
        memoryCapacity: number = 8,
        memoryUsage: number = 0,
        processorArchitectureType: string = 'x86',
        processorType: string = 'Intel',
        processorSpeed: number = 1.1,
    ) {
        this.nic = new NIC(macAddress: MACAdress);
        this.model = model;
        this.os = os;
        this.memoryCapacity = memoryCapacity; // In GB
        this.memoryUsage = memoryUsage;
        this.processorArchitectureType = processorArchitectureType;
        this.processorType = processorType,
        this.processorSpeed = processorSpeed
    }
}