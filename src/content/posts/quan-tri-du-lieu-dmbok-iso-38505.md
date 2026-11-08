---
title: "Quản trị dữ liệu khác quản lý dữ liệu ở đâu? ISO/IEC 38505, DMBOK, data mesh"
description: "Data governance là tập con của IT governance; data management là các kỷ luật thực thi. Gốc ISO/IEC 38505, DMBOK, data mesh, luật EU và chỗ nguồn còn hở."
station: 1
published: 2026-11-07
verified: 2026-11-07
image: /og/ep11.jpg
sources:
  - title: "ISO/IEC 38505-1:2026 — Information technology — Governance of data — Part 1 (abstract, qua snippet)"
    url: https://www.iso.org/standard/87195.html
  - title: "ISO/IEC 38505-1 bản 2017"
    url: https://www.iso.org/standard/56639.html
  - title: "DAMA International — DMBOK2 revisions (đọc trực tiếp)"
    url: https://www.damadmbok.org/dmbok2-revisions
  - title: "DAMA International — DMBOK framework (đọc trực tiếp)"
    url: https://www.damadmbok.org/dmbok-framework
  - title: "DAMA DMBOK Revision (qua snippet)"
    url: https://www.dama.org/dama-dmbok-revision/
  - title: "Revised Edition FAQs (qua snippet)"
    url: https://www.dama.org/dama-dmbok2-revised-edition-faqs/
  - title: "Directive 2009/138/EC (Solvency II), Art. 82 — EIOPA Single Rulebook (qua snippet)"
    url: https://www.eiopa.europa.eu/rulebook/solvency-ii-single-rulebook/article-2170_en
  - title: "Directive (EU) 2025/2, Art. 4 — Better Regulation (qua snippet)"
    url: https://service.betterregulation.com/document/776883
  - title: "Deloitte Luxembourg, Solvency II review 2025"
    url: https://www.deloitte.com/lu/en/our-thinking/future-of-advice/solvency-ii-review-2025.html
  - title: "Regulation (EU) 2022/2554 (DORA), Art. 8 — bản mirror"
    url: https://www.digital-operational-resilience-act.com/Article_8.html
  - title: "Regulation (EU) 2016/679 (GDPR), Art. 4 — gdpr-info.eu (đọc trực tiếp)"
    url: https://gdpr-info.eu/art-4-gdpr/
  - title: "Basel Committee on Banking Supervision — Principles for effective risk data aggregation and risk reporting (09/01/2013, đọc trực tiếp)"
    url: https://www.bis.org/publ/bcbs239.htm
  - title: "Dehghani, Z. — How to Move Beyond a Monolithic Data Lake to a Distributed Data Mesh (20/05/2019, đọc trực tiếp)"
    url: https://martinfowler.com/articles/data-monolith-to-mesh.html
  - title: "Dehghani, Z. — Data Mesh Principles and Logical Architecture (03/12/2020, đọc trực tiếp)"
    url: https://martinfowler.com/articles/data-mesh-principles.html
  - title: "Thứ cấp: DAMA South Africa — The DMBOK Knowledge Areas Explained"
    url: https://dama.org.za/resources/dmbok-knowledge-areas/
  - title: "Thứ cấp: bcbs239.com — principles"
    url: https://bcbs239.com/en/principles
  - title: "Thứ cấp: thedatagovernor.com — steward vs owner vs custodian"
    url: https://thedatagovernor.com/data-steward-vs-data-owner-vs-data-custodian/
---

Trong công ty giả định của kênh, trang web và phần mềm bán hàng giữ hai bản địa chỉ cho cùng một khách. Mỗi tháng chừng 150 đơn phải giao lại vì sai địa chỉ, mỗi lần 60 nghìn, tức chừng 108 triệu một năm. Giám đốc vận hành hỏi địa chỉ nào mới đúng, và chưa ai được giao quyết. Đây là ví dụ giả định, không đến từ nguồn.[^g]

Bài này không hỏi phần mềm nào đúng. Bài hỏi: "quản trị dữ liệu" (data governance) và "quản lý dữ liệu" (data management) là hai việc gì, từ đâu ra, hai bộ nguồn chính của nghề (chuẩn ISO và DAMA-DMBOK) nói gì, và luật EU đòi gì ở những ngành nó áp dụng.

**Trả lời ngắn:** theo doc nguồn, data governance trả lời *ai được quyết gì về dữ liệu, và chịu trách nhiệm ra sao*; data management là *các kỷ luật thực thi*.[^bo] Phần abstract của ISO/IEC 38505-1 coi data governance là tập con của IT governance.[^c1] DAMA-DMBOK chia data management thành 11 knowledge area, với governance ở tâm.[^c3] Người chủ dữ liệu (data owner) là một người phía business theo bản DMBOK2 Revised 2024.[^c4] Cách chia vai steward và custodian là quy ước thực hành, không phải chuẩn.[^c15]

