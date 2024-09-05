import HomeAdvantages from '@/components/HomeAdvantages/HomeAdvantages';
import HomeHead from '@/components/HomeHead/HomeHead';
import HomeOfficialPartner from '@/components/HomeOfficialPartner/HomeOfficialPartner';
import React from 'react';


const HomePage = () => {
  return (
    <main>
      <HomeHead />
      <HomeOfficialPartner />
      <HomeAdvantages />
    </main>
  )
}

export default HomePage;