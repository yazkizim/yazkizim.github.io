---
title: Yargılama Giderleri (Harç ve Gider Avansı)
keywords: Mahkeme masrafları, dava açma masrafı, Sulh Hukuk, Aile, Boşanma, İş, Tahliye, İzale, Ortaklığın Giderilmesi, Kadastro, Tüketici, Ticaret, mahkemesi
permalink: /harcvegideravansi/
layout: gokhan
---

<div class="card-header">
    <h3 class="card-title">Yargılama Giderleri (Harç ve Gider Avansı)</h3>
</div>
<form id="harcvegider" data-gtm-form-interact-id="0">
    <div class="card-body">
        <div class="mb-3">
            <label class="form-label required"></label>
            <select type="text" class="form-select w-100" placeholder="Mahkeme Seçiniz" id="mahkeme" value="">
                    <option value="0" disabled>Seçiniz</option>
                    <option value="asliye" selected>Asliye Hukuk Mahkemesi</option>
                    <option value="sulh">Sulh Hukuk Mahkemesi</option>
                    <option value="icramah">İcra Mahkemeleri</option>
                    <option value="aile">Aile Mahkemesi</option>
                    <option value="is">İş Mahkemesi</option>
                    <option value="kadastro">Kadastro Mahkemesi</option>
                    <option value="tuketici">Tuketici Mahkemesi</option>
                    <option value="fikri">Fikri ve Sınai Haklar Mahkemesi</option>
                    <option value="ticaret">Ticaret Mahkemesi</option>
            </select>
        </div>
        <div class="mb-3" id="davadegeri">
            <label class="form-label required">Dava edilen miktar</label>  
                <input type="number" class="form-control" data-type="currency" placeholder="Kabul edilen değeri giriniz" value="0.00" name="davamiktar" id="davamiktar">
                <small class="form-hint">* Eğer para ile ölçülebilen bir dava değilse 0 olarak bırakınız.</small>
        </div>
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="kesif" name="kesif" checked>
            <label class="form-check-label" for="kesif">Keşif Talep Edildi mi ?</label>
        </div>
        <div class="mb-3">
            <label class="form-label required">Taraf Sayısı</label>
            <select type="text" class="form-select w-100" placeholder="Seçiniz" id="tarafsayisi" value="">
                <option value="1">1</option>
                <option value="2" selected>2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <small class="form-hint">* Dava dilekçesindeki taraf sayısı</a></small>
        </div>
        <div class="mb-3">
            <label class="form-label required">Avukat Sayısı</label>
            <select type="text" class="form-select w-100" placeholder="Seçiniz" id="avukat" value="">
                <option value="0">0</option>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <small class="form-hint">* Tarafların toplam avukat sayısı</small>
        </div> 
        <div class="mb-3">
            <label class="form-label required">Tanık Sayısı</label>
            <select type="text" class="form-select w-100" placeholder="Seçiniz" id="taniksayisi" value="">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3" selected>3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <small class="form-hint">* Dava dilekçesinde dayanılan tanık sayısı</small>
        </div>
        <div class="mb-3">
            <label class="form-label required">Bilirkişi Sayısı</label>
            <select type="text" class="form-select w-100" placeholder="Seçiniz" id="bksayisi" value="">
                <option value="0">0</option>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <small class="form-hint">* Dava dilekçesinde bilirkişi deliline dayanılmamış ise 0 seçiniz</small>
        </div>       
    </div>
    <div class="card-footer">
        <a type="submit" class="btn btn-outline-danger w-100" id="avanstemizle" name="avanstemizle">Temizle</a>
        <a type="submit" class="btn btn-outline-primary w-100" id="avanshesapla" name="avanshesapla">Hesapla</a>
    </div>    
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <div class="col-lg-12">
                <div class="card border-primary mb-3">
                    <div class="card-header text-center font-weight-bold text-danger"> SONUÇ </div>
                    <div class="card-body">
                        <p class="card-text text-justify font-weight-bold">AYRINTILI HESAP DÖKÜMÜ<br>==========================</p>
                        <p class="card-text text-justify" id="yargilamadokum"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
      
   
                    