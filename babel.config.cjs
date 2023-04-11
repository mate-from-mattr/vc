module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-modules-commonjs',
      {
        // This will ensure that all ESM imports are converted to CommonJS imports
        loose: true,
      },
    ],
    ["transform-rename-import", { original: '^(.+?)\\.js', replacement: '$1.cjs' }] 
  ],
};
