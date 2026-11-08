---
title: "Business capability và value stream: định nghĩa gốc, chỗ lệch, và cách dùng"
description: "Năng lực kinh doanh và dòng giá trị theo BIZBOK, OMG BACM 1.1 và Homann 2006: định nghĩa gốc, chỗ các nguồn lệch nhau, và cách dùng khi scope dự án."
station: 1
published: 2026-11-08
verified: 2026-11-04
image: /og/ep02.jpg
video: {id: JJAdjHwJATQ, duration: "5:21", episode: 2}
sources:
  - title: "Business Architecture Guild (2026). BIZBOK Guide v15, Part 1: Introduction"
    url: https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf
  - title: "Business Architecture Guild (2021). BIZBOK Guide v10, Appendix A: Glossary"
    url: https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok_10/glossary_v10_final.pdf
  - title: "Object Management Group (2026). Business Architecture Core Metamodel (BACM) 1.1, formal/26-09-01"
    url: https://www.omg.org/spec/BACM/1.1/PDF
  - title: "Homann, U. (2006). A Business-Oriented Foundation for Service Orientation. Microsoft"
    url: https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/homann_article_on_capabiliti.pdf
  - title: "Lean Enterprise Institute. Lexicon: Value Stream"
    url: https://www.lean.org/lexicon-terms/value-stream/
  - title: "Osterwalder, A. (2004). The Business Model Ontology. Luận án tiến sĩ, HEC Lausanne"
    url: https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf
---

Khi đội công nghệ chỉ nhận thêm được một dự án mà có bốn bên cùng xin, câu hỏi thường được đặt là "dự án nào hay nhất". Câu hỏi ấy không có thước đo chung: ứng dụng điện thoại được đo bằng doanh thu dự kiến, phần mềm xếp tuyến bằng số cây số xe chạy bớt được, thay hệ thống kho bằng độ mới của công nghệ. Kiến trúc nghiệp vụ (business architecture) cho một bản đồ chung để đặt các dự án ấy lên: những việc doanh nghiệp phải làm được, đặt dưới con đường mà giá trị đi tới khách hàng. Bài này đọc lại hai khái niệm ấy từ nguồn gốc, gồm business capability (năng lực kinh doanh) và value stream (dòng giá trị), và chỉ ra chỗ các nguồn còn lệch nhau.

**Trả lời ngắn:** capability là điều doanh nghiệp làm được, định nghĩa không nói ai làm hay làm bằng gì. Value stream là chuỗi giai đoạn tích lũy giá trị tới một người nhận. Hai thứ không có quan hệ cha con; chúng nối chéo nhau (map chéo): capability *hỗ trợ* các giai đoạn của value stream. Process, ứng dụng và cách tổ chức là lớp hiện thực; các nguồn lập luận rằng process và tổ chức kém ổn định hơn capability. BIZBOK đề nghị scope mỗi initiative theo các phần tử của kiến trúc nghiệp vụ mà nó chạm tới. Từ đó bài này đề xuất (suy luận, không phải của nguồn): đặt bốn dự án khác loại lên cùng một bản đồ để so.

## Kiến trúc nghiệp vụ: bốn view lõi và một vành ngoài đổi nhanh hơn

Định nghĩa được nhiều hiệp hội cùng thông qua (FEAPO, 2017) mô tả kiến trúc nghiệp vụ là một view đa chiều về capability, việc chuyển giao giá trị đầu cuối, thông tin và cơ cấu tổ chức, cùng quan hệ của chúng với chiến lược, sản phẩm, chính sách, initiative và stakeholder.[^1] BIZBOK v15 tách các domain ấy thành hai vòng. Vòng lõi gồm capability, value stream, organization và information, được coi là tương đối ổn định. Vành ngoài gồm stakeholder, strategy, policy, product, initiative và metric, thay đổi nhanh hơn.[^2]

<figure class="fig fig-day" aria-label="Hai vòng domain của kiến trúc nghiệp vụ: vành ngoài đổi nhanh hơn, vòng lõi tương đối ổn định.">
<ol class="tower">
<li>Vành ngoài: đổi nhanh hơn<small>stakeholder, strategy, policy, product, initiative, metric</small></li>
<li>Vòng lõi: tương đối ổn định<small>capability, value stream, organization, information</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Các domain của kiến trúc nghiệp vụ theo BIZBOK v15. Độ ổn định ở đây là lập luận của nguồn, không phải số đo.</figcaption>
</figure>

