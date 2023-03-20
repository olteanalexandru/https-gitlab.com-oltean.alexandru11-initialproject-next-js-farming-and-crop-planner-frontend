import React from 'react'
import Header from './header'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css'
import {GlobalContextProvider} from './Context/UserStore'
import {GlobalContextProvider as CulturaStore} from './Context/culturaStore'


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
          {/* creeate a tailwind div that centers its text, gives margin to page, creates a container for the page */}

          <div className="flex flex-col items-center justify-center h-screen">

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
