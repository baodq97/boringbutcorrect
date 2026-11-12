---
title: "Đổi sang hệ thống kho mới, sao khách vẫn bị hủy đơn vì hết hàng?"
seoTitle: "Hệ thống kho mới, sao khách vẫn bị hủy đơn hết hàng?"
description: "Dự án đúng hạn, đúng ngân sách vẫn có thể không mang lại lợi ích. Sáu câu hỏi phải trả lời trước khi duyệt tiền cho một khoản đầu tư công nghệ."
station: 1
published: 2026-11-06
verified: 2026-11-06
image: /og/ep00.jpg
video:
  id: sK5H9nj-bUo
  duration: "9:20"
  episode: 0
sources:
  - title: "Porter, M. E. (1996). What Is Strategy? Harvard Business Review, Nov–Dec 1996"
    url: https://hbr.org/1996/11/what-is-strategy
  - title: "Rumelt, R. (2011). The perils of bad strategy. McKinsey Quarterly, June 2011"
    url: https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-perils-of-bad-strategy
  - title: "Weill, P. & Woodham, R. (2002). Don't Just Lead, Govern: Implementing Effective IT Governance. MIT CISR WP 326"
    url: https://cisr.mit.edu/publication/MIT_CISRwp326_ImplementingEffectiveITGov
  - title: "Weill, P. (2004). Don't Just Lead, Govern: How Top-Performing Firms Govern IT. MIT CISR WP 341"
    url: https://cisr.mit.edu/publication/MIT_CISRwp341_HowTopPerfFirmsGovIT
  - title: "ISACA Support (2025). Are governance and management activities the responsibility of the BoD?"
    url: https://support.isaca.org/s/article/Governance-and-management-activities-are-the-responsibility-of-the-BoD-1597877237345
  - title: "HM Treasury (2026). Guidance on Developing Business Cases for Projects and Programmes"
    url: https://www.gov.uk/government/publications/guidance-on-developing-business-cases
  - title: "HM Treasury (2026). The Green Book"
    url: https://www.gov.uk/government/publications/the-green-book--2
  - title: "Shpilberg, D. và cộng sự (2007). Avoiding the Alignment Trap in IT. MIT Sloan Management Review (Bain)"
    url: https://www.bain.com/insights/avoiding-the-alignment-trap-in-it/
  - title: "The Open Group (2022). The TOGAF Standard, 10th Edition: Business Architecture (mô tả nhà xuất bản)"
    url: https://books.google.com/books/about/The_TOGAF_Standard_10th_Edition_Business.html?id=xveBEAAAQBAJ
---

Một công ty bán hàng qua mạng đưa hệ thống quản lý kho mới vào chạy, đúng hạn và đúng ngân sách. Một năm sau, cứ 100 đơn vẫn có vài đơn bị hủy vì hết hàng. Đây là ví dụ giả định, nhưng câu hỏi thì có thật: dự án đó thành công hay thất bại?

**Trả lời ngắn:** không ai trả lời được, vì không ai đặt mốc để đo. Dự án chỉ thay phần mềm. Lợi ích không đến từ phần mềm mà từ thay đổi trong cách làm việc mà phần mềm làm cho khả thi. Muốn biết một khoản đầu tư công nghệ có đáng không, phải đặt nó lên bản đồ của cả doanh nghiệp, rồi hỏi đủ sáu câu trước khi duyệt tiền.

## Bản đồ: hai trục, không phải một tháp

Cách vẽ quen thuộc là một tháp nhiều tầng: chiến lược, nghiệp vụ, dữ liệu và ứng dụng, hạ tầng. Tháp ấy đúng nhưng thiếu. Nó mô tả doanh nghiệp *là gì*, nhưng không nói doanh nghiệp *thay đổi thế nào*. Bài này dùng hai trục:


<figure class="fig fig-axes">
<div class="axes-col">
<p class="axes-h"><span class="no">A</span> Doanh nghiệp là gì</p>
<ol class="tower">
<li>Chiến lược và mô hình kinh doanh</li>
<li>Kiến trúc nghiệp vụ<small>capability, value stream, tổ chức, thông tin</small></li>
<li class="hit">Dữ liệu và ứng dụng<small>Dự án chỉ thay phần mềm ở tầng này</small></li>
<li>Hạ tầng</li>
</ol>
</div>
<p class="axes-gap">Khoảng trống ở A thành khoản đầu tư ở B</p>
<div class="axes-col">
<p class="axes-h"><span class="no">B</span> Doanh nghiệp thay đổi thế nào</p>
<ol class="loop">
<li>Governance<small>ai được quyết, theo luật nào</small></li>
<li>Portfolio<small>chọn khoản nào</small></li>
<li>Delivery<small>xây hoặc mua</small></li>
<li>Operate<small>vận hành</small></li>
<li>Measure<small>đo lợi ích, rồi quay lại Governance</small></li>
</ol>
</div>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Hai trục. Trục A mô tả doanh nghiệp, trục B là vòng quyết định cắt ngang mọi tầng của A. Ô đỏ là chỗ duy nhất dự án trong ví dụ chạm tới.</figcaption>
</figure>

