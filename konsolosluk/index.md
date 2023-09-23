---
title: Yurt Dışı Konsolosluklar Bilgileri
keywords: konsolosluklar, adalet bakanlığı, adliye, adliyeci
permalink: /konsolosluk/
layout: gokhan
swcache: true
---

<div id="table-default" class="table-responsive">
    <table class="table" id="konsolosluklar" name="konsolosluklar">
      <thead>
        <tr>
          <th><button class="table-sort" data-sort="sort-ulke">Ülke</button></th>
          <th><button class="table-sort" data-sort="sort-temsilcilik">Temsilcilik</button></th>
          <th><button class="table-sort" data-sort="sort-eyalet">Görev Bölgesindeki Eyalet/Kanton</button></th>	
          <th><button class="table-sort" data-sort="sort-sehir">Görev Bölgesindeki Şehir/Semt</button></th>	
          <th><button class="table-sort" data-sort="sort-pk">Posta Kodu</button></th>										
        </tr>
      </thead>
      <tbody class="table-tbody">
      {% for satir in site.data.konsolosluk %}
      <tr><td class="sort-ulke">{{ satir.ulke }}<td class="sort-temsilcilik">{{ satir.temsilcilik }}<td class="sort-eyalet">{{ satir.eyalet }}</td><td class="sort-sehir">{{ satir.sehir }}</td><td class="sort-pk">{{ satir.pk }}</td></tr>
      {% endfor %}         										
      </tbody>
    </table>
  </div>