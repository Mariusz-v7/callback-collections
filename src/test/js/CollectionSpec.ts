import {Collection} from 'callback-collections';

describe('Collection - adding new elements', () => {
    let collection:Collection<string>;

    beforeEach(() => {
        collection = new Collection<string>();
    });

    it('given new instance of collection, when add new element, then id should equal 1', () => {
        let id = collection.add("test");
        expect(id).toBe(1);
    });

    it('when add more new elements, then id should increment', () => {
        let id1 = collection.add("test");
        let id2 = collection.add("test");
        let id3 = collection.add("test");

        expect(id2).toBe(id1 + 1);
        expect(id3).toBe(id2 + 1);
    });
});

describe('Collection - operating on existing elements', () => {
    let collection:Collection<string>;
    let el1:string, el2:string, el3:string;
    let id1:number, id2:number, id3:number

    beforeEach(() => {
        collection = new Collection<string>();
        el1 = "el1";
        el2 = "el2";
        el3 = "el3";

        id1 = collection.add(el1);
        id2 = collection.add(el2);
        id3 = collection.add(el3);
    });

    it('given existing collection with some elements, when each is get by id, then proper walue is returned', () => {
        expect(collection.get(id1)).toBe(el1);
        expect(collection.get(id2)).toBe(el2);
        expect(collection.get(id3)).toBe(el3);
    });

    it('given existing collection with some elements, when element is removed by id, then get() returns undefined', () => {
        collection.remove(id2);
        expect(collection.get(id2)).toBeUndefined();
    });
});
