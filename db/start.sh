#!/bin/bash
set -e

# Switch to the directory of this script
cd "$(dirname "$0")"

echo "Starting PostgreSQL with Podman..."

# Check if podman-compose is available
if command -v podman-compose &> /dev/null; then
    podman-compose up -d
elif podman compose version &> /dev/null; then
    podman compose up -d
else
    echo "Error: Neither 'podman-compose' nor 'podman compose' found."
    echo "Please install podman-compose or ensure podman v4+ is installed."
    exit 1
fi

echo "Database container started."
echo "You can check status with: podman compose ps"
