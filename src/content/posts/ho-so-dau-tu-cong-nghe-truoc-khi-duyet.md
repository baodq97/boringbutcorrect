---
title: "Business case cho đầu tư công nghệ nên kiểm gì trước khi duyệt?"
description: "Đọc lại Five Case Model, optimism bias và benefits management của chính phủ Anh, cùng Cranfield và CBP: gốc, định nghĩa, chỗ lệch, cách dùng cho một CIO."
station: 1
published: 2026-11-08
verified: 2026-11-04
image: /og/ep04.jpg
video: {id: GCSng1pYX3s, duration: "5:19", episode: 4}
sources:
  - title: "HM Treasury (2026). Guidance on Developing Business Cases for Projects and Programmes"
    url: https://www.gov.uk/government/publications/guidance-on-developing-business-cases
  - title: "HM Treasury (2026). The Green Book (cập nhật 2026-10-28)"
    url: https://www.gov.uk/government/publications/the-green-book--2
  - title: "Infrastructure and Projects Authority (2017). Guide for Effective Benefits Management in Major Projects"
    url: https://majorprojects.org/wp-content/uploads/2024/10/Guide_for_Effective_Benefits_Management_in_Major_Projects.pdf
  - title: "Government Project Delivery. The Teal Book, Chapter 19: Benefits management (sửa 2026-07-01)"
    url: https://projectdelivery.gov.uk/teal-book/home/part-e-planning-and-control/chapter-19-benefits-management/
  - title: "Peppard, J., Ward, J. & Daniel, E. (2007). Managing the Realization of Business Benefits from IT Investments. MIS Quarterly Executive 6(1)"
    url: https://aisel.aisnet.org/misqe/vol6/iss1/3/
  - title: "Davis, P. K. (2002). Analytic Architecture for Capabilities-Based Planning, Mission-System Analysis, and Transformation. RAND MR-1513-OSD"
    url: https://www.rand.org/pubs/monograph_reports/MR1513.html
  - title: "National Research Council (2005). Naval Analytical Capabilities: Improving Capabilities-Based Planning"
    url: https://www.nationalacademies.org/read/11455/page/21
  - title: "ISO/IEC 38506:2020. Governance of IT — Application of ISO/IEC 38500 to the governance of IT enabled investments"
    url: https://www.iso.org/standard/56640.html
---

Một giám đốc công nghệ (CIO) nhận một bản đề xuất 40 trang: làm ứng dụng điện thoại, chi phí đầu tư 1,5 tỷ đồng, vận hành 300 triệu đồng/năm, hứa thêm 4 tỷ đồng doanh thu/năm. Khoản này dưới hạn mức tự ký của tổng giám đốc, nên không có hội đồng nào kiểm nó. Đó là một ví dụ giả định, dùng xuyên bài.[^0] Câu hỏi của bài không phải "bản đề xuất có đủ dày không", mà là: một hồ sơ đầu tư (business case) cho công nghệ phải trả lời những câu nào, con số lợi ích phải được xử lý thế nào trước khi được tin, và ai giữ lời hứa sau khi tiền đã chi.

**Trả lời ngắn:** một chuẩn công khai, chi tiết và đang được cập nhật là Five Case Model của Bộ Tài chính Anh (HM Treasury, bản 2026); bài này đánh giá đây là chuẩn công khai đầy đủ nhất cho business case.[^18] Nó nhìn một đề xuất bằng năm câu hỏi liên kết, và nói rõ business case là một *quá trình tư duy*, không phải việc viết.[^1][^2] Các ước tính phải được điều chỉnh optimism bias ngay từ đầu: tăng chi phí và thời gian, giảm lợi ích, tốt nhất theo sai số dự báo trong quá khứ của chính tổ chức.[^7] Mỗi lợi ích cần loại, người hưởng, thước đo và mốc so sánh (baseline), ghi trong một benefits register có owner, được giữ sang cả giai đoạn vận hành và kiểm lại ở Gate 5; trách nhiệm hiện thực hóa từng lợi ích được bàn giao cho phía nghiệp vụ.[^4][^5][^19] Giờ công tiết kiệm được là lợi ích *không giải phóng tiền* (non-cash-releasing) cho tới khi chi phí thật sự giảm.[^6][^22]

## Ba dòng tư tưởng, một khoản đầu tư

