import {RemoveCallbackCollection} from 'callback-collections';

describe('RemoveCallbackCollection - destroy mehtod test', () => {

    it('given existing collection with some elements, when element is removed, then destroy method is called', (done) => {
        let collection = new RemoveCallbackCollection<string>((el:string) => {
            expect(el).toBe("test string");
            done();
        });

        let id = collection.add("test string");
        collection.remove(id);
    });

});
