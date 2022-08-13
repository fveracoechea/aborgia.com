import type { NextPage } from "next";

import Layout from "components/Layout";
import { Hero } from "components/Hero";
import { Values } from "components/Values";
import { Insurance } from "components/Insurance";
import { ContactSection } from "components/ContactSection";
import { AboutMe } from "components/AboutMe";

const Home: NextPage<{}> = () => (
  <Layout>
    <Hero />
    <Values />
    <Insurance />
    <ContactSection />
    <AboutMe />
  </Layout>
);

export default Home;