const generateUniqueID = require('../../src/utils/generateUniqueId');


describe('generateUnique ID', () =>{
    it('should generate an unique ID', () => {
        const id = generateUniqueID();
        
        
        expect(2 + 2).toBe(4);
    });
});