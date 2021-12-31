import { dataLayer } from '@kuba/gtm'
import { before } from '@kuba/middleware'

const redirect = before(function (page) {
  dataLayer.push({
    event: 'header',
    header_redirect: page
  })
  return [page]
})

export default {
  redirect
}