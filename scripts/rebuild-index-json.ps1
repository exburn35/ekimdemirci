# PowerShell script to rebuild _index.json from all individual blog JSON files

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$blogsDir = Join-Path $PSScriptRoot "..\data\blogs"
$indexPath = Join-Path $blogsDir "_index.json"

$files = Get-ChildItem -Path $blogsDir -Filter "*.json" | Where-Object { $_.Name -ne "_index.json" }

$posts = @()

foreach ($file in $files) {
    try {
        $raw = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
        $j = $raw | ConvertFrom-Json
        
        $postObj = [PSCustomObject]@{
            title = $j.title
            slug = $j.slug
            excerpt = $j.excerpt
            featuredImage = $j.featuredImage
            ogImage = $j.ogImage
            metaTitle = $j.metaTitle
            metaDescription = $j.metaDescription
            publishedAt = $j.publishedAt
            updatedAt = $j.updatedAt
            published = $j.published
            category = $j.category
            readTime = $j.readTime
            tags = $j.tags
            views = if ($j.views -ne $null) { $j.views } else { 0 }
        }
        $posts += $postObj
    } catch {
        Write-Warning "Error reading $($file.Name): $_"
    }
}

# Sort descending by publishedAt date
$sortedPosts = $posts | Sort-Object -Property @{ Expression = { [DateTime]::Parse($_.publishedAt) } } -Descending

$jsonOutput = $sortedPosts | ConvertTo-Json -Depth 100 -Compress:$false
[System.IO.File]::WriteAllText($indexPath, $jsonOutput, $utf8NoBom)

Write-Host "Successfully rebuilt _index.json with $($sortedPosts.Count) posts sorted by publishedAt!"
