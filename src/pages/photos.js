import React from "react";
import Link from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Photos = () => (
  <Layout>
    <SEO
      title="Photography"
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
    <div id="photos" />
  </Layout>
);

export default Photos;
