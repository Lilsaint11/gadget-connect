import Image from 'next/image'
import { supabase } from './auth/supabase'
import Deals from './components/deals'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Layout from './components/layout'

export default function Home() {

  return (
    <Layout>
      <div className='flex flex-col gap-5 p-5'>
        <Hero />
        <Deals />
      </div>
   </Layout>
  )
}

