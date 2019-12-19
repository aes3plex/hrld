import * as uuid from 'uuid';

export function generateID(): string {
    return uuid.v4();
}
