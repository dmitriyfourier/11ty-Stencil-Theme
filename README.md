# Blog starter


View the live demo [here](https://stencil-demo.pages.dev/), hosted on Cloudflare

![homepage](blog-v2.png)
![darkmode](blog-dark.png)

## Aims
A blog that still runs without javascript. Hence, no bundlers. 


## Features
- Static Site Gen — [Eleventy](https://www.11ty.dev/)

- Tailwind CSS v2.0 / Tailwind Typography / Dark Mode

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
## 404 pages

See the 

## Deployment
I using this template with [Cloudflare Pages](https://developers.cloudflare.com/pages/)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/dmitriyfourier/11ty-template-df)

Build Command: `npm run build`

Output folder: `_site`

## Recommend Fonts

- [Tilda Sans](https://tilda.cc/lp/tildasans/)
- [Line Awesome](https://icons8.com/line-awesome)


<!--
## Future Improvemeents

- [ ] Minification of assets
- [ ] Make next/prev posts
-->