## Hai việc, hai gốc

Theo doc, data governance là tập con của IT governance, mà IT governance lại là tập con của corporate governance.[^c1][^bo] Data management là phần thực thi bên dưới, và hai tầng nối với nhau bằng chu trình Evaluate–Direct–Monitor.[^b1a]

<figure class="fig" aria-label="Ba tầng lồng nhau từ trên xuống: corporate governance, IT governance, data governance, rồi data management ở dưới cùng. Data governance được đánh dấu">
<ol class="tower">
<li>Corporate governance</li>
<li>IT governance<small>ISO/IEC 38500</small></li>
<li class="hit">Data governance<small>ISO/IEC 38505-1: quyền quyết định và accountability</small></li>
<li>Data management<small>DAMA-DMBOK: kiến trúc, mô hình, lưu trữ, bảo mật, tích hợp, chất lượng, metadata</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Quan hệ giữa các khái niệm theo sơ đồ của doc nguồn. Evaluate–Direct–Monitor đi từ data governance xuống data management.[^bo][^b1a]</figcaption>
</figure>

**ISO/IEC 38505-1.** Theo abstract, chuẩn áp dụng ISO/IEC 38500 vào dữ liệu và đối tượng của nó là *governing body*.[^c1] Doc gloss governing body là hội đồng quản trị, ban điều hành.[^b1b] Doc ghi thêm mục tiêu là việc dùng dữ liệu phải *effective, efficient, acceptable*, và phạm vi là dữ liệu do hệ IT tạo, thu thập, lưu, bảo vệ hay kiểm soát.[^b1b] Về phiên bản:
- Edition 1 ra tháng 04/2017.[^bdt]
- Edition 2 ra tháng 08/2026 (qua snippet), thay bản 2017, và tên chuẩn bỏ cụm "Governance of IT —".[^c2]

Bài này chưa đọc chính văn chuẩn, nên không trích nguyên văn một định nghĩa nào của ISO. Doc chỉ đọc abstract và snippet của trang ISO và BSI.[^c1][^c2]

**Điều định nghĩa không nói.** Doc ghi rằng năm loại quyết định công nghệ của Weill & Ross (principles, architecture, infrastructure, application needs, investment) không có loại riêng cho dữ liệu. Vì vậy doc đề xuất thêm một hàng "data" vào ma trận decision rights, ghi ai quyết định nghĩa, chất lượng, quyền truy cập và lưu giữ cho từng data domain. Đó là đề xuất của doc; mệnh đề về Weill & Ross không có dòng trong bảng kiểm chứng của doc.[^b1c]

## DMBOK: body of knowledge, và bản Revised 2024

DAMA-DMBOK có 11 knowledge area, governance nằm ở tâm "DAMA Wheel".[^c3] Mười area còn lại xoay quanh tâm đó.[^b1d]

Về định nghĩa, doc chỉ có một mảnh trích của DMBOK về data governance, lấy từ chương của DAMA South Africa, một nguồn thứ cấp: *"exercise of authority and control…"*.[^c7] Doc không ghi phần còn lại của câu, và bài này không đoán.

Bản **DMBOK2 Revised (2024)** là maintenance release (qua snippet).[^c4] Qua snippet, doc ghi bản này có từ 04/2024 và là tài liệu chính thức cho kỳ thi CDMP từ 10/2024.[^c6] Những gì đã đổi và không đổi:

| | Giữ nguyên | Ghi trong bản Revised |
|---|---|---|
| Framework, knowledge area, định nghĩa của chúng | Không đổi[^c4] | |
| Từ vựng | | "data governance program" thành "data governance function"[^c4] |
| Vai trò | | Data owner là một người phía business[^c4] |
| Nội dung | | Thêm AI governance và ethics[^c4] |
| Thứ tự hoạt động | | PDCO (Plan, Development, Control, Operational)[^c5] |
| Thuật ngữ | | Định nghĩa Critical Data Element (CDE) và Data Landscape[^c5] |
| Chất lượng dữ liệu | | 9 dimension, thêm Currency và Reasonableness; map vòng cải tiến sang chu trình Shewhart/Deming[^c5] |

DMBOK 3.0 đang được phát triển, chưa phát hành (qua snippet).[^c6] Doc diễn giải việc đổi "program" thành "function" là thừa nhận rằng một chương trình có ngày kết thúc, còn dữ liệu thì không; đó là nhận định của doc.[^bdo]

Bảng dưới so hai khái niệm theo cách doc nguồn xếp.

