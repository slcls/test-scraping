navigate(input.url);

wait('body');

let parsedData = parse();
let linksToScrape = parsedData.matchingLinks;

if (linksToScrape && linksToScrape.length > 0)
{
    for (let i = 0; i < linksToScrape.length; i++)
    {

        next_stage({ url: linksToScrape[i] });
    }
}