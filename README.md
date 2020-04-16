![cover](https://user-images.githubusercontent.com/11075892/79423450-34ecc700-7ff1-11ea-9755-da658b66e38d.png)

# Svelte Clipboard

[![license](https://img.shields.io/npm/l/svelte-clipboard?color=%2351bff4)](https://revolunet.mit-license.org/) [![npm](https://img.shields.io/npm/v/svelte-clipboard?color=%23d091ff)](https://www.npmjs.com/package/svelte-clipboard) [![downloads](https://img.shields.io/npm/dm/svelte-clipboard?color=%23ad43a7)](https://www.npmjs.com/package/svelte-clipboard)

[![nodei](https://nodei.co/npm/svelte-clipboard.png)](https://www.npmjs.com/package/svelte-clipboard)

`A Svelte component easy to copy text to clipboard.`

## Install

```shell
$ npm i svelte-clipboard --save-dev
```

## Demo

[Live Demo](https://svelte.dev/repl/82b1f242b3574e8da1907ddb24bd2bf2)

## Usage

```js
<script>
  import Clipboard from "svelte-clipboard";
</script>

<Clipboard
  text="Your Text Need to Copy"
  let:copy
  on:copy={() => {
    console.log('Has Copied');
  }}>
  <button on:click={copy}>Copy</button>
</Clipboard>
```

## License

[MIT](https://opensource.org/licenses/MIT)
