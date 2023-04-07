import React from 'react'
import Header from './header'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css'
import {GlobalContextProvider} from './Context/UserStore'
import {GlobalContextProvider as CulturaStore} from './Context/culturaStore'
import {GlobalContextProvider as PostStore } from './Context/postStore'
import '../styles/globalsBot.css';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html>
      <head />
      <body>
        <div className="d-flex flex-column align-items-center">
          <div className="bg-light w-100">
            <PostStore>
              <CulturaStore>
                <GlobalContextProvider>
                  <Header />
                  <div className="container bg-white shadow p-3 mb-5 rounded" style={{ maxWidth: '1200px' }}>
                    {children}
                  </div>
                </GlobalContextProvider>
              </CulturaStore>
            </PostStore>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
