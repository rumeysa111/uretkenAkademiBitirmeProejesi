import React from 'react'
import background from "/merambel3.jpg";

function About() {
    const divStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Use 'vh' for viewport height
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        margin: 0,
        boxSizing: 'border-box',
    
      };
      const textContainerStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Yarı saydam siyah arkaplan ekledik
        padding: '10px', // İstenilen boşlukları ayarlayabilirsiniz
        borderRadius: '30px',
        marginTop: '-65vh',
      };
    const headingStyle = {
        color: 'black',
        fontSize: '2em',  // Adjust the font size as needed
        fontWeight: 'bold',
    };

    const paragraphStyle = {
        color: '',
        fontSize: '1.3em',  // Adjust the font size as needed
        fontWeight: 'bold',
    };
    return (
        <div style={divStyle} >
            <div style={textContainerStyle} >
            <h1 style={{...headingStyle }}>Hakkımızda</h1>
            <p style={{ ...paragraphStyle }}>

            Meram'ın Adı

Meram kelimesi, Konyalıca; “Amaç, arzu, hedef, gaye, tema” anlamlarında. Herkesin görmek, kavuşmak, gezmek, yaşamak için can attığı bu cennet mesireliğin özel adı olmuş. Böylece anıla gelmiş. Bu adla tarihlere, belgelere, vakfiyelere, seyahat-nâmelere, kitaplara, şiirlere geçmiş, dilden dile, gönülden gönüle yayılmış. Meram, şehir merkezinin batısında 8 km. mesâfede. Batıdaki Loras Dağı’nın dik meyilli çıplak yamaçları ile bu yamaçların doğu eteklerinde Konya yönüne doğru yelpaze gibi açılan bir yeşillikler armonisi. Bu yeşilliklerle kaplı yamaçların yanı sıra Konya ovasının bu taraftaki düzlüğünün bir kısmını da içine alır.
         </p>
        
        </div>
        </div>
    )
}

export default About
