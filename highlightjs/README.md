![logo](logo.svg)

# Flogram - a language grammar for [highlight.js](https://highlightjs.org/)

[Flogram](https://flogram.dev/) is simpler and faster but similar to the other popular programming languages like C, C++, Rust.

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script
  type="text/javascript"
  charset="UTF-8"
  src="/path/to/highlightjs-flogram/dist/flogram.min.js"
></script>
<script type="text/javascript">
  hljs.highlightAll()
</script>
```

### Using directly from the UNPKG CDN

```html
<script
  type="text/javascript"
  src="https://unpkg.com/highlightjs-flogram/dist/flogram.min.js"
></script>
```

- More info: <https://unpkg.com>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs')
var hljsFlogram = require('highlightjs-flogram')

hljs.registerLanguage('flogram', hljsFlogram)
hljs.highlightAll()
```

### React

You need to import both Highlight.js and third-party language like Cypher:

```js
import React, {Component} from 'react'
import 'highlight.js/scss/darcula.scss' # your favourite theme
import flogram from './flogram'
import hljs from 'highlight.js'
hljs.registerLanguage('flogram', flogram);

class Highlighter extends Component
{
  constructor(props)
  {
    super(props);
    hljs.highlightAll();
  }

  render()
  {
    let {children} = this.props;
    return
    {
      <pre ref={(node) => this.node = node}>
        <code className="flogram">
          {children}
        </code>
      </pre>
    }
  }
}

export default Highlighter;
```

## License

Highlight.js is released under the CC0 1.0 License. See [LICENSE][1] file
for details.

### Author

Didier Munezero <didiermunezer38@gmail.com>

### Maintainer

Didier Munezero <didiermunezero@gmail.com>

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about Flogram: <https://flogram.dev/>

[1]: https://github.com/Flogram/Syntax-Highlighter/blob/main/LICENSE
