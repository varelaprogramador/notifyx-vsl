import Image from "next/image"
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io"
import { Star } from "lucide-react"
import { LeadFormButton } from "./_components/lead-form-button"
import Video from "./_components/video"
import { CreateSpotLeadSheet } from "@/features/spot-leads/components/create-spot-lead-sheet"
import { FacebookPixel } from "@/components/facebook-pixel"

export default function MatraLandingPage() {
  return (
    <>
      <main className="flex-1 bg-black text-white">
        {/* Header Fixo */}
        <div className="sticky top-0 z-40 flex flex-col items-center justify-center gap-4 bg-black px-4 py-4 md:py-8 border-b border-white">
          <h2 className="text-center text-lg font-bold leading-tight md:text-2xl">
            🚀 <strong className="text-white">Desenvolva seu SaaS dos Sonhos com a MATRA!</strong>
          </h2>
          <LeadFormButton title="Entrar no grupo vip" />
        </div>

        {/* Seção Hero */}
        <section className="flex flex-col items-center justify-center gap-6 bg-white px-4 py-6 text-black md:py-8">
          <Image src="/logo.png" alt="Logo" width={500} height={500} className="rounded-3xl" />
          <h2 className="max-w-4xl px-4 text-center text-base font-normal leading-tight md:text-[1.5rem]">
            <strong>Pare de sonhar e comece a CONSTRUIR! </strong>
            <strong className="text-black">
              Transforme sua ideia em um SaaS lucrativo com nossa plataforma completa!
            </strong>
          </h2>
          <h2 className="text-center text-xs md:text-[1.25rem]">
            Plataforma completa para desenvolvedores que querem criar SaaS de verdade!
          </h2>
          <Video src="/main-video.mp4" />
          <div className="space-y-2 text-center">
            <p className="text-md font-bold">Suporte técnico especializado 24h</p>
            <ul className="font-semibold text-black">
              <li>+ Infraestrutura completa para SaaS</li>
              <li>+ Templates e componentes prontos</li>
              <li>+ Sistema de pagamentos integrado</li>
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
                Você tem ideia do trabalho que dá para desenvolver um SaaS do zero?
              </h2>
              <p className="leading-tight text-white">
                Imagine gastar meses configurando infraestrutura, criando sistemas de pagamento, desenvolvendo
                autenticação, gerenciamento de usuários... Essa complexidade pode custar milhares e meses de
                desenvolvimento.
              </p>
              <h2 className="text-lg font-bold leading-tight md:text-xl">
                <strong className="text-white">Nossa Plataforma</strong> - A solução mais completa para desenvolvedores
                SaaS do Brasil.
              </h2>
              <p className="leading-tight text-white">
                1- Dashboard administrativo completo com gestão de usuários.
              </p>
              <Image
                unoptimized
                draggable={false}
                src="/default-video-banner.png"
                alt="Dashboard MATRA SaaS"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0 border-2 border-white"
              />
              <p className="leading-tight text-white">
                2- Sistema de cobrança e assinaturas totalmente automatizado e integrado.
              </p>
              <Image
                priority
                draggable={false}
                src="/default-video-banner.png"
                alt="Sistema de Pagamentos"
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
              DEPOIMENTOS DE DESENVOLVEDORES QUE JÁ CRIARAM SEUS SAAS COM A MATRA
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Depoimento 1 */}
              <div className="rounded-lg bg-black p-6 text-white border-2 border-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">CARLOS DESENVOLVEDOR</h4>
                  <p className="text-sm text-gray-300">FULLSTACK - TECH STARTUP</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;A MATRA ACELEROU MEU DESENVOLVIMENTO EM 300%! LANCEI MEU SAAS EM 2 SEMANAS AO INVÉS DE 6 MESES.
                  A INFRAESTRUTURA É SÓLIDA E O SUPORTE TÉCNICO É EXCEPCIONAL!&quot;
                </p>
              </div>

              {/* Depoimento 2 */}
              <div className="rounded-lg bg-black p-6 text-white border-2 border-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">MARINA FRONTEND</h4>
                  <p className="text-sm text-gray-300">REACT DEVELOPER - DIGITAL AGENCY</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;PLATAFORMA INCRÍVEL! OS COMPONENTES PRONTOS E A INTEGRAÇÃO COM PAGAMENTOS ECONOMIZARAM MESES DE
                  TRABALHO. MEU SAAS JÁ ESTÁ FATURANDO R$ 15K/MÊS!&quot;
                </p>
              </div>

              {/* Depoimento 3 */}
              <div className="rounded-lg bg-black p-6 text-white border-2 border-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">ROBERTO BACKEND</h4>
                  <p className="text-sm text-gray-300">NODE.JS SPECIALIST - STARTUP FOUNDER</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;DESDE QUE DESCOBRI A MATRA, CRIEI 3 SAAS DIFERENTES! A ESCALABILIDADE DA INFRAESTRUTURA E A
                  FACILIDADE DE DEPLOY MUDARAM COMPLETAMENTE MEU JOGO COMO DESENVOLVEDOR!&quot;
                </p>
              </div>

              {/* Depoimento 4 */}
              <div className="rounded-lg bg-black p-6 text-white border-2 border-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">JULIANA DEVOPS</h4>
                  <p className="text-sm text-gray-300">CLOUD ARCHITECT - TECH LEAD</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;MELHOR PLATAFORMA PARA SAAS QUE JÁ USEI! A MATRA É ROBUSTA, SEGURA E O MONITORAMENTO EM TEMPO
                  REAL ME DÁ TOTAL CONTROLE SOBRE MINHA APLICAÇÃO.&quot;
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <div className="space-y-4 text-center md:space-y-6">
                <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl text-black">
                  A ÚNICA plataforma brasileira com PREÇO JUSTO e funcionalidades de NÍVEL ENTERPRISE para SaaS.
                </h2>
                <p className="leading-tight text-black">
                  Com a MATRA você vai desenvolver seu SaaS profissionalmente, automatizar cobranças, escalar sem
                  limites e multiplicar sua receita recorrente.
                </p>
                <p className="leading-tight text-black">
                  Além de <strong>TRANSFORMAR SUA IDEIA EM NEGÓCIO</strong> com inteligência artificial integrada!
                </p>
              </div>
            </div>

            {/* Comparação Benefícios */}
            <div className="mx-auto w-full space-y-4 py-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-red-600 bg-red-100 p-6 text-center text-red-600">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">Não perderá mais meses configurando infraestrutura</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-red-600 bg-red-100 p-6 text-center text-red-600">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">Não ficará mais travado com integrações complexas</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-600 bg-green-100 p-6 text-center text-green-600">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">Terá seu SaaS funcionando em dias, não meses</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-600 bg-green-100 p-6 text-center text-green-600">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">Poderá focar no seu produto, não na infraestrutura</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-green-600 bg-green-100 p-6 text-center text-green-600">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">Poderá escalar automaticamente conforme cresce</p>
                </div>
              </div>
            </div>
            <p className="py-2 text-center leading-tight text-black">
              Esse é o jeito mais INTELIGENTE e RÁPIDO de desenvolver seu SaaS!
            </p>
          </div>
        </section>
      </main>
      <FacebookPixel />
      <CreateSpotLeadSheet />
    </>
  )
}
