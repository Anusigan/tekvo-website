"use server"

import { createServerClient } from "@/lib/supabase"
import { z } from "zod"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormValues) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Create Supabase client
    const supabase = createServerClient()

    // Insert data into contact_submissions table
    const { data, error } = await supabase.from("contact_submissions").insert([validatedData]).select()

    if (error) {
      console.error("Error submitting contact form:", error)
      return { success: false, message: "Failed to submit form. Please try again." }
    }

    return {
      success: true,
      message: "Thank you for your message! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
