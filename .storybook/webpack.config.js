module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'ts-loader',
      },
      // Optional
      {
        loader: 'react-docgen-typescript-loader',
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
