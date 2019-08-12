/**
 * @author WMXPY
 * @namespace Color
 * @description Color
 */

import { getColor, THEME } from "./set";

export class Color {

    public static fromList(list: string[]): Color {

        return new Color(list);
    }

    public static fromTheme(theme: THEME): Color {

        return new Color(getColor(theme));
    }

    private readonly _list: string[];

    private _pointer: number;

    private constructor(list: string[]) {

        this._list = list;
        this._pointer = 0;
    }

    public hex(): () => string {

        return (): string => {

            this._checkPointer();
            return this._list[this._pointer++];
        };
    }

    public rgba(): () => string {

        return (): string => {

            this._checkPointer();
            return this._parseHEXToRGBA(this._pointer++);
        };
    }

    private _checkPointer(): this {

        if (!Boolean(this._list[this._pointer])) {
            this._pointer = 0;
        }
        return this;
    }

    private _parseHEXToRGBA(location: number): string {

        let color: string = this._list[location];
        if (color.substring(0, 1) === "#") {
            color = color.substring(1, color.length);
        }

        let result: string = "rgba(";
        for (let i: number = 0; i < color.length; i += 2) {
            result += parseInt(color.substring(i, i + 2), 16).toString();
            result += ", ";
        }
        result += "0.3)";
        return result;
    }
}
