import HomeAdvantages from '@/components/HomeAdvantages/HomeAdvantages';
import HomeContactForm from '@/components/HomeContactForm/HomeContactForm';
import HomeHead from '@/components/HomeHead/HomeHead';
import HomeOfficialPartner from '@/components/HomeOfficialPartner/HomeOfficialPartner';
import React from 'react';


const HomePage = () => {
  return (
    <main>
      <HomeHead />
      <HomeOfficialPartner />
      <HomeAdvantages />
      <HomeContactForm />
    </main>
  )
}

export default HomePage;