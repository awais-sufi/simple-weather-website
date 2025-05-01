import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

import { checkWeather } from './Weather.js';

describe('Weather App Button Click', () => {
  let Btn, searchBox;

  beforeEach(() => {
    document.body.innerHTML = `
      <input class="search input" />
      <button></button>
    `;
    Btn = document.querySelector('button');
    searchBox = document.querySelector('.search input');
  });
});
