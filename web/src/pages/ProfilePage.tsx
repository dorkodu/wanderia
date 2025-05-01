import { getPubkeyFromPrivkey, useNostrProfile } from "@/lib/nostr"
import { useState } from "react"

export default function ProfilePage() {
  const [privkey, setPrivkey] = useState<string>("")
  const [editing, setEditing] = useState(false)
  const [profileInput, setProfileInput] = useState<any>({})
  const pubkey = privkey ? getPubkeyFromPrivkey(privkey) : ""
  const profile = useNostrProfile(pubkey)

  function handleEdit() {
    setProfileInput(profile || {})
    setEditing(true)
  }

  function handleSave() {
    // TODO: publish profile update event
    setEditing(false)
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <input
        type="password"
        placeholder="Enter your Nostr private key"
        value={privkey}
        onChange={e => setPrivkey(e.target.value)}
        className="border p-2 rounded w-80 mb-4"
      />
      {profile && !editing && (
        <div className="mb-4">
          <div className="font-mono text-xs text-gray-500 mb-1">{pubkey}</div>
          <div className="mb-2">Name: {profile.name}</div>
          <div className="mb-2">About: {profile.about}</div>
          {profile.picture && <img src={profile.picture} alt="profile" className="w-24 h-24 rounded-full" />}
          <button onClick={handleEdit} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Edit</button>
        </div>
      )}
      {editing && (
        <form
          onSubmit={e => {
            e.preventDefault()
            handleSave()
          }}
          className="mb-4"
        >
          <div className="mb-2">
            <input
              type="text"
              placeholder="Name"
              value={profileInput.name || ""}
              onChange={e => setProfileInput({ ...profileInput, name: e.target.value })}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="About"
              value={profileInput.about || ""}
              onChange={e => setProfileInput({ ...profileInput, about: e.target.value })}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Picture URL"
              value={profileInput.picture || ""}
              onChange={e => setProfileInput({ ...profileInput, picture: e.target.value })}
              className="border p-2 rounded w-full"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
        </form>
      )}
      {!profile && privkey && <div>Loading profile...</div>}
    </div>
  )
}
