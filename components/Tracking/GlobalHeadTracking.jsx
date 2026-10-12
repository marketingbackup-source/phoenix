import Script from "next/script";

export default function GlobalHeadTracking() {
  return (
    <>
      <meta
        name="facebook-domain-verification"
        content="6oh5hjh861cpi953x2q79cltg5ju55"
      />

      <meta
        name="facebook-domain-verification"
        content="l0ckuwpncc7041wtr7ct158jausk11"
      />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XQWDH6B407"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'G-XQWDH6B407');
            gtag('config', 'AW-16699872287');
          `,
        }}
      />

      {/* GTM 1 */}
      <Script
        id="gtm-tr3qm3v"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];

              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);

            })(window,document,'script','dataLayer','GTM-TR3QM3V');
          `,
        }}
      />

      {/* GTM 2 */}
      <Script
        id="gtm-t7ts9csb"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];

              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);

            })(window,document,'script','dataLayer','GTM-T7TS9CSB');
          `,
        }}
      />

      {/* Meta Pixel */}
      <Script
        id="meta-pixels"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){

              if(f.fbq)return;

              n=f.fbq=function(){
                n.callMethod
                  ? n.callMethod.apply(n,arguments)
                  : n.queue.push(arguments);
              };

              if(!f._fbq){
                f._fbq=n;
              }

              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];

              t=b.createElement(e);
              t.async=!0;
              t.src=v;

              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s);

            }(
              window,
              document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js'
            );

            fbq('init', '1643723480621799');
            fbq('init', '2102631310184892');

            fbq('track', 'PageView');
          `,
        }}
      />

      {/* OpenAI Pixel */}
      <Script
        id="openai-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(w,d,s,u){
              if(w.oaiq)return;

              var q=function(){
                q.q.push(arguments)
              };

              q.q=[];
              w.oaiq=q;

              var j=d.createElement(s);
              j.async=1;
              j.src=u;

              var f=d.getElementsByTagName(s)[0];
              f.parentNode.insertBefore(j,f);

            }(
              window,
              document,
              "script",
              "https://bzrcdn.openai.com/sdk/oaiq.min.js"
            );

            oaiq("init",{
              pixelId:"HnTxzb75zyG9EA55JdXhuH",
              debug:true
            });
          `,
        }}
      />

      {/* Microsoft Clarity */}
      <Script
        id="microsoft-clarity"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){

              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };

              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;

              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);

            })(window, document, "clarity", "script", "waxsw1yrp0");
          `,
        }}
      />
    </>
  );
}