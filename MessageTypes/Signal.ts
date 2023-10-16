import { Medium } from '../GeneralTypes';
import { Frame } from './Frame';

export class Signal {
    private medium: Medium;
    private frame: Frame;

    constructor(medium: Medium, frame: Frame) {
        this.medium = medium;
        this.frame = frame;
    }
}