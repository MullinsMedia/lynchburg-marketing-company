'use client'

import { useState, useEffect, useCallback } from 'react'

const SHEET_URL = `https://docs.google.com/spreadsheets/d/${process.env.NEXT_PUBLIC_SHEET_ID || '1dQVtFeDsz0r-ZO0xTSAO5UOZqriWdzTpdcxQeFUHiJA'}/edit`

type AdminPost = {
  rowIndex: number
  title: string
  slug: string
  status: string
  scheduledDate: string
  category: string
  targetKeyword: string
}

type Stats = {
  ready: number
  published: number
  draft: number
}

function formatDate(dateStr: string) {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

// ─── Password Gate ────────────────────────────────────────────────
function PasswordGate({ onAuth }: { onAuth: (pw: string) => void }) {
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/posts', {
      headers: { Authorization: `Bearer ${pw}` },
    })
    if (res.ok) {
      sessionStorage.setItem('admin_pw', pw)
      onAuth(pw)
    } else {
      setError('Wrong password.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#F5F6F6] flex items-center justify-center px-4">
      <div className="bg-white border border-[#CBD4D7] p-10 w-full max-w-sm">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-2">Admin Access</p>
        <h1 className="font-serif text-2xl font-semibold text-[#2C3539] mb-8">
          Lynchburg Marketing Co.
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Admin password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            className="border border-[#CBD4D7] px-4 py-3 text-sm font-sans text-[#4C4C4C] focus:outline-none focus:border-[#61717A] bg-[#F5F6F6]"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm font-sans">{error}</p>}
          <button
            type="submit"
            disabled={loading || !pw}
            className="bg-[#2C3539] text-white font-sans font-semibold text-sm uppercase tracking-widest py-3 hover:bg-[#61717A] transition-colors disabled:opacity-50"
          >
            {loading ? 'Checking…' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────
function Dashboard({ password }: { password: string }) {
  const [stats, setStats] = useState<Stats | null>(null)
  const [ready, setReady] = useState<AdminPost[]>([])
  const [loading, setLoading] = useState(true)
  const [publishCount, setPublishCount] = useState(1)
  const [publishing, setPublishing] = useState(false)
  const [publishMsg, setPublishMsg] = useState('')
  const [editingRow, setEditingRow] = useState<number | null>(null)
  const [editDate, setEditDate] = useState('')
  const [savingDate, setSavingDate] = useState(false)

  const headers = { Authorization: `Bearer ${password}` }

  const load = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/admin/posts', { headers })
    if (res.ok) {
      const data = await res.json()
      setStats(data.stats)
      setReady(data.ready)
    }
    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password])

  useEffect(() => { load() }, [load])

  async function handlePublish() {
    setPublishing(true)
    setPublishMsg('')
    const res = await fetch('/api/admin/publish', {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ count: publishCount }),
    })
    const data = await res.json()
    if (data.ok) {
      setPublishMsg(`Published: ${data.published.length > 0 ? data.published.join(', ') : 'none found'}`)
      load()
    } else {
      setPublishMsg('Error: ' + data.error)
    }
    setPublishing(false)
  }

  function startEdit(post: AdminPost) {
    setEditingRow(post.rowIndex)
    setEditDate(post.scheduledDate)
  }

  async function saveDate(rowIndex: number) {
    setSavingDate(true)
    await fetch('/api/admin/schedule', {
      method: 'PATCH',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ rowIndex, newDate: editDate }),
    })
    setSavingDate(false)
    setEditingRow(null)
    load()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F6F6] flex items-center justify-center">
        <p className="text-[#61717A] font-sans text-sm uppercase tracking-widest">Loading…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F6F6]">
      {/* Header */}
      <div className="bg-[#2C3539] text-white px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-1">Admin</p>
          <h1 className="font-serif text-xl font-semibold">Lynchburg Marketing Company</h1>
        </div>
        <a
          href={SHEET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-sans font-semibold uppercase tracking-widest text-[#CBD4D7] hover:text-white border border-[#61717A] px-4 py-2 transition-colors"
        >
          Open Google Sheet →
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Ready to Publish', value: stats?.ready ?? 0, color: 'text-[#2C3539]' },
            { label: 'Published', value: stats?.published ?? 0, color: 'text-[#61717A]' },
            { label: 'Draft (no content)', value: stats?.draft ?? 0, color: 'text-[#97a8b0]' },
          ].map(s => (
            <div key={s.label} className="bg-white border border-[#CBD4D7] p-6">
              <p className={`font-serif text-4xl font-semibold mb-1 ${s.color}`}>{s.value}</p>
              <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Publish Now */}
        <div className="bg-white border border-[#CBD4D7] p-6 mb-10">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">Publish Now</p>
          <p className="text-sm text-[#4C4C4C] font-sans font-light mb-5">
            Manually publish the next <strong>N</strong> ready posts immediately — bypasses the scheduled date.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <label className="text-sm font-sans text-[#4C4C4C]">Number of posts:</label>
              <input
                type="number"
                min={1}
                max={stats?.ready ?? 50}
                value={publishCount}
                onChange={e => setPublishCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="border border-[#CBD4D7] px-3 py-2 w-20 text-sm font-sans text-center focus:outline-none focus:border-[#61717A] bg-[#F5F6F6]"
              />
            </div>
            <button
              onClick={handlePublish}
              disabled={publishing || (stats?.ready ?? 0) === 0}
              className="bg-[#2C3539] text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-2 hover:bg-[#61717A] transition-colors disabled:opacity-40"
            >
              {publishing ? 'Publishing…' : 'Publish Now'}
            </button>
          </div>
          {publishMsg && (
            <p className="mt-4 text-sm font-sans text-[#61717A] border-l-2 border-[#61717A] pl-3">{publishMsg}</p>
          )}
        </div>

        {/* Ready Posts Table */}
        <div className="bg-white border border-[#CBD4D7]">
          <div className="px-6 py-4 border-b border-[#CBD4D7] flex items-center justify-between">
            <div>
              <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-1">Queue</p>
              <h2 className="font-serif text-lg font-semibold text-[#2C3539]">
                Ready to Publish — {ready.length} posts
              </h2>
            </div>
            <button
              onClick={load}
              className="text-xs font-sans text-[#61717A] uppercase tracking-widest hover:text-[#2C3539] transition-colors"
            >
              ↻ Refresh
            </button>
          </div>

          {ready.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-[#61717A] font-sans font-light">No posts in the queue. Run n8n to generate content.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="border-b border-[#CBD4D7] bg-[#F5F6F6]">
                    <th className="text-left px-6 py-3 text-xs uppercase tracking-widest text-[#61717A] font-semibold">#</th>
                    <th className="text-left px-6 py-3 text-xs uppercase tracking-widest text-[#61717A] font-semibold">Title</th>
                    <th className="text-left px-6 py-3 text-xs uppercase tracking-widest text-[#61717A] font-semibold">Category</th>
                    <th className="text-left px-6 py-3 text-xs uppercase tracking-widest text-[#61717A] font-semibold">Scheduled Date</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {ready.map((post, i) => (
                    <tr key={post.rowIndex} className="border-b border-[#F5F6F6] hover:bg-[#F5F6F6] transition-colors">
                      <td className="px-6 py-4 text-[#97a8b0]">{i + 1}</td>
                      <td className="px-6 py-4">
                        <p className="text-[#2C3539] font-medium leading-snug">{post.title}</p>
                        {post.targetKeyword && (
                          <p className="text-xs text-[#97a8b0] mt-0.5">{post.targetKeyword}</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {post.category ? (
                          <span className="text-xs uppercase tracking-widest text-[#61717A] bg-[#F5F6F6] border border-[#CBD4D7] px-2 py-1">
                            {post.category}
                          </span>
                        ) : '—'}
                      </td>
                      <td className="px-6 py-4 text-[#4C4C4C]">
                        {editingRow === post.rowIndex ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="date"
                              value={editDate}
                              onChange={e => setEditDate(e.target.value)}
                              className="border border-[#61717A] px-2 py-1 text-sm focus:outline-none bg-white"
                            />
                            <button
                              onClick={() => saveDate(post.rowIndex)}
                              disabled={savingDate}
                              className="text-xs font-semibold uppercase tracking-widest text-white bg-[#61717A] px-3 py-1 hover:bg-[#2C3539] transition-colors"
                            >
                              {savingDate ? '…' : 'Save'}
                            </button>
                            <button
                              onClick={() => setEditingRow(null)}
                              className="text-xs text-[#97a8b0] hover:text-[#4C4C4C]"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <span>{formatDate(post.scheduledDate)}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        {editingRow !== post.rowIndex && (
                          <button
                            onClick={() => startEdit(post)}
                            className="text-xs font-sans uppercase tracking-widest text-[#61717A] hover:text-[#2C3539] transition-colors"
                          >
                            Edit date
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Root ─────────────────────────────────────────────────────────
export default function AdminPage() {
  const [password, setPassword] = useState<string | null>(null)

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_pw')
    if (saved) setPassword(saved)
  }, [])

  if (!password) {
    return <PasswordGate onAuth={pw => setPassword(pw)} />
  }

  return <Dashboard password={password} />
}
