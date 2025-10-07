"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="about" ref={sectionRef} className="min-h-screen py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent-muted text-center">Who am I really?</h2>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a student studying software engineering at <span className="text-foreground font-medium">INSAT</span>.
              I have a passion for both AI and full-stack development. I find joy in working on the front and back end
              aspects of software development, all while continuously learning and embracing the excitement that comes
              with it.
            </p>

            <p>
              It all revolves around being a student, an AI enthusiast, a full-stack developer, and someone who values
              the journey of learning and finding enjoyment throughout the process. I also have experience in the field
              of embedded systems and robotics, as I have worked on participating in the international competition of{" "}
              <span className="text-foreground font-medium">Eurobot</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 text-4xl justify-center">
              <span className="animate-bounce" style={{ animationDelay: "0ms" }}>
                💻
              </span>
              <span className="animate-bounce" style={{ animationDelay: "100ms" }}>
                🤖
              </span>
              <span className="animate-bounce" style={{ animationDelay: "200ms" }}>
                😃
              </span>
              <span className="animate-bounce" style={{ animationDelay: "300ms" }}>
                ⭐
              </span>
              <span className="animate-bounce" style={{ animationDelay: "400ms" }}>
                🌌
              </span>
              <span className="animate-bounce" style={{ animationDelay: "500ms" }}>
                🔥
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
