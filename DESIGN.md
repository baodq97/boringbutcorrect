---
name: Boring But Correct
description: Business technology, explained plainly.
colors:
  ground: "#ffffff"
  ink: "#1a1a1a"
  accent: "#b53b12"
  muted: "#5c5c5c"
  hair: "#d4d4d4"
  accent-wash: "#f7ebe6"
typography:
  display:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.2
  title:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  note:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  numeral:
    fontFamily: "Overpass Mono, ui-monospace, monospace"
    fontWeight: 600
    fontFeature: "\"tnum\" 1"
rounded:
  none: "0"
  dot: "50%"
spacing:
  gutter: "24px"
  gutter-narrow: "20px"
  container: "1152px"
components:
  play-button:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
  play-button-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ground}"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    padding: "0.5rem 1rem"
  station-dot:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.dot}"
    size: "21px"
  station-dot-current:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.dot}"
    size: "21px"
  column-label:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  sidenote:
    textColor: "{colors.muted}"
    typography: "{typography.note}"
---

# Design System: Boring But Correct

## Overview

**Creative North Star: "Sổ giờ tàu in"**

Blog được dựng như một cuốn sổ giờ tàu: một tuyến sáu trạm chủ đề, mỗi bài là một chuyến có số và ngày đăng thật, mỗi phát biểu mang một ký hiệu chú thích giải ở lề như ghi chú ngoại lệ của bảng giờ. Mọi khối mở bằng một đường kẻ ngang dày 3px như đầu bảng, các hàng tách nhau bằng hairline 1px. Không có gì bị nhốt trong hộp: không card, không bo góc, không bóng, không ảnh bìa.

Mật độ là mật độ của tài liệu tra cứu: chữ đọc lớn (18px, line-height 1.7) trong cột khoảng 68 ký tự, dữ liệu xếp thành cột có nhãn, số luôn bằng chữ mono đều nhịp. Màu gần như chỉ có đen trên trắng; đỏ gạch là tín hiệu, không phải trang trí. Trạng thái của một phát biểu là hình dạng ký hiệu, cùng ngữ pháp với chấm trạm metro, nên đọc được cả khi không phân biệt màu.

Hình giải thích dựng bằng HTML/CSS theo đúng ngữ pháp kẻ 3px và hairline, chữ tự xuống dòng, không ảnh raster. Nhận diện kênh (nền trắng, mực, đỏ gạch, Overpass, đường metro sáu trạm) là cam kết bắt buộc từ banner kênh.

**Key Characteristics:**
- Kẻ 3px mở khối, hairline 1px giữa hàng; không hộp, không bo góc, không bóng.
- Đỏ gạch chỉ đánh dấu chỗ đang xét: trạm hiện tại, ký hiệu nguồn, hover/focus, một điểm trong mỗi hình.
- Overpass cho chữ, Overpass Mono chỉ cho số.
- Trạng thái nguồn là hình dạng: tròn đặc, nửa tròn, vòng rỗng.
- Lưới 12 cột: cột đọc 7 cột, lề chú thích 5 cột.

## Colors

Đơn sắc mực trên giấy trắng, một màu nhấn đỏ gạch dùng như mực đỏ đánh dấu trong sổ giờ.

### Primary
- **Đỏ gạch** (accent): trạm đang xét trên sơ đồ tuyến, số và ký hiệu nguồn (mark trong câu, đầu ghi chú lề, cột số và trạng thái của bảng nguồn, chú giải), màu link khi hover, viền focus, nền nút video khi hover, và không quá một điểm đang xét trong mỗi hình giải thích (viền hoặc chữ, không phải nền). Tương phản trên nền trắng khoảng 5.9:1, đủ cho chữ nhỏ.

### Neutral
- **Giấy trắng** (ground): nền duy nhất của mọi trang; cũng là màu chữ trên khối mực (nút video, skip link, nhãn đen trong hình).
- **Mực** (ink): chữ, tiêu đề, mọi đường kẻ cấu trúc (3px và 1px dưới hàng tiêu đề bảng), viền chấm trạm.
- **Xám chì** (muted): nhãn cột, tóm tắt dưới tiêu đề bài trong bảng giờ, ngày phụ, thân ghi chú lề, chú thích hình, gạch chân link ở trạng thái nghỉ. Tương phản khoảng 6.7:1.
- **Hairline** (hair): đường 1px giữa các hàng bảng, mục lục, danh sách; vạch kẻ chéo của ô trống trong ma trận.
- **Vệt đỏ nhạt** (accent-wash): chỉ là nền trạng thái tạm, không bao giờ là nền nghỉ: ghi chú lề hoặc hàng bảng nguồn vừa được nhảy tới (`:target`), và hàng bảng giờ trang chủ khi hover.

