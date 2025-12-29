#!/bin/bash

# Load environment variables from .env file in the server directory
if [ -f "../../server/.env" ]; then
  export $(grep -v '^#' ../../server/.env | xargs)
  echo "Loaded .env from ../../server/.env"
else
  echo "Error: ../../server/.env not found. Please ensure it exists."
  exit 1
fi

MONGO_URI=${MONGO_URI:-"mongodb://localhost:27017/davinciyatech"}
BACKUP_DIR="$(dirname "$0")/database-backups"

# Extract database name from MONGO_URI
DB_NAME=$(echo "$MONGO_URI" | grep -oP '(?<=/)[^/?]+')
if [ -z "$DB_NAME" ]; then
  DB_NAME="davinciyatech" # Default if not found in URI
fi

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_PATH="$BACKUP_DIR/${DB_NAME}_$TIMESTAMP"
ARCHIVE_PATH="$BACKUP_PATH.tar.gz"

echo "Starting MongoDB backup for database: $DB_NAME"
echo "Backup will be saved to: $BACKUP_PATH"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Check if mongodump is available
if ! command -v mongodump &> /dev/null
then
    echo "mongodump command not found. Please install MongoDB tools or use the Node.js backup script."
    exit 1
fi

# Run mongodump
mongodump --uri="$MONGO_URI" --out="$BACKUP_PATH"

if [ $? -eq 0 ]; then
    echo "Backup completed successfully to $BACKUP_PATH"
    echo "Creating compressed archive..."
    tar -czf "$ARCHIVE_PATH" -C "$BACKUP_DIR" "${DB_NAME}_$TIMESTAMP"
    if [ $? -eq 0 ]; then
        echo "Compressed backup saved to: $ARCHIVE_PATH"
        rm -rf "$BACKUP_PATH"
        echo "Uncompressed backup removed. Archive created successfully."
    else
        echo "Failed to create compressed archive."
    fi
else
    echo "MongoDB backup failed."
    exit 1
fi

