import { dark } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import json from 'react-syntax-highlighter/languages/prism/json'
import Provider from './Provider';

export default {
  ...dark,
  Provider,
  prism: {
    style: okaidia,
    languages: {
        json,
    }
  }
}