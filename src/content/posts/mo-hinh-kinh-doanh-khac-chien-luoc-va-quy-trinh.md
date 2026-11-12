---
title: "Business model là gì, và khác chiến lược, quy trình ở đâu?"
seoTitle: "Business model khác chiến lược và quy trình ở đâu?"
description: "Đọc lại luận án Osterwalder 2004 và Business Model Canvas: định nghĩa gốc, ba lớp, chín ô, ba kiểu cấu hình giá trị, và chỗ khung này còn hở."
station: 1
published: 2026-11-08
verified: 2026-11-04
image: /og/ep03.jpg
video: {id: PwAZOpCxsIw, duration: "5:12", episode: 3}
sources:
  - title: "Osterwalder, A. (2004). The Business Model Ontology: A Proposition in a Design Science Approach. Luận án tiến sĩ, HEC, Université de Lausanne"
    url: https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf
  - title: "Hồ sơ luận án trên UNIL IRIS"
    url: https://iris.unil.ch/entities/publication/2946a1c2-6d59-4440-99e7-f768ca26b8d3
  - title: "Strategyzer. The Business Model Canvas"
    url: https://www.strategyzer.com/library/the-business-model-canvas
  - title: "Object Management Group (2026). Business Architecture Core Metamodel (BACM) 1.1"
    url: https://www.omg.org/spec/BACM/1.1/PDF
---

"Mô hình kinh doanh" thường được dùng lẫn với "chiến lược", và Business Model Canvas thường được vẽ như một bản kế hoạch một trang cho cả công ty. Cả hai cách dùng đều đi xa hơn điều nguồn gốc của khái niệm nói. Bài này đọc lại luận án của Alexander Osterwalder (2004), nền ontology mà Business Model Canvas về sau rút thành công cụ một trang, để trả lời ba câu: business model là gì, nó nằm ở đâu giữa chiến lược và quy trình, và vì sao một nhóm khách hàng mới có thể cần một canvas riêng chứ không chỉ thêm một kênh bán.

**Trả lời ngắn:** trong luận án gốc, business model là một công cụ khái niệm diễn đạt *logic kiếm tiền* của công ty: đưa giá trị gì, cho phân khúc khách nào, bằng kiến trúc công ty và mạng đối tác nào để tạo, tiếp thị và chuyển giao giá trị ấy. Chính tác giả ghi rằng định nghĩa này không được mọi nhà nghiên cứu chia sẻ. Nó là lớp kiến trúc nằm giữa chiến lược (lớp hoạch định) và quy trình (lớp hiện thực), và là "keo" nối chiến lược, tổ chức và công nghệ. Canvas chín ô là công cụ một trang rút từ ontology ấy. Chính Strategyzer dặn vẽ một canvas cho *một* business model, không cho cả công ty. Đổi phân khúc khách thường kéo các ô bên trái và hai ô tiền đổi theo; khi chúng đổi đáng kể, nên coi đó là một business model khác.

## Gốc khái niệm: một ontology, không phải một tờ giấy

Gốc khái niệm là luận án tiến sĩ của Osterwalder tại HEC Lausanne năm 2004, do Yves Pigneur hướng dẫn, không phải TOGAF hay một khung kiến trúc doanh nghiệp nào. Bản thân canvas thì Strategyzer ghi là đến từ cuốn *Business Model Generation* (2010) của hai tác giả. Ba tầng nguồn này nên được tách khi đọc: ontology 2004, canvas 2010, và hướng dẫn hiện nay trên trang của Strategyzer.[^1] Luận án định nghĩa business model là một công cụ khái niệm gồm các phần tử và quan hệ giữa chúng, diễn đạt logic kiếm tiền của một công ty. Logic ấy gồm giá trị công ty đưa cho một hay nhiều phân khúc khách, cùng kiến trúc của công ty và mạng đối tác để tạo, tiếp thị và chuyển giao giá trị đó.[^2] Một câu ngắn hơn trong luận án gói lại *business logic*: *"what it offers, to whom it offers this and how it can accomplish this"*.[^2]

Từ định nghĩa này, luận án dựng một ontology gồm bốn trụ (pillar) và chín phần tử (element) (Table 16).[^3] Có thể đọc canvas như bản một trang của chín phần tử ấy, với phần lớn tên đã đổi (xem mục chín ô bên dưới); đây là cách đối chiếu của bài, dựa trên việc so hai danh sách.[^7] Phân biệt này quan trọng. Ontology có định nghĩa và quan hệ giữa các phần tử; mẫu canvas chỉ có ô. Muốn đọc một ô ở mức khái niệm và quan hệ của nó với các ô khác, cần quay lại luận án, không chỉ nhìn tờ giấy.

