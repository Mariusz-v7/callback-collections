export class Collection<T> {
    private elements: { [id:number] : T } = {};
    private id = 0;

    public add(element:T):number {
        let id = ++this.id;
        this.elements[id] = element;
        return id;
    }

    public get(id:number):T {
        return this.elements[id];
    }

    public remove(id:number) {
        delete this.elements[id];
    }
}