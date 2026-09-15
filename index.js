#!/usr/bin/env node
import { styleText } from 'node:util';

const card = `
  ┌ Branden Higby ────────────────────────────────┐
  │                                               │
  │   ${styleText('bold', 'web')}       https://www.higby.io              │
  │   ${styleText('bold', 'email')}     mailto:b@higby.io                 │
  │   ${styleText('bold', 'git')}       https://github.com/higby          │
  │                                               │
  └───────────────────────────────────────────────┘
`; 

console.log(card);