## Ba lớp: chiến lược, business model, quy trình

Osterwalder (Figure 6) xếp ba lớp, ở ba mức trừu tượng khác nhau quanh cùng một câu hỏi: công ty kiếm tiền thế nào.[^4]

<figure class="fig fig-gov" aria-label="Ba lớp xếp chồng: chiến lược, business model, quy trình; business model dịch chiến lược xuống và đánh giá chiến lược ngược lên.">
<div class="gov-band"><p class="gov-who">Chiến lược<small>Planning</small></p><p class="gov-verbs">Strategic layer</p><p class="gov-out">Tầm nhìn, mục tiêu</p></div>
<p class="gov-link"><span>Dịch thành bản thiết kế</span><span>Đánh giá chiến lược còn đúng không</span></p>
<div class="gov-band"><p class="gov-who">Business model<small>Architectural</small></p><p class="gov-verbs">Business model layer</p><p class="gov-out">Logic kiếm tiền</p></div>
<p class="gov-link"><span>Thành hình thái vật chất</span><span aria-hidden="true" style="visibility:hidden"></span></p>
<div class="gov-band"><p class="gov-who">Quy trình<small>Implementation</small></p><p class="gov-verbs">Process layer</p><p class="gov-out">Tổ chức và quy trình làm việc</p></div>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Ba lớp theo Figure 6 của Osterwalder, quanh cùng một câu hỏi: công ty kiếm tiền thế nào.</figcaption>
</figure>

Quan hệ giữa các lớp đi theo hai chiều. Từ trên xuống, business model *dịch* chiến lược thành một bản thiết kế. Từ dưới lên, business model là chỗ để *đánh giá* chiến lược còn đúng không.[^4] Với lớp dưới, luận án gọi tổ chức (phòng ban, đơn vị, quy trình) là *hình thái vật chất* của business model.[^4] Ví dụ trong luận án là Compaq: hãng thêm kênh bán trực tiếp qua Internet nhưng không chỉnh tổ chức, nên các nhà bán lại (reseller) của chính hãng phản ứng vì bị cạnh tranh.[^4] Bài học không phải "đừng bán trực tiếp", mà là: đổi một ô của business model mà không đổi hình thái vật chất của nó thì hai phần của công ty sẽ va nhau.

Luận án cũng nói rõ business model khác business process model, hai khái niệm theo tác giả thường bị nhầm.[^5] Nói gọn theo cách của bài: một process model mô tả luồng công việc (hoạt động, vai trò, thứ tự, phụ thuộc), còn một business model mô tả vì sao những việc ấy đem lại tiền.

Ranh giới giữa chiến lược và business model thì không được luận án phân xử. Osterwalder ghi nhận các quan điểm về hai khái niệm *"differ widely"* và cố ý không chọn bên.[^4] Người đọc nên giữ ba lớp như một cách sắp xếp hữu ích, không như một chân lý được đồng thuận.

## Keo giữa chiến lược, tổ chức và công nghệ

Luận án đặt business model ở giữa một tam giác: chiến lược kinh doanh ở trên, tổ chức và ICT ở hai góc dưới, và áp lực bên ngoài (cạnh tranh, nhu cầu khách, pháp lý, xã hội, công nghệ) đè lên cả ba.[^6] Lý do cần "keo" là ba nhóm người nhìn công ty từ ba góc. Người làm kinh doanh định hướng; người thiết kế quy trình và người thiết kế hệ thống phải hiện thực hóa. Business model cho họ một bộ từ vựng chung.[^6]

Từ đó Osterwalder đặt hai câu hỏi ngược chiều giữa business model và công nghệ (Figure 11):[^6]

| Chiều | Câu hỏi | Ai thường hỏi |
|---|---|---|
| Công nghệ → business model | *"How can the business model be improved through ICT?"* | người làm công nghệ |
| Business model → công nghệ | *"What kind of ICT does a business ask for in order to be implemented?"* | người làm kinh doanh |

Luận án phân biệt hai kiểu tác động của ICT. Trực tiếp: business model dựa hẳn vào công nghệ (Amazon, eBay; gợi ý sản phẩm, xếp hạng). Gián tiếp: chi phí giao tiếp và phối hợp giảm, nên công ty dễ làm việc theo mạng lưới, thuê ngoài phần không thiết yếu, ghép giá trị với đối tác, và thêm yếu tố thông tin vào sản phẩm.[^6]

