const head = require('./queue');
const tail = require('./queue');
const max = require('./queue');
const min = require('./queue');

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

describe('Tail',()=>{

    it('Tail should be null if array is empty', () => {
        expect(tail([])).toEqual(null);
    });
    
    // let arr = [2,3];
    // it('Tail should return all elements except the first one', () => {
    //     console.log(tail([1,2,3]));
    //     expect(tail([1,2,3])).toEqual(arr);
    // });

})

describe('Max',()=>{

    it('Max should be null if array is empty', () => {
        expect(max([])).toEqual(null);
    });
    
    it('Max should return maximum element from the array if elements are negative', () => {
        expect(max([-1,-2,-3])).toEqual(-1);
    });

})

describe('Min',()=>{

    it('Max should be null if array is empty', () => {
        expect(min([])).toEqual(null);
    });
    
    it('Max should return maximum element from the array if elements are negative', () => {
        expect(min([1,2,3])).toEqual(1);
    });

})

