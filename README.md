# Resilience Gymnastics Academy Website (`rga-web`)

Website for Resilience Gymnastics Academy, built with React, Vite, and Tailwind CSS.

---

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Building for Production](#building-for-production)
- [Deploying to SiteGround](#deploying-to-siteground)
  - [Method 1: Site Tools File Manager (Recommended)](#method-1-site-tools-file-manager-recommended)
  - [Method 2: FTP / SFTP Upload](#method-2-ftp--sftp-upload)
  - [Method 3: Deploying via SSH / Git](#method-3-deploying-via-ssh--git)
- [Client-Side Routing & `.htaccess`](#client-side-routing---htaccess)
- [Hosting in a Subdirectory](#hosting-in-a-subdirectory)
- [Troubleshooting & Common Issues](#troubleshooting--common-issues)

---

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **SiteGround Account**: Active hosting account with access to **Site Tools** or FTP/SSH credentials.

---

## Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

3. **Preview Production Build Locally**:
   ```bash
   npm run preview
   ```

---

## Building for Production

To compile and optimize the application for production deployment:

```bash
npm run build
```

The compiled output will be generated in the `./dist` directory:
- `index.html` - Primary HTML entry file
- `.htaccess` - Apache routing configuration (automatically copied from `public/.htaccess`)
- `assets/` - Bundled and minified JavaScript and CSS files

---

## Deploying to SiteGround

### Method 1: Site Tools File Manager (Recommended)

1. **Build the site locally**:
   ```bash
   npm run build
   ```
2. **Log into SiteGround**:
   - Access your **SiteGround Client Area** > **Websites**.
   - Click **Site Tools** next to your domain name (e.g., `rgagymnast.com`).
3. **Open File Manager**:
   - In Site Tools, navigate to **Site** > **File Manager**.
   - Open the domain root directory, typically **`public_html/`**.
4. **Upload Files**:
   - Delete existing old build files in `public_html/` if replacing a previous version.
   - Upload **all contents inside your local `dist/` directory** (`index.html`, `.htaccess`, and the `assets/` folder) directly into `public_html/`.
   - *Note:* Upload the **contents** of `dist/`, not the `dist/` directory itself.

---

### Method 2: FTP / SFTP Upload

1. **Get FTP/SFTP Credentials**:
   - In SiteGround **Site Tools**, go to **Site** > **FTP Accounts** (or **Devs** > **SSH Keys Manager** for SFTP).
2. **Connect via FTP Client**:
   - Open an FTP client such as FileZilla, Cyberduck, or Transmit.
   - Connection Settings:
     - **Host**: Domain name or server IP
     - **Protocol**: SFTP (Port `18765`) or FTP (Port `21`)
3. **Transfer Files**:
   - Upload all files and subfolders inside local `./dist` into `public_html/`.

---

### Method 3: Deploying via SSH / Git

1. **Configure SSH Access**:
   - In SiteGround **Site Tools**, go to **Devs** > **SSH Keys Manager** to set up SSH keys and whitelist your IP address.
2. **Connect via Terminal**:
   ```bash
   ssh -p 18765 u123-example@your-server-ip
   ```
3. **Clone, Build, and Deploy**:
   ```bash
   cd public_html
   git clone <repo-url> .
   npm install
   npm run build
   ```

---

## Client-Side Routing & `.htaccess`

SiteGround runs on Apache web servers. Single Page Applications (SPAs) require rewrite rules so that direct page links and browser refreshes route properly to `index.html`.

A pre-configured `.htaccess` file is located in `public/.htaccess` and automatically bundles into `dist/` during `npm run build`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

> **Note:** If `.htaccess` is hidden when transferring files via FTP, enable **"Show Hidden Files (dotfiles)"** in your FTP client.

---

## Hosting in a Subdirectory

If deploying the site to a subfolder (e.g., `https://rgagymnast.com/subfolder/`):

1. **Update `vite.config.js`**:
   ```javascript
   export default defineConfig({
     base: '/subfolder/',
     plugins: [react()],
     // ...
   })
   ```

2. **Update `public/.htaccess`**:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /subfolder/
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /subfolder/index.html [L]
   </IfModule>
   ```

---

## Troubleshooting & Common Issues

- **Site ground Cache / Changes Not Updating Immediately**:
  SiteGround uses NGINX Direct Delivery and dynamic caching.
  To flush cache: In **Site Tools**, go to **Speed** > **Caching** > **Dynamic Cache** and click **Flush Cache**.
- **404 Errors on Refresh / Direct Links**:
  Ensure `.htaccess` was uploaded to `public_html/` along with `index.html`.
- **Assets Failing to Load**:
  Check browser dev tools network tab. If assets return 404, verify the `base` property in `vite.config.js` matches your domain deployment path.
