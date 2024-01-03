---
title: Enflasyon nasıl hesaplanıyor, neden %0.01 lik fark hesapladınız?
author: gokhantasci
date: 2024-01-03 18:52:00 +0300
last_modified_at: 2024-01-03 10:00:00 +0300
categories: [Haber, Enflasyon farkı nasıl hesaplanır]
tags: [enflasyon farkı, Aralık, maaş, adliyeci]
keywords: enflasyon, enflasyon farkı, Kasım, maaş, adliyeci, Adalet Bakanlığı
render_with_liquid: false
pin: true
comments: true
image:
  path: /posts/soru.jpg
  alt: Enflasyon farkı nasıl hesaplanır
---

2023 yılı;
<br>Temmuz ayında enflasyon yüzde 9,43,
<br>Ağustos ayında enflasyon yüzde 9,09,
<br>Eylül ayında yüzde 4,75
<br>Ekim ayında yüzde 3,43
<br>Kasım ayında yüzde 3,28
<br>Aralık ayında yüzde 2,93
<br>Açıklandı, 6 ayda toplam açıklanan enflasyon **%37,57** olmuştur.

<br>Biz bu rakamları toplayınca (9,43 + 9,09+ 4,75+3,43+3,28+2,93) 32,91 çıkıyor da, neden her yerde %37,57 olarak geçiyor.
<br>Öncelikle enflasyon aylık olarak belirlendiğinde, 2003=100 endeksine konu sepetin bir önceki aya kıyasla ne kadar daha maliyetli olduğu ile ilgilidir ve aylık olarak belirlenen enflasyon bir önceki aya göre fiyatın ne kadar arttığını göstermektedir. Bu nedenle ~~toplama işlemi~~ yapmak hatalıdır.

**<br>Peki nasıl hesaplayacağız?**;
<br>1,0943 (ilk ay enflasyonu olan %9,43) rakamını sırasıyla çarpacağız.
<br>1,0943 * 1,0909 * 1,0475 * 1,0343 * 1,0328 * 1,0293 bu çarpım neticesinde 1,374928452721428 gibi bir rakam alacağız.
<br>Yani bu haliyle enflasyonun 1,3749.. yani %37,49 çıkması gerekirdi. 
<br>Ancak bu tespit de ~~hatalıdır~~. 
<br>Enflasyonu hesaplamak için tespit edilen **Tüketici fiyat endeks rakamları (2003=100)** baz alınan **Tüketici fiyat endeks rakamları (2003=100)** na bölünmesi gerekmektedir.
<br>Bizim burada Aralık 2003=100 endeksimiz 1859,38'dir, İlk zam alınan aydan önceki ay olan Haziran (Temmuz zammı öncesi) ayında 2003=100 endeksimiz ise 1351,59'dur. 
<br>1859,38 / 1351,59 = 1,375698251688752 sonucu vermekte yukarı yuvarlama ile 1,3757 sonucu yani **%37,57 enflasyon** elde edilmektedir. 
<br>
<br>Enflasyon farkı için ise bu %37,57 den Temmuz ayında toplu sözleşme gereği aldığımız %6'yı çıkartmak gerekmektedir. Ancak burada çıkartma işlemi yapmak yine bizi hatalı sonuca ulaştıracaktır. Yine yukarıda anlattığımız kaidenin tersi yoluyla bu sefer çarpmak yerine böleceğiz. 
<br>1,3757 / 1,06 = 1,297830188679245 yine yukarı yuvarlarsak bize 1,2979 yani **%29,79 enflasyon farkı**nı verecektir.
<br>
<br>Kümülatif zam için ise %29,79 u yine alacağımız zam oranı (%15) ile çarpmak gerekecektir.
<br>1,2979 * 1,15 = 1,492585 bu farkta da yukarıdaki işlemler gereği **%49,26 kümülatif zam** oluşacağı hesap edilmiştir.
<br>
<br>Yaptığım internet araştırmalarında çeşitli sitelerde haber mahiyetinde yazan rakamların hepsi sayın Memurlar.net editörü Edip Üzen'in twitter hesabında yaptığı hesaplamalar kaynak alınarak yapıldığını farkettim.
<br>Ancak web sitesini hazırlarken ilham aldığım, hesaplamalarımın çoğunun sağlamasını yaptığım sitedeki maaş robotuna göre güncellenen rakamların bu sitenin kabul ettiği %49,25 kümülatif zam oranından farklılık göstermektedir, şöyle ki;
<br>2023 Temmuz - Aralık ayları için;
<br>Taban aylık katsayısı 7.979285,
<br>Memur aylık katsayısı 0.509796,
<br>Yan Ödeme Katsayısı 0.161673,
<br>Olarak belirlenmiştir. 
<br>
<br>Kümülatif zam oranının %49,25 olduğunu baz alarak; 
<br>2024 Ocak - Haziran ayları için;
<br>Taban aylık katsayısı **11,909083**,
<br>Memur aylık katsayısı 0,760871,
<br>Yan Ödeme Katsayısı 0,241297,
Olması gerekirken, site üzerinde yaptığım incelemede Taban aylık katsayısının **11,90884 olarak** belirlendiği, yine yan ödeme katsayısının 0,241297 olması gerekirken 0,241291 olarak belirlenip maaş robotuna yansıtıldığı görülmektedir. 
<br>Yine Maaş Robotu açısından sıkça faydalandığımız MAHEP uygulamasında ise aylık katsayının **11.909,08** olarak, yan ödeme katsayısının **0,241300** olarak belirlendiği görülmektedir.
<br>Maaşların son halini düzenleyen yukarıda anılan katsayılar Hazine ve Maliye Bakanlığı tarafından yayımlanan Mali ve Sosyal Haklara ilişkin Genelge ile belirlenmektedir ve genellikle TÜİK verileri yayınlandıktan 1-2 gün sonra yayınlanmakta ve **net maaşlara esas alınmaktadır**. Bu genelge yayınlanmadan yapılan tüm hesaplamalarda ufak da olsa **hatalar olmaması kaçınılmazdır.**
<br>Tarafımca yapılan hesaplamalar neticesinde ise yayınlanacak genelgede;
<br>2024 Ocak - Haziran ayları için;
<br>Taban aylık katsayısı 11,909880,
<br>Memur aylık katsayısı 0,760922,
<br>Yan Ödeme Katsayısı 0,241313,
<br>Olmasını beklemekteyim ve sitedeki bu katsayılara bağlı **tüm hesaplamalar bu katsayılar esas alınarak yapılmıştır**. 

<br>Yıl sonunda oluşması beklenen enflasyon farkı dahil maaş robotu için [**tıklayınız**](https://adliyeci.com.tr/maasyeni/) 
<br>Enflasyon farkını hesaplama yöntemi için [**tıklayınız**](https://adliyeci.com.tr/enflasyonfarki/) 
