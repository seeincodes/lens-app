import { useState, useEffect } from "react"
import { client, reccommendedProfiles } from "../api"
import Link from "next/link"

export default function Home() {
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {
    try {
      const response = await client.query(reccommendedProfiles).toPromise()
      console.log({ response });
      setProfiles(response.data.recommendedProfiles)
    } catch (error) {
      console.log({ err });
    }

  }

  return (
    <div>
      {
        profiles.map((profile, index) => (
          <Link href={`/profile/${profile.id}`}>
            <a>
              <div>
                <h4>{profile.handle}</h4>
                <p>{profile.bio}</p>
              </div>
            </a>
          </Link>
        ))
      }
    </div>
  )
}
