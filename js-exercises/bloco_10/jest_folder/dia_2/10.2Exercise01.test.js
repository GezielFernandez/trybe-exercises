// This is a callback, so we'll probably
// have to use done().
const uppercase = require('./10.2Exercise01');

// test("Testando, não sei se vai passar", done => {
//   uppercase('geziel', callback => {
//     expect(callback).toBe('GEZIEL');
//     done();
//   })
// });

it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});