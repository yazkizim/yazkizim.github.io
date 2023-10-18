---
title: Yargılama Gideri Dökümü
keywords: Mahkeme masrafları, mahkeme giderleri, yargılama giderleri, posta masrafları, bilirkişi masrafları, adliye masrafları, adliye cezası, mahkeme cezası
permalink: /yargilamagideridokumu/
layout: gokhan
comments: true
addcoments: true
---

<div class="card-header">
    <h3 class="card-title">Yargılama Gideri Dökümü Hesaplama</h3>
</div>
<form id="yargilamagideriform" data-gtm-form-interact-id="0">
    <div class="card-body">
        <h5>Tebligatlar</h5>
        {% for tablo in  site.data.tebligatlar.tebligat  %}    
        <div class="col-12">
            <div class="form-group row">
                <label for="y{{ tablo.adi }}" id="y{{ tablo.adi }}" class="col-sm-4 col-form-label">{{ tablo.label }}</label>
                <input type="hidden" id= "{{ tablo.adi }}" value="{{ tablo.gider }}">
                <div class="col-sm-6">
                    <input type="number" class="form-control" id= "{{ tablo.adet }}" value="0" placeholder="0" onfocus="myFocusFunction('y{{ tablo.adi }}')" onblur="myBlurFunction('y{{ tablo.adi }}')">
                </div>
            </div>
        </div>
        {% endfor %}
        <div class="col-12 text-center"> 
            <a class="btn btn-primary" data-toggle="collapse" href="#eskitebligatlar" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" id="dahaeskiler">Daha eski yıllar</a>            
        </div>           
        <div class="collapse" id="eskitebligatlar">
            {% for tablo in  site.data.tebligatlar.eskitebligat  %}    
            <div class="col-12">
                <div class="form-group row">
                    <label for="y{{ tablo.adi }}" id="y{{ tablo.adi }}" class="col-sm-4 col-form-label">{{ tablo.label }}</label>
                    <input type="hidden" id= "{{ tablo.adi }}" value="{{ tablo.gider }}">
                    <div class="col-sm-6">
                        <input type="number" class="form-control" id= "{{ tablo.adet }}" value="0" placeholder="0" onfocus="myFocusFunction('y{{ tablo.adi }}')" onblur="myBlurFunction('y{{ tablo.adi }}')">
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
        <h5>Elektronik Tebligatlar</h5>
        {% for tablo in  site.data.tebligatlar.elektronikteb  %}    
            <div class="col-12">
                <div class="form-group row">
                    <label for="y{{ tablo.adi }}" id="y{{ tablo.adi }}" class="col-sm-4 col-form-label">{{ tablo.label }}</label>
                    <input type="hidden" id= "{{ tablo.adi }}" value="{{ tablo.gider }}">
                    <div class="col-sm-6">
                        <input type="number" class="form-control" id= "{{ tablo.adet }}" value="0" placeholder="0" onfocus="myFocusFunction('y{{ tablo.adi }}')" onblur="myBlurFunction('y{{ tablo.adi }}')">
                    </div>
                </div>
            </div>
        {% endfor %}
        <h5>Diğer Giderler</h5>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <p>Bu kısımda birden fazla olan harcamaları yazarken sisteme toplama yaptırabilirsiniz.</p>
            <p>Örnek : 5.11 + 6.22 <code class="highlighter-rouge">yazdıktan sonra <b>ENTER</b> tuşuna bastığınızda toplamı getirecektir</code></p>
            <small class="form-hint">* Çalışmaması halinde bir kez CTRL + F5 tuşlayınız.</small>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Kapat"></button>
        </div>        
        <div class="col-12">
            <div class="form-group row">
                <label for="yargilamagideri" class="col-sm-4 col-form-label">Posta Gideri</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="postagideri" value="0" placeholder="0" step=".01">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="form-group row">
                <label for="ilangideri" class="col-sm-4 col-form-label">İlan Gideri</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="ilangideri" value="0" placeholder="0" step=".01">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="form-group row">
                <label for="yasagideri" class="col-sm-4 col-form-label">Yasa Yolu Gidiş Dönüş Gideri</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="yasagideri" value="0" placeholder="0" step=".01">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="form-group row">
                <label for="yargilamagideri" class="col-sm-4 col-form-label">ATK Gideri</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="atkgideri" value="0" placeholder="0" step=".01">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="form-group row">
                <label for="yargilamagideri" class="col-sm-4 col-form-label">Keşif Gideri</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="kesifgideri" value="0" placeholder="0" step=".01">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="form-group row">
                <label for="yargilamagideri" class="col-sm-4 col-form-label">Uzlaştırmacı Gideri</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="uzlasmagideri" value="0" placeholder="0" step=".01">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="form-group row">
                <label for="yargilamagideri" class="col-sm-4 col-form-label">Bilirkişi Ücreti</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" id="bilirkisigideri" value="0" placeholder="0" step=".01">
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tebligatlarbir">
                <label class="form-check-label" for="tebligatlarbir"> Tebligat/E-Tebligat Masrafları Ayrı Ayrı Gösterilsin mi? </label>
            </div>
        </div>    
    </div>
    <div class="card-footer">
        <div id="liveAlertPlaceholder"></div>
        <button type="button float-left" class="btn btn-outline-danger" id="gidertemizle">Temizle</button>
        <button type="button float-right" class="btn btn-outline-primary" id="giderhesapla">Hesapla</button>
    </div>

    
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <div class="col-lg-12">
                <div class="card border-primary mb-3">
                    <div class="card-header text-center font-weight-bold text-danger"> SONUÇ </div>
                    <div class="card-body">
                        <p class="card-text text-justify font-weight-bold">YARGILAMA GİDERİ DÖKÜMÜ<br>==========================</p>
                        <p class="card-text text-justify" id="yargilamadokum"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
      
   
                    