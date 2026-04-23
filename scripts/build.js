/**
 * Asset copy step of the static build.
 *
 * SCSS is compiled via the `sass` CLI (see npm scripts). This script only
 * copies the static files that belong in `dist/`, preserving the original
 * folder layout expected by the HTML files.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

const copies = [
    { from: 'src/index.html',      to: 'dist/index.html' },
    { from: 'src/shop/index.html', to: 'dist/shop/index.html' },
    { from: 'src/assets/img',      to: 'dist/assets/img' },
    { from: 'src/assets/lib',      to: 'dist/assets/lib' },
    // Authored JS lives in /assets/app; compiled output lives in /assets/js
    { from: 'src/assets/app',      to: 'dist/assets/js' }
];

function copy(from, to) {
    const absFrom = path.join(root, from);
    const absTo   = path.join(root, to);

    if (!fs.existsSync(absFrom)) {
        console.warn('  skip (missing): ' + from);
        return;
    }

    fs.mkdirSync(path.dirname(absTo), { recursive: true });
    fs.cpSync(absFrom, absTo, { recursive: true });
    console.log('  copied ' + from + ' -> ' + to);
}

console.log('Copying static assets to dist/ ...');
copies.forEach(function (c) { copy(c.from, c.to); });
console.log('Done.');
