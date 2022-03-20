import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋🏼 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for &euro;{product.amount} per month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image src="/images/avatar.svg" alt="Girl coding" width="334px" height="520px"/>
      </main>
    </>
  )
}

// Get Price from Stripe API to generate the data
// every 24 hours - as defined at Revalidate attribute
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JsdEUHbpEHBNboSqh6dw0ed')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-PT', {
      minimumFractionDigits: 2
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}
