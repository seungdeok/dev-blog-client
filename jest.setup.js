import '@testing-library/jest-dom/jest-globals';

const { server } = require('./src/mocks/server');

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
