import {
    noop
} from '../index';

describe('noop', () => {
    it('should return undefined when executed', () => {
        expect(noop()).toEqual(undefined)
    })
})