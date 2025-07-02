# @cliqdigital/user-tracking-sdk

A lightweight, privacy-conscious user tracking SDK for browser applications.

## Installation

Install the SDK directly from GitHub:

```bash
npm install git+https://github.com/cliqdigital/user-tracking-sdk.git
```

## Usage

```js
import { trackEvent, getCliqId } from "@cliqdigital/user-tracking-sdk";

trackEvent("page_view", {
    path: window.location.pathname,
    cid: "optional_click_id"
});
```

## Features

- Anonymous tracking with UUID-based `cliq_id`
- Safe and compliant use of cookies

## License

MIT
