import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'git@github.com:S4NDW1CH/s4ndw1ch.github.io.git',
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);