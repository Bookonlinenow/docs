import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'


const logo = (
  <h1>
   
    <style jsx>{`
      h1 {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
        font-weight:600;
      }
      h1:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
        
      }
    `}</style>
    BON DOCS
  </h1>
)


const config: DocsThemeConfig = {
  
  useNextSeoProps() {
    return {
      titleTemplate: '%s – bookonlinenow'
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'bookonlinenow'
        : `bookonlinenow`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Bookonlinenow Documentation"
        />
        <meta
          name="og:description"
          content="Bookonlinenow Documentation."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="" />
        <meta name="twitter:url" content="https://" />
        <meta
          name="og:title"
          content={title ? title + ' – Bookonlinenow' : 'Bookonlinenow'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="" />
        <link rel="icon" href="/static/favicon.ico" sizes="any" />


      </>
    )
  },

  editLink: {
    text: ''
  },
  feedback: {
    content: '',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      "BON API DOCS"
    )
  }
}

export default config 
