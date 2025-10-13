"use client"

import { useEffect, useRef } from "react"
import type React from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"
import { type RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  colors?: string[] // Multi-color support
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  colors,
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const annotationsRef = useRef<RoughAnnotation[]>([])

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  })

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView

  useEffect(() => {
    if (!shouldShow) return

    const element = elementRef.current
    if (!element) return

    // Clear previous annotations
    annotationsRef.current.forEach(annotation => {
      annotation.hide()
      annotation.remove()
    })
    annotationsRef.current = []

    // If colors array is provided, create multiple annotations
    if (colors && colors.length > 0) {
      colors.forEach((currentColor, index) => {
        const annotationConfig = {
          type: action,
          color: currentColor,
          strokeWidth,
          animationDuration,
          iterations: 1, // One iteration per color
          padding,
          multiline,
        }

        const annotation = annotate(element, annotationConfig)
        annotationsRef.current.push(annotation)

        // Stagger the animation - each color waits for previous to complete
        setTimeout(() => {
          annotation.show()
        }, index * animationDuration)
      })
    } else {
      // Single color mode (original behavior)
      const annotationConfig = {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      }

      const annotation = annotate(element, annotationConfig)
      annotationsRef.current.push(annotation)
      annotation.show()
    }

    const resizeObserver = new ResizeObserver(() => {
      annotationsRef.current.forEach(annotation => {
        annotation.hide()
        annotation.show()
      })
    })

    resizeObserver.observe(element)
    resizeObserver.observe(document.body)

    return () => {
      if (element) {
        annotationsRef.current.forEach(annotation => {
          annotation.hide()
        })
        resizeObserver.disconnect()
      }
      annotationsRef.current = []
    }
  }, [
    shouldShow,
    action,
    color,
    colors,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}