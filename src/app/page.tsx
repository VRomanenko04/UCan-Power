import HomeAboutUs from '@/components/HomeAboutUs/HomeAboutUs';
import HomeAdvantages from '@/components/HomeAdvantages/HomeAdvantages';
import HomeContactForm from '@/components/HomeContactForm/HomeContactForm';
import HomeHead from '@/components/HomeHead/HomeHead';
import HomeModules from '@/components/HomeModules/HomeModules';
import HomeOfficialPartner from '@/components/HomeOfficialPartner/HomeOfficialPartner';
import HomeReadyOptions from '@/components/HomeReadyOptions/HomeReadyOptions';
import React from 'react';


const HomePage = () => {
  return (
    <main>
      <HomeHead />
      <HomeOfficialPartner />
      <HomeAdvantages />
      <HomeModules />
      <HomeReadyOptions />
      <HomeAboutUs />
      <HomeContactForm />
    </main>
  )
}

export default HomePage;