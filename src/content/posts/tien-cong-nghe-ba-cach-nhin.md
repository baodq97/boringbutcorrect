---
title: "Tiền công nghệ nên đọc thế nào: kế toán, TBM hay FinOps?"
seoTitle: "Tiền công nghệ đọc thế nào: kế toán, TBM hay FinOps?"
description: "IAS 38, IFRIC 2021, ASU 2018-15 và 2025-06, TBM Taxonomy 5.0.1 và FinOps: mỗi khung trả lời câu nào về tiền công nghệ, và lệch nhau ở đâu."
station: 1
published: 2026-11-08
verified: 2026-11-04
image: /og/ep06.jpg
video: {id: NJzyzAHkbUo, duration: "7:09", episode: 6}
sources:
  - title: "IFRS Foundation. IAS 38 Intangible Assets"
    url: https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/
  - title: "IFRS Interpretations Committee (03/2021). Configuration or Customisation Costs in a Cloud Computing Arrangement (IAS 38)"
    url: https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2021/configuration-or-customisation-costs-in-a-cloud-computing-arrangement-mar-21.pdf
  - title: "FASB (2018). ASU 2018-15, Implementation Costs Incurred in a Cloud Computing Arrangement That Is a Service Contract"
    url: https://storage.fasb.org/ASU_2018-15.pdf
  - title: "FASB (2025-09-18). ASU 2025-06, Internal-Use Software (Subtopic 350-40): Targeted Improvements"
    url: https://fasb.org/news-and-meetings/in-the-news/fasb-issues-standard-that-makes-targeted-improvements-to-internal-use-software-guidance-423046
  - title: "TBM Council. TBM Taxonomy (5.0.1), Taxonomy Migration Guide, Allocation Methods, TBM & ITFM, History"
    url: https://www.tbmcouncil.org/taxonomy/
  - title: "FinOps Foundation. What is FinOps?, Framework, Domains, Introducing FOCUS 1.4"
    url: https://www.finops.org/introduction/what-is-finops/
---

Một công ty thuê phần mềm bán hàng theo kiểu thuê bao (SaaS) và trả hãng thêm một tỷ đồng để cấu hình. Trong cuộc họp ngân sách, kế toán trưởng nói khoản ấy là chi phí, bị trừ thẳng vào lợi nhuận. Giám đốc công nghệ hỏi vì sao một tỷ phục vụ phòng kinh doanh lại nằm hết trong ngân sách công nghệ. Kỹ sư phụ trách thì lo công ty đang trả phí cho năm mươi tài khoản mà chỉ ba mươi người đăng nhập. Đó là ví dụ giả định đi kèm bài.[^0] Bài này hỏi: một khoản tiền công nghệ có thể được đọc theo những khung nào, mỗi khung trả lời câu hỏi gì, và vì sao lẫn các khung là gốc của nhiều cuộc cãi ngân sách.

**Trả lời ngắn:** bài này đọc "tiền IT" qua ba lăng kính.[^17] *Kế toán* hỏi một khoản là tài sản (capitalise) hay chi phí kỳ này (expense); chuẩn neo là IAS 38 cho IFRS và ASC 350-40 cho US GAAP.[^17] *Minh bạch chi phí quản trị* hỏi tiền đi đâu, ai dùng; chuẩn neo là TBM Taxonomy 5.0.1, mà bậc cuối của nó có cả value stream.[^8][^10] *Chi tiêu biến đổi theo mức dùng* hỏi thứ đang dùng có đáng không; khung neo là FinOps, được định nghĩa là một cultural practice.[^14] Một bảng ngân sách chia theo loại tiền (lương, phần mềm thuê, máy chủ đám mây) chỉ là bậc đầu của lăng kính thứ hai. Đây là cách đọc của bài.[^16]

## Ba lăng kính: một cách phân loại của bài

Luận điểm mở đầu: lẫn ba lăng kính là nguồn gốc của phần lớn tranh cãi ngân sách IT.[^17] Đây là nhận định của bài, không phải của một chuẩn nào. Ba lăng kính khác nhau ở *đơn vị phân loại*:

