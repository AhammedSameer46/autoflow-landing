"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Users,
  TrendingUp,
  Mail,
  Search,
  Sparkles,
  Shield,
  Clock,
  BarChart3,
  MessageSquare,
  Linkedin,
  ChevronRight,
  Star,
  Menu,
  X,
  Send,
  RefreshCcw,
  Brain,
  Eye,
  Bell,
  Layers,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Scroll-triggered fade-in wrapper                                   */
/* ------------------------------------------------------------------ */
function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const directionMap = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directionMap[direction].y,
        x: directionMap[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: directionMap[direction].y,
              x: directionMap[direction].x,
            }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Who It's For", href: "#who-its-for" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-emerald-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-200">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Auto<span className="text-emerald-600">Flow</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://njpo1kp7g37a.jp.larksuite.com/scheduler/282f6a680d5350fc" target="_blank" rel="noopener noreferrer">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all">
              Book a Pilot
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-gray-600 hover:text-emerald-700 py-2"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <a href="https://njpo1kp7g37a.jp.larksuite.com/scheduler/282f6a680d5350fc" target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Book a Pilot
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */
function HeroSection() {
  return (
    <section className="hero-gradient pattern-bg relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute top-20 -left-32 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <FadeIn>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0 mb-6 px-4 py-1.5 text-sm font-medium">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                AI-Powered Outreach Agent
              </Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Your Outreach on{" "}
                <span className="gradient-text">Autopilot</span>, Your Team
                Closes the Deals
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                AutoFlow finds your ideal prospects, writes a unique, human-sounding
                message for each one, follows up on the right channel at the
                right time — and alerts you the moment someone is interested.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://njpo1kp7g37a.jp.larksuite.com/scheduler/282f6a680d5350fc" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all text-base px-8 py-6 h-auto"
                  >
                    Start Your 8-Day Pilot
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all text-base px-8 py-6 h-auto"
                >
                  See How It Works
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  Full money-back guarantee
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  Setup in 48 hours
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="right">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-200/50">
                <img
                  src="/hero-illustration.png"
                  alt="AutoFlow AI automated outreach illustration"
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-4 sm:-left-8 glass-card rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">AI-Written</p>
                    <p className="text-xs text-gray-500">
                      Every message is unique
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-right-8 glass-card rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Instant Alerts
                    </p>
                    <p className="text-xs text-gray-500">
                      Hot leads, real-time
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Social Proof Bar                                                   */
/* ------------------------------------------------------------------ */
function SocialProofBar() {
  const stats = [
    { value: "5–7", label: "Conversations per 100 outreach" },
    { value: "2-Channel", label: "Email + LinkedIn sequences" },
    { value: "AI-Personalized", label: "Every single message" },
    { value: "Self-Hosted", label: "Full control of your data" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            What AutoFlow Delivers
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold gradient-text">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Problem Section                                                    */
/* ------------------------------------------------------------------ */
function ProblemSection() {
  const painPoints = [
    {
      icon: Clock,
      title: "Follow-Ups Fall Through the Cracks",
      desc: "Your SDR or founder sends first messages, but life gets in the way. Second and third touches never happen. That's where most pipeline dies.",
    },
    {
      icon: MessageSquare,
      title: "Generic Messages Get Deleted",
      desc: "When every prospect gets the same template, your email blends in with the hundreds of other cold messages they receive daily. Reply rates stay under 2%.",
    },
    {
      icon: Target,
      title: "Scaling Means Hiring More People",
      desc: "Want to reach more prospects? You need to hire more SDRs. More salary, more training, more management overhead — and it still doesn't solve the follow-up problem.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-red-50 text-red-600 hover:bg-red-50 border-0 mb-4 px-4 py-1.5">
            The Problem
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Your Outreach is{" "}
            <span className="text-red-500">Incomplete</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            You already know who to reach. The problem is doing it consistently,
            at scale, without burning out your team.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.15}>
              <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                    <point.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{point.desc}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How It Works                                                       */
/* ------------------------------------------------------------------ */
function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: Users,
      title: "Load Your Prospect List",
      desc: "Add your contacts to a simple Google Sheet — name, email, LinkedIn URL. That's all you need. AutoFlow takes it from there, checking in every 15 minutes.",
      color: "emerald",
    },
    {
      step: "02",
      icon: Brain,
      title: "AI Writes Every Message From Scratch",
      desc: "Each prospect gets a completely unique message — never a template. The AI adapts tone based on where they are in the sequence: warm first touch, honest third touch, friendly break-up.",
      color: "amber",
    },
    {
      step: "03",
      icon: RefreshCcw,
      title: "Smart Follow-Up on Email & LinkedIn",
      desc: "AutoFlow alternates between email and LinkedIn, waits the right number of days between touches (3, 5, or 7 days), and never contacts the same person twice in one day.",
      color: "emerald",
    },
    {
      step: "04",
      icon: Bell,
      title: "Get Alerted When Someone Replies",
      desc: "AutoFlow checks your inbox and LinkedIn every 5 minutes. When someone replies, it reads their intent — interested, maybe later, or not now — and instantly notifies your team.",
      color: "amber",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0 mb-4 px-4 py-1.5">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Add Prospects. AutoFlow Does the{" "}
            <span className="gradient-text">Rest</span>.
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            No complex setup. No coding. Just a Google Sheet and your email
            credentials.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.12}>
              <div className="flex gap-5">
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      s.color === "amber"
                        ? "bg-gradient-to-br from-amber-400 to-amber-500"
                        : "bg-gradient-to-br from-emerald-400 to-emerald-600"
                    }`}
                  >
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow text-xs font-bold text-emerald-700 flex items-center justify-center border border-gray-100">
                    {s.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Features Section                                                   */
/* ------------------------------------------------------------------ */
function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI That Writes Like a Human",
      desc: "Every prospect gets a unique message crafted by AI. It references their role, writes conversationally, and never sounds like a template. No \"I hope this finds you well\" — ever.",
      highlight: "DeepSeek V3.2",
    },
    {
      icon: Mail,
      title: "Multi-Channel Sequences",
      desc: "AutoFlow alternates between email and LinkedIn automatically. First touch via email, second via LinkedIn, third via email again — each adapted for the platform.",
      highlight: "Email + LinkedIn",
    },
    {
      icon: RefreshCcw,
      title: "Intelligent Follow-Up Timing",
      desc: "Waits 3 days after first contact, 5 after second, 7 after third. After 90 days of silence, it sends one final re-engagement attempt before moving on.",
      highlight: "Smart Cooldowns",
    },
    {
      icon: Eye,
      title: "Reply Detection & Intent Analysis",
      desc: "Checks your inbox every 5 minutes. When someone replies, the AI classifies their intent (interested, maybe later, not now) and urgency level — so your team knows exactly who to call first.",
      highlight: "Real-Time",
    },
    {
      icon: Bell,
      title: "Instant Team Alerts",
      desc: "When a prospect says they're interested or requests a demo, your team gets an email alert within minutes. Includes their intent, tone, urgency, and the exact message they sent.",
      highlight: "Hot Lead Alerts",
    },
    {
      icon: Shield,
      title: "Self-Hosted, Full Control",
      desc: "Runs on your own infrastructure. Your prospect data, your email credentials, your LinkedIn account — nothing touches third-party servers. Built-in error handling with severity-based alerts.",
      highlight: "Your Data, Your Server",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-0 mb-4 px-4 py-1.5">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Not a Template Tool. An{" "}
            <span className="gradient-text">Intelligent Agent</span>.
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            AutoFlow thinks, adapts, and follows up like your best SDR — but
            it never forgets, never gets tired, and never skips a touchpoint.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group hover:-translate-y-1">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors flex items-center justify-center">
                      <f.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-500 border-0"
                    >
                      {f.highlight}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Who It's For                                                       */
/* ------------------------------------------------------------------ */
function WhoItsForSection() {
  const audiences = [
    {
      icon: TrendingUp,
      title: "Digital Marketing Agencies",
      size: "10 – 50 people",
      desc: "You already sell outreach services to your clients. But doing it manually across multiple accounts doesn't scale. AutoFlow lets you deliver consistent, personalized outreach for every client — without hiring more people.",
      painPoints: [
        "Manual outreach doesn't scale across clients",
        "Follow-up always falls through",
        "Hard to show consistent results",
      ],
      decisionMakers: "Founder, Head of Growth, Head of Operations",
    },
    {
      icon: Zap,
      title: "B2B SaaS Startups",
      size: "Seed to Series A",
      desc: "Your CEO or one sales rep is doing all outreach by hand and burning out. You need pipeline fast and can't afford a full SDR team. AutoFlow gives you the output of 3 SDRs at a fraction of the cost.",
      painPoints: [
        "Founder-led sales doesn't scale",
        "No time for consistent follow-up",
        "Need pipeline fast on a tight budget",
      ],
      decisionMakers: "CEO, Founder, VP of Sales",
    },
  ];

  return (
    <section id="who-its-for" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0 mb-4 px-4 py-1.5">
            Who It's For
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Built for Teams That{" "}
            <span className="gradient-text">Need to Grow Fast</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            AutoFlow is built for two types of teams where the pain of manual
            outreach is felt every single day.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.15}>
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group hover:border-emerald-200">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-amber-50 flex items-center justify-center flex-shrink-0">
                      <a.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {a.title}
                      </h3>
                      <p className="text-sm text-emerald-600 font-medium">
                        {a.size}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {a.desc}
                  </p>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      What keeps them up at night:
                    </p>
                    {a.painPoints.map((p) => (
                      <div key={p} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-red-400" />
                        </div>
                        <p className="text-sm text-gray-600">{p}</p>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-400">
                        <span className="font-semibold text-gray-500">
                          Decision-makers:
                        </span>{" "}
                        {a.decisionMakers}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Pilot / Pricing Section                                            */
/* ------------------------------------------------------------------ */
function PricingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-0 mb-4 px-4 py-1.5">
            Get Started
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Start With a <span className="gradient-text">Paid Pilot</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Not a free trial. Not a long commitment. A risk-free 8-day pilot
            where you see real results — or your money back.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pilot Offer */}
          <FadeIn delay={0.1}>
            <Card className="h-full border-2 border-emerald-500 shadow-xl shadow-emerald-100 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white hover:bg-emerald-600 border-0 px-4 py-1 shadow-lg shadow-emerald-200">
                  The Pilot
                </Badge>
              </div>
              <CardContent className="p-6 sm:p-8 pt-10">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-extrabold text-gray-900">
                    $800
                  </span>
                  <span className="text-gray-500">one time</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  8-day pilot. Full setup included. Money-back guarantee.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Full setup: API keys, custom logic, hosted on your server",
                    "Setup completed in 1–2 working days",
                    "AI-powered email + LinkedIn outreach",
                    "Reply detection with instant team alerts",
                    "Prospect list loaded from your Google Sheet",
                    "See real results within 30 days",
                    "Full refund if you're not satisfied",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mb-4">
                  If the pilot works → move to a monthly retainer.
                  <br />
                  If it doesn't → you walk away. Full refund.
                </p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 h-11">
                  Start Your Pilot
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </FadeIn>

          {/* What happens during the pilot */}
          <FadeIn delay={0.2}>
            <Card className="h-full border border-gray-100 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  What Happens During the Pilot
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      day: "Day 1–2",
                      title: "Setup",
                      desc: "We set up everything — your email, LinkedIn, Google Sheet with prospect data. You just provide the list.",
                    },
                    {
                      day: "Day 3–5",
                      title: "Soft Launch",
                      desc: "AutoFlow starts reaching out. You watch replies come in. We track open rates and adjust targeting.",
                    },
                    {
                      day: "Day 6–7",
                      title: "Optimize",
                      desc: "We review what's working — which subject lines, which channel, which audience — and double down.",
                    },
                    {
                      day: "Day 8",
                      title: "Results",
                      desc: "You have real conversations with interested prospects. Now you decide: continue with a monthly plan, or walk away with your money back.",
                    },
                  ].map((phase) => (
                    <div key={phase.day} className="flex gap-4">
                      <div className="flex-shrink-0 w-14 text-right">
                        <span className="text-xs font-bold text-emerald-600">
                          {phase.day}
                        </span>
                      </div>
                      <div className="flex-1 border-l-2 border-emerald-100 pl-4">
                        <p className="text-sm font-semibold text-gray-900">
                          {phase.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <p className="text-sm text-amber-800">
                    <span className="font-bold">Money-back guarantee:</span>{" "}
                    If AutoFlow doesn't deliver value during the pilot, we refund
                    the full $800. No questions asked.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How It's Different (vs competitors)                                 */
/* ------------------------------------------------------------------ */
function DifferentSection() {
  const comparisons = [
    {
      them: "Generic email templates sent to everyone",
      you: "AI writes a unique message for every single prospect",
    },
    {
      them: "One channel (usually just email)",
      you: "Smart alternation between email and LinkedIn",
    },
    {
      them: "Manual follow-up or rigid schedules",
      you: "Intelligent cooldowns: 3 days, then 5, then 7 — and one final 90-day attempt",
    },
    {
      them: "You check inboxes manually for replies",
      you: "AutoFlow checks every 5 minutes and classifies reply intent with AI",
    },
    {
      them: "Your data lives on someone else's server",
      you: "Self-hosted on your infrastructure — full control, full privacy",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0 mb-4 px-4 py-1.5">
            Why AutoFlow
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Not Another{" "}
            <span className="gradient-text">Mass Email Tool</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Most outreach tools blast the same template. AutoFlow thinks.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {comparisons.map((c, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500">{c.them}</p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{c.you}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Section                                                        */
/* ------------------------------------------------------------------ */
function FAQSection() {
  const faqs = [
    {
      q: "What exactly does AutoFlow do?",
      a: "AutoFlow is an AI outreach agent that runs on your server. You give it a list of prospects in a Google Sheet, and it automatically sends personalized messages via email and LinkedIn, follows up at the right intervals, detects replies, figures out if they're interested, and alerts your team when a hot lead comes in. It handles the entire outreach cycle — from first touch to booked conversation.",
    },
    {
      q: "How are the messages personalized if I don't write templates?",
      a: "AutoFlow uses AI to write every message from scratch. It knows each prospect's name, their role, where they are in the outreach sequence, and whether they've been contacted before. The AI adapts its tone — warm and curious for the first touch, more direct for the second, honest and human for the third. No two messages look alike.",
    },
    {
      q: "What do I need to get started?",
      a: "Just three things: a Google Sheet with your prospect list (name, email, LinkedIn URL), a Gmail account for sending emails, and a LinkedIn account. We handle the full setup — API keys, configurations, everything. You'll be up and running within 48 hours.",
    },
    {
      q: "How is this different from tools like Instantly, Lemlist, or Mailshake?",
      a: "Those tools are template-based email senders. You write one email, they send it to 1,000 people. AutoFlow is an intelligent agent — it writes a unique message for every prospect, alternates between email and LinkedIn, adapts follow-up timing based on the sequence, reads and classifies replies using AI, and alerts your team in real-time. It's closer to having a smart SDR than a mail merge tool.",
    },
    {
      q: "Is my data safe?",
      a: "AutoFlow runs on your own infrastructure. Your prospect data stays in your Google Sheet. Your email credentials are used directly by Gmail. Your LinkedIn account is yours. Nothing is stored on our servers. You have full control and full visibility at every step.",
    },
    {
      q: "What happens during the 8-day pilot?",
      a: "We set up AutoFlow with your prospect list (Day 1–2), start outreach and collect data (Day 3–5), optimize based on what's working (Day 6–7), and you see real conversations with interested prospects by Day 8. If it works, we move to a monthly plan. If it doesn't, you get a full refund.",
    },
    {
      q: "What if a prospect says they're not interested?",
      a: "AutoFlow handles that automatically. When someone replies with 'not interested,' the agent marks them and stops all future outreach. If they say 'maybe later,' it sets a reminder and reaches out again at the right time. If they ask to be removed, they're marked as do-not-contact permanently.",
    },
    {
      q: "How will I know when someone is interested?",
      a: "The moment someone replies with interest (or requests a demo), you get an email alert within minutes. The alert includes their name, company, the channel they replied on, what they said, their tone, urgency level, and any objections they mentioned. You just pick up the conversation.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-0 mb-4 px-4 py-1.5">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Common{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-gray-100 rounded-xl px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-emerald-700 hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA Section                                                        */
/* ------------------------------------------------------------------ */
function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Stop Losing Deals to Bad Follow-Up
          </h2>
          <p className="mt-5 text-lg text-emerald-100 max-w-2xl mx-auto">
            Start your 8-day pilot for $800. If AutoFlow doesn't deliver, you
            get every penny back. No risk, no commitment, no excuses.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-emerald-200 focus:border-white/40 focus:ring-0"
            />
            <a
              href="https://njpo1kp7g37a.jp.larksuite.com/scheduler/282f6a680d5350fc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="button"
                className="h-12 bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all px-8 w-full sm:w-auto"
              >
                Book a Pilot
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 text-sm text-emerald-200">
            $800 pilot &middot; 8 days &middot; Full refund guarantee
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  const columns = [
    {
      title: "Product",
      links: [
        "Features",
        "How It Works",
        "Pilot Program",
        "FAQ",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Contact"],
      email: "abdullah@autoflowautomation.store",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Auto<span className="text-emerald-400">Flow</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              AI-powered outreach that feels personal. Built for teams that
              need to grow.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-emerald-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                {"email" in col && col.email && (
                  <li>
                    <a
                      href={`mailto:${col.email}`}
                      className="text-sm hover:text-emerald-400 transition-colors break-all"
                    >
                      {col.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-end items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <WhoItsForSection />
        <DifferentSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}