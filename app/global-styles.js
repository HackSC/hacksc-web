import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    box-sizing:border-box;
    min-height: 100%
  }
  html *,
  html *:before,
  html *:after {
    box-sizing:inherit;

    font: 700 100% 'Space Mono', Monaco, Consolas, Courier-New, monospace;
    /* FONT OPTIMIZATION */
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
    -webkit-text-size-adjust:100%;
  }

  body {
    display: block;
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100%
    background-color: #0BDDEF;
    color: #FFF;
    font-size: 14px;
  }

  #app {
    min-height: 100%
  }
`;
