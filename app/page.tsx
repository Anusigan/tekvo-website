import Link from "next/link"
import Image from "next/image"
import { Code, Laptop, Palette, PenTool, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-dot-pattern">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">TEKVO</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#services"
                className="flex items-center text-sm font-medium transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="flex items-center text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link href="#work" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                Work
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <AnimatedSection className="px-4 py-24 md:py-32 lg:py-48">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                We can design and develop your next ambitious startup idea
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                We create software of all shape and sizes be it simple web apps, mobile apps, or complex enterprise
                software. We build web apps with React and Next.js, mobile apps with React Native/Expo, and backend with
                Express and tRPC.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="services" className="px-4 py-24 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  We offer end-to-end digital services to help your business thrive in the digital landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedSection delay={0.1} className="grid gap-4" animationType="fadeInUp">
                <Card className="border border-primary/20 transition-all duration-300 hover:border-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Code className="mr-2 h-5 w-5 text-primary" /> Web Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Custom websites and web applications built with React and Next.js to deliver exceptional user
                      experiences.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="grid gap-4" animationType="fadeInUp">
                <Card className="border border-primary/20 transition-all duration-300 hover:border-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Smartphone className="mr-2 h-5 w-5 text-primary" /> App Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Native and cross-platform mobile applications with React Native/Expo designed to engage users.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="grid gap-4" animationType="fadeInUp">
                <Card className="border border-primary/20 transition-all duration-300 hover:border-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Laptop className="mr-2 h-5 w-5 text-primary" /> Digital Marketing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Strategic digital marketing campaigns that increase visibility, drive traffic, and convert leads.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={0.4} className="grid gap-4" animationType="fadeInUp">
                <Card className="border border-primary/20 transition-all duration-300 hover:border-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center">
                      <Palette className="mr-2 h-5 w-5 text-primary" /> Branding
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Comprehensive branding solutions that establish a strong identity and connect with your audience.
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="about" className="px-4 py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
              <AnimatedSection delay={0.1} animationType="fadeInUp" className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Empowering Businesses Through Digital Innovation
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  At Tekvo, our mission is to empower businesses of all sizes with cutting-edge digital solutions that
                  drive growth, enhance user experiences, and create lasting value. We are committed to delivering
                  excellence in every project, combining technical expertise with creative thinking to solve complex
                  challenges.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} animationType="fadeInUp" className="flex flex-col items-start space-y-4">
                <h3 className="text-xl font-semibold text-primary">Our Vision</h3>
                <p className="text-muted-foreground md:text-lg">
                  We envision a future where every business can harness the full potential of digital technology to
                  thrive in an increasingly connected world. Tekvo aims to be at the forefront of digital
                  transformation, setting new standards for innovation, quality, and client satisfaction in the
                  industry.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Our goal is to build long-term partnerships with our clients, becoming an integral part of their
                  success story by consistently delivering solutions that exceed expectations and adapt to evolving
                  market demands.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="work" className="px-4 py-24 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Work</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Explore our portfolio of successful projects across various industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection delay={0.1} animationType="fadeInUp">
                <div className="group relative overflow-hidden rounded-lg border border-primary/20 transition-all duration-300 hover:border-primary">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Project 1"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">E-Commerce Platform</h3>
                    <p className="text-sm text-muted-foreground">Web Development</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} animationType="fadeInUp">
                <div className="group relative overflow-hidden rounded-lg border border-primary/20 transition-all duration-300 hover:border-primary">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Project 2"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">Fitness Tracking App</h3>
                    <p className="text-sm text-muted-foreground">App Development</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3} animationType="fadeInUp">
                <div className="group relative overflow-hidden rounded-lg border border-primary/20 transition-all duration-300 hover:border-primary">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Project 3"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">Brand Identity Redesign</h3>
                    <p className="text-sm text-muted-foreground">Branding</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="px-4 py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Let's Build Something Amazing Together
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Ready to start your project? Get in touch with our team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <AnimatedSection delay={0.1} className="space-y-6" animationType="fadeInUp">
                <div>
                  <h3 className="text-xl font-semibold text-primary">Contact Information</h3>
                  <p className="text-muted-foreground mt-2">
                    Fill out the form or contact us directly using the information below.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <PenTool className="mr-2 h-5 w-5 text-primary" />
                    <span>hello@tekvo.com</span>
                  </div>
                  <div className="flex items-center">
                    <PenTool className="mr-2 h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <PenTool className="mr-2 h-5 w-5 text-primary" />
                    <span>123 Innovation Street, Tech City</span>
                  </div>
                </div>
                <div className="rounded-lg border border-primary/20 p-4 transition-all duration-300 hover:border-primary">
                  <h4 className="font-medium">Office Hours</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} animationType="fadeInUp">
                <div className="rounded-lg border border-primary/20 p-6">
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">TEKVO</span>
            </Link>
            <p className="text-sm text-muted-foreground">Transforming ideas into digital excellence since 2023.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors">
              Careers
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tekvo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
