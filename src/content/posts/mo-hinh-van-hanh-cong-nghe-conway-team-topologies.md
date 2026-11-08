---
title: "Mô hình vận hành công nghệ là gì? Conway, project-to-product, Team Topologies"
description: "Cách chia đội công nghệ có thể hiện ra trong hệ thống. Gốc Conway 1968, Flow Framework, Team Topologies, ITIL, và những chỗ nguồn còn hở hoặc chỉ là thứ cấp."
station: 1
published: 2026-11-07
verified: 2026-11-07
image: /og/ep12.jpg
sources:
  - title: "Conway, M. E. (1968). “How Do Committees Invent?” Datamation, 04/1968 — melconway.com"
    url: https://www.melconway.com/Home/Committees_Paper.html
  - title: "Fowler, M. — Conway's Law (20/10/2022, sửa 24/10/2022)"
    url: https://martinfowler.com/bliki/ConwaysLaw.html
  - title: "Fowler, M. — Team Topologies"
    url: https://martinfowler.com/bliki/TeamTopologies.html
  - title: "Team Topologies — Key concepts"
    url: https://teamtopologies.com/key-concepts
  - title: "Skelton, M. & Pais, M. Team Topologies, 2nd ed. — IT Revolution (23/09/2025, qua snippet)"
    url: https://itrevolution.com/product/team-topologies-second-edition/
  - title: "PeopleCert — ITIL certifications (ITIL 4 và ITIL (Version 5), đọc trực tiếp)"
    url: https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1
  - title: "Thứ cấp: B2B Learning — ITIL (Version 5)"
    url: https://www.b2blearning.eu/en/blog/343-the-new-itil-has-arrived-everything-you-need-to-know.html
  - title: "Thứ cấp: itil-v5.com — What's new"
    url: https://www.itil-v5.com/whats-new
  - title: "Thứ cấp: OpenExamPrep — ITIL 4 service value chain"
    url: https://open-exam-prep.com/study-guides/itil-4-foundation/service-value-system-and-chain/service-value-chain
  - title: "Gartner survey (2019), qua DEVOPSdigest (14/05/2019)"
    url: https://www.devopsdigest.com/gartner-85-percent-of-organizations-favor-product-centric-application-delivery-model
  - title: "Kersten, M. (2018). Project to Product. IT Revolution — tóm tắt thứ cấp: software-engineering-metrics, ch. 2.1"
    url: https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/docs/chapters/02-01-the-flow-framework.md
  - title: "Kersten, M. (2018). Project to Product. IT Revolution — tóm tắt thứ cấp: CTO Framework — Flow Metrics"
    url: https://www.ctoframework.com/delivery/metrics/flow-metrics
  - title: "Lee, J. (19/04/2020). Spotify's Failed #SquadGoals"
    url: https://www.jeremiahlee.com/posts/failed-squad-goals/
---

Trong công ty giả định của bài, một ô ghi chú trên trang web mất ba ngày để làm, nhưng chờ 4,5 tuần mới tới tay khách, vì yêu cầu phải đi qua hai lần bàn giao giữa các nhóm.[^g1]

Bài này khảo cứu khái niệm "mô hình vận hành" (operating model) của đội công nghệ: ý "cấu trúc tổ chức đi vào cấu trúc hệ thống" đến từ đâu và nguồn gốc nói đúng những gì, bộ từ vựng hiện hành (Flow Framework, Team Topologies, ITIL) dựa vào nguồn nào, và nguồn nào mới chỉ là thứ cấp hoặc còn bỏ ngỏ.

**Trả lời ngắn:** "mô hình vận hành" là nghĩa thực hành, không có định nghĩa chuẩn duy nhất; doc dùng nghĩa: ai làm việc gì, theo đơn vị nào, và được cấp vốn ra sao.[^bt] Conway (1968) cho biết cấu trúc giao tiếp của tổ chức được sao chép vào thiết kế hệ thống;[^c1] doc rút ra rằng cách chia đội ràng buộc hình dạng kiến trúc, không có nghĩa là sơ đồ tổ chức quyết định tuyệt đối.[^bto] Hai cách cắt bài so sánh là theo chức năng (plan-build-run) và theo đơn vị sản phẩm sống lâu,[^bto] với bảng so sánh là tổng hợp của doc xếp vào "thực hành ngành",[^c12] còn Team Topologies cho bộ từ vựng 4 loại nhóm và 3 chế độ tương tác.[^c3] Chưa kiểm được: thay đổi mô hình ở bản thứ hai của sách, nguồn gốc cụm plan-build-run, và việc dự báo 2022 của Gartner có thành hiện thực hay không.[^c5][^c11][^b2a]

## Gốc: Conway 1968 và cái tên của Brooks

Nguyên văn luận điểm của Conway, đăng trên tạp chí Datamation tháng 04/1968, theo bản doc đã đọc trực tiếp ở trang của tác giả:[^c1]

