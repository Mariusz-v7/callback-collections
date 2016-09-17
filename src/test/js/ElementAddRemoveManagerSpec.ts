import {ElementAddRemoveManager} from 'mrugames-element-add-remove-manager';

describe('ElementAddRemoveManager - adding new elements', () => {
    let manager:ElementAddRemoveManager<string>;

    beforeEach(() => {
        manager = new ElementAddRemoveManager<string>(() => {});
    });

    it('given new instance of manager, when add new element, then id should equal 1', () => {
        let id = manager.add("test");
        expect(id).toBe(1);
    });

    it('when add more new elements, then id should increment', () => {
        let id1 = manager.add("test");
        let id2 = manager.add("test");
        let id3 = manager.add("test");

        expect(id2).toBe(id1 + 1);
        expect(id3).toBe(id2 + 1);
    });
});

describe('ElementAddRemoveManager - operating on existing elements', () => {
    let manager:ElementAddRemoveManager<string>;
    let el1:string, el2:string, el3:string;
    let id1:number, id2:number, id3:number

    beforeEach(() => {
        manager = new ElementAddRemoveManager<string>(() => {});
        el1 = "el1";
        el2 = "el2";
        el3 = "el3";

        id1 = manager.add(el1);
        id2 = manager.add(el2);
        id3 = manager.add(el3);
    });

    it('given existing manager with some elements, when each is get by id, then proper walue is returned', () => {
        expect(manager.get(id1)).toBe(el1);
        expect(manager.get(id2)).toBe(el2);
        expect(manager.get(id3)).toBe(el3);
    });

    it('given existing manager with some elements, when element is removed by id, then get() returns undefined', () => {
        manager.remove(id2);
        expect(manager.get(id2)).toBeUndefined();
    });

    it('given existing manager with some elements, when element is removed, then destroy method is called', (done) => {
        let manager = new ElementAddRemoveManager<string>((el:string) => {
            expect(el).toBe("test string");
            done();
        });

        let id = manager.add("test string");
        manager.remove(id);
    });
});
