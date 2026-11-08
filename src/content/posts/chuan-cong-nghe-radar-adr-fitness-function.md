---
title: "Chuẩn công nghệ nên chặt tới đâu? Radar, ADR, fitness function"
description: "Chuẩn công nghệ là bộ ràng buộc lên lựa chọn, không phải lệnh cấm. Gốc của radar, ngày hết hỗ trợ, platform, ADR, fitness function, và chỗ nguồn còn OPEN."
station: 1
published: 2026-11-07
verified: 2026-11-05
image: /og/ep13.jpg
sources:
  - title: "Thoughtworks — Technology Radar FAQ (đọc trực tiếp, truy cập 2026-11-05)"
    url: https://www.thoughtworks.com/radar/faq
  - title: "Thoughtworks — Technology Radar Vol. 35 (qua snippet, truy cập 2026-11-05)"
    url: https://www.thoughtworks.com/radar
  - title: "Thứ cấp, không chính thức: thoughtworks-tech-radar-volumes dataset (mốc đổi tên ring)"
    url: https://github.com/deepthirera/thoughtworks-tech-radar-volumes-fork
  - title: "Microsoft — Fixed Lifecycle Policy (đọc trực tiếp, truy cập 2026-11-05)"
    url: https://learn.microsoft.com/en-us/lifecycle/policies/fixed
  - title: "AWS — The pillars of the framework (đọc trực tiếp, truy cập 2026-11-05)"
    url: https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html
  - title: "Casalboni, A. (02/12/2021). New – Sustainability Pillar for AWS Well-Architected Framework"
    url: https://aws.amazon.com/blogs/aws/sustainability-pillar-well-architected-framework/
  - title: "Microsoft — Azure Well-Architected Framework pillars (đọc trực tiếp, truy cập 2026-11-05)"
    url: https://learn.microsoft.com/en-us/azure/well-architected/pillars
  - title: "CNCF TAG App Delivery — Platforms White Paper (truy cập 2026-11-05)"
    url: https://tag-app-delivery.cncf.io/whitepapers/platforms/
  - title: "CNCF TAG App Delivery — công bố Platforms White Paper (10/04/2023)"
    url: https://tag-app-delivery.cncf.io/blog/announcing-a-whitepaper-on-platforms-for-cloud-native-computing/
  - title: "Nygard, M. (15/11/2011). Documenting Architecture Decisions"
    url: https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions
  - title: "Ford, N., Parsons, R., Kua, P., Sadalage, P. Building Evolutionary Architectures, 2nd ed. (O'Reilly, 11/2022) — Thoughtworks (qua snippet)"
    url: https://www.thoughtworks.com/insights/books/building-evolutionaryarchitectures-second-edition
  - title: "Thoughtworks — Fitness function-driven development"
    url: https://www.thoughtworks.com/insights/articles/fitness-function-driven-development
  - title: "ISO/IEC/IEEE 42010:2022 — Software, systems and enterprise — Architecture description (abstract, qua snippet)"
    url: https://www.iso.org/standard/74393.html
---

Trong công ty giả định của bài, đội công nghệ bảy người chăm ba loại cơ sở dữ liệu và hai hãng đám mây, không ai ghi ngày hết hỗ trợ của thành phần nào, và nhóm nền (platform team) đề nghị chọn một đám mây rồi cấm phần còn lại.[^g1]

Đề nghị ấy dựa trên một câu hỏi: công nghệ nào tốt nhất. Bài này khảo cứu một câu hỏi khác mà tài liệu nguồn đặt ra: chuẩn công nghệ ở cấp doanh nghiệp gồm những công cụ nào, mỗi công cụ từ đâu ra và nguồn nói đúng gì, phân biệt chúng với những khái niệm hay bị nhầm, và công cụ nào có giới hạn mà người quyết định phải biết trước khi dựa vào.

**Trả lời ngắn:** tài liệu nguồn định nghĩa technology standard là danh sách công nghệ được phép, được khuyến nghị hoặc bị hạn chế, kèm điều kiện dùng;[^bts] ở cấp doanh nghiệp, tầng công nghệ theo tài liệu ấy không phải việc vẽ sơ đồ hạ tầng mà là bộ ràng buộc lên các lựa chọn công nghệ, để nhiều quyết định nhỏ của các nhóm vẫn cộng lại thành một bức tranh vận hành, bảo mật và chi trả được.[^bo] Tài liệu chia bộ ràng buộc thành bốn câu hỏi: chọn gì (technology radar), sống bao lâu (lifecycle, end of support), xây thế nào (reference architecture, Well-Architected, platform) và giữ đúng ra sao (ADR, fitness function).[^bo] Tài liệu cũng mô tả xu hướng chuyển từ hội đồng duyệt sang guardrail tự động hóa được.[^bo] Nguồn không đưa một mức "chặt vừa phải" nào. Bài này suy ra: độ chặt hợp lý nằm ở ranh giới giữa thứ đo được, giao cho máy kiểm, và thứ không đo được, giao cho người có quyền quyết.[^inf1] Hai phát biểu còn OPEN: ring ngoài cùng của radar đổi tên khi nào, và định nghĩa nguyên văn của fitness function.[^c2o][^c9o]

## Technology radar: gốc, bốn ring, và radar nội bộ

