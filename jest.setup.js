
/* tslint:disable */

import EventSource from 'eventsourcemock';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

const fetchPolifill = require('whatwg-fetch');
global.fetch = fetchPolifill.fetch;
global.Request = fetchPolifill.Request;
global.Headers = fetchPolifill.Headers;
global.Response = fetchPolifill.Response;

Object.defineProperty(global.document, 'cookie', {
    writable: true,
    value: '',
});

Object.defineProperty(global, 'EventSource', {
    value: EventSource,
});

configure({
    adapter: new Adapter(),
});

// For async tests, catch all errors here so we don't have to try / catch
// everywhere for safety
process.on('unhandledRejection', (error) => {
    console.log(error);
});
