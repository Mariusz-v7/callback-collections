import {AddCallbackCollection} from 'callback-collections';

describe('RemoveCallbackCollection - destroy mehtod test', () => {

    it('given new instance of collection, when element is added, then callback is called', (done) => {
        let collection = new AddCallbackCollection<string>((el:string) => {
            expect(el).toBe("test string");
            done();
        });

        let id = collection.add("test string");
    });

});
