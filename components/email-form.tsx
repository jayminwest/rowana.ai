"use client"

"use client"

import type React from "react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast" // Import useToast

export default function EmailForm({ buttonText = "get early access" }: { buttonText?: string }) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Remove message state: const [message, setMessage] = useState("")
  const { toast } = useToast() // Get the toast function

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email }])

      if (error) throw error

      // Show success toast
      toast({
        title: "Success!",
        description: "Thanks! We'll be in touch soon.",
        // Optional: Add custom styling or duration
        // className: "bg-green-500 text-white", // Example custom class
      })
      setEmail("")
    } catch (error: unknown) { // Use 'unknown' for better type safety
      // Log the raw error for detailed debugging
      console.error('Caught Error:', error);
      console.error('Type of Error:', typeof error);

      let isDuplicate = false;
      // Safely check if error is an object and has expected properties
      if (typeof error === 'object' && error !== null) {
        const err = error as { code?: string; message?: string }; // Type assertion after check
        console.error('Error Code:', err.code);
        console.error('Error Message:', err.message);
        // Check for unique constraint violation (common in Postgres via Supabase)
        // Adjust the code '23505' if Supabase/Postgres uses a different code
        isDuplicate = err.code === '23505' || (typeof err.message === 'string' && err.message.includes('duplicate key value violates unique constraint'));
      } else if (typeof error === 'string') {
        // Handle cases where the error might just be a string
        console.error('Error is a string:', error);
        isDuplicate = error.includes('duplicate key value violates unique constraint');
      }

      if (isDuplicate) {
        toast({
          variant: "destructive",
          title: "Already Subscribed",
          description: "This email address has already been registered.",
        })
      } else {
        // Show generic error toast for other issues
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try again.",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
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
          disabled={isSubmitting}
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-all duration-300 disabled:opacity-70 transform hover:scale-105"
        >
          {isSubmitting ? "submitting..." : buttonText}
        </button>
      </form>
      {/* Remove the message paragraph: {message && <p className="mt-3 text-teal-400 animate-fade-in">{message}</p>} */}
    </div>
  )
}
