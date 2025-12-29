Set-StrictMode -Version Latest
$ScriptDir = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
$BaseDir = Join-Path $ScriptDir ".."
Push-Location $BaseDir

Write-Host "Asegúrate Docker Desktop esté corriendo..."
try {
    docker-compose down --volumes --remove-orphans
} catch {
    Write-Host "docker-compose down falló (posible primer run), continuando..."
}

Write-Host "Construyendo y levantando contenedores (docker-compose up --build)..."
docker-compose up --build

Pop-Location
