#!/usr/bin/env bash
set -euo pipefail
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")"/.. && pwd)"

echo "Asegúrate Docker Desktop esté corriendo..."
cd "$BASE_DIR"

echo "Construyendo y levantando contenedores (docker-compose up --build)..."
docker-compose down --volumes --remove-orphans || true
docker-compose up --build