### Named Rules
**The Red Means Here Rule.** Đỏ gạch chỉ trỏ vào chỗ đang xét: trạm hiện tại, ký hiệu nguồn, hover/focus, và không quá một điểm trong mỗi hình. Không dùng đỏ cho tiêu đề, nhấn mạnh hay trang trí.

**The No Resting Wash Rule.** Vệt đỏ nhạt chỉ xuất hiện như phản hồi trạng thái (nhảy tới, hover). Trong hình giải thích, điểm đang xét được đánh dấu bằng viền hoặc chữ đỏ, không bằng nền đỏ nhạt.

## Typography

**Display Font:** Overpass (với system-ui, sans-serif), ExtraBold 800 cho tiêu đề
**Body Font:** Overpass (với system-ui, sans-serif)
**Label/Mono Font:** Overpass Mono (với ui-monospace, monospace), chỉ cho số

**Character:** Một họ chữ biển báo giao thông, đọc rõ tiếng Việt có dấu ở mọi cỡ; bản mono cùng họ cho số mang cảm giác bảng giờ in. Cả hai tự host, `font-display: swap`.

### Hierarchy
- **Display** (800, 56px, 1.08, -0.02em): tiêu đề bài, `text-wrap: balance`. Dưới 720px còn 40px, line-height 1.12.
- **Headline** (800, 28px, 1.2): tiêu đề mục trong bài và tiêu đề trạm trên trang chủ, luôn có kẻ 3px phía trên.
- **Title** (700, 22px, 1.3): tiêu đề phụ trong bài, tên bài trong bảng giờ, tóm tắt dưới tiêu đề bài (dek 22px, 400, line-height 1.5).
- **Body** (400, 18px, 1.7): chữ đọc, cột tối đa 7/12 lưới (khoảng 68 ký tự; 42rem khi một cột).
- **Note** (400, 14px, 1.5): ghi chú lề, chú thích hình, bảng nguồn, chân trang.
- **Label** (600, 12px, 0.06em, viết hoa): nhãn cột bảng, nhãn trường meta, nhãn trạng thái nguồn, chú giải, nhãn trục trong hình.
- **Numeral** (Overpass Mono, chữ số đều): số bài, số trạm, ngày, thời lượng, số chú thích, số liệu trong hình. Số bài trong bảng giờ 28px.

Thang cỡ cố định: 12, 14, 16, 18, 22, 28, 40, 56px. Không dùng cỡ fluid (`clamp`).

### Named Rules
**The Mono Is For Numbers Rule.** Overpass Mono chỉ cho số (số bài, ngày, mốc giờ, số chú thích, phần trăm). Không dùng mono cho câu chữ, tên, code block trang trí hay nhãn.

**The Label Belongs To Data Rule.** Nhãn chữ hoa 12px chỉ đứng làm đầu cột hoặc tên trường ngay trên dữ liệu của nó. Không đặt nhãn chữ hoa làm dòng mở trên một tiêu đề.

## Layout

Khung một cột tối đa 1152px, lề hai bên 24px (20px dưới 720px). Trang bài dùng lưới 12 cột với khoảng cách bằng lề: tiêu đề 9 cột, tóm tắt, mục lục, video và cột đọc 7 cột, hàng meta full chiều rộng. Ghi chú lề float sang 5 cột bên phải, tính theo container query của cột đọc, neo ngay sau câu mang ký hiệu.

Hai điểm gãy: dưới 1100px ghi chú lề rời lề và chen vào dòng chảy ngay dưới đoạn, cột đọc full chiều rộng tối đa 42rem; dưới 720px mọi lưới nhiều cột (sơ đồ tuyến, bảng giờ, bảng nguồn, các hình) xếp thành một cột, sơ đồ tuyến chuyển thành dọc với đường nối bên trái, bảng thành khối lưới có nhãn chèn trước giá trị.