Bài này gom ba khái niệm hay đi cùng nhau trong quản lý đầu tư công nghệ thành ba dòng đọc; đó là cách phân loại của bài, không phải của nguồn.[^18] Chúng đến từ ba nơi và ba thời điểm khác nhau. Đọc riêng từng nguồn thì dễ nghĩ mỗi khung là một phương pháp trọn vẹn. Đọc theo thời gian, có thể dùng chúng như ba câu hỏi nối nhau về cùng một khoản tiền, dù phạm vi các khung có chồng lấn: nên đầu tư vào năng lực nào, đề xuất cụ thể có đáng duyệt không, và sau khi duyệt thì lợi ích có thành hiện thực không.[^18]

| Dòng | Gốc | Câu hỏi | Bản hiện hành |
|---|---|---|---|
| Capability-based planning (CBP) | Quốc phòng Mỹ, *Quadrennial Defense Review* 2001; Davis (RAND) 2002[^11] | Nên xây năng lực nào khi tương lai không chắc? | Chính phủ Mỹ không có định nghĩa chính thức (NRC 2005)[^12]; bài này đặt CBP lên capability map khi chuyển sang doanh nghiệp[^20] |
| Business case, Five Case Model | HM Treasury; guidance từ 2013, tách project/programme 2018, gộp lại 06/2026[^18] | Đề xuất này có đáng duyệt không? | HMT 2026 cùng Green Book 2026[^1] |
| Benefits management | Ward & Daniel (Cranfield) 2006, ấn bản 2 năm 2012; IPA 2017; Teal Book ch.19 từ 2024[^18] | Lợi ích đã hứa có xảy ra không, ai chịu? | Teal Book ch.19 (sửa 2026-07-01)[^9] |

Điều cần thấy ngay ở bảng: hai trong ba dòng đến từ cùng một hệ thống nhà nước Anh (HM Treasury, IPA, Government Project Delivery). Chúng nhất quán với nhau một phần vì cùng một nơi viết, không phải vì được kiểm độc lập. Theo cách đọc của bài về độ độc lập của nguồn, dòng độc lập về học thuật là Cranfield, và nguồn chuẩn quốc tế là ISO/IEC 38506.[^18]

## Business case là quá trình tư duy, không phải tài liệu

HM Treasury phân biệt business case, tài liệu đầu ra, với business case process, quá trình tư duy sinh ra tài liệu ấy. Guidance nói gọn: *"thinking, not writing"*.[^2] Một bản đề xuất dày không chứng minh được rằng quá trình ấy đã diễn ra. Ngược lại, quá trình ấy nên tương xứng (proportionality) với quy mô, chi phí, độ phức tạp và rủi ro của đề xuất (HMT 2026, 1.9).[^19]

### Năm câu hỏi, không phải năm hồ sơ

Five Case Model gồm năm case: strategic, economic, commercial, financial và management. Guidance nhấn rằng đây là năm góc nhìn liên kết về *một* đề xuất, không phải năm business case riêng.[^1]

| Case | Câu hỏi | Đề xuất phải chứng minh |
|---|---|---|
| Strategic | Vì sao cần? | Hợp chiến lược, có *case for change* |
| Economic | Phương án nào tốt nhất? | Value for money tốt nhất trong các phương án |
| Commercial | Mua thế nào? | Có thỏa thuận khả thi với nhà cung cấp |
| Financial | Có trả nổi không? | Affordable, có nguồn vốn được đồng ý |
| Management | Có giao được không? | Có governance, kế hoạch, benefits management, quản lý rủi ro |

Nguồn bảng: tên năm case theo HMT 2026 (2.1–2.3)[^1]; cột câu hỏi và nội dung chính do bài tóm tắt từ Box 1–5.[^19]

Hai điểm của bảng hay bị đọc sai. Thứ nhất, các case phát triển lặp và phụ thuộc nhau: mục tiêu ở strategic case quyết định phương án nào được xét ở economic case (HMT 2026, 2.3).[^1] Thứ hai, *economic* khác *financial*. Economic case hỏi giá trị cho xã hội, có discount; financial case hỏi túi tiền của tổ chức. Một phương án có thể tốt nhất về kinh tế mà không trả nổi, và ngược lại (HMT 2026, Table 10).[^19] Khi mượn khung cho doanh nghiệp tư nhân, bài này tạm thay "giá trị cho xã hội" bằng giá trị cho doanh nghiệp và cổ đông, và giữ sự phân biệt giữa "đáng tiền" và "trả nổi". Đó không phải phạm vi gốc của HMT; việc áp Five Case Model cho khu vực tư vẫn là OPEN.[^17]

