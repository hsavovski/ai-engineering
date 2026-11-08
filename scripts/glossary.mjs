// Renders the repo-root GLOSSARY.md into book/glossary.md.
// GLOSSARY.md links chapters as repo paths (book/part-NN-*/x.md) so they work on GitHub;
// the book needs site paths (/part-NN-*/x).
import fs from 'node:fs'
import path from 'node:path'
import { BOOK_DIR } from './chapters.mjs'

const SOURCE = path.resolve(BOOK_DIR, '../GLOSSARY.md')
const TARGET = path.join(BOOK_DIR, 'glossary.md')

const text = fs
  .readFileSync(SOURCE, 'utf8')
  .replace(/\]\(book\/glossary\.md\)/g, '](/glossary)')
  .replace(/\]\(book\/([^)]+?)\.md\)/g, '](/$1)')

fs.writeFileSync(TARGET, `<!-- Generated from GLOSSARY.md by \`npm run glossary\` (also runs before dev and build). Edit GLOSSARY.md, not this file. -->\n\n${text}`)
console.log('Updated book/glossary.md from GLOSSARY.md')
