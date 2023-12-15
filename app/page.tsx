import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCart/ProductCard'

export default function Home() {
  return (
   <main>
      <h1>Hello World</h1>
      <Link href={'/users'}>users</Link>
      <ProductCard></ProductCard>
   </main>
  )
}
