"use client"

"use client"

import type React from "react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
// Removed useToast import

// Define possible submission statuses
type SubmissionStatus = "idle" | "submitting" | "success"

export default function EmailForm({ buttonText = "get early access" }: { buttonText?: string }) {
  const [email, setEmail] = useState("")
  // Replace isSubmitting with submissionStatus
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle")
  // Removed useToast hook call

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissionStatus("submitting") // Set status to submitting

    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email }])

      if (error) throw error

      // On success, set status to success and clear email
      setSubmissionStatus("success")
      setEmail("")
    } catch (error: unknown) {
      // Also set status to success on error/duplicate, clear email
      console.error('Email submission error (suppressed in UI):', error);
      setSubmissionStatus("success")
      setEmail("")
      // Removed toast call
    }
    // Removed finally block, status handles UI state
    // Removed extra closing brace here
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
          required
          className="flex-grow px-4 py-3 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-violet-600 transition-all duration-300"
        />
        <button
          type="submit"
          disabled={submissionStatus !== "idle"} // Disable if submitting or success
          className={cn(
            "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center", // Base styles
            submissionStatus === "idle" && "bg-violet-600 hover:bg-violet-700 transform hover:scale-105", // Idle state styles
            submissionStatus === "submitting" && "bg-violet-600 opacity-70 cursor-not-allowed", // Submitting state styles
            submissionStatus === "success" && "bg-green-600 cursor-not-allowed", // Success state styles (green background)
          )}
        >
          {submissionStatus === "idle" && buttonText}
          {submissionStatus === "submitting" && "submitting..."}
          {submissionStatus === "success" && (
            // Simple Checkmark SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white" // Ensure icon is visible on green bg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3} // Make checkmark thicker
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </form>
      {/* Remove the message paragraph */}
    </div>
  )
}
// Need to import cn utility
import { cn } from "@/lib/utils"
