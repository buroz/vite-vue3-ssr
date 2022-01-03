const path = require('path');
const express = require('express');
const { createSsrServer } = require('vite-ssr/dev')

const { default: render } = require('./dist/server/main');
const manifest = require('./dist/client/ssr-manifest.json');
const {
  ssr: { assets },
} = require('./dist/server/package.json');

const isProd = process.env.NODE_ENV;

const app = express();

for (const asset of assets) {
  app.use(`/${asset}`, express.static(path.join(__dirname, 'dist', 'client', asset)));
}

if (!isProd) {
  const viteServer = await createSsrServer({
    server: { middlewareMode: 'ssr' },
  });
  
  app.use(viteServer.middlewares);
}

app.use('*', async (req, res) => {
  const { originalUrl, protocol } = req;

  const url = `${protocol}://${req.get('host')}${originalUrl}`;

  const { html } = await render(url, {
    manifest,
    preload: true,
    request: req,
    response: res,
    initialState: {
      // TODO ...
    },
  });

  res.setHeader('Content-Type', 'text/html');

  res.end(html);
});

app.listen(3000, () => console.log('Server running on port 3000'));