| Lăng kính | Câu hỏi | Đơn vị phân loại | Chuẩn neo | Chủ sở hữu điển hình |
|---|---|---|---|---|
| Kế toán | Tài sản hay chi phí kỳ này? | Bản chất pháp lý–kinh tế: có tạo tài sản được kiểm soát không | IAS 38, ASC 350-40 | Finance, kiểm toán |
| Minh bạch chi phí | Tiền đi đâu, ai dùng, mỗi đơn vị tốn bao nhiêu? | Chuỗi tiêu thụ: từ tài khoản sổ cái tới bên dùng | TBM Taxonomy 5.0.1 | Văn phòng CIO, ITFM |
| Chi tiêu theo mức dùng | Ai đang dùng, có đáng không, tối ưu thế nào ngay? | Mức dùng và metadata (tag, account, scope) | FinOps Framework, FOCUS 1.4 | Engineering, Finance, Product |

Bảng do bài tổng hợp.[^17]

<figure class="fig fig-kernel" aria-label="Ví dụ giả định: ba người trong cuộc họp ngân sách nhìn cùng khoản tiền qua ba lăng kính, mỗi người hỏi một câu khác.">
<ol class="kernel">
<li><p class="kernel-h">Kế toán</p><p class="kernel-def">Tài sản hay chi phí kỳ này?</p><p class="kernel-ex">Một tỷ tiền cấu hình được ghi thế nào</p></li>
<li><p class="kernel-h">Minh bạch chi phí</p><p class="kernel-def">Tiền đi đâu, ai dùng?</p><p class="kernel-ex">Một tỷ ấy phục vụ phòng nào</p></li>
<li><p class="kernel-h">Theo mức dùng</p><p class="kernel-def">Đang dùng có đáng không?</p><p class="kernel-ex">Năm mươi tài khoản, ba mươi người đăng nhập</p></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Ba câu hỏi về cùng một khoản tiền, áp vào ví dụ mở bài. Mọi số là giả định.</figcaption>
</figure>

Một khoản cloud có thể đồng thời là *expense* theo kế toán, nằm ở cost pool Cloud Services và tower Compute theo TBM, và là một dòng dữ liệu FOCUS được gắn tag theo sản phẩm theo FinOps.[^17] Ba cách đọc ấy không mâu thuẫn; chúng trả lời ba câu khác nhau.

Có thể sửa thêm hai trực giác phổ biến. "CAPEX/OPEX" không phải thuật ngữ chuẩn kế toán; chuẩn mực nói *capitalise* hay *expense*, và tiêu chí nằm ở bản chất khoản chi, không ở ý muốn của người lập ngân sách. Và TBM với FinOps không cạnh tranh nhau.[^17]

## Lăng kính kế toán: khi nào chi phí phần mềm thành tài sản

### IAS 38: research và development

IAS 38 chia chi phí tạo tài sản vô hình nội bộ thành hai pha. Pha research luôn ghi chi phí. Pha development được vốn hóa khi thỏa tiêu chí.[^1] Đoạn 57 đặt sáu điều kiện, phải chứng minh đủ cả sáu:[^2]

| | Điều kiện (IAS 38.57) | Đọc theo ngôn ngữ dự án phần mềm (cách đọc của bài) |
|---|---|---|
| a | Technical feasibility để hoàn thành tài sản | Đã qua spike, PoC |
| b | Ý định hoàn thành và sử dụng hoặc bán | Có quyết định đầu tư |
| c | Khả năng sử dụng hoặc bán | Có người dùng, có kênh triển khai |
| d | Tài sản tạo ra probable future economic benefits (nếu dùng nội bộ: chứng minh usefulness) | Nối với benefits trong business case |
| e | Đủ nguồn lực kỹ thuật, tài chính và nguồn lực khác | Có ngân sách và có đội |
| f | Đo lường đáng tin cậy chi phí trong quá trình phát triển | Timesheet, chi phí theo initiative |