Hệ quả cho danh mục dự án là suy luận của bài này, không phải của luận án. Mỗi đề xuất công nghệ nên trả lời được nó *cải thiện* ô nào của business model nào (câu thứ nhất), hoặc *hiện thực* ô nào mà phía kinh doanh đã quyết (câu thứ hai). Với một business model chưa chạy ngày nào, bài này đề nghị hỏi câu thứ hai trước: chưa biết mô hình cần gì thì khó biết công nghệ cải thiện nó ở đâu.

## Từ ontology đến canvas: chín ô và sáu cái tên mới

| Pillar | Phần tử trong luận án (2004) | Tên trên canvas Strategyzer |
|---|---|---|
| Product | Value Proposition | Value Propositions |
| Customer Interface | Target Customer | Customer Segments |
| | Distribution Channel | Channels |
| | Relationship | Customer Relationships |
| Infrastructure Management | Value Configuration | Key Activities |
| | Capability | Key Resources |
| | Partnership | Key Partnerships |
| Financial Aspects | Cost Structure | Cost Structure |
| | Revenue Model | Revenue Streams |

Hầu hết tên đã đổi, có chỗ chỉ thêm số nhiều; theo cách đếm của bài, sáu trên chín tên khác về nghĩa.[^7] Hai ánh xạ trong bảng là suy luận, chưa có nguồn nói thẳng. Value Configuration ứng với Key Activities, và Capability ứng với Key Resources: trong ontology, capability được tạo ra từ resource, nên hai thứ không trùng nhau.[^7] Ô thứ chín trên canvas gốc tên "Cost Structure", số ít.[^8] Mẫu canvas của Strategyzer in dòng giấy phép CC BY-SA 3.0, nên bản thân mẫu được chia sẻ và dùng lại theo điều kiện giấy phép ấy; điều này không áp cho sách, khóa học hay công cụ trả phí của Strategyzer.[^9]

Strategyzer mô tả cách đọc canvas theo hai nửa. Nửa phải là thị trường (khách, kênh, quan hệ), nửa trái là những gì cần để phục vụ thị trường đó (việc chính, nguồn lực, đối tác), và giá trị đưa cho khách nằm giữa. Hai ô tiền ở dưới cùng chỉ có nghĩa khi được đọc cùng bảy ô phía trên.[^10] Đọc theo cách đó, đổi ô khách hiếm khi là thay đổi cục bộ: cần kiểm từng ô kênh, việc chính và cấu trúc chi phí xem có phải đổi theo không.

<figure class="fig" aria-label="Business Model Canvas chín ô cho công ty bán lẻ giả định.">
<div class="canvas">
<p class="canvas-half" style="grid-area:hl">Thứ cần để phục vụ thị trường</p>
<p class="canvas-half" style="grid-area:hm">Giá trị</p>
<p class="canvas-half" style="grid-area:hr">Thị trường</p>
<div class="canvas-cell" style="grid-area:kp"><p class="canvas-n">Đối tác chính<small>Key Partnerships</small></p><p class="canvas-d">Hãng tủ lạnh</p></div>
<div class="canvas-cell" style="grid-area:ka"><p class="canvas-n">Việc chính<small>Key Activities</small></p><p class="canvas-d">Giao hàng, quảng cáo</p></div>
<div class="canvas-cell" style="grid-area:kr"><p class="canvas-n">Nguồn lực chính<small>Key Resources</small></p><p class="canvas-d">Kho, đội xe</p></div>
<div class="canvas-cell" style="grid-area:vp"><p class="canvas-n">Giá trị đưa cho khách<small>Value Propositions</small></p><p class="canvas-d">Tủ lạnh, giao nhanh cho khách gần kho</p></div>
<div class="canvas-cell" style="grid-area:cr"><p class="canvas-n">Quan hệ khách<small>Customer Relationships</small></p><p class="canvas-d">Tự đặt, trả ngay</p></div>
<div class="canvas-cell" style="grid-area:ch"><p class="canvas-n">Kênh<small>Channels</small></p><p class="canvas-d">Trang web</p></div>
<div class="canvas-cell" style="grid-area:cs"><p class="canvas-n">Phân khúc khách<small>Customer Segments</small></p><p class="canvas-d">Khách lẻ</p></div>
<div class="canvas-cell" style="grid-area:co"><p class="canvas-n">Cấu trúc chi phí<small>Cost Structure</small></p><p class="canvas-d">Kho, đội xe, quảng cáo</p></div>
<div class="canvas-cell" style="grid-area:re"><p class="canvas-n">Dòng doanh thu<small>Revenue Streams</small></p><p class="canvas-d">100 tỷ mỗi năm, thu ngay</p></div>
</div>
<figcaption><span class="fig-no">Hình <span class="no">2</span></span> Chín ô cho công ty bán lẻ trong ví dụ. Bố cục phỏng theo Business Model Canvas của Strategyzer (CC BY-SA 3.0); nội dung các ô là giả định. Hai ô tiền nằm dưới cùng và chỉ có nghĩa khi đọc cùng bảy ô phía trên.</figcaption>
</figure>

