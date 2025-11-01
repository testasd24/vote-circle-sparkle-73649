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
    <div className="min-h-screen gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Bienvenido a{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                className="text-lg shadow-card hover:shadow-hover transition-all duration-300"
              >
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Comenzar a Votar
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg border-2 hover:border-primary transition-all duration-300"
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
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="gradient-card rounded-3xl shadow-card p-12 text-center space-y-6 max-w-3xl mx-auto border border-border/50">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-muted-foreground">
            Únete a miles de organizaciones que confían en VoteSystem para sus votaciones digitales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg shadow-card hover:shadow-hover transition-all duration-300"
            >
              Registrarse Gratis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-2 hover:border-primary transition-all duration-300"
            >
              Ver Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground border-t border-border/30">
        <p>© 2025 VoteSystem. Votación digital segura y transparente.</p>
      </footer>
    </div>
  );
};

export default Index;
