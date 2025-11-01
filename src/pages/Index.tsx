import { Button } from "@/components/ui/button";
import AnimatedLogo from "@/components/AnimatedLogo";
import Logo from "@/components/Logo";
import { Vote, Shield, BarChart3, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-blue-950/20 -z-10" />
      
      {/* Navbar */}
      <nav className="container mx-auto px-4 py-6">
        <Logo />
      </nav>

      {/* Decorative elements */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
                Sistema de Votación Inteligente
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Bienvenido a VoteSystem
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                La plataforma moderna y segura para gestionar votaciones digitales. 
                Transparente, rápida y confiable.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="font-semibold">
                <Vote className="w-5 h-5" />
                Comenzar a Votar
              </Button>
              <Button variant="hero-outline" size="lg" className="font-semibold">
                Crear Votación
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Precisión</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-secondary">24/7</p>
                <p className="text-sm text-muted-foreground">Disponible</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Seguro</p>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <AnimatedLogo />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "Seguridad Total",
              description: "Encriptación de extremo a extremo para proteger cada voto",
              delay: "0s"
            },
            {
              icon: Vote,
              title: "Votación Rápida",
              description: "Interfaz intuitiva para votar en segundos",
              delay: "0.1s"
            },
            {
              icon: BarChart3,
              title: "Resultados en Tiempo Real",
              description: "Visualiza los resultados instantáneamente",
              delay: "0.2s"
            },
            {
              icon: Users,
              title: "Gestión de Usuarios",
              description: "Control total sobre quién puede participar",
              delay: "0.3s"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse-glow" />
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ¿Listo para comenzar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Únete a miles de organizaciones que confían en VoteSystem para sus votaciones digitales
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" className="font-semibold">
                Registrarse Ahora
              </Button>
              <Button variant="hero-outline" size="lg" className="font-semibold">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