### Ba giai đoạn, năm cổng

Guidance chia đề xuất lớn thành ba giai đoạn. Strategic Outline Case (SOC) làm phạm vi và chọn hướng đi từ longlist. Outline Business Case (OBC) chọn phương án từ shortlist. Full Business Case (FBC) ghi kết quả mua sắm, đủ năm case. Bản một giai đoạn, Business Justification Case (BJC), dành cho đề xuất nhỏ và ít rủi ro. BJC bị cấm với đề xuất *novel, contentious hoặc repercussive*.[^3][^19]

Đi kèm là năm gate review. Gate 5, *"Operational Review and Benefits Realisation"*, nằm *sau* go-live và lặp lại (HMT 2026, Table 2).[^4] Chi tiết này thay đổi cách đọc cả quy trình. Phê duyệt không phải điểm cuối; điểm cuối là lần kiểm lợi ích sau khi hệ thống đã chạy.

<figure class="fig fig-day" aria-label="Các bước theo thời gian từ đánh giá chiến lược tới vận hành; Gate 5 nằm sau go-live và lặp lại.">
<ol class="tower">
<li>Strategic assessment<small>điểm bắt đầu</small></li>
<li>SOC<small>làm phạm vi, chọn hướng đi từ longlist</small></li>
<li>OBC<small>chọn phương án từ shortlist</small></li>
<li>FBC<small>ghi kết quả mua sắm, đủ năm case</small></li>
<li>Go-live<small>hệ thống bắt đầu chạy</small></li>
<li class="hit">Vận hành: Gate 5, lặp lại<small>Operational Review and Benefits Realisation</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Các giai đoạn theo thời gian, đọc từ trên xuống; năm gate review đan xen giữa các bước. Điểm cuối là lần kiểm lợi ích sau khi hệ thống đã chạy.</figcaption>
</figure>

Trong ví dụ mở bài, ứng dụng điện thoại là thứ công ty chưa làm bao giờ. Bài giả định điều đó đủ để xếp nó vào nhóm *novel*; HMT không phân loại ví dụ này.[^0] Nếu đúng vậy thì không dùng bản một giai đoạn.[^3] Hệ quả thực hành mà bài suy ra: chia thành bước có điểm dừng, mỗi bước là một quyết định mới với số liệu mới.[^18]

## Optimism bias: trừ trước, không chờ hỏi

Green Book 2026 coi optimism bias là xu hướng có hệ thống, và practitioner phải *chủ động điều chỉnh ngay từ đầu*: tăng chi phí và thời gian, giảm lợi ích. Mức điều chỉnh nên dựa trên sai số dự báo lịch sử của chính tổ chức. Nếu không có dữ liệu thì dùng giá trị chung trong supplementary guidance, và giảm mức điều chỉnh khi dữ liệu tốt dần (Green Book 2026, 6.77–6.80).[^7][^19]

Thứ tự ưu tiên ấy đáng chú ý. Từ việc Green Book đặt dữ liệu sai số *của chính tổ chức* lên trước, bài suy ra rằng số liệu thành công của một đối thủ chỉ nên dùng thận trọng: đó là bằng chứng từ một tổ chức khác, với năng lực, khách và cách đo khác.[^18] Điểm này nối thẳng vào Gate 5: tổ chức chỉ có dữ liệu sai số khi thật sự đo lại lợi ích sau go-live. Đó là một đánh đổi: điều chỉnh bằng giá trị chung tốt hơn không điều chỉnh, nhưng dữ liệu riêng chỉ có ở tổ chức làm post-implementation review.[^20]

Áp vào ví dụ, với các số giả định của bài:[^0]

<figure class="fig fig-day" aria-label="Bóc bốn tỷ doanh thu đề xuất xuống còn không đồng lời ròng qua bốn bước trừ.">
<ol class="tower">
<li>4 tỷ doanh thu<small>bản đề xuất ghi, tính từ mọi đơn qua ứng dụng</small></li>
<li>3 tỷ doanh thu<small>trừ 1 tỷ khách web chỉ đổi kênh</small></li>
<li>600 triệu lãi<small>đổi doanh thu thành lãi, biên giả định 20/100</small></li>
<li>300 triệu lãi<small>trừ optimism bias: ba dự án gần nhất đạt khoảng một nửa</small></li>
<li class="hit">0 đồng lời ròng mỗi năm<small>trừ 300 triệu chi phí vận hành</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">2</span></span> Bóc con số lợi ích trong ví dụ. Mọi số là giả định của bài.</figcaption>
</figure>

