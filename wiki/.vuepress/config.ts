import { viteBundler } from '@vuepress/bundler-vite';
import { containerPlugin } from '@vuepress/plugin-container';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';
import { resolve } from 'path';
import { defaultTheme, defineUserConfig } from 'vuepress';

const isProd = process.env.NODE_ENV === 'production';
export default defineUserConfig({
   title: 'ScoreSaber Wiki',

   head: [
      ['link', { rel: 'icon', href: '/favicon.png' }],
      ['meta', { name: 'theme-color', content: '#FDD85E' }],
   ],

   locales: {
      '/': {
         lang: 'en-US',
         title: 'ScoreSaber Wiki',
      },
      //   '/nl/': {
      //      lang: 'nl-NL',
      //      title: 'ScoreSaber Wiki',
      //   },
   },

   theme: defaultTheme({
      repo: 'ScoreSaber/ScoreSaber-Wiki',
      docsDir: 'wiki',
      docsBranch: 'master',
      editLink: true,
      contributors: false,

      locales: {
         '/': {
            selectLanguageText: '🌐 English',
            selectLanguageName: 'English',
            selectLanguageAriaLabel: 'Languages',
            editLinkText: 'Help improve this page!',
            lastUpdatedText: 'Last Updated',
            navbar: [
               { text: 'Home', link: '/' },
               { text: 'ScoreSaber Discord', link: 'https://discord.gg/scoresaber' },
            ],
         },
      },
   }),
   plugins: [
      registerComponentsPlugin({
         componentsDir: path.resolve(__dirname, 'components'),
      }),
      mediumZoomPlugin({
         zoomOptions: {
            margin: 16,
         },
      }),
      containerPlugin({
         type: 'feature',
         before: (info) => `<div class="feature"><h2>${info}</h2>`,
         after: () => '</div>',
      }),
      containerPlugin({
         type: 'align',
         before: (align) => `<div align="${align}">`,
         after: () => '</div>',
      }),
   ],
   bundler: viteBundler({
      viteOptions: {
         resolve: {
            alias: {
               '@images': resolve(__dirname, '../.assets/images'),
            },
         },
      },
   }),
});
