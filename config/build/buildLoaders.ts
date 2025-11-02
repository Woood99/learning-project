import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
   const { isDev } = options;

   const reactRefreshLoader = {
      test: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: [
         {
            loader: require.resolve('babel-loader'),
            options: {
               plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
         },
      ],
   };

   const babelLoader = {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env'],
            plugins: [
               [
                  'i18next-extract',
                  {
                     locales: ['ru', 'en'],
                     keyAsDefaultValue: true,
                  },
               ],
            ],
         },
      },
   };

   const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   };

   const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
         {
            loader: 'file-loader',
         },
      ],
   };

   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };

   const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               modules: {
                  auto: (resPath: string) => !!resPath.includes('.module'),
                  localIdentName: isDev ? '[name]__[local]--[hash:base64:4]' : '[hash:base64:8]',
               },
            },
         },
         'sass-loader',
         'postcss-loader',
      ],
   };

   return [reactRefreshLoader, babelLoader, svgLoader, fileLoader, typescriptLoader, cssLoader];
}
