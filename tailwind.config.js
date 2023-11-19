import harmonyPalette from "@evilmartians/harmony/tailwind";
module.exports = {
  theme: {
    colors: {
      ...harmonyPalette,
      // ...
      'social': {
        facebook: '#1877f2',
        twitter: '#1da1f2',
        mastodon: '#6364FF',
        whatsapp: '#25d366',
        google: '#dd4b39',
        linkedin: '#0a66c2',
        reddit: '#ff4500',
        instagram:'#c13584',
        lastfm:'#d51007',
        odnoklassniki:'#ed812b',
        spotify:'#1db954',
        gitlab:'#fca326',
        dribbble:'#ea4c89',
        telegram:'#0088cc',
        goodreads:'#553b08',
        kaggle:'#20beff',
        blizzard:'#0e86ca',
        epicgames:'#121212',
        medium:'#1a8917',
        vk:'#45668e',
        xbox:'#52b043',
        twitch:'#9146ff',
        playstation:'#003087',
        bitcoin:'#f7901f',
        ethereum:'#464a76',
        youtube:'#ff0000',
        behance:'#0057FF',
        pinterest:'#e60023',
        imdb:'#f6c700',
        'github': {
          light:'#333',
          dark: '#f5f5f5',
        },
        'steam': {
          light:'#000000',
          dark: '#f5f5f5',
        },
      },
      'tg': {
        light: '#fff',
        dark: '#15202b',
        deepdark: '#234',
      },
      'mk': {
        background: 'oklch(19.34% 0.012 75)',
        comments: 'oklch(61.33% 0.008 75)',
        white: 'oklch(96.68% 0.0171875 20)',
        yellow: {
                  main: 'rgb(229,181,103)',
                  deco: 'rgb(229,181,103, 0.25)',
                },
        green: '#b4d273',
        orange: {
                  main: 'rgb(232,125,62)',
                  deco: 'rgb(232,125,62, 0.25)',
                },
        purple: {
                  main: 'rgb(132, 91, 203)',
                  deco: 'rgb(158,134,200, 0.25)',
                },
        greenlow: {
            main: 'rgb(122,168,116)',
            deco: 'rgb(122,168,116, 0.25)',
                },
        pink: '#b05279',
        blue: {
                  main: 'oklch(58% 0.083 242)',
                  deco: 'rgb(108,153,187, 0.25)',
                  deep: '#4344b3',
                  deepde:'rgb(67, 68, 179, 0.25)'},
      },
      // ...
    },
    extend: {
      gridTemplateRows: {
        '6': 'repeat(6, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
  }, 
},
},
  darkMode: 'class',
  content: ['./src/**/*.md', './src/**/*.html', './src/_includes/**/*.liquid', './node_modules/flowbite/**/*.js'],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