## Một canvas cho một business model

Strategyzer viết: *"Fill it once for one business model, not for the whole company."*[^11] Một tập đoàn có nhiều business model thì cần nhiều canvas. Ví dụ giả định dưới đây cho thấy nguyên tắc này áp vào một công ty bán lẻ muốn bán sỉ cho cửa hàng thế nào. Khách đổi từ người tiêu dùng sang cửa hàng bán lại, và các ô khác đổi theo:

| Ô | Bán lẻ | Bán sỉ cho cửa hàng (ví dụ giả định) |
|---|---|---|
| Khách | người tiêu dùng | cửa hàng điện máy |
| Kênh | trang web | nhân viên gọi điện, báo giá |
| Quan hệ | tự đặt, trả ngay | báo giá theo số lượng |
| Việc chính | giao từng nhà | xe tải theo chuyến |
| Doanh thu | thu ngay | thu sau ba mươi ngày |
| Chi phí | kho, đội xe, quảng cáo | thêm vốn lưu động: ứng tiền hàng trước khi thu |

<figure class="fig" aria-label="Business Model Canvas chín ô cho việc bán sỉ giả định, ô phân khúc khách được tô đỏ.">
<div class="canvas">
<p class="canvas-half" style="grid-area:hl">Thứ cần để phục vụ thị trường</p>
<p class="canvas-half" style="grid-area:hm">Giá trị</p>
<p class="canvas-half" style="grid-area:hr">Thị trường</p>
<div class="canvas-cell" style="grid-area:kp"><p class="canvas-n">Đối tác chính<small>Key Partnerships</small></p><p class="canvas-d">Hãng tủ lạnh</p></div>
<div class="canvas-cell" style="grid-area:ka"><p class="canvas-n">Việc chính<small>Key Activities</small></p><p class="canvas-d">Xe tải 20 chiếc một chuyến</p></div>
<div class="canvas-cell" style="grid-area:kr"><p class="canvas-n">Nguồn lực chính<small>Key Resources</small></p><p class="canvas-d">Kho, xe tải</p></div>
<div class="canvas-cell" style="grid-area:vp"><p class="canvas-n">Giá trị đưa cho khách<small>Value Propositions</small></p><p class="canvas-d">Tủ lạnh giá sỉ, trả sau 30 ngày</p></div>
<div class="canvas-cell" style="grid-area:cr"><p class="canvas-n">Quan hệ khách<small>Customer Relationships</small></p><p class="canvas-d">Báo giá theo số lượng</p></div>
<div class="canvas-cell" style="grid-area:ch"><p class="canvas-n">Kênh<small>Channels</small></p><p class="canvas-d">Nhân viên gọi điện</p></div>
<div class="canvas-cell hit" style="grid-area:cs"><p class="canvas-n">Phân khúc khách<small>Customer Segments</small></p><p class="canvas-d">Cửa hàng điện máy</p></div>
<div class="canvas-cell" style="grid-area:co"><p class="canvas-n">Cấu trúc chi phí<small>Cost Structure</small></p><p class="canvas-d">Tiền hàng bỏ ra trước</p></div>
<div class="canvas-cell" style="grid-area:re"><p class="canvas-n">Dòng doanh thu<small>Revenue Streams</small></p><p class="canvas-d">Thu sau 30 ngày</p></div>
</div>
<figcaption><span class="fig-no">Hình <span class="no">3</span></span> Cùng công ty, canvas thứ hai cho việc bán sỉ. Ô đỏ là ô đổi đầu tiên; các ô còn lại được kiểm lại theo nó. Nội dung là giả định.</figcaption>
</figure>