Doc định nghĩa technology radar là định dạng do Thoughtworks phổ biến: các "blip" xếp theo quadrant (loại) và ring (mức khuyến nghị); doanh nghiệp thường dựng radar nội bộ theo cùng định dạng.[^btr] Radar của Thoughtworks do Technology Advisory Board soạn, xuất bản hai lần mỗi năm, và bản mới nhất doc ghi là Vol. 35 (11/2026).[^c1]

Bảng dưới đặt ý nghĩa bốn ring theo Thoughtworks cạnh cách doc đề xuất dùng chúng trong radar nội bộ.

| Ring | Diễn giải của bài về FAQ Thoughtworks | Đề xuất cho radar nội bộ |
|---|---|---|
| Adopt | Đã chín và được chứng minh; nên cân nhắc nghiêm túc, vẫn tùy ngữ cảnh[^c1] | Chuẩn mặc định, platform hỗ trợ[^c11] |
| Trial | Sẵn sàng dùng nhưng chưa được chứng minh bằng Adopt[^c1] | Dùng có kiểm soát, cần owner[^c11] |
| Assess | Đáng đánh giá, thăm dò; chưa đủ căn cứ để dùng rộng[^c1] | Spike, PoC[^c11] |
| Caution | Theo Thoughtworks, nên cân nhắc lựa chọn khác hoặc chủ động tránh; Thoughtworks đã có trải nghiệm xấu[^c1] | Không dùng cho việc mới; có kế hoạch thoát[^c11] |

Cột giữa là diễn giải của bài về FAQ của Thoughtworks, dựa trên lời diễn giải của tài liệu nguồn; không phải trích nguyên văn.[^c1] Cột phải là đề xuất của doc: radar nội bộ ánh xạ ring thành hành động, độ tin cậy thấp đến trung bình, không phải quy ước của Thoughtworks hay của ngành.[^c11]

Về tên ring ngoài cùng, FAQ hiện hành của Thoughtworks dùng "Caution", tài liệu nguồn đọc trực tiếp ngày 2026-11-05.[^c1] Tài liệu ghi ring này từng tên "Hold", nhưng volume nào đổi tên thì chưa có nguồn chính thức: nguồn duy nhất cho mốc là một dataset GitHub không chính thức, nên đây là OPEN, bài không nêu volume.[^c2o]

Doc ghi: radar của Thoughtworks là ý kiến của một công ty tư vấn, còn radar nội bộ phải phản ánh năng lực vận hành, hợp đồng vendor và risk appetite của chính tổ chức.[^b1a] Mỗi lần chuyển ring nên kèm một ADR ngắn.[^b1a]

### Radar khác whitelist ở đâu

Doc định nghĩa technology standard là danh sách công nghệ được phép, được khuyến nghị hoặc bị hạn chế, kèm điều kiện dùng.[^bts] Radar là định dạng trình bày với quadrant và ring.[^btr] Bài này suy ra ba điểm khác: radar không phải danh sách được phép/bị cấm hai cột, vì có hai ring trung gian (Trial, Assess) cho thứ chưa phải chuẩn; một dòng trong radar mang theo mức, chứ không chỉ mang tên; và chép nguyên bảng của Thoughtworks làm chuẩn nội bộ là trộn một ý kiến bên ngoài với một nghĩa vụ bên trong.[^inf2]

## Vòng đời vendor: vì sao ngày hết hỗ trợ nằm trong chuẩn

Doc định nghĩa end of support (EoS) là mốc nhà cung cấp ngừng hỗ trợ hoặc ngừng vá lỗi.[^bte] Lập luận của doc cho việc đưa EoS vào chuẩn là: chuẩn công nghệ không có nghĩa nếu bỏ qua vòng đời của vendor.[^b2a]

Nguồn cụ thể duy nhất doc kiểm cho phần này là Microsoft Fixed Lifecycle Policy: tối thiểu 5 năm Mainstream Support, cộng Extended Support cho một số sản phẩm; ngày cụ thể phải tra theo từng sản phẩm.[^c3] Doc không định nghĩa thêm hai pha Mainstream và Extended, nên bài cũng không.[^c3] Doc ghi các vendor khác có chính sách riêng, vì vậy roadmap công nghệ phải lưu ngày EoS cho từng thành phần, và đó là một thuộc tính trong inventory của APM.[^b2a]

Doc ghi rằng với tổ chức tài chính ở EU, hệ chạy qua EoS rơi vào phạm vi đánh giá rủi ro hằng năm theo DORA Art. 8(7).[^b2b] Doc chỉ nói hệ như vậy "tiến gần" định nghĩa legacy ICT system của Art. 3(18), không nói chúng thuộc định nghĩa đó.[^bte] Phạm vi là tổ chức tài chính ở EU; bài không nới sang ngành khác, và không tự kiểm DORA vì mục Nguồn của doc không có nguồn sơ cấp về DORA.[^b2b]

Doc đề xuất một quy tắc nối radar với lifecycle: công nghệ còn dưới khoảng 2 năm tới EoS thì chuyển sang Caution cho việc mới.[^c11] Đây là đề xuất của chính doc, không dẫn nguồn, độ tin cậy thấp đến trung bình, không phải quy tắc ngành.[^c11] Doc không nêu căn cứ cho con số 2 năm.[^c11] Bài này suy ra: ngưỡng hợp lý phải không ngắn hơn thời gian thực tế để thoát khỏi công nghệ đó, nên ngưỡng nên chỉnh theo từng tổ chức thay vì chép nguyên.[^inf3]