Cột phải là cách bài này dịch sang ngôn ngữ dự án, không phải lời của IAS 38.[^17] Bài rút ra một hệ quả thực hành từ điều kiện (f): tổ chức muốn vốn hóa phải ghi giờ công theo initiative, vì không đo được thì không vốn hóa được.[^17]

### SaaS: IFRS và US GAAP đi hai hướng

IFRS Interpretations Committee (03/2021) xét trường hợp khách hàng ký SaaS, chỉ có quyền truy cập phần mềm, và trả tiền cấu hình hay tùy biến. Kết luận: khách hàng thường không có tài sản vô hình với các chi phí ấy, vì không kiểm soát phần mềm. Ngoại lệ là khi tạo ra *additional code* mà khách kiểm soát được.[^3] Khi không có tài sản, chi phí được ghi theo thời điểm nhận dịch vụ: dịch vụ do chính nhà cung cấp SaaS thực hiện và distinct thì ghi khi thực hiện; dịch vụ của nhà cung cấp nhưng không distinct với quyền truy cập thì ghi dần theo hợp đồng; dịch vụ của bên thứ ba ghi khi thực hiện; khoản trả trước là prepayment.[^4]

So với kết luận IFRIC, US GAAP đi hướng khác ở điểm này. ASU 2018-15 coi chi phí implementation của một hosting arrangement là service contract được xét như dự án internal-use software, nên phần đủ điều kiện được vốn hóa.[^5] ASU 2025-06, ban hành 2025-09-18, bỏ khái niệm project stage. Nó đặt ngưỡng mới là management đã authorize và commit funding, cộng với probable-to-complete. Chuẩn này hiệu lực cho năm tài chính bắt đầu sau 15/12/2027 và cho phép áp dụng sớm.[^6]

| | IFRS (IAS 38 + IFRIC 2021) | US GAAP (ASC 350-40 + ASU 2018-15, 2025-06) |
|---|---|---|
| Cấu hình, tùy biến SaaS | Thường không tạo tài sản vô hình, nên ghi chi phí[^3][^4] | Phần đủ điều kiện được vốn hóa[^5] |
| Ngưỡng vốn hóa phần mềm tự làm | Sáu điều kiện IAS 38.57[^2] | Authorize & commit funding + probable-to-complete[^6] |
| Project stage | — | Từ ASU 2025-06, không còn project stage[^6]; bài đọc đây là trung lập với waterfall hay agile[^17] |

Bài rút ra hai hệ quả, đều là nhận định của bài. Một: theo IFRS, dự án triển khai SaaS lớn thường làm chi phí ghi nhận trong năm triển khai tăng đáng kể, nên so SaaS với tự xây chỉ bằng CAPEX/OPEX năm đầu sẽ lệch.[^18] Hai: ngưỡng "authorize & commit funding" của ASU 2025-06 trùng với quyết định đầu tư trong business case, nên hệ thống quản lý demand nên lưu ngày và người phê duyệt funding.[^17] Phạm vi: chỉ IFRS và US GAAP; chuẩn mực quốc gia như VAS không được kiểm.[^17]

## Lăng kính minh bạch chi phí: TBM

### TBM, ITFM và một nguồn gốc vendor

TBM Council tự mô tả TBM là bao trùm các quy trình nền của IT Financial Management và thêm ba thứ: một taxonomy chuẩn, liên kết với operational metrics và consumption, và liên kết tới business outcome.[^7] Bài này dùng ITFM theo nghĩa ngân sách, dự báo, theo dõi chi phí, phân bổ hay chargeback, kiểm soát chi phí và báo cáo.[^17] Mô tả này đến từ chính tổ chức sở hữu khung, nên độ tin cậy "cao" ở đây là cao về việc khung tự định nghĩa thế nào, không phải về hiệu quả của nó.[^7]

TBM có gốc từ một hội đồng CIO tư vấn cho Apptio từ 2007[^12]; Apptio là nhà cung cấp phần mềm minh bạch chi phí.[^17] Taxonomy ra bản 1.0 năm 2013, 2.0 năm 2015, 3.0 năm 2017, 4.0 năm 2020 và 5.0 tháng 6 năm 2025.[^11] Bản hiện hành là 5.0.1.[^8] Bài đề nghị đọc nó như một chuẩn ngành do cộng đồng duy trì nhưng có gốc vendor, không như một chuẩn ISO.[^17]

