import {Collection} from 'callback-collections';

export class AddCallbackCollection<T> extends Collection<T> {
    constructor(private initMethod:Function) {
        super();
    }

    public add(element:T) {
        let id = super.add(element);
        this.initMethod(element);
        return id;
    }
}