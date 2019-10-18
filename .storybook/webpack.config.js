const path = require('path');

const cssRules = [
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-modules-typescript-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
    exclude: path.resolve('node_modules'),
  },
  // {
  //   test: /\.css$/,
  //   use: ['style-loader', 'css-loader'],
  //   include: path.resolve('node_modules'),
  // },
];

const lessRule = {
  test: /\.less$/,
  use: [
    'style-loader',
    'css-modules-typescript-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
      },
    },
    'less-loader',
  ],
};

const stylRule = {
  test: /\.styl$/,
  use: [
    'style-loader',
    'css-modules-typescript-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
      },
    },
    'stylus-loader',
  ],
}

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'babel-loader',
      },
      // Optional
      {
        loader: 'react-docgen-typescript-loader',
      },
    ],
  });
  config.module.rules.push(...cssRules);
  config.module.rules.push(stylRule);
  config.module.rules.push(lessRule);
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