### Bốn bậc của taxonomy

Taxonomy có bốn layer: Cost Pools → Technology Resource Towers → Technology Solutions → Technology Consumers.[^9]

| Layer | Phân loại theo | Ví dụ (5.0.1) |
|---|---|---|
| Cost Pools | Bản chất tiền | Staffing, Outside Services, Cloud Services, Software & SaaS, Hardware, Data Center, Telecom |
| Resource Towers | Chức năng kỹ thuật | Compute, Storage, Network, Application, Data, Security, Risk/Compliance, End User |
| Solutions | Dịch vụ, sản phẩm số | Business, Workplace, Shared & Corporate, AI, Infrastructure, Delivery |
| Consumers | Bên dùng | Business Functions, Business Value Streams, Partners & internal consumers, External Consumers |

Nguồn bảng: trang taxonomy 5.0.1; một số nhãn bị cắt trên trang web, nhãn đầy đủ nằm trong whitepaper chỉ dành cho thành viên.[^9]

Bản 5 thêm cost pool Cloud Services và Staffing, thêm tower Application, Data, Smart Devices, tách Security và Risk, thêm loại solution cho AI, và mở rộng consumer layer sang value stream, product, portfolio.[^10] Với người làm kiến trúc nghiệp vụ, điểm đáng chú ý nhất là value stream ở bậc Consumers. Nhờ đó, theo cách đọc của bài, chi phí công nghệ ánh xạ được vào value stream của business architecture, qua các quy tắc phân bổ.[^17]

<figure class="fig fig-day" aria-label="Bốn bậc của TBM Taxonomy từ Cost Pools tới Consumers; câu hỏi tiền phục vụ ai nằm ở bậc cuối.">
<ol class="tower">
<li>Cost Pools<small>bản chất tiền; bảng chia theo loại tiền dừng ở đây</small></li>
<li>Resource Towers<small>chức năng kỹ thuật</small></li>
<li>Solutions<small>dịch vụ, sản phẩm số</small></li>
<li class="hit">Consumers<small>bên dùng; câu hỏi "tiền phục vụ ai" nằm ở đây</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">2</span></span> Bốn bậc của TBM Taxonomy 5.0.1. Việc đặt các câu hỏi vào từng bậc là cách đọc của bài.</figcaption>
</figure>

Bảng chia theo loại tiền của phòng tài chính, theo cách đọc của bài, chỉ dừng ở bậc Cost Pools. Câu của giám đốc công nghệ trong ví dụ, một tỷ phục vụ phòng kinh doanh sao lại nằm trong ngân sách công nghệ, là câu ở bậc Consumers, nên không thể trả lời từ bậc đầu mà không phân bổ qua các bậc giữa.[^16]

### Phân bổ: source, target, driver

Một allocation rule gồm source, target và driver. TBM Council đặt năm tiêu chí chất lượng: traceable, defensible, relevant, consistent, scalable.[^13] Migration guide coi việc phân bổ đi tắt layer (cost pool thẳng tới consumer) và tỷ lệ cố định là dấu hiệu cần hiện đại hóa.[^17]

Độ chính xác có giá: mỗi driver thêm vào làm model khó giải thích hơn, và chargeback với driver bị tranh cãi chuyển năng lượng tổ chức từ tối ưu sang tranh luận về con số. Bài đọc việc TBM Council đặt "defensible" ngang "traceable" là vì vậy.[^18]

### Showback và chargeback

| | Showback | Chargeback |
|---|---|---|
| Tiền có chuyển P&L không | Không, chỉ hiển thị | Có, tính vào ngân sách bên dùng |
| Mục đích | Minh bạch, tạo nhận thức | Trách nhiệm tài chính, điều tiết nhu cầu |
| Yêu cầu dữ liệu | Thấp hơn; chấp nhận xấp xỉ | Cao; bên dùng tranh luận từng driver |

