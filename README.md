# Boring But Correct

Blog của kênh YouTube [Boring But Correct](https://www.youtube.com/@boringbutcorrect): Business technology, explained plainly. Chạy tại https://boringbutcorrect.com.

## Chạy

```sh
npm install
npm run dev
npm run build
```

## Viết bài

Mỗi bài là một file trong `src/content/posts/`; tên file là URL của bài. Bài nằm trong thư mục này là bài đã đăng. Trường bắt buộc xem `src/content.config.ts`.

Mỗi bài có trang HTML tại `/<slug>` và bản markdown tại `/<slug>.md`, liệt kê trong `/llms.txt`.

## Deploy

Cloudflare Workers (static assets), cấu hình trong `wrangler.jsonc`. Workers Builds build lại mỗi lần push lên `main`.
