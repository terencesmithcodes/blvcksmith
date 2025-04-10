# AWS Deployment Guide

This guide provides detailed instructions for deploying the Blvck Smith Portfolio application to AWS.

## Prerequisites

- AWS account
- Domain name (optional, but recommended)
- SSH client installed on your local machine

## 1. Create an EC2 Instance

1. Log in to the AWS Management Console
2. Navigate to EC2 service
3. Click "Launch Instance"
4. Choose an Amazon Machine Image (AMI)
   - Recommended: Amazon Linux 2 or Ubuntu Server 20.04 LTS
5. Select an instance type
   - Recommended: t2.micro (eligible for free tier)
6. Configure instance details (default settings are usually fine)
7. Add storage (default settings are usually fine)
8. Add tags (optional)
9. Configure security group
   - Allow SSH (Port 22) from your IP
   - Allow HTTP (Port 80) from anywhere
   - Allow HTTPS (Port 443) from anywhere
10. Review and launch
11. Create or select an existing key pair and download it
12. Launch the instance

## 2. Set Up Elastic IP (Optional but Recommended)

1. Navigate to the EC2 Dashboard
2. Click on "Elastic IPs" in the left sidebar
3. Click "Allocate Elastic IP address"
4. Click "Allocate"
5. Select the newly allocated Elastic IP
6. Click "Actions" > "Associate Elastic IP address"
7. Select your instance and click "Associate"

## 3. Connect to Your EC2 Instance

```bash
# If using Linux/Mac
chmod 400 your-key-pair.pem
ssh -i your-key-pair.pem ec2-user@your-instance-ip

# If using Amazon Linux 2
ssh -i your-key-pair.pem ec2-user@your-instance-ip

# If using Ubuntu
ssh -i your-key-pair.pem ubuntu@your-instance-ip
```

## 4. Install Required Software on EC2

```bash
# Update package index
sudo apt update
sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MongoDB (or use MongoDB Atlas)
# For MongoDB Atlas, just use your connection string

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Install Git
sudo apt install git -y
```

## 5. Clone and Set Up Your Application

```bash
# Clone your repository
git clone https://github.com/yourusername/blvcksmith.git
cd blvcksmith

# Install dependencies
npm install
cd frontend
npm install
cd ..

# Create .env file
cd backend
nano .env
```

Add the following to your .env file:
```
PORT=5000
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
```

## 6. Build the React Frontend

```bash
cd ~/blvcksmith
npm run build
```

## 7. Set Up PM2 for Process Management

```bash
cd ~/blvcksmith
pm2 start backend/server.js --name "blvcksmith"
pm2 startup
pm2 save
```

## 8. Configure Nginx as a Reverse Proxy

```bash
sudo nano /etc/nginx/sites-available/blvcksmith
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Create a symbolic link to enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/blvcksmith /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 9. Set Up SSL with Let's Encrypt (Optional but Recommended)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Follow the prompts and Let's Encrypt will automatically update your Nginx configuration to use HTTPS.

## 10. Set Up Domain Name (Optional)

1. In your domain registrar's DNS settings:
   - Create an A record pointing to your instance's Elastic IP
   - If you want to use www subdomain, create a CNAME record pointing to your domain

## 11. Monitoring and Maintenance

```bash
# Check application status
pm2 status

# View logs
pm2 logs

# Restart application
pm2 restart blvcksmith

# Update application
cd ~/blvcksmith
git pull
npm install
cd frontend
npm install
npm run build
cd ..
pm2 restart blvcksmith
```

## Troubleshooting

- **Application not accessible**: Check Nginx and PM2 status
  ```bash
  sudo systemctl status nginx
  pm2 status
  ```

- **Nginx configuration issues**:
  ```bash
  sudo nginx -t
  ```

- **Check logs**:
  ```bash
  pm2 logs
  sudo tail -f /var/log/nginx/error.log
  ```

## Additional Security Recommendations

1. Set up a firewall (UFW)
   ```bash
   sudo apt install ufw
   sudo ufw allow ssh
   sudo ufw allow http
   sudo ufw allow https
   sudo ufw enable
   ```

2. Enable automatic security updates
   ```bash
   sudo apt install unattended-upgrades
   sudo dpkg-reconfigure unattended-upgrades
   ```

3. Consider using AWS Security Groups as an additional layer of protection

4. Set up regular backups of your MongoDB database