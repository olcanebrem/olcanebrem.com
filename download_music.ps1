# Create music directory if it doesn't exist
$musicDir = "public/music"
if (-not (Test-Path -Path $musicDir)) {
    New-Item -ItemType Directory -Path $musicDir | Out-Null
}

# List of sample music URLs (royalty-free music from various sources)
$musicUrls = @(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
)

# Download each music file
foreach ($url in $musicUrls) {
    $fileName = [System.IO.Path]::GetFileName($url)
    $outputPath = Join-Path $musicDir $fileName
    
    Write-Host "Downloading $fileName..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath
        Write-Host "Successfully downloaded $fileName"
    }
    catch {
        Write-Host "Failed to download $fileName : $_"
    }
}

Write-Host "\nDownload complete! Files are saved in the $musicDir directory."
