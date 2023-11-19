const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const moment = require('moment')
const slugify = require('slugify')
const img2picture = require('eleventy-plugin-img2picture')
const fs = require("fs");
const Image = require("@11ty/eleventy-img");
const embedEverything = require("eleventy-plugin-embed-everything");
moment.locale('en')

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(embedEverything)
  eleventyConfig.addPlugin(syntaxHighlight)
  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString()
  })
 
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).utc().format('LL') // E.g. May 31, 2019
  })

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)
  
  // To enable merging of tags
  eleventyConfig.setDataDeepMerge(true)

  // Copy these static files to _site folder
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/manifest.json')
  eleventyConfig.addPassthroughCopy('src/avatar')
  eleventyConfig.addPassthroughCopy('src/CV')
  eleventyConfig.addPassthroughCopy('src/i')
  eleventyConfig.addPassthroughCopy('src/browserconfig.xml')
  eleventyConfig.addPassthroughCopy('src/CNAME')
  eleventyConfig.addPassthroughCopy('src/robots.txt')

  // To create excerpts
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: 'post_excerpt',
    excerpt_separator: '<!-- excerpt -->'
  })

  // To create a filter to determine duration of post
  eleventyConfig.addFilter('readTime', (value) => {
    const content = value
    const textOnly = content.replace(/(<([^>]+)>)/gi, '')
    const readingSpeedPerMin = 450
    return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin))
  })

  // Enable us to iterate over all the tags, excluding posts and all
  eleventyConfig.addCollection('tagList', collection => {
    const tagsSet = new Set()
    collection.getAll().forEach(item => {
      if (!item.data.tags) return
      item.data.tags
        .filter(tag => !['posts', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  })
  // slugify filter //
  eleventyConfig.addFilter('slug', (str) => {
    if (!str) {
      return
    }
  
    return slugify(str, {
      lower: true,
      replacement: '-', 
      strict: true,
      locale: 'en',
      remove: /["]/g,
    })
  })

  const md = markdownIt({ html: true, linkify: true })
  /*md.use(markdownItAnchor, { 
    level: [1, 2], 
    permalink: markdownItAnchor.permalink.headerLink({ 
      safariReaderFix: true,
      class: 'header-anchor',
    })
  })*/

  // MD Table Container // 

  
  eleventyConfig.setLibrary('md', md)
  // Open graph generation
  eleventyConfig.addFilter('splitlines', function(input) {
    const parts = input.split(' ')
    const lines = parts.reduce(function(prev, current) {

      if (!prev.length) {
        return [current]
      }
    
      let lastOne = prev[prev.length - 1]

      if (lastOne.length + current.length > 19) {
        return [...prev, current]
      }

      prev[prev.length - 1] = lastOne + ' ' + current

      return prev
    }, [])

    return lines
  })
  // Conver og images from SVG to JPG
  eleventyConfig.on('afterBuild', () => {
    const socialPreviewImagesDir = '_site/assets/img/og/'
    fs.readdir(socialPreviewImagesDir, function (err, files) {
      if (files.length > 0) {
        files.forEach(function (filename) {
          if (filename.endsWith('.svg')) {

            let imageUrl = socialPreviewImagesDir + filename
            Image(imageUrl, {
              formats: ['jpeg'],
              outputDir: './' + socialPreviewImagesDir,
              filenameFormat: function (id, src, width, format, options) {

                let outputFilename = filename.substring(0, (filename.length-4))
                      
                return `${outputFilename}.${format}`

              }
            })

          }
        })
      }
    })
  })
  // aside notes
  eleventyConfig.addLiquidShortcode('aside', (text,) => {
    return `<p class="aside">${text}</p>`
  })

  // shortcod note-image
  eleventyConfig.addLiquidShortcode('aside-img', (filename,alt,caption) => {
    return `<figure class="aside"><img src="/assets/img/${filename}" alt="${alt}" /><figcaption>${caption}</figcaption></figure>`
  })
  
  // telgram hortcode embeded
  eleventyConfig.addLiquidShortcode('tg-embed', (tgchannel,tgpost,) => {
    return `<div class="tg-embeded"> <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-post="${tgchannel}/${tgpost}" data-width="100%" data-userpic="true" data-color="CA9C0E" data-dark="1" data-dark-color="F0B138"></script></div>`
  })
  // IMAGES
  // asset_img shortcode
  eleventyConfig.addLiquidShortcode('asset_img', (filename, alt, caption,) => {
    return `<figure><img src="/assets/img/${filename}" alt="${alt}" /><figcaption>${caption}</figcaption></figure>`
  })

  eleventyConfig.addPlugin(img2picture, {
    // Should be same as Eleventy input folder set using `dir.input`.
    eleventyInputDir: './src/',

    // Output folder for optimized images.
    imagesOutputDir: '_site/assets/img/',

    // URL prefix for images src URLS.
    // It should match with path suffix in `imagesOutputDir`.
    // Eg: imagesOutputDir with `_site/images` likely need urlPath as `/images/`
    urlPath: '/assets/img/',
    extensions: ['jpg', 'png', 'jpeg'],
    formats: ['avif', 'webp', 'jpeg'],
    minWidth: 400,
    maxWidth: 1920,
    sizes:'100vw',
  })

  return {
    dir: {
      input: 'src'
    }
  }
}
