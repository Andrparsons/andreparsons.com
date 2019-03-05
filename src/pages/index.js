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
        An aspiring web developer and amateur photographer who loves to show off
        his work. I create things with code and turn them into useful, beautiful
        and valuable applications and websites. I'm currently looking for work.
      </p>
      <p>
        I believe that everyone should be the master of thier own online
        presense and the web should be as diverse as the real world. I created
        this site to document what I've learned and created in one central
        location so I can share it with the world.
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
