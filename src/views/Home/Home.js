/* eslint-disable prettier/prettier */
import React from 'react'

import Preview from '../../components/Preview/Preview'
import Editor from '../../components/Editor/Editor'
import { useState } from 'react'

import './Home.css'

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('')
  const [font, setFont] = useState('')

  

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview 
        title={title}
        setTitle={setTitle}
        font={font}
        setFont={setFont}
      />
      <Editor
        title={title}
        setTitle={setTitle}
        font={font}
        setFont={setFont}
      />
    </main>
  )
  // eslint-disable-next-line prettier/prettier
}
