---
title: Vekalet Ücreti Hesaplama
keywords: Vekalet Ücreti Hesaplama
permalink: /nispivekalet/
layout: gokhan
---

<div class="card-header">
  <h3 class="card-title">Vekalet Ücreti Hesaplama İşlemleri</h3>
</div>
<div class="card-body">
  <div class="mb-3">
    <label class="form-label required">Hükmedilen Değer</label>
    <div>
      <input type="number" class="form-control" data-type="currency" placeholder="Kabul edilen değeri giriniz" name="vekaletmiktar">
      <small class="form-hint">Kira veya nafaka arttırım davalarında arttırılan/tespit edilen bedelin 12 aylık değeri yazılmalıdır. </a>
      </small>
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label"></label>
    <div>
      <label class="form-check">
        <input class="form-check-input" type="checkbox" name="kiranafaka">
        <span class="form-check-label required">Kira veya Nafaka Arttırım Davası</span>
      </label>
    </div>
  </div>
  <div class="mb-3">
    <label class="form-label">Mahkeme Seçiniz</label>
    <select type="text" class="form-select" placeholder="Seçiniz" id="mahkeme-maktu" value="">
      <option value="0" disabled>Seçiniz</option>
      <option value="17900" selected>Asliye Hukuk Mahkemesi</option>
      <option value="3600">İcra Dairesi - Takipler</option>
      <option value="4200">İcra Mahkemesi - Takipler</option>
      <option value="6800">İcra Mahkemesi - Duruşmalı</option>
      <option value="7400">Tahliyeye İlişkin Takipler</option>
      <option value="10700">Sulh Hukuk Mahkemesi</option>
      <option value="9000">Tüketici Mahkemesi</option>
      <option value="25500">Fikri ve Sınai Haklar Mahkemesi</option>
      <option value="29800">Ağır Ceza Mahkemesi - Tazminat Davaları</option>
      <option value="10500">İdare ve Vergi Mahkemelerinde - Duruşmasız</option>
      <option value="20900">İdare ve Vergi Mahkemelerinde - Duruşmalı</option>
      <option value="16500">Bölge Adliye - Bölge İdare Mahkemeleri - İlk Derece</option>
      <option value="10200">Bölge Adliye - Bölge İdare Mahkemeleri - İstinaf 1 Duruşma</option>
      <option value="20400">Bölge Adliye - Bölge İdare Mahkemeleri - İstinaf 1'den fazla Duruşma</option>
      <option value="17100">Yargıtay - Danıştay - Sayıştay Temyiz Yolu</option>
    </select>
  </div>
</div>
<div class="card-body d-flex align-items-center justify-content-center h-100">
   <label id="hesapsonuc" name="hesapsonuc" class="text-justify mh-25">
    <h1 class="m-0"></h1>
  </label>
 </div>