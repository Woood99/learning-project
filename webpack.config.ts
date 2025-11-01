import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuildMode, BuildEnv } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {
   const paths: BuildPaths = {
      entry: {
         main: path.resolve(__dirname, 'src', 'index.tsx'),
      },
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
   };

   const mode: BuildMode = env.mode || 'development';
   const PORT = env.port || 3000;

   const isDev = mode === 'development';

   const config: webpack.Configuration = buildWebpackConfig({
      mode,
      paths,
      isDev,
      port: PORT,
   });

   return config;
};
