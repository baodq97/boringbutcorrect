---
title: "Quản lý danh mục ứng dụng: TIME, pace layers và 7 Rs trả lời ba câu hỏi nào?"
description: "Giữ, đầu tư, chuyển hay bỏ một ứng dụng? Gốc và định nghĩa của TIME, pace layers, các bộ R, định luật Lehman, technical debt, và chỗ nguồn còn hở."
station: 1
published: 2026-11-07
verified: 2026-11-07
image: /og/ep10.jpg
sources:
  - title: "Gartner — How to Assess the Fitness of Your Application Portfolio (24/06/2026), abstract"
    url: https://www.gartner.com/en/documents/8043833
  - title: "Gartner — \"Gartner Says Adopting a Pace-Layered Application Strategy Can Accelerate Innovation\" (14/02/2012), Business Wire (qua snippet)"
    url: https://www.businesswire.com/news/home/20120214006233/en/Gartner-Adopting-Pace-Layered-Application-Strategy-Accelerate-Innovation
  - title: "Gartner — \"Gartner Identifies Five Ways to Migrate Applications to the Cloud\" (16/05/2011), WebWire (qua snippet)"
    url: https://www.webwire.com/ViewPressRel.asp?aId=137646
  - title: "AWS — About the migration strategies (đọc trực tiếp)"
    url: https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html
  - title: "Orban, S. — 6 Strategies for Migrating Applications to the Cloud (01/11/2016)"
    url: https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/
  - title: "Microsoft — Select your cloud migration strategies, Cloud Adoption Framework (ms.date 2025-07-15)"
    url: https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy
  - title: "Regulation (EU) 2022/2554 (DORA), Art. 3(18) và Art. 8 — bản mirror"
    url: https://www.digital-operational-resilience-act.com/Article_8.html
  - title: "Lehman, M. M. (1980). Programs, Life Cycles, and Laws of Software Evolution. Proceedings of the IEEE 68(9), 1060–1076"
    url: https://userweb.cs.txstate.edu/~rp31/papersSP/lehman1-2.pdf
  - title: "Cunningham, W. (1992). The WyCash Portfolio Management System, OOPSLA '92 Experience Report"
    url: https://c2.com/doc/oopsla92.html
  - title: "Thứ cấp: Wikipedia — Shearing layers"
    url: https://en.wikipedia.org/wiki/Shearing_layers
  - title: "Thứ cấp: itsystemes.fr — Gartner's TIME framework"
    url: https://www.itsystemes.fr/en/articles/framework-time-de-gartner-quelle-appli-moderniser-en-premier
---

Một công ty bán hàng qua mạng (ví dụ giả định) có mười sáu phần mềm: mười hai thuê, bốn tự làm. Hội đồng quản trị muốn cắt chừng một phần năm cho đỡ tiền. Sổ của giám đốc công nghệ ghi tên, hợp đồng và tiền thuê, nhưng không ghi phần mềm nào đỡ năng lực nào, ai chịu trách nhiệm, và hai phần mềm nào làm trùng việc.[^g] Muốn trả lời "cắt cái nào" thì cần một công cụ để chấm từng phần mềm. Bài này hỏi: nghề có những công cụ nào, chúng từ đâu ra, định nghĩa chính xác là gì, và nguồn của chúng chắc tới đâu.

**Trả lời ngắn:** theo doc nguồn, quản lý danh mục ứng dụng (application portfolio management, APM) là một vòng lặp định kỳ, không phải một lần dọn dẹp. Vòng lặp dùng ba công cụ trả lời ba câu khác nhau: TIME (giữ, đầu tư, chuyển hay bỏ), pace layers (quản trị nhanh hay chậm) và các bộ R (đi bằng đường nào).[^loop] Mức bằng chứng của ba công cụ khác nhau: TIME chỉ kiểm được qua abstract và hai trục của nó là OPEN; pace layers dựa trên press release đọc qua snippet; các bộ R gồm tài liệu AWS và Microsoft đọc trực tiếp cùng Gartner 5 Rs đọc qua snippet.[^t1][^ax][^pace][^aws][^caf][^r5]

## Một vòng lặp, ba công cụ

Doc vẽ APM thành bốn bước nối nhau: inventory (có gì, ai sở hữu, phục vụ năng lực nào), assess (hai trục), disposition (số phận của ứng dụng, theo TIME), execution path (các bộ R hoặc strategies). Cả vòng được chạy lại hằng năm; việc lặp lại không phải bước thứ năm. Nhịp quản trị của từng ứng dụng do pace layer quyết định.[^loop]