| | Data governance | Data management |
|---|---|---|
| Câu hỏi | Ai được quyết gì, chịu trách nhiệm ra sao[^bo] | Làm thế nào: kiến trúc, mô hình, lưu trữ, bảo mật, tích hợp, chất lượng, metadata[^bo] |
| Nguồn tham chiếu (body of knowledge) | ISO/IEC 38505-1, tập con của IT governance[^c1] | DAMA-DMBOK, 11 knowledge area[^c3] |
| Vị trí | Ở tâm của DAMA Wheel[^c3] | Mười area xoay quanh tâm[^b1d] |
| Bản hiện hành | Edition 2, 08/2026 (qua snippet)[^c2] | DMBOK2 Revised 2024; 3.0 đang phát triển (qua snippet)[^c6] |

## Vai trò: ai chịu trách nhiệm cho dữ liệu nào

Chỉ có định nghĩa data owner được doc neo vào DMBOK2 Revised.[^b2] Cách chia steward và custodian là quy ước phổ biến, doc ghi là nguồn thứ cấp và thực hành ngành, độ tin cậy trung bình.[^c15][^b2]

| Vai trò | Ai | Làm gì | Mức neo |
|---|---|---|---|
| Data owner | Người phía business[^c4] | Chịu trách nhiệm (accountable) về các quyết định trong một data domain;[^bt] quyết định nghĩa, ngưỡng chất lượng, quyền truy cập, chấp nhận rủi ro[^b2] | DMBOK2 Revised[^c4] |
| Data steward | Chuyên gia nghiệp vụ trong domain[^c15][^b2] | Duy trì glossary, xử lý issue chất lượng, theo dõi tuân thủ policy hằng ngày[^c15][^b2] | Quy ước thực hành #15[^c15] |
| Data custodian | IT hoặc platform[^c15][^b2] | Hiện thực control: backup, mã hóa, cấp quyền, retention[^c15][^b2] | Quy ước thực hành #15[^c15] |
| Data governance function | Council cùng văn phòng điều phối[^b2] | Ban hành policy và standard; phân xử tranh chấp giữa domain[^b2] | Mô hình council và văn phòng: thân doc §2;[^b2] chỉ việc đổi "program" thành "function" từ DMBOK2 Revised[^c4] |

Lập luận của doc về cột "Ai": owner phải là business. Nếu IT làm owner, IT bị buộc quyết những điều không thuộc thẩm quyền của mình, ví dụ khách hàng nào được coi là "active".[^b2]

Vai trò này khác vai trò pháp lý giữa các tổ chức. Theo GDPR Art. 4(7)–(8), *controller* quyết định mục đích và phương tiện xử lý dữ liệu cá nhân, còn *processor* xử lý thay mặt controller.[^c14] Doc nhấn mạnh đây là vai trò giữa các tổ chức, khác owner và steward nội bộ.[^bt]

## Chất lượng dữ liệu: bộ từ vựng của nghề và tiêu chí của luật

Doc nói hai bộ tiêu chí khác nhau và không thay thế nhau.[^b3]

| | DAMA-DMBOK2 Revised | Solvency II |
|---|---|---|
| Số tiêu chí | 9 dimension[^c5] | 3 thuộc tính: appropriate, complete, accurate (Art. 82; Delegated Reg. 2015/35 Art. 19)[^c8][^c9] |
| Nội dung | Accuracy, Validity, Completeness, Integrity, Uniqueness/Deduplication, Timeliness, Reasonableness, Consistency, Currency[^b3] | Appropriate: phù hợp mục đích, có quy trình và tiêu chí chất lượng lập tài liệu. Complete: đủ lịch sử, có dữ liệu theo nhóm rủi ro đồng nhất, không loại dữ liệu vô cớ. Accurate: không sai sót trọng yếu, nhất quán giữa các kỳ, ghi nhận kịp thời[^b3] |
| Phạm vi | Áp dụng chung cho mọi dữ liệu[^b3] | (Tái) bảo hiểm ở EU[^b6] |
| Vai trò | Bộ từ vựng đo lường[^b3] | Nghĩa vụ theo quy định, với dữ liệu technical provisions[^bo] |
| Thay đổi gần đây | Bản 2024 thêm Currency[^c5] và đổi sang Reasonableness[^b3] | Directive (EU) 2025/2 áp dụng từ 30/01/2027;[^c10] tác động lên Art. 82: OPEN[^c11] |

Doc không ghép từng dimension của DMBOK với từng thuộc tính của Solvency II; bảng trên chỉ đặt hai bộ cạnh nhau. Bài này không tự ghép thêm.[^b3]

Hai điều doc rút ra về cách đo. Một, chọn CDE từ các báo cáo bắt buộc, gán owner cho từng CDE và đặt ngưỡng theo dimension: doc ghi là quy trình thực hành do note tổng hợp.[^c15] Hai, chỉ đo sâu trên CDE, vì đo đủ 9 dimension cho mọi field tốn kém và dễ thành Goodhart; tỷ lệ "đạt ngưỡng" có thể bị tối ưu thay cho chất lượng thật. Đó là nhận định của doc.[^bdd][^b3]

