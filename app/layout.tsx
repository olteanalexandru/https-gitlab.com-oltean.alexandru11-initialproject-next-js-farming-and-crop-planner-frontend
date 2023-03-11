import React from 'react'
import Header from './header'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css'
import {GlobalContextProvider} from './features/Context/UserStore'
import {GlobalContextProvider as CulturaStore} from './features/Context/culturaStore'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
         
          <CulturaStore>
         <GlobalContextProvider >
         <Header /> {children} <Footer />
         </GlobalContextProvider>
         </CulturaStore>
         
      </body> 
    </html>
  )
}
