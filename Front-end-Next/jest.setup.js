// jest.setup.js
import '@testing-library/jest-dom';

global.URL.createObjectURL = jest.fn();
