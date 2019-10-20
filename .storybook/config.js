import { configure, setAddon, addDecorator } from '@storybook/react';
import LiveEdit, { setOptions } from 'storybook-addon-react-live-edit';
// import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import requireContext from 'require-context.macro';

const req = requireContext('../src', true, /\.stories.tsx$/);

function loadStories() {
  // require('./stories/index.jsx'); // 指定 story 的位置
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

setOptions({ theme: 'darcula', presets: ['react'] });
setAddon(LiveEdit);

addDecorator(withKnobs);
// addDecorator(
//   withInfo({
//     styles: {
//       header: {
//         h1: {
//           marginRight: '20px',
//           fontSize: '25px',
//           display: 'inline',
//         },
//         body: {
//           paddingTop: 0,
//           paddingBottom: 0,
//         },
//         h2: {
//           display: 'inline',
//           color: '#999',
//         },
//       },
//       infoBody: {
//         backgroundColor: '#eee',
//         padding: '0px 5px',
//         lineHeight: '2',
//       },
//     },
//     inline: true,
//     source: true,
//   })
// );
