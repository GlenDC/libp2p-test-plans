import path from 'path'
import { fileURLToPath } from 'url'

import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Exposes a minimal express server
 * on the desired port, serving the static folder as is.
 *
 * Only goal of this server is to serve the Libp2p test together
 * with any required dependencies in the selected browser environment.
 */
export default (port) => {
  const app = express()

  // Besides the minimal `index.html` page,
  // this folder also contains the `test.bundle.js` file (once bundled with WebPack),
  // containing your test plan, together with any dependencies this SDK or your Lib2p test uses.
  app.use(express.static(path.join(__dirname, 'static')))

  return new Promise((resolve) => {
    app.listen(port, () => {
      console.log(`local web server running on port ${port}`)
      resolve()
    })
  })
}