Nhịp dọc: khối lớn cách nhau 3.5 đến 6rem (mục 3.5rem, liên quan và chuyến khác 5rem, chân trang 6rem), hình giải thích 2.75rem trên, 3rem dưới. Mỗi khối mở bằng kẻ 3px rồi đệm 0.75rem trước tiêu đề.

**The Timetable Head Rule.** Khối mới mở bằng kẻ ngang 3px mực; hàng trong khối tách bằng hairline 1px. Hàng tiêu đề cột ngăn với thân bảng bằng 1px mực.

## Elevation & Depth

Phẳng hoàn toàn. Không đổ bóng, không lớp nổi. Chiều sâu và thứ bậc đến từ độ dày đường kẻ (3px, 2px trong hình, 1px mực, 1px hairline) và độ đậm chữ. Ngoại lệ duy nhất là hiệu ứng tới nơi của ghi chú lề: một quầng spread 0.5rem không lệch, mờ dần từ đỏ 22% về vệt đỏ nhạt trong 1.6s (`cubic-bezier(0.16, 1, 0.3, 1)`), tắt khi người dùng giảm chuyển động.

**The Ink Weight Rule.** Thứ bậc được biểu đạt bằng độ dày nét kẻ, không bằng bóng hay nền.

## Shapes

Mọi góc vuông. Hình tròn chỉ có một nghĩa: chấm trạm và ký hiệu trạng thái, cùng một ngữ pháp. Ký hiệu trạng thái nguồn: tròn đặc là đã kiểm chứng, nửa tròn (nửa trái đặc) là có tranh luận, vòng rỗng là OPEN; ba hình phân biệt được không cần màu. Mũi tên trong hình và biểu tượng play dựng bằng tam giác viền CSS, không dùng ký tự hay icon font. Ô trống trong ma trận dùng vạch chéo hairline 135°.

**The Circle Is A Station Rule.** Hình tròn chỉ dành cho chấm trạm và ký hiệu trạng thái. Không bo góc khối, nút hay ảnh.

## Components

### Sơ đồ tuyến (signature)
Sáu chấm tròn 21px viền mực 3px nối bằng đường 3px, nhãn số mono và tên trạm bên dưới. Trạm hiện tại: chấm đặc đỏ phóng 1.35 lần, số và tên đỏ. Trạm chưa có bài: tên xám chì, chữ thường, ghi "chưa khởi hành" 12px. Bản thu gọn trên trang bài: 168px, chấm 12px viền 2px, cả cụm là link về trạm. Dưới 720px bản đầy đủ chuyển thành dọc.

### Bảng giờ (trang chủ)
Mỗi trạm một khối: tiêu đề Headline có số trạm mono, rồi bảng Số, Bài kèm tóm tắt, Đăng, Kiểm chứng, Đọc, Video (hoặc gạch ngang dài khi không có). Số bài mono 28px. Cột ngăn bằng hairline dọc, hàng bằng hairline ngang. Hover hàng: vệt đỏ nhạt. Bài mới nhất ở trên.

### Hàng meta bài
Dải full chiều rộng giữa kẻ 3px trên và 1px mực dưới; mỗi trường là nhãn Label trên giá trị 16px/600, các trường ngăn bằng hairline dọc. Dưới 720px thành lưới hai cột.

### Ký hiệu nguồn và ghi chú lề (signature)
Trong câu: số mono 12px đỏ kèm ký hiệu trạng thái, dính vào từ đứng trước để không rơi xuống dòng mới. Ở lề: kẻ 1px mực trên, đầu ghi chú đỏ (số, ký hiệu, nhãn trạng thái chữ hoa), thân 14px xám chì. Chạm ký hiệu thì nhảy tới ghi chú và ghi chú sáng lên rồi mờ về vệt đỏ nhạt; số ghi chú dẫn tới hàng trong bảng nguồn, hàng có link "Về đoạn".

### Bảng nguồn và chú giải
Cuối bài: một hàng chú giải ba trạng thái (Label, ký hiệu đỏ), rồi bảng #, Trạng thái, Nguồn, Về đoạn ở cỡ 14px; số và trạng thái đỏ. Dưới 720px mỗi hàng thành lưới ba cột.