Dòng thứ hai có thể xử lý theo hai cách, và trong ví dụ này cả hai cho cùng một con số; việc chọn khung nào là áp dụng của bài.[^18] Theo HMT, mỗi lợi ích cần một *baseline* là giá trị trong kịch bản business-as-usual.[^5] Doanh thu khách web vẫn mua nếu không có ứng dụng thuộc về baseline, không phải lợi ích mới. Cách thứ hai, bài đề xuất, là xếp phần doanh thu chuyển kênh vào định nghĩa *disbenefit* của IPA: hệ quả tiêu cực *chắc chắn* của dự án, khác với rủi ro là điều có thể xảy ra (IPA 2017, 3.5).[^10] IPA không phân loại trường hợp chuyển kênh; việc xếp này là của bài.[^18] Dòng thứ tư dùng tỷ lệ một nửa như một giả định minh họa, không phải con số của Green Book.[^0]

### Discount: chỉ dùng cho đúng bài toán

Green Book quy lợi ích và chi phí tương lai về hiện tại bằng Social Time Preference Rate (STPR). Từ 2026-10-28, STPR là 3,00% cho năm 1–30, 2,50% cho năm 31–75 và 2,25% từ năm 76. Trước lần review 2026, ba mức này là 3,5%, 3,0% và 2,5%.[^8] STPR là lãi suất *thực*: phải loại lạm phát trước rồi mới discount, không cộng lạm phát vào discount rate (Green Book 2026, 6.56).[^19] Có một giới hạn: STPR đo giá trị xã hội của khu vực công. Một dự án tư nhân discount theo chi phí vốn của chính doanh nghiệp, nên không lấy STPR làm hurdle rate.[^23]

## Benefit là gì, và không phải là gì

Định nghĩa hiện hành, theo Teal Book ch.19 (bài chỉ kiểm được qua search snippet vì trang bị chặn):

> *"…a benefit is the measurable value or other positive impact resulting from an outcome perceived as an advantage by one or more stakeholders, and which contributes towards one or more objective(s)."*

Tạm dịch: lợi ích là giá trị đo được, hoặc tác động tích cực khác, sinh ra từ một outcome mà một hay nhiều bên liên quan coi là có lợi, và góp vào một hay nhiều mục tiêu.[^9] Bản IPA 2017 hẹp hơn, bắt đầu bằng *"measurable improvement…"*. Ghi chú cập nhật của Teal Book nói định nghĩa đã được chỉnh cho khớp thuật ngữ Green Book (social benefits, social costs). Chưa xác định được chính xác lần sửa nào đổi câu chữ.[^9][^21]

IPA (2017, 3.1) rút ra ba hệ quả từ định nghĩa cũ; theo đánh giá của bài, chúng vẫn đứng được với định nghĩa mới.[^19][^18] Lợi ích là cải thiện do outcome mang lại, không phải bản thân sự thay đổi. "Ứng dụng đã lên kho ứng dụng" là output, không phải benefit. Lợi ích tùy người nhìn: lợi ích của bên này có thể là disbenefit của bên kia. Và không đo được thì không được claim là đã đạt.

### Bốn loại lợi ích

HMT 2026 (Table 5) chia lợi ích thành bốn loại; cột ví dụ là ví dụ do bài chọn.[^6][^19]

| Loại | Định nghĩa | Ví dụ |
|---|---|---|
| Cash-releasing | Tiền tệ hóa được, *làm thay đổi* thu hoặc chi của tổ chức | Giảm chi phí vận hành, tăng doanh thu phí |
| Non-cash-releasing | Tiền tệ hóa được nhưng *không đổi* thu hoặc chi | Nhân sự hiện có chuyển sang việc khác |
| Quantifiable | Đo bằng số, không bằng tiền | Điểm hài lòng khách hàng |
| Qualitative | Chỉ mô tả bằng lời | "Pride in place" |

Ranh giới giữa hai dòng đầu là chỗ một CFO nhìn vào trước. "Tiết kiệm 2.000 giờ công" là non-cash-releasing, trừ khi chi phí thật sự giảm, ví dụ không tuyển người thay thế.[^22] Trong ví dụ, bản đề xuất ghi giảm năm trăm giờ nghe điện thoại hỏi đơn mỗi năm. Người nghe điện thoại vẫn ở đó và vẫn nhận đủ lương, nên năm trăm giờ ấy thuộc dòng thứ hai. Bài đề xuất vẫn ghi nó trong sổ như một lợi ích nhưng không cộng vào lãi; đó là cách xử lý của bài, không phải quy định của Table 5.[^0][^18]

