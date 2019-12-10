import {
  Box,
  Button,
  Caps,
  Container,
  Flex,
  Input,
  InputIcon,
  Text
} from 'components/elements'

import {
  cdnUrl,
  aspectRatio,
  getDomain,
  screenshotUrl,
  debounceComponent
} from 'helpers'

import { useTransition } from 'react-spring'
import { speed, borders, transition, colors } from 'theme'
import { Headline, SubHeadline, DemoLinks } from 'components/patterns'
import { Safari, HourGlass } from 'components/icons'
import { Image as ImageIcon } from 'react-feather'
import React, { useEffect, useState } from 'react'
import prependHttp from 'prepend-http'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import pickBy from 'lodash/pickBy'
import { navigate } from 'gatsby'
import isUrl from 'is-url-http'
import isColor from 'is-color'
import get from 'dlv'
import ms from 'ms'

import {
  AnimatedImage,
  screenshotHeight
} from 'components/pages/home/screenshots'

import { Screenshot } from './template'

const LogoWrap = styled(Box)`
  cursor: pointer;
  opacity: 0.5;
  transition: opacity ${transition.medium};
  &:hover {
    opacity: 1;
  }
`

LogoWrap.defaultProps = {
  display: 'inline-block'
}

const INTERVAL = 3500

const ScreenshotDebounce = debounceComponent(Screenshot)

const DemoSlider = ({ children: slides, ...props }) => {
  const [index, setIndex] = useState(0)

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: speed.normal
    }
  })

  useEffect(
    () =>
      /* eslint-disable no-void */
      void setInterval(
        () => setIndex(state => (state + 1) % slides.length),
        INTERVAL
      ),
    /* eslint-enable no-void */ []
  )

  return (
    <Flex
      style={{ position: 'relative' }}
      height={screenshotHeight}
      width={aspectRatio.width}
      {...props}
    >
      {transitions.map(({ item, props, key }) => (
        <AnimatedImage key={key} style={props} src={slides[item].cdnUrl} />
      ))}
    </Flex>
  )
}

