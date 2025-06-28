import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, FileText, Zap, Target, Download } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SimplerContent",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "iOS, Android, Web",
            "description": "Content workflow management app for creators",
            "url": "https://simplercontent.com",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-white text-gray-900">
        {/* Main Content */}
        <main id="main-content" className="container mx-auto px-4 py-10 lg:py-16">
          {/* Hero Section */}
          <header className="text-center space-y-8 lg:space-y-12 mb-16 lg:mb-24">
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center justify-center gap-3 lg:gap-4">
                <div className="relative">
                  <Image
                    src="/simplercontent-logo.png"
                    alt="SimplerContent Logo"
                    width={64}
                    height={64}
                    className="w-12 h-12 lg:w-16 lg:h-16"
                    priority
                    sizes="(max-width: 768px) 48px, 64px"
                  />
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900">
                  SimplerContent
                </h1>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                  Simplify Your Shoots. Deliver with Confidence. Scale Without Burnout.
                </h2>
                <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
                  The content production system built for creators who manage clients — not corporations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto sm:max-w-none lg:gap-6">
                <Button 
                  className="w-full sm:w-auto text-base lg:text-lg lg:px-8 lg:py-6 min-h-[3rem] lg:min-h-[3.5rem]"
                  aria-describedby="cta-description"
                >
                  Start Free — No Credit Card Needed
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto text-base lg:text-lg lg:px-8 lg:py-6 min-h-[3rem] lg:min-h-[3.5rem]"
                >
                  See How It Works →
                </Button>
              </div>
              <p id="cta-description" className="sr-only">
                Start your free trial with no credit card required to begin organizing your content workflow
              </p>
            </div>
          </header>

          {/* Main Content Sections */}
          <div className="space-y-16 lg:space-y-24">
            {/* Is This You Section */}
            <section aria-labelledby="pain-points-heading" className="space-y-8 lg:space-y-12">
              <div className="text-center">
                <h2 id="pain-points-heading" className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
                  Is This You?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                <div className="flex items-start space-x-4 md:flex-col md:space-x-0 md:space-y-4 md:text-center p-4 lg:p-6">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 md:mx-auto" aria-hidden="true" />
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Managing 3+ clients and tired of duct-taping spreadsheets, chats, and folders
                  </p>
                </div>
                <div className="flex items-start space-x-4 md:flex-col md:space-x-0 md:space-y-4 md:text-center p-4 lg:p-6">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 md:mx-auto" aria-hidden="true" />
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Missed a shot, lost a file, or sent a post late — and it cost you
                  </p>
                </div>
                <div className="flex items-start space-x-4 md:flex-col md:space-x-0 md:space-y-4 md:text-center p-4 lg:p-6 md:col-span-2 lg:col-span-1">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 md:mx-auto" aria-hidden="true" />
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    Your tools are either too simple, too complex, or just not made for content creators
                  </p>
                </div>
              </div>
            </section>

            {/* Built to Fix Problems Section */}
            <section aria-labelledby="solutions-heading" className="space-y-8 lg:space-y-12">
              <div className="text-center">
                <h2 id="solutions-heading" className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
                  Built to Fix the Real Problems
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {[
                  {
                    problem: "Files everywhere, nothing labeled",
                    solution: "Organized uploads by client, shoot, and post"
                  },
                  {
                    problem: "Approval delays and messy handoffs",
                    solution: "Shareable views and status updates"
                  },
                  {
                    problem: "\"Tool soup\" (Notion, ClickUp, Sheets)",
                    solution: "A unified workflow built for creators"
                  },
                  {
                    problem: "Burnout from scaling too fast",
                    solution: "Clarity, automation, and peace of mind"
                  }
                ].map((item, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6 lg:p-8 h-full flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-base lg:text-lg font-medium text-gray-900 mb-2">
                            You&apos;re Struggling With...
                          </h3>
                          <p className="text-base lg:text-lg text-gray-600">
                            {item.problem}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base lg:text-lg font-medium text-indigo-600 mb-2">
                            SimplerContent Gives You...
                          </h3>
                          <p className="text-base lg:text-lg text-gray-700">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Growth Stages Section */}
            <section aria-labelledby="growth-stages-heading" className="space-y-8 lg:space-y-12">
              <div className="text-center">
                <h2 id="growth-stages-heading" className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
                  Designed for Every Stage of Growth
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                {[
                  {
                    color: "bg-green-500",
                    title: "Just Getting Crowded (3–5 clients)",
                    quote: "\"I just want to keep things together.\"",
                    description: "Simple setup, no overwhelm. Stay on top of your work without staying up late."
                  },
                  {
                    color: "bg-yellow-500",
                    title: "Growing Fast (5–10 clients)",
                    quote: "\"My tools are breaking. I need a system that works with a team.\"",
                    description: "Assign tasks, sync calendars, organize your whole process."
                  },
                  {
                    color: "bg-red-500",
                    title: "Agency Pressure Cooker (10+ clients)",
                    quote: "\"I'm burning out. And I've tried everything.\"",
                    description: "Delegate without chaos, deliver without stress. Built to scale with you."
                  }
                ].map((stage, index) => (
                  <Card key={index} className="h-full md:col-span-1">
                    <CardContent className="p-6 lg:p-8 h-full">
                      <div className="flex items-start space-x-4 md:flex-col md:space-x-0 md:space-y-4 md:text-center h-full">
                        <div className={`w-4 h-4 ${stage.color} rounded-full flex-shrink-0 mt-1 md:mx-auto md:mt-0`} aria-hidden="true"></div>
                        <div className="flex-1 space-y-3">
                          <h3 className="font-semibold text-gray-900 text-lg lg:text-xl">
                            {stage.title}
                          </h3>
                          <blockquote className="text-base lg:text-lg text-gray-600 italic">
                            {stage.quote}
                          </blockquote>
                          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Why It Works Section */}
            <section aria-labelledby="why-it-works-heading" className="space-y-8 lg:space-y-12">
              <div className="text-center">
                <h2 id="why-it-works-heading" className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
                  Why SimplerContent Works
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: Users,
                    text: "Built by content creators who managed 50+ brands"
                  },
                  {
                    icon: Target,
                    text: "Works on mobile or desktop, no training required"
                  },
                  {
                    icon: FileText,
                    text: "Clients love the branded updates and organized delivery"
                  },
                  {
                    icon: Zap,
                    text: "You'll love logging in and seeing exactly what's next"
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 lg:p-6">
                      <Icon className="h-6 w-6 lg:h-7 lg:w-7 text-indigo-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CTA Section */}
            <section aria-labelledby="cta-heading" className="text-center space-y-8 lg:space-y-10">
              <div className="space-y-4">
                <h2 id="cta-heading" className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
                  Start Now — Save Hours This Week
                </h2>
                <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                  Set up your first client in under 60 seconds.<br />
                  No contracts. No learning curve. Just clarity.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto sm:max-w-none lg:gap-6">
                <Button className="w-full sm:w-auto text-base lg:text-lg lg:px-8 lg:py-6 min-h-[3rem] lg:min-h-[3.5rem]">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-base lg:text-lg lg:px-8 lg:py-6 min-h-[3rem] lg:min-h-[3.5rem]">
                  <Download className="mr-2 h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" />
                  Download Our 1-Page Workflow Template
                </Button>
              </div>
            </section>
          </div>
        </main>

        {/* Footer Trust Section */}
        <footer className="bg-gray-50 py-12 lg:py-16 mt-16 lg:mt-24">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
                {[
                  "Used by 500+ content creators",
                  "\"Feels like it was made for me.\"",
                  "Free to start. Cancel anytime.",
                  "Built to replace spreadsheets, not your creativity"
                ].map((text, index) => (
                  <div key={index} className="flex items-center justify-center gap-3 text-center p-4">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm lg:text-base text-gray-600">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="text-center pt-8 border-t border-gray-200">
                <p className="text-sm lg:text-base text-gray-400">
                  © {new Date().getFullYear()} SimplerContent. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
