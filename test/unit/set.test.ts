/**
 * @author WMXPY
 * @namespace color
 * @description Set
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { colorList, ColorSet, getColor, THEME } from '../../src';

describe('Given {Set} related', (): void => {

    const chance: Chance.Chance = new Chance('color-set');

    it('Should be able to get color set', (): void => {

        const target: number = chance.natural();
        const set: ColorSet = getColor(target);

        expect(set).to.have.lengthOf(5);
    });

    it('Should be able to get direct color set', (): void => {

        const set: ColorSet = getColor(THEME.DESIRE);

        expect(set).to.have.lengthOf(5);
        expect(set).to.be.deep.equal(colorList[THEME.DESIRE]);
    });
});
