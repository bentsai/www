---
title: 'autoPlay'
---

Type: `boolean`<br/>
Default: `true`

Determine if the video will automatically start playing as soon as it can do so without stopping.

<MultiCodeEditor languages={{
  React: `import Microlink from '@microlink/react' 
  
export default () => (
  <Microlink
    url='https://instagram.com/p/BXHj-DllyYU'
    media='video'
    autoPlay
  />
)
`, Vanilla: `
<script>
  document.addEventListener('DOMContentLoaded', function (event) {
    microlink('a', { media: 'video', autoPlay: true })
  })
</script>
`, Jekyll: `
[](https://instagram.com/p/BXHj-DllyYU){:.card-preview data-media='video' data-auto-play='true'}
`}} 
/>

<Microlink url='https://instagram.com/p/BXHj-DllyYU/' media='video' autoPlay />

<Figcaption children='When a video is playing, you can stop it just clicking over the image.' />

The default behavior is to start the video playing; You can change that passing a `autoPlay: false`.

<MultiCodeEditor languages={{
  React: `import Microlink from '@microlink/react' 
  
export default () => (
  <Microlink
    url='https://instagram.com/p/BXHj-DllyYU'
    media='video'
    autoPlay={false}
  />
)
`, Vanilla: `
<script>
  document.addEventListener('DOMContentLoaded', function (event) {
    microlink('a', { media: 'video', autoPlay: false })
  })
</script>
`, Jekyll: `
[](https://instagram.com/p/BXHj-DllyYU){:.card-preview data-media='video' data-auto-play='false'}
`}} 
/>

<Microlink url='https://instagram.com/p/BXHj-DllyYU/' media='video' autoPlay={false} />