Theo suy luận của bài, vẽ chung hai cột này vào một canvas sẽ cho ra một tờ mà ô nào cũng có hai nội dung, và hai ô tiền không còn đọc được. Từ ví dụ Compaq, bài này suy ra rằng hai business model trong cùng một công ty thường va nhau ở hình thái vật chất: kênh, đơn vị, cách chấm điểm, quan hệ với bên bán lại. Vẽ tách hai canvas giúp thấy chỗ cần sắp xếp lại tổ chức. Strategyzer còn khuyên coi canvas là một giả thuyết chứ không phải kế hoạch: ghi ngày và phiên bản, vẽ lại khi có bằng chứng mới.[^10] Đây là lời khuyên của một bên thương mại (Strategyzer bán công cụ và khóa học), dù đến từ chính tác giả khung.[^12]

## Value configuration: value chain chỉ là một trong ba kiểu

Luận án mô tả ô Value Configuration bằng phân loại của Stabell và Fjeldstad (1998), vốn dựa trên phân loại công nghệ của Thompson (1967).[^13]

| Kiểu | Logic tạo giá trị | Quan hệ giữa các hoạt động | Ví dụ trong luận án |
|---|---|---|---|
| Value chain (Porter) | biến đầu vào thành sản phẩm | tuần tự | sản xuất |
| Value shop | giải quyết vấn đề riêng của khách | vòng lặp: tìm vấn đề, giải, chọn, thực hiện, đánh giá | tư vấn |
| Value network | kết nối những khách phụ thuộc lẫn nhau | trung gian | ngân hàng, viễn thông |

Hệ quả: nếu chỉ dùng value chain của Porter để đọc mọi doanh nghiệp, ta có nguy cơ bỏ sót logic của value shop và value network, tức là đọc sai chỗ tạo giá trị của doanh nghiệp dịch vụ hay trung gian.[^13] Một số ngành chưa rõ thuộc kiểu nào. Bảo hiểm có phải value network hay không thì luận án không nói. Luận án chỉ nêu ngân hàng và viễn thông, và bài này chưa đọc toàn văn Stabell và Fjeldstad.[^14]

## "Capability" của Osterwalder không phải business capability

Trong ontology, capability là *"the ability to execute a repeatable pattern of actions that is necessary in order to create value for the customer"*.[^3] OMG BACM 1.1 định nghĩa business capability là khả năng tạo ra một kết quả *mà không nói kết quả ấy được tạo ra thế nào*.[^15] "Pattern of actions" là một cách làm, gần với CapabilityBehavior của BACM hơn.[^15] Khi một dự án dùng chữ "capability" từ canvas để nối sang capability map của kiến trúc nghiệp vụ, cần dịch lại, không chép thẳng.

## Chỗ còn phải đọc cẩn thận

- **Định nghĩa không được đồng thuận.** Chính luận án thừa nhận định nghĩa của nó *"may not be shared in detail by all the authors in business model research"*, và tranh luận chiến lược hay business model vẫn còn mở.[^4]
- **Một trang dễ bỏ sót.** Canvas không có ô riêng cho đối thủ hay quy định. Luận án xếp cạnh tranh, pháp lý, xã hội và thay đổi công nghệ vào áp lực bên ngoài, nằm ngoài mô hình.[^6] Vì vậy với ngành bị quản lý chặt, cần phân tích riêng các áp lực ấy. Đây là suy luận của bài, chưa có nguồn phê bình nào được kiểm chứng.[^16]
- **Hướng dẫn sử dụng đến từ một bên bán hàng.** Các câu "một canvas cho một mô hình", "coi canvas là giả thuyết" lấy từ trang của Strategyzer. Chúng hợp lý và đến từ tác giả khung, nhưng vẫn là cách trình bày của một bên thương mại.[^12]
- **Hai ánh xạ phần tử sang ô là suy luận** (Value Configuration → Key Activities, Capability → Key Resources).[^7]

## Áp dụng: trước khi thêm một nhóm khách

Các bước dưới đây ghép luận án và hướng dẫn của Strategyzer. Ngưỡng ở bước 3, cùng bước 4 và 5, là suy luận của bài.