<figure class="fig" aria-label="Vòng lặp bốn bước của quản lý danh mục ứng dụng: liệt kê, chấm hai trục, quyết số phận theo TIME, chọn đường đi theo các bộ R, rồi lặp lại hằng năm">
<ol class="loop">
<li>Inventory<small>có gì, ai sở hữu, phục vụ năng lực nào</small></li>
<li>Assess<small>giá trị kinh doanh và độ hợp kỹ thuật</small></li>
<li>Disposition<small>TIME: giữ, đầu tư, chuyển, bỏ</small></li>
<li>Execution path<small>chọn migration strategy theo bộ R của AWS hoặc Microsoft CAF, rồi quay lại Inventory hằng năm</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Vòng lặp APM theo sơ đồ của doc nguồn. Pace layer không phải một bước mà là nhịp governance áp lên cả vòng.</figcaption>
</figure>

Doc nhấn mạnh ba công cụ hay bị trộn lẫn dù mỗi công cụ trả lời một câu khác.[^loop] Bảng dưới so sánh chúng theo gốc, cách nguồn được đọc và mức chắc.

| | TIME | Pace layers | Các bộ R |
|---|---|---|---|
| Câu hỏi | Giữ, đầu tư, chuyển hay bỏ?[^loop] | Thay đổi nhanh hay chậm, quản trị theo nhịp nào?[^loop] | Nếu chuyển, đi bằng đường nào?[^loop] |
| Gốc | Gartner; năm công bố chưa rõ[^ax] | Gartner, 14/02/2012; ý tưởng gốc là shearing layers của Brand, 1994[^pace][^brand] | Gartner 5 Rs (05/2011), AWS 6 Rs (11/2016), AWS 7 Rs, Microsoft CAF (07/2025)[^r5][^aws][^caf] |
| Cách doc đọc nguồn | Abstract của bài nghiên cứu 06/2026; nội dung chi tiết có phí[^t1][^body2] | Press release, qua snippet[^pace] | AWS và Microsoft đọc trực tiếp; Gartner 2011 qua snippet[^aws][^caf][^r5] |
| Mức chắc | Tên và việc Gartner còn dùng: Verified (qua abstract); hai trục: OPEN[^t1][^ax] | Verified (qua snippet)[^pace] | Verified[^r5][^aws][^caf] |

## Inventory: chưa có chuẩn chung trong phạm vi doc kiểm

Doc ghi các thuộc tính tối thiểu của một dòng trong inventory theo năm nhóm: ownership (business owner, technical owner), giá trị (năng lực và value stream được hỗ trợ, số người dùng), chi phí (run cost theo ứng dụng), công nghệ (stack, phiên bản, ngày end-of-support) và rủi ro (độ quan trọng của dữ liệu, phụ thuộc, nhà cung cấp bên thứ ba). Doc xếp danh sách này là thực hành ngành, không có chuẩn chung.[^inv][^body1]

Với các thực thể tài chính thuộc phạm vi DORA ở EU (doc kiểm cho bảo hiểm), doc ghi inventory là nghĩa vụ pháp lý.[^dorascope] DORA Art. 8(1) yêu cầu xác định, phân loại và lập tài liệu cho các chức năng kinh doanh có hỗ trợ ICT cùng tài sản ICT phục vụ chúng, rà lại ít nhất hằng năm. Art. 8(4) yêu cầu map các tài sản critical và phụ thuộc giữa chúng. Art. 8(7) yêu cầu đánh giá rủi ro riêng cho mọi legacy ICT system ít nhất hằng năm.[^dora] Doc không kiểm một khung tương đương cho ngành khác.[^dorascope]

## TIME: định nghĩa và điều chưa kiểm được

TIME là viết tắt của Tolerate, Invest, Migrate, Eliminate. Gartner vẫn dùng khung này để đánh giá "application fitness", theo bài nghiên cứu ngày 24/06/2026.[^t1] Doc chỉ đọc được abstract của bài đó; phần nội dung chi tiết của Gartner cần trả phí.[^body2]

Hai trục của TIME là giá trị kinh doanh (business value hay functional fit) và độ hợp kỹ thuật (technical fit). Đây là điểm yếu nhất của khung: doc chỉ có một nguồn thứ cấp (itsystemes.fr) cho hai trục này, và ghi năm gốc chưa rõ.[^ax] Bảng dưới là cách trình bày của doc, dựng từ nguồn thứ cấp và thân doc §2, không phải định nghĩa nguyên văn của Gartner.[^body2]

| Ô | Giá trị kinh doanh | Độ hợp kỹ thuật | Ý nghĩa theo doc |
|---|---|---|---|
| Tolerate | thấp[^ax][^body2] | cao[^ax][^body2] | Giữ, chi tối thiểu[^body2] |
| Invest | cao[^ax][^body2] | cao[^ax][^body2] | Mở rộng, đầu tư thêm[^body2] |
| Migrate | cao[^ax][^body2] | thấp[^ax][^body2] | Giữ chức năng, thay nền; doc ghi đây cũng là nơi phần lớn legacy theo nghĩa DORA nằm[^body2] |
| Eliminate | thấp[^ax][^body2] | thấp[^ax][^body2] | Retire hoặc hợp nhất, sau khi kiểm chứng năng lực[^body2] |

