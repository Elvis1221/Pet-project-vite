// vite.config.js
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default {
  // ...
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // Set it to `true` to export React component as default.
        // Notice that it will overrides the default behavior of Vite.
        exportAsDefault: true,

        // svgr options: https://react-svgr.com/docs/options/
        svgrOptions: {
          // ...
        },

        // esbuild options, to transform jsx to js
        esbuildOptions: {
          // ...
        },

        //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
        include: '**/*.svg',

        //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
        exclude: '',
      },
    }),
  ],
};
