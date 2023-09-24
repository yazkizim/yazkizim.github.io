---
title: Konsolosluk ve Dış Temsilcilikler
keywords: Konsolosluklar, Başkonsolosluklar, Elçilikler, Dış Temsilcilikler
permalink: /konsolosluklar/
layout: gokhan
swcache: true
---


<div class="card-header">
    <h3 class="card-title">Avukatlık Asgari Ücret Tarifesi</h3>
    <br>
    </div>
  
  <div id="table-default" class="table-responsive">
      <table class="table" id="kons" name="kons">
        <thead>
          <tr>
            <th><button class="table-sort" data-sort="sort-ulke">Ülke</button></th>
            <th><button class="table-sort" data-sort="sort-temsilcilik">Temsilcilik</button></th>
            <th><button class="table-sort" data-sort="sort-eyalet">Eyalet</button></th>
            <th><button class="table-sort" data-sort="sort-sehir">Şehir</button></th>										
            <th><button class="table-sort" data-sort="sort-pk">Posta Kodu</button></th>										
          </tr>
        </thead>
        <tbody class="table-tbody">
        {% for satir in site.data.konsolosluk limit: 1 %}
        <tr>
        <td class="sort-ulke">{{ satir.ulke }}</td>
        <td class="sort-temsilcilik">{{ satir.temsilcilik }}</td>
        <td class="sort-eyalet">{{ satir.eyalet }}</td>
        <td class="sort-sehir">{{ satir.sehir }}</td>
        <td class="sort-pk">{{ satir.pk }}</td>
        </tr>
        {% endfor %}         										
        </tbody>        
      </table>
    </div>

