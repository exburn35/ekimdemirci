const fs = require('fs');

const dataFile = 'c:\\Users\\Exbur\\Desktop\\AI\\Antigravity Test\\Ekim Demirci Web Site\\data\\blogs\\turkiyenin-en-iyi-15-seo-ajansi.json';
let data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
let content = data.content;

// Remove main image
content = content.replace(/<div class="bs-img">[\s\S]*?<\/div>\s*/, '');

// Remove all figures / divs containing images
content = content.replace(/<div class="wp-block-image">[\s\S]*?<\/div>\s*/g, '');
content = content.replace(/<figure class="wp-block-image[^>]*>[\s\S]*?<\/figure>\s*/g, '');

// Also clean up any standalone imgs if left
content = content.replace(/<img[^>]*>\s*/g, '');

// Remove CLevel Agency TOC item
content = content.replace(/<li class='ez-toc-page-1 ez-toc-heading-level-2'><a class="ez-toc-link ez-toc-heading-1" href="#1-_CLevel_Agency"\s*>1- CLevel Agency<\/a><\/li>/, '');

// Remove CLevel Agency content
content = content.replace(/<h2 class="wp-block-heading"><span class="ez-toc-section" id="1-_CLevel_Agency"><\/span>1- CLevel Agency<span class="ez-toc-section-end"><\/span><\/h2>[\s\S]*?(?=<h2 class="wp-block-heading"><span class="ez-toc-section" id="2-_Aora_Digital_Agency">)/, '');

// Renumbering TOC and headings
for (let i = 2; i <= 16; i++) {
    let newI = i - 1;
    
    // TOC href and text
    let regexToc = new RegExp('href="#' + i + '[-_]?(.*?)"\\s*>' + i + '[.-]\\s*(.*?)</a>', 'g');
    content = content.replace(regexToc, 'href="#' + newI + '_$1" >' + newI + '- $2</a>');
    
    // TOC class ez-toc-heading-i
    let regexClasses = new RegExp(`class="ez-toc-link ez-toc-heading-${i}"`, 'g');
    content = content.replace(regexClasses, `class="ez-toc-link ez-toc-heading-${newI}"`);
    
    // Headings id and text
    let regexHeading = new RegExp('id="' + i + '[-_]?(.*?)"></span>' + i + '[.-]\\s*(.*?)<span', 'g');
    content = content.replace(regexHeading, 'id="' + newI + '_$1"></span>' + newI + '- $2<span');
}

data.content = content;
fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

console.log("Done");
