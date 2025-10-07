"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const skills = [
  { name: "React", icon: "/images/React.png", category: "Frontend" },
  { name: "Angular", icon: "/images/angular.png", category: "Frontend" },
  { name: "Django", icon: "/images/django.png", category: "Backend" },
  { name: "NestJS", icon: "/images/nestjs.png", category: "Backend" },
  { name: "ROS", icon: "/images/ros.png", category: "Robotics" },
  { name: "C++", icon: "/images/C.png", category: "Languages" },
  { name: "Python", icon: "/images/python.png", category: "Languages" },
  { name: "Java", icon: "/images/java.png", category: "Languages" },
  { name: "Machine Learning", icon: "/images/ML.png", category: "AI/ML" },
  { name: "Deep Learning", icon: "/images/DL.png", category: "AI/ML" },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div
          className={`flex justify-center max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <Card className="bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 w-full">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl text-center">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`flex flex-col items-center gap-3 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    <div className="relative w-12 h-12 group-hover:scale-110 transition-transform">
                      <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} fill className="object-contain" />
                    </div>
                    <span className="font-medium text-sm text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
