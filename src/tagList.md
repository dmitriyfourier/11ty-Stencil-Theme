---
layout: blog
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
eleventyComputed:
  title: "{{ tag }}"
---  

{% for post in collections[tag] %}
<div class="py-4 sm:py-10">
  <p>
    <h2 class="text-2xl sm:text-4xl font-bold"><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
  </p>
  <em><time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time></em>
  <div>{{ post.templateContent }}</div>
    <span><a href="{{ post.url }}">Read More</a></span>
  </p>
</div>
{% endfor %}
