let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Admin';
    let text = 'Test Text';
    let res = generateMessage(from, text);
    expect(res.from).toBe(from)
    expect(res.text).toBe(text)
    expect(typeof res.createdAt).toBe('number');
  });
});