> *"organizations which design systems (in the broad sense used here) are constrained to produce designs which are copies of the communication structures of these organizations."*

Dịch: các tổ chức thiết kế hệ thống (theo nghĩa rộng) bị ràng buộc phải tạo ra thiết kế là bản sao cấu trúc giao tiếp của chính các tổ chức ấy.

Doc ghi thêm rằng câu thường được trích dẫn ("Any organization that designs a system… will produce a design whose structure is a copy of the organization's communication structure") là cách diễn đạt phổ biến.[^b1a] Hai điều luận điểm này *không* nói, theo cách đọc của doc:
- Nó không đồng nhất với sơ đồ tổ chức; trọng tâm là ai trao đổi với ai. Chữ quan trọng là *communication structure*, tức ai nói chuyện với ai, qua kênh nào.[^b1a]
- Nó không biến mất khi làm việc từ xa: Fowler (2022) viết rằng làm việc từ xa vẫn chịu định luật.[^c2] Theo doc, định luật chuyển sang cấu trúc giao tiếp trực tuyến, và múi giờ vẫn có tác động lớn.[^b1b]

Cái tên "Conway's Law" không do Conway đặt. Theo Fowler, Fred Brooks đặt tên này.[^c2] Mốc 1975 và tên cuốn *The Mythical Man-Month* nằm ở mục Diễn tiến của doc.[^dt] Bài này không có số chương hay số trang trong sách của Brooks, nên không trích gì từ đó.

## Từ định luật thành thao tác: Inverse Conway Maneuver

*Inverse Conway Maneuver* là tên LeRoy và Simons đặt trong *Cutter IT Journal*, tháng 12/2010.[^c2] Thuật ngữ này dùng luận điểm Conway theo hướng chủ động: thiết kế cấu trúc nhóm để kéo kiến trúc về hình dạng mong muốn.[^b1b] Ví dụ trong doc: các nhóm sống lâu, lấy năng lực kinh doanh làm trung tâm, sẽ tạo ra các service tự trị theo năng lực ấy.[^b1b] Ví dụ này là của doc, không nằm trong bảng kiểm chứng.

Hệ quả doc rút ra cho plan-build-run: ranh giới giữa nhóm build và nhóm run có thể hiện ra trong hệ thống dưới dạng bàn giao, phiếu yêu cầu, và một hàng đợi trước mỗi lần đưa bản mới lên.[^b1c] Đây là nhận định của doc áp định luật Conway vào một cách chia cụ thể; bảng kiểm chứng của doc không có dòng riêng cho nó.

Cái giá cũng nằm trong doc. Tái cấu trúc nhóm là thay đổi về con người; sắp xếp lại liên tục làm mất bối cảnh và mâu thuẫn với lợi ích "nhóm bền vững".[^bd3]

## Plan-build-run và đơn vị sản phẩm: hai cách cắt

Theo phần thuật ngữ, doc định nghĩa plan-build-run là cách chia IT theo chức năng: lập kế hoạch hoặc kiến trúc, phát triển, vận hành.[^bt] Về nguồn gốc cụm từ, doc ghi chưa truy được người đặt hay năm đầu tiên.[^c11] Doc gọi đây là thuật ngữ thực hành phổ biến.[^bt] Bài này cũng không đoán.

Một cách cắt khác là mô hình lấy sản phẩm làm trung tâm (product-centric model): nhóm và nguồn vốn gắn với một sản phẩm hay dịch vụ sống lâu, không gắn với dự án.[^bt] Bảng dưới là bảng của doc; toàn bộ các ô là tổng hợp của doc, được xếp vào "thực hành ngành", độ tin cậy trung bình, không phải phát biểu từ một nguồn sơ cấp.

| | Plan-build-run (theo chức năng) | Product / value stream |
|---|---|---|
| Đơn vị tổ chức | Phòng ban chuyên môn[^c12] | Nhóm cross-functional, sống lâu[^c12] |
| Đơn vị cấp vốn | Project: ngân sách, phạm vi, ngày kết thúc[^c12] | Product hoặc value stream: cấp vốn dài hạn cho sản phẩm hoặc value stream[^c12] |
| Đo thành công | On time, on budget, on scope[^c12] | Outcome và flow: giá trị, tốc độ, chất lượng[^c12] |
| Ai chạy hệ thống sau khi xong | Nhóm run nhận bàn giao[^c12] | Chính nhóm đã build ("you build it, you run it")[^c12] |
| Ưu điểm | Chuyên sâu, kiểm soát chi phí rõ, hợp hệ ổn định[^c12] | Ít bàn giao, học nhanh, trách nhiệm đầu-cuối[^c12] |
| Rủi ro | Bàn giao, mất tri thức khi dự án đóng[^c12] | Trùng lặp, cần nền tảng tốt, khó chứng minh chi phí theo dự án[^c12] |

