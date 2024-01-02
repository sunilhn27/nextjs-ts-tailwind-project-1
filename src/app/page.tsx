import Card from '@/components/Cards'
import Feature from '@/components/Feature'
import FeatureThree from '@/components/FeatureThree'
import FeatureTwo from '@/components/FeatureTwo'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sponspors from '@/components/Sponspors'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Card/>
      <Feature/>
      <FeatureTwo/>
      <FeatureThree/>
    </main>
  )
}
