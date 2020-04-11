import { createGlobalStyle } from 'styled-components';

export const DarkMode = createGlobalStyle`
    :root{
    --color1: #283149;
    --color2: #404b69;
    --color3: #dbedf3;
    --color4: #00818a;
    --color5: #dbedf3;
    }
`

export const LightMode = createGlobalStyle`
    :root{
    --color1: #fff;
    --color2: #f4f5f7;
    --color3: #32325d;
    --color4: #32325d;
    --color5: #ececec;
    }
`