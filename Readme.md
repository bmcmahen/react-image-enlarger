# react-image-enlarger

[![npm package](https://img.shields.io/npm/v/react-image-enlarger/latest.svg)](https://www.npmjs.com/package/react-image-enlarger)
[![Follow on Twitter](https://img.shields.io/twitter/follow/benmcmahen.svg?style=social&logo=twitter)](https://twitter.com/intent/follow?screen_name=benmcmahen)

A medium.com style image zoom component with gesture dismissal similar to that found in the iOS Photos app. Originally built for use in [Sancho-UI](https://github.com/bmcmahen/sancho). Try the [demo here](https://codesandbox.io/embed/adoring-sun-dz5yj).

## Features

- Drag to dismiss
- Optionally use a differernt enlarged image source
- Optional loading indicator when loading the enlarged image
- Spring based animations

## Install

Install `react-image-enlarger` and `react-gesture-responder` using yarn or npm.

```
yarn add react-image-enlarger react-gesture-responder
```

## Usage

```jsx
import Image from "react-image-enlarger";

function SingleSource() {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <Image
      style={{ width: "200px", height: "auto" }}
      zoomed={zoomed}
      src="my-image.jpg"
      alt="The best dog ever"
      onClick={() => setZoomed(true)}
      onRequestClose={() => setZoomed(false)}
    />
  );
}
```

## API

Any additional props beyond the ones listed below are passed to the thumbnail image.

| Name             | Type            | Default Value | Description                                                |
| ---------------- | --------------- | ------------- | ---------------------------------------------------------- |
| zoomed\*         | boolean         |               | Whether the enlarged image is shown                        |
| onRequestClose\* | () => void;     |               | A callback for closing the zoomed image                    |
| renderLoading    | React.ReactNode |               | Render a loading indicator                                 |
| src\*            | String          |               | The thumbnail image source (and enlarged, if not provided) |
| enlargedSrc      | String          |               | An optional larger image source                            |
| overlayColor     | String          |               | Customize the background color of the overlay              |

## License

MIT