### Benefits register và người chịu

Mỗi lợi ích cần category, beneficiary, metric và baseline. Benefits register có owner, được đính kèm business case, và được duy trì sang giai đoạn vận hành (HMT 2026, 7.24, 11.21–11.22).[^5] IPA đặt vai trò rõ hơn. Senior Responsible Owner (SRO) sở hữu business case và chịu trách nhiệm cuối về lợi ích. Benefits owner ở phía nghiệp vụ nhận bàn giao trách nhiệm *chính thức, có ký nhận* trước khi dự án đóng (IPA 2017, mục 8).[^19]

Bài ghi thêm một quan sát: nếu bộ phận công nghệ làm owner của lợi ích, lợi ích thường "chết" khi dự án đóng, nên nguồn chuẩn đặt owner ở phía nghiệp vụ.[^20] Với CIO, hệ quả là ngược trực giác. Người giữ ngân sách công nghệ không nên tự nhận là người chịu lợi ích của một ứng dụng bán hàng. Người chịu nên là người đề xuất ở phía kinh doanh. Đây là suy luận của bài từ nguyên tắc ấy.[^18]

IPA mô tả sáu practice của benefits management, không tuần tự cứng, lặp ở mỗi stage và kéo dài sang vận hành: define success, identify and quantify, value and appraise, plan to realise, realise, review performance.[^19]

## Cranfield: lợi ích nằm ở thay đổi nghiệp vụ, không ở hệ thống

Dòng học thuật song song là Cranfield. J. Ward và E. Daniel (Cranfield) phát triển benefits management cho đầu tư hệ thống thông tin và công nghệ (IS/IT) trong cuốn *Benefits Management* (2006; ấn bản 2 năm 2012). Bài đọc dòng này qua bài báo năm 2007 và mục lục của sách, không qua toàn văn sách.[^18] Peppard, Ward và Daniel (2007) tóm tắt cách làm. IT và nghiệp vụ cùng trả lời bảy câu hỏi. Từ đó tách ra *ends* (cải thiện hiệu quả mục tiêu), *ways* (nghiệp vụ phải làm khác đi thế nào) và *means* (năng lực IT cho phép). Ba lớp được nối thành Benefits Dependency Network (BDN), một mạng nhân quả làm rõ ai chịu trách nhiệm cho từng thay đổi và từng lợi ích.[^13]

Mục lục của Ward và Daniel (2006) xác nhận sách có BDN. Một cách trình bày phổ biến vẽ nó thành năm cột: IS/IT enablers, enabling changes, business changes, business benefits, investment objectives. Tên năm cột chỉ thấy ở nguồn thứ cấp, nên claim này được ghi là "Có tranh luận".[^14]

<figure class="fig" aria-label="Năm cột của Benefits Dependency Network theo thứ tự.">
<ol class="loop">
<li>IS/IT enablers<small>means</small></li>
<li>Enabling changes<small>thay đổi một lần</small></li>
<li>Business changes<small>ways, thay đổi lâu dài</small></li>
<li>Benefits<small>có owner</small></li>
<li>Investment objectives<small>ends</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">3</span></span> Năm cột của Benefits Dependency Network theo một cách trình bày phổ biến. Tên năm cột chỉ thấy ở nguồn thứ cấp.</figcaption>
</figure>

Thông điệp bài này rút ra: IT chỉ là cột đầu tiên, còn phần lớn rủi ro không đạt lợi ích nằm ở hai cột thay đổi, là việc của nghiệp vụ.[^20] So với HMT, Cranfield đặt trọng tâm vào câu "phải *làm khác đi* điều gì" chứ không chỉ "phải *ghi* điều gì vào register". Hai nguồn bổ sung nhau. HMT cho cấu trúc hồ sơ và cổng; Cranfield cho cách tìm ra lợi ích và thay đổi phía sau nó. Đây là cách đối chiếu của bài.[^18]

## Capability-based planning: chọn năng lực trước khi chọn hệ thống

CBP có gốc quốc phòng. Paul K. Davis (RAND, 2002) định nghĩa:

> *"Capabilities-based planning (CBP) is planning, under uncertainty, to provide capabilities suitable for a wide range of modern-day challenges and circumstances while working within an economic framework that necessitates choice."*