Doc ghi thêm hai điều kèm theo bốn ô.
- Eliminate cần một bước kiểm chứng: năng lực mà ứng dụng phục vụ đã được ứng dụng khác bao chưa. Map chéo năng lực với ứng dụng phát hiện được trường hợp hai hệ cùng tự động hóa một năng lực.[^body2]
- Tolerate không có nghĩa là bỏ mặc. Doc đọc luật Lehman I (mục dưới) như sau: nếu nền suy giảm, ứng dụng sẽ trượt dần sang Eliminate hoặc Migrate.[^body2][^debt]

Doc cũng ghi giới hạn của ma trận 2×2: TIME bỏ qua chi phí chuyển đổi và rủi ro thực hiện, nên một ứng dụng nằm ô Migrate vẫn có thể nên Tolerate thêm vài năm nếu chi phí chuyển lớn hơn lợi ích. Đó là chỗ cần business case. Đây là nhận định của doc, không kèm số liệu.[^tradeoff]

## Pace layers: Gartner 2012 và gốc từ ngành xây dựng

Ngày 14/02/2012, Gartner nhận định nhiều tổ chức dùng một chiến lược duy nhất để chọn, triển khai và quản lý mọi ứng dụng, và đề xuất chia ứng dụng thành ba lớp có tốc độ thay đổi khác nhau.[^pace][^p3] Doc trích dẫn định nghĩa của lớp thứ nhất từ press release (qua snippet); hai lớp còn lại do thân doc §3 mô tả.[^pace][^p3]

| Lớp | Đặc điểm theo Gartner 2012 (lớp 1: press release; lớp 2 và 3: thân doc §3) | Hệ quả governance |
|---|---|---|
| Systems of Record | Package hoặc hệ legacy tự xây, xử lý giao dịch lõi và master data; thay đổi chậm vì quy trình ổn định, phổ biến giữa các tổ chức, thường chịu ràng buộc pháp lý[^pace] | Change control chặt; ưu tiên chuẩn hóa và package[^inv] |
| Systems of Differentiation | Hỗ trợ quy trình riêng của công ty hoặc đặc thù ngành[^p3] | Cấu hình hoặc xây riêng; thay đổi theo chu kỳ trung bình[^inv] |
| Systems of Innovation | Ứng dụng mới cho nhu cầu hoặc cơ hội mới nổi[^p3] | Thử nghiệm nhanh, ngân sách kiểu option, chấp nhận thất bại[^inv] |

Cột hệ quả governance là tổng hợp của doc, mức tin cậy trung bình, không phải lời của Gartner.[^inv]

**Gốc.** Ý tưởng là shearing layers của Stewart Brand trong *How Buildings Learn* (1994): công trình thích nghi được vì các lớp nhanh (dịch vụ) không bị lớp chậm (kết cấu) kìm lại.[^p3] Doc kiểm điều này qua Wikipedia, tức nguồn thứ cấp, độ tin cậy trung bình, và ghi thêm rằng Gartner đăng ký nhãn hiệu cho biến thể của mình.[^brand]

**Quan hệ với TIME.** Theo doc, TIME nói nên làm gì với ứng dụng, còn pace layer nói ứng dụng ấy nên được quản trị nhanh hay chậm.[^p3] Doc lấy ví dụ một hệ core insurance policy admin thường thuộc System of Record; nếu nó rơi vào ô Migrate, cách đi an toàn là thay dần từng phần (strangler fig, cách chia rủi ro theo từng năng lực) thay vì viết lại một lần.[^p3] Đây là đánh giá của doc, chưa kèm bằng chứng thực nghiệm.[^tradeoff]

## Từ 5 Rs đến 8 strategies: cùng tên, khác nghĩa giữa các bộ

Các bộ R là danh sách đường đi khi chuyển một ứng dụng. Chúng đổi qua bốn mốc, và cùng một tên có thể mang nghĩa khác nhau tùy bộ.

| Mốc | Bộ | Thành phần |
|---|---|---|
| 05/2011 | Gartner 5 Rs (Richard Watson) | Rehost, Refactor, Revise, Rebuild, Replace[^r5]; theo thân doc, Rehost là IaaS, Refactor và Rebuild là PaaS, Replace là SaaS[^r5g] |
| 01/11/2016 | AWS 6 Rs (Stephen Orban) | Rehost, Replatform, Repurchase, Refactor hoặc Re-architect, Retire, Retain[^aws] |
| hiện hành | AWS 7 Rs | Thêm Relocate[^aws]; theo thân doc, đó là lift-and-shift ở mức hypervisor[^hyp]; mốc thêm chính xác chưa rõ[^dien] |
| 07/2025 | Microsoft CAF (ms.date 2025-07-15) | Tám strategies: Retire, Retain, Rehost, Replatform, Refactor, Rearchitect, Rebuild, Replace[^caf] |

