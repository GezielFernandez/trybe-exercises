// This is a callback, so we'll probably
// have to use done().
const uppercase = require('./10.2Exercise01');

test("Não deveria passar!", done => {
  uppercase('geziel', callback => {
    expect(callback).toBe('GEZIEL');
    done();
  })
});