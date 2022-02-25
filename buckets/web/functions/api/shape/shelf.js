import { createClient } from '@supabase/supabase-js'

export async function onRequestPost (context) {
  const supabase = createClient(
    context.env.API_URL,
    context.env.API_KEY,
    {}
  )
  const { concave, flares, flex, material, montagem, nose, origem, page = 1, pro, recorte, simetrico, size = 24, tail, tamanho, tipo, wells } = await context.request.json()
  let query = supabase
    .from('shape')
    .select(`
      *,
      flag (*),
      ${flex?.length ? 'flex!inner(*)' : 'flex (*)'},
      ${origem?.length ? 'marca!inner(*, origem!inner(*))' : 'marca (*, origem (*))'},
      ${material?.length ? 'material!inner(*)' : 'material (*)'},
      ${montagem?.length ? 'montagem!inner(*)' : 'montagem (*)'},
      ${tamanho?.length ? 'tamanho!inner(*)' : 'tamanho (*)'},
      ${tipo?.length ? 'tipo!inner(*)' : 'tipo (*)'},
      wheelbase (*)
    `)
    .order('views', { ascending: false })
    .range(
      page * size - size,
      page * size - 1
    )

  if (concave) { query = query.eq('concave', true) }
  if (flares) { query = query.eq('wheel_flares', true) }
  if (nose) { query = query.eq('nose', true) }
  if (pro) { query = query.eq('pro_model', true) }
  if (recorte) { query = query.eq('cut_outs', true) }
  if (simetrico) { query = query.eq('simetrico', true) }
  if (tail) { query = query.eq('tail', true) }
  if (wells) { query = query.eq('wheel_wells', true) }

  if (flex?.length) { query = query.in('flex.valor', flex) }
  if (material?.length) { query = query.in('material.valor', material) }
  if (montagem?.length) { query = query.in('montagem.valor', montagem) }
  if (origem?.length) { query = query.in('marca.origem.valor', origem) }
  if (tamanho?.length) { query = query.in('tamanho.valor', tamanho) }
  if (tipo?.length) { query = query.in('tipo.valor', tipo) }

  const { data, error } = await query

  // response.setHeader('Cache-Control', 'public, max-age=86400')
  // response.json({ data, error })

  return new Response(JSON.stringify({ data, error }))
}