Lập luận về độ ổn định dựa trên một ví dụ, không dựa trên dữ liệu đo. BIZBOK lấy một hãng bảo hiểm trăm năm tuổi: hãng ấy vẫn có cùng các capability (Customer Management, Insurance Policy Management, Claims Management), cùng value stream *Settle Claim*, cùng loại thông tin (Customer, Policy, Claim). Thứ đổi là cách tự động hóa, và các *instance* của sản phẩm, stakeholder, chiến lược.[^2] Homann (2006) nói cùng ý: capability "relatively stable", còn cách hiện thực nó "far less stable".[^3] Đây là lập luận của các nguồn, không phải kết quả thực nghiệm. Bài này chưa tìm thấy nghiên cứu nào đo độ ổn định của capability map qua thời gian.[^4]

BIZBOK cũng tách kiến trúc nghiệp vụ khỏi operating model. Operating model tập trung vào process, con người và công nghệ. BIZBOK lập luận rằng nó giúp tối ưu chi phí và hiệu suất, nhưng không thay được góc nhìn dựa trên giá trị và năng lực khi triển khai chiến lược và chọn đầu tư.[^2]

## Năng lực: "cái gì", không phải "thế nào"

Ba nguồn chính dùng ba câu chữ khác nhau nhưng chung một lõi: capability nói doanh nghiệp tạo được kết quả gì, không nói ai làm hay làm bằng công nghệ nào.

| Nguồn | Định nghĩa | Điểm nhấn |
|---|---|---|
| Homann (2006), Microsoft | *"A particular ability or capacity that a business may possess or exchange to achieve a specific purpose or outcome"* | Gói gọn con người, process, công nghệ và thông tin; "pay employees" vẫn là một capability dù thuê ngoài hay tự động hóa[^3] |
| BIZBOK Glossary | Dùng lại định nghĩa của Homann[^3] | Thêm *level* (độ sâu phân rã) và *tier*: Strategic, Core/Customer Facing, Supporting[^5] |
| OMG BACM 1.1 (2026) | *"the ability a business has to produce an Outcome without specifying how that Outcome is produced"* | Capability được xác định qua Outcome; tách riêng CapabilityBehavior (biến thể hành vi) và CapabilityImplementation (performer, resource)[^6] |

Điều định nghĩa *không* nói quan trọng không kém điều nó nói. Capability không nói ai làm, phần mềm nào làm, hay làm theo quy trình nào. Vì capability được định nghĩa độc lập với người làm và cách làm, nó vẫn còn trên bản đồ khi công ty thuê ngoài hay tự động hóa việc thực hiện. Ví dụ "pay employees" của Homann vẫn là một capability dù việc trả lương được thuê ngoài.[^3]

BACM 1.1 biến định nghĩa này thành ràng buộc mô hình hóa. Capability phân rã theo một cây duy nhất và không được *specialize*. Muốn biểu diễn biến thể thì dùng CapabilityBehavior, không tạo capability con. Ràng buộc này có hệ quả phân tích: nếu mọi biến thể của một capability đều kém, BACM coi đó là dấu hiệu doanh nghiệp có vấn đề mang tính hệ thống ở chính capability ấy.[^6]

Quy ước đặt tên không thống nhất giữa các nguồn. Homann dùng cụm động từ ("pay employees", "ship product"), ví dụ của BIZBOK dùng cụm danh từ ("Claims Management"), còn value stream của BIZBOK lại dùng động từ ("Settle Claim"). Phần công khai của BIZBOK không nêu quy tắc đặt tên. Phần đó (§2.2 Capability Mapping) chỉ dành cho hội viên.[^2]

## Value stream và value chain: các từ gần nhau, nghĩa khác nhau

Người làm kiến trúc, người làm Lean và người làm chiến lược đều nói "value stream" hay "value chain", nhưng không nói cùng một thứ.

