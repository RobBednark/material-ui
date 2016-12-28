import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

let AvVideocamOff = (props) => (
  <SvgIcon {...props}>
    <path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"/>
  </SvgIcon>
);
AvVideocamOff = pure(AvVideocamOff);
AvVideocamOff.displayName = 'AvVideocamOff';
AvVideocamOff.muiName = 'SvgIcon';

export default AvVideocamOff;