Khoản đầu tư công nghệ nằm ở chỗ hai trục gặp nhau. Trục B chọn một khoản đầu tư để đóng một khoảng trống ở trục A.

Cách chia hai trục là cách sắp xếp của bài này, không phải một chuẩn ngành. Nó neo vào hai nguồn. TOGAF 10 xếp business model, capability và value stream vào cùng bộ hướng dẫn Business Architecture, tức là nằm bên trong kiến trúc doanh nghiệp chứ không xếp thành tầng riêng.[^1] ISACA tách governance (đánh giá, định hướng, giám sát) khỏi management (lập kế hoạch, xây, vận hành, giám sát).[^2]

Trong ví dụ, dự án chỉ chạm một ô của trục A: dữ liệu và ứng dụng. Nhân viên kho vẫn ghi hàng xuất vào cuối ngày, nên suốt cả ngày trang bán hàng vẫn bán theo một con số đã cũ.

<figure class="fig fig-day">
<div class="day-scale" aria-hidden="true"><span>08:00</span><span>12:00</span><span>17:00</span></div>
<div class="day-track"><p class="day-label">Trang bán hàng</p><div class="day-bar day-bar-sell"><span>Bán cả ngày theo số tồn chốt lúc 08:00</span></div></div>
<div class="day-track"><p class="day-label">Kho<small>mỗi vạch là một lần xuất hàng</small></p><div class="day-bar day-bar-ship"><i></i><i></i><i></i><i></i><i></i><b>Ghi hàng xuất một lần</b></div></div>
<div class="day-track day-gap"><p class="day-label">Con số trên web</p><div class="day-bar day-bar-gap"><span>Lệch dần so với kho thật, đơn bán ra món đã hết</span></div></div>
<figcaption><span class="fig-no">Hình <span class="no">2</span></span> Một ngày trong ví dụ giả định. Hàng xuất suốt ngày nhưng chỉ được ghi lúc cuối ngày, nên web bán theo một con số cũ. Hệ thống kho mới không đổi được nhịp ghi này.</figcaption>
</figure>

## Mục tiêu chưa phải chiến lược

"Tăng doanh thu" là một mục tiêu. Porter viết rằng cốt lõi của chiến lược là chọn những gì không làm.[^3] Rumelt gọi chiến lược là hành động ăn khớp có lập luận đứng sau, gồm ba phần: chẩn đoán, hướng đi, và các hành động ăn khớp với nhau.[^4]


<figure class="fig fig-kernel">
<ol class="kernel">
<li><p class="kernel-h"><span class="no">1</span> Chẩn đoán</p><p class="kernel-def">Thách thức thật là gì</p><p class="kernel-ex">Lời hứa giao hàng không đáng tin vì số tồn kho sai</p></li>
<li><p class="kernel-h"><span class="no">2</span> Hướng đi</p><p class="kernel-def">Cách tiếp cận thách thức ấy</p><p class="kernel-ex">Chỉ hứa giao khi chắc có hàng, ưu tiên khách ở gần kho</p></li>
<li><p class="kernel-h"><span class="no">3</span> Hành động ăn khớp</p><p class="kernel-def">Những việc đỡ nhau</p><p class="kernel-ex">Sửa cách ghi hàng xuất trước, nối hệ thống sau</p></li>
</ol>
<p class="kernel-cost"><strong>Cái giá</strong> Bỏ bớt đơn ở xa và những món khó giữ. Mục tiêu doanh thu có thể phải hạ.</p>
<figcaption><span class="fig-no">Hình <span class="no">3</span></span> Ba phần của một chiến lược theo Rumelt, áp vào ví dụ. Dòng cuối là phần Porter nhấn mạnh: chọn cũng là bỏ.</figcaption>
</figure>

Không nói được khoản đầu tư phục vụ lựa chọn nào thì đó là làm tốt hơn việc đang làm. Việc ấy vẫn có thể đáng làm, nhưng nó không phải chiến lược.

## Ai được quyết: governance khác management

IT governance là việc định ra ai có quyền quyết điều gì và ai chịu trách nhiệm.[^5] Hội đồng không chấm từng phương án. Họ đặt luật chơi, tiêu chí và ngưỡng, rồi theo dõi. Ban điều hành chấm điểm, chọn và làm trong luật chơi ấy.[^2] Vì vậy phương án điểm cao nhất vẫn chưa phải phương án được duyệt.

