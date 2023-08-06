import { AboutMe } from 'components/AboutMe';
import { ContactSection } from 'components/ContactSection';
import { Hero } from 'components/Hero';
import { Insurance } from 'components/Insurance';
import { Layout } from 'components/Layout';
import { Values } from 'components/Values';
import type { NextPage } from 'next';

const Home: NextPage<{}> = () => (
  <Layout hero={<Hero />}>
    <AboutMe />
    <Values />
    <ContactSection />
    <Insurance />
  </Layout>
);

export default Home;