Bảng do bài tổng hợp.[^17] Lộ trình "showback trước, chargeback sau" là thực hành phổ biến, không có chuẩn nào quy định.[^15] Bài cũng xếp việc ai được quyết giá nội bộ của dịch vụ IT vào decision rights của governance.[^17]

## Lăng kính chi tiêu theo mức dùng: FinOps

FinOps Foundation định nghĩa FinOps là một cultural practice. FinOps hiện phủ Cloud, SaaS, Licensing, Data Center và các loại khác, và được đặt cạnh ITAM và AI Tokenomics trong Technology Value Management.[^14] Theo cách bài đọc định nghĩa, mọi người làm chủ cost và usage của mình, có một nhóm best-practice trung tâm hỗ trợ.[^19] Foundation nhấn mạnh: *"If it seems that FinOps is about saving money, think again."*[^19]

Framework có bốn domain: Understand Usage & Cost, Quantify Business Value, Optimize Usage & Cost, Manage the FinOps Practice. Đây không phải các bước tuần tự.[^15b] FOCUS 1.4, phê chuẩn 2026-06-04, thêm Invoice Detail và Billing Period[^16b]; theo cách đọc của bài, mục đích là đối chiếu mức dùng với hóa đơn.[^17] FinOps Foundation thành lập 02/2019 từ Customer Advisory Board của Cloudability và nhập Linux Foundation 06/2020.[^20]

## TBM và FinOps: chồng lấn ở đâu

| | TBM | FinOps |
|---|---|---|
| Gốc | Hội đồng CIO quanh Apptio (2007)[^12] | Customer Advisory Board của Cloudability (2019)[^20] |
| Phạm vi | Toàn bộ chi tiêu công nghệ, theo cách đọc của bài[^17] | Ban đầu cloud; nay mọi technology category, theo cách đọc của bài[^17] |
| Nhịp | Tháng, quý[^17] | Gần thời gian thực[^17] |
| Tầm | Executive, quản trị[^17] | Engineering, vận hành[^17] |

Bài nhận định ranh giới hiện nay nằm ở nhịp và tầm, không ở loại chi phí, vì FinOps đã mở sang mọi technology category và TBM đã thêm cost pool Cloud Services cho FinOps.[^18]

## Chỗ còn phải đọc cẩn thận

- **Cả hai khung đều có gốc vendor**, và phần lớn nội dung chi tiết, benchmark nằm sau tường thành viên. Theo nhận định của bài, một tổ chức nhỏ có thể chỉ cần ITFM cơ bản với phân loại chi phí tự định nghĩa.[^18]
- **TBM Insurance taxonomy extension v2.0 là OPEN**: chỉ dành cho thành viên.[^21]
- **ASU 2025-06 chỉ đọc qua snippet** vì fasb.org chặn truy cập tự động; ASU 2018-15 đọc qua snippet PDF của FASB và PwC Viewpoint.[^5][^6]
- **Văn bản IAS 38.57** được đối chiếu qua một bản chép và PwC Viewpoint; EUR-Lex chặn truy cập tự động.[^2]
- **Vốn hóa nhiều không phải lúc nào cũng tốt.** Vốn hóa làm đẹp OPEX năm nay nhưng tạo amortisation và rủi ro impairment các năm sau.[^18]
- **Quy ước CAPEX/OPEX trong ngân sách nội bộ có thể khác kế toán**, ví dụ ngưỡng giá trị hay loại hợp đồng. Cần đối chiếu với chính sách kế toán thật.[^18]

## Áp dụng: trả lời "tiền đỡ việc gì" trong một tháng

Các bước dưới đây ghép TBM, FinOps và phần kế toán. Thứ tự bước, việc dùng các chặng của một value stream làm bậc Consumers, và nhịp đo là suy luận của bài.[^16]

