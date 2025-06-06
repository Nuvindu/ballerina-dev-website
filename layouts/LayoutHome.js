/**
 * Copyright (c) 2022, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Row, Stack } from 'react-bootstrap';


export default function Layout({ children }) {
  const TopNav = dynamic(() => import('../components/common/top-nav/TopNav'), { ssr: false });
  const Meta = dynamic(() => import('../components/common/meta/Meta'), { ssr: false });
  const Footer = dynamic(() => import('../components/common/footer/Footer'), { ssr: false });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Ballerina programming language</title>

        <meta name="description" content="Ballerina is an open-source programming language for the cloud that makes it easier to use, combine and create network services."></meta>

        {/* Google Tag Manager */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.setAttributeNode(d.createAttribute('data-ot-ignore'));j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSL2TX4');`
          }}
        />
        {/* End Google Tag Manager */}

        <script type="text/javascript" crossOrigin="true" src="https://cdn.jsdelivr.net/npm/@docsearch/js@alpha" />

        <meta name="keywords" content="ballerina, ballerinalang, cloud native, microservices, integration, programming language" />
        {/* <!--FB--> */}
        <meta property="og:image" content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png" />

        {/* <!--LINKED IN  --> */}
        <meta property="og:title" content="The Ballerina programming language" />
        <meta property="og:image" content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png" />

        {/* <!--TWITTER--> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ballerinalang" />
        <meta name="twitter:creator" content="@ballerinalang" />
        <meta name="twitter:title" content="The Ballerina programming language" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png" />
        <meta property="twitter:image" content="https://ballerina.io/images/ballerina-generic-social-media-image-2023.png" />
        {/* <!--FB--> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Ballerina programming language" />
        <meta property="og:description" content="A programming language for the cloud that makes it easier to use, combine, and create network services." />

        {/* <!--LINKED IN  --> */}
        <meta property="og:description" content="A programming language for the cloud that makes it easier to use, combine, and create network services." />

        {/* <!--TWITTER--> */}
        <meta name="twitter:description" content="A programming language for the cloud that makes it easier to use, combine, and create network services." />
        <meta name="twitter:text:description" content="A programming language for the cloud that makes it easier to use, combine, and create network services." />

        {/* CookiePro Cookies Consent Notice start for ballerina.io */}
        <script src="https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js" type="text/javascript" charSet="UTF-8" data-domain-script="630ad396-5fd5-4745-92ae-2765dc8841ee" defer />
        {/* CookiePro Cookies Consent Notice end for ballerina.io */}
      </Head>
      <Meta />
      <Stack gap={0} className='main-wrapper home'>
        <TopNav launcher='home' />
        <div className='wrap-page-content'>
          <Row className='contentRow'>
            {children}
          </Row>
        </div>

        <Footer />

      </Stack>

    </>
  );
}