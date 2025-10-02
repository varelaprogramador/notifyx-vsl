import Image from "next/image"
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io"
import { Star } from "lucide-react"

import { LeadFormButton } from "./_components/lead-form-button"
import Video from "./_components/video"
import { CreateSpotLeadSheet } from "@/features/spot-leads/components/create-spot-lead-sheet"
import { FacebookPixel } from "@/components/facebook-pixel"

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
      <main className="flex-1 bg-black text-white">
        {/* Header Fixo */}
        <div className="sticky top-0 z-40 flex flex-col items-center justify-center gap-4 bg-black px-4 py-4 md:py-8 border-b border-white">
          <h2 className="text-center text-lg font-bold leading-tight md:text-2xl">
            🚀 <strong className="text-white">Revolucione sua Gestão de Clientes com o MATRA CRM!</strong>
          </h2>
          <LeadFormButton title="Entrar no grupo vip" />
        </div>

        {/* Seção Hero */}
        <section className="flex flex-col items-center justify-center gap-6 bg-white px-4 py-6 text-black md:py-8">
          <h1 className="text-center text-2xl font-bold">MATRA CRM</h1>
          <h2 className="max-w-4xl px-4 text-center text-base font-normal leading-tight md:text-[1.5rem]">
            <strong>Pare de perder vendas por falta de organização! </strong>
            <strong className="text-black">
              Gerencie seus clientes de forma inteligente e multiplique seus resultados!
            </strong>
          </h2>

          <h2 className="text-center text-xs md:text-[1.25rem]">
            CRM completo para empresas que querem crescer de verdade!
          </h2>

          <Video src="/main-video.mp4" />

          <div className="space-y-2 text-center">
            <p className="text-md font-bold">Suporte especializado 24h</p>
            <ul className="font-semibold text-black">
              <li>+ Criacao de funil de vendas</li>
              <li>+ Importação de clientes e leads</li>
              <li>+ Dashboard inteligente</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">

            <LeadFormButton title="Entrar no grupo vip" />

          </div>
        </section>

        {/* Seção Funcionalidades */}
        <section className="flex items-center justify-center bg-black px-4 py-6 border-t border-white">
          <div className="flex max-w-[78.125rem] flex-col gap-4 md:flex-row md:gap-8">
            <div className="flex flex-col items-center gap-4 text-center md:space-y-6">
              <h2 className="text-lg font-bold leading-tight md:text-xl text-white">
                Você tem ideia do trabalho que dá para gerenciar clientes sem um CRM profissional?
              </h2>

              <p className="leading-tight text-white">
                Imagine perder vendas por não fazer follow-up, não saber qual cliente está mais próximo de comprar, não
                ter controle sobre seu funil de vendas... Essa realidade pode custar milhares em oportunidades perdidas.
              </p>

              <h2 className="text-lg font-bold leading-tight md:text-xl">
                <strong className="text-white">Nossas Funcionalidades</strong> - O CRM mais completo e intuitivo do
                mercado brasileiro.
              </h2>

              <p className="leading-tight text-white">
                1- Dashboard inteligente com visão 360° dos seus clientes e pipeline de vendas.
              </p>
              <Image
                unoptimized
                draggable={false}
                src="/dash-crm.png"
                alt="Dashboard MATRA CRM"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0 border-2 border-white"
              />

              <p className="leading-tight text-white">
                2- Criacao de funil de vendas simples e intuitivo.
              </p>
              <Image
                priority
                draggable={false}
                src="/funil.png"
                alt="Automação de Vendas"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0 border-2 border-white"
              />

              <h2 className="text-white">(DISPONÍVEL AGORA)</h2>
              <p className="leading-tight text-white">
                3-Importação de clientes e leads de forma simples e eficiente.
              </p>
              <Image
                priority
                src="/contacts.png"
                draggable={false}
                alt="Importação de clientes e leads"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0 border-2 border-white"
              />
            </div>
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section className="flex items-center justify-center bg-white px-4 py-6 md:py-12 border-t-2 border-black">
          <div className="flex max-w-[78.125rem] flex-col items-center justify-center gap-4 md:gap-8">
            <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl text-black">
              DEPOIMENTOS DE EMPRESÁRIOS QUE JÁ USAM O MATRA CRM
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Depoimento 1 */}
              <div className="rounded-lg bg-black p-6 text-white border-2 border-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">CARLOS EMPRESÁRIO</h4>
                  <p className="text-sm text-gray-300">CEO - TECH SOLUTIONS</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;O MATRA CRM TRANSFORMOU NOSSA OPERAÇÃO DE VENDAS! AUMENTAMOS NOSSA CONVERSÃO EM 65% E NUNCA MAIS
                  PERDEMOS UM LEAD POR FALTA DE FOLLOW-UP. SIMPLESMENTE REVOLUCIONÁRIO!&quot;
                </p>
              </div>

              {/* Depoimento 2 */}
              <div className="rounded-lg bg-black p-6 text-white border-2 border-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">MARINA VENDAS</h4>
                  <p className="text-sm text-gray-300">DIRETORA COMERCIAL - INOVACORP</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;SISTEMA INCRÍVEL! NOSSA EQUIPE DE VENDAS TRIPLICOU A PRODUTIVIDADE. OS RELATÓRIOS SÃO
                  FANTÁSTICOS E A AUTOMAÇÃO ECONOMIZA HORAS DO NOSSO TEMPO DIARIAMENTE.&quot;
                </p>
              </div>

              {/* Depoimento 3 */}
              <div className="rounded-lg bg-black p-6 text-white border-2 border-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">ROBERTO GESTOR</h4>
                  <p className="text-sm text-gray-300">FUNDADOR - DIGITAL AGENCY</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;DESDE QUE IMPLEMENTAMOS O MATRA CRM, NOSSA RECEITA CRESCEU 120% EM 6 MESES. A ORGANIZAÇÃO DOS
                  CLIENTES E O CONTROLE DO PIPELINE MUDARAM COMPLETAMENTE NOSSO JOGO!&quot;
                </p>
              </div>

              {/* Depoimento 4 */}
              <div className="rounded-lg bg-black p-6 text-white border-2 border-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">JULIANA ESTRATÉGIA</h4>
                  <p className="text-sm text-gray-300">CMO - GROWTH COMPANY</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;MELHOR INVESTIMENTO QUE FIZEMOS! O MATRA CRM É INTUITIVO, PODEROSO E O SUPORTE É EXCEPCIONAL.
                  CONSEGUIMOS ESCALAR NOSSA OPERAÇÃO SEM PERDER QUALIDADE NO ATENDIMENTO.&quot;
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <div className="space-y-4 text-center md:space-y-6">
                <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl text-black">
                  O ÚNICO CRM brasileiro com PREÇO JUSTO e funcionalidades de NÍVEL ENTERPRISE.
                </h2>
                <p className="leading-tight text-black">
                  Com o MATRA CRM você vai organizar seus clientes profissionalmente, automatizar vendas, nunca mais
                  perder oportunidades e multiplicar seus resultados.
                </p>
                <p className="leading-tight text-black">
                  Além de <strong>ESCALAR SEU NEGÓCIO</strong> com inteligência artificial integrada!
                </p>
              </div>
            </div>

            {/* Comparação Benefícios */}
            <div className="mx-auto w-full space-y-4 py-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-red-600 bg-red-100 p-6 text-center text-red-600">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">Não perderá mais vendas por desorganização</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-red-600 bg-red-100 p-6 text-center text-red-600">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">Não ficará mais sem saber onde estão seus clientes no funil</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-600 bg-green-100 p-6 text-center text-green-600">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">Terá controle total sobre seu pipeline de vendas</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-600 bg-green-100 p-6 text-center text-green-600">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">Poderá automatizar follow-ups e nutrir leads</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-600 bg-green-100 p-6 text-center text-green-600">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">Poderá escalar vendas sem aumentar equipe</p>
                </div>
              </div>
            </div>

            <p className="py-2 text-center leading-tight text-black">
              Esse é o jeito mais INTELIGENTE e EFICIENTE de gerenciar seus clientes!
            </p>
          </div>
        </section>
      </main>

      <FacebookPixel />
      <CreateSpotLeadSheet />
    </>
  )
}
