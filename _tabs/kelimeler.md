---
layout: page
icon: fas fa-spell-check
order: 4
titleabout: Sözlük Arşivi
---

{% include lang.html %}

<div id="archives" class="pl-xl-3">
    <ul class="list-unstyled">  
    {% for sozluk in site.data.sozluk %}        
        <li>
        <span class="date day"></span> <span class="date month small text-muted ms-1"></span>      
        <a href="{{ '/sozluk?kelime=' | append: sozluk.kelime | prepend: site.baseurl | prepend: site.url }}">{{ sozluk.kelime }} ne demek?</a>
        </li>    
    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
</div>