const LiveDemo = ({ suggestions, onSubmit, url, isLoading }) => {
  const [inputBg, setInputBg] = useState('')
  const [inputUrl, setInputUrl] = useState(url || '')
  const [inputWaitFor, setInputWaitFor] = useState('')
  const [inputOverlay, setInputOverlay] = useState('')
  const domain = getDomain(inputUrl)

  const backgroundIconComponent = isColor(inputBg) ? (
    <Box
      border={1}
      borderColor='black10'
      borderRadius={1}
      width='14px'
      height='14px'
      style={{ top: '-2px', position: 'relative', background: inputBg }}
    />
  ) : (
    <ImageIcon color={colors.black50} size='16px' />
  )

  const getValues = () => {
    const preprendUrl = prependHttp(inputUrl)
    const overlay = pickBy({ browser: inputOverlay, background: inputBg })
    return pickBy({
      url: isUrl(preprendUrl) ? preprendUrl : undefined,
      waitFor: ms(inputWaitFor || '0'),
      overlay: isEmpty(overlay) ? undefined : overlay
    })
  }

  const previewUrl = (() => {
    const values = getValues()
    const { url, ...opts } = values

    if (!url) return undefined

    const item = suggestions.find(link => prependHttp(link.value) === url)

    if (item && !get(opts, 'overlay.background')) {
      const theme = get(opts, 'overlay.browser')
      const filename = item.filename
      return cdnUrl(
        theme
          ? `screenshot/browser/${theme}/${filename}`
          : `screenshot/${filename}`
      )
    }

    return url
      ? screenshotUrl(url, { ...opts, waitUntil: 'networkidle2' })
      : undefined
  })()

  const handleSubmit = event => {
    event.preventDefault()
    const { url, ...opts } = getValues()
    return onSubmit(url, opts)
  }

  return (
    <Container py={[4, 5]} px={4} pb={[3, 3, 4, 4]}>
      <SubHeadline
        title='Take a screenshot of any website'
        caption='Turn websites into a snapshot'
      />

      <Flex justifyContent='center' alignItems='center'>
        <Flex
          pt={2}
          pb={3}
          as='form'
          mx={[0, 0, 'auto', 'auto']}
          justifyContent='center'
          onSubmit={handleSubmit}
          flexDirection={['column', 'column', 'row', 'row']}
        >
          <Box ml={[0, 0, 2, 2]} mb={[3, 3, 0, 0]}>
            <Input
              fontSize={2}
              iconComponent={<InputIcon value={inputUrl} domain={domain} />}
              id='screenshot-demo-url'
              mr='6px'
              placeholder='Visit URL'
              suggestions={suggestions}
              type='text'
              value={inputUrl}
              onChange={event => setInputUrl(event.target.value)}
              width={['100%', '100%', '100px', '100px']}
            />
          </Box>

          <Box ml={[0, 0, 2, 2]} mb={[3, 3, 0, 0]}>
            <Input
              placeholder='Wait for'
              id='screenshot-demo-waitfor'
              type='text'
              fontSize={2}
              width={['100%', '100%', '74px', '74px']}
              mr='6px'
              value={inputWaitFor}
              onChange={event => setInputWaitFor(event.target.value)}
              iconComponent={<HourGlass color={colors.black50} width='11px' />}
              suggestions={[
                { value: '0s' },
                { value: '1.5s' },
                { value: '3s' }
              ]}
            />
          </Box>

          <Box ml={[0, 0, 2, 2]} mb={[3, 3, 0, 0]}>
            <Input
              placeholder='Overlay'
              id='screenshot-demo-overlay'
              type='text'
              fontSize={2}
              width={['100%', '100%', '73px', '73px']}
              mr='6px'
              value={inputOverlay}
              onChange={event => setInputOverlay(event.target.value)}
              iconComponent={<Safari color={colors.black50} width='16px' />}
              suggestions={[
                { value: 'none' },
                { value: 'dark' },
                { value: 'light' }
              ]}
            />
          </Box>

          <Box ml={[0, 0, 2, 2]} mb={[3, 3, 0, 0]}>
            <Input
              placeholder='Background'
              id='screenshot-demo-background'
              type='text'
              fontSize={2}
              width={['100%', '100%', '105px', '105px']}
              mr='6px'
              value={inputBg}
              onChange={event => setInputBg(event.target.value)}
              iconComponent={backgroundIconComponent}
              suggestions={[
                { value: '#c1c1c1' },
                {
                  value:
                    'linear-gradient(225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)'
                },
                {
                  value: 'https://source.unsplash.com/random/2776x1910'
                }
              ]}
            />
          </Box>

          <Button ml={[0, 0, 2, 2]} loading={isLoading}>
            <Caps fontSize={1} children='Take it' />
          </Button>
        </Flex>
      </Flex>

      <Flex alignItems='center' justifyContent='center' flexDirection='column'>
        <Text fontSize={2}>into a snapshot</Text>
        {previewUrl ? (
          <ScreenshotDebounce
            height={isLoading => (isLoading ? screenshotHeight : 'inherit')}
            data={{ screenshot: { url: previewUrl } }}
            query={getValues()}
          />
        ) : (
          <DemoSlider mt={[0, 0, '-13px', '-13px']} children={suggestions} />
        )}
      </Flex>
    </Container>
  )
}

const Examples = ({ demoLinks }) => (
  <Container
    py={[4, 5]}
    px={0}
    maxWidth='100%'
    bg='pinky'
    borderTop={`${borders[1]} ${colors.pinkest}`}
    borderBottom={`${borders[1]} ${colors.pinkest}`}
  >
    <Headline
      pb={[3, 4]}
      title='Examples'
      caption='See real examples in action.'
    />
    <Box pt={[3, 4]}>
      <DemoLinks
        children={demoLinks}
        onClick={({ id }) => navigate(`/screenshot/${id}`)}
      />
    </Box>
  </Container>
)

export default ({
  demoLinks,
  isLoading,
  onSubmit,
  refBackground,
  refOverlay,
  refUrl,
  refWaitFor,
  suggestions,
  url
}) => (
  <>
    <LiveDemo
      isLoading={isLoading}
      onSubmit={onSubmit}
      refBackground={refBackground}
      refOverlay={refOverlay}
      refUrl={refUrl}
      refWaitFor={refWaitFor}
      suggestions={suggestions}
      url={url}
    />
    <Examples demoLinks={demoLinks} />
  </>
)
