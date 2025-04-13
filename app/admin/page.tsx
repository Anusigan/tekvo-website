import { createServerClient } from "@/lib/supabase"
import { formatDistanceToNow } from "date-fns"

export default async function AdminPage() {
  const supabase = createServerClient()

  // Fetch contact submissions
  const { data: submissions, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching submissions:", error)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Contact Form Submissions</h1>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">Error loading submissions: {error.message}</div>
      )}

      {submissions && submissions.length === 0 && (
        <div className="text-center py-10 text-muted-foreground">No submissions yet.</div>
      )}

      <div className="grid gap-4">
        {submissions?.map((submission) => (
          <div key={submission.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-semibold text-lg">{submission.subject}</h2>
              <span className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(submission.created_at), { addSuffix: true })}
              </span>
            </div>
            <div className="flex gap-4 text-sm mb-2">
              <span>{submission.name}</span>
              <span>{submission.email}</span>
              {submission.phone && <span>{submission.phone}</span>}
            </div>
            <p className="mt-2 text-muted-foreground">{submission.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