<figure class="fig fig-gov">
<div class="gov-band"><p class="gov-who">Hội đồng quản trị<small>Governance</small></p><p class="gov-verbs">Đánh giá, Định hướng, Giám sát</p><p class="gov-out">Đặt luật chơi, tiêu chí, ngưỡng duyệt</p></div>
<p class="gov-link"><span>Giao quyền theo ngưỡng</span><span>Báo cáo, giải trình</span></p>
<div class="gov-band"><p class="gov-who">Ban điều hành<small>Management</small></p><p class="gov-verbs">Lập kế hoạch, Xây, Vận hành, Giám sát</p><p class="gov-out">Chấm điểm, chọn, làm trong luật chơi ấy</p></div>
<figcaption><span class="fig-no">Hình <span class="no">4</span></span> Hai tầng quyết định theo cách ISACA phân biệt. Phương án điểm cao nhất ở tầng dưới vẫn phải nằm trong ngưỡng tầng trên đặt ra.</figcaption>
</figure>

Không có cách chia quyền tốt nhất chung. Trong một khảo sát hơn 250 doanh nghiệp, nhóm dẫn đầu về tăng trưởng nghiêng về phân quyền, nhóm dẫn đầu về lợi nhuận nghiêng về tập trung.[^6] Cách chia quyền nên phục vụ đúng mục tiêu công ty đã chọn.

## Hồ sơ đầu tư là quá trình suy nghĩ

Bộ hướng dẫn business case của Bộ Tài chính Anh nói thẳng: hồ sơ đầu tư là quá trình suy nghĩ, không phải giấy để xin duyệt. Nó đi qua năm góc nhìn trên cùng một đề xuất: chiến lược, kinh tế, thương mại, tài chính, quản lý.[^7] Hai điểm đáng mượn:

- **Trừ hao lạc quan ngay từ đầu.** Dự báo nào cũng lạc quan. Tốt nhất là trừ theo mức các dự án cũ của chính tổ chức đã lệch.[^8]
- **Lợi ích phải đo được.** Mỗi lợi ích có chỉ số, mốc ban đầu và người chịu trách nhiệm. Sổ lợi ích được giữ sang cả giai đoạn vận hành, không đóng lại cùng dự án.[^9]

<figure class="fig fig-benefit">
<ol class="chain">
<li><p class="chain-h">Đầu ra</p><p>Hệ thống kho mới chạy, đúng hạn</p><p class="chain-note">Mới là điều kiện</p></li>
<li><p class="chain-h">Thay đổi cách làm</p><p>Kho ghi hàng xuất ngay khi xuất</p><p class="chain-note">Phần dự án bỏ qua</p></li>
<li class="hit"><p class="chain-h">Lợi ích</p><p>Đơn hủy vì hết hàng giảm</p><dl class="chain-tags"><div><dt>Chỉ số</dt><dd>Tỷ lệ đơn hủy vì hết hàng</dd></div><div><dt>Mốc</dt><dd>Đo trước khi thay đổi</dd></div><div><dt>Chịu trách nhiệm</dt><dd>Phía kinh doanh</dd></div></dl></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">5</span></span> Từ đầu ra tới lợi ích. Ba thẻ dưới cùng là những gì HM Treasury yêu cầu cho mỗi lợi ích; ví dụ điền vào là giả định.</figcaption>
</figure>

Khung này viết cho chi tiêu công. Dùng nó cho doanh nghiệp tư nhân là một cách mượn chưa được kiểm chứng.[^10]

## Chỗ còn phải đọc cẩn thận

Một khảo sát của Bain với hơn 500 lãnh đạo thấy khoảng 11% doanh nghiệp rơi vào "bẫy đồng bộ": chi cho công nghệ nhiều hơn trung bình khoảng 13% nhưng tăng trưởng ba năm thấp hơn trung bình 14%.[^11] Kết luận của họ: cho công nghệ chạy ổn và chi phí hợp lý trước, rồi mới kéo nó theo chiến lược.

