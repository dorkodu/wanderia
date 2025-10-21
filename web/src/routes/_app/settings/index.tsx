import { createFileRoute } from '@tanstack/react-router'
import { useSettingsStore } from '@web/namespaces/settings/store'
import { useEffect, useState } from 'react'

interface FormState {
  theme: 'light' | 'dark' | 'system'
  language: string
  notificationsEmail: boolean
  onboardingCompleted: boolean
}

export const Route = createFileRoute('/_app/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  const hydrate = useSettingsStore(s => s.hydrate)
  const loaded = useSettingsStore(s => s.loaded)
  const syncing = useSettingsStore(s => s.syncing)
  const update = useSettingsStore(s => s.update)
  const prefs = useSettingsStore(s => s.preferences)
  const config = useSettingsStore(s => s.config)
  const onboarding = useSettingsStore(s => s.onboarding)

  const [form, setForm] = useState<FormState>({
    theme: prefs.theme || 'system',
    language: prefs.language || 'en',
    notificationsEmail: config.notificationsEmail ?? true,
    onboardingCompleted: onboarding.completed ?? false,
  })

  useEffect(() => { hydrate() }, [hydrate])

  useEffect(() => {
    if (loaded) {
      setForm(f => ({
        ...f,
        theme: prefs.theme || 'system',
        language: prefs.language || 'en',
        notificationsEmail: config.notificationsEmail ?? true,
        onboardingCompleted: onboarding.completed ?? false,
      }))
    }
  }, [loaded, prefs, config, onboarding])

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(f => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await update({
      preferences: { theme: form.theme, language: form.language },
      config: { notificationsEmail: form.notificationsEmail },
      onboarding: { completed: form.onboardingCompleted },
    })
  }

  if (!loaded && syncing) {
    return <div className="p-6">Loading settings...</div>
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium">Theme</label>
          <select
            value={form.theme}
            onChange={e => handleChange('theme', e.target.value as any)}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">Language</label>
          <input
            value={form.language}
            onChange={e => handleChange('language', e.target.value)}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            id="notificationsEmail"
            type="checkbox"
            checked={form.notificationsEmail}
            onChange={e => handleChange('notificationsEmail', e.target.checked)}
          />
          <label htmlFor="notificationsEmail">Email Notifications</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="onboardingCompleted"
            type="checkbox"
            checked={form.onboardingCompleted}
            onChange={e => handleChange('onboardingCompleted', e.target.checked)}
          />
          <label htmlFor="onboardingCompleted">Onboarding Completed</label>
        </div>
        <button
          type="submit"
          disabled={syncing}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {syncing ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  )
}
