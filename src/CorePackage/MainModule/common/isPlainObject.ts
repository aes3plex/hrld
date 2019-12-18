export function isPlainObject(object: object): boolean {
    if (typeof object !== 'object' || object === null) {
        return false;
    }

    let proto = object;

    while (Reflect.getPrototypeOf(proto) !== null) {
        proto = Reflect.getPrototypeOf(proto);
    }

    return Reflect.getPrototypeOf(object) === proto;
}
