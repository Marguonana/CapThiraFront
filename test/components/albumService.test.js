import React from 'react';
import Link from './Link.react';
import renderer from 'react-test-renderer';
const mockAlbum = require('./../mock/mock.albumService');

test('Should not be null', () => {
  const n = "";
  expect(n).not.toBeUndefined();
});

test('Should get all photos',() => {
  expect(mockAlbum.getPhotos("5c9a952d217531394c726255")).not.toBeUndefined();
});