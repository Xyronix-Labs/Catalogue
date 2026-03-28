"use client"

import React, { useRef, ElementType, RefObject } from "react"
import { motion, useInView, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  children?: React.ReactNode
  as?: ElementType
  animationNum?: number
  timelineRef?: RefObject<HTMLElement | HTMLDivElement | null>
  customVariants?: Variants
  className?: string
  [key: string]: unknown
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: (i ?? 0) * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

// Map common HTML tags to their motion equivalents
const motionComponents: Record<string, React.ElementType> = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  ul: motion.ul,
  li: motion.li,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
}

export function TimelineContent({
  children,
  as: Tag = "div",
  animationNum = 0,
  customVariants,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timelineRef: _timelineRef,
  ...rest
}: TimelineContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const variants = customVariants || defaultVariants

  const tagName = typeof Tag === "string" ? Tag : "div"
  const MotionTag = motionComponents[tagName] || motion.div

  return (
    <MotionTag
      ref={ref}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
