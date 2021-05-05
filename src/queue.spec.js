const head = require('./queue');

describe('Head',()=>{

    it('Head should be null if array is empty', () => {
        expect(head([])).toEqual(null);
    });

    it('Head should be first element', () => {
        expect(head([1,2,3])).toEqual(1);
    });
    
    it('Head should work for different strings', () => {
        expect(head(["A","B","C"])).toEqual("A");
    });

})
