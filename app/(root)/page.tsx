import Image from 'next/image'
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io'
import { Star } from 'lucide-react'

import { LeadFormButton } from './_components/lead-form-button'
import Video from './_components/video'
import { CreateSpotLeadSheet } from '@/features/spot-leads/components/create-spot-lead-sheet'
import { FacebookPixel } from '@/components/facebook-pixel'

// // Componente para vídeo demo
// function DemoVideo({ src }: { src: string }) {
//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
//         <video className="w-full h-full object-cover" controls poster="/placeholder.svg?height=400&width=800">
//           <source src={src} type="video/mp4" />
//           Seu navegador não suporta vídeos.
//         </video>
//       </div>
//     </div>
//   )
// }

export default function MatraLandingPage() {
  return (
    <>
      <main className="flex-1 bg-[#0066FF] text-white">
        {/* Header Fixo */}
        <div className="sticky top-0 z-40 flex flex-col items-center justify-center gap-4 border-b border-white bg-[#0066FF] px-4 py-4 md:py-8">
          <h2 className="text-center text-lg font-bold leading-tight md:text-2xl">
            🏠{' '}
            <strong className="text-white">
              Revolucione sua Gestão Imobiliária com o VOUZ CRM!
            </strong>
          </h2>
          <LeadFormButton title="Entrar no grupo vip" />
        </div>

        {/* Seção Hero */}
        <section className="flex flex-col items-center justify-center gap-6 bg-white px-4 py-6 text-[#0066FF] md:py-8">
          <div className="rounded-3xl bg-[#0066FF] p-8">
            <h1 className="text-center text-6xl font-bold text-white">VOUZ</h1>
            <p className="text-center text-2xl font-bold text-white">
              CRM imobiliário
            </p>
          </div>
          <h2 className="max-w-4xl px-4 text-center text-base font-normal leading-tight md:text-[1.5rem]">
            <strong>Pare de perder vendas por falta de organização! </strong>
            <strong className="text-[#0066FF]">
              Gerencie seus clientes imobiliários de forma inteligente e
              multiplique seus resultados!
            </strong>
          </h2>

          <h2 className="text-center text-xs md:text-[1.25rem]">
            CRM completo para corretores e imobiliárias que querem crescer de
            verdade!
          </h2>

          <Video src="/main-video2.mp4" />

          <div className="space-y-2 text-center">
            <p className="text-md font-bold">Suporte especializado 24h</p>
            <ul className="font-semibold text-[#0066FF]">
              <li>+ Gestão completa de imóveis</li>
              <li>+ Pipeline de vendas imobiliário</li>
              <li>+ Dashboard inteligente para corretores</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <LeadFormButton title="Entrar no grupo vip" />
          </div>
        </section>

        {/* Seção Funcionalidades */}
        <section className="flex items-center justify-center border-t border-white bg-[#0066FF] px-4 py-6">
          <div className="flex max-w-[78.125rem] flex-col gap-4 md:flex-row md:gap-8">
            <div className="flex flex-col items-center gap-4 text-center md:space-y-6">
              <h2 className="text-lg font-bold leading-tight text-white md:text-xl">
                Você tem ideia do trabalho que dá para gerenciar clientes
                imobiliários sem um CRM profissional?
              </h2>

              <p className="leading-tight text-white">
                Imagine perder vendas por não fazer follow-up, não saber qual
                cliente está mais próximo de comprar, não ter controle sobre seu
                funil de vendas imobiliário... Essa realidade pode custar
                milhares em oportunidades perdidas.
              </p>

              <h2 className="text-lg font-bold leading-tight md:text-xl">
                <strong className="text-white">Nossas Funcionalidades</strong> -
                O CRM mais completo e intuitivo para corretores e imobiliárias
                do Brasil.
              </h2>

              <p className="leading-tight text-white">
                1- Dashboard inteligente com visão 360° dos seus clientes e
                pipeline de vendas imobiliário.
              </p>
              <Image
                unoptimized
                draggable={false}
                src="/dashboard-vouz.png"
                alt="Dashboard VOUZ CRM Imobiliário"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md border-2 border-white object-contain shadow-sm md:mx-0"
              />

              <p className="leading-tight text-white">
                2- Criação de funil de vendas imobiliário simples e intuitivo.
              </p>
              <Image
                priority
                draggable={false}
                src="/funil.png"
                alt="Automação de Vendas Imobiliárias"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md border-2 border-white object-contain shadow-sm md:mx-0"
              />

              <h2 className="text-white">(DISPONÍVEL AGORA)</h2>
              <p className="leading-tight text-white">
                3- Gestão completa de corretores imobiliários de forma simples e
                eficiente.
              </p>
              <Image
                priority
                src="/corretor.png"
                draggable={false}
                alt="Gestão de imóveis e leads imobiliários"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md border-2 border-white object-contain shadow-sm md:mx-0"
              />
            </div>
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section className="flex items-center justify-center border-t-2 border-[#0066FF] bg-white px-4 py-6 md:py-12">
          <div className="flex max-w-[78.125rem] flex-col items-center justify-center gap-4 md:gap-8">
            <h2 className="text-balance text-lg font-bold leading-tight text-[#0066FF] md:text-2xl">
              DEPOIMENTOS DE CORRETORES E IMOBILIÁRIAS QUE JÁ USAM O VOUZ CRM
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Depoimento 1 */}
              <div className="rounded-lg border-2 border-[#0066FF] bg-[#0066FF] p-6 text-white">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">CARLOS CORRETOR</h4>
                  <p className="text-sm text-gray-200">
                    CORRETOR SENIOR - IMOBILIÁRIA EXCLUSIVA
                  </p>
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
                  &quot;O VOUZ CRM TRANSFORMOU MINHA OPERAÇÃO DE VENDAS!
                  AUMENTEI MINHA CONVERSÃO EM 65% E NUNCA MAIS PERDI UM LEAD POR
                  FALTA DE FOLLOW-UP. SIMPLESMENTE REVOLUCIONÁRIO!&quot;
                </p>
              </div>

              {/* Depoimento 2 */}
              <div className="rounded-lg border-2 border-[#0066FF] bg-[#0066FF] p-6 text-white">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">MARINA IMOBILIÁRIA</h4>
                  <p className="text-sm text-gray-200">
                    DIRETORA - IMOBILIÁRIA INOVACORP
                  </p>
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
                  &quot;SISTEMA INCRÍVEL! NOSSA EQUIPE DE CORRETORES TRIPLICOU A
                  PRODUTIVIDADE. OS RELATÓRIOS SÃO FANTÁSTICOS E A AUTOMAÇÃO
                  ECONOMIZA HORAS DO NOSSO TEMPO DIARIAMENTE.&quot;
                </p>
              </div>

              {/* Depoimento 3 */}
              <div className="rounded-lg border-2 border-[#0066FF] bg-[#0066FF] p-6 text-white">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">ROBERTO GESTOR</h4>
                  <p className="text-sm text-gray-200">
                    FUNDADOR - IMOBILIÁRIA DIGITAL
                  </p>
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
                  &quot;DESDE QUE IMPLEMENTAMOS O VOUZ CRM, NOSSA RECEITA
                  CRESCEU 120% EM 6 MESES. A ORGANIZAÇÃO DOS CLIENTES E O
                  CONTROLE DO PIPELINE MUDARAM COMPLETAMENTE NOSSO JOGO!&quot;
                </p>
              </div>

              {/* Depoimento 4 */}
              <div className="rounded-lg border-2 border-[#0066FF] bg-[#0066FF] p-6 text-white">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">JULIANA ESTRATÉGIA</h4>
                  <p className="text-sm text-gray-200">
                    CMO - IMOBILIÁRIA GROWTH
                  </p>
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
                  &quot;MELHOR INVESTIMENTO QUE FIZEMOS! O VOUZ CRM É INTUITIVO,
                  PODEROSO E O SUPORTE É EXCEPCIONAL. CONSEGUIMOS ESCALAR NOSSA
                  OPERAÇÃO SEM PERDER QUALIDADE NO ATENDIMENTO.&quot;
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <div className="space-y-4 text-center md:space-y-6">
                <h2 className="text-balance text-lg font-bold leading-tight text-[#0066FF] md:text-2xl">
                  O ÚNICO CRM imobiliário brasileiro com PREÇO JUSTO e
                  funcionalidades de NÍVEL ENTERPRISE.
                </h2>
                <p className="leading-tight text-[#0066FF]">
                  Com o VOUZ CRM você vai organizar seus clientes imobiliários
                  profissionalmente, automatizar vendas, nunca mais perder
                  oportunidades e multiplicar seus resultados.
                </p>
                <p className="leading-tight text-[#0066FF]">
                  Além de <strong>ESCALAR SEU NEGÓCIO IMOBILIÁRIO</strong> com
                  inteligência artificial integrada!
                </p>
              </div>
            </div>

            {/* Comparação Benefícios */}
            <div className="mx-auto w-full space-y-4 py-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-red-600 bg-red-100 p-6 text-center text-red-600">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">
                    Não perderá mais vendas por desorganização
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-red-600 bg-red-100 p-6 text-center text-red-600">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">
                    Não ficará mais sem saber onde estão seus clientes no funil
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-600 bg-green-100 p-6 text-center text-green-600">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Terá controle total sobre seu pipeline de vendas imobiliário
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-600 bg-green-100 p-6 text-center text-green-600">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá automatizar follow-ups e nutrir leads imobiliários
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-600 bg-green-100 p-6 text-center text-green-600">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">
                    Poderá escalar vendas sem aumentar equipe
                  </p>
                </div>
              </div>
            </div>

            <p className="py-2 text-center leading-tight text-[#0066FF]">
              Esse é o jeito mais INTELIGENTE e EFICIENTE de gerenciar seus
              clientes imobiliários!
            </p>
          </div>
        </section>
      </main>

      <FacebookPixel />
      <CreateSpotLeadSheet />
    </>
  )
}
