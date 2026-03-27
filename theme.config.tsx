import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>
      <span style={{ color: '#5941F2' }}>Block</span>Pick Docs
    </span>
  ),
  project: {
    link: 'https://github.com/blockpick',
  },
  docsRepositoryBase: 'https://github.com/blockpick/docs',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="BlockPick Docs" />
      <meta property="og:description" content="블록픽 기획/정책 문서" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} &copy; BlockPick. All rights reserved.
      </span>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - BlockPick Docs',
    }
  },
  primaryHue: 250,
  primarySaturation: 85,
}

export default config
