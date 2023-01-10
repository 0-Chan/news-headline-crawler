import { CheerioCrawler, createCheerioRouter } from 'crawlee';

export const handler = async(event) => {
  const router = createCheerioRouter();

  const headlineUrl = 'https://news.naver.com/main/list.naver';

  router.addDefaultHandler(async ({ enqueueLinks, log }) => {
    log.info(`enqueueing new URLs`);
    await enqueueLinks({
      globs: [`${headlineUrl}?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y`],
      label: 'detail',
    });
  });

  const headlines = [];
  router.addHandler('detail', async ({ $, log }) => {
  $('#_rankingList0 > li').each((index, element) => {
      const headlineTitle = $(element).find('div > div> div > a').text();
      const headlineUrl = $(element).find('div > div> div > a').attr('href');
      headlines.push({ title: headlineTitle, url: headlineUrl});
      log.info(`${index} : ${headlineTitle}, ${headlineUrl}\n`);
    });
  });

  const crawler = new CheerioCrawler({
    requestHandler: router,
  });

  const startUrls = [`${headlineUrl}`];

  await crawler.run(startUrls);

  const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,X-Amz-Security-Token,Authorization,X-Api-Key,X-Requested-With,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "X-Requested-With": "*"
 };

  const response = {
      statusCode: 200,
      body: JSON.stringify(headlines),
      headers,
  };
  return response;
};
