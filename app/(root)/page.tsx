import Image from "next/image"
import { IoIosCloseCircle, IoIosCheckmarkCircle } from "react-icons/io"
import { Star, Scissors } from "lucide-react"
import { LeadFormButton } from "./_components/lead-form-button";
import { FacebookPixel } from "@/components/facebook-pixel";
import { CreateSpotLeadSheet } from "@/features/spot-leads/components/create-spot-lead-sheet";
import Video from "./_components/video";






export default function LandingPage() {
  return (
    <>
      <main className="flex-1 bg-black text-white">
        {/* Header Fixo */}
        <div className="sticky top-0 z-40 flex flex-col items-center justify-center gap-4 bg-black px-4 py-4 md:py-8">
          <h2 className="text-center text-lg font-bold leading-tight md:text-2xl">
            🔥 <strong className="text-orange-500">Transforme sua Barbearia com o YESBARBER - Sistema Completo!</strong>
          </h2>
          <LeadFormButton title="Entrar no grupo vip" />
        </div>

        {/* Seção Hero */}
        <section className="flex flex-col items-center justify-center gap-6 bg-white px-4 py-6 text-black md:py-8">
          <div className="flex items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">
              <Scissors className="h-8 w-8 text-white" />
            </div>
            <span className="text-4xl font-bold text-gray-900">YESBARBER</span>
          </div>

          <h2 className="max-w-4xl px-4 text-center text-base font-normal leading-tight md:text-[1.5rem]">
            <strong>Pare de perder clientes por desorganização! </strong>
            <strong className="text-orange-500">
              Gerencie sua barbearia de forma profissional e aumente seus lucros!
            </strong>
          </h2>

          <h2 className="text-center text-xs md:text-[1.25rem]">
            Sistema completo de gestão para barbearias modernas!
          </h2>

          <Video src="/main-video.mp4" />

          <div className="space-y-2 text-center">
            <p className="text-md font-bold">Suporte especializado 24h</p>
            <ul className="font-semibold text-orange-500">
              <li>+ Agendamentos automatizados</li>
              <li>+ Controle financeiro completo</li>
              <li>+ Programa de fidelidade integrado</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <LeadFormButton title="Entrar no grupo vip" />  </div>
        </section>

        {/* Seção Funcionalidades */}
        <section className="flex items-center justify-center bg-[#0c0c0c] px-4 py-6">
          <div className="flex max-w-[78.125rem] flex-col gap-4 md:flex-row md:gap-8">
            <div className="flex flex-col items-center gap-4 text-center md:space-y-6">
              <h2 className="text-lg font-bold leading-tight md:text-xl">
                Você tem ideia do trabalho que dá para gerenciar uma barbearia sem sistema?
              </h2>

              <p className="leading-tight text-white">
                Imagine controlar agendamentos no papel, perder clientes por esquecimento, não saber quanto você faturou
                no mês... Essa realidade pode ser extremamente prejudicial para o crescimento do seu negócio.
              </p>

              <h2 className="text-lg font-bold leading-tight md:text-xl">
                <strong className="text-orange-500">Nossas Funcionalidades</strong> - O sistema mais completo e
                acessível do mercado para barbearias.
              </h2>

              <p className="leading-tight text-white">
                1- Dashboard completo para visualizar agendamentos, receitas e KPIs.
              </p>
              <Image
                unoptimized
                draggable={false}
                src="/dash.jpeg"
                alt="Dashboard YESBARBER"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />

              <p className="leading-tight text-white">
                2- Sistema de agendamentos inteligente .
              </p>
              <Image
                priority
                draggable={false}
                src="/agenda.jpeg"
                alt="Sistema de Agendamentos"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />

              <h2 className="text-orange-500">(DISPONÍVEL AGORA)</h2>
              <p className="leading-tight text-white">
                Programa de fidelidade integrado.
              </p>
              <Image
                priority
                src="/fidelidade.jpeg"
                draggable={false}
                alt="Controle Financeiro"
                width={500}
                height={300}
                className="pointer-events-none mx-auto w-full max-w-[500px] select-none rounded-md object-contain shadow-sm md:mx-0"
              />
            </div>
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section className="flex items-center justify-center bg-orange-500 px-4 py-6 md:py-12">
          <div className="flex max-w-[78.125rem] flex-col items-center justify-center gap-4 md:gap-8">
            <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl">
              DEPOIMENTOS DE BARBEIROS QUE JÁ USAM O YESBARBER
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Depoimento 1 */}
              <div className="rounded-lg bg-white p-6 text-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">CARLOS BARBEIRO</h4>
                  <p className="text-sm text-zinc-600">BARBEARIA ELITE</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;O YESBARBER REVOLUCIONOU MINHA BARBEARIA! AGORA TENHO CONTROLE TOTAL SOBRE AGENDAMENTOS E NUNCA
                  MAIS PERDI UM CLIENTE POR DESORGANIZAÇÃO. MINHA RECEITA AUMENTOU 40% EM 3 MESES!&quot;
                </p>
              </div>

              {/* Depoimento 2 */}
              <div className="rounded-lg bg-white p-6 text-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">ROBERTO SANTOS</h4>
                  <p className="text-sm text-zinc-600">BARBER SHOP PREMIUM</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;SISTEMA INCRÍVEL! MEUS CLIENTES ADORAM A FACILIDADE DE AGENDAMENTO E EU AMO OS RELATÓRIOS
                  FINANCEIROS. CONSEGUI PROFISSIONALIZAR COMPLETAMENTE MEU NEGÓCIO.&quot;
                </p>
              </div>

              {/* Depoimento 3 */}
              <div className="rounded-lg bg-white p-6 text-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">JOÃO OLIVEIRA</h4>
                  <p className="text-sm text-zinc-600">BARBEIRO AUTÔNOMO</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;DESDE QUE COMECEI A USAR O YESBARBER, ECONOMIZO PELO MENOS 3 HORAS POR DIA EM ORGANIZAÇÃO. O
                  PROGRAMA DE FIDELIDADE AUMENTOU MUITO O RETORNO DOS MEUS CLIENTES!&quot;
                </p>
              </div>

              {/* Depoimento 4 */}
              <div className="rounded-lg bg-white p-6 text-black">
                <div className="mb-4 flex flex-col items-center">
                  <h4 className="font-bold">MARCOS SILVA</h4>
                  <p className="text-sm text-zinc-600">BARBEARIA MODERNA</p>
                  <div className="mt-1 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-center text-sm">
                  &quot;SIMPLESMENTE O MELHOR INVESTIMENTO QUE FIZ PARA MINHA BARBEARIA. SISTEMA COMPLETO, FÁCIL DE USAR
                  E COM SUPORTE EXCEPCIONAL. RECOMENDO PARA TODOS OS PROFISSIONAIS!&quot;
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
              <div className="space-y-4 text-center md:space-y-6">
                <h2 className="text-balance text-lg font-bold leading-tight md:text-2xl">
                  O ÚNICO Sistema de gestão para barbearias com PREÇO JUSTO e funcionalidades PROFISSIONAIS.
                </h2>
                <p className="leading-tight text-white">
                  Com o YESBARBER você vai se organizar profissionalmente, economizar tempo, aumentar produtividade, não
                  perder mais clientes por desorganização e maximizar seus lucros.
                </p>
                <p className="leading-tight text-white">
                  Além de <strong>FIDELIZAR SEUS CLIENTES</strong> com nosso programa de pontos!
                </p>
              </div>
            </div>

            {/* Comparação Benefícios */}
            <div className="mx-auto w-full space-y-4 py-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">Não perderá mais clientes por desorganização</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#930000] bg-[#5b0c0c] p-6 text-center text-[#e41326]">
                  <IoIosCloseCircle className="size-8" />
                  <p className="font-bold">Não ficará mais no escuro sobre suas finanças</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">Terá controle total sobre agendamentos</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">Poderá acompanhar todas suas receitas em tempo real</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#196024] bg-[#14541e] p-6 text-center text-[#14df33]">
                  <IoIosCheckmarkCircle className="size-8" />
                  <p className="font-bold">Poderá fidelizar clientes e aumentar o retorno</p>
                </div>
              </div>
            </div>

            <p className="py-2 text-center leading-tight">
              Esse é o jeito mais FÁCIL e PROFISSIONAL de gerenciar sua barbearia!
            </p>
          </div>
        </section>
      </main>

      <FacebookPixel />
      <CreateSpotLeadSheet />
    </>
  )
}