Cùng khối thực hành với quy tắc trên, doc ghi: kế hoạch thoát trở thành initiative trong portfolio, với chi phí run và change tách bạch. Đây cũng là đề xuất của tài liệu nguồn, không có nguồn, độ tin cậy thấp đến trung bình.[^b2c]

## Reference architecture và Well-Architected: một review không trả lời câu có nên ở lại vendor này

Doc định nghĩa reference architecture là mẫu kiến trúc chuẩn cho một loại workload, được tái dùng.[^btra] Well-Architected frameworks là bộ câu hỏi review theo các trụ cột chất lượng.[^b3a]

| | AWS | Azure |
|---|---|---|
| Số trụ | 6[^c4] | 5[^c5] |
| Trụ | Operational excellence, Security, Reliability, Performance efficiency, Cost optimization, Sustainability[^b3e] | Reliability, Security, Cost Optimization, Operational Excellence, Performance Efficiency[^b3e] |
| Mốc | Framework có từ 2015; Sustainability thêm ngày 02/12/2021[^c4] | Doc không ghi mốc |

Khác biệt đáng chú ý là một trụ: AWS thêm Sustainability năm 2021 thành trụ thứ sáu, còn danh sách trụ của Azure tại thời điểm doc kiểm không có nó.[^c4][^b3b]

Giới hạn doc nêu rõ: cả hai là framing của vendor. Bộ trụ cột dùng như khung hỏi chung, còn câu hỏi chi tiết gắn với dịch vụ của vendor đó.[^b3a] Cụ thể, trụ Cost của AWS và Azure tối ưu chi phí trên cloud của chính họ, còn câu hỏi có nên ở cloud này hay không nằm ngoài khung.[^bd3] Bài này suy ra và gợi ý: không nên dùng kết quả một cuộc review Well-Architected thay cho quyết định chọn hay rời vendor; nên bổ sung một nguồn đánh giá không do vendor soạn và một người có quyền quyết.[^inf4] Doc chỉ dẫn sang note về vendor lock-in cho câu hỏi này, mà bài không dùng.[^bd3]

## Platform như một sản phẩm và paved road

CNCF Platforms White Paper, công bố ngày 10/04/2023, định nghĩa platform là:[^c6]

> *"an integrated collection of capabilities defined and presented according to the needs of the platform's users"*

Dịch: một tập hợp tích hợp các năng lực, được định nghĩa và trình bày theo nhu cầu của người dùng platform.

Bài này suy ra: theo câu trích, định nghĩa nói về năng lực và người dùng, không nêu platform là một đội hay một công cụ cụ thể.[^inf10] Thuộc tính đầu tiên CNCF nêu là platform as a product: thiết kế và tiến hóa theo nhu cầu người dùng, ưu tiên use case chung của nhiều team hơn nhu cầu riêng của một team.[^b3c] Giá trị CNCF nêu: giảm cognitive load cho product team, tăng reliability, giảm rủi ro bảo mật và tuân thủ, và dùng dịch vụ cloud hiệu quả về chi phí.[^c6] Doc diễn giải rủi ro bảo mật và tuân thủ giảm nhờ governance tập trung ở platform.[^b3c]

Doc định nghĩa paved road (hay golden path) là con đường được platform hỗ trợ sẵn, dễ đi nhất; không cấm đường khác nhưng làm đường đúng thành đường rẻ nhất, và ghi đây là thuật ngữ thực hành.[^btp] Doc không dẫn nguồn sơ cấp hay năm xuất xứ cho thuật ngữ này, nên bài không nêu.[^btp]

Mối nối với tổ chức: doc nối platform với note về operating model, nơi platform team trong Team Topologies cung cấp chính những capability này theo mode X-as-a-Service; standards ở tầng công nghệ được hiện thực hóa thành thứ platform cung cấp sẵn, thay vì văn bản quy định.[^b3d]

Doc nêu hai cái giá. Một, chuẩn chặt giảm chi phí vận hành và rủi ro nhưng mâu thuẫn với team tự trị; paved road là thỏa hiệp, và team đi đường khác phải tự gánh vận hành.[^bd1] Hai, nếu platform không được quản lý như sản phẩm, có người dùng và phản hồi, nó trở thành một "đội hạ tầng" kiểu cũ với ticket queue.[^bd4]

## ADR: một quyết định, một file ngắn

Theo doc, mỗi quyết định kiến trúc quan trọng là một file ngắn;[^b4a] Nygard (15/11/2011) đặt bốn đề mục Context, Decision, Status và Consequences.[^c7] Theo doc, Status nhận bốn giá trị proposed, accepted, deprecated, superseded, và Consequences liệt kê cả hệ quả tiêu cực.[^b4a] Ở cấp doanh nghiệp, doc coi ADR là nhật ký các quyết định "IT architecture" trong note về quản trị.[^b4a]

### ADR khác design doc ở đâu

Doc phân biệt hai thứ gần nhau theo cách khác: architecture description (AD) là sản phẩm mô tả một kiến trúc và theo ISO/IEC/IEEE 42010 khác với chính kiến trúc.[^bta] Doc không định nghĩa "design doc". Bài này suy ra: ADR khác một tài liệu thiết kế ở đơn vị (một quyết định, không phải mô tả cả hệ thống) và ở vòng đời (có Status, có thể bị superseded); phần so với "design doc" là cách đọc của bài, không phải của doc hay Nygard.[^inf5] Chi tiết thực hành ADR, C4, arc42 doc để ở một note khác mà bài này không dùng.[^b4a]

