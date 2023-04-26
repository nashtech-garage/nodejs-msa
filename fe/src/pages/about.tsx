import { GetServerSidePropsContext } from 'next'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function About(props: any) {
  return (
    <section className="container">
      <div>About</div>
      <div>
        <pre>
          <code>{JSON.stringify(props.be, null, 2)}</code>
        </pre>
      </div>
    </section>
  )
}

export const getServerSideProps = async ({ preview }: GetServerSidePropsContext) => {
  const res = await fetch(`${process.env.BE_URL}/`)
  const { message, timeExecute } = await res.json()

  return {
    props: {
      preview: preview || false,
      messages: [],
      be: { message, timeExecute },
    },
  }
}
