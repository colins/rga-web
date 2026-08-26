Web Application Framework - React/Vite/Tailwind 
Publishing to - siteground

## Deployment Information
- **Deployment Script**: `./deploy.sh` (builds the project via `npm run build` and syncs `./dist` to SiteGround via SFTP)
- **SFTP Host**: `ssh.colins110.sg-host.com`
- **SFTP Port**: `18765`
- **SFTP User**: `u3106-wgdlqfiup0tz`
- **Remote Directory**: `www/colins110.sg-host.com/public_html`
- **Ignored Credentials & Scripts**: `.access` and `deploy.sh` are in `.gitignore`