Tạm dịch: CBP là lập kế hoạch trong điều kiện bất định, nhằm cung cấp các năng lực phù hợp với nhiều thách thức và hoàn cảnh, trong một khung kinh tế buộc phải chọn.[^11] Davis đặt CBP đối lập với lập kế hoạch theo một mối đe dọa và một kịch bản cụ thể, và gắn nó với *Quadrennial Defense Review* 2001.[^11] National Research Council (2005) ghi: *"There is no official government definition of capabilities-based planning"*, rồi dùng định nghĩa của Davis.[^12]

Ba ý chuyển được sang doanh nghiệp, theo cách dịch của bài: không thiết kế cho đúng một kịch bản; đầu tư vào năng lực, không vận động cho một hệ thống cụ thể; và ngân sách có hạn nên phải chọn giữa các năng lực.[^20] Khi đưa vào kiến trúc nghiệp vụ, bài này dùng capability map làm khung ổn định để hỏi năng lực nào thiếu hay yếu so với chiến lược. CBP và capability map không đồng nhất: cái trước là cách lập kế hoạch, cái sau là một công cụ để thao tác hóa nó.[^20] "Capability heat map" được nhiều nguồn thực hành nhắc tới, nhưng chưa xác nhận được trên nguồn gốc rằng đó là kỹ thuật chuẩn của BIZBOK.[^16]

Với ví dụ ứng dụng điện thoại, câu hỏi CBP đến trước mọi phép trừ: ứng dụng đỡ năng lực nào, ở chặng nào của đường đi của đơn? Nếu chặng đặt mua không phải chỗ yếu nhất, thì một đề xuất lợi ích đẹp cũng có thể đang đầu tư sai chỗ. Đây là cách áp CBP của bài.[^18]

## So các nguồn: mỗi khung trả lời câu nào

| | HMT Five Case 2026 | IPA 2017, Teal Book ch.19 | Cranfield (Peppard và cộng sự 2007) | ISO/IEC 38506:2020 |
|---|---|---|---|---|
| Loại nguồn | Guidance bắt buộc cho chi tiêu đáng kể của chính phủ Anh[^19] | Guidance của chính phủ Anh[^9] | Nghiên cứu học thuật[^13] | Chuẩn quốc tế, dành cho governing body[^15] |
| Trọng tâm | Hồ sơ và cổng duyệt[^1][^4] | Vòng đời lợi ích, vai trò[^19] | Thay đổi nghiệp vụ phía sau lợi ích[^13] | Governance của đầu tư có IT[^15] |
| Độ độc lập với HMT | — | Cùng hệ thống nhà nước Anh[^18] | Độc lập[^18] | Độc lập[^18] |
| Giới hạn đã biết | Viết cho khu vực công[^17] | Teal Book chỉ đọc qua snippet[^9] | Tên năm cột BDN chỉ ở nguồn thứ cấp[^14] | Vẫn dùng 6 principles kiểu 38500:2015[^15] |

Điểm cuối của bảng cần nói rõ. ISO/IEC 38506:2020 được confirmed năm 2025 nên vẫn hiện hành, nhưng mục lục của nó vẫn dùng sáu principle của ISO/IEC 38500:2015 (Responsibility, Strategy, Acquisition, Performance, Conformance, Human behaviour). Khi trích, cần ghi rõ edition.[^15]

## Chỗ còn phải đọc cẩn thận

- **Five Case Model cho doanh nghiệp tư nhân là OPEN.** HMT chỉ viết cho khu vực công. Chưa có nguồn gốc cho một bản tư nhân cùng cấu trúc. Bài dùng năm câu hỏi như khung tư duy, không như chuẩn bắt buộc.[^17]
- **Định nghĩa benefit hiện hành chỉ đọc qua search snippet.** Trang Teal Book bị Cloudflare chặn, nên câu trích trong bài có độ tin cậy trung bình đến cao, không phải cao.[^9]
- **CBP của Davis cũng chỉ đọc qua snippet** của PDF và trang RAND (trang trả 403).[^11]
- **Năm cột BDN là "Có tranh luận".** Cấu trúc ends / ways / means và bảy câu hỏi thì Verified; tên năm cột thì chưa thấy ở nguồn gốc.[^13][^14]
- **Attribution khó.** IPA yêu cầu lợi ích đủ cụ thể và tách biệt để quy được về đúng initiative. Theo nhận định của bài, trong thực tế nhiều lợi ích chiến lược chỉ đo được ở mức portfolio.[^20]
- **Business case dạng một lần và cách làm agile.** SOC, OBC, FBC giả định phương án được chốt trước khi giao. Sản phẩm số làm theo vòng lặp kiểm lợi ích dần qua từng release. HMT từng có tài liệu riêng năm 2014 làm rõ guidance cho dự án số và IT theo agile. Bài chưa đọc tài liệu ấy.[^20]
- **Business case như nghi thức.** Gate và template dễ thành "viết cho đủ để được duyệt"; chính HMT nhấn "thinking, not writing" và proportionality để chống lại điều đó.[^2][^19]