*Value stream* ở đây là chuỗi hoạt động đầu-cuối biến ý tưởng thành giá trị cho khách hàng, theo phần thuật ngữ của doc.[^bt]

Kết luận thực hành của doc: plan-build-run không sai cho mọi thứ. Với hệ ít thay đổi, thuộc lớp System of Record theo cách chia pace layer, mô hình theo chức năng có thể vẫn hợp lý; mô hình sản phẩm phát huy ở nơi thay đổi nhiều.[^c12] Doc nêu thêm hai giới hạn. Một, cấp vốn theo sản phẩm đụng tới kế toán và quản trị, vì phân bổ theo dự án dễ chứng minh CapEx và OpEx, còn cấp vốn thường trực đòi quản trị chuyển từ duyệt phạm vi sang duyệt kết quả.[^bd1] Hai, "you build it, you run it" có giới hạn với hệ cần trực 24/7 hoặc có quy định phân tách nhiệm vụ, nơi một số chức năng run vẫn nên tập trung, thường dưới dạng nhóm nền.[^bd2]

### Con số của Gartner: ý định, không phải mức áp dụng

Doc ghi khảo sát của Gartner công bố năm 2019, đọc qua báo chí: 85% tổ chức đã hoặc định áp dụng cách giao ứng dụng lấy sản phẩm làm trung tâm; năm 2018 khoảng 40% công việc theo cách này; dự báo của Gartner là 80% vào năm 2022.[^c7] Ba điều cần giữ cùng con số. Doc chưa kiểm chứng dự báo 2022 có thành hiện thực.[^b2a] Doc gọi đây là góc nhìn vendor và analyst, và ghi rằng "85%" là ý định áp dụng: chỉ 54% kỳ vọng áp dụng đầy đủ theo thời gian.[^bd4] Và nguồn của bài là báo chí đưa tin khảo sát, không phải báo cáo gốc.[^c7]

## Project to product: Flow Framework của Kersten

Theo doc, Kersten (*Project to Product*, 2018) đề xuất Flow Framework, với 4 flow items và Flow Distribution. Phát biểu này doc chỉ dựa vào hai tóm tắt thứ cấp khớp nhau, nên độ tin cậy là trung bình.[^c6] Ý nghĩa từng loại việc, và việc Flow Distribution là tỉ lệ giữa bốn loại, là phần giải thích ở thân doc.[^b3d]

| Flow item | Đếm cái gì |
|---|---|
| Features | Giá trị kinh doanh[^b3d] |
| Defects | Chất lượng[^b3d] |
| Risks | Bảo mật, tuân thủ[^b3d] |
| Debts | Technical debt[^b3d] |

Phần còn lại là bổ sung của doc, nằm ở thân §3 chứ không ở bảng kiểm chứng:
- Đơn vị đo là value stream, không phải nhóm hay pipeline.[^b3a]
- Flow Distribution là cách phân bổ năng lực thực thi giữa bốn loại. Ví dụ của doc: một sản phẩm dồn 100% vào Features sẽ tích tụ debt và defect.[^b3a]
- Doc nối Risks với nghĩa vụ DORA (quy định, khác với DORA metrics ở dòng sau) và Solvency II đi vào backlog, và nối Debts với technical debt theo Cunningham, tức nối sang các note khác của doc.[^b3b]
- Flow metrics bổ sung DORA metrics: DORA đo pipeline từ commit tới production, flow đo cả value stream.[^b3b]

Rủi ro lách số: nhóm có thể dán nhãn debt hay risk thành feature để trông năng suất hơn. Doc nêu biện pháp là phân loại ngay khi nhận việc, và tự đánh dấu biện pháp này là thứ cấp.[^b3c]

## Team Topologies: 4 loại nhóm, 3 chế độ tương tác

Sách *Team Topologies* của Skelton và Pais ra năm 2019, theo trang của nhà xuất bản (qua snippet).[^c4] Doc đọc trực tiếp trang Key concepts và bài của Fowler, và xác nhận bộ gồm 4 loại nhóm, 3 chế độ tương tác, kèm định nghĩa từng loại.[^c3]

| Loại nhóm | Vai trò |
|---|---|
| Stream-aligned | Giao giá trị trực tiếp dọc một value stream, sở hữu kết quả[^c3]; doc gọi là loại nhóm chính[^b4b] |
| Platform (nhóm nền) | Cung cấp dịch vụ nội bộ giúp nhóm stream-aligned nhanh hơn, giảm độ phức tạp cho họ[^c3] |
| Enabling | Tạm thời nâng kỹ năng cho nhóm khác rồi rời đi[^c3] |
| Complicated subsystem | Giữ thành phần cần chuyên môn sâu[^c3]; ví dụ trong doc: engine định phí, mô hình actuarial[^b4b] |

