#!/usr/bin/env node
import * as esbuild from 'esbuild';
import * as fs from 'fs';
import * as path from 'path';

const distDir = path.resolve('dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

async function build() {
  try {
    console.log('🔨 Building Git Tutor extension...');

    // Build content script
    console.log('📦 Bundling content script...');
    await esbuild.build({
      entryPoints: ['src/content.ts'],
      bundle: true,
      outfile: 'dist/content.js',
      format: 'iife',
      target: 'ES2022',
      platform: 'browser',
      sourcemap: true,
      external: [],
      define: {
        'process.env.NODE_ENV': '"production"'
      }
    });

    // Build popup script
    console.log('📦 Bundling popup script...');
    await esbuild.build({
      entryPoints: ['src/popup.ts'],
      bundle: true,
      outfile: 'dist/popup.js',
      format: 'iife',
      target: 'ES2022',
      platform: 'browser',
      sourcemap: true,
      external: [],
      define: {
        'process.env.NODE_ENV': '"production"'
      }
    });

    console.log('✅ Build complete!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
