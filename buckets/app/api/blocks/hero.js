export default function (_request, response) {
  response.json({
    cta: 'Sed cursus',
    description: 'Nulla id placerat sem. Vestibulum congue suscipit erat, eu tempor augue venenatis ut. Vestibulum magna ex, pulvinar eget quam et, rutrum sodales nisl. Curabitur finibus tristique.',
    url: '/departament',
    thumbnails: [
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/hero/hero_736x400.jpg',
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/hero/hero_928x400.jpg',
      'https://wbfsnickkamdoyzndmec.supabase.in/storage/v1/object/public/kuba/hero/hero_1198x400.jpg'
    ],
    title: 'Nunc eu dignissim leo. Donec.'
  })
}
