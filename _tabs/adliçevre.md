---
layout: page
icon: fas fa-street-view
order: 4
titleabout: Adli Çevre
---

{% include lang.html %}

<div id="archives" class="pl-xl-3">
    <ul class="list-unstyled">  
    {% for teskilat in site.data.teskilat %}        
        <li>
        <span class="date day"></span> <span class="date month small text-muted ms-1"></span>      
        <a href="{{ '/adliye?adliye=' | append: teskilat.mahal | prepend: site.baseurl | prepend: site.url }}">{{ teskilat.mahal }} yargı çevresi</a>
        </li>    
    {% if forloop.last %}</ul>{% endif %}
  {% endfor %}
</div>
