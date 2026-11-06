---
version: 1
slug: "src-pages-slug-astro"
primary_target: "src/pages/[slug].astro"
related_targets: ["src/pages/index.astro","src/layouts/Base.astro"]
---

# Blog: trang bài và trang chủ

Scope: trang bài (`src/pages/[slug].astro`), trang chủ (`src/pages/index.astro`), khung chung (`src/layouts/Base.astro`). Visitor mode: Read.

Audience: quản lý/điều hành, BA/PM/product, kiến trúc sư/dev senior đọc tiếng Việt. Job: hiểu một quyết định công nghệ trong bối cảnh kinh doanh và kiểm được từng phát biểu, rồi đọc bài cùng chủ đề hoặc theo dõi qua RSS. Blog là nơi chia sẻ kiến thức độc lập (quyết định của người dùng 2026-11-06); video chỉ đi kèm khi có, nhiều bài không có video.
Constraints: nhận diện kênh bắt buộc (PRODUCT.md). Không hiện tên tác giả. Tránh: blog công nghệ đại trà (card bo góc, gradient, ảnh stock), trang tài liệu kỹ thuật (sidebar, mono khắp nơi), báo cáo doanh nghiệp (khô, nhiều biểu đồ).
Content: ký hiệu nguồn gắn vào từng phát biểu ngay trong đoạn; bảng nguồn đầy đủ ở cuối bài. Trang chủ mở bằng bản đồ metro của series.

## Direction contract

THESIS: Blog là sổ giờ tàu của một tuyến sáu trạm chủ đề: mỗi bài là một chuyến có ngày và trạm; mỗi phát biểu mang ký hiệu chú thích như ghi chú ngoại lệ của bảng giờ, giải ở lề. Từ chối bố cục blog mặc định: lưới card bài viết có ảnh bìa và cột chữ trôi không có điểm neo.

OWN-WORLD: nền trắng, mực #1A1A1A, đỏ gạch #B53B12 chỉ cho trạm đang mở, ký hiệu nguồn, link khi hover, và đúng một điểm đang xét trong mỗi hình giải thích (không nền đỏ nhạt) — quyết định của người dùng 2026-11-06. Hình giải thích dựng bằng HTML/CSS theo cùng ngữ pháp kẻ 3px và hairline, chữ tự xuống dòng; nội dung giả định ghi rõ trong chú thích. Overpass cho chữ đọc và tiêu đề (ExtraBold cho tiêu đề), Overpass Mono chỉ cho số: số bài, ngày, mốc thời gian, số chú thích. Kẻ ngang dày 3px mở mỗi khối như đầu bảng giờ, hairline 1px giữa các hàng. Không hộp, không card, không bo góc. Trạng thái phát biểu là hình dạng ký hiệu: tròn đặc kiểm chứng, nửa tròn có tranh luận, vòng rỗng OPEN, cùng ngữ pháp với trạm metro. Raised from Cracktro: không gì bị nhốt trong hộp. Raised from Cutting bench: trạng thái là ký hiệu, không chỉ màu. Raised from Miura: một lưới 12 cột cho bảng tuyến, cột đọc và lề chú thích. Raised from Cyclorama: mỗi phát biểu có neo riêng. Raised from Ice press: điều hướng theo số bài kèm ngày thật (bài đánh số theo ngày đăng, quyết định của người dùng 2026-11-06). Raised from Emigre: thang cỡ chữ cố định.

STORY: người đọc thấy mình đang ở trạm nào của tuyến, đọc câu hỏi và trả lời ngắn của bài, tin vì thấy nguồn ngay cạnh từng phát biểu, rồi đi chuyến kế, bài cùng trạm, hoặc xem video đi kèm khi có.

FIRST VIEWPORT: trang chủ: hàng tên kênh và tagline, kẻ 3px, sơ đồ tuyến sáu trạm full chiều rộng với trạm hiện tại đỏ, bên dưới bảng giờ mỗi trạm có bài (Số, Bài kèm tóm tắt, Đăng, Kiểm chứng, Đọc, Video hoặc —); các trạm chưa có bài ghi "chưa khởi hành". Trang bài: sơ đồ tuyến thu gọn (là link về trạm), tiêu đề lớn, tóm tắt, hàng meta kiểu bảng giờ (Trạm, Đăng, Kiểm chứng, Đọc, Video khi có, Bản markdown), mục lục khi có từ 3 mục, rồi video đi kèm khi có; cột đọc ~68 ký tự bên trái, lề chú thích bên phải. Signature interaction: chạm ký hiệu nguồn thì nhảy tới ghi chú tương ứng và đánh dấu nó; ghi chú có link về đúng đoạn.

FORM: Bảng giờ tàu (sổ giờ tàu in), vị trí 4 trong danh sách xếp theo độ cộng hưởng. seed:8b7015e5d217ffd1

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