## Áp dụng: bảng kiểm của CIO trước khi ký

Các bước dưới đây ghép HMT, Green Book, IPA và Cranfield. Thứ tự bước, ngưỡng dừng và vai trò của CIO là suy luận của bài, không phải của nguồn.[^18]

1. **Đặt đề xuất lên bản đồ trước.** Nó đỡ năng lực nào, ở chặng nào của value stream? Năng lực ấy có đang là chỗ yếu so với chiến lược không? (CBP.)[^20]
2. **Viết một câu cho mỗi case.** Case nào không viết được một câu là dấu hiệu cần đào sâu. Đây là bài tập do bài đặt ra, không phải của HMT; năm case lấy từ HMT.[^1][^20]
3. **Xác định giai đoạn.** Nếu đề xuất là *novel, contentious* hoặc *repercussive*, không dùng bản BJC một giai đoạn.[^3] Bài đề xuất thêm: chia việc thành bước có điểm dừng.[^18]
4. **Tách baseline.** Phần nào của lợi ích vẫn xảy ra nếu không làm gì? Phần ấy không phải lợi ích. Phần nào là disbenefit chắc chắn? Trừ thẳng.[^5][^10]
5. **Đổi doanh thu thành lãi, rồi trừ optimism bias.** Ưu tiên tỷ lệ đạt được của các dự án cũ của chính công ty; nếu chưa có, dùng giá trị chung và ghi rõ.[^7]
6. **Phân loại từng lợi ích** theo bốn loại.[^6] Bài đề xuất không cộng non-cash-releasing vào lãi; HMT không nói câu này.[^18]
7. **Ghi benefits register:** baseline, thước đo, người hưởng, và một owner ở phía nghiệp vụ, có ký nhận.[^5][^19]
8. **Hẹn Gate 5 ngay khi duyệt.** Ghi ngày đo lại sau go-live. Kết quả đo là dữ liệu optimism bias cho đề xuất sau.[^4][^7]

Ở ví dụ mở bài, tám bước dẫn tới một quyết định cụ thể với số giả định. Không duyệt cả 1,5 tỷ đồng. Duyệt 200 triệu đồng, nằm trong 1,5 tỷ nếu làm tiếp, để thử một quý ở vùng giao nhanh (80/100 đơn). Điểm dừng: lãi mới của quý phải vượt 75 triệu đồng, tức một phần tư chi phí vận hành năm. Owner là giám đốc kinh doanh.[^0]

Video đi kèm (tập 04 của Boring But Correct) kể cùng chuyện qua mắt giám đốc công nghệ của một công ty bán lẻ giả định. Bài này là phần nguồn và lập luận đứng sau nó.

