# Deploy script for GitHub Pages (PowerShell)
Write-Host "Building the project..." -ForegroundColor Green
npm run build

Write-Host "Adding built files to git..." -ForegroundColor Green
git add docs/

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Update built files - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host "Deployment complete! Your changes should be live in a few minutes." -ForegroundColor Green 