let foundUrls = [];
let keywords = ['scholarship', 'financial', 'assistance', 'training'];
let links = $('a');

for (let i = 0; i < links.length; i++) {
    let $el = $(links[i]);
    let linkHref = $el.attr('href');
    let linkText = $el.text().toLowerCase();

    if (linkHref && linkHref.startsWith('http'))
    {
        let urlText = linkHref.toLowerCase();
        
        for (let k = 0; k < keywords.length; k++)
        {
            if (linkText.includes(keywords[k]) || urlText.includes(keywords[k]))
            {
                foundUrls.push(linkHref);
                break;
            }
        }
    }
}


return
{
    matchingLinks: [...new Set(foundUrls)]
};