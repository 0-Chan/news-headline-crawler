# news-headline-crawler

Crawlee를 활용해 만든 뉴스 기사 제목 크롤러입니다.

AWS Lambda에 .zip 파일로 배포하는 것을 상정한 repository입니다.

- 언론사별 가장 많이 본 뉴스(Naver)
<h2 align="center">
  <img src="https://user-images.githubusercontent.com/50035753/209622868-f265fe39-4ce7-46b4-8ba3-3eb35cffdad2.gif" width="686" height="439" align="center"/>
</h2>

## Tech Stack
- Crawlee
- Cheerio

## Script
zip 파일로 압축하는 명령어입니다.
```bash
$ cd ./news-headline-crawer
$ zip -r ./news-headline-crawler.zip ./*
```

### Author
- @0-Chan (maintainer)

