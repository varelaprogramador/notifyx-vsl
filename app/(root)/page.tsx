import Image from "next/image"
import { CheckCircle, Star, Sparkles, Zap, Users, Code, Shield } from "lucide-react"
import { LeadFormButton } from "./_components/lead-form-button"
import Video from "./_components/video"
import { CreateSpotLeadSheet } from "@/features/spot-leads/components/create-spot-lead-sheet"
import { FacebookPixel } from "@/components/facebook-pixel"

export default function MatraLandingPage() {
  return (
    <>
      <main className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-800 opacity-95" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-600/20 via-transparent to-transparent" />

        {/* Header Ultra-Conversão */}
        <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-gray-600/30 shadow-2xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col items-center gap-4">
              {/* Urgência no Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-2 rounded-full border border-gray-500/20">
                <p className="text-white text-sm font-semibold">
                  ⏰ <span className="text-gray-200">OFERTA LIMITADA:</span> Apenas <span className="text-white font-bold">47 vagas</span> restantes este mês!
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-100 bg-clip-text text-transparent">
                  MATRA TECNOLOGIA
                </h1>
              </div>

              <div className="text-center">
                <h2 className="text-lg md:text-xl font-bold text-white mb-2">
                  🚀 <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    Desenvolva seu SaaS dos Sonhos com a MATRA!
                  </span>
                </h2>
                <p className="text-gray-300 text-sm">
                  ✅ 487+ SaaS já criados | ✅ R$ 2.3M+ faturados pelos clientes
                </p>
              </div>

              <div className="group">
                <LeadFormButton title="🎯 QUERO ACESSO AGORA" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section Ultra-Modern */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center space-y-12">
              {/* Logo Container */}
              <Image
                src="/logo.png"
                alt="MATRA Logo"
                width={200}
                height={200}
                className="mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />


              {/* Main Headline Ultra-Conversão */}
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-500/30 inline-block">
                  <p className="text-white text-sm font-bold">
                    💎 MÉTODO EXCLUSIVO - Usado por +487 Desenvolvedores
                  </p>
                </div>

                <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-100 bg-clip-text text-transparent">
                    De IDEIA a
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
                    SaaS LUCRATIVO
                  </span>
                  <br />
                  <span className="text-white text-2xl md:text-4xl">
                    EM APENAS 14 DIAS!
                  </span>
                </h1>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed mb-4">
                    ⚡ <span className="text-gray-200">GARANTIDO:</span> Seu SaaS funcionando ou
                    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-bold"> DINHEIRO DE VOLTA!</span>
                  </p>
                  <p className="text-lg text-gray-300">
                    💰 Clientes já faturaram <span className="font-bold text-white">R$ 2.3M+</span> |
                    ⏱️ Economia de <span className="font-bold text-white">6 meses</span> de desenvolvimento
                  </p>
                </div>

                {/* Prova Social Numérica */}
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">487+</div>
                    <div className="text-sm text-gray-300">SaaS Criados</div>
                  </div>
                  <div className="text-center border-x border-gray-600/30">
                    <div className="text-2xl md:text-3xl font-bold text-white">R$ 2.3M+</div>
                    <div className="text-sm text-gray-300">Faturamento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">97%</div>
                    <div className="text-sm text-gray-300">Satisfação</div>
                  </div>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative group max-w-4xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                  <Video src="/main-video.mp4" />
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Zap, title: "Suporte 24h", desc: "Especializado" },
                  { icon: Code, title: "Infraestrutura", desc: "Completa para SaaS" },
                  { icon: Shield, title: "Templates", desc: "Componentes prontos" }
                ].map((item, i) => (
                  <div key={i} className="group hover:scale-105 transition-all duration-300">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40">
                      <div className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg p-3 w-fit mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-gray-500/25 transition-shadow">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
                  <LeadFormButton title="Começar Agora" />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Features Section Ultra-Modern */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gray-600/20 via-transparent to-transparent" />

          <div className="relative z-10 container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-5 h-5 text-gray-300" />
                <span className="text-white/80 font-semibold">O Problema</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  Você tem ideia do trabalho
                </span>
                <br />
                <span className="text-white">
                  que dá para desenvolver um SaaS?
                </span>
              </h2>

              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Imagine gastar <span className="font-bold text-gray-300">meses configurando</span> infraestrutura, criando sistemas de pagamento,
                desenvolvendo autenticação... Essa complexidade pode custar <span className="font-bold text-gray-200">milhares e meses</span> de desenvolvimento.
              </p>
            </div>

            {/* Solution Header */}
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-sm border border-gray-400/20">
                <CheckCircle className="w-5 h-5 text-gray-300" />
                <span className="text-white/90 font-semibold">Nossa Solução</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Nossa Plataforma
                </span>
                <br />
                <span className="text-white text-xl md:text-3xl">
                  A solução mais completa para desenvolvedores SaaS do Brasil
                </span>
              </h3>
            </div>

            {/* Features Showcase */}
            <div className="space-y-20">
              {/* Feature 1 - Dashboard */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 text-white font-bold text-xl">
                      1
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white">
                      Dashboard Administrativo
                    </h4>
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Dashboard administrativo <span className="font-bold text-gray-200">completo com gestão de usuários</span>,
                    analytics em tempo real e controle total da sua aplicação.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Gestão de Usuários", "Analytics Real-time", "Controle Total"].map((tag, i) => (
                      <div key={i} className="px-4 py-2 rounded-full bg-gray-500/20 border border-gray-400/30 text-gray-300 text-sm font-medium">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-colors">
                    <Image
                      src="/print-dash.png"
                      alt="Dashboard MATRA SaaS - Interface Administrativa Completa"
                      width={600}
                      height={400}
                      className="w-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2 - Payment System */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-colors">
                    <Image
                      src="/stripe.png"
                      alt="Sistema de Pagamentos Stripe - Gateway Integrado MATRA"
                      width={600}
                      height={400}
                      className="w-full rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 text-white font-bold text-xl">
                      2
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-white">
                      Sistema de Pagamentos
                    </h4>
                  </div>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Sistema de cobrança e assinaturas <span className="font-bold text-gray-200">totalmente automatizado</span>
                    e integrado com os principais gateways de pagamento.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Cobrança Automática", "Múltiplos Gateways", "Gestão de Assinaturas"].map((tag, i) => (
                      <div key={i} className="px-4 py-2 rounded-full bg-gray-500/20 border border-gray-400/30 text-gray-300 text-sm font-medium">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section Ultra-Modern */}
        <section className="relative py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-slate-900/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600/10 via-transparent to-transparent" />

          <div className="relative z-10 container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Users className="w-5 h-5 text-gray-300" />
                <span className="text-white/90 font-semibold">Depoimentos</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Resultados REAIS de quem
                </span>
                <br />
                <span className="text-white">FATUROU com nosso método</span>
              </h2>

              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500/20 max-w-2xl mx-auto">
                <p className="text-white font-semibold">
                  💰 <span className="text-gray-200">FATURAMENTO TOTAL:</span> R$ 2.347.832 em 12 meses
                </p>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {[
                {
                  name: "Carlos Silva",
                  role: "Ex-Freelancer",
                  company: "R$ 47K/mês com SaaS",
                  quote: "EM 14 DIAS criei meu SaaS e em 3 meses estava faturando R$ 47.000/mês! A MATRA mudou minha vida financeira completamente. Saí do vermelho para 6 dígitos!",
                  gradient: "from-gray-500/20 to-gray-600/20",
                  avatar: "C"
                },
                {
                  name: "Marina Costa",
                  role: "Desenvolvedora",
                  company: "R$ 23K/mês recorrente",
                  quote: "Não acreditava que fosse TÃO SIMPLES! Meu primeiro SaaS está faturando R$ 23K/mês recorrente. Já paguei a MATRA 40x só no primeiro mês. MUDANÇA TOTAL DE VIDA!",
                  gradient: "from-gray-600/20 to-gray-700/20",
                  avatar: "M"
                },
                {
                  name: "Roberto Santos",
                  role: "Criador de SaaS",
                  company: "R$ 89K/mês com 3 SaaS",
                  quote: "MÉTODO EXPLOSIVO! Criei 3 SaaS usando MATRA e hoje faturo R$ 89K/mês. Deixei meu emprego e agora trabalho de casa. Minha família não acredita na transformação!",
                  gradient: "from-gray-400/20 to-gray-600/20",
                  avatar: "R"
                },
                {
                  name: "Juliana Lima",
                  role: "Tech Entrepreneur",
                  company: "R$ 156K/mês NET",
                  quote: "IMPRESSIONANTE! Meu SaaS criado com MATRA fatura R$ 156K/mês LÍQUIDO. Comprei minha casa própria e carro do ano. A MATRA é a MELHOR decisão que já tomei!",
                  gradient: "from-gray-700/20 to-gray-800/20",
                  avatar: "J"
                }
              ].map((testimonial, i) => (
                <div key={i} className="group hover:scale-[1.02] transition-all duration-500">
                  <div className={`relative bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors`}>
                    <div className="absolute inset-0 bg-white/5 rounded-2xl" />

                    <div className="relative">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-gray-300 text-gray-300" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-white/90 text-lg leading-relaxed mb-8 relative">
                        <span className="text-4xl text-white/20 absolute -top-2 -left-2">&ldquo;</span>
                        {testimonial.quote}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-white/70">{testimonial.role}</p>
                          <p className="text-white/50 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Value Proposition */}
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    A ÚNICA plataforma brasileira
                  </span>
                  <br />
                  <span className="text-white text-xl md:text-3xl">
                    com PREÇO JUSTO e funcionalidades ENTERPRISE
                  </span>
                </h3>

                <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                  Com a MATRA você vai <span className="font-bold text-gray-200">desenvolver seu SaaS profissionalmente</span>,
                  automatizar cobranças, escalar sem limites e <span className="font-bold text-white">multiplicar sua receita</span> recorrente.
                </p>

                <p className="text-lg text-white/70 max-w-3xl mx-auto">
                  Além de <span className="font-bold text-gray-200">TRANSFORMAR SUA IDEIA EM NEGÓCIO</span> com inteligência artificial integrada!
                </p>
              </div>

              {/* Benefits Comparison - Modern Style */}
              <div className="space-y-8 max-w-6xl mx-auto">
                {/* Problems (What you WON'T have) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Não perderá mais meses configurando infraestrutura",
                    "Não ficará mais travado com integrações complexas"
                  ].map((problem, i) => (
                    <div key={i} className="group hover:scale-105 transition-all duration-300">
                      <div className="bg-gradient-to-r from-gray-600/10 to-gray-700/10 backdrop-blur-sm rounded-xl p-6 border border-gray-400/20 hover:border-gray-400/40">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-500/20 rounded-full p-3">
                            <CheckCircle className="w-6 h-6 text-gray-400 rotate-45" />
                          </div>
                          <p className="text-white font-semibold">{problem}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Solutions (What you WILL have) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "Terá seu SaaS funcionando em dias, não meses",
                    "Poderá focar no seu produto, não na infraestrutura",
                    "Poderá escalar automaticamente conforme cresce"
                  ].map((solution, i) => (
                    <div key={i} className="group hover:scale-105 transition-all duration-300">
                      <div className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 backdrop-blur-sm rounded-xl p-6 border border-gray-400/20 hover:border-gray-400/40">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-gray-500/20 rounded-full p-3">
                            <CheckCircle className="w-6 h-6 text-gray-300" />
                          </div>
                        </div>
                        <p className="text-white font-semibold">{solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Esse é o jeito mais INTELIGENTE e RÁPIDO!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
                    <LeadFormButton title="COMEÇAR AGORA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Ultra-Modern */}
        <footer className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-slate-900" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-100 bg-clip-text text-transparent">
                  MATRA Tecnologia
                </h3>
              </div>

              {/* CTA Final Footer */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-500/20 max-w-4xl mx-auto">
                <div className="text-center space-y-6">
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    🚨 ÚLTIMA CHANCE: <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">67% OFF</span> expira em:
                  </h4>

                  <div className="flex justify-center gap-4 text-center">
                    <div className="bg-black/50 px-4 py-2 rounded-lg">
                      <div className="text-2xl font-bold text-white">23</div>
                      <div className="text-xs text-gray-300">HORAS</div>
                    </div>
                    <div className="bg-black/50 px-4 py-2 rounded-lg">
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-xs text-gray-300">MINUTOS</div>
                    </div>
                    <div className="bg-black/50 px-4 py-2 rounded-lg">
                      <div className="text-2xl font-bold text-white">23</div>
                      <div className="text-xs text-gray-300">SEGUNDOS</div>
                    </div>
                  </div>

                  <div className="group relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-gray-300 rounded-lg blur-sm opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />
                    <LeadFormButton title="🔥 GARANTIR MINHA VAGA AGORA" />
                  </div>

                  <p className="text-gray-300 text-sm">
                    ⚡ <span className="font-bold text-white">47 pessoas</span> visualizando esta oferta agora |
                    🎯 Apenas <span className="font-bold text-white">12 vagas</span> restantes hoje
                  </p>
                </div>
              </div>

              <p className="text-white/60 max-w-2xl mx-auto">
                Mais de 487 desenvolvedores já transformaram suas ideias em SaaS lucrativos.
                <span className="font-bold text-white"> Você será o próximo?</span>
              </p>

              <div className="border-t border-white/10 pt-8 text-white/40 text-sm">
                <p>&copy; 2024 MATRA Tecnologia. Todos os direitos reservados. |
                  <span className="text-gray-300"> ✅ Garantia incondicional | 🔒 Pagamento seguro</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <FacebookPixel />
      <CreateSpotLeadSheet />
    </>
  )
}
