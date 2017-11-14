import { expect } from 'chai';
import { MyAwesomeComponent } from './awesome-component';

describe('awesome-component', async () => {

    it('render - should return with something from d3', () => {
        const actual = new MyAwesomeComponent().render();
        expect(actual).to.be.not.undefined;
    });

});