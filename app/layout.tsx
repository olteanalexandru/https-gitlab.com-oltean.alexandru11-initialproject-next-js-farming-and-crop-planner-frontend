import React from 'react'
import Header from './header'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css'
import {GlobalContextProvider} from './Context/UserStore'
import {GlobalContextProvider as CulturaStore} from './Context/culturaStore'
//import '../styles/globals.css';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
          <>
           <div className="container"> 

    


          <CulturaStore>
         <GlobalContextProvider >
         <Header /> {children} <Footer />
         </GlobalContextProvider>
         </CulturaStore>
          </div> 
         </>
      </body> 
    </html>
  )
}