## Fitness function: governance tự động và giới hạn của nó

Doc dịch fitness function là phép kiểm khách quan, thường tự động, cho một đặc tính kiến trúc (hiệu năng, phụ thuộc, bảo mật…), gắn với Ford, Parsons, Kua và cộng sự.[^btf] Định nghĩa nguyên văn của khái niệm thì OPEN: doc chỉ có diễn giải, nên bài không trích câu nào.[^c9o]

Nguồn gốc: theo doc, bản đầu của *Building Evolutionary Architectures* ra năm 2017 (Ford, Parsons, Kua).[^b4b] Trang giới thiệu bản hai (qua snippet) ghi bản 11/2022, thêm Sadalage, phụ đề *Automated Software Governance*.[^c8]

Ý tưởng doc ghi: biến tiêu chuẩn kiến trúc thành phép kiểm chạy được, thường trong pipeline. Ba ví dụ của doc: không có phụ thuộc vào thư viện ở ring Caution; latency p99 dưới ngưỡng; không có lỗ hổng nghiêm trọng đã biết mà chưa vá trong dependency (doc viết "zero-day chưa vá").[^b4b] Ví dụ đầu nối trực tiếp với radar: một ring trở thành điều kiện máy kiểm được, và bài tập 3 của doc cũng gắn phụ thuộc với blip Caution.[^bbt] Doc mô tả hệ quả là đổi governance từ "review board duyệt tài liệu" sang "pipeline từ chối thay đổi vi phạm".[^b4b]

Giới hạn doc nêu thẳng: fitness function chỉ kiểm được những gì đo được. Các quyết định như chọn vendor chiến lược hay đánh đổi giữa các trụ vẫn cần người quyết, tức decision rights của note về quản trị.[^bd2]

| Điều cần kiểm | Máy kiểm được? | Ai quyết khi không đo được |
|---|---|---|
| Không dùng thư viện ở ring Caution[^b4b] | Có, ví dụ của doc[^b4b] | Không áp dụng |
| Latency p99 dưới ngưỡng[^b4b] | Có, ví dụ của doc[^b4b] | Không áp dụng |
| Chọn vendor chiến lược[^bd2] | Không, doc xếp vào quyết định cần người[^bd2] | Người có decision rights[^bd2] |
| Đánh đổi giữa các trụ[^bd2] | Không, doc xếp vào quyết định cần người[^bd2] | Người có decision rights[^bd2] |

### Fitness function khác test ở đâu

