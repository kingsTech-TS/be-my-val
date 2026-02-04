'use client'

import React, { useState } from 'react'
import IntroPage from '@/components/pages/IntroPage'
import ProposalPage from '@/components/pages/ProposalPage'
import CelebrationPage from '@/components/pages/CelebrationPage'

type PageState = 'intro' | 'proposal' | 'celebration'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageState>('intro')

  const handleContinueFromIntro = () => {
    setCurrentPage('proposal')
  }

  const handleYes = () => {
    setCurrentPage('celebration')
  }

  const handleNo = () => {
    // Playful - do nothing, just let them keep trying
  }

  const handleReplay = () => {
    setCurrentPage('intro')
  }

  return (
    <main className="min-h-screen w-full">
      {currentPage === 'intro' && <IntroPage onContinue={handleContinueFromIntro} />}
      {currentPage === 'proposal' && <ProposalPage onYes={handleYes} onNo={handleNo} />}
      {currentPage === 'celebration' && <CelebrationPage onReplay={handleReplay} />}
    </main>
  )
}
