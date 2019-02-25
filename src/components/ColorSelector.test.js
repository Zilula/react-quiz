import React from 'react';
import renderer from 'react-test-renderer';
import ColorSelector from './ColorSelector';


describe('Search Test', () => {
    it('matches a snapshot', () => {
        const tree = renderer.create(
            <ColorSelector handleChange={() => {}}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
