import rem from '../rem';

test('it should turn a pixel value into a rem', () => {
  expect(rem('12px')).toEqual('1rem');
  expect(rem('18px')).toEqual('1.5rem');
});
