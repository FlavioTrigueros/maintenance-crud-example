<#
Simple Windows helper to build backend and frontend and run with docker-compose
#>
Set-StrictMode -Version Latest
Push-Location -Path (Split-Path -Path $MyInvocation.MyCommand.Definition -Parent)
cd ..
Write-Host "Building backend..."
if (Test-Path backend\mvnw.cmd) { .\backend\mvnw.cmd -f backend\pom.xml clean package } else { mvn -f backend\pom.xml clean package }
Write-Host "Installing frontend deps..."
Push-Location frontend
npm install
Pop-Location
Write-Host "Done. Use docker-compose up to run containers."
Pop-Location