1. **Hỏi câu hỏi thuộc lăng kính nào.** "Bao nhiêu được vốn hóa" là kế toán; "tuần này có lãng phí không" là FinOps.[^17] Xếp "tiền đỡ việc gì" vào TBM là cách đọc của bài.[^16]
2. **Đặt mỗi khoản chi vào một cost pool và một tower.** Bắt đầu từ năm khoản chi gần nhất.[^17]
3. **Chọn một value stream làm bậc Consumers**[^10] và liệt kê solution nào phục vụ nó[^17]; bài đề nghị đi tới từng giai đoạn của value stream.[^16]
4. **Với hệ thống dùng chung, chọn driver đo được** (bài gợi ý số lần gọi, số giao dịch) thay vì tỷ lệ cố định[^16][^17], và kiểm nó theo năm tiêu chí của TBM Council.[^13]
5. **Showback trước, chargeback sau**, khi dữ liệu đã đủ tin cậy; đây là thực hành, không phải chuẩn.[^15][^17]
6. **Với chi tiêu theo mức dùng, cho chính đội dùng xem dữ liệu**, có nhóm trung tâm hỗ trợ. Nhịp cụ thể là lựa chọn của tổ chức.[^14][^16]
7. **Khi so SaaS với tự xây**, đừng chỉ so CAPEX/OPEX năm đầu; hỏi chuẩn mực kế toán áp dụng là IFRS hay US GAAP.[^3][^5][^18]

Ở ví dụ mở bài, ba lăng kính tách cuộc cãi thành ba câu hỏi. Kế toán trưởng hỏi một tỷ tiền cấu hình được ghi thế nào. Giám đốc công nghệ hỏi một tỷ ấy phục vụ ai. Kỹ sư hỏi hai mươi tài khoản không ai đăng nhập có đáng trả tiền không. Không ai sai, vì mỗi người đang trả lời một câu khác.[^0]

Video đi kèm (tập 06 của Boring But Correct) kể cùng cuộc họp ngân sách ấy. Bài này là phần nguồn và lập luận đứng sau nó.