| Khái niệm | Đơn vị phân tích | Câu hỏi trả lời |
|---|---|---|
| Value stream của kiến trúc nghiệp vụ | Các giai đoạn tích lũy giá trị tới một stakeholder | Người nhận được giá trị gì, qua những giai đoạn nào?[^5] |
| Lean value stream | Mọi hành động, kể cả hành động *không* tạo giá trị | Lãng phí nằm ở đâu trong dòng chảy?[^7] |
| Value chain của Porter | Các hoạt động có ý nghĩa chiến lược của một công ty | Lợi thế chi phí hay khác biệt đến từ đâu?[^5] |
| Value chain của Wardley (đối chiếu ở mức khái niệm) | Chuỗi thành phần phụ thuộc, neo vào nhu cầu người dùng | Thành phần nào tự xây, thành phần nào mua?[^4] |

BIZBOK định nghĩa value stream là *"an end-to-end collection of activities that create a result for a customer"*, trong đó customer có thể là khách cuối hoặc người dùng nội bộ. Định nghĩa này lấy lại từ Whittle và Myrick (2005).[^5] BIZBOK tự xếp Porter value chain, value network và Lean value stream vào nhóm "alternative value mapping approaches".[^2] Nghĩa là trong khung của BIZBOK, chúng là những công cụ khác nhau, không phải từ đồng nghĩa. Dùng Lean value stream mapping cho mục đích của BIZBOK thường kéo bản đồ xuống mức từng hành động, trong khi BIZBOK chỉ cần các giai đoạn có tên. Đây là suy luận của bài từ hai định nghĩa.

### Value stream không phải process

BACM nối hai mô hình bằng quan hệ *implements*: một Process hay Activity có thể hiện thực cả ValueStream, hoặc hiện thực từng giai đoạn của nó. Với cùng một value stream, BACM không cho làm cả hai mức cùng lúc. Hai mô hình gặp nhau qua Outcome: trạng thái của một business object mà capability tạo ra hoặc cần.[^6] Customer journey cũng không phải process. Theo BACM, journey là góc nhìn hành vi khách hàng do doanh nghiệp dựng ra, và không có nhánh thay thế.[^6]

### Chỗ hai chuẩn lệch nhau: thứ tự giai đoạn

BIZBOK định nghĩa mỗi giai đoạn có tên, entrance criteria, exit criteria và stakeholder tham gia. Có điều kiện vào và ra thì dễ được đọc là có trình tự.[^5] BACM 1.1 lại viết rằng thứ tự các giai đoạn có *"no strong semantic interpretation"*. Ví dụ của BACM là y tế: triage, chẩn đoán, điều trị, phòng ngừa khó xếp thành một thứ tự cố định, còn sản xuất thì có thứ tự tự nhiên.[^8] Khi vẽ, hệ quả là: nếu value stream của bạn thật sự tuần tự, như đơn hàng đi qua đặt mua, xác nhận, chuẩn bị, giao, thì entrance và exit criteria giúp tìm chỗ đơn bị kẹt. Nếu không tuần tự, đừng ép nó thành một đường thẳng chỉ vì công cụ vẽ như vậy.

## Map chéo: capability hỗ trợ giai đoạn, ứng dụng tự động hóa capability

BACM viết thẳng: *"Capabilities support ValueStreamStages"*.[^9] Bản đồ dưới đây dùng đường đi của một đơn hàng bán lẻ. Đây là ví dụ do bài này dựng, không trích từ nguồn.

<figure class="fig fig-day" aria-label="Bốn giai đoạn của đơn hàng: đặt mua, xác nhận, chuẩn bị, giao. Dưới mỗi giai đoạn là năng lực hỗ trợ nó: nhận đơn, biết còn bao nhiêu hàng, lấy hàng và đóng gói, chở hàng tới nhà khách. Dưới năng lực biết còn bao nhiêu hàng có hai ứng dụng cùng giữ con số tồn kho.">
<ol class="tower">
<li>Value stream: đặt mua → xác nhận → chuẩn bị → giao<small>các giai đoạn tích lũy giá trị tới khách</small></li>
<li>Capability: nhận đơn · biết còn bao nhiêu hàng · lấy hàng, đóng gói · chở hàng tới nhà<small>cái gì, ổn định</small></li>
<li class="hit">Ứng dụng: hệ thống kho và hệ thống bán hàng cùng giữ con số tồn kho<small>hai ứng dụng chồng nhau trên một capability</small></li>
<li>Process, tổ chức<small>thế nào, kém ổn định hơn</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">2</span></span> Map chéo cho một đơn hàng. Capability đứng dưới giai đoạn nó hỗ trợ; ứng dụng và process là phần hiện thực. Dòng đỏ là chỗ hai ứng dụng cùng tự động hóa một capability.</figcaption>
</figure>

