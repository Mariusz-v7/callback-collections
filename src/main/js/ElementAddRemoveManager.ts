import _ from 'lodash';

export class ElementAddRemoveManager<T> {
    private elements: { [id:number] : T };
    private id = 0;

    constructor(private destroyMethod:Function) {
        this.elements = {};
    }

    public add(element: T) {
        let id = ++this.id;
        this.elements[id] = element;
        return id;
    }

    public get(id:number) {
        return this.elements[id];
    }

    public remove(id:number) {
        this.destroyMethod(this.elements[id]);
        _.unset(this.elements, id);
    }
}