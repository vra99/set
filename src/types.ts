type MySet<T> = {
    values: T[];
    add: (value: T) => void;
    remove: (value: T) => void;
    has: (value: T) => boolean;
    intersection: (set: MySet<T>) => MySet<T>;
    union: (set: MySet<T>) => MySet<T>;
    difference: (set: MySet<T>) => MySet<T>;
    toString: (value: T) => string;
    size: () => number;
    clear: () => void;
    map: (callback: (value: T) => T) => MySet<T>;
    filter: (callback: (value: T) => boolean) => MySet<T>;
    flatten: () => MySet<T>;
}

export class MySetImpl<T> implements MySet<T> {
    values: T[];

    constructor(values: T[]) {
        this.values = values;
    }
    

    add(value: T) {
        if (!this.has(value)) {
            this.values.push(value);
        }
    }

    remove(value: T) {
        if (this.has(value)) {
            this.values = this.values.filter(v => v !== value);
        }
    }

    has(value: T) {
        return this.values.includes(value);
    }

    intersection(set: MySet<T>) {
        return new MySetImpl(this.values.filter(v => set.has(v)));
    }

    union(set: MySet<T>) {
        return new MySetImpl(this.values.concat(set.values));
    }

    difference(set: MySet<T>) {
        return new MySetImpl(this.values.filter(v => !set.has(v)));
    }

    size() {
        return this.values.length;
    }

    toString() {
        return this.values.join(', ');
    }

    clear() {
        this.values = [];
    }

    map<U>(callback: (value: T) => U) {
        return new MySetImpl(this.values.map(callback));
    }

    filter(callback: (value: T) => boolean) {
        return new MySetImpl(this.values.filter(callback));
    }

    flatten() {
        return new MySetImpl(this.values.reduce((acc, v) => acc.concat((v)), []));
    }

}