Ba điểm của map chéo đáng giữ khi vẽ:

- **Trong BACM, capability là đơn vị dùng lại, giai đoạn thì không.** Một capability như Claims Management có thể hỗ trợ nhiều giai đoạn, trong nhiều value stream. Ngược lại, BACM không cho hai value stream dùng chung một giai đoạn. Nếu hai giai đoạn giống nhau, thể hiện điều đó bằng cách cho chúng cùng một tập capability hỗ trợ.[^9]
- **Công nghệ xuất hiện ở lớp hiện thực, không ở lớp capability.** Performer trong BACM có thể là OrgUnit (con người) hoặc System (hệ thống IT, robot).[^6] Từ đó bài này suy ra: câu "chúng ta có capability CRM" là nhầm lớp, vì theo định nghĩa application của BIZBOK, một hệ CRM là ứng dụng hiện thực một số capability.[^5]
- **Ứng dụng có ranh giới theo capability.** BIZBOK định nghĩa application là *"a collection of software assets that automates and enables a bounded set of capabilities"*.[^5] Từ định nghĩa ấy, bài này rút ra một phép thử: khi hai ứng dụng cùng tự động hóa một capability, như hệ thống kho và hệ thống bán hàng cùng giữ con số tồn kho, đó là dấu hiệu cần kiểm tra dư thừa trong danh mục ứng dụng, và rủi ro hai con số lệch nhau.

## Từ bản đồ đến danh mục dự án

Chuỗi Strategy Execution Framework của BIZBOK (Figure 1.5) đi như sau. Chiến lược được đánh giá tác động lên value stream, capability, information, business unit và product. Từ đó dựng kiến trúc giải pháp, trong đó có "business-driven IT architecture", rồi kế hoạch initiative, rồi triển khai. Nguyên tắc đi kèm: *"initiatives are defined by the scope of specific aspects of the business architecture"*.[^10]

Câu ấy rộng hơn cách hiểu thường gặp "dự án lấp capability gap". BIZBOK neo initiative vào *các phần tử* của kiến trúc nghiệp vụ: value stream, capability, information, business unit, product. Từ nguyên tắc ấy, bài này hiểu capability gap chỉ là một trong các cách scope initiative.[^10] Với bốn dự án ở đầu bài, scope theo kiến trúc nghiệp vụ cho ra:

| Dự án | Giai đoạn chạm tới | Capability chạm tới | Capability ấy đang yếu? |
|---|---|---|---|
| Ứng dụng điện thoại | Đặt mua | Nhận đơn | Không |
| Phần mềm xếp tuyến | Giao | Chở hàng tới nhà | Không |
| Thay hệ thống kho | Xác nhận, chuẩn bị | Biết còn bao nhiêu hàng | Có |
| Cho trang web đọc số của hệ thống kho | Xác nhận | Biết còn bao nhiêu hàng | Có |

Cột cuối là phán đoán của người phân tích dựa trên dữ liệu vận hành (ví dụ: đơn hủy lộ ra ở giai đoạn chuẩn bị nhưng lời hứa sai được đưa ra ở giai đoạn xác nhận). Nguồn không đưa thang chấm sẵn. "Capability heat map", kiểu tô màu capability theo mức yếu mạnh, không xuất hiện trong phần công khai của BIZBOK hay trong BACM. Bài này để nó ở mức chưa kiểm chứng.[^11]

## Khái niệm hay bị nhầm

