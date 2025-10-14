<#
Usage: Run this from the repository root in PowerShell after installing Git.
It will prompt for the remote URL (HTTPS or SSH) and then initialize, commit and push.
#>

param(
    [Parameter(Mandatory=$false)]
    [string]$Remote,
    [Parameter(Mandatory=$false)]
    [string]$Message = "chore: initial commit",
    [Parameter(Mandatory=$false)]
    [string]$Branch = "main"
)

Write-Host "Checking for git..."
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "git not found in PATH. Install Git for Windows first: https://git-scm.com/download/win"
    exit 1
}

Write-Host "Initializing repository..."
git init

git checkout -b $Branch 2>$null | Out-Null

Write-Host "Adding files (honoring .gitignore)..."
git add -A

Write-Host "Creating initial commit..."
git commit -m $Message 2>$null

if ($Remote -and $Remote.Trim() -ne "") {
    Write-Host "Adding remote: $Remote"
    git remote add origin $Remote
    Write-Host "Pushing to origin/$Branch..."
    git push -u origin $Branch
    Write-Host "Push complete."
} else {
    $remote = Read-Host "Enter your GitHub remote URL (HTTPS or SSH), or leave blank to skip adding remote"
    if ($remote -and $remote.Trim() -ne "") {
        git remote add origin $remote
        git push -u origin $Branch
        Write-Host "Push complete."
    } else {
        Write-Host "No remote added. You can add one later with: git remote add origin <url>"
    }
}

Write-Host "Done."
