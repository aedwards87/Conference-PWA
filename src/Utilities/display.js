import { css } from 'styled-components'


export const grid = ({ 
  x = 'center', 
  xItem = '', 
  y = '',
  yItem = '' 
} = {}) => css `
  display: grid;
  justify-content: ${x};
  justify-items: ${xItem};
  align-content: ${y};
  align-items: ${yItem};
`;


export const flex = ({ 
  x = 'center', 
  y = '',
  dir = 'row',
} = {}) => css`
  display: flex;
  justify-content: ${x};
  align-items: ${y};
  flex-direction: ${dir}
`;
