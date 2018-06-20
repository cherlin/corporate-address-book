import React from 'react';
import { details } from './ContactDetailsPage';

describe('ContactDetailsPage', () => {
  describe('details', () => {
    it('renders "loading" if fetching from server', () => {
      const render = details(true, []);
      expect(render).toEqual(<p>Loading!</p>);
    });
  });
});
