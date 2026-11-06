# SAIXORA Technology — Official Website

A responsive, multi-page static website for **SAIXORA Technology** and **SAIXORA Shield**, built with the same lightweight architecture: HTML, CSS and vanilla JavaScript.

## What's included

- Apple-inspired product-launch homepage featuring “Introducing SAIXORA Shield” and the smaller “Protection Shield” line.
- Responsive navigation, cinematic black hero and SAIXORA blue/cyan visual identity.
- Product overview for the three-app SaaS ecosystem: Device Shield, Staff Shield and Admin Shield.
- Product benefits, operating flow, intended use cases and platform availability.
- Dedicated downloads page for Device Shield Windows + Android, Staff Shield Android and Admin Shield Android. Only the iOS editions of Staff Shield and Admin Shield are marked as coming soon.
- About company, Owner / Founder, Contact and legal pages (Terms, Privacy, Software License and Copyright).
- SEO titles, descriptions, keywords, Open Graph and Twitter metadata, robots.txt and sitemap template.
- Supplied SAIXORA Shield artwork and SX favicon.
- Vanilla JavaScript interactions: responsive menu, reveal animations, configured download links and email-draft contact form.

## Run locally

Open Command Prompt in this folder and run:

```cmd
python -m http.server 5500
```

Then visit `http://localhost:5500`.

You can also open the folder in VS Code and use the Live Server extension. No framework, package installation or build step is required.

## Application availability

| Application | Windows | Android | iOS |
|---|---|---|---|
| Device Shield | Available | Available | Not listed |
| Staff Shield | — | Available | Coming soon |
| Admin Shield | — | Available | Coming soon |

The website displays the applications as available based on the product status supplied by SAIXORA. Actual app binaries were not attached to this website request, so download buttons remain disabled until the genuine files are added and configured.

## Connect the real release packages

Add the genuine files to the `downloads/` directory using these names, or edit the URLs in `js/config.js`:

- `saixora-device-shield-windows-x64.exe`
- `saixora-device-shield-android.apk`
- `saixora-staff-shield-android.apk`
- `saixora-admin-shield-android.apk`

Then open `js/config.js`, enter each actual version number and set `ready: true` only for a file that is present and has been tested. The release keys are `windows`, `android`, `staffAndroid` and `adminAndroid`.

Recommended before public release: publish actual OS requirements, file sizes, release notes, signing/publisher information and SHA-256 checksums. Never set a download to ready while its real package is missing.

## Product capability and accuracy notes

Product copy is based on the description supplied for SAIXORA Shield. It describes kiosk-style startup enforcement, tamper alerts, offline-resilient session expiry, role-based session launch, remote lock/unlock, WebRTC live view, MP4 recording, PTT/TTS announcements, session history, bell reminders and central subscription/access-code controls.

Specific behavior depends on the platform, device permissions, configuration, network and application version. The site avoids absolute claims that software is impossible to bypass or will perform identically on every device. The stated live-view rate is described as a target, not a universal guarantee.

## Configure company details

Edit `js/config.js` before production:

- `supportEmail`: official support/contact email. The contact form opens a pre-filled message in the visitor's email app; it does not send data to a website backend.
- `websiteUrl`: final production domain, including `https://`.
- `ownerPortfolio`: currently set to the supplied founder portfolio.
- `releases`: real package URLs, file names, versions and readiness flags.

Replace `YOUR-DOMAIN-HERE` in `sitemap.xml` before submitting the sitemap to search engines.

## Privacy and legal publication checklist

The Privacy Policy and Terms pages are starter disclosures, not legal advice. Because the described product can process device details, session metadata, screen content, voice and recordings, the final app-specific privacy notice must accurately document data categories, purposes, recipients, storage, retention, security, access roles and user rights. Obtain appropriate notice and consent before using monitoring, voice or recording functions, and get the final terms and policies reviewed for the actual business and applicable law.

## Hosting

This is a static website and can be deployed to GitHub Pages, Firebase Hosting, Cloudflare Pages, Netlify or another standard static host. No website backend is included or required for these pages.

## File structure

```text
saixora-website/
├── assets/
│   ├── favicon.png
│   └── saixora-shield-logo.webp
├── css/
│   └── styles.css
├── js/
│   ├── config.js
│   └── site.js
├── downloads/
│   └── README.txt
├── index.html
├── product.html
├── benefits.html
├── downloads.html
├── about.html
├── owner.html
├── contact.html
├── terms.html
├── privacy.html
├── license.html
├── copyright.html
├── robots.txt
└── sitemap.xml
```
