import React from "react";
import Link from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Blog = () => (
  <Layout>
    <SEO
      title="Blog"
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
    <div id="blog" />
  </Layout>
);

export default Blog;
