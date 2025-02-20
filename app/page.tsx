"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Compass, Layout, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const services = [
    {
      title: "Modern Stack",
      description:
        "Built with Next.js, TypeScript, and Tailwind CSS for a modern development experience.",
      icon: <Code2 className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Beautiful UI",
      description:
        "Crafted with shadcn/ui components for a consistent and professional look.",
      icon: <Layout className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-400",
    },
    {
      title: "Fast Performance",
      description:
        "Optimized for speed and performance with Next.js App Router.",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-400",
    },
    {
      title: "Documentation",
      description:
        "Comprehensive documentation using Nextra for easy reference.",
      icon: <Compass className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2"
            >
              <Link href="/" className="flex items-center">
                <span className="font-bold text-xl text-gray-900">
                  What not
                </span>
              </Link>
            </motion.div>

            <nav className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                <Link 
                  href="/" 
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </motion.header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Build Better Apps{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Faster
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                A modern development stack with everything you need to create
                production-ready applications.
              </p>
              <Button size="lg" asChild className="mr-4">
                <Link href="/intro">
                  Know more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                    <CardHeader className="relative z-10">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} w-fit`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <CardTitle className="mt-4 text-xl font-semibold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl font-medium text-gray-900 mb-4">
                "The perfect starting point for your next project. Everything
                you need, nothing you don't."
              </p>
              <footer className="text-gray-600">— The Development Team</footer>
            </blockquote>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-6 w-6" />
              <span className="font-bold text-xl">What not</span>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 What not. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}