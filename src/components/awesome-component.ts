import { timeSecond, CountableTimeInterval } from 'd3-time';

export class MyAwesomeComponent {

    data(data: IMyDataFormat) {
        // set data, etc.
    }

    render(): CountableTimeInterval {
        // do stuff with d3
        return timeSecond;
    }

}

export interface IMyDataFormat {
    // keys/types
}