## Khung pháp lý: mỗi luật có phạm vi riêng

Doc xếp các khung pháp lý với phạm vi rõ ràng, và bài này giữ nguyên phạm vi ấy.[^b6]
- **Solvency II, Directive 2009/138/EC, Art. 82.** Phạm vi: (tái) bảo hiểm ở EU.[^b6] Dữ liệu dùng cho technical provisions phải appropriate, complete, accurate, và cho phép approximation.[^c8]
- **Delegated Regulation (EU) 2015/35, Art. 19.** Cùng phạm vi; chi tiết hóa ba tiêu chí như bảng trên.[^c9][^b6]
- **Directive (EU) 2025/2** (rà soát Solvency II). Qua snippet, đăng Official Journal ngày 08/01/2025, hạn chuyển đổi 29/01/2027 và áp dụng từ 30/01/2027; claim #10 không tách nguồn nào đỡ ngày nào, nên cả ba ngày đều theo #10 như một khối.[^c10] Doc ghi trọng tâm là proportionality, reporting, sustainability risk và macroprudential.[^b6] Tác động lên Art. 82 và dữ liệu technical provisions: OPEN, chưa kiểm chứng.[^c11]
- **DORA, Art. 8.** Doc ghi phạm vi là tổ chức tài chính ở EU, yêu cầu inventory và mapping cả information asset lẫn ICT asset.[^b6] Phần Tổng quan của doc nêu điều này trong ngữ cảnh bảo hiểm; bài này không mở rộng ra thêm loại tổ chức nào.[^bo] DORA được thông qua 12/2022, áp dụng từ 17/01/2025.[^bdt]
- **GDPR.** Phạm vi: mọi tổ chức xử lý dữ liệu cá nhân của người ở EU; dữ liệu sức khỏe là special category.[^b6]
- **BCBS 239** (đối chiếu). Công bố 09/01/2013 (BIS).[^c13d] Theo nguồn thứ cấp, 14 nguyên tắc trong 4 nhóm.[^c13n] Phạm vi: ngân hàng, trước hết là G-SIB; không áp dụng cho bảo hiểm.[^b6] Doc coi nó là mẫu tham chiếu tốt nhất cho câu hỏi dữ liệu rủi ro có tổng hợp được nhanh và đúng khi khủng hoảng không; đó là nhận định của doc.[^b6n]

Công ty giả định của kênh ở Việt Nam, và doc không kiểm luật nào của Việt Nam. Vì vậy các khung trên là bối cảnh học, không phải nghĩa vụ của công ty ấy.[^g]

## Tập trung hay liên bang: data mesh

Dehghani đăng bài gốc về data mesh ngày 20/05/2019 và hệ thống hóa thành bốn nguyên tắc ngày 03/12/2020.[^c12] Bốn nguyên tắc, theo cách doc ghi:[^b5]
1. Domain-oriented decentralized data ownership and architecture: domain nghiệp vụ sở hữu dữ liệu của mình.
2. Data as a product: dữ liệu có người dùng, chất lượng và khả năng tự khám phá như một sản phẩm.
3. Self-serve data infrastructure as a platform: platform chung giảm chi phí cho từng domain.
4. Federated computational governance: quy tắc toàn cục (interoperability, bảo mật) được nhúng vào platform dưới dạng code; phần còn lại để domain tự quyết.

Theo Dehghani, governance truyền thống tập trung hóa việc ra quyết định và áp một *global canonical representation*; data mesh chấp nhận nhiều ngữ cảnh diễn giải.[^b5] Doc đọc data mesh là quan điểm tổ chức cộng kiến trúc (sociotechnical) cho dữ liệu *phân tích* ở quy mô lớn, không phải một sản phẩm, và so nó với bounded context trong DDD.[^b5]

| | Tập trung | Data mesh |
|---|---|---|
| Lợi | Một định nghĩa duy nhất, dễ chứng minh với cơ quan quản lý (doc không nói riêng về Art. 82)[^btr] | Mở rộng tốt hơn[^btr] |
| Giá | Tạo nút thắt[^btr] | Cần domain đủ năng lực, platform trưởng thành, kỷ luật interoperability[^btr] |
| Với dữ liệu bị quản lý chặt | Doc không nói riêng về Art. 82 cho phương án này[^btr] | Phần "federated" vẫn phải chứng minh được Art. 82[^btr] |
| Quan hệ với nghĩa vụ luật | Doc chỉ nói điều này về data mesh[^bdt] | Không thay các nghĩa vụ luật[^bdt] |

Doc xếp data mesh là lựa chọn tổ chức cho dữ liệu phân tích, không thay các nghĩa vụ pháp lý ở trên.[^bdt]

