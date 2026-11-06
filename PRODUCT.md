# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Người đọc tiếng Việt làm ở chỗ kinh doanh gặp công nghệ:

- Quản lý, điều hành: ra quyết định đầu tư công nghệ, cần thấy tác động kinh doanh.
- BA, PM, product: đứng giữa nghiệp vụ và đội kỹ thuật.
- Kiến trúc sư, dev senior: làm kỹ thuật, muốn hiểu phía kinh doanh.

Họ đến từ tìm kiếm Google, RSS, link chia sẻ, mô tả video YouTube, hoặc từ agent AI đọc bản markdown của bài.

## Product Purpose

Blog chia sẻ kiến thức của "Boring But Correct" (Business technology, explained plainly). Mỗi bài là một bài đọc độc lập, sâu hơn video: khung gốc, định nghĩa chính xác, nguồn nói nguyên văn gì, chỗ còn tranh luận, và thứ mang vào công việc được. Không phải nơi chép lại video. Nhiều bài không có video; khi có, video là phần đi kèm. Thành công là người đọc hiểu được một quyết định công nghệ trong bối cảnh kinh doanh, kiểm được từng phát biểu, rồi đọc bài cùng chủ đề hoặc theo dõi qua RSS hay kênh YouTube.

## Positioning

Mỗi phát biểu và con số trong bài đều có nguồn kiểm được, kèm ngày kiểm chứng lần cuối. Nội dung đi qua quy trình claim-first của repo `self-learning` (bảng phát biểu → trạng thái → nguồn → độ tin cậy) trước khi thành bài.

## Operating Context

- Nội dung nguồn: doc trong `self-learning/docs/business-technology-strategy/` và phụ đề tập (`self-learning/youtube/<series>/<tập>/captions.vi.txt`).
- Nội dung xếp theo một đường metro sáu trạm, mỗi trạm là một chủ đề: 01 Business, 02 Domain, 03 Architecture, 04 Data, 05 Reporting, 06 Automation. Bài nào cũng thuộc một trạm.
- Đọc trên điện thoại và trên máy tính.

## Capabilities and Constraints

- Astro 7, build tĩnh, host trên Cloudflare Pages gói Free, domain `boringbutcorrect.com`.
- Mỗi bài có trang HTML, bản `/<slug>.md`, JSON-LD (`Article`, thêm `VideoObject` khi có video), mục nguồn, thời gian đọc, mục lục khi bài dài. Video, số tập YouTube là tùy chọn. Có `rss.xml`, `sitemap-index.xml`, `robots.txt`, `llms.txt`.
- Bài nào nằm trong `src/content/posts/` là bài đã đăng; không có bản nháp.
- Văn bản tiếng Việt có dấu, thuật ngữ kỹ thuật tiếng Anh.

## Brand Commitments

- Tên: Boring But Correct. Tagline: "Business technology, explained plainly."
- Nhận diện kênh là bắt buộc: nền trắng `#FFFFFF`, mực `#1A1A1A`, nhấn đỏ gạch `#B53B12`, Overpass (tiêu đề) và Overpass Mono (số tập, số trạm), đường metro sáu trạm. Màu lấy từ banner kênh; font nhận dạng bằng mắt từ banner, chưa đối chiếu file thiết kế gốc.
- Không hiện tên tác giả; chỉ hiện tên kênh.
- Không khẳng định điều video và nguồn không nói.

## Evidence on Hand

- Thumbnail tập 00: `public/og/ep00.jpg`.
- Font Overpass, Overpass Mono (SIL OFL 1.1) trong `self-learning/youtube/thumbnail/fonts/`.
- Video tập 00: `sK5H9nj-bUo`.
- Chưa có bài hoàn chỉnh nào, chưa có số liệu người đọc, chưa có lời chứng thực. Không được bịa.

## Product Principles

- Có nguồn hoặc không viết.
- Video và bài là một cặp: bài dẫn về video, video dẫn về bài.
- Người đọc và agent đọc cùng một nội dung: HTML sạch và bản markdown tương đương.
- Luôn có cả vế kinh doanh lẫn vế công nghệ.

## Accessibility & Inclusion

Văn bản tiếng Việt có dấu phải hiển thị đúng ở mọi cỡ chữ; bảng phát biểu là `<table>` thật, không dùng ảnh.
