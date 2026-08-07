# PowerShell script to sync metadata from _index.json to individual blog json files

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$blogsDir = Join-Path $PSScriptRoot "..\data\blogs"
$indexPath = Join-Path $blogsDir "_index.json"

if (Test-Path $indexPath) {
    $indexRaw = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
    $indexPosts = $indexRaw | ConvertFrom-Json
    
    $syncedCount = 0

    foreach ($p in $indexPosts) {
        if (-not $p.slug) { continue }
        $filePath = Join-Path $blogsDir "$($p.slug).json"
        
        if (Test-Path $filePath) {
            $postRaw = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
            try {
                $postJson = $postRaw | ConvertFrom-Json
                $modified = $false
                
                if ($p.publishedAt -and $postJson.publishedAt -ne $p.publishedAt) {
                    Write-Host "Updating publishedAt for $($p.slug): $($postJson.publishedAt) -> $($p.publishedAt)"
                    $postJson.publishedAt = $p.publishedAt
                    $modified = $true
                }
                if ($p.updatedAt -and $postJson.updatedAt -ne $p.updatedAt) {
                    $postJson.updatedAt = $p.updatedAt
                    $modified = $true
                }
                if ($p.category -and $postJson.category -ne $p.category) {
                    $postJson.category = $p.category
                    $modified = $true
                }
                if ($p.published -ne $null -and $postJson.published -ne $p.published) {
                    $postJson.published = $p.published
                    $modified = $true
                }
                
                if ($modified) {
                    $newJsonStr = $postJson | ConvertTo-Json -Depth 100 -Compress:$false
                    [System.IO.File]::WriteAllText($filePath, $newJsonStr, $utf8NoBom)
                    $syncedCount++
                }
            } catch {
                Write-Warning "Error parsing $($p.slug).json: $_"
            }
        }
    }
    
    Write-Host "Successfully synced $syncedCount blog files with _index.json dates!"
}
