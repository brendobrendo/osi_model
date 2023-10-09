import { NIC } from './Devices/NIC';
import { Router } from './Devices/Router';

const kirasComputer = new NIC('00:1A:2B:3C:4D:53', '10.0.0.17')
const brendansComputer = new NIC('AC:CF:85:34:BA:39', '10.0.0.15')
const xfinityRouter = new Router()