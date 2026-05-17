export type FaqEntry = { question: string; answer: string }

/**
 * Parses the faqQuestions field from the Google Sheet.
 * Expected format: "Q: question?\n A: answer\n Q: question2?\n A: answer2"
 */
export function parseFaqQuestions(raw: string): FaqEntry[] {
  if (!raw) return []

  // Normalise literal \n escape sequences from the sheet
  const text = raw.replace(/\\n/g, '\n')

  const entries: FaqEntry[] = []
  // Match each Q: ... A: ... block
  const re = /Q:\s*([^\n]+)\s*\n\s*A:\s*([\s\S]+?)(?=\s*\n\s*Q:|\s*$)/g

  let match: RegExpExecArray | null
  while ((match = re.exec(text)) !== null) {
    const question = match[1].trim()
    const answer = match[2].trim()
    if (question && answer) {
      entries.push({ question, answer })
    }
  }

  return entries
}

export function buildFaqSchema(entries: FaqEntry[]) {
  if (entries.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map(e => ({
      '@type': 'Question',
      name: e.question,
      acceptedAnswer: { '@type': 'Answer', text: e.answer },
    })),
  }
}