Hai chỗ lệch nghĩa đáng ghi.[^hist]
- "Refactor" của Gartner 2011 nghĩa là chạy trên PaaS. "Refactor" của CAF nghĩa là sửa code để giảm technical debt. AWS gộp "Refactor or re-architect" làm một, trong khi CAF tách Rearchitect và Rebuild riêng.[^hist][^caf]
- Retire và Retain chỉ xuất hiện từ bộ của AWS. Gartner 2011 chỉ có các đường di chuyển, không có lựa chọn không di chuyển.[^hist]

Doc ghi hai lời khuyên, mỗi lời từ một nguồn.
- AWS: refactor không được khuyến nghị cho large migration.[^adv] Theo thân doc, lý do là vừa chuyển vừa hiện đại hóa là đường phức tạp nhất; nên rehost, relocate hoặc replatform trước, hiện đại hóa sau khi đã lên cloud.[^advr]
- Gartner 2011 (Watson): mọi quyết định migration về bản chất là quyết định hiện đại hóa ứng dụng hoặc hạ tầng, nên đặt trong bối cảnh APM, không quyết từng ứng dụng một cách riêng lẻ.[^hist]

Lời khuyên của AWS có phản biện trong doc: rehost mang nguyên technical debt lên cloud và có thể làm chi phí run tăng. Doc không kèm số liệu cho phản biện này.[^tradeoff]

**Map gợi ý TIME → R.** Doc đề xuất: Tolerate thường đi với Retain (đôi khi Rehost hoặc Relocate khi rời data center); Invest với Replatform, Refactor, Rearchitect; Migrate với Replace hoặc Repurchase (SaaS), Rebuild, hoặc strangler fig dần dần; Eliminate với Retire, sau khi chuyển năng lực sang hệ khác. Doc nói thẳng đây là tổng hợp của note, không phải chuẩn.[^maprs]

## Vì sao danh mục tự xuống cấp: Lehman 1980 và Cunningham 1992

**Lehman.** Bài báo của Lehman trong *Proceedings of the IEEE* (09/1980) nêu các định luật tiến hóa phần mềm cho E-program, tức chương trình cơ giới hóa một hoạt động của con người hay xã hội. Doc ghi hai định luật.[^lehman]
- I, Continuing Change: chương trình đang dùng phải thay đổi liên tục, nếu không sẽ kém hữu ích dần; quá trình này tiếp diễn cho tới khi thay bằng một phiên bản dựng lại có hiệu quả chi phí hơn.[^lehman]
- II, Increasing Complexity: khi chương trình liên tục được sửa, độ phức tạp tăng do cấu trúc xuống cấp, trừ khi có công sức bỏ ra để giữ hoặc giảm nó.[^lehman]

Doc đọc hệ quả cho APM như sau: độ hợp kỹ thuật (technical fit) của một ứng dụng tự giảm theo thời gian nếu không được đầu tư, nên một ô TIME chỉ là ảnh chụp tại một thời điểm và phải đánh giá lại định kỳ.[^debt] Doc cũng đọc luật I như gợi ý rằng thay thế là kết cục tự nhiên, và đối trọng là rủi ro của viết lại một lần cho hệ lõi.[^tradeoff]

**Cunningham.** Ẩn dụ technical debt xuất hiện trong báo cáo kinh nghiệm về hệ WyCash tại OOPSLA '92. Câu doc trích:[^cunn]

> *"Shipping first time code is like going into debt. A little debt speeds development so long as it is paid back promptly with a rewrite… The danger occurs when the debt is not repaid. Every minute spent on not-quite-right code counts as interest on that debt."*

Dịch: giao code lần đầu giống như đi vay. Một khoản nợ nhỏ làm phát triển nhanh hơn, miễn là sớm được trả bằng cách viết lại. Nguy hiểm xảy ra khi nợ không được trả: mỗi phút bỏ vào code chưa đúng hẳn đều tính là lãi của khoản nợ ấy.[^cunn]

Điều doc nói về nguyên bản: debt là khoảng cách giữa code và hiểu biết hiện tại về bài toán, được trả bằng consolidation hoặc rewrite, và không phải cái cớ cho code cẩu thả.[^debt] Doc thêm một nối kết ở tầng portfolio: technical debt tích lũy là thứ kéo ứng dụng từ Invest xuống Migrate. Đó là cách đọc của doc, không phải của Cunningham.[^debt]

## Những khái niệm hay bị nhầm

