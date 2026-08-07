# PowerShell Script to Update All Blog JSON files with Source Badges in "Kaynaklar" (UTF-8)

$utf8 = New-Object System.Text.UTF8Encoding($false)

function Detect-SourceCategory {
    param (
        [string]$Url,
        [string]$Text
    )

    $lowerUrl = ($Url + "").ToLower()
    $lowerText = ($Text + "").ToLower()

    # 1. PATENT
    if ($lowerUrl.Contains("patents.google.com") -or $lowerUrl.Contains("google.com/patents") -or $lowerText.Contains("us patent") -or $lowerText.Contains("patent no") -or $lowerText.Contains("patent başvurusu")) {
        return @{
            Label = "Patent"
            BgColor = "#1a237e"
            TextColor = "#ffffff"
            Icon = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>'
        }
    }

    # 2. AKADEMİK MAKALE
    if ($lowerUrl.Contains("arxiv.org") -or $lowerUrl.Contains("dl.acm.org") -or $lowerUrl.Contains("doi.org") -or $lowerUrl.Contains("researchgate.net") -or $lowerUrl.Contains("springer.com") -or $lowerUrl.Contains("sciencedirect.com") -or $lowerUrl.Contains("ieee.org") -or $lowerText.Contains("kdd") -or $lowerText.Contains("acm") -or $lowerText.Contains("ieee") -or $lowerText.Contains("proceedings") -or $lowerText.Contains("conference") -or $lowerText.Contains("arxiv") -or $lowerText.Contains("journal") -or $lowerText.Contains("makale")) {
        return @{
            Label = "Akademik Makale"
            BgColor = "#6a1b9a"
            TextColor = "#ffffff"
            Icon = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>'
        }
    }

    # 3. RESMİ DOKÜMANTASYON
    if ($lowerUrl.Contains("developers.google.com") -or $lowerUrl.Contains("blog.google") -or $lowerUrl.Contains("support.google.com") -or $lowerUrl.Contains("search.google.com") -or $lowerUrl.Contains("w3.org") -or $lowerUrl.Contains("schema.org") -or $lowerUrl.Contains("github.com/google") -or $lowerUrl.Contains("google.com/search")) {
        return @{
            Label = "Resmi Kaynak"
            BgColor = "#2e7d32"
            TextColor = "#ffffff"
            Icon = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
        }
    }

    # 4. HABER / GAZETECİLİK
    if ($lowerUrl.Contains("searchengineland.com") -or $lowerUrl.Contains("bloomberg.com") -or $lowerUrl.Contains("digiday.com") -or $lowerUrl.Contains("reuters.com") -or $lowerUrl.Contains("nytimes.com") -or $lowerUrl.Contains("wsj.com") -or $lowerUrl.Contains("forbes.com") -or $lowerUrl.Contains("techcrunch.com") -or $lowerUrl.Contains("wired.com") -or $lowerUrl.Contains("bbc.com") -or $lowerUrl.Contains("theverge.com") -or $lowerUrl.Contains("businessinsider.com")) {
        return @{
            Label = "Haber Kaynağı"
            BgColor = "#e65100"
            TextColor = "#ffffff"
            Icon = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/></svg>'
        }
    }

    # 5. SEKTÖR ANALİZİ / ARAÇ SİTESİ (Default)
    return @{
        Label = "Sektör Analizi"
        BgColor = "#546e7a"
        TextColor = "#ffffff"
        Icon = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
    }
}

function Create-BadgeHtml {
    param ($Cat)
    return "<span class=""source-badge inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border border-white/10 shadow-sm shrink-0 select-none transition-transform hover:scale-105"" style=""background-color: $($Cat.BgColor); color: $($Cat.TextColor);"">$($Cat.Icon)<span>$($Cat.Label)</span></span>"
}

$blogsDir = Join-Path $PSScriptRoot "..\data\blogs"
$files = Get-ChildItem -Path $blogsDir -Filter "*.json" | Where-Object { $_.Name -ne "_index.json" }

$updatedCount = 0

foreach ($file in $files) {
    $rawContent = [System.IO.File]::ReadAllText($file.FullName, $utf8)
    
    # Flexible H2 regex for Kaynaklar header
    $headerMatch = [regex]::Match($rawContent, '(?i)<h2\b[^>]*>(?:\s*<[^>]+>)*\s*Kaynaklar\s*(?:<[^>]+>)*\s*</h2>')
    if ($headerMatch.Success) {
        $kaynaklarIdx = $headerMatch.Index
        $before = $rawContent.Substring(0, $kaynaklarIdx)
        $after = $rawContent.Substring($kaynaklarIdx)
        
        $newAfter = [regex]::Replace($after, '(?i)<li\b([^>]*)>([\s\S]*?)</li>', {
            param($match)
            $liAttrs = $match.Groups[1].Value
            $liContent = $match.Groups[2].Value
            
            if ($liContent -like '*source-badge*') {
                return $match.Value
            }
            
            $url = ""
            $hrefMatch = [regex]::Match($liContent, '(?i)href=\\?"([^"\\]+)\\?"')
            if ($hrefMatch.Success) {
                $url = $hrefMatch.Groups[1].Value
            }
            
            $cat = Detect-SourceCategory -Url $url -Text $liContent
            $badgeHtml = Create-BadgeHtml -Cat $cat
            
            if ($liContent -like '*<a *' -or $liContent -like '*\u003ca *') {
                $transformedContent = [regex]::Replace($liContent, '(?i)(<a\b[^>]*>|\\u003ca\b[^>]*>)([\s\S]*?)(<\/a>|\\u003c\/a\u003e)', {
                    param($aMatch)
                    $aOpening = $aMatch.Groups[1].Value
                    $aText = $aMatch.Groups[2].Value
                    $aClosing = $aMatch.Groups[3].Value
                    return "<div class=""flex items-center gap-2 shrink-0 self-end sm:self-start flex-wrap"">$badgeHtml$aOpening$aText$aClosing</div>"
                })
                return "<li $liAttrs>$transformedContent</li>"
            } else {
                return "<li $liAttrs>$liContent $badgeHtml</li>"
            }
        })
        
        $finalContent = $before + $newAfter
        if ($finalContent -ne $rawContent) {
            [System.IO.File]::WriteAllText($file.FullName, $finalContent, $utf8)
            $updatedCount++
            Write-Host "Updated source badges in $($file.Name)"
        }
    }
}

Write-Host "Completed updating $updatedCount blog files with source badges."