| Chế độ tương tác | Ý nghĩa | Chi phí (theo doc) |
|---|---|---|
| Collaboration | Làm cùng nhau trong thời gian xác định để khám phá API, công nghệ hoặc cách làm[^c3] | Tốn nhiều thời gian tương tác, chi phí phối hợp cao[^b4b] |
| X-as-a-Service | Một nhóm cung cấp, nhóm kia dùng như dịch vụ[^c3] | Ít tương tác, ranh giới rõ[^b4b] |
| Facilitation | Một nhóm giúp và dẫn dắt nhóm kia[^c3] | Tạm thời, có trọng tâm[^b4b] |

Hai ý nền, theo thân doc §4: *fast flow* nghĩa là giảm bàn giao, và *cognitive load* nghĩa là phạm vi sở hữu của một nhóm không được vượt quá sức nó.[^b4a] Phần thuật ngữ của doc định nghĩa cognitive load là khối lượng nỗ lực tinh thần mà một nhóm phải gánh.[^bt] Doc cũng ghi, theo Fowler, nhóm stream-aligned là một *business capability centric team*; đó là chỗ bản đồ năng lực trở thành bản thiết kế nhóm.[^b4c]

### Bản thứ hai, 09/2025: chỉ biết có, chưa biết đổi gì

Bản thứ hai ra ngày 23/09/2025 theo trang của nhà xuất bản (qua snippet), thêm case study từ nhiều ngành, cùng lời tựa và lời bạt mới.[^c4] Việc mô hình có thay đổi hay không là OPEN, vì doc chưa đọc sách.[^c5] Doc ghi thêm rằng các mô tả của nhà xuất bản vẫn nhấn mạnh fast flow và cognitive load và không nhắc thay đổi nào cho 4 loại nhóm hay 3 chế độ.[^b4d] Bài này suy ra: một mô tả quảng bá không nhắc thay đổi thì chưa chứng minh rằng không có thay đổi.[^c5]

## ITIL: dấu hiệu cùng hướng, bằng chứng chủ yếu thứ cấp

ITIL 4 (2019) mô tả *service value chain* như một mô hình vận hành gồm 6 hoạt động, theo tài liệu ôn thi trích AXELOS (thứ cấp).[^c8] Năm 2019 và tên sáu hoạt động (plan, improve, engage, design & transition, obtain/build, deliver & support) và ý ghép chúng theo nhiều thứ tự khác nhau để tạo ra các value stream nằm ở thân §5 của doc.[^b5a]

ITIL (Version 5) có hai tầng bằng chứng khác nhau, và bài tách ra:
- Việc nó tồn tại: doc đọc trực tiếp trang chứng chỉ của PeopleCert; nguồn này chỉ đỡ phần tồn tại.[^c9a]
- Ngày phát hành 12/02/2026, vòng đời 8 hoạt động, xây trên ITIL 4: theo hai nguồn thứ cấp.[^c9b]
- Tên tám hoạt động (Discover, Design, Acquire, Build, Transition, Operate, Deliver, Support), việc chúng chạy lặp chứ không tuần tự, và việc đưa AI vào hướng dẫn: thân §5 của doc, trong đó phần về AI doc đánh dấu là thứ cấp, cần đối chiếu với trang chứng chỉ.[^b5b]

Doc đọc rằng hướng đi giống các mục trên: ITSM cũng chuyển từ dịch vụ do nhóm vận hành nhận bàn giao sang sản phẩm và dịch vụ quản lý chung một vòng đời, là "phiên bản ITSM của you build it, you run it".[^b5c] Đó là cách đọc của doc mà bài nhắc lại, không phải lời của PeopleCert hay AXELOS.

## "Spotify model": một lời kể, không phải bản mẫu

Mô hình squads, tribes, chapters, guilds được công bố năm 2012 và bị sao chép rộng.[^b6] Nguồn phản biện chính chỉ là một lời kể của người trong cuộc: Lee, một cựu quản lý sản phẩm của công ty ấy,[^b6] viết tháng 04/2020 rằng mô hình này *"only ever aspirational and never fully implemented"*.[^c10] Doc đánh giá đây là lời kể của người trong cuộc, tin cậy trung bình.[^c10] Lee cũng cho biết công ty dần quay về cấu trúc quản lý truyền thống khi tăng gấp ba quy mô.[^b6] Bài học "mô hình vận hành là ảnh chụp một tổ chức tại một thời điểm, không phải bản mẫu" là của doc.[^b6]

## Diễn tiến

