class MenuItem {

  private _id: string;
  private _path: string;
  private _name: string;

  constructor(id: string, path: string, name: string) {
    this._id = id;
    this._path = path;
    this._name = name;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
