"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "CO2 Emissions in Rwanda",
    description:
      "Predicting CO2 emissions in Rwanda using machine learning. The notebook imports a dataset of historical CO2 emissions data and uses a variety of machine learning models to predict future emissions.",
    image: "/images/CO2.jpg",
    tags: ["Python", "Machine Learning", "Data Science"],
    link: "https://github.com/mehdixlabetix/CO2EmissionRawanda",
  },
  {
    id: 2,
    title: "Aerobotix Website",
    description:
      "This is a web form built using React and connected to Firebase, designed for the Aerobotix Robotics Club. The form allows users to submit their information for membership or any other relevant purposes.",
    image: "/images/aerobotix.jpg",
    tags: ["React", "Firebase", "Web Development"],
    link: "https://aerobotix.tn",
  },
  {
    id: 3,
    title: "Tunisian Water Level Prediction",
    description:
      "A Time Series model that predicts the level of water in multiple dams around the Tunisian country using old data. The model is built using XGBoost.",
    image: "/images/dam2.jpg",
    tags: ["Python", "XGBoost", "Time Series"],
    link: "https://github.com/mehdixlabetix/Weather-Time-Series",
  },
  {
    id: 4,
    title: "Smart Traffic Light",
    description:
      "A Traffic Signal Optimization System is a project aimed at tackling the issue of time waste in traffic by implementing an intelligent system that optimizes traffic signal timings.",
    image: "/images/nrw.png",
    tags: ["AI", "Computer Vision", "IoT"],
    link: "https://github.com/mehdixlabetix/NRW-Smart-Traffic-Light",
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "A Django Framework implementation of all the core features of a social media app. You can use it as a starting point for your own social media app, or you can add your own features and customizations.",
    image: "/images/Social-Media-App.jpeg",
    tags: ["Django", "Python", "Full Stack"],
    link: "https://github.com/mehdixlabetix/Social-Media-App",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef(0)
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollSpeed = 1 // pixels per frame

    const animate = () => {
      if (!isPaused) {
        scrollPositionRef.current += scrollSpeed

        // Reset scroll position when we've scrolled past the first set of items
        if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
          scrollPositionRef.current = 0
        }

        scrollContainer.scrollLeft = scrollPositionRef.current
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isPaused])

  const duplicatedProjects = [...projects, ...projects]

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured Projects</h2>

        <div className="relative">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div ref={scrollRef} className="flex gap-8 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
              {duplicatedProjects.map((project, index) => (
                <Card
                  key={`${project.id}-${index}`}
                  className={`flex flex-col group min-h-[500px] hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-accent/5 border-accent/20 hover:border-accent/50 flex-shrink-0 w-[350px] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <CardTitle className="mb-3 text-xl group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="outline" className="w-full group/btn bg-transparent" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