- **TIME không phải bộ R.** TIME ra số phận, bộ R ra đường đi; doc dùng một bảng map gợi ý để nối hai bên và ghi rõ nó không phải chuẩn.[^loop][^maprs]
- **Tolerate không phải bỏ mặc.** Doc đọc luật Lehman I theo hướng nền không được đầu tư sẽ suy giảm.[^body2][^debt]
- **Legacy theo nghĩa pháp lý không phải "cũ".** Định nghĩa của DORA Art. 3(18), như doc ghi: hệ ICT đã end-of-life, không còn phù hợp để nâng cấp hay sửa vì lý do kỹ thuật hoặc thương mại, hoặc không còn được nhà cung cấp hỗ trợ, nhưng vẫn đang dùng để hỗ trợ chức năng của tổ chức.[^dora] Theo cách đọc của bài, định nghĩa này gắn với việc hết hỗ trợ và hết khả năng nâng cấp, không nhắc tới tuổi.[^inf1]
- **Technical debt không phải cớ cho code cẩu thả.** Nguyên bản là khoảng cách giữa code và hiểu biết hiện tại, trả bằng consolidation hoặc rewrite.[^debt]
- **Hai chữ "refactor".** Gartner 2011 và CAF dùng cùng chữ cho hai việc khác nhau (xem mục "Từ 5 Rs đến 8 strategies").[^hist]

## Diễn tiến

Doc ghi các mốc sau.[^dien]
- 1980: Lehman công bố các định luật tiến hóa phần mềm.
- 1992: Cunningham đưa ra ẩn dụ technical debt.
- 1994: Brand, *How Buildings Learn* (shearing layers).
- 05/2011: Gartner 5 Rs cho cloud migration.
- 02/2012: Gartner Pace-Layered Application Strategy.
- 11/2016: AWS 6 Rs, thêm Retire và Retain; sau đó thành 7 Rs khi thêm Relocate, mốc chính xác chưa rõ.
- 12/2022: DORA được thông qua, áp dụng từ 17/01/2025.
- 07/2025: Microsoft CAF nêu 8 migration strategies.
- 06/2026: Gartner vẫn dùng TIME cho application fitness.
- Hiện hành (tại 2026-11-05, ngày doc kiểm): APM là vòng lặp inventory, assess, disposition (TIME), execution (7 Rs hoặc CAF), với nhịp quản trị theo pace layer.

## Chỗ còn phải đọc cẩn thận

