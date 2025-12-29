const fs = require('fs');
const path = require('path');

// Load .env file manually
const envPath = path.join(__dirname, 'server', '.env');
const envVars = {};

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    }
  });
}

module.exports = {
  apps: [
    {
      name: process.env.PM2_APP_NAME || 'tech-davinciya-backend',
      script: './server/server.js',
      cwd: process.env.PROJECT_ROOT || '/var/www/html/tech.davinciya.com',
      instances: 1,
      exec_mode: 'fork',
      // Load all environment variables from .env file
      env: {
        ...envVars,
        NODE_ENV: envVars.NODE_ENV || 'production',
        PORT: envVars.PORT || 5030,
      },
      error_file: './logs/backend-error.log',
      out_file: './logs/backend-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};

