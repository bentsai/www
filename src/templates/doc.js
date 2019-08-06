import {
  Tooltip,
  Badge,
  Link,
  Text,
  Flex,
  Container
} from 'components/elements'
import { Layout, Aside } from 'components/patterns'
import Markdown, { H1 } from 'components/markdown'
import formatDate from 'date-fns/format'
import { colors } from 'theme'
import React from 'react'

const ROUTES_SDK = [
  {
    name: 'Getting Started',
    posts: [
      {
        name: 'Overview',
        href: '/docs/sdk/getting-started/overview/'
      },
      {
        name: 'Considerations',
        href: '/docs/sdk/getting-started/considerations/'
      }
    ]
  },
  {
    name: 'Integrations',
    posts: [
      {
        name: 'React',
        href: '/docs/sdk/integrations/react/'
      },
      {
        name: 'Vanilla',
        href: '/docs/sdk/integrations/vanilla/'
      },
      {
        name: 'Jekyll',
        href: '/docs/sdk/integrations/jekyll/'
      }
    ]
  },
  {
    name: 'API Parameters',
    posts: [
      {
        name: 'url',
        href: '/docs/sdk/api-parameters/url/'
      },
      {
        name: 'apiKey',
        href: '/docs/sdk/api-parameters/api-key/'
      },
      {
        name: 'setData',
        href: '/docs/sdk/api-parameters/set-data/'
      },
      {
        name: 'contrast',
        href: '/docs/sdk/api-parameters/contrast/'
      },
      {
        name: 'media',
        href: '/docs/sdk/api-parameters/media/',
        posts: [
          {
            name: 'autoPlay',
            href: '/docs/sdk/api-parameters/media/auto-play/'
          },
          {
            name: 'controls',
            href: '/docs/sdk/api-parameters/media/controls/'
          },
          {
            name: 'muted',
            href: '/docs/sdk/api-parameters/media/muted/'
          },
          {
            name: 'loop',
            href: '/docs/sdk/api-parameters/media/loop/'
          }
        ]
      },
      {
        name: 'direction',
        href: '/docs/sdk/api-parameters/direction/'
      },
      {
        name: 'size',
        href: '/docs/sdk/api-parameters/size/'
      }
    ]
  },
  {
    name: 'Resources',
    posts: [
      {
        name: 'Storybook',
        href: 'https://storybook.microlink.io/'
      },
      {
        name: 'CodeSandbox',
        href: 'https://codesandbox.io/s/n5w839zm4m'
      }
    ]
  }
]

const SDK = 'SDK'
const API = 'API'
const MQL = 'MQL'

const ROUTES_API = [
  {
    name: 'Getting Started',
    posts: [
      {
        name: 'Overview',
        href: '/docs/api/getting-started/overview'
      },
      {
        name: 'Data Fields',
        href: '/docs/api/getting-started/data-fields'
      },
      {
        name: 'CLI',
        href: '/docs/api/getting-started/cli'
      }
    ]
  },
  {
    name: 'API Basics',
    posts: [
      {
        name: 'Endpoint',
        href: '/docs/api/api-basics/endpoint'
      },
      {
        name: 'Authentication',
        href: '/docs/api/api-basics/authentication'
      },
      {
        name: 'Rate Limit',
        href: '/docs/api/api-basics/rate-limit'
      },
      {
        name: 'Format',
        href: '/docs/api/api-basics/format'
      },
      {
        name: 'Compression',
        href: '/docs/api/api-basics/compression'
      },
      {
        name: 'Cache',
        href: '/docs/api/api-basics/cache'
      }
    ]
  },
  {
    name: 'API Parameters',
    posts: [
      {
        name: 'url',
        href: '/docs/api/api-parameters/url'
      },
      {
        name: 'ttl',
        href: '/docs/api/api-parameters/ttl'
      },
      {
        name: 'prerender',
        href: '/docs/api/api-parameters/prerender'
      },
      {
        name: 'proxy',
        href: '/docs/api/api-parameters/proxy'
      },
      {
        name: 'screenshot',
        href: '/docs/api/api-parameters/screenshot',
        posts: [
          {
            name: 'background',
            href: '/docs/api/api-parameters/screenshot/background'
          },
          {
            name: 'browser',
            href: '/docs/api/api-parameters/screenshot/browser'
          },
          {
            name: 'click',
            href: '/docs/api/api-parameters/screenshot/click'
          },
          {
            name: 'deviceScaleFactor',
            href: '/docs/api/api-parameters/screenshot/device-scale-factor'
          },
          {
            name: 'disableAnimations',
            href: '/docs/api/api-parameters/screenshot/disable-animations'
          },
          {
            name: 'emulation',
            href: '/docs/api/api-parameters/screenshot/emulation'
          },
          {
            name: 'fullPage',
            href: '/docs/api/api-parameters/screenshot/full-page'
          },
          {
            name: 'hasTouch',
            href: '/docs/api/api-parameters/screenshot/has-touch'
          },
          {
            name: 'height',
            href: '/docs/api/api-parameters/screenshot/height'
          },
          {
            name: 'hide',
            href: '/docs/api/api-parameters/screenshot/hide'
          },
          {
            name: 'isLandscape',
            href: '/docs/api/api-parameters/screenshot/is-landscape'
          },
          {
            name: 'ismMbile',
            href: '/docs/api/api-parameters/screenshot/is-mobile'
          },
          {
            name: 'omitBackground',
            href: '/docs/api/api-parameters/screenshot/omit-background'
          },
          {
            name: 'scrollTo',
            href: '/docs/api/api-parameters/screenshot/scroll-to'
          },
          {
            name: 'type',
            href: '/docs/api/api-parameters/screenshot/type'
          },
          {
            name: 'waitFor',
            href: '/docs/api/api-parameters/screenshot/wait-for'
          },
          {
            name: 'waitUntil',
            href: '/docs/api/api-parameters/screenshot/wait-until'
          },
          {
            name: 'width',
            href: '/docs/api/api-parameters/screenshot/width'
          }
        ]
      },
      {
        name: 'palette',
        href: '/docs/api/api-parameters/palette'
      },
      {
        name: 'filter',
        href: '/docs/api/api-parameters/filter'
      },
      {
        name: 'embed',
        href: '/docs/api/api-parameters/embed'
      },
      {
        name: 'audio',
        href: '/docs/api/api-parameters/audio'
      },
      {
        name: 'video',
        href: '/docs/api/api-parameters/video'
      },
      {
        name: 'user agent',
        href: '/docs/api/api-parameters/user-agent'
      },
      {
        name: 'force',
        href: '/docs/api/api-parameters/force'
      }
    ]
  }
]

