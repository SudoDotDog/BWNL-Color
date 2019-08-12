/**
 * @author WMXPY
 * @namespace color
 * @description Set
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from "chance";
import { Color, colorList, ColorSet, getColor, THEME } from '../../src';

describe('Given {Color} related', (): void => {

    const chance: Chance.Chance = new Chance('color-color');

    it('Should be able to get hex color', (): void => {

        const color: Color = new Color(getColor(THEME.DESIRE));

        const hex: () => string = color.hex();

        expect(hex()).to.be.equal(colorList[THEME.DESIRE][0]);
        expect(hex()).to.be.equal(colorList[THEME.DESIRE][1]);
    });
});