<figure class="fig" aria-label="Dòng thời gian mười mốc từ 1968 đến 2026 của các khái niệm về mô hình vận hành công nghệ, từ bài của Conway đến ITIL phiên bản 5">
<ol class="loop">
<li>04/1968 · Conway<small>"How Do Committees Invent?", Datamation[^dt]</small></li>
<li>1975 · Brooks<small>đặt tên "Conway's Law" trong The Mythical Man-Month[^dt]</small></li>
<li>12/2010 · LeRoy và Simons<small>Inverse Conway Maneuver[^dt]</small></li>
<li>2012 · Spotify<small>công bố mô hình squads và tribes[^dt]</small></li>
<li>2018 · Kersten<small>Project to Product, Flow Framework[^dt]</small></li>
<li>2019 · Team Topologies, ITIL 4, Gartner<small>4 loại nhóm; service value chain; Gartner khảo sát: 85% đã hoặc định áp dụng product-centric[^dt]</small></li>
<li>04/2020 · Lee<small>"Spotify model" chưa từng triển khai đầy đủ[^dt]</small></li>
<li>10/2022 · Fowler<small>cập nhật bài Conway's Law: làm việc từ xa, inverse maneuver[^dt]</small></li>
<li>09/2025 · Team Topologies bản 2<small>qua snippet; thay đổi mô hình là OPEN[^dt]</small></li>
<li>02/2026 · ITIL (Version 5)<small>một vòng đời cho cả sản phẩm số và dịch vụ[^dt]</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Các mốc theo mục Diễn tiến của doc nguồn. Mốc nào chỉ qua snippet hay nguồn thứ cấp thì giữ nguyên mức đó ở các mục trên.[^dt]</figcaption>
</figure>

Nhận định "hiện hành" của doc, tại 2026-11-05: xu hướng chung là chuyển từ cắt theo chức năng và cấp vốn theo dự án sang nhóm bền vững theo value stream, đo bằng flow; Team Topologies là bộ từ vựng thiết kế phổ biến; ITIL (Version 5) đưa ITSM theo cùng hướng; plan-build-run vẫn hợp lý cho phần ít thay đổi.[^dt] Lời "xu hướng chung" là nhận định tổng hợp của doc qua các nguồn có độ tin cậy lẫn lộn (đọc trực tiếp, thứ cấp, snippet, báo chí).

## Chỗ còn phải đọc cẩn thận

**Hai phát biểu OPEN.** Nguồn gốc của thuật ngữ plan-build-run chưa truy được.[^c11] Mọi thay đổi về mô hình trong Team Topologies bản thứ hai chưa kiểm được, vì chưa đọc sách.[^c5] Bài viết cả hai như OPEN, không như sự thật chưa ai phản bác.

**Nguồn thứ cấp và nguồn qua snippet.** Có bốn nhóm:
- Flow Framework, ITIL 4 và phần chi tiết của ITIL (Version 5) chỉ có tóm tắt thứ cấp.[^c6][^c8][^c9b]
- Bản thứ hai của Team Topologies chỉ qua snippet của nhà xuất bản.[^c4]
- Số liệu Gartner chỉ qua báo chí.[^c7]
- "Spotify model" chưa đầy đủ chỉ có một lời kể của một người trong cuộc.[^c10]

Trong các phát biểu cốt lõi, ba nhóm đứng trên nguồn đọc trực tiếp với độ tin cậy cao: nguyên văn Conway, các ý từ bài Conway's Law của Fowler, và định nghĩa của Team Topologies.[^c1][^c2][^c3] Trang PeopleCert cũng đọc trực tiếp nhưng chỉ đỡ việc ITIL (Version 5) tồn tại.[^c9a]

**Rủi ro lách số.** Rủi ro dán nhãn lại flow items (mục Project to product) và biện pháp của doc đều chỉ ở mức thứ cấp.[^b3c]

**Số liệu Gartner là ý định.** Như trên: 85% gồm cả tổ chức mới *định* áp dụng, và 54% mới là mức kỳ vọng áp dụng đầy đủ.[^bd4] Bài này khuyến nghị: không dùng con số này để nói rằng đa số tổ chức đã chuyển.

**Doc từ chối ghép mẫu DDD với chế độ tương tác.** Việc ghép từng mẫu trong bản đồ ngữ cảnh (context-map pattern) của DDD với từng chế độ tương tác của Team Topologies chưa có nguồn sơ cấp, nên doc không đưa ra ánh xạ nào.[^bddd] Bài này theo đúng ranh giới đó. Bảng chế độ tương tác ở trên đứng một mình.

