import { configure, setAddon } from '@storybook/react';
import LiveEdit, {setOptions} from 'storybook-addon-react-live-edit';

function loadStories() {
  require('./stories/index.js'); // 指定 story 的位置
  // 可以是任意目录，根据自己需要写路径
}

configure(loadStories, module);

setOptions({ theme: 'darcula', presets: ['react'] });
setAddon(LiveEdit);