### Hình giải thích
Một hình là một `figure` HTML/CSS: các khối kẻ 3px trên (hoặc viền 2px cho tầng xếp chồng), nhãn Label, chữ thật tự xuống dòng, chú thích dưới kẻ 1px mực với "Hình" đậm và số mono. Không quá một điểm đang xét được tô đỏ, bằng viền hoặc chữ; nội dung giả định phải được ghi trong chú thích. Dưới 720px mọi hình về một cột, mũi tên ngang xoay thành dọc.

### Nút video
Khối mực full chiều rộng dưới ảnh 16:9, chữ trắng 16px/700, tam giác play CSS, thời lượng mono. Hover và focus: nền đỏ gạch (chuyển 0.2s). Bấm thì thay bằng iframe youtube-nocookie.

### Link và focus
Link kế thừa màu chữ, gạch chân 1px xám chì lệch 0.2em; hover chuyển cả chữ và gạch sang đỏ. Link điều hướng đậm (mục lục, chuyến, cùng trạm) bỏ gạch chân, hiện lại khi hover. Focus: viền 2px đỏ, lệch 3px.

### Điều hướng chuyến
Ba cột dưới kẻ 3px: Chuyến trước, Chuyến kế, Bảng giờ; mỗi cột là nhãn Label, link đậm có số bài mono, ngày xám. Khi không có chuyến, ghi "Đây là chuyến đầu" hoặc "Chưa khởi hành" bằng xám chì.

### Chân trang
Một hàng dưới kẻ 3px: tên kênh đậm 16px bên trái, ba icon YouTube, TikTok, RSS 20px bên phải (đường vẽ Simple Icons, CC0), vùng bấm 44px, màu mực, hover đỏ. Không có chữ giải thích; agent tìm `llms.txt` và bản `.md` qua thẻ `link` trong `head`.

### Trang phụ
Trang không phải bài (Cách blog kiểm chứng, 404) dùng cùng khung `.article`: tiêu đề Display, đoạn mở 22px, cột đọc 7/12. Trang không thuộc trạm thì không có sơ đồ tuyến và cách kẻ đầu trang 3rem. Hàng chú giải cuối mỗi bài có link tới trang Cách blog kiểm chứng.

### Favicon và ảnh chia sẻ
Favicon là một chấm trạm đỏ viền trắng trên đường metro mực, nền trắng; có bản SVG, ICO 32px và apple-touch-icon 180px. Ảnh chia sẻ mặc định 1200×630 (`/og/site.png`): kẻ 6px, tên kênh 104px, tagline, sơ đồ sáu trạm với trạm 01 đỏ. Bài có ảnh riêng thì dùng ảnh của bài.

## Do's and Don'ts

### Do:
- **Do** mở mỗi khối bằng kẻ 3px mực và tách hàng bằng hairline 1px.
- **Do** đặt mọi con số (số bài, ngày, giờ, phần trăm, số chú thích) bằng Overpass Mono chữ số đều.
- **Do** biểu đạt trạng thái nguồn bằng hình dạng ký hiệu (tròn đặc, nửa tròn, vòng rỗng), màu chỉ là lớp thêm.
- **Do** dựng hình giải thích bằng HTML/CSS theo ngữ pháp kẻ của trang, chữ tự xuống dòng, và ghi rõ phần giả định trong chú thích.
- **Do** giữ cột đọc trong 7/12 lưới và đưa chú thích ra lề phải khi màn hình từ 1100px trở lên.
- **Do** dùng thang cỡ cố định 12, 14, 16, 18, 22, 28, 40, 56px.

### Don't:
- **Don't** dùng card, hộp có nền, bo góc hay đổ bóng.
- **Don't** dùng đỏ gạch ngoài trạm hiện tại, ký hiệu nguồn, hover/focus và một điểm đang xét trong mỗi hình.
- **Don't** dùng vệt đỏ nhạt làm nền nghỉ, kể cả trong hình giải thích.
- **Don't** dùng Overpass Mono cho chữ, hay một font khác ngoài Overpass và Overpass Mono.
- **Don't** đặt nhãn chữ hoa nhỏ làm dòng mở trên tiêu đề; nhãn chỉ đứng trên dữ liệu của nó.
- **Don't** dùng lưới bài có ảnh bìa, sidebar, hay ảnh raster cho hình giải thích.
- **Don't** dùng ký tự hay icon font làm biểu tượng; mũi tên và play là tam giác CSS.