Doc không có định nghĩa nguyên văn của fitness function (claim #9 còn OPEN) và không so nó với test thông thường.[^c9o] Bài này suy ra: điểm phân biệt là đối tượng kiểm. Test thông thường kiểm hành vi chức năng, còn fitness function kiểm một đặc tính kiến trúc như phụ thuộc hay latency, theo định nghĩa của doc ở trên; trong thực tế một fitness function có thể được viết dưới dạng test, nên hai khái niệm không loại trừ nhau.[^inf6]

## ISO/IEC/IEEE 42010:2022: chuẩn cho cách mô tả, không cho cách làm

Edition 2 (11/2022) đặt yêu cầu cho cấu trúc và cách diễn đạt của một architecture description, áp dụng cho software, systems, enterprise, product lines, technologies và các thứ tương tự; chuẩn không quy định quy trình, phương pháp, notation hay công cụ; và tách kiến trúc của entity of interest khỏi AD diễn đạt nó. Doc kiểm qua abstract, không đọc toàn văn.[^c10]

Chuẩn định nghĩa các khái niệm architecture description framework, ADL, viewpoint, model kind.[^b4c] Hệ quả doc rút ra: 42010 là thước đo "bộ tài liệu kiến trúc có đầy đủ concern và viewpoint không", không phải một phương pháp kiến trúc.[^b4c] Bài này suy ra: không nên đọc 42010 như quy trình thiết kế hay bộ notation, vì theo phạm vi abstract chuẩn không quy định quy trình, phương pháp, notation hay công cụ.[^inf11] Doc không kiểm edition đầu của chuẩn, nên bài không nêu mốc của nó.[^c10]

## Diễn tiến

<figure class="fig" aria-label="Dòng thời gian chín mốc từ 11/2011 đến 11/2026 của các công cụ chuẩn công nghệ, từ ADR của Nygard đến bản 35 của Technology Radar, kèm một mốc đổi tên ring chưa rõ thời điểm">
<ol class="loop">
<li>11/2011 · Nygard<small>ADR: Context, Decision, Status, Consequences[^dt]</small></li>
<li>2015 · AWS<small>Well-Architected Framework[^dt]</small></li>
<li>2017 · Ford, Parsons, Kua<small>Building Evolutionary Architectures, fitness function[^dt]</small></li>
<li>12/2021 · AWS<small>thêm Sustainability, thành 6 pillars[^dt]</small></li>
<li>11/2022 · ISO/IEC/IEEE 42010:2022<small>edition 2; cùng tháng, Building Evolutionary Architectures bản 2 (automated governance)[^dt]</small></li>
<li>04/2023 · CNCF<small>Platforms White Paper, platform as a product[^dt]</small></li>
<li>01/2025 · DORA<small>áp dụng; legacy và EoS nằm trong đánh giá rủi ro ICT hằng năm[^dt]</small></li>
<li>11/2026 · Thoughtworks Radar<small>Vol. 35, bản mới nhất doc ghi[^dt]</small></li>
<li>Không rõ volume · Thoughtworks Radar<small>ring "Hold" đổi thành "Caution": OPEN[^dt]</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Các mốc theo mục Diễn tiến của doc nguồn. Mốc cuối chưa có volume nên đặt riêng ngoài trục thời gian.[^dt]</figcaption>
</figure>

Nhận định "hiện hành" của doc, tại 2026-11-05: tầng công nghệ ở cấp doanh nghiệp gồm radar nội bộ (Adopt, Trial, Assess, Caution) gắn với lifecycle vendor, reference architecture theo trụ Well-Architected, platform as a product làm paved road, ghi quyết định bằng ADR và tự động hóa một phần governance bằng fitness function; ISO/IEC/IEEE 42010:2022 là chuẩn cho cách mô tả kiến trúc; radar Thoughtworks mới nhất là Vol. 35 (11/2026).[^dt]

Về tiến hóa: ngoài việc đổi tên một ring và một bản sách mới, mục Diễn tiến của doc không ghi mốc nào bị mốc sau thay thế. Bài này suy ra các công cụ ở trên đang bồi đắp lên nhau thay vì thay nhau, và đó là cách đọc của bài.[^inf7]

## Chỗ còn phải đọc cẩn thận

**Hai phát biểu OPEN.** Ring ngoài cùng từng tên "Hold" và volume đổi tên chưa có nguồn chính thức.[^c2o] Định nghĩa nguyên văn của fitness function chưa có, chỉ có diễn giải.[^c9o] Bài giữ cả hai ở mức OPEN.

**Mức đọc nguồn.** FAQ của Thoughtworks được đọc trực tiếp; trang radar cho Vol. 35 và trang giới thiệu bản hai của *Building Evolutionary Architectures* chỉ qua snippet; 42010 chỉ qua abstract.[^c1][^c8][^c10] Nguồn của Microsoft, AWS, CNCF và Nygard được đọc trực tiếp.[^c3][^c4][^c5][^c6][^c7]

**Độ độc lập của nguồn.** Bài này suy ra từ mục Nguồn của doc: dữ liệu về ring (claim #1) và về bản hai của sách (claim #8) cùng đi qua trang của Thoughtworks; hai khung Well-Architected là của hai vendor, mỗi bên mô tả khung của mình; mọi phát biểu về platform dựa vào một tài liệu CNCF. Doc không bàn độ độc lập của các nguồn.[^inf8]

**Không có bằng chứng thực nghiệm.** Không dòng nào trong bảng kiểm chứng là nghiên cứu đo hiệu quả của radar, paved road hay fitness function; các dòng là định nghĩa, ngày tháng và phạm vi. Bài này suy ra các công cụ này chưa được doc chứng minh là hiệu quả, và ba bài tập áp dụng của doc ghi rõ là chưa làm.[^inf8][^bbt]

**Quy tắc 2 năm là đề xuất của doc.** Không dùng nó như một quy tắc ngành.[^c11]

**Hai khung của vendor.** Phần câu hỏi chi tiết của Well-Architected gắn với dịch vụ của vendor đó, và trụ Cost không trả lời có nên ở cloud này hay không.[^b3a][^bd3]

## Áp dụng: dựng chuẩn công nghệ từng bước

Doc có ba bài tập áp dụng và ghi rõ là chưa làm.[^bbt] Phương pháp dưới đây dựng trên ba bài tập ấy, cộng các bước nối do bài này suy ra, nên cả trình tự là suy luận của bài, chưa ai kiểm chứng.[^inf9]

1. **Dựng radar nội bộ khoảng 20 blip** (ngôn ngữ, database, message broker, CI/CD…). Mỗi blip ở Caution phải có ngày EoS và kế hoạch thoát.[^bbt]
2. **Lấy ngày EoS theo từng sản phẩm.** Ngày cụ thể phải tra theo từng sản phẩm.[^c3] Bài này suy ra nên lấy từ trang vòng đời của chính sản phẩm đó, không từ chính sách chung của vendor.[^inf9] Lưu ngày vào inventory.[^b2a]
3. **Đặt ngưỡng EoS cho Caution.** Mặc định của doc là dưới khoảng 2 năm, nhưng đó là đề xuất; bài này suy ra nên so ngưỡng với thời gian thoát thực tế.[^c11][^inf3]
4. **Chạy review theo 5–6 trụ Well-Architected cho một workload quan trọng**, ghi 3 rủi ro cao nhất thành ADR.[^bbt] Không nên dùng kết quả để quyết định có ở lại vendor hay không.[^bd3][^inf4]
5. **Viết 3 fitness function:** một cho phụ thuộc (không dùng blip Caution), một cho hiệu năng, một cho bảo mật; nêu rõ chúng chạy ở đâu trong pipeline.[^bbt]
6. **Phân loại mỗi luật thành "đo được" hay "cần người quyết".** Luật đo được vào pipeline; chọn vendor chiến lược và đánh đổi giữa các trụ giao cho người có decision rights.[^bd2][^inf1]
7. **Kiểm platform có còn là sản phẩm không:** có người dùng, có phản hồi, hay đã thành hàng đợi ticket.[^bd4]

Ví dụ giả định, lấy từ cảnh 5 của video, cho bước 2 và 3: phần mềm kế toán cũ còn ba năm mới hết hỗ trợ nhưng công ty sẽ chuyển sớm hơn. Ngưỡng 2 năm của doc chưa chạm tới (còn ba năm), nên xếp nó vào Caution là một ngoại lệ do công ty tự quyết, không do quy tắc. Việc phòng kinh doanh xin thêm được làm tay chừng sáu ngày công thay vì trả 40 triệu cho hãng làm ngay trên phần mềm sắp bỏ. Có nên cho ngoại lệ hay không là câu doc không bàn; bước 3 là chỗ tổ chức tự trả lời.[^g2][^c11]

[^g1]: Giả định · Công ty giả định của bài: đội bảy người, ba loại cơ sở dữ liệu, hai hãng đám mây, không ai ghi ngày hết hỗ trợ, nhóm nền đề nghị chọn một đám mây và cấm phần còn lại. Không đến từ nguồn.
[^g2]: Giả định · Phần mềm kế toán cũ còn ba năm tới ngày hết hỗ trợ, công ty chuyển sớm hơn, xếp vào Caution như ngoại lệ; làm tay chừng sáu ngày công thay vì trả 40 triệu. Lấy từ cảnh 5 của video, không đến từ nguồn.
[^bo]: Thân doc nguồn, Tổng quan · Luận điểm tầng technology (A4) là bộ ràng buộc lên lựa chọn công nghệ chứ không phải vẽ sơ đồ hạ tầng; bốn câu hỏi chọn gì, sống bao lâu, xây thế nào, giữ đúng ra sao; dịch chuyển từ hội đồng duyệt sang guardrail tự động. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^btr]: Thân doc nguồn, Thuật ngữ · Định nghĩa technology radar (blip, quadrant, ring; doanh nghiệp thường dựng radar nội bộ theo cùng định dạng). Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bts]: Thân doc nguồn, Thuật ngữ · Định nghĩa technology standard: danh sách công nghệ được phép, được khuyến nghị hoặc bị hạn chế, kèm điều kiện dùng. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bte]: Thân doc nguồn, Thuật ngữ · Định nghĩa end of support (mốc nhà cung cấp ngừng hỗ trợ hoặc ngừng vá lỗi; hệ chạy qua mốc này tiến gần định nghĩa legacy ICT system của DORA Art. 3(18)). Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^btra]: Thân doc nguồn, Thuật ngữ · Định nghĩa reference architecture: mẫu kiến trúc chuẩn cho một loại workload, được tái dùng. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^btp]: Thân doc nguồn, Thuật ngữ · Định nghĩa paved road / golden path (không cấm đường khác, làm đường đúng thành đường rẻ nhất), ghi là "thuật ngữ thực hành"; doc không dẫn nguồn hay mốc xuất xứ. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^btf]: Thân doc nguồn, Thuật ngữ · Định nghĩa architecture fitness function: phép kiểm khách quan, thường tự động, cho một đặc tính kiến trúc (Ford, Parsons, Kua và cộng sự); là diễn giải của doc, không phải câu trích. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bta]: Thân doc nguồn, Thuật ngữ · Định nghĩa architecture description (AD): sản phẩm mô tả một kiến trúc; theo ISO/IEC/IEEE 42010, AD khác với bản thân kiến trúc. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c1]: Verified · [Thoughtworks, Technology Radar FAQ](https://www.thoughtworks.com/radar/faq) (đọc trực tiếp) và [trang Radar](https://www.thoughtworks.com/radar) (qua snippet): 4 ring Adopt, Trial, Assess, Caution và định nghĩa; Technology Advisory Board soạn; hai lần mỗi năm; Vol. 35 (11/2026). Trang FAQ xác nhận tên ring hiện hành là Caution. Doc ghi định nghĩa bằng lời diễn giải, không trích nguyên văn; cột diễn giải trong bảng của bài là diễn giải tiếp theo. Tin cậy cao (claim #1).
[^c2o]: OPEN · Ring ngoài cùng từng tên "Hold", nay là "Caution"; volume đổi tên chưa có nguồn chính thức (claim #2). FAQ của Thoughtworks chỉ xác nhận tên hiện hành (xem c1); mốc đến từ một dataset GitHub không chính thức. Tin cậy thấp.
[^b1a]: Thân doc nguồn, §1 · Radar của Thoughtworks là ý kiến của một công ty tư vấn; radar nội bộ phải phản ánh năng lực vận hành, hợp đồng vendor và risk appetite; mỗi lần chuyển ring nên kèm một ADR ngắn. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c11]: Thực hành / đề xuất của note · Quy tắc "dưới khoảng 2 năm tới EoS thì chuyển sang Caution" và việc radar nội bộ ánh xạ ring thành hành động (claim #11). Không có nguồn; doc không nêu căn cứ cho con số 2 năm. Tin cậy thấp–trung bình.
[^b2a]: Thân doc nguồn, §2 · Chuẩn công nghệ không có nghĩa nếu bỏ qua vòng đời vendor; vendor khác có chính sách riêng nên roadmap lưu ngày EoS cho từng thành phần; đó là một thuộc tính trong inventory APM. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b2b]: Thân doc nguồn, §2 · Với tổ chức tài chính ở EU, hệ chạy qua EoS rơi vào phạm vi đánh giá rủi ro hằng năm theo DORA Art. 8(7); lifecycle là đầu vào của quản trị rủi ro. Mục Nguồn của doc không có nguồn sơ cấp về DORA; bài không kiểm DORA. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b2c]: Thân doc nguồn, §2 · Kế hoạch thoát trở thành initiative trong portfolio, với chi phí run/change tách bạch. Nằm cùng khối thực hành với quy tắc claim #11: đề xuất của doc, không nguồn, tin cậy thấp–trung bình. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c3]: Verified · [Microsoft, Fixed Lifecycle Policy](https://learn.microsoft.com/en-us/lifecycle/policies/fixed): tối thiểu 5 năm Mainstream Support, Extended Support cho một số sản phẩm; ngày cụ thể tra theo từng sản phẩm; đọc trực tiếp. Doc không định nghĩa thêm hai pha. Tin cậy cao (claim #3).
[^b3a]: Thân doc nguồn, §3 · Well-Architected là bộ câu hỏi review theo trụ cột chất lượng; cả hai là framing của vendor, bộ trụ dùng tốt cho mọi môi trường nhưng câu hỏi chi tiết gắn với dịch vụ của vendor đó. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c4]: Verified · [AWS, The pillars of the framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html) và [Casalboni, AWS News Blog (02/12/2021)](https://aws.amazon.com/blogs/aws/sustainability-pillar-well-architected-framework/): 6 pillars; có từ 2015; Sustainability thêm ngày 02/12/2021; đọc trực tiếp. Tin cậy cao (claim #4).
[^c5]: Verified · [Microsoft, Azure Well-Architected Framework pillars](https://learn.microsoft.com/en-us/azure/well-architected/pillars): 5 pillars; đọc trực tiếp. Tin cậy cao (claim #5).
[^b3b]: Thân doc nguồn, §3 · Azure hiện có 5 trụ; sustainability nằm ngoài danh sách trụ. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bd3]: Thân doc nguồn, Đánh đổi / quan điểm trái chiều · Well-Architected là framing của vendor: trụ Cost của AWS/Azure tối ưu chi phí trên cloud của họ; câu hỏi "có nên ở cloud này không" nằm ngoài khung đó (xem note về vendor lock-in). Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c6]: Verified · [CNCF TAG App Delivery, Platforms White Paper](https://tag-app-delivery.cncf.io/whitepapers/platforms/) và [bài công bố 10/04/2023](https://tag-app-delivery.cncf.io/blog/announcing-a-whitepaper-on-platforms-for-cloud-native-computing/): định nghĩa platform (câu trích); "platform as a product"; giá trị cognitive load, reliability, rủi ro, chi phí; đọc trực tiếp cùng blog công bố. Tin cậy cao (claim #6).
[^b3c]: Thân doc nguồn, §3 · Thuộc tính đầu tiên CNCF nêu là platform as a product (thiết kế và tiến hóa theo nhu cầu người dùng, ưu tiên use case chung của nhiều team); rủi ro bảo mật và tuân thủ giảm nhờ governance tập trung ở platform. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b3e]: Thân doc nguồn, §3 (bảng AWS 6 pillars và Azure 5 pillars) · Tên các trụ của từng framework. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b3d]: Thân doc nguồn, §3 (đoạn cuối) · Cầu nối với note về operating model: platform team trong Team Topologies cung cấp các capability này theo mode X-as-a-Service; standards được hiện thực hóa thành thứ platform cung cấp sẵn. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bd1]: Thân doc nguồn, Đánh đổi / quan điểm trái chiều · Chuẩn hóa vs tự chủ team: chuẩn chặt giảm chi phí và rủi ro nhưng mâu thuẫn với team tự trị; paved road là thỏa hiệp, team đi đường khác tự gánh vận hành. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bd4]: Thân doc nguồn, Đánh đổi / quan điểm trái chiều · Platform không được quản lý như sản phẩm sẽ thành "đội hạ tầng" kiểu cũ với ticket queue. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c7]: Verified · [Nygard, Documenting Architecture Decisions (15/11/2011)](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions): Context, Decision, Status, Consequences; đọc trực tiếp. Tin cậy cao (claim #7).
[^b4a]: Thân doc nguồn, §4 (đoạn ADR) · Bốn giá trị Status (proposed, accepted, deprecated, superseded); Consequences liệt kê cả hệ quả tiêu cực; ở cấp doanh nghiệp ADR là nhật ký các quyết định "IT architecture"; chi tiết ADR, C4, arc42 ở một note khác. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b4b]: Thân doc nguồn, §4 (mục Fitness functions) · Bản đầu *Building Evolutionary Architectures* năm 2017 (Ford, Parsons, Kua); ý tưởng biến tiêu chuẩn thành phép kiểm chạy được trong pipeline; ba ví dụ (ví dụ thứ ba doc viết "không có lỗ hổng zero-day chưa vá"); đổi governance từ review board sang pipeline. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c8]: Verified (qua snippet) · [O'Reilly / Thoughtworks, Building Evolutionary Architectures 2nd ed.](https://www.thoughtworks.com/insights/books/building-evolutionaryarchitectures-second-edition): bản hai 11/2022, thêm Sadalage; phụ đề "Automated Software Governance". Tin cậy cao (claim #8).
[^c9o]: OPEN · Định nghĩa nguyên văn của fitness function (claim #9): chỉ có diễn giải, không có nguồn.
[^bd2]: Thân doc nguồn, Đánh đổi / quan điểm trái chiều · Fitness function chỉ kiểm được những gì đo được; chọn vendor chiến lược hay đánh đổi giữa các trụ vẫn cần người quyết, tức decision rights ở note về quản trị. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c10]: Verified (qua abstract) · [ISO/IEC/IEEE 42010:2022](https://www.iso.org/standard/74393.html): edition 2; phạm vi; không quy định phương pháp, notation; tách AD khỏi kiến trúc. Tin cậy cao (claim #10).
[^b4c]: Thân doc nguồn, §4 (mục 42010) · Chuẩn định nghĩa các khái niệm architecture description framework, ADL, viewpoint, model kind; hệ quả: 42010 là thước đo tài liệu kiến trúc có đủ concern và viewpoint, không phải phương pháp. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^dt]: Thân doc nguồn, Diễn tiến · Các mốc 11/2011, 2015, 2017, 12/2021, 11/2022, 04/2023, 01/2025, mốc "không rõ volume" của ring Hold/Caution và dòng "Hiện hành (tại 2026-11-05)". Mốc 11/2026 của Vol. 35 nằm ở dòng hiện hành. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bbt]: Thân doc nguồn, Bài tập áp dụng (chưa làm) · Ba bài tập: radar nội bộ 20 blip với ngày EoS và kế hoạch thoát cho blip Caution; review 5–6 trụ Well-Architected, 3 rủi ro cao nhất thành ADR; 3 fitness function (phụ thuộc, hiệu năng, bảo mật) và vị trí chạy trong pipeline. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^inf1]: Suy luận của bài · Câu trả lời về độ chặt hợp lý ghép từ thân doc Tổng quan và mục Đánh đổi (fitness function chỉ kiểm được thứ đo được, quyết định còn lại cần decision rights). Doc không nêu mức chặt nào; bước 6 của phần Áp dụng cũng là cách ghép này.
[^inf2]: Suy luận của bài · Ba điểm khác giữa radar và whitelist (hai ring trung gian, dòng mang theo mức, chép bảng ngoài thành nghĩa vụ trong) rút từ định nghĩa technology standard và technology radar trong Thuật ngữ và từ lời cảnh báo ở §1. Doc không so radar với whitelist.
[^inf3]: Suy luận của bài · Ngưỡng EoS nên không ngắn hơn thời gian thoát thực tế của tổ chức. Doc không nêu căn cứ cho con số 2 năm và không bàn thời gian thoát; đây là lập luận của bài, không phải của nguồn.
[^inf4]: Suy luận của bài · Kết quả review Well-Architected không thay quyết định chọn hay rời vendor, và cần nguồn đánh giá không do vendor soạn. Doc chỉ nói câu hỏi "có nên ở cloud này không" nằm ngoài khung; yêu cầu về nguồn độc lập và người quyết là của bài.
[^inf5]: Suy luận của bài · ADR khác tài liệu thiết kế ở đơn vị (một quyết định) và vòng đời (Status, superseded). Doc không định nghĩa "design doc" và không so với ADR; phần doc chỉ nói là phân biệt AD với kiến trúc.
[^inf6]: Suy luận của bài · Fitness function khác test thông thường ở đối tượng kiểm (đặc tính kiến trúc so với hành vi chức năng) và có thể được hiện thực dưới dạng test. Doc không so hai khái niệm này; bài dựa vào định nghĩa fitness function trong Thuật ngữ (đặc tính kiến trúc) và ba ví dụ ở §4.
[^inf7]: Suy luận của bài · Các công cụ bồi đắp lên nhau thay vì thay nhau, rút từ việc mục Diễn tiến của doc không ghi mốc nào bị thay thế ngoài việc đổi tên ring và bản sách mới. Doc không kết luận như vậy.
[^inf8]: Suy luận của bài · Đọc từ mục Nguồn và bảng kiểm chứng: claim #1 và #8 cùng qua trang Thoughtworks; hai khung Well-Architected là của hai vendor; phát biểu về platform chỉ dựa vào tài liệu CNCF; không dòng nào là nghiên cứu thực nghiệm về hiệu quả. Doc không bàn độ độc lập của nguồn hay bằng chứng thực nghiệm.
[^inf9]: Suy luận của bài · Thứ tự bảy bước, các bước 2, 3, 6, 7 và cách nối chúng với ba bài tập của doc. Dựa vào các mục doc dẫn ở cuối từng bước; không phải quy trình do nguồn nào đề ra, chưa ai kiểm chứng.
[^inf10]: Suy luận của bài · Đọc từ câu trích định nghĩa platform của CNCF (claim #6): câu không nhắc đội hay công cụ. Đây là nhận xét của bài về câu trích, không phải lời của CNCF hay của doc.
[^inf11]: Suy luận của bài · Không nên đọc 42010 như quy trình hay notation. Dựa vào phạm vi trong abstract (claim #10: không quy định quy trình, phương pháp, notation, công cụ); doc không bàn các cách đọc nhầm phổ biến.
