"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookUser, Brain, Code2, Cpu, Globe2, Layers, MessageSquare, MessageSquareCode, PanelsTopLeft, Rocket, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/language-toogle"
import ContactForm from "@/components/contact-form"
import { useLanguage } from "@/lib/language-context"


interface AnimatedElement {
  width: number;
  height: number;
  left: number;
  top: number;
  xOffset: number;
  yOffset: number;
  scale: number;
  duration: number;
}

export default function Home() {
  const { t } = useLanguage()
  const [elements, setElements] = useState<AnimatedElement[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 20 }, () => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      xOffset: Math.random() * 100 - 50,
      yOffset: Math.random() * 100 - 50,
      scale: Math.random() + 0.5,
      duration: Math.random() * 10 + 5,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="relative">
      {/* Language Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>

      {/* Hero Section - Full Screen */}
      <div className="h-screen relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {elements.map((element, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/5 rounded-full"
              initial={{
                width: element.width,
                height: element.height,
                left: `${element.left}%`,
                top: `${element.top}%`,
              }}
              animate={{
                x: [0, element.xOffset],
                y: [0, element.yOffset],
                scale: [1, element.scale],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Centered Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            
            className="text-center px-4 max-w-4xl mx-auto"
            
          >
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Company Name
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("hero.description")}
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => {
                  document.getElementById('contact-section')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                {t("contact.title")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="h-screen relative overflow-hidden
       inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("services.sectionTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe2 className="w-10 h-10" />}
              title="services.software.title"
              description="services.software.description"
            />
            <ServiceCard
              icon={<Shield className="w-10 h-10" />}
              title="services.security.title"
              description="services.security.description"
            />
            <ServiceCard
              icon={<BookUser className="w-10 h-10" />}
              title="services.support.title"
              description="services.support.description"
            />
            <ServiceCard
              icon={<Brain className="w-10 h-10" />}
              title="services.ai.title"
              description="services.ai.description"
            />
            <ServiceCard
              icon={<PanelsTopLeft className="w-10 h-10" />}
              title="services.design.title"
              description="services.design.description"
            />
            <ServiceCard
              icon={<MessageSquareCode className="w-10 h-10" />}
              title="services.consulting.title"
              description="services.consulting.description"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="contact-section" className="h-screen relative overflow-hidden inset-0 flex items-center justify-center">
        <div className="w-[750px] px-4">
          <StatCard/>
        </div>
      </section>
    </div>
  );


function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="p-6 h-full">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{t(title)}</h3>
        <p className="text-muted-foreground">{t(description)}</p>
      </Card>
    </motion.div>
  );
}

function StatCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <section id="contact" className="py-12 md:py-24 lg:py-32 w-full">
        <div className="w-full px-4 md:px-6">
          <div className="w-full">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              {t("contact.title")}
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
}

