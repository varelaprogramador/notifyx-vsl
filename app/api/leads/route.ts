import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma'
import axios, { AxiosError } from 'axios'

export async function POST(req: NextRequest) {
  const { name, email, phone, ideia } = await req.json()

  if (!name || !email || !phone || !ideia) {
    return NextResponse.json({ error: 'Campos faltando' }, { status: 400 })
  }

  try {
    const lead = await prisma.lead.create({
      data: { name, email, phone, ideia },
    })

    const cliente = await axios.post(
      `${process.env.SPOT_API_URL}/clients`,
      { name, email, phone, tags: ['Captacao site'] },
      {
        headers: {
          Authorization: `Bearer ${process.env.SPOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    )

    console.log(cliente.data)

    const clientId = cliente.data.data.id
    const funnelId = 'f6rdayzu4ddar7sg4mqt6yq7'
    const stageId = 'sdi4z3guqzvgvcr0lo7odx91'

    const negociacao = await axios.post(
      `${process.env.SPOT_API_URL}/deals`,
      {
        title: cliente.data.data.name,
        clientId,
        funnelId,
        stageId,
        value: 0,
        notes: 'Cliente demonstrou interesse em desenvolvimento de software',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SPOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    )

    console.log(negociacao.data)

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        'Spot API Error:',
        JSON.stringify(error.response?.data, null, 2),
      )
    } else {
      console.error(error)
    }
    return NextResponse.json({ error: 'Erro ao criar lead' }, { status: 500 })
  }
}
