import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

export default function Home() {
	
		
 const containerClasses = classNames('flex', 'flex-col', 'items-center', 'justify-center', 'h-screen');
  const titleClasses = classNames('text-4xl', 'font-bold', 'mb-4');
  const descriptionClasses = classNames('text-lg', 'text-center');

  return (
	
    <div className={containerClasses}>
		<h1 className='text-red-900'>Hello Tailwind CSS</h1>
		<h1 className="text-3xl font-bold underline">
      Hello world!
</h1>
      <h1 className={titleClasses}>Bine ați venit pe pagina principală a platformei agricole!</h1>
      <p className={descriptionClasses}>
	  Prin utilizarea acestei platforme, veți putea planifica cu ușurință o rotație eficientă a culturilor,
	care va ajuta la menținerea solului sănătos și la obținerea unor randamente mai bune. Pe lângă asta,
	veți putea primi recomandări personalizate pentru fiecare cultură în parte, în funcție de condițiile
	 locale, de istoricul solului și de preferințele dvs.

	Pentru a folosi această platformă, va trebui să vă creați un cont și să furnizați informații despre terenul 
	dvs. agricol, inclusiv tipul de sol, zona climatică, culturile anterioare și alte detalii relevante. Apoi,
	 platforma va utiliza API-uri pentru a obține informații actualizate despre vreme, sol și alte factori care
 	 pot influența producția.

	Pe baza acestor informații, platforma va genera o planificare a rotației culturilor personalizată, care va
 	ține cont de cerințele fiecărei culturi, de tipul de sol și de alți factori relevanți. De asemenea, veți
  	primi și recomandări pentru pregătirea solului, pentru nutriția plantelor și pentru combaterea bolilor
   	și a dăunătorilor.

	Platforma noastră utilizează cele mai recente tehnologii și date actualizate pentru a vă oferi cele mai
 	bune recomandări și pentru a vă ajuta să obțineți cele mai bune rezultate din ferma dvs. Dacă aveți întrebări sau probleme, nu ezitați să ne contactați prin intermediul platformei.
      </p>
    </div>
  );
}


