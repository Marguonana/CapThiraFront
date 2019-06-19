import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import signup from '../../src/components/signupComp';
import { dependencies, devDependencies } from '../../package.json';
import SignUpComp from '../../src/components/signUp/SignUpComp';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<signup />);
const signup = shallowRenderer.getRenderOutput();

test('should have a input as container', t => {
  t.is(signup.firstname, 'input');
});

test('should have a div as container', t => {
  t.is(SignUpComp.signIn, 'div');
});

test('should contains an H2', t => {
  t.is(about.props.children[0].type, 'h2');
});