[^0]: Giả định · Mọi số của công ty trong bài (1,5 tỷ, 300 triệu/năm, 4 tỷ, 1 tỷ đổi kênh, biên 20/100, đạt một nửa, 500 giờ, 200 triệu, 80/100 đơn, 75 triệu/quý) là số minh họa của tập 04, không đến từ nguồn.
[^1]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 2.1–2.3: năm case; năm góc nhìn liên kết, không phải năm business case; strategic case quyết định phương án ở economic case.
[^2]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 1.2, 3.2, 3.4: business case là tài liệu, business case process là quá trình tư duy; "thinking, not writing".
[^3]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 3.x, 4.10–4.21: SOC → OBC → FBC; BJC một giai đoạn, cấm cho đề xuất novel, contentious, repercussive.
[^4]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), Table 2: Gate 1–5; Gate 5 "Operational Review and Benefits Realisation", lặp lại sau go-live.
[^5]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 7.24, 11.21–11.22: category, beneficiary, metric, baseline; benefits register có owner, đính kèm business case, duy trì sang vận hành.
[^6]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), Table 5: cash-releasing, non-cash-releasing, quantifiable, qualitative.
[^7]: Verified · [HM Treasury, The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book--2), 6.77–6.80: optimism bias điều chỉnh ngay từ đầu; nên dựa trên sai số dự báo lịch sử của chính tổ chức.
[^8]: Verified · [The Green Book (2026)](https://www.gov.uk/government/publications/the-green-book--2), 6.54; Terms of Reference của Discount Rate Review 2026: STPR 3,00% / 2,50% / 2,25%; trước đó 3,5% / 3,0% / 2,5%.
[^9]: Verified · [Teal Book ch.19](https://projectdelivery.gov.uk/teal-book/home/part-e-planning-and-control/chapter-19-benefits-management/) (qua search snippet; trang bị chặn) cho định nghĩa hiện hành; [IPA (2017)](https://majorprojects.org/wp-content/uploads/2024/10/Guide_for_Effective_Benefits_Management_in_Major_Projects.pdf), 3.1 cho bản "measurable improvement…". Tin cậy trung bình đến cao.
[^10]: Verified · [IPA (2017)](https://majorprojects.org/wp-content/uploads/2024/10/Guide_for_Effective_Benefits_Management_in_Major_Projects.pdf), 3.5: disbenefit khác risk, là hệ quả tiêu cực chắc chắn của dự án.
[^11]: Verified · [Davis (2002), RAND MR-1513](https://www.rand.org/pubs/monograph_reports/MR1513.html) (qua snippet của PDF và trang RAND): định nghĩa CBP; đối lập với lập kế hoạch theo một threat và một scenario; gắn với QDR 2001. Tin cậy trung bình đến cao.
[^12]: Verified · [NRC (2005)](https://www.nationalacademies.org/read/11455/page/21), ch.2: "There is no official government definition of capabilities-based planning".
[^13]: Verified · [Peppard, Ward & Daniel (2007)](https://aisel.aisnet.org/misqe/vol6/iss1/3/) (abstract): bảy câu hỏi; ends, ways, means; mạng nhân quả làm rõ accountability.
[^14]: Có tranh luận · Mục lục Ward & Daniel (2006) xác nhận có BDN; tên năm cột chỉ thấy ở nguồn thứ cấp (một tài liệu đào tạo thương mại). Tin cậy trung bình.
[^15]: Verified · [ISO/IEC 38506:2020](https://www.iso.org/standard/56640.html) (qua snippet): confirmed 2025; mục lục dùng 6 principles kiểu 38500:2015. Tin cậy trung bình đến cao.
[^16]: OPEN · "Capability heat map" là kỹ thuật chuẩn của BIZBOK: chỉ thấy ở nguồn vendor và thực hành.
[^17]: OPEN · Five Case Model áp cho doanh nghiệp tư nhân với cùng cấu trúc: HMT chỉ nói về khu vực công; chưa có nguồn gốc cho bản tư nhân.
[^18]: Suy luận của bài · Ghép từ các nguồn đã dẫn; thứ tự ba dòng, nhận xét về độ độc lập nguồn và cách áp vào ví dụ là của người viết.
[^19]: Đọc từ nguồn, chưa kiểm riêng · HMT 2026 (1.9 proportionality; §3.2 mô tả SOC, OBC, FBC, BJC; 7.24, 11.21 owner cho từng benefit; Box 1–5; Table 10 economic khác financial), Green Book 2026 (6.56 không cộng lạm phát; 6.77–6.80 dùng giá trị chung khi thiếu dữ liệu, giảm dần khi dữ liệu tốt lên), IPA 2017 (3.1 hệ quả của định nghĩa; mục 8 SRO và benefits owner; sáu practice).
[^20]: Nhận định của bài · Owner IT làm lợi ích "chết"; dữ liệu optimism bias chỉ có khi làm PIR; attribution ở mức portfolio; tài liệu agile 2014 của HMT; IT là cột đầu tiên của BDN; ba ý CBP chuyển sang doanh nghiệp. Đây không phải lời của nguồn gốc.
[^21]: OPEN · Lần sửa nào của Teal Book đổi định nghĩa benefit từ "measurable improvement" sang "measurable value or other positive impact": chưa xác định.
[^22]: Nhận định của bài · Ví dụ "2.000 giờ công là non-cash-releasing trừ khi chi phí thật sự giảm" là cách bài này áp Table 5, không phải ví dụ của HMT.
[^23]: Nhận định của bài · Khu vực công đo social value, discount bằng STPR; doanh nghiệp tư nhân discount theo chi phí vốn của chính họ, nên không lấy STPR làm hurdle rate.
