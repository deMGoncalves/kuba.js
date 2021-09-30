import * as settings from '@kuba/settings'

export default (search) =>
  ({
    '@id': '#searchresultspage',
    '@type': 'SearchResultsPage',
    about: {
      '@id': '#itemlist'
    },
    mainEntityOfPage: {
      '@id': '#webpage',
      '@type': 'WebPage',
      breadcrumb: {
        '@id': '#breadcrumb'
      },
      description: search.description,
      inLanguage: settings.app.language,
      isPartOf: {
        '@id': '#website'
      },
      name: search.title,
      url: settings.app.url
    }
  })
