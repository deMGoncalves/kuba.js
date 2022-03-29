import * as f from '@kuba/f'
import * as settings from '@kuba/settings'
import { push } from '@kuba/jsonld'

export default (shape) =>
  push({
    '@id': `#${shape.id}`,
    '@type': 'Product',
    additionalProperty: {
      '@id': '#additionalproperty'
    },
    brand: {
      '@id': `#${shape.marca?.slug}`,
      '@type': 'Brand',
      description: shape.marca?.descricao,
      logo: shape.marca?.logo,
      name: shape.marca?.nome
    },
    description: shape.descricao,
    image: shape.thumbnail,
    mainEntityOfPage: {
      '@id': '#webpage',
      '@type': 'WebPage',
      breadcrumb: {
        '@id': '#breadcrumb'
      },
      description: shape.descricao,
      inLanguage: settings.app.language,
      isPartOf: {
        '@id': '#website'
      },
      name: shape.modelo,
      url: settings.app.url
    },
    material: f
      .from(shape.material)
      .pipe(f.or(f.__, []))
      .pipe(f.map(f.__, f.prop('valor')))
      .pipe(f.join(f.__, ', '))
      .done(),
    name: shape.modelo,
    offers: {
      '@id': '#offers'
    },
    size: `${shape.tamanho?.valor}"`
  })