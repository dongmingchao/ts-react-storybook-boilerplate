import { configure, setAddon } from '@storybook/react';
import LiveEdit, { setOptions } from 'storybook-addon-react-live-edit';

const req = require.context('../components', true, /\.stories.tsx$/);

function loadStories() {
  require('./stories/index.js'); // 指定 story 的位置
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

setOptions({ theme: 'darcula', presets: ['react'] });
setAddon(LiveEdit);