**Độ độc lập của nguồn.** Bài này suy ra từ mục Nguồn của doc rằng:
- Việc Brooks đặt tên, ảnh hưởng của làm việc từ xa, Inverse Conway Maneuver (claim #2) và một phần định nghĩa Team Topologies (claim #3) cùng dựa vào Fowler, nên không phải các nguồn độc lập với nhau.[^ind]
- Doc ghi hai tóm tắt thứ cấp của Kersten khớp nhau, nhưng không ghi chúng có độc lập với nhau không.[^ind]
- Với ITIL (Version 5), doc dùng hai nguồn thứ cấp và không ghi mối quan hệ giữa chúng.[^ind]
- Trong mục Nguồn, IT Revolution vừa được ghi là nhà xuất bản của sách Kersten vừa là trang cho dữ liệu bản thứ hai của Team Topologies, nên các mô tả bản thứ hai đến từ bên bán sách.[^ind]

**Bảng so sánh plan-build-run và sản phẩm là thực hành ngành.** Nó là tổng hợp của doc ở mức trung bình, và bảng không dẫn nguồn nào cho từng ô.[^c12]

## Áp dụng: từng bước kiểm xem cách chia đội đang tạo bàn giao ở đâu

Doc có ba bài tập áp dụng, và ghi rõ là chưa làm.[^bbt] Phương pháp dưới đây dựng trên ba bài tập ấy, thêm vài bước nối do bài này suy ra. Tức là cả phương pháp là suy luận của bài từ doc, không phải quy trình do Conway, Kersten hay Skelton và Pais đề ra, và chưa có ai kiểm chứng nó.[^inf1]

1. **Đếm bàn giao và hàng đợi.** Vẽ một yêu cầu thay đổi điển hình đi qua các nhóm hiện tại; đếm số bàn giao và số hàng đợi. Doc coi đó là dấu vết Conway của mô hình vận hành.[^bbt]
2. **Gắn mỗi hàng đợi vào một ranh giới.** Với mỗi chỗ chờ, ghi xem nó do ranh giới giữa hai nhóm, do nhịp đưa bản mới lên, hay do nhóm quá bận. Bước này do bài suy ra; doc chỉ đòi đếm.[^inf1]
3. **Đề xuất nhóm cho từng năng lực.** Lấy 5 năng lực cấp 1 từ bản đồ năng lực và đề xuất một nhóm stream-aligned cho mỗi cái. Thành phần nào cần nhóm complicated-subsystem? Thứ gì nên thành nền chung?[^bbt]
4. **Chọn chế độ tương tác cho từng cặp nhóm.** Mặc định X-as-a-Service cho chỗ ranh giới đã rõ; Collaboration có thời hạn khi cần khám phá; Facilitation khi một nhóm cần nâng kỹ năng. Đây là cách bài đọc ba định nghĩa của doc thành quy tắc chọn, không phải quy tắc của nguồn.[^inf1]
5. **Chừa phần ít đổi cho mô hình chức năng.** Doc cho rằng mô hình chức năng có thể vẫn hợp lý cho hệ System of Record ít thay đổi;[^c12] bài suy ra là không cần chuyển chỉ vì xu hướng chung.[^inf1]
6. **Phân loại backlog ba tháng theo 4 flow items** và so Flow Distribution với ưu tiên chiến lược đã tuyên bố.[^bbt] Phân loại ngay khi nhận việc để giảm nguy cơ lách nhãn.[^b3c]
7. **Trước khi đổi cấu trúc, ước chi phí đổi.** Tái cấu trúc là thay đổi về con người, và cấp vốn thường trực kéo theo thay đổi quản trị; doc nêu cả hai là cái giá.[^bd3][^bd1]

Ví dụ minh họa, giả định, cho bước 1 và 2: một ô ghi chú làm ba ngày, chờ nhóm làm 1,5 tuần, rồi chờ nhóm chạy 3 tuần vì mỗi tháng chỉ đưa lên một lần. Hai chỗ chờ, hai ranh giới khác nhau: một chỗ do hàng đợi của nhóm làm, một chỗ do nhịp đưa bản mới lên của nhóm chạy. Câu hỏi bước 3 đến 4 là chỗ chờ nào biến mất nếu nhóm làm cũng giữ việc đưa lên và chạy.[^g2]

[^g1]: Giả định · Công ty giả định của bài: ô ghi chú làm ba ngày, chờ 4,5 tuần qua hai lần bàn giao. Không đến từ nguồn.
[^g2]: Giả định · Ô ghi chú làm ba ngày, chờ nhóm làm 1,5 tuần, chờ nhóm chạy 3 tuần vì mỗi tháng đưa lên một lần. Đây là ví dụ minh họa, không đến từ nguồn.
[^bto]: Thân doc nguồn, Tổng quan · Operating model trả lời câu hỏi "ai làm việc gì, theo đơn vị nào, và được cấp vốn ra sao"; hai cách cắt chính là theo chức năng và theo value stream; chọn operating model cũng là chọn kiến trúc (Conway's Law). Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bt]: Thân doc nguồn, Thuật ngữ · Định nghĩa operating model ("không có định nghĩa chuẩn duy nhất; note dùng nghĩa thực hành này"), plan-build-run (thuật ngữ thực hành phổ biến), product-centric model, value stream, cognitive load. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c1]: Verified · [Conway (1968), Datamation 04/1968](https://www.melconway.com/Home/Committees_Paper.html): nguyên văn luận điểm; đọc trực tiếp. Tin cậy cao (claim #1).
[^b1a]: Thân doc nguồn, §1 · Câu thường được trích là cách diễn đạt phổ biến; chữ quan trọng là communication structure, không phải org chart. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c2]: Verified · [Fowler, Conway's Law (2022)](https://martinfowler.com/bliki/ConwaysLaw.html): Brooks đặt tên "Conway's Law"; làm việc từ xa vẫn chịu định luật; Inverse Conway Maneuver do LeRoy & Simons (Cutter, 12/2010); đọc trực tiếp. Tin cậy cao (claim #2).
[^b1b]: Thân doc nguồn, §1 · Làm việc từ xa chuyển định luật sang cấu trúc giao tiếp trực tuyến, múi giờ vẫn có tác động lớn; mô tả Inverse Conway Maneuver là thiết kế cấu trúc nhóm để kéo kiến trúc về hình dạng mong muốn; ví dụ nhóm sống lâu lấy năng lực làm trung tâm tạo service tự trị. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b1c]: Thân doc nguồn, §1 · Hệ quả cho plan-build-run: ranh giới build và run hiện thành bàn giao, phiếu yêu cầu, hàng đợi trước mỗi release. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^dt]: Thân doc nguồn, Diễn tiến · Các mốc 04/1968, 1975 (Brooks, The Mythical Man-Month), 12/2010, 2012, 2018, 2019, 04/2020, 10/2022, 09/2025, 02/2026 và dòng "Hiện hành (tại 2026-11-05)". Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c3]: Verified · [Team Topologies, Key concepts](https://teamtopologies.com/key-concepts) và [Fowler, Team Topologies](https://martinfowler.com/bliki/TeamTopologies.html): 4 loại nhóm, 3 chế độ tương tác, định nghĩa từng loại; đọc trực tiếp. Tin cậy cao (claim #3).
[^b4a]: Thân doc nguồn, §4 · Hai ý nền: fast flow (giảm bàn giao) và cognitive load (phạm vi sở hữu không vượt sức nhóm). Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b4b]: Thân doc nguồn, §4 · Chữ "loại nhóm chính" cho stream-aligned, ví dụ của complicated subsystem, và cột chi phí của ba chế độ. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b4c]: Thân doc nguồn, §4 · Theo Fowler, stream-aligned team là business capability centric team; bản đồ năng lực thành bản thiết kế nhóm. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c4]: Verified (qua snippet) · [IT Revolution](https://itrevolution.com/product/team-topologies-second-edition/): sách 2019; bản thứ hai 23/09/2025 với case study, lời tựa và lời bạt mới; Tin cậy cao (claim #4).
[^c5]: OPEN · Thay đổi về mô hình trong bản thứ hai (claim #5): chưa đọc sách. Không có nguồn.
[^b4d]: Thân doc nguồn, §4 · Mô tả nhà xuất bản vẫn nhấn mạnh fast flow và cognitive load, không nhắc thay đổi nào cho 4 loại nhóm hay 3 chế độ. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c6]: Verified (thứ cấp) · [software-engineering-metrics, ch. 2.1](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/docs/chapters/02-01-the-flow-framework.md) và [CTO Framework, Flow Metrics](https://www.ctoframework.com/delivery/metrics/flow-metrics): Flow Framework, 4 flow items, Flow Distribution; hai nguồn khớp nhau. Tin cậy trung bình (claim #6).
[^b3a]: Thân doc nguồn, §3 · Đơn vị đo là value stream; Flow Distribution là đòn bẩy phân bổ sức làm; ví dụ 100% vào Features. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b3b]: Thân doc nguồn, §3 · Nối Risks với nghĩa vụ DORA (quy định, khác DORA metrics) và Solvency II, Debts với Cunningham, và flow metrics với DORA metrics. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b3d]: Thân doc nguồn, §3 · Bốn flow item và ý nghĩa từng loại (Features: giá trị kinh doanh; Defects: chất lượng; Risks: bảo mật, tuân thủ; Debts: technical debt); Flow Distribution là tỉ lệ bốn loại. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b3c]: Thân doc nguồn, §3 · Rủi ro gaming (dán nhãn debt hay risk thành feature) và biện pháp phân loại ngay khi nhận việc, doc đánh dấu "thứ cấp". Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c7]: Verified (qua báo chí) · [DEVOPSdigest (14/05/2019)](https://www.devopsdigest.com/gartner-85-percent-of-organizations-favor-product-centric-application-delivery-model): 85% đã hoặc định áp dụng; 40% công việc năm 2018; dự báo 80% năm 2022. Bảng kiểm chứng còn nêu Information Age, mục Nguồn không có URL của nguồn này. Tin cậy trung bình (claim #7).
[^b2a]: Thân doc nguồn, §2 · Doc chưa kiểm chứng dự báo 80% năm 2022 có thành hiện thực hay không. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c8]: Verified (thứ cấp) · [OpenExamPrep, ITIL 4 service value chain](https://open-exam-prep.com/study-guides/itil-4-foundation/service-value-system-and-chain/service-value-chain): service value chain là mô hình vận hành, 6 hoạt động; bảng kiểm chứng ghi nguồn là tài liệu ôn thi trích AXELOS. Tin cậy trung bình (claim #8).
[^b5a]: Thân doc nguồn, §5 · Năm 2019 của ITIL 4, tên sáu hoạt động của service value chain và việc ghép theo nhiều thứ tự tạo ra các value stream. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c9a]: Verified · [PeopleCert, ITIL certifications](https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1): ITIL (Version 5) tồn tại; đọc trực tiếp. Tin cậy trung bình–cao (claim #9, phần tồn tại).
[^c9b]: Verified (thứ cấp) · [B2B Learning](https://www.b2blearning.eu/en/blog/343-the-new-itil-has-arrived-everything-you-need-to-know.html) và [itil-v5.com](https://www.itil-v5.com/whats-new): phát hành 12/02/2026, vòng đời 8 hoạt động, xây trên ITIL 4. Tin cậy trung bình–cao (claim #9, phần ngày và chi tiết).
[^b5b]: Thân doc nguồn, §5 · Tên tám hoạt động, vòng chạy lặp, và việc đưa AI vào guidance (doc đánh dấu thứ cấp, đối chiếu trang chứng chỉ của PeopleCert). Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^b5c]: Thân doc nguồn, §5 · Nhận định của doc: ITSM chuyển sang product và service chung một vòng đời, là phiên bản ITSM của "you build it, you run it". Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c10]: Verified (lời kể của người trong cuộc) · [Lee (19/04/2020), Spotify's Failed #SquadGoals](https://www.jeremiahlee.com/posts/failed-squad-goals/): "Spotify model" chưa bao giờ được triển khai đầy đủ; đọc trực tiếp. Tin cậy trung bình (claim #10).
[^b6]: Thân doc nguồn, §6 · Năm 2012 Spotify công bố mô hình và nó được sao chép rộng; công ty dần quay về cấu trúc quản lý truyền thống khi tăng gấp ba quy mô; bài học "ảnh chụp, không phải template". Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^c11]: OPEN · Nguồn gốc thuật ngữ plan-build-run (claim #11): chưa truy được nguồn gốc. Không có nguồn.
[^c12]: Thực hành ngành · Bảng so sánh plan-build-run và product, cùng ý pace layer quyết định mô hình, là tổng hợp của doc (claim #12). Không nguồn sơ cấp. Tin cậy trung bình.
[^bd1]: Thân doc nguồn, Đánh đổi / quan điểm trái chiều · Cấp vốn theo product đụng kế toán và quản trị: dự án dễ chứng minh CapEx/OpEx và kiểm soát qua stage-gate; cấp vốn thường trực đòi chuyển từ duyệt phạm vi sang duyệt outcome. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bd2]: Thân doc nguồn, Đánh đổi / quan điểm trái chiều · "You build it, you run it" có giới hạn với hệ trực 24/7 và quy định phân tách nhiệm vụ; một số chức năng run vẫn nên tập trung, thường dưới dạng nhóm nền. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bd3]: Thân doc nguồn, Đánh đổi / quan điểm trái chiều · Inverse Conway không miễn phí: tái cấu trúc là thay đổi về con người, sắp xếp lại liên tục làm mất bối cảnh. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bd4]: Thân doc nguồn, Đánh đổi / quan điểm trái chiều · Dự báo và khảo sát Gartner là góc nhìn vendor/analyst; 85% là ý định áp dụng, chỉ 54% kỳ vọng áp dụng đầy đủ theo thời gian. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^bddd]: Thân doc nguồn, §4 · Ghép từng context-map pattern của DDD với từng interaction mode chưa có nguồn sơ cấp; note không đưa ra ánh xạ. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^ind]: Suy luận của bài · Đọc từ mục Nguồn và bảng kiểm chứng của doc: claim #2 và #3 cùng dùng Fowler; IT Revolution xuất hiện ở nguồn 4 (bản thứ hai) và nguồn 7 (sách Kersten). Hai tóm tắt thứ cấp của Kersten (claim #6) và hai nguồn thứ cấp của ITIL (Version 5) (claim #9): doc không ghi chúng có độc lập với nhau không. Doc không bàn về độ độc lập của các nguồn.
[^bbt]: Thân doc nguồn, Bài tập áp dụng (chưa làm) · Ba bài tập: đếm bàn giao và hàng đợi của một yêu cầu; đề xuất nhóm stream-aligned cho 5 năng lực cấp 1; phân loại backlog 3 tháng theo 4 flow items. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^inf1]: Suy luận của bài · Thứ tự bảy bước, bước 2 (gắn hàng đợi vào ranh giới), bước 4 (quy tắc chọn chế độ tương tác), bước 5 và 7 (nối các mục của doc thành trình tự). Dựa vào các mục doc dẫn ở cuối từng bước; không phải quy trình do nguồn nào đề ra.