- **Hai trục của TIME là OPEN.** Bảng kiểm chứng của doc chỉ có một nguồn thứ cấp (itsystemes.fr), và ghi năm gốc chưa rõ.[^ax] Thân doc lại viết hai trục "được nhiều nguồn thứ cấp mô tả thống nhất", trong khi bảng chỉ dẫn một nguồn; bài này theo bảng, vì bảng là nơi doc ghi trạng thái.[^ax][^body2] Bài này suy ra: định nghĩa chính xác của từng ô chưa có nguồn gốc để trích.[^inf4]
- **Nội dung chi tiết của TIME bị chặn sau tường phí.** TIME đọc qua abstract và doc ghi nội dung chi tiết của Gartner cần trả phí; pace layers và 5 Rs chỉ được đọc qua snippet của press release.[^t1][^body2][^pace][^r5] Những gì bài ghi về Gartner chỉ ở mức đó, không phải toàn văn nghiên cứu.
- **Nguồn của hai bộ R hiện hành là tài liệu của chính hãng.** AWS Prescriptive Guidance và Microsoft Learn (CAF) là tài liệu của nhà cung cấp, theo danh sách nguồn của doc. Doc không đối chiếu với nguồn độc lập, và việc CAF nêu 8 migration strategies, có cả "replace bằng SaaS/AI", chỉ có trong mục Diễn tiến của thân doc; bảng kiểm chứng chỉ xác nhận danh sách tám strategies.[^vendor][^caf][^dien]
- **Độ độc lập của nguồn.** Theo cách đọc của bài, pace layers và 5 Rs đều dựa vào press release của chính Gartner, tức nguồn tự công bố. Với 5 Rs, doc còn dẫn AWS glossary ghi "5 Rs… 2011"; doc không nói glossary ấy có độc lập với Gartner hay không.[^r5] Gốc Brand 1994 đi qua Wikipedia.[^brand] Theo cách đọc của bài, chỉ Lehman và Cunningham có chỗ dựa rõ là đọc trực tiếp (bảng kiểm chứng #10, #11); AWS, Microsoft và DORA ở mục Nguồn 4, 5, 6.[^vendor]
- **Mốc Relocate chưa rõ.** Doc ghi AWS thêm Relocate sau 2016 nhưng chưa tìm ra thời điểm.[^dien]
- **Phần "thực hành ngành" không có chuẩn.** Thuộc tính inventory, map TIME → R và hệ quả governance của pace layers là tổng hợp của doc, độ tin cậy trung bình.[^inv][^maprs]
- **Chưa có bằng chứng thực nghiệm.** Doc không dẫn nghiên cứu cho thấy TIME hay pace layers cải thiện kết quả. Các đánh đổi (ma trận quá đơn giản, rủi ro đóng khung của pace layers, rehost mang theo nợ) là nhận định của doc.[^tradeoff] Riêng rủi ro đóng khung doc ghi là nhận định của note: một hệ System of Record vẫn có thể là nguồn khác biệt, ví dụ engine định phí, và phân lớp cứng dễ bỏ quên đầu tư cho lớp chậm.[^tradeoff]
- **Trạng thái doc.** Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng. Các chú thích "thân doc" ở trên và dưới kế thừa giới hạn đó.[^draft]

## Áp dụng: chấm một danh mục trong sáu bước

Các bước dưới đây là phương pháp của bài, dựng từ ba bài tập trong doc (inventory 10 ứng dụng, xếp vào TIME và pace layer, viết disposition cho một ứng dụng ở ô Migrate). Doc ghi các bài tập này là chưa làm. Đây là quy trình đề xuất của bài, suy luận từ doc; không phải trình tự do một nguồn nêu. Thứ tự bước, tiêu chí chấm và việc gắn nhịp đều là suy luận của bài.[^inf2]

1. **Ghi năng lực và người chịu trước khi ghi tiền.** Mỗi dòng cần business owner, technical owner, năng lực được đỡ, run cost, ngày hết hỗ trợ của nhà cung cấp.[^inv][^inf2]
2. **Đặt các dòng lên bản đồ năng lực** và đánh dấu năng lực có từ hai ứng dụng trở lên. Đó là danh sách ứng viên Eliminate, chưa phải quyết định.[^body2][^inf2]
3. **Chấm hai trục bằng tiêu chí viết ra giấy**, trước khi chấm từng ứng dụng. Doc không đưa thang điểm hay ngưỡng, nên tiêu chí là việc của người dùng; và vì hai trục là OPEN, xem bốn ô như nhãn ưu tiên, không như kết luận của Gartner.[^ax][^inf2]
4. **Với ô Migrate và Eliminate, thêm chi phí chuyển và rủi ro thực hiện** trước khi chốt, vì TIME bỏ qua hai thứ này. Với Eliminate, kiểm lại năng lực đã có nơi khác đỡ chưa.[^tradeoff][^body2][^inf2]
5. **Chọn đường đi bằng bộ R rồi gắn nhịp duyệt theo pace layer.** Dùng map gợi ý làm điểm xuất phát, nhớ rằng nó không phải chuẩn.[^maprs] Với migration lớn, AWS không khuyến nghị refactor.[^adv] Thứ tự rehost, relocate hoặc replatform trước là diễn giải trong thân doc.[^advr] Cách ghép các việc này thành một bước là suy luận của bài.[^inf2]
6. **Đặt ngày xét lại** (doc vẽ vòng lặp hằng năm) và ghi rõ điều kiện làm ô đổi, vì ô Tolerate suy giảm theo thời gian.[^loop][^lehman][^inf2]

**Ví dụ minh họa (giả định).** Trong công ty ở đầu bài, hai phần mềm gửi tin cho khách (một của phòng kinh doanh, một của đội xe) cùng đỡ một năng lực. Theo bước 2, đây là ứng viên Eliminate;[^inf5] bỏ một cái tiết kiệm 40 triệu một năm, với điều kiện năng lực đã có phần mềm kia đỡ. Phần mềm kế toán cũ chạy sổ theo dõi nợ của các cửa hàng mua sỉ, 60 triệu một năm, nhà cung cấp ngừng hỗ trợ sau ba năm: giá trị kinh doanh cao, nền yếu, tức ô Migrate theo bốn ô ở trên. Thuê phần mềm kế toán có sẵn tốn 150 triệu một năm và 100 triệu một lần để chuyển dữ liệu; đó là chi phí chuyển mà TIME không tự tính, nên cần business case trước khi ký. Đường đi thuộc nhóm Replace thay vì Rebuild theo map gợi ý, và phần mềm kế toán là loại quy trình phổ biến giữa các công ty, nên hợp với việc thuê package có sẵn. Mọi con số và việc xếp ô ở đây là giả định để minh họa.[^g][^inf3]

[^g]: Giả định · Công ty, 16 phần mềm (12 thuê, 4 tự làm), việc hội đồng muốn cắt chừng một phần năm, sổ không ghi năng lực, người chịu và phần mềm trùng việc, hai phần mềm gửi tin tiết kiệm 40 triệu, phần mềm kế toán 60 triệu một năm hết hỗ trợ sau ba năm, giá thuê 150 triệu và 100 triệu chuyển dữ liệu đều là ví dụ minh họa của tập 10, không đến từ nguồn.
[^loop]: Thân doc nguồn, Tổng quan · Luận điểm APM là vòng lặp định kỳ bốn bước, lặp lại hằng năm; sơ đồ inventory, assess, disposition, execution path; pace layer quyết định nhịp governance; ba công cụ hay bị trộn lẫn, mỗi công cụ một câu hỏi (TIME: giữ, đầu tư, chuyển hay bỏ; pace layers: nhanh hay chậm, quản trị theo nhịp nào; 7 Rs hoặc CAF: đi bằng đường nào).
[^t1]: Verified (qua abstract) · [Gartner, How to Assess the Fitness of Your Application Portfolio (24/06/2026)](https://www.gartner.com/en/documents/8043833): TIME là Tolerate, Invest, Migrate, Eliminate; Gartner vẫn dùng cho application fitness. Tin cậy cao theo bảng kiểm chứng (claim #1).
[^ax]: OPEN · Hai trục của TIME (business value hoặc functional fit, và độ hợp kỹ thuật) và năm Gartner công bố TIME: doc chỉ có nguồn thứ cấp, [itsystemes.fr](https://www.itsystemes.fr/en/articles/framework-time-de-gartner-quelle-appli-moderniser-en-premier); năm gốc chưa rõ. Tin cậy trung bình (claim #2). Cách xếp bốn ô theo hai trục là hình ASCII trong thân doc §2, cùng giới hạn này.
[^body2]: Thân doc nguồn, §2 · Nội dung chi tiết của Gartner cần trả phí; bốn ô và ý nghĩa của chúng; Migrate là nơi phần lớn legacy theo nghĩa DORA nằm; Eliminate cần kiểm năng lực đã có nơi khác bao chưa; Tolerate không phải bỏ mặc, nền suy giảm thì trượt sang Eliminate hoặc Migrate. Doc đã được chấp thuận; thân doc không ghi độ tin cậy riêng.
[^pace]: Verified (qua snippet) · [Gartner, press release 14/02/2012, Business Wire](https://www.businesswire.com/news/home/20120214006233/en/Gartner-Adopting-Pace-Layered-Application-Strategy-Accelerate-Innovation): Pace-Layered Application Strategy công bố 14/02/2012; ba lớp Record, Differentiation, Innovation; định nghĩa Systems of Record. Tin cậy cao (claim #3).
[^p3]: Thân doc nguồn, §3 · Nhận định của Gartner 2012 về một chiến lược duy nhất cho mọi ứng dụng; mô tả hai lớp Differentiation và Innovation; ý tưởng gốc của Brand; pace layer bổ sung cho TIME; ví dụ core insurance policy admin và strangler fig.
[^brand]: Verified (thứ cấp) · [Wikipedia, Shearing layers](https://en.wikipedia.org/wiki/Shearing_layers): pace layering bắt nguồn từ shearing layers của Brand (1994); Gartner đăng ký nhãn hiệu cho biến thể của mình. Tin cậy trung bình (claim #4).
[^r5]: Verified · [Gartner, press release 16/05/2011, WebWire](https://www.webwire.com/ViewPressRel.asp?aId=137646) (qua snippet) và AWS glossary "5 Rs… 2011": Gartner 5 Rs (Watson) công bố 05/2011, gồm rehost, refactor, revise, rebuild, replace. Tin cậy cao (claim #5). 
[^aws]: Verified · [AWS blog của Orban, 01/11/2016](https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/) và [AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html) (đọc trực tiếp): AWS 6 Rs; 7 Rs hiện hành có thêm Relocate. Tin cậy cao (claim #6).
[^adv]: Verified · [AWS large migration guide](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html) (đọc trực tiếp): AWS không khuyến nghị refactor cho large migration. Tin cậy cao (claim #7).
[^caf]: Verified · [Microsoft Learn, Select your cloud migration strategies, CAF (ms.date 2025-07-15)](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/plan/select-cloud-migration-strategy) (đọc trực tiếp): tám strategies, gồm Rearchitect và Rebuild tách riêng. Tin cậy cao (claim #8).
[^hist]: Thân doc nguồn, §4 · Nghĩa lệch của "Refactor" giữa Gartner 2011, CAF và AWS; Retire và Retain chỉ có từ bộ của AWS; lời khuyên của Watson (Gartner 2011). Phần này không có dòng riêng trong bảng kiểm chứng.
[^dien]: Thân doc nguồn, Diễn tiến · Các mốc 1980 đến 06/2026; AWS 7 Rs, mốc chính xác chưa rõ; CAF nêu 8 migration strategies, "có cả replace bằng SaaS/AI" (cách doc ghi); mục Hiện hành tại 2026-11-05.
[^maprs]: Thực hành ngành, tổng hợp của doc · Map gợi ý TIME → R, doc ghi "tổng hợp của note, không phải chuẩn" (claim #12, tin cậy trung bình; thân doc §4).
[^inv]: Thực hành ngành, tổng hợp của doc · Thuộc tính inventory (thân doc §1, "thực hành ngành, không có chuẩn chung") và hệ quả governance của từng pace layer (thân doc §3). Claim #12, tin cậy trung bình.
[^body1]: Thân doc nguồn, §1 · Bảng năm nhóm thuộc tính inventory và nguồn lấy từng nhóm.
[^dora]: Verified · [DORA Art. 3(18) và Art. 8, bản mirror](https://www.digital-operational-resilience-act.com/Article_8.html): định nghĩa legacy ICT system; Art. 8(1), (4), (6), (7) yêu cầu inventory, mapping và đánh giá legacy hằng năm. Tin cậy cao (claim #9). Văn bản đọc qua bản mirror, không qua EUR-Lex.
[^lehman]: Verified · [Lehman (1980), Proc. IEEE 68(9), Table I](https://userweb.cs.txstate.edu/~rp31/papersSP/lehman1-2.pdf) (doc đọc PDF): định luật I và II, áp dụng cho E-program. Tin cậy cao (claim #10). Bài chỉ nêu hai định luật này vì doc chỉ ghi hai.
[^cunn]: Verified · [Cunningham (1992), WyCash, OOPSLA '92](https://c2.com/doc/oopsla92.html) (doc đọc trực tiếp): ẩn dụ debt trả bằng consolidation hoặc rewrite; "interest". Tin cậy cao (claim #11). Câu trích nguyên văn đúng như thân doc §5 ghi.
[^debt]: Thân doc nguồn, §5 · Hệ quả của luật Lehman cho APM (độ hợp kỹ thuật tự giảm, ô TIME là ảnh chụp); nghĩa nguyên bản của debt là khoảng cách giữa code và hiểu biết hiện tại, không phải cớ cho code cẩu thả; technical debt tích lũy kéo ứng dụng từ Invest xuống Migrate. Phần diễn giải này là của doc, không nằm trong bảng kiểm chứng.
[^tradeoff]: Thân doc nguồn, mục Đánh đổi / quan điểm trái chiều · Ma trận 2×2 đơn giản hóa, bỏ qua chi phí chuyển; rủi ro đóng khung của pace layers (nhận định của note); phản biện rehost mang nợ lên cloud; viết lại một lần với strangler fig; luật Lehman I gợi ý thay thế là kết cục tự nhiên. Doc không dẫn số liệu cho các điểm này (quan sát của bài).
[^vendor]: Bảng kiểm chứng #10, #11: Lehman và Cunningham đọc trực tiếp (PDF, c2.com). Thân doc, mục Nguồn 4, 5, 6: tài liệu của AWS, Microsoft và bản mirror DORA. Nguồn 1, 2, 3 là abstract hoặc snippet; nguồn 9 là thứ cấp. Việc đánh giá độ độc lập giữa các nguồn là cách đọc của bài từ danh sách này.
[^draft]: Thân doc nguồn, phần đầu và trạng thái · Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^inf1]: Suy luận của bài · Định nghĩa legacy theo cách doc ghi gồm end-of-life, không còn phù hợp để nâng cấp hay sửa, hoặc hết hỗ trợ của nhà cung cấp, và không nhắc tuổi; bài đọc đó là ngưỡng của định nghĩa, không phải tuổi.
[^inf2]: Suy luận của bài · Sáu bước, thứ tự, việc viết tiêu chí chấm trước, việc coi bốn ô như nhãn ưu tiên khi hai trục là OPEN, và việc ghép điều kiện đổi ô vào ngày xét lại; dựa trên các mục doc dẫn ở cuối từng bước, không phải trình tự do nguồn nêu.
[^inf3]: Suy luận của bài · Việc xếp phần mềm kế toán giả định vào ô Migrate, chọn Replace thay vì Rebuild, và lập luận "quy trình phổ biến giữa các công ty nên hợp với package" là áp định nghĩa vào ví dụ giả định; định nghĩa Systems of Record có "phổ biến giữa các tổ chức" (claim #3) nhưng doc không xếp ví dụ này.
[^dorascope]: Thân doc nguồn, §1 · Với bảo hiểm và tài chính ở EU inventory là nghĩa vụ pháp lý; phạm vi viết lại theo bài là các thực thể tài chính thuộc phạm vi DORA ở EU, doc kiểm cho bảo hiểm.
[^r5g]: Thân doc nguồn, §4 · Chú giải trong bảng 5 Rs: Rehost (IaaS), Refactor (PaaS), Rebuild (PaaS), Replace (SaaS). Không có dòng riêng trong bảng kiểm chứng.
[^hyp]: Thân doc nguồn, §4 · Relocate là lift-and-shift ở mức hypervisor.
[^advr]: Thân doc nguồn, §4 · Lý do "vừa chuyển vừa hiện đại hóa là đường phức tạp nhất" và thứ tự rehost, relocate, replatform trước, hiện đại hóa sau khi đã lên cloud.
[^inf4]: Suy luận của bài · Vì hai trục chỉ có nguồn thứ cấp (claim #2), định nghĩa chính xác của từng ô chưa có nguồn gốc để trích.
[^inf5]: Suy luận của bài · Hai phần mềm cùng đỡ một năng lực được xếp là ứng viên Eliminate; doc chỉ nói Eliminate cần kiểm năng lực đã có nơi khác bao chưa (thân doc §2).
