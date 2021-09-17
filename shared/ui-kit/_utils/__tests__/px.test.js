import rem from '../rem';

test('it should turn a rem value into a px', () => {
  expect(rem('1rem')).toEqual('12px');
  expect(rem('1.5rem')).toEqual('18px');
});
