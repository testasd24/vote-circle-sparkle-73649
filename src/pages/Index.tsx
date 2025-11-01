import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, BarChart3, Users, CheckCircle2 } from "lucide-react";
import VotingAnimation from "@/components/VotingAnimation";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Encriptación de extremo a extremo y protección de datos",
    },
    {
      icon: Zap,
      title: "Votación Rápida",
      description: "Proceso simplificado y eficiente para todos los usuarios",
    },
    {
      icon: BarChart3,
      title: "Resultados en Tiempo Real",
      description: "Visualiza los resultados de forma instantánea y transparente",
    },
    {
      icon: Users,
      title: "Gestión de Usuarios",
      description: "Administra participantes y permisos fácilmente",
    },
  ];

  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving digital lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-digital-line"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '6s',
            }}
          ></div>
        ))}
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-particle-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              // @ts-ignore
              '--x': `${(Math.random() - 0.5) * 200}px`,
              // @ts-ignore
              '--y': `${(Math.random() - 0.5) * 200}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Bienvenido a{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent text-glow">
                  VoteSystem
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                La plataforma moderna y segura para gestionar votaciones digitales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="glow"
                className="text-lg"
              >
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Comenzar a Votar
              </Button>
              <Button 
                size="lg" 
                variant="glowSecondary"
                className="text-lg"
              >
                Crear Votación
              </Button>
            </div>
          </div>

          {/* Right Animation */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <VotingAnimation />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-2 border-primary/20 shadow-card hover:shadow-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-background" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="gradient-card rounded-3xl shadow-glow p-12 text-center space-y-6 max-w-3xl mx-auto border-2 border-primary/30 backdrop-blur-sm relative overflow-hidden">
          {/* Animated background effect */}
          <div className="absolute inset-0 gradient-glow-primary opacity-30 animate-glow-pulse"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a miles de organizaciones que confían en VoteSystem para sus votaciones digitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="glow"
                className="text-lg"
              >
                Registrarse Gratis
              </Button>
              <Button 
                size="lg" 
                variant="glowSecondary"
                className="text-lg"
              >
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground border-t border-primary/20 relative z-10">
        <p>© 2025 VoteSystem. Votación digital segura y transparente.</p>
      </footer>
    </div>
  );
};

export default Index;
