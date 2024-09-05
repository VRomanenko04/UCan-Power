import HomeAboutUs from '@/components/HomeAboutUs/HomeAboutUs';
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
      <HomeAboutUs />
      <HomeContactForm />
    </main>
  )
}

export default HomePage;