1. **Vẽ canvas cho business model đang chạy**, ghi ngày. Một canvas, một mô hình.
2. **Thay ô khách bằng nhóm khách mới** và đi lần lượt sang kênh, quan hệ, việc chính, nguồn lực, đối tác, chi phí, doanh thu. Ghi lại từng ô phải đổi.
3. **Nếu nhiều ô phải đổi, vẽ canvas thứ hai** thay vì sửa canvas cũ. Bài này dùng ngưỡng ba ô để buộc nhóm thảo luận; đó là quy ước thực hành, không phải chuẩn của Osterwalder hay Strategyzer.
4. **Tìm chỗ hai canvas va nhau ở hình thái vật chất**: cùng một khách, cùng một kho, cùng một đội bán hàng được chấm bằng hai thước đo khác nhau. Đó là bài học Compaq.
5. **Với mỗi đề xuất công nghệ, hỏi hai câu của Osterwalder theo thứ tự bài đề nghị** (luận án không đặt thứ tự): mô hình mới cần gì để chạy được, rồi mới đến công nghệ cải thiện nó ở đâu. Đề xuất không chỉ ra được nó phục vụ ô nào, của canvas nào, là đề xuất cần hỏi lại giá trị.

Video đi kèm (tập 03 của Boring But Correct) kể cùng chuyện bằng một công ty bán lẻ giả định muốn bán sỉ cho cửa hàng. Bài này là phần nguồn và lập luận đứng sau nó.

[^1]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), trang bìa (HEC Lausanne, giáo sư hướng dẫn Y. Pigneur); [Strategyzer](https://www.strategyzer.com/library/the-business-model-canvas): canvas đến từ *Business Model Generation*.
[^2]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §2.2: định nghĩa business model và business logic.
[^3]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), Table 16: bốn pillar, chín element, định nghĩa capability.
[^4]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §2.2–2.3.1 và Figure 6: ba lớp; dịch và đánh giá; tổ chức là hình thái vật chất; ví dụ Compaq; các quan điểm "differ widely"; định nghĩa "may not be shared in detail".
[^5]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §2.2: business model khác business process model.
[^6]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §2.3 và Figure 11: tam giác chiến lược, tổ chức, ICT; áp lực bên ngoài; hai câu hỏi; tác động trực tiếp và gián tiếp.
[^7]: Verified · so [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf) Table 16 với canvas của [Strategyzer](https://www.strategyzer.com/library/the-business-model-canvas): sáu trên chín tên khác nhau. Hai ánh xạ Value Configuration → Key Activities và Capability → Key Resources là suy luận, độ tin cậy trung bình.
[^8]: Verified · canvas PDF của Strategyzer (bản v2, v3, xem qua kết quả tìm kiếm, chưa mở trực tiếp): ô "Cost Structure". Độ tin cậy trung bình đến cao.
[^9]: Verified · dòng giấy phép CC BY-SA 3.0 in trên canvas PDF của Strategyzer (xem qua kết quả tìm kiếm, hai bản, chưa mở trực tiếp). Độ tin cậy trung bình đến cao.
[^10]: Verified · [Strategyzer, The Business Model Canvas](https://www.strategyzer.com/library/the-business-model-canvas): bên phải là thị trường, bên trái là thứ cần để phục vụ; coi canvas là giả thuyết, ghi ngày và phiên bản.
[^11]: Verified · [Strategyzer, The Business Model Canvas](https://www.strategyzer.com/library/the-business-model-canvas): "Fill it once for one business model, not for the whole company."
[^12]: Verified · [Strategyzer](https://www.strategyzer.com/library/the-business-model-canvas) là tổ chức thương mại bán công cụ và tài liệu trả phí; các hướng dẫn sử dụng là cách trình bày của vendor.
[^13]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), §4.4.3; Stabell, C. B. & Fjeldstad, Ø. D. (1998), "Configuring value for competitive advantage: on chains, shops, and networks", *Strategic Management Journal* 19(5), 413–437, chỉ đọc phần tóm tắt.
[^14]: OPEN · Bảo hiểm có phải value network (mediating technology) hay không: luận án chỉ nêu ngân hàng và viễn thông; chưa đọc toàn văn Stabell & Fjeldstad hay Thompson (1967).
[^15]: Verified · [OMG BACM 1.1](https://www.omg.org/spec/BACM/1.1/PDF), §7.3.2.7: capability là "the ability a business has to produce an Outcome without specifying how that Outcome is produced"; CapabilityBehavior. So sánh với Table 16 của Osterwalder là của người học, độ tin cậy trung bình.
[^16]: OPEN · Chưa có nguồn phê bình nào được kiểm chứng về việc canvas bỏ sót đối thủ, rủi ro và quy định; đây là suy luận từ cách luận án xếp áp lực bên ngoài ra ngoài mô hình.