## Nối với ứng dụng và năng lực

Trong bộ doc này, data là nửa còn lại của tầng dữ liệu và ứng dụng: note về danh mục ứng dụng quản lý ứng dụng, note này quản lý dữ liệu chảy qua chúng.[^bo] Doc nối theo ba bước: information concept của capability map là ứng viên data domain; inventory ứng dụng cho biết ứng dụng nào tạo hoặc sửa từng concept; mỗi domain nên có một system of record, và khi nhiều ứng dụng cùng ghi thì cần MDM (hub hoặc registry) hoặc một quyết định disposition.[^b4] Dữ liệu ở nhà cung cấp (SaaS, outsourcing) vẫn thuộc trách nhiệm của tổ chức.[^b4]

## Chỗ còn phải đọc cẩn thận

- **Nhiều claim chỉ đọc qua abstract hoặc snippet.** Bài này chưa đọc chính văn. Qua abstract: ISO/IEC 38505-1 (#1).[^c1] Qua snippet: edition 2 (#2), DMBOK2 Revised và các nội dung của nó (#4), ngày bản Revised và DMBOK 3.0 (#6), Art. 82 trên EIOPA (#8), Directive 2025/2 (#10).[^c2][^c4][^c6][^c8][^c10] Đọc trực tiếp, theo bảng kiểm chứng: #3, #5, #9, #12, #14 và ngày công bố của BCBS 239.[^c3][^c5][^c9][^c12][^c14][^c13d]
- **Claim #7 là thứ cấp.** Mảnh định nghĩa DMBOK về data governance đến từ một chapter của DAMA, độ tin cậy trung bình.[^c7]
- **Claim #11 là OPEN.** Chưa ai trong doc kiểm xem Directive 2025/2 có đổi yêu cầu dữ liệu technical provisions hay không; bài này không nói có hay không.[^c11]
- **Claim #15 là thực hành ngành.** Cách chia steward và custodian, và quy trình CDE đến owner đến ngưỡng, là tổng hợp của note từ nguồn thứ cấp, không phải điều DMBOK2 Revised quy định.[^c15]
- **"DMBOK không phải chuẩn có thể chứng nhận" là nhận định của note.** Doc nói DMBOK cho biết *cần làm gì*, không cho biết *đã đủ chưa*; câu trả lời "đủ" đến từ quy định và risk appetite của governing body.[^btr2] Theo cách đọc của bài, điều này không mâu thuẫn với việc bản Revised là tài liệu chính thức cho kỳ thi CDMP (qua snippet).[^c6][^inf5]
- **DORA không có dòng riêng trong bảng kiểm chứng.** Điều khoản Art. 8 chỉ xuất hiện ở thân doc và danh sách nguồn, qua một bản mirror, nên bài này không gắn nhãn Verified cho nó.[^b6][^bdt] Tương tự, danh sách nguồn của doc ghi Delegated Reg. 2015/35 Art. 19 đọc trực tiếp nhưng không kèm URL, nên mục này vắng ở phần nguồn của bài.[^c9]
- **Độ độc lập của nguồn.** Theo cách đọc của bài, các claim về DMBOK (#3 đến #6) đều từ trang của chính DAMA, và #7 từ một chapter của DAMA, nên chúng không độc lập với nhau.[^inf1] Data mesh chỉ có hai bài của một tác giả.[^c12] Số 14 nguyên tắc của BCBS 239 chỉ có nguồn thứ cấp (bcbs239.com).[^c13n] Cách chia steward và custodian dựa trên một nguồn thứ cấp (thedatagovernor.com) cùng tổng hợp của note; doc không đối chiếu thêm.[^c15]
- **Chưa có bằng chứng thực nghiệm.** Doc không dẫn nghiên cứu cho thấy data owner phía business, data mesh hay đo 9 dimension cải thiện kết quả; các đánh đổi là nhận định của doc.[^inf2][^btr]
- **Trạng thái doc.** Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng, và các chú thích "thân doc" kế thừa giới hạn đó. Doc kiểm tới 2026-11-05.[^draft]

## Áp dụng: gán chủ và bản gốc cho một nhóm dữ liệu trong sáu bước

Sáu bước dưới đây là phương pháp của bài, dựng từ ba bài tập "chưa làm" của doc và từ cách vận hành CDE trong §3. Thứ tự các bước và cách gộp chúng thành một quy trình là suy luận của bài, không phải trình tự do một nguồn nêu.[^inf3][^bex]

1. **Liệt kê information concept lớn** từ capability map (khách hàng, hợp đồng, bồi thường...), và với mỗi concept gán một data owner phía business cùng một system of record.[^bex][^inf3]
2. **Thêm một hàng "dữ liệu" vào bảng loại quyết định**: ai quyết định nghĩa, chất lượng, quyền truy cập, thời gian lưu giữ. Việc thêm hàng do cơ quan đặt luật chơi quyết là cách đọc của bài.[^b1c][^inf3]
3. **Chọn CDE** từ các báo cáo bắt buộc, gán owner cho từng CDE, đặt ngưỡng theo dimension. Quy trình này là thực hành ngành.[^c15][^c5]
4. **Đối chiếu danh sách ở bước 1 với inventory ứng dụng.** Domain nào có từ hai ứng dụng cùng ghi là ứng viên cho MDM hoặc disposition.[^bex][^b4]
5. **Chỉ gắn tiêu chí pháp lý khi tổ chức nằm trong phạm vi của luật.** Mỗi khung ở trên có phạm vi riêng; xác định phạm vi trước khi dùng nó làm ngưỡng.[^b6][^inf3]
6. **Giữ việc này thường trực.** Đặt một nhịp theo dõi cố định, đưa kết quả vào lớp đo của tổ chức (thân doc §3), và lưu ý Goodhart với tỷ lệ "đạt ngưỡng".[^b3][^bdd][^inf3]

**Ví dụ minh họa (giả định).** Dùng sáu bước cho dữ liệu khách của công ty giả định. Giám đốc kinh doanh làm data owner của dữ liệu khách, vì dữ liệu này dùng cho bán hàng, gửi tin và thu nợ chứ không chỉ cho giao hàng; giám đốc vận hành chịu lợi ích vì đơn giao lại là tiền của đội xe. Phần mềm bán hàng, vốn đã giữ dữ liệu khách, là system of record; trang web ghi qua đó qua một chỗ nối hãng có sẵn, bật và chỉnh 80 triệu một lần. CDE là ba ô: địa chỉ giao, số điện thoại, tên người nhận. Một nhân viên phòng kinh doanh dành một ngày mỗi tuần, chừng 30 triệu tiền công có sẵn. Đích là dưới 30 đơn giao lại mỗi tháng, bớt chừng 86 triệu một năm so với hiện nay: năm đầu âm 24 triệu khi tính cả tiền công, từ năm sau dương 56 triệu. Tất cả con số và việc chọn người là giả định để minh họa.[^g] Việc xếp giám đốc kinh doanh vào định nghĩa "data owner là người phía business" là suy luận của bài; định nghĩa thì từ nguồn.[^c4][^inf4]

[^g]: Giả định · Công ty, hai bản địa chỉ, 150 đơn giao lại mỗi tháng, 60 nghìn mỗi lần, 108 triệu mỗi năm, chỗ nối 80 triệu, 30 triệu tiền công, đích dưới 30 đơn, 86 triệu, âm 24 và dương 56 triệu, và việc công ty ở Việt Nam là ví dụ minh họa của tập 11 theo brief và CHANNEL.md §4, không đến từ nguồn. Doc nguồn không kiểm luật Việt Nam.
[^bo]: Thân doc nguồn, Tổng quan · Luận điểm tách data governance (ai quyết gì, chịu trách nhiệm ra sao) khỏi data management (các kỷ luật thực thi); IT governance là tập con của corporate governance; với bảo hiểm, chất lượng dữ liệu technical provisions là nghĩa vụ theo Solvency II Art. 82; nối với note danh mục ứng dụng.
[^c1]: Verified (qua abstract) · ISO / BSI abstract, [ISO/IEC 38505-1:2026](https://www.iso.org/standard/87195.html): data governance là tập con của IT governance; áp dụng ISO/IEC 38500 cho dữ liệu; đối tượng là governing body. Tin cậy cao (claim #1).
[^c2]: Verified (qua snippet) · [iso.org/standard/87195](https://www.iso.org/standard/87195.html) và BSI (31/08/2026): ISO/IEC 38505-1:2026 (edition 2, 08/2026) thay bản 2017; tên mới bỏ "Governance of IT —". Tin cậy cao (claim #2).
[^c3]: Verified (đọc trực tiếp) · [DAMA, DMBOK framework](https://www.damadmbok.org/dmbok-framework): DMBOK có 11 knowledge area, governance ở tâm wheel. Tin cậy cao (claim #3).
[^c4]: Verified (qua snippet) · [DAMA, DMBOK Revision](https://www.dama.org/dama-dmbok-revision/): DMBOK2 Revised (2024) là maintenance release, không đổi framework, knowledge area hay định nghĩa của chúng; thêm AI governance và ethics; data owner là business person; "program" thành "function". Tin cậy cao (claim #4).
[^c5]: Verified (đọc trực tiếp) · [DAMA, DMBOK2 revisions](https://www.damadmbok.org/dmbok2-revisions): thứ tự PDCO; định nghĩa CDE; Data Landscape; 9 DQ dimension (thêm Currency, Reasonableness); map Shewhart/Deming. Tin cậy cao (claim #5).
[^c6]: Verified (qua snippet) · [DAMA FAQ](https://www.dama.org/dama-dmbok2-revised-edition-faqs/) và damadmbok.org: bản Revised có từ 04/2024; là chuẩn CDMP từ 10/2024; DMBOK 3.0 đang phát triển. Tin cậy cao (claim #6).
[^c7]: Verified (thứ cấp, chapter của DAMA) · [DAMA South Africa](https://dama.org.za/resources/dmbok-knowledge-areas/): định nghĩa DMBOK của data governance ("exercise of authority and control…"). Tin cậy trung bình (claim #7).
[^c8]: Verified · [EIOPA Single Rulebook](https://www.eiopa.europa.eu/rulebook/solvency-ii-single-rulebook/article-2170_en) (qua snippet) và legislation.gov.uk (doc không ghi cách đọc): Solvency II Art. 82 nêu appropriateness, completeness, accuracy; cho phép approximation. Tin cậy cao (claim #8).
[^c9]: Verified (đọc trực tiếp) · EIOPA Single Rulebook, Delegated Reg. 2015/35 Art. 19 (đọc trực tiếp theo bảng; danh sách Nguồn của doc không cho URL): tiêu chí complete, accurate, appropriate. Tin cậy cao (claim #9).
[^c10]: Verified (qua snippet) · [Better Regulation, Art. 4](https://service.betterregulation.com/document/776883) và [Deloitte](https://www.deloitte.com/lu/en/our-thinking/future-of-advice/solvency-ii-review-2025.html): Directive (EU) 2025/2 có hạn chuyển đổi 29/01/2027, áp dụng từ 30/01/2027, đăng OJ 08/01/2025. Tin cậy cao (claim #10).
[^c11]: OPEN · Tác động của Directive (EU) 2025/2 lên Art. 82 và dữ liệu technical provisions: doc chưa kiểm chứng, không có nguồn (claim #11).
[^c12]: Verified (đọc trực tiếp) · [Dehghani 2019](https://martinfowler.com/articles/data-monolith-to-mesh.html) và [Dehghani 2020](https://martinfowler.com/articles/data-mesh-principles.html), martinfowler.com: bài gốc 20/05/2019; bốn nguyên tắc 03/12/2020. Tin cậy cao (claim #12).
[^c13d]: Verified (đọc trực tiếp) · [BIS, BCBS 239](https://www.bis.org/publ/bcbs239.htm): công bố ngày 09/01/2013. Tin cậy cao (claim #13, phần ngày).
[^c13n]: Verified (thứ cấp) · [bcbs239.com](https://bcbs239.com/en/principles): 14 nguyên tắc trong 4 nhóm. Tin cậy cao theo bảng kiểm chứng, nhưng bảng ghi phần số nguyên tắc là thứ cấp (claim #13).
[^c14]: Verified (đọc trực tiếp) · [gdpr-info.eu, Art. 4](https://gdpr-info.eu/art-4-gdpr/): định nghĩa controller và processor ở Art. 4(7)–(8). Tin cậy cao (claim #14).
[^c15]: Thực hành ngành · Định nghĩa steward và custodian; quy trình CDE đến owner đến ngưỡng. Nguồn thứ cấp cộng tổng hợp của note, tin cậy trung bình (claim #15); doc ghi không có định nghĩa chuẩn duy nhất.
[^b1a]: Thân doc nguồn, §1 · Data governance dùng chung bộ Evaluate–Direct–Monitor với note về IT governance.
[^b1b]: Thân doc nguồn, §1 · Mô tả ISO/IEC 38505-1: đối tượng governing body (hội đồng quản trị, ban điều hành); mục tiêu effective, efficient, acceptable; phạm vi dữ liệu do hệ IT tạo, thu thập, lưu, bảo vệ hay kiểm soát.
[^b1c]: Thân doc nguồn, §1 · Năm loại quyết định của Weill & Ross không có loại cho dữ liệu; đề xuất của note là thêm hàng data vào ma trận decision rights, ghi ai quyết định nghĩa, chất lượng, quyền truy cập, lưu giữ.
[^b1d]: Thân doc nguồn, §1 · DMBOK có 11 knowledge area, governance ở tâm DAMA Wheel và 10 area còn lại xoay quanh.
[^bdt]: Thân doc nguồn, Diễn tiến · 04/2017 ISO/IEC 38505-1 edition 1; 12/2022 DORA được thông qua, áp dụng từ 17/01/2025; mục "Hiện hành (tại 2026-11-05)": data mesh là lựa chọn tổ chức cho dữ liệu phân tích, không thay các nghĩa vụ đó.
[^bdo]: Thân doc nguồn, Đánh đổi · Đổi "program" thành "function" là lời thừa nhận governance như dự án thường thất bại: chương trình có ngày kết thúc, dữ liệu thì không.
[^bt]: Thân doc nguồn, Thuật ngữ · Data owner chịu trách nhiệm (accountable) về quyết định trong một data domain; controller và processor là vai trò pháp lý giữa các tổ chức, khác owner và steward nội bộ.
[^b2]: Thân doc nguồn, §2 · Bảng vai trò (owner A, steward R, custodian R kỹ thuật, governance function); chỉ định nghĩa owner được neo vào DMBOK2 Revised; steward và custodian là quy ước ngành, nguồn thứ cấp; lập luận owner phải là business.
[^b3]: Thân doc nguồn, §3 · Hai bộ tiêu chí chất lượng khác nhau và không thay thế nhau; danh sách 9 dimension; chi tiết ba tiêu chí Solvency II.
[^bdd]: Thân doc nguồn, Đánh đổi · Dimension không phải mục tiêu: đo đủ 9 dimension cho mọi field tốn kém, dễ thành Goodhart, nên chỉ đo sâu trên CDE.
[^b4]: Thân doc nguồn, §4 · Information concept của capability map là ứng viên data domain; mỗi domain một system of record; nhiều ứng dụng cùng ghi thì cần MDM hoặc disposition; dữ liệu ở nhà cung cấp vẫn thuộc trách nhiệm tổ chức.
[^b5]: Thân doc nguồn, §5 · Bốn nguyên tắc data mesh và tên tiếng Anh; quan điểm của Dehghani về governance tập trung và global canonical representation; data mesh là sociotechnical, không phải sản phẩm; so sánh với bounded context của DDD.
[^b6]: Thân doc nguồn, §6 · Bảng khung pháp lý và phạm vi từng khung: Solvency II và Delegated Reg. cho (tái) bảo hiểm ở EU; Directive 2025/2 trọng tâm proportionality, reporting, sustainability risk, macroprudential; DORA Art. 8 cho tổ chức tài chính ở EU; GDPR cho mọi tổ chức xử lý dữ liệu cá nhân của người ở EU; BCBS 239 cho ngân hàng, trước hết là G-SIB, không áp dụng cho bảo hiểm.
[^b6n]: Thân doc nguồn, §6 · BCBS 239 vẫn là mẫu tham chiếu tốt nhất cho câu hỏi dữ liệu rủi ro có tổng hợp được nhanh và đúng khi khủng hoảng không.
[^btr]: Thân doc nguồn, Đánh đổi · Tập trung cho một định nghĩa duy nhất, dễ chứng minh với cơ quan quản lý nhưng tạo nút thắt; data mesh mở rộng tốt hơn nhưng đòi hỏi domain đủ năng lực, platform trưởng thành, kỷ luật interoperability; phần federated vẫn phải chứng minh được Art. 82.
[^btr2]: Thân doc nguồn, Đánh đổi · DMBOK là body of knowledge, không phải chuẩn có thể chứng nhận (nhận định của note); nó nói cần làm gì, không nói đã đủ chưa; câu trả lời "đủ" đến từ quy định và risk appetite của governing body.
[^bex]: Thân doc nguồn, Bài tập áp dụng (chưa làm) · Ba bài tập: gán owner và system of record cho 5 information concept; chọn 10 CDE trong chuỗi tính technical provisions; đối chiếu với inventory APM, domain có từ hai ứng dụng cùng ghi là ứng viên MDM hoặc disposition.
[^draft]: Thân doc nguồn, front-matter · status: draft, last_verified: 2026-11-05. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^inf1]: Suy luận của bài · Nguồn của #3 đến #6 là trang của DAMA International và #7 là chapter DAMA South Africa, theo mục Nguồn 2 và 10 của doc; doc không đánh giá độ độc lập giữa chúng.
[^inf2]: Suy luận của bài · Bảng kiểm chứng và các mục Đánh đổi của doc không dẫn nghiên cứu thực nghiệm nào về hiệu quả của các lựa chọn này.
[^inf3]: Suy luận của bài · Thứ tự sáu bước, cách gộp ba bài tập của doc và cách vận hành CDE thành một quy trình, và việc gắn bước 2 với cơ quan đặt luật chơi không có trong nguồn.
[^inf4]: Suy luận của bài · Việc giám đốc kinh doanh của công ty giả định thỏa định nghĩa "data owner là business person" là cách xếp của bài vào ví dụ, không phải điều DMBOK nói.
[^inf5]: Suy luận của bài · Việc kỳ thi CDMP dùng bản Revised không mâu thuẫn với nhận định "DMBOK không phải chuẩn có thể chứng nhận" là cách đọc của bài: kỳ thi là một việc, còn chuẩn để chứng nhận tổ chức là việc khác.
