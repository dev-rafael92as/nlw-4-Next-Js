import Head from 'next/head'
import React from 'react';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../styles/components/Profile';

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
