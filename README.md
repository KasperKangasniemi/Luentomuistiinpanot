Ohjelman avulla käyttäjä voi:

lisätä opintojaksoja

tehdä muistiinpanoja opintojaksoille

tallentaa muistiinpanoja sessioittain

listata kaikki muistiinpanot

suodattaa listaa opintojakson mukaan

poistaa yksittäisiä muistiinpanoja

hakea muistiinpanot ja kurssit REST API päätepisteistä

Käynnistäminen
npm install
npm run dev
sitten avataan http://localhost....konsolista

Projektin rakenne
src/
 ├─ components/
 ├─ assets/
 ├─ App.jsx
 ├─ main.jsx
public/
index.html
package.json
vite.config.js

Käytetyt API-päätepisteet

Opintojaksot:
https://luentomuistiinpanoapi.netlify.app/.netlify/functions/courses


Muistiinpanot:
https://luentomuistiinpanoapi.netlify.app/.netlify/functions/notes

Käytin ChatGPT:tä avustamaan seuraavissa kohdissa

projektin rakenteen suunnittelussa

komponenttien välisten tilojen hahmottamisessa (useState, propsit, sessiolukitus)

ulkoasun CSS-tyyleissä

ID muodostamisessa selkeä 1,2,3,4,5... oli vaikeuksia niin siihen sain apua

Gittiin liittämisessä oikein

virheilmoitusten korjaamisessa (import-ongelmat, API-polut jne.)

Käytin sitä näihin koska en löytänyt tai osannut löytää oikeaa tapaa tehokkaasti netistä tai muistanut miten ne tehdään oikein suoraan itse.

Tarkistin aina itse keinoälyn antaman koodin oikeellisuuden, muokkasin sitä tarvittaessa ja varmistin, että ymmärrän jokaisen osan toiminnan ennen sen käyttöä pyytämällä selittämään auki hakemani tiedot ja koodit.
