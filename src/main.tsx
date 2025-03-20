import './createPost.js';

import { Devvit, useState, useWebView } from '@devvit/public-api';
import type { DevvitMessage, WebViewMessage } from './message.js';

Devvit.configure({
  redditAPI: true,
  redis: true,
});

Devvit.addCustomPostType({
  name: "Astromine",
  description: "An asteroid mining game.",
  render: (context) => {
    const webview = useWebView<WebViewMessage, DevvitMessage>({
      url: "page.html",
      async onMessage(message, webview) {
        message.type = "webViewReady"
        // await context.redis.set(`${context.postId}`, message.type)
      }
    })

    return (
      <button onPress={() => webview.mount()}>Watch Asteroid</button>
    )
  }
})

export default Devvit;
