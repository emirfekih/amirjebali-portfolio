// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH is set by the GitHub Pages workflow while the site lives at
// <user>.github.io/<repo>/. Once amirjebali.com is connected it's just "/".
export default defineConfig({
  site: 'https://amirjebali.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