**Capability của Osterwalder và capability của kiến trúc nghiệp vụ.** Trong ontology business model (2004), capability là *"the ability to execute a repeatable pattern of actions that is necessary in order to create value for the customer"*, gắn với resource.[^12] Đọc theo BACM, "pattern of actions" là *cách làm*, gần với CapabilityBehavior hơn là với business capability, vốn tách "cái gì" khỏi "thế nào". Phép so sánh này là của người học, dựa trên hai định nghĩa gốc.[^6] Hai định nghĩa gần nhau nhưng không đồng nhất.

**Capability tier và DDD subdomain.** Tier Strategic / Core / Supporting của capability map và Core / Supporting / Generic subdomain của Domain-Driven Design nghe giống nhau. Nhưng tier phân loại theo tác động kinh doanh trên bản đồ toàn doanh nghiệp, còn subdomain là lăng kính thiết kế phần mềm. Ánh xạ một-một giữa hai bên là suy luận chưa được nguồn nào kiểm chứng.[^4]

**Business architecture và business model.** BIZBOK không xếp business model vào các domain của mình mà coi kiến trúc nghiệp vụ là thứ "business model enabling", với một mục riêng về quan hệ hai bên (§3.3). TOGAF lại xếp hướng dẫn Business Models vào bộ Business Architecture. Hai khung xếp khác nhau. Đây là điểm còn tranh luận, không có cách xếp đúng duy nhất.[^13]

## Chỗ còn phải đọc cẩn thận

- **BIZBOK và BACM không phải hai nguồn độc lập.** Business Architecture Guild là đồng tác giả của BACM 1.1. Khi hai tài liệu nói giống nhau, đó là một trường phái nói hai lần, không phải hai bằng chứng.[^6]
- **Độ ổn định của capability là lập luận.** Cả Homann lẫn BIZBOK đều lập luận bằng ví dụ. Chưa có dữ liệu thực nghiệm trong các nguồn đã đọc.[^4]
- **Bản đồ có thể thành sản phẩm tự thân.** BIZBOK tự cảnh báo bằng nguyên tắc *"Business architecture is not about the deliverables"*. Bản đồ chỉ có giá trị khi được dùng để scope initiative hay phân tích tác động.[^2]
- **Trừu tượng giúp ổn định nhưng khó hành động.** Capability không chứa "thế nào", nên muốn quyết định vẫn phải xuống process, ứng dụng và con người. BACM giải bằng CapabilityBehavior và CapabilityImplementation, và chính spec thừa nhận cách này làm mô hình phức tạp hơn.[^6]
- **Phần lớn BIZBOK chỉ dành cho hội viên.** Bài này chỉ dựa trên Part 1 và Glossary công khai. Quy tắc đặt tên, cách lập map chi tiết (§2.2) và phụ lục B.6 chỉ được biết qua mục lục.[^2]

## Áp dụng: đặt một danh sách dự án lên bản đồ

Phương pháp dưới đây là cách bài này ghép các nguồn lại. Bước 1–4 dựa trên định nghĩa của nguồn, nhưng thứ tự và các điều kiện là của bài; bước 5–6 là suy luận của bài.

1. **Chọn một value stream đầu cuối** cho một người nhận cụ thể (khách mua hàng, khách đòi bồi thường), đặt tên theo kết quả người ấy nhận được, như ví dụ "Settle Claim" của BIZBOK. Phần công khai của BIZBOK không có quy tắc đặt tên.
2. **Chia giai đoạn.** Mỗi giai đoạn ghi entrance và exit criteria, nếu value stream của bạn thật sự tuần tự (xem chỗ BIZBOK và BACM lệch nhau ở trên).
3. **Viết capability dưới mỗi giai đoạn**, chỉ "cái gì": không tên phòng, không tên phần mềm. Capability nào hỗ trợ nhiều giai đoạn thì vẽ một lần, nối nhiều đường.
4. **Ghi ứng dụng dưới capability** và tìm chỗ hai ứng dụng cùng tự động hóa một capability.
5. **Đặt dữ liệu vận hành lên bản đồ**: đơn hủy, chờ, lỗi lộ ra ở giai đoạn nào, và capability nào thực sự gây ra nó. Chỗ lộ ra và chỗ gây ra thường khác nhau.
6. **Scope từng dự án**: giai đoạn nào, capability nào, ứng dụng nào. Dự án không chỉ ra được capability nào sẽ mạnh lên là dự án cần hỏi lại giá trị. Dự án chạm một capability không yếu vẫn có thể đáng làm, nhưng phải trả lời được: làm nó lúc này có đổ thêm việc vào chỗ đang yếu không?

