import { google } from 'googleapis'
import { JWT } from 'google-auth-library'

export type BlogPost = {
  title: string
  slug: string
  targetKeyword: string
  metaDescription: string
  featuredImageUrl: string
  content: string
  status: 'draft' | 'ready' | 'published'
  scheduledDate: string
  publishedDate: string
  category: string
  internalLinks: string
  secondaryKeywords: string
  faqQuestions: string
  ctaUrl: string
  author: string
}

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(/\\n/g, '\n')
  return new JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
}

export async function getSheetData(): Promise<BlogPost[]> {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
    return []
  }

  const auth = getAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  const sheetId = process.env.GOOGLE_SHEET_ID!

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Sheet1!A2:O', // skip header row, columns A through O (15 columns)
  })

  const rows = response.data.values || []

  return rows
    .filter(row => row[0] && row[0].toString().trim() !== '') // ignore rows with no title
    .map(row => ({
      title: row[0] || '',
      slug: row[1] || '',
      targetKeyword: row[2] || '',
      metaDescription: row[3] || '',
      featuredImageUrl: row[4] || '',
      content: row[5] || '',
      status: (row[6] || 'draft') as BlogPost['status'],
      scheduledDate: row[7] || '',
      publishedDate: row[8] || '',
      category: row[9] || '',
      internalLinks: row[10] || '',
      secondaryKeywords: row[11] || '',
      faqQuestions: row[12] || '',
      ctaUrl: row[13] || '',
      author: row[14] || 'Adam Mullins',
    }))
}

export type AdminPost = {
  rowIndex: number
  title: string
  slug: string
  status: 'draft' | 'ready' | 'published'
  scheduledDate: string
  publishedDate: string
  category: string
  targetKeyword: string
}

export async function getAdminPosts(): Promise<AdminPost[]> {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
    return []
  }

  const auth = getAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  const sheetId = process.env.GOOGLE_SHEET_ID!

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Sheet1!A2:O',
  })

  const rows = response.data.values || []
  const result: AdminPost[] = []

  rows.forEach((row, index) => {
    if (row[0] && row[0].toString().trim() !== '') {
      result.push({
        rowIndex: index,
        title: row[0] || '',
        slug: row[1] || '',
        targetKeyword: row[2] || '',
        status: (row[6] || 'draft') as AdminPost['status'],
        scheduledDate: row[7] || '',
        publishedDate: row[8] || '',
        category: row[9] || '',
      })
    }
  })

  return result
}

export async function updateScheduledDate(rowIndex: number, newDate: string): Promise<void> {
  const auth = getAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  const sheetId = process.env.GOOGLE_SHEET_ID!
  const sheetRow = rowIndex + 2

  await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range: `Sheet1!H${sheetRow}`,
    valueInputOption: 'RAW',
    requestBody: { values: [[newDate]] },
  })
}

export async function updateRowStatus(rowIndex: number, publishedDate: string): Promise<void> {
  const auth = getAuth()
  const sheets = google.sheets({ version: 'v4', auth })
  const sheetId = process.env.GOOGLE_SHEET_ID!

  // rowIndex is 0-based among data rows; add 2 for 1-based sheet row (header is row 1)
  const sheetRow = rowIndex + 2

  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: sheetId,
    requestBody: {
      valueInputOption: 'RAW',
      data: [
        { range: `Sheet1!G${sheetRow}`, values: [['published']] },
        { range: `Sheet1!I${sheetRow}`, values: [[publishedDate]] },
      ],
    },
  })
}