[^0]: Giả định · Công ty, một tỷ tiền cấu hình, năm mươi tài khoản, ba mươi người đăng nhập là ví dụ minh họa của tập 06, không đến từ nguồn.
[^1]: Verified · [IFRS Foundation, IAS 38](https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/), trang tóm tắt: research ghi chi phí; development vốn hóa khi thỏa tiêu chí.
[^2]: Verified · Văn bản IAS 38.57, sáu điều kiện (a)–(f), qua bản chép trên sdv.com.mx khớp PwC Viewpoint; EUR-Lex chặn truy cập tự động.
[^3]: Verified · [IFRIC agenda decision 03/2021](https://www.ifrs.org/content/dam/ifrs/supporting-implementation/agenda-decisions/2021/configuration-or-customisation-costs-in-a-cloud-computing-arrangement-mar-21.pdf), IASB không phản đối 04/2021: khách hàng thường không có tài sản vô hình với chi phí cấu hình, tùy biến; ngoại lệ additional code được kiểm soát.
[^4]: Verified · Như [^3], mục (a)–(e): thời điểm ghi chi phí theo distinct, không distinct, bên thứ ba; trả trước là prepayment.
[^5]: Verified (qua snippet) · [ASU 2018-15](https://storage.fasb.org/ASU_2018-15.pdf); PwC Viewpoint: implementation cost của hosting arrangement là service contract được xét như dự án internal-use software.
[^6]: Verified (qua snippet) · [FASB, ASU 2025-06](https://fasb.org/news-and-meetings/in-the-news/fasb-issues-standard-that-makes-targeted-improvements-to-internal-use-software-guidance-423046): ban hành 2025-09-18; bỏ project stage; ngưỡng authorize & commit funding và probable-to-complete; hiệu lực cho năm bắt đầu sau 15/12/2027.
[^7]: Verified (nguồn tự mô tả) · [TBM Council, TBM & ITFM](https://www.tbmcouncil.org/discover/hot-topics/tbm-itfm/): TBM bao trùm ITFM và thêm taxonomy, operational metrics, business outcomes.
[^8]: Verified · [TBM Council, Taxonomy](https://www.tbmcouncil.org/taxonomy/): bản hiện hành 5.0.1; trang 4.1 là tài liệu cũ.
[^9]: Verified · [TBM Taxonomy 5.0.1](https://www.tbmcouncil.org/taxonomy/); TBM Model page: bốn layer và danh mục. Một số nhãn bị cắt trên trang web; nhãn đầy đủ trong whitepaper chỉ dành cho thành viên.
[^10]: Verified · [TBM Council, Taxonomy Migration Guide](https://www.tbmcouncil.org/learn-tbm/tbm-modeling/taxonomy-migration/): thay đổi của v5, gồm value stream, product, portfolio ở consumer layer.
[^11]: Verified, tin cậy trung bình đến cao · [History of the TBM Council](https://www.tbmcouncil.org/about/history-of-tbm-council/): 1.0 (2013), 2.0 (2015), 3.0 (2017), 4.0 (2020), 5.0 (06/2025); đọc timeline dạng text.
[^12]: Verified · Như [^11]: TBM có gốc từ hội đồng CIO tư vấn cho Apptio, từ 2007.
[^13]: Verified · [TBM Council, Allocation Methods](https://www.tbmcouncil.org/learn-tbm/tbm-modeling/allocation-methods/): allocation rule gồm source, target, driver; tiêu chí traceable, defensible, relevant, consistent, scalable.
[^14]: Verified · [FinOps Foundation, What is FinOps?](https://www.finops.org/introduction/what-is-finops/): cultural practice; phủ Cloud, SaaS, Licensing, Data Center và các loại khác; một phần của Technology Value Management cùng ITAM, AI Tokenomics.
[^15]: Practice phổ biến, không có chuẩn quy định · Lộ trình showback trước, chargeback sau. Tin cậy trung bình.
[^15b]: Verified · [FinOps Foundation, Domains](https://www.finops.org/framework/domains/): bốn domain, không phải bước tuần tự.
[^16]: Suy luận của bài · Bảng theo loại tiền dừng ở bậc Cost Pools; câu "tiền đỡ việc gì" thuộc bậc Consumers; dùng các chặng của value stream làm bậc Consumers; thứ tự các bước áp dụng; nhịp xem dữ liệu.
[^16b]: Verified · [FinOps Foundation, Introducing FOCUS 1.4](https://www.finops.org/insights/introducing-focus-1-4/): phê chuẩn 2026-06-04; thêm Invoice Detail và Billing Period.
[^17]: Nhận định của bài · Ba lăng kính và luận điểm về tranh cãi ngân sách; đơn vị phân loại; ví dụ một khoản cloud; CAPEX/OPEX không phải thuật ngữ kế toán; cột "đọc theo ngôn ngữ dự án" cho IAS 38.57 và hệ quả về giờ công; ngưỡng funding trùng quyết định đầu tư; phạm vi IFRS và US GAAP; đọc TBM như chuẩn ngành gốc vendor; value stream map vào business architecture; dấu hiệu đi tắt layer và tỷ lệ cố định của migration guide; bảng showback, chargeback; showback, chargeback là decision right; nhịp và tầm của TBM, FinOps; bài tập cost pool và value stream.
[^18]: Nhận định của bài · Cái giá của độ chính xác phân bổ; vốn hóa nhiều không luôn tốt; so SaaS với tự xây chỉ bằng năm đầu sẽ lệch; gốc vendor và tường thành viên; ranh giới TBM, FinOps ở nhịp và tầm; quy ước nội bộ khác kế toán.
[^19]: Đọc từ nguồn, chưa kiểm riêng · Cách trình bày định nghĩa FinOps (mọi người làm chủ cost và usage, nhóm trung tâm hỗ trợ); câu trích "If it seems that FinOps is about saving money, think again" của FinOps Foundation.
[^20]: Verified · finops.org/about (qua snippet); repo finopsfoundation/framework: thành lập 02/2019 từ Customer Advisory Board của Cloudability; nhập Linux Foundation 06/2020.
[^21]: OPEN · Chi tiết TBM Insurance taxonomy extension v2.0: chỉ dành cho thành viên.
