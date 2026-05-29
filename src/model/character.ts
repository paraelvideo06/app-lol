export class Character {
    constructor(
        private _id: string,
        private _championId: number,
        private _name: string,
        private _title: string,
        private _roles: string[] | null,
        private _thumbnailUrl: string
    ){};

    get id(): string {return this._id}
    set id(value: string) {this._id = value}

    get championId(): number {return this._championId}
    set championId(value: number) {this._championId = value}

    get name(): string {return this._name}
    set name(value: string) {this._name = value}

    get title(): string {return this._title}
    set title(value: string) {this._title = value}

    get roles(): string[] | null {return this._roles}
    set roles(value: string[] | null) {this._roles = value}

    get thumbnailUrl(): string {return this._thumbnailUrl}
    set thumbnailUrl(value: string) {this._thumbnailUrl = value}
}
