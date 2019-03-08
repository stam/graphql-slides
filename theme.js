import { dark } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import json from 'react-syntax-highlighter/languages/prism/json'


export default {
  ...dark,
  prism: {
    style: okaidia,
    languages: {
        json,
    }
  }
}