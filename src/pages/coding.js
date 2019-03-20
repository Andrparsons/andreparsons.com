import React from "react";
import Link from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Coding = () => (
  <Layout>
    <SEO
      title="Coding"
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
    <div id="coding" />
  </Layout>
);

export default Coding;
