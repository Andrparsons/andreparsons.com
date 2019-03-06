import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `portfolio`,
        `photography`,
        `Andre Parsons`,
        `Web Developer`
      ]}
    />
    <div id="about">
      <h1>Andre Parsons</h1>
      <h2>Web Developer, Programmer & Photographer</h2>
      <h3>Who am I?</h3>
      <p>
        An aspiring web developer and amateur photographer who loves to share
        his work. I create things with code and turn them into useful, beautiful
        and valuable applications and websites.
      </p>
      <p>
        I believe that everyone should be the master of their own online
        presence and the web should be as diverse as the real world. I created
        this site to document what I've learned and created in one central
        location so I can share it with the world.
      </p>
      <p>Why, yes I am currently looking for work. Thanks for asking.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
