---
layout: page
icon: fas fa-archive
order: 4
titleabout: Sözlük Arşivi
---

{% include lang.html %}

<div id="archives" class="pl-xl-3">
    <time class="year lead d-block"></time>  
    <ul class="list-unstyled">  
    {% for sozluk in site.data.sozluk %}        
        <li>      
        <a href="{{ '/sozluk/?kelime=' | append: sozluk.kelime | prepend: site.baseurl | prepend: site.url }}">{{ sozluk.kelime }} ne demek?</a>
        </li>    
    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
</div>
