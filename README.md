# news-headline-crawler

Crawlee를 활용해 만든 뉴스 기사 제목 크롤러입니다.

AWS Lambda에 .zip 파일로 배포하는 것을 상정한 repository입니다.

## Crawling Target
- 언론사별 가장 많이 본 뉴스(Naver)
<img src="https://user-images.githubusercontent.com/50035753/211458239-157f305a-5e96-4a9e-9de0-eea7757ac1dc.png" width="413" height="299"/>

## Tech Stack
- Crawlee
- Cheerio

## Script
AWS Lambda에 올리기 위해 zip 파일로 압축하는 명령어입니다.
```bash
$ cd ./news-headline-crawer
$ npm install # 반드시 node_modules를 포함하여 압축 해야합니다!
$ zip -r ./news-headline-crawler.zip ./*
```

### Author
- @0-Chan (maintainer)
