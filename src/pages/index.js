import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">About LaHMG</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/faq">
            FAQ
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Blog
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/contact">
            Contact
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://oldinsurancemaps.net">
            Main Site &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <div style={{backgroundColor:'#123b4f', color:'white'}}>
      </div>
    </Layout>
  );
}
