import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import React from 'react';
import Page from '../components/Title/Title';


import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>mauritzerick</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
      <Acomplishments />
    </Layout>
    </div>
   
  );
  
};

export default Home;
