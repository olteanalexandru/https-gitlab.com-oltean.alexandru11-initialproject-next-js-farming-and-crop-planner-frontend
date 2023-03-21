
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

"This is the Initial MERN MVC Real Estate project but modified to use NEXT js 13 and Contex, this is still heavily in work

## Actor: Fermier

### Creare cont
Fermierul poate crea un cont furnizând adresa lor de email și parola. Adresa de e-mail și parola vor fi verificate și trebuie să fie unice în sistem. Fermierul poate actualiza adresa de email sau parola după ce a creat contul cu succes.

### Autentificare
Fermierul poate să se autentifice în sistem cu adresa lor de e-mail și parola.

### Vizualizare culturi
Fermierul poate vizualiza culturile care sunt cultivate în prezent pe fermă. Lista culturilor va include informații despre starea de dezvoltare, cantitatea și calitatea recoltelor.

### Actualizare culturi
Fermierul poate actualiza informațiile despre culturile pe care le cultivă, cum ar fi starea de dezvoltare, cantitatea și calitatea recoltelor.

### Rotație optimă de culturi
Fermierul poate solicita informații despre rotația optimă de culturi bazată pe culturile pe care le-au selectat pentru rotație.

### Recomandări privind vremea/umiditatea
Fermierul poate primi recomandări despre ce culturi să cultive pe baza datelor meteorologice/umiditate.

## Actor: Administrator

### Creare cont
Administratorul poate crea un cont furnizând adresa lor de email și parola. Adresa de e-mail și parola vor fi verificate și trebuie să fie unice în sistem. Administratorul poate actualiza adresa de email sau parola după ce a creat contul cu succes.

### Autentificare
Administratorul poate să se autentifice în sistem cu adresa lor de e-mail și parola.

### Vizualizare culturi
Administratorul poate vizualiza culturile care sunt cultivate în prezent pe fermă. Lista culturilor va include informații despre starea de dezvoltare, cantitatea și calitatea recoltelor.

### Rotație optimă de culturi
Administratorul poate solicita informații despre rotația optimă de culturi bazată pe culturile selectate de fermier.

### Recomandări privind vremea/umiditatea
Administratorul poate primi recomandări despre ce culturi să cultive pe baza datelor meteorologice/umiditate.

### Adăugare culturi
Administratorul poate adăuga noi culturi în sistem, împreună cu informațiile lor, cum ar fi numele, descrierea și condițiile de creștere.

### Ștergere utilizatori
Administratorul poate șterge conturile utilizatorilor dacă este necesar.

### Postare Noutăți
Administratorul poate adăuga, șterge sau actualiza postări în secțiunea Noutăți. Fermierul și utilizatorul non logat pot vizualiza noutățile postate de administrator.

## Logica

### Crearea unui cont
Atât fermierul, cât și administratorul pot crea un cont. Sistemul verifică adresa de e-mail și parola și permite utilizatorului să-și schimbe adresa de e-mail sau parola numai după ce a creat contul cu succes.

### Autentificare
Atât fermierul, cât și administratorul pot să se autentifice în sistem cu adresa lor de e-mail și parola.

### Vizualizarea culturilor
Atât fermierul, cât și administratorul pot vizualiza lista de culturi care sunt în prezent în sistem.

### Adăugarea de culturi
Numai administratorul poate adăuga noi culturi în sistem, împreună cu informațiile despre cultură.

### Obținerea rotației optime a culturilor
Atât fermierul, cât și administratorul pot vizualiza lista rotatiilor optime.

### Postare Noutăți
Administratorul poate adăuga, șterge sau actualiza postări în secțiunea Noutăți. Fermierul dar și utilizatorul non logat pot vizualiza noutățile.
