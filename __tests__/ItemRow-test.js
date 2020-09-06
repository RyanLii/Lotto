import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import HomepageItem from '../src/components/HomepageItem';
import DetailItem from '../src/components/DetailItem';

test('renders correctly', () => {
  const tree = renderer.create(<HomepageItem />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders DetailItem correctly', () => {
  const tree = renderer.create(<DetailItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
