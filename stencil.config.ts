import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test-stencil-components',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'dist-custom-elements', autoDefineCustomElements: true
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
};