const ROUTES_MQL = [
  {
    name: 'Getting Started',
    posts: [
      {
        name: 'Overview',
        href: '/docs/mql/getting-started/overview'
      }
    ]
  },
  {
    name: 'Basics',
    posts: [
      {
        name: 'Installation',
        href: '/docs/mql/basics/installation'
      },
      {
        name: 'Usage',
        href: '/docs/mql/basics/usage'
      }
    ]
  },
  {
    name: 'Rule definition',
    posts: [
      {
        name: 'selector',
        href: '/docs/mql/rule-definition/selector'
      },
      {
        name: 'selectorAll',
        href: '/docs/mql/rule-definition/selector-all'
      },
      {
        name: 'attr',
        href: '/docs/mql/rule-definition/attr'
      },
      {
        name: 'type',
        href: '/docs/mql/rule-definition/type'
      }
    ]
  },
  {
    name: 'Resources',
    posts: [
      {
        name: 'CodeSandbox',
        href: 'https://codesandbox.io/s/wn2y4x4327'
      }
    ]
  }
  // {
  //   name: 'Examples',
  //   posts: [
  //     {
  //       name: 'Twitter',
  //       href: '/docs/mql/rule-definition/selectors'
  //     },
  //     {
  //       name: 'Instagram',
  //       href: '/docs/mql/rule-definition/attr'
  //     },
  //     {
  //       name: 'Hacker News',
  //       href: '/docs/mql/rule-definition/selector'
  //     },
  //     {
  //       name: 'Reddit',
  //       href: '/docs/mql/rule-definition/type'
  //     }
  //   ]
  // }
]

const routes = {
  [SDK]: ROUTES_SDK,
  [MQL]: ROUTES_MQL,
  [API]: ROUTES_API
}

const getActiveRouteName = ({ pathname }) => {
  if (pathname.startsWith('/docs/sdk')) return SDK
  if (pathname.startsWith('/docs/api')) return API
  if (pathname.startsWith('/docs/mql')) return MQL
}

export default ({ meta, content, githubUrl, ...props }) => {
  const activeRouteName = getActiveRouteName(props.location)

  return (
    <Layout
      footer={false}
      {...meta}
      name={`Microlink ${activeRouteName}`}
      image={`https://cdn.microlink.io/page/docs/${activeRouteName.toLowerCase()}.png`}
    >
      <Container>
        <Aside routes={routes} activeRouteName={activeRouteName}>
          <Text as='header'>
            <H1 mt={[4, 4, 4, 5]} variant={null} mb={0} slug={false}>
              <span>{meta.title}</span>
              {meta.isPro && (
                <Tooltip
                  ml={2}
                  display='inline'
                  content='This feature is only for pro plans.'
                >
                  <Badge>PRO</Badge>
                </Tooltip>
              )}
            </H1>
          </Text>
          <Markdown children={content} />
          <Flex
            as='footer'
            borderTop={1}
            borderColor={colors.border}
            justifyContent='space-between'
            my={4}
            pt={4}
          >
            <Text color='gray5' fontSize={0}>
              Last Edited on {formatDate(meta.date, 'MMMM Do YYYY')}
            </Text>
            <Link href={githubUrl} fontSize={0}>
              Edit This Page on GitHub
            </Link>
          </Flex>
        </Aside>
      </Container>
    </Layout>
  )
}
