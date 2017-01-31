export class TrackModel {
    private _id: string = "";
    private _name: string = "";
    private _length: number = 0;
    private _artist: string = "";

    constructor(id: string = "", name: string = "", length: number = 0, artist: string = "") {
        this.id = id;
        this.name = name;
        this.length = length;
        this.artist = artist;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get artist(): string {
        return this._artist;
    }

    set artist(value: string) {
        this._artist = value;
    }
}