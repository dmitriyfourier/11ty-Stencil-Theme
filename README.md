# Blog starter

View the live demo [here](https://eleventy.rongying.co/), hosted on Cloudflare

## Aims
A blog that still runs without javascript. Hence, no bundlers. 


## Features
- Static Site Gen — [Eleventy](https://github.com/11ty/eleventy/)
- Tailwind CSS v2.0 / Tailwind Typography / Dark Mode
- [bettertext.css](https://github.com/paulradzkov/bettertext.css) thanks [Paul Radzkov](https://github.com/paulradzkov) 🙏
- Create excerpts using the `<!-- excerpt -->`
- Custom ReadTime filter
- 404 page

+ Tags page to view posts related to tag
  - Use of a `tagList` collection defined in `.eleventy.js`
  - `/tags` - show all available tags (excluding all and posts) as buttons (`tags.md`)
  - `/tags/tag-name` - shows all posts related to that tag (`tagList.md`)
+ Sitemap and Robots.txt 
  - Change site url in `_data/site.json`
+ Shortcode to handle images
  - Add image under `src/assets/img/posts` and use the asset_img short code
  - `{% asset_img 'filename' 'alt_text' %}` eg. `{% asset_img 'mailbox.jpg' 'mailbox' %}`
- Draft posts using the `published` frontmatter
+ Posts pagination in `index.html` 
  - change the `size` frontmatter variable
- ESLint
+ Bash script to create new post (based on YYYY and MM)
```bash
$ ./create new blog post
Created new post at src/posts/2021/01/new-blog-post.md
```
## Running locally

Create your blogpost under `src/posts`. I like to have mine sorted by YY/MM.

Navigate to localhost:8080 after starting the server.
```
npm start
```
## Deployment
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/YOURUSERNAME/YOURREPO)

Build Command: `npm run build`

Output folder: `_site`

## Features

### Social Profiles 
```json
"social": {
        "telegram-channel": "",
        "telegram-personal": "",
        "twitter": "",
        "mastodon": "",
        "linkedin": "",
        "threads": "",
        "instagram": "",
        "steam":"",
        "github":"",
        "spotify":"",
        "xbox":"",
        "epicgames":"",
        "discord":"",
        "battlenet":"",
        "facebook":"",
        "behance":"",
        "pinterest":"",
        "whatsapp":"",
        "dribbble":"",
        "youtube": ""
    },
```

## Using Line Awesome font

[Line Avesome](https://github.com/icons8/line-awesome) fot minimalistic icons

## Readebele Deates
Generate dates by [momentjs](https://github.com/moment/moment/).

Transform date from `2023-11-14` to `November 14, 2023`

```js
const moment = require('moment')
moment.locale('en') //change locale for date formatter (es, ru, fr, etc.)
```
In templates, filters `{{ date | dateIso }}` and `{{ date | dateReadable }}` are utilized.

Within the template, the tag is used as follows:
```html
<em>
  <time itemprop="datePublished" datetime="{{ date | dateIso }}">{{ date | dateReadable }}  
  </time>
</em>
```
## RSS Feed

The RSS Feed is generated from the `feed.liquid` file and supports the generation of [Yandex turbo](https://yandex.ru/dev/turbo/)

Final Feed → `/feed/feed.xml`

## Minify CSS with PostCSS

Using [postcss-minify](https://github.com/jake-low/postcss-minify)

**Input:**

```CSS
body {
  /* make it big and red */
  font-size: large;
  color: red;
}
```
**Output:**
```CSS
body{font-size:large;color:red}
```

## Options for pages and posts
```html
---
layout: post <!-- choose a template from the 'includes' folder -->
title: Typography Examples <!-- Page or post title for the meta title tag -->
desc: Example file in MD extension with shortcuts <!-- Description for the meta description tag -->
date: 2023-11-13 <!-- Date in YYYY-MM-DD format — will be formatted later using moments.js -->
url: typography-features <!-- URL through which the document will be accessible -->
cover: "horizontal-mgmt-OG.png" <!-- Image for OpenGraph images -->
permalink: "/posts/{{ url | slug }}/" <!-- URL for rel canonical -->
priority: 0.5 <!-- Optional. Priority for sitemap — 0,0 → 1,0. (0.5 default) -->
changefreq: monthly <!--always, hourly, daily, weekly, monthly (default), yearly, never --->
tags: <!-- List of tags for this content -->
- Features
- Typography
---
```
## Helpful file
`Sitemap.xml` and `robots.txt` — genrated automaticaly from page's data and data from `_data/site.json`

## Colors
### Dark theme
oklch(24% 0 0) — dark theme background
oklch(94% 0.012 17.4) dark theme for headers
oklch(93% 0 0) (dark theme main text)

### White theme 
oklch(98.83% 0.008 75) — BG
oklch(30.08% 0 0) Header
oklch(30.27% 0.008 75) Paragraph

