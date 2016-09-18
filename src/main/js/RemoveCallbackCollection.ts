import {Collection} from 'callback-collections';

export class RemoveCallbackCollection<T> extends Collection<T> {
    constructor(private destroyMethod:Function) {
        super();
    }

    public remove(id:number) {
        this.destroyMethod(this.get(id));
        super.remove(id);
    }
}