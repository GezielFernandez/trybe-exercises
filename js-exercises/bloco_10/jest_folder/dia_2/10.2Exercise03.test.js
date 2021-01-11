const { getUserName } = require('./10.2Exercise02');
// const exercise02 = require('./10.2Exercise02');

describe('Intended tests to verify id existance', () => {
  test('if id exists', async () => {
    expect.assertions(1)
    const list = await getUserName(4);
    expect(list).toEqual('Mark');
  })
  
  test('if id doesnt exist', async () => {
    try {
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 2 not found.' })
    }
  });
})
