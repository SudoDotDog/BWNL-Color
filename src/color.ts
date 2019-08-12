/**
 * @author WMXPY
 * @namespace Color
 * @description Color
 */

export class Color {

    private readonly _list: string[];
    private _pointer: number;

    public constructor(list: string[]) {

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
            return this.parseHEXToRGBA(this._pointer++);
        };
    }

    private _checkPointer(): this {

        if (!Boolean(this._list[this._pointer])) {
            this._pointer = 0;
        }
        return this;
    }

    private parseHEXToRGBA(location: number): string {

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
