const { getUserName } = require('./10.2Exercise02');
// const exercise02 = require('./10.2Exercise02');

describe('Testing the getUserName promise', () => {
  describe('when the id exists', () => {
    test('existing id', () => {
      expect.assertions(1);
      return getUserName(4).then(list => expect(list).toEqual('Mark'));
    })
  })
  describe('when the id doesnt exist', () => {
    test('id not recognized', () => {
      expect.assertions(1);
      return getUserName(2).catch(error => expect(error).toEqual({ error: 'User with 2 not found.' }));
    })
  })
});
