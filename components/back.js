import Router from 'next/router';

import ButtonOption from './buttonOption';

export default () => (
  <ButtonOption onClick={() => Router.back()}>↩</ButtonOption>
);