<figure class="fig fig-bain">
<div class="quad" role="img" aria-label="Ma trận hai chiều: đồng bộ với chiến lược và hiệu quả vận hành. Nhóm đồng bộ nhưng kém hiệu quả: 11 phần trăm doanh nghiệp, chi cho công nghệ cao hơn trung bình 13 phần trăm, tăng trưởng ba năm thấp hơn 14 phần trăm. Nhóm hiệu quả nhưng chưa đồng bộ: 8 phần trăm. Hai nhóm còn lại chưa có số đã kiểm.">
<p class="quad-y">Đồng bộ với chiến lược</p>
<div class="quad-cell hit"><p class="quad-n">11%</p><p>Đồng bộ nhưng kém hiệu quả</p><p class="quad-d">Chi công nghệ <span class="no">+13%</span>; tăng trưởng 3 năm <span class="no">−14%</span> so với trung bình</p></div>
<div class="quad-cell empty"><p>Đồng bộ và hiệu quả</p><p class="quad-d">Chưa có số đã kiểm</p></div>
<div class="quad-cell empty"><p>Chưa đồng bộ, kém hiệu quả</p><p class="quad-d">Chưa có số đã kiểm</p></div>
<div class="quad-cell"><p class="quad-n">8%</p><p>Hiệu quả nhưng chưa đồng bộ</p></div>
<p class="quad-x">Hiệu quả vận hành</p>
</div>
<figcaption><span class="fig-no">Hình <span class="no">6</span></span> Bẫy đồng bộ của Bain, khảo sát hơn 500 lãnh đạo. Chỉ ghi những con số bài đã kiểm được; hai ô để trống là chưa có số đã kiểm.</figcaption>
</figure>

Con số này chỉ nên đọc như một tín hiệu. Dữ liệu một phần là tự đánh giá, và Bain là hãng tư vấn bán dịch vụ công nghệ.

## Mang vào cuộc họp duyệt đầu tư

Lần tới khi có một đề xuất công nghệ trên bàn, hỏi sáu câu. Hỏi kỹ đến đâu thì tùy quy mô khoản chi.

1. Nó phục vụ lựa chọn chiến lược nào?
2. Nó chạm năng lực nào, và lấp khoảng thiếu nào?
3. Nó đã được so với những phương án nào, tính cả tiền vận hành mỗi năm?
4. Ai có quyền duyệt, theo ngưỡng nào?
5. Ta có đủ người đúng kỹ năng để làm không?
6. Lợi ích nào, ai chịu trách nhiệm, so với mốc nào?

Trong ví dụ, câu thứ sáu là câu không ai hỏi. Vì thế đến giờ vẫn không ai biết dự án thành công hay thất bại.

[^1]: Verified · [The Open Group, TOGAF Standard 10th Edition: Business Architecture (2022)](https://books.google.com/books/about/The_TOGAF_Standard_10th_Edition_Business.html?id=xveBEAAAQBAJ), mô tả của nhà xuất bản trên Google Books; chưa đọc toàn văn.
[^2]: Verified · [ISACA Support (2025-07-02)](https://support.isaca.org/s/article/Governance-and-management-activities-are-the-responsibility-of-the-BoD-1597877237345): governance là evaluate, direct, monitor, thường thuộc hội đồng quản trị; management là plan, build, run, monitor, thuộc ban điều hành.
[^3]: Verified · [Porter (1996), "What Is Strategy?", HBR](https://hbr.org/1996/11/what-is-strategy): "The essence of strategy is choosing what not to do."
[^4]: Verified · [Rumelt (2011), McKinsey Quarterly](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-perils-of-bad-strategy): hạt nhân chiến lược gồm diagnosis, guiding policy, coherent actions; strategy là "coherent action backed by an argument". Đọc qua trích đoạn tìm kiếm, trang gốc không tải được khi kiểm.
[^5]: Verified · [Weill & Woodham (2002), MIT CISR WP 326](https://cisr.mit.edu/publication/MIT_CISRwp326_ImplementingEffectiveITGov): IT governance là "specifying the decision rights and accountability framework to encourage desirable behavior in the use of IT".
[^6]: Verified · [Weill (2004), MIT CISR WP 341](https://cisr.mit.edu/publication/MIT_CISRwp341_HowTopPerfFirmsGovIT): hơn 250 doanh nghiệp ở 23 quốc gia.
[^7]: Verified · [HM Treasury (2026), Guidance on Developing Business Cases](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), mục 1.2, 2.1–2.3, 3.2, 3.4.
[^8]: Verified · [HM Treasury (2026), The Green Book](https://www.gov.uk/government/publications/the-green-book--2), mục 6.77–6.80.
[^9]: Verified · [HM Treasury (2026), Guidance on Developing Business Cases](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), mục 7.24, 11.21–11.22.
[^10]: OPEN · [HM Treasury](https://www.gov.uk/government/publications/guidance-on-developing-business-cases) chỉ viết cho khu vực công; chưa tìm được nguồn gốc nào đo hiệu quả của Five Case Model ở doanh nghiệp tư nhân.
[^11]: Verified · [Shpilberg và cộng sự (2007), MIT Sloan Management Review, bản đăng trên bain.com](https://www.bain.com/insights/avoiding-the-alignment-trap-in-it/); đọc qua trích đoạn tìm kiếm.
