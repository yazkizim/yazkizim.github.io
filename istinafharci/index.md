---
title: İstinaf/Temyiz Harcı Hesaplama
keywords: temyiz harcı hesaplama, istinaf harcı hesaplama, istinaf başvuru harcı hesaplama, temyiz başvuru harcı hesaplama, cismani zarar harç hesaplama, istinaf harcı hesaplama programı, temyiz harcı hesaplama programı, temyiz harci hesaplama, istinaf başvuru harcı, temyiz başvuru harcı
permalink: /istinafharci/
layout: gokhan
comments: true
addcoments: true
---


<div>
  <div class="card-header">
    <h3 class="card-title">Nisbi (Nispi) İstinaf/Temyiz Harcı Hesaplama İşlemleri
    </h3>
  </div>
  <div class="card-body">
    <div class="mb-3">
        <label class="form-label required">Yıl</label>
        <div>
        <select type="text" class="form-select" placeholder="Seçiniz" id="yilistinaf" value="">
          <option value="2024">2024</option>	
          <option value="2023">2023</option>				
        </select>
        </div>
        <small class="form-hint">Hesaplanacak Yılı Seçiniz</small>
    </div>
    <div class="mb-3">
      <label class="form-label required">Hükmedilen Değer
      </label>
      <div>
        <input type="number" class="form-control" data-type="currency" placeholder="Kabul edilen değeri giriniz" name="miktar">
        <small class="form-hint">Harçlar Kanunu gereği alınması gereken maktu harçtan az olması halinde, maktu harç miktarına tamamlanacaktır.
        </small>
      </div>
    </div>								  
    <div class="mb-3">
      <label class="form-label">
      </label>
      <div>
        <label class="form-check">
          <input class="form-check-input" type="checkbox" name="olumcismani">
          <span class="form-check-label required">Ölüm veya Cismani Zarar Nedeniyle Açılan Dava
          </span>
        </label>									  
      </div>
    </div>
  </div>
  <div class="card-body d-flex align-items-center justify-content-center h-100">
   <label id="hesapsonuc" name="hesapsonuc" class="text-justify mh-25">
    <h1 class="m-0"></h1>
  </label>
 </div>


                
 