import Image from 'next/image'
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io'

import Video from './_components/video'
import tagsImage from '@/public/automacao-make.png'
import traqueamentoImage from '@/public/script.png'
import functionalityGif from '@/public/dash.jpeg'
import { LeadFormButton } from './_components/lead-form-button'
import { CreateSpotLeadSheet } from '@/features/spot-leads/components/create-spot-lead-sheet'
import { FacebookPixel } from '@/components/facebook-pixel'
import { Star } from 'lucide-react'

export default function Page() {
  return (
    <>
      <main className="flex-1 bg-black text-white">
        <div className="sticky top-0 z-40 flex flex-col items-center justify-center gap-4 bg-black px-4 py-4 md:py-8">
          <h2 className="text-center text-lg font-bold leading-tight md:text-2xl">
            🔥{' '}
            <strong className="text-[#10b981]">
              Garanta O notifyx Brasileiro com Acesso Eterno!
            </strong>
          </h2>

          <LeadFormButton title="Entrar no grupo vip" />
        </div>

        <section className="flex flex-col items-center justify-center gap-6 bg-white px-4 py-6 text-black md:py-8">
          <Image
            priority
            src={'/logo.png'}
            width={500}
            height={500}
            alt="Spotform"
            draggable={false}
            className="pointer-events-none max-h-14 w-full select-none object-contain"
          />

          <h2 className="max-w-4xl px-4 text-center text-base font-normal leading-tight md:text-[1.5rem]">
            <strong>
              Não perca mais tempo com mensagens manuais no WhatsApp!{' '}
            </strong>
            <strong className="text-[#10b981]">
              Automatize suas conversas e aumente suas vendas por um preço
              justo!
            </strong>
          </h2>

          <h2 className="text-center text-xs md:text-[1.25rem]">
            Relatórios em tempo real da sua audiência!
          </h2>

          <Video src="/main-video.mp4" />

          <div className="space-y-2 text-center">
            <p className="text-md font-bold">Suporte 24h via whatsapp</p>

            <ul className="font-semibold text-[#10b981]">
              <li>+ Grupo de networking</li>
              <li>+ Integração com make</li>
              <li>+ Notificações de novos lead</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <LeadFormButton title="Entrar no grupo vip" />
          </div>
        </section>

        <section className="flex items-center justify-center bg-[#0c0c0c] px-4 py-6">
          <div className="flex max-w-[78.125rem] flex-col gap-4 md:flex-row md:gap-8">
            <div className="flex flex-col items-center gap-4 text-center md:space-y-6">
              <h2 className="text-lg font-bold leading-tight md:text-xl">
                Você tem ideia do trabalho que dá para gerenciar mensagens no
                WhatsApp manualmente?
              </h2>

              <p className="leading-tight text-white">
                Imagine precisar responder centenas de mensagens por dia, enviar
                promoções para clientes, acompanhar leads... Essa realidade pode
                ser extremamente desgastante e desmotivadora para muitos.
              </p>

              <h2 className="text-lg font-bold leading-tight md:text-xl">
                <strong className="text-[#10b981]">
                  Nossas Funcionalidades
                </strong>{' '}
                - O Disparador que mais entrega, sendo o mais acessível do
                mercado.
              </h2>

              <p className="leading-tight text-white">
                1- Dashboard para visualizacao de contatos e kpis.
              </p>

              <Image
                unoptimized
                draggable={false}
                src={functionalityGif}
                alt="Funcionalidades SpotForm"
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />

              <p className="leading-tight text-white">
                2- Crie Scripts vencedores, para utilizar no seus disparos.
              </p>

              <Image
                priority
                draggable={false}
                src={traqueamentoImage}
                alt="Rastreamento: Facebook Pixel, Google Analytics, Redirecionamento WhatsApp"
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />
              <h2 className="text-green-500">(EM DESENVOLVIMENTO)</h2>
              <p className="leading-tight text-white">
                Faça automaçoes de forma nativa e nao dependa de ferramentas
                externas.
              </p>

              <Image
                priority
                src={tagsImage}
                draggable={false}
                alt="Tags personalizadas"
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center bg-[#10b981] px-4 py-6 md:py-12">
          <div className="flex max-w-[78.125rem] flex-col items-center justify-center gap-4 md:gap-8">
            <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl">
              DEPOIMENTO DE NOSSOS CLIENTES PILOTO
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="rounded-lg bg-white p-6 text-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">CARLOS SILVA</h4>
                  <p className="text-sm text-zinc-600">MARKETING</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;EU DESCOBRI ESSA SOLUÇÃO POR UM AMIGO E POSSO DIZER QUE
                  A PLATAFORMA QUE MUDOU O JOGO PARA MIM. CONSEGUI OTIMIZAR
                  TODAS AS MINHAS VENDAS E FAZER CAPTAÇÕES MAIS EFETIVAS. &quot;
                </p>
                <div className="mt-4 flex justify-center gap-2"></div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg bg-white p-6 text-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">ANA FERREIRA</h4>
                  <p className="text-sm text-zinc-600">E-COMMERCE</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot; É A MELHOR SOLUÇÃO QUE JÁ ENCONTREI. MUDOU A FORMA COMO
                  EU FAÇO VENDAS NO MEU NEGÓCIO. CONSEGUI TRIPLICAR MINHAS
                  VENDAS USANDO O NOTIFYX DE FORMA MUITO RECORRENTE. &quot;
                </p>
                <div className="mt-4 flex justify-center gap-2"></div>
              </div>
              {/* Testimonial 1 */}
              <div className="rounded-lg bg-white p-6 text-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">MARCOS OLIVEIRA</h4>
                  <p className="text-sm text-zinc-600">AGÊNCIA DIGITAL</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot; DESDE QUE COMECEI A USAR O NOTIFYX, CONSEGUI
                  AUTOMATIZAR 90% DAS MINHAS INTERAÇÕES COM CLIENTES. ECONOMIZO
                  PELO MENOS 4 HORAS POR DIA E AUMENTEI MINHA TAXA DE CONVERSÃO
                  EM 35%. SIMPLESMENTE INDISPENSÁVEL! &quot;
                </p>
                <div className="mt-4 flex justify-center gap-2"></div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-lg bg-white p-6 text-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">JULIANA SANTOS</h4>
                  <p className="text-sm text-zinc-600">E-COMMERCE</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;EU LITERALMENTE É A MELHOR SOLUÇÃO QUE JÁ ENCONTREI.
                  MUDOU A FORMA COMO EU FAÇO VENDAS NO MEU NEGÓCIO. CONSEGUI
                  TRIPLICAR MINHAS VENDAS USANDO O NOTIFYX DE FORMA MUITO
                  RECORRENTE. &quot;
                </p>
                <div className="mt-4 flex justify-center gap-2"></div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <div className="space-y-4 text-center md:space-y-6">
                <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl">
                  O ÚNICO Sistema de automação de WhatsApp com BAIXO CUSTO e
                  alta qualidade.
                </h2>

                <p className="leading-tight text-white">
                  Com o NotifyX você vai se organizar profissionalmente,
                  economizar tempo, aumentar produtividade, não perder mais
                  vendas por conta da limitação de quantidade de mensagens e
                  respostas do WhatsApp.
                </p>

                <p className="leading-tight text-white">
                  Além de <strong>SUPER QUALIFICAR SEUS LEADS</strong>
                </p>
              </div>
            </div>

            <div className="mx-auto w-full space-y-4 py-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">Você não terá custo por mensagem</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">
                    Não ficará limitado a quantidade de mensagem
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá enviar quantas mensagens quiser
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá gerir todos seus leads em 1 lugar
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá personalizar tudo do jeito que quiser e sem
                    limitações
                  </p>
                </div>
              </div>
            </div>

            <p className="py-2 text-center leading-tight">
              Esse é o jeito mais FÁCIL e ECONÔMICO de apresentar
              profissionalismo aos seus clientes!
            </p>
          </div>
        </section>
      </main>

      <FacebookPixel />
      <CreateSpotLeadSheet />
    </>
  )
}
