import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Parklar() {
  const parklar = [
    {
      ad: " 80 Binde Devr-i Alem Parkı",
      aciklama: "Her yaş grubuna hitap etme hedefiyle 2014'te kurulan park, her yıl yüz binlerce ziyaretçiyi ağırlıyor. Park, yeni tip koronavirüs (Kovid-19) tedbirleri kapsamındaki kısıtlamalar ve kontrollü sosyal hayat uygulamaları nedeniyle geçen yıl ziyaretçi sayısı düşse de geniş ve açık alanı ile dışarıda vakit geçirmek isteyenlere güzel imkan sunuyor.",
      resim: "80parkı.jpg", // Resim dosya adı veya URL
      Konum:"https://www.google.com/maps/place/80+Binde+Devr-i+Alem+Park%C4%B1+-+Meram+Belediyesi/@37.8297067,32.4123769,17z/data=!3m1!4b1!4m6!3m5!1s0x14d08117c8890b21:0x2f7f6f17a78c7859!8m2!3d37.8297067!4d32.4149518!16s%2Fg%2F11bxc78csr?hl=tr&entry=ttu",
      
    },
    {
      ad: " Akyokuş Park",
      aciklama: "Akyokuş Tabiat Parkı, Konya'nın Meram ilçesi, Akyokuş mevkiinde bulunan 11 Temmuz 2011 tarihinde tabiat parkı ilan edilen park.",

      
      resim:  "akyokus.jpg", // Resim dosya adı veya URL
      Konum:"https://www.google.com/maps/place/Akyoku%C5%9F+Tabiat+Park%C4%B1/@37.8802778,32.4232584,17z/data=!3m1!4b1!4m6!3m5!1s0x14d0868b6faaabf9:0xa31916d61dfa5011!8m2!3d37.8802778!4d32.4258333!16s%2Fg%2F1ptxkq_ct?hl=tr&entry=ttu",

    },
    {
      ad: " Karaaslan Hadimi Parkı",
      aciklama: "Hafta sonu ailenizle vakit geçirebileceginiz güzel bir park.",
      resim: "hadimiPark.jpg", // Resim dosya adı veya URL
      Konum:"https://www.google.com/maps/place/Karaaslan+Hadimi+Park%C4%B1/data=!4m7!3m6!1s0x14d08342cc2ee36f:0xd00b977d11db7cfc!8m2!3d37.8089835!4d32.516714!16s%2Fg%2F11cs3zw51h!19sChIJb-MuzEKD0BQR_HzbEX2XC9A?authuser=0&hl=tr&rclk=1",
    },
    {
      ad: "Kozağaç Parkı",
      aciklama: " Kozağaç Parkı 104 bin m²’lik toplam alanıyla şehrimizin büyük parkları arasındadır. Park içerisinde gölet, fitness spor alanı, basketbol ve mini futbol sahası, yürüyüş yolları, mangallık, kamelya ve oturma bankları, kafeterya, çocuk oyun grubu ve lunapark, tatlı su çeşmeleri, şelale, idari hizmet binaları, değişik yaş ve çeşitlerde ağaçlar ve çalılar ile mevsimlik çiçek alanları bulunmaktadır",
      resim: "kozagac.jpeg", // Resim dosya adı veya URL
      Konum:"https://www.google.com/maps/place/Koza%C4%9Fa%C3%A7+Park%C4%B1/@37.8060043,32.423251,17z/data=!3m1!4b1!4m6!3m5!1s0x14d0819e42d9a387:0x508a6170edfba352!8m2!3d37.8060044!4d32.4281219!16s%2Fg%2F113gnp417?hl=tr&entry=ttu",
    },
    {
      ad: "Evliya Çelebi Parkı",
      aciklama: " Evliya Çelebi Parkı Ahmet Keleşoğlu eğitim fakültesinin yanında bulunur.Öğrenciler ve Meramda'ki insanlar için uğrak ve güzel vakit geçirebilecek bir parktır. Yanında kafem vardır ve kafemdeki birçok yiyecek içecek çeşitleri vardır.",
      resim: "evliyaParkı.jpg", // Resim dosya adı veya URL
      Konum:"https://www.google.com/maps/place/Evliya+%C3%87elebi+park%C4%B1/@37.8657123,32.453796,17z/data=!3m1!4b1!4m6!3m5!1s0x14d085c12b973dc3:0x658a8a6ffc13914b!8m2!3d37.8657123!4d32.4563709!16s%2Fg%2F11h_w_gt6n?hl=tr&entry=ttu",
    },
  ]
  return (
    <div>
      <h1>PARKLAR</h1>
      <ul>
        {parklar.map((yer, index) => (
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
  )
}

export default Parklar
