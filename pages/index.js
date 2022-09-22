/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react"
import { client, reccommendedProfiles } from "../api"
import Link from "next/link"
import Image from "next/image"

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
          < Link href={`/profile/${profile.id}`}>
            <a>
              <div>
                {/* {
                  profile.picture ? (
                    <Image
                      src={profile.picture.original}
                      width="60px"
                      height="60px"
                      alt="profile picture" />
                  ) : (
                    <div
                      style={{ width: "60px", height: "60px", backgroundColor: "black" }}
                    />
                  )
                } */}
                <h4>{profile.handle}</h4>
                <p>{profile.bio}</p>
              </div>
            </a>
          </Link>
        ))
      }
    </div >
  )
}