Video đi kèm (tập 02 của Boring But Correct) kể cùng chuyện bằng một công ty bán lẻ giả định. Bài này là phần nguồn và lập luận đứng sau nó.

[^1]: Verified · [BIZBOK Guide v15, Part 1](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf): trích định nghĩa kiến trúc nghiệp vụ FEAPO thông qua ngày 2017-01-14.
[^2]: Verified · [BIZBOK Guide v15, Part 1](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf), Figure 1.1 (bốn domain lõi), Figure 1.3 (so với operating model), ví dụ hãng bảo hiểm, nguyên tắc "not about the deliverables", mục lục §2.2, §3.3 và Appendix B.6.
[^3]: Verified · [Homann (2006)](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/homann_article_on_capabiliti.pdf): định nghĩa capability; capability "relatively stable", cách hiện thực "far less stable"; ví dụ "pay employees".
[^4]: OPEN · Chưa tìm thấy nghiên cứu thực nghiệm đo độ ổn định của capability map. Ánh xạ capability tier sang DDD subdomain là suy luận chưa kiểm chứng. Wardley value chain chỉ được đối chiếu ở mức khái niệm, chưa qua nguồn gốc của Wardley.
[^5]: Verified · [BIZBOK Guide v10, Glossary](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok_10/glossary_v10_final.pdf): mục Business Capability, Capability Map (level, tier), Value Stream (theo Whittle & Myrick 2005), Value Stream Stage, Application.
[^6]: Verified · [OMG BACM 1.1 (2026)](https://www.omg.org/spec/BACM/1.1/PDF), §7.1.1, §7.1.4, §7.3.2.7: capability định nghĩa qua Outcome; cây phân rã duy nhất; CapabilityBehavior, CapabilityImplementation; performer là OrgUnit hoặc System; quan hệ implements; journey; Business Architecture Guild là đồng tác giả; spec thừa nhận "more complex".
[^7]: Verified · [Lean Enterprise Institute, Lexicon: Value Stream](https://www.lean.org/lexicon-terms/value-stream/): mọi hành động, có tạo giá trị hay không, từ ý tưởng tới ra mắt hoặc từ đơn hàng tới giao hàng.
[^8]: Có tranh luận · [BIZBOK Glossary](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok_10/glossary_v10_final.pdf) (stage có entrance/exit criteria) đối với [BACM 1.1](https://www.omg.org/spec/BACM/1.1/PDF) §7.3.3.14 ("no strong semantic interpretation"). Hai nguồn khác nhau là điều đã kiểm; nguồn nào đúng thì chưa có kết luận.
[^9]: Verified · [OMG BACM 1.1](https://www.omg.org/spec/BACM/1.1/PDF), §7.1.1 ("Capabilities support ValueStreamStages"); giai đoạn không dùng chung giữa các value stream (cùng spec, chưa ghi số mục).
[^10]: Verified · [BIZBOK Guide v15, Part 1](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf), Figure 1.5 (Strategy Execution Framework) và nguyên tắc về scope của initiative.
[^11]: OPEN · "Capability heat map" không thấy trong BIZBOK Part 1, Glossary hay BACM 1.1; chưa xác định được nó có phải kỹ thuật chuẩn của BIZBOK hay không.
[^12]: Verified · [Osterwalder (2004)](https://www.csi.im/pub/BMcanvas/2004-Osterwalder_PhD_BM_Ontology.pdf), Table 16; so với [BACM 1.1](https://www.omg.org/spec/BACM/1.1/PDF) §7.3.2.7. Mức tin cậy trung bình: so sánh là của người học, dựa trên hai định nghĩa gốc.
[^13]: Có tranh luận · [BIZBOK Guide v15, Part 1](https://cdn.ymaws.com/www.businessarchitectureguild.org/resource/resmgr/bizbok15/BIZBOKv15_introduction.pdf), Figure 1.1, 1.3 và mục lục §3.3; vị trí của business model trong TOGAF lấy từ mô tả nhà xuất bản của bộ Business Architecture.
