import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Gezilecek() {
  // Gezilecek yerler listesi
  const gezilecekYerler = [
    {
      ad: "Ateşbaz-ı Veli Türbesi",
      aciklama: "Âteşbâz-ı Velî’nin türbesi Konya’da Meram yolu üzerinde Aşkan (Âşıkān “âşıklar”) tepesi yakınlarındadır. Selçuklu türbe mimarisinin özelliklerini taşıyan yapının muntazam kesme taştan inşa edilmiş gövde kısmı içeriden kare, dışarıdan sekizgen planlıdır. Üstü ise ehramî bir külâh ile örtülü olup Arapça kitâbesi güneydeki “niyaz penceresi”nin üzerindedir. Türbenin civarına, Sultan Veled’in kızı Arîfe Şeref Hatun’un oğlu Muzafferüddin Ahmed Paşa torunlarından Çelebi Abdüssamed tarafından bir zâviye yaptırılmış ve vakıflar kurulmuştur. Zamanla harap olan bu zâviyenin yerine bugünkü tekke, postnişin Vâhid Çelebi tarafından 1897 yılında inşa ettirilmiştir.",
      resim: "atesbaz2.jpg", // Resim dosya adı veya URL
      Konum: "https://maps.app.goo.gl/Q9ov4VWmjCjvwSt76",
    },
    {
      ad: "Meram Bağları",
      aciklama: "Eski Meram Bağları, şehrin 5-6 km. batısından başlayıp, Dere'ye ulaşan yeşil vadiye kadar uzanır. Tarih boyunca suyu, havası ve bağları seyahatnamelere, dîvânlara konu olmuş, ünü bütün dünyaya yayılmıştır. Bugün çevresi ormanlarla kaplı güzel bir mesire yeridir. Ayrıca çay bahçeleri ve lokantalar bulunmaktadır.",
      resim: "merambag2.jpg", // Resim dosya adı veya URL,
      Konum:"https://www.google.com/maps/place/KONYA+MERAM+BA%C4%9ELARI/@37.8526815,32.4175958,17z/data=!3m1!4b1!4m6!3m5!1s0x14d087bfc6295397:0xe6490bd288f5a12c!8m2!3d37.8526815!4d32.4201707!16s%2Fg%2F11h4w1794z?entry=ttu",
    },
    {
      ad: "Atatürk Anıtı",
      aciklama: "1924 yılında Konya Belediye Meclisi'nin bir Mustafa Kemal Atatürk anıtı yapılmasına karar vermesinden sonra, yer olarak kentin batısındaki İstasyon Caddesi uygun bulunmuş, meydanda bulunan 1917 yılında Mimar Muzaffer Bey’e, Tarım Anıtı olarak yaptırılan Konya Ziraat Abidesi’nin de kaide olarak kullanılmasına karar verilmiştir. Ankara Zafer Anıtı'nın da heykeltıraşı olan Heinrich Krippel tarafından yapılan Konya Atatürk Anıtı, 29 Ekim 1926'da Cumhuriyet Bayramı’nda büyük bir törenle açılmıştır. Törene Vali İzzet Bey, Belediye Başkan Vekili Nuri Bakkalbaşı, Konya Milletvekili Halil İbrahim Nakıpoğlu, askeri ve sivil erkan, okullar ve vatandaşlar katılmıştır. Nuri Bakkalbaşı, konuşmasının ardından anıtı açmıştır. Açılışta heykelin iki yanında; biri Hürriyeti, diğeri Cumhuriyeti temsil eden iki genç kız beyaz tüller içerisinde yer almıştır.",
      resim: "anıt2.jpeg", // Resim dosya adı veya URL
      Konum:"https://www.google.com/maps/place/Atat%C3%BCrk+An%C4%B1t%C4%B1/@37.8675891,32.4852704,17z/data=!3m1!4b1!4m6!3m5!1s0x14d085ac9138d38f:0xe6b1cbff6539c6c2!8m2!3d37.8675891!4d32.4852704!16s%2Fg%2F11bwdw9wck?entry=ttu",
    },
    {
      ad: "Sahip Ata Vakıf Müzesi",
      aciklama: "Anadolu Selçuklu Devleti vezirlerinden Sâhib Atâ Fahreddin Ali tarafından 1277 yılında yaptırılan külliyenin mimarı Keluk b. Abdullah’tır. Külliye yerleşim planı olarak, kuzeyde câmi, câminin mihrap duvarına bitişik inşâ edilmiş içinde Fahreddin Ali, eşi ve çocuklarının kabirleri bulunan türbe, türbenin güney duvarı bitişiğinde hânkâh, hemen yol aşırı karşısında çifte hamam yer almaktadır. Câmi, kuzeyden bir portal girişine sahiptir. Portalın sağ ve solunda altlı üstlü ikişer hücre bulunmakta, alttakiler sebil vazifesi görmektedir. Giriş kapısını çevreleyen pervazın üzerinde Besmele ve Fâtiha suresi yazılıdır. Külliyenin hânkâh (dergâh) kısmı Vakıflar Bölge Müdürlüğü tarafından Sâhib Atâ Vakıf Müzesi olarak düzenlenmiş ve ziyarete açılmıştır.",
      resim: "sahibAta.jpg", // Resim dosya adı veya URL
      Konum:"https://www.google.com/maps/place/Sahip+Ata+Vak%C4%B1f+M%C3%BCzesi/@37.867578,32.494342,17z/data=!3m1!4b1!4m6!3m5!1s0x14d08500d04f5159:0xb0f9dbde9e2e3e5b!8m2!3d37.867578!4d32.494342!16s%2Fg%2F11gbp50r17?entry=ttu",

    },
   
    {
      ad: "Konya Etnografya Müzesi",
      aciklama: "Kadın giysilerinden kadife, saten, atlas gibi kumaşların üzerine sim sırma, kordon tutturma ve değişik kasnak işleme tekniklerinde bindallı, elbise, şalvar-işlik-cepken, yelek ve kaftanlar; kadın süs eşyalarından gümüş ve bafun malzemeden kemer tokaları, askı, bilezik ve küpeler, tepelikler; örme ve kumaş para, saat, mühür keseleri , yün çorap ve eldivenler, kadife, keten, atlas, saten cinsi kumaşlar üzerine kasnak işleme tekniklerinden Türk işi, sim sırma, hesap işi, çin iğnesi, tel kırma, sarma gibi tekniklerde bohça, peşkir, uçkur, yastık ve yatak takımları yer almaktadır. ",
      resim: "etnografya.jpg", // Resim dosya adı veya URL
      Konum:"https://www.google.com/maps/place/Konya+Etnografya+M%C3%BCzesi/@37.8666961,32.4915833,17z/data=!3m1!4b1!4m6!3m5!1s0x14d085aa87654227:0xfffef2c2ce3ee40a!8m2!3d37.8666961!4d32.4915833!16s%2Fg%2F12hhj28jp?entry=ttu",

    },
 
  ];
  const handleKonumClick = (konum) => {
    
    window.open(konum, '_blank');
  };

  return (
    <div>
      <h1>Meram'da Gezilecek Yerler</h1>
      
      <ul>
        {gezilecekYerler.map((yer, index) => (
          <li key={index}>
            <h2>{yer.ad}</h2>
            <img src={yer.resim} alt={yer.ad} style={{ width: '800px', height: '400px', maxWidth: '100%' }} />            <p>{yer.aciklama}</p>
            <p>
              <strong>Konum</strong>{' '}
              <span style={{ cursor: 'pointer' }} onClick={() => handleKonumClick(yer.Konum)}>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Konumu Görüntüle
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gezilecek;
