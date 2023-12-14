import Script from 'next/script'
export const GTM_ID = 'GTM-PKDBRQ3N' // Sustituye 'TU_GTM_ID' con tu ID de GTM.

export const GTMPageView = (pagePath) => {
  window.dataLayer.push({
    event: 'pageview',
    page: pagePath
  })
}

export const GTMScript = () => (
  <>
    <Script strategy='afterInteractive' id='google-analytics'
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `
      }}
    />
  </>
)
