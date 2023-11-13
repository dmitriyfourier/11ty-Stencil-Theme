---
layout: post
title: Typography Examples
desc: Example file in md extention with shortcuts
date: 2023-11-13
url: typography-features
cover: "horizontal-mgmt-OG.png"
permalink: "/posts/{{ url | slug }}/"
tags:
- Features
- Typography
---

## Headers
Examples of headings from h1 to h6

# Header 1 × H1
## Header 2 × H2
### Header 3 × h3
#### Header 4 × h4
##### Header 5 × h5
###### Header 6 × h6

## Regular text and Pharagraph
Felix, the adventurous fish, found a mysterious seashell in the depths of the ocean that turned out to be a portal to outer space. Intrigued by its enchanting glow, Felix couldn't resist the temptation to explore this peculiar gateway.

Upon entering the cosmic passage, Felix found itself in a realm where meteoroids soared, and planets shimmered with a kaleidoscope of colors. Surrounded by the celestial light, Felix discovered new friends – beings from various corners of the galaxy. It formed bonds with astronauts-amoebas and eccentric starry scatters alike.

Throughout its cosmic escapades, Felix experienced the thrill of weightlessness, gliding through asteroid fields and shimmering gas clouds. Together with its newfound companions, Felix hosted a cosmic ball, playing melodies from different corners of the galaxy. At the culmination of its space journey, the fish felt that each letter of the English alphabet became a key to understanding the boundless wonders of the cosmos.

## Lists
To mark unordered lists, you can use either `*`, `-`, or `+`:

- element 1
- element 2
- element ...

Nested items are created by adding four spaces before the bullet point marker:

* element 1
* element 2
  * nested element 2.1
  * nested element 2.2
* element ...

Organized list:

1. element 1
2. element 2
    1. nested
    2. nested
3. element 3
4. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.

It doesn't really matter how items are numbered in the code, the main thing is that the list item should be preceded by a number (any number) with a dot. You can do it this way:

0. element 1
0. element 2
0. element 3
0. element 4

Paragraphed list:

* One paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit.

* Two paragraphs. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.

* Three paragraphs. Ea, quis, alias nobis porro quos laborum minus sed fuga odio dolore natus quas cum enim necessitatibus magni provident non saepe sequi?

    Four paragraph (Four spaces at the beginning or one tab).


## Quotes
Quotes are formatted as in emails, using the `>` symbol.

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Or in a lazier way, when the `>` sign is placed before each element of the quotation, whether it is a paragraph, a heading or an empty line:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

You can put anything in quotes, including nested quotes:

> ## This is a header.
>
> 1.   This is the first list item.
> 2.   This is the second list item.
>
> > Вложенная цитата.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

## Source code

In pure Markdown, code blocks are separated by 4 spaces at the beginning of each line.

But in GitHub-Flavored Markdown (GFM for short) there is a more convenient way: put three apostrophes (on the letter Yo) before and after the code. You can also specify the language of the source code.

```html
<div>
<p>Тестовый тег<p>
</div>
```

```md
### Заголовок
Текст
```

The best part is that you don't need to replace angle brackets `< >` and ampersand `&` with their html-essences in the code.

## inline code

To insert code within sentences, you must enclose that code in apostrophes (on the letter Yeo). Example: `<html class="ie no-js">`.

If there is an apostrophe inside the code, you should frame the code with double apostrophes: ``There is a literal backtick (`) here.``

## Horizontal line

`hr` is created by three asterisks or three hyphens.

***

## Links

This is an embedded [link with title element](http://example.com/link "I link"). This is a [without title](http://example.com/link).

And here is [example][1] [multiple][2] [links][id] with markup like footnotes. A [short entry][] without an id will also work.

[1]: http://example.com/ "Optional Title Here"
[2]: http://example.com/some
[id]: http://example.com/links (Optional Title Here)
[short entry]: http://example.com/short

Taking long urls out of the sentence helps to preserve the readability of the source. Footnotes can be placed anywhere in the document.

## Emphasis

You can emphasize words with `*` and `_`. One symbol for slanted text, two symbols for bold text, three symbols for slanted and bold at the same time.

For example, this is _italic_ and this is also *italic*. And this is __strong__ and this is also **strong**. And this is ***bold and slanted*** at the same time.

## Strikethrough
GFM adds strikethrough text: two tildes `~` before and after the text.

~~Strikethrough~~

## Using HTML Inside Markdown

It's possible to mix Markdown and HTML. If you need to apply classes or attributes to certain elements, feel free to use HTML:

> Words can be emphasized using * and _. For example, this is <em class="a1">italic</em>, and this is also <i class="a1">italic</i>. Meanwhile, this is <b>strong</b>, and this is also <strong>strong</strong>.

Conversely, you can use Markdown inside HTML tags.

<section class="someclass">

### Markdown Example Inside HTML

<section class="someclass">

Words can be emphasized using `*` and `_`. For example, this is _italic_, and this is also *italic*. Meanwhile, this is __strong__, and this is also **strong**.

</section>

## Tables

Pure Markdown doesn't have a syntax for tables, but GFM does.

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

You can also draw lines on the sides for beauty:

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

You can control the alignment of columns with a colon.

| Left-Aligned  | Center Aligned  | Right Aligned |
|:------------- |:---------------:| -------------:|
| col 3 is      | some wordy text |     **$1600** |
| col 2 is      | centered        |         $12   |
| zebra stripes | are neat        |        ~~$1~~ |

Within tables you can use links, slanted, bold or strikethrough text.

For everything else, there is plain HTML.

## Images
Picture without `alt` text

![](//placehold.it/1980x1280)

Picture with alt and title:

![Alt text](//placehold.it/1980x1280 "You can set the title")

It's easy to remember: the syntax is the same as links, except that the opening square bracket is preceded by an exclamation mark.

Pictures of „footnotes“:

![Picture][image1]
![Image][image2]
![Picture][image3]

[image1]: //placehold.it/250x100
[image2]: //placehold.it/200x100
[image3]: //placehold.it/150x100

Image links:

[![Alt text](//placehold.it/150x100)](http://example.com/)

## ShortCodes

Add image under `src/assets/img/posts` and use the `asset_img` short code `{% asset_img 'filename' 'alt_text' %}` eg. `{% asset_img 'placeholder1920.jpg' 'placeholder' %}`

{% asset_img 'placeholder1920.jpg' 'placeholder' %}


`{% aside 'text' %}` and `{% asset_img 'placeholder1920.jpg' 'placeholder' %}` filename, alt, caption,

Felix, the adventurous fish, found a mysterious seashell in the depths of the ocean that turned out to be a portal to outer space. Intrigued by its enchanting glow, Felix couldn't resist the temptation to explore this peculiar gateway.

{% aside 'A small margin note text that displays to the right of the text, and allows you to add a <a href="example.com">link</a> using classic html' %}

Upon entering the cosmic passage, Felix found itself in a realm where meteoroids soared, and planets shimmered with a kaleidoscope of colors. Surrounded by the celestial light, Felix discovered new friends – beings from various corners of the galaxy. It formed bonds with astronauts-amoebas and eccentric starry scatters alike.

Throughout its cosmic escapades, Felix experienced the thrill of weightlessness, gliding through asteroid fields and shimmering gas clouds. Together with its newfound companions, Felix hosted a cosmic ball, playing melodies from different corners of the galaxy. At the culmination of its space journey, the fish felt that each letter of the English alphabet became a key to understanding the boundless wonders of the cosmos.