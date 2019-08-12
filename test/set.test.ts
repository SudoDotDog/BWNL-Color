/**
 * @author WMXPY
 * @namespace color
 * @description Set
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { ColorSet, getColor } from '../src';

describe('Given {Set} related', (): void => {

    const chance: Chance.Chance = new Chance('color-set');

    it('Should be able to get color set', (): void => {

        const target: number = chance.natural();
        const set: ColorSet = getColor(target);

        expect(set).to.have.lengthOf(5);
    });
});
