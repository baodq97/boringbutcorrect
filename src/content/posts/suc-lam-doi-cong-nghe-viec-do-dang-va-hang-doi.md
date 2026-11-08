---
title: "Đội công nghệ làm được bao nhiêu việc: Little's Law, Kingman và WIP limit"
description: "Capacity, capability, Little's Law (1961), công thức Kingman và Kanban Guide v2025.5: đo sức làm của đội công nghệ đúng cách, và giới hạn của từng công cụ."
station: 1
published: 2026-11-07
verified: 2026-11-04
sources:
  - title: "Little, J. D. C. (1961). A Proof for the Queuing Formula: L = λW. Operations Research 9(3):383–387"
    url: https://ideas.repec.org/a/inm/oropre/v9y1961i3p383-387.html
  - title: "Little, J. D. C. (2011). Little's Law as Viewed on Its 50th Anniversary. Operations Research 59(3):536–549"
    url: https://www.informs.org/content/download/255808/2414681/file/little_paper.pdf
  - title: "Kingman, J. F. C. (1961). The single server queue in heavy traffic. Math. Proc. Cambridge Philos. Soc. 57(4):902–904"
    url: https://doi.org/10.1017/S0305004100036094
  - title: "Vacanti, D., Coleman, J. et al. The Kanban Guide (v2025.5)"
    url: https://kanbanguides.org/the-kanban-guide/
  - title: "PMI (2017). The Standard for Portfolio Management, 4th ed., chương 5"
    url: https://www.oreilly.com/library/view/the-standard-for/9781628253962/chapter05.xhtml
  - title: "ISO 21504:2022. Project, programme and portfolio management — Guidance on portfolio management"
    url: https://www.iso.org/standard/82867.html
  - title: "ISO/IEC 20000-1:2018. Service management system requirements"
    url: https://www.iso.org/standard/70636.html
---

Đội công nghệ đang dở dang mười hai việc và mỗi quý xong bốn việc. Một việc nhỏ, từ lúc bắt đầu tới lúc xong, mất ba quý. Hội đồng quản trị muốn có một ứng dụng điện thoại gồm ba việc ngay trong năm tới. Giám đốc kinh doanh đề nghị xếp việc cho đội bận kín và thuê thêm bốn lập trình viên. Đây là ví dụ giả định đi kèm bài.[^0]

Bài này hỏi: "sức làm" của một đội công nghệ đo bằng gì; những công cụ nào trả lời câu "làm kịp không"; mỗi công cụ đúng trong điều kiện nào và sai ở đâu.

**Trả lời ngắn:** doc nguồn của bài chia câu hỏi về sức làm thành ba tầng.[^15]
- *Portfolio* hỏi tổ chức có đủ người, kỹ năng và tiền cho tập việc đã chọn không. Chuẩn neo là PMI và ISO 21504.[^7][^10]
- *Flow* hỏi nên để bao nhiêu việc dở dang cùng lúc. Nền là hai kết quả toán học năm 1961, Little và Kingman, cộng với Kanban Guide.[^1][^3][^6]
- *Service capacity* hỏi hệ thống đang chạy có đủ sức cho nhu cầu không. Chuẩn neo là ISO/IEC 20000-1.[^11]

Hai hệ quả quan trọng nhất. Thứ nhất, khi việc tới lúc nhiều lúc ít, mức bận càng gần trọn thì thời gian chờ càng tăng vọt, nên bận kín không phải là thước đo hiệu quả.[^3][^15] Thứ hai, sức làm bị giới hạn bởi kỹ năng hiếm nhất mà nhiều việc cùng cần, không phải bởi tổng số người. Ý thứ hai là phần tổng hợp thực hành của doc, không phải trích từ chuẩn.[^14]

## Ba tầng, ba câu hỏi

Ba tầng dưới đây là cách doc nguồn sắp xếp, không phải cấu trúc của một chuẩn duy nhất.[^15] Mỗi tầng có đơn vị đo riêng. Bài này cho rằng dùng lẫn đơn vị giữa các tầng dễ làm kế hoạch đánh giá sai khả năng giao việc.[^18]

| Tầng | Câu hỏi | Nguồn neo | Đơn vị đo | Bản chất nguồn |
|---|---|---|---|---|
| Portfolio | Đủ người, kỹ năng, tiền, tài sản cho tập việc đã chọn? Thiếu capability nào? | PMI SPfM 4th ed. (2017)[^7]; ISO 21504:2022[^10] | FTE theo kỹ năng, ngân sách, thời gian[^15] | Chuẩn của hiệp hội nghề (bản gốc có phí) và của ISO; mục tiêu domain của PMI chỉ đọc được qua nguồn thứ cấp[^8] |
| Flow | Bao nhiêu việc nên dở dang cùng lúc? Việc chờ bao lâu? | Little (1961)[^1]; Kingman (1961)[^3]; Kanban Guide v2025.5[^6] | WIP, throughput, cycle time, work item age[^6] | Hai kết quả toán học đã đăng tạp chí; một hướng dẫn của cộng đồng thực hành |
| Service capacity | Dịch vụ đang chạy đủ sức cho nhu cầu hiện tại và dự báo? | ISO/IEC 20000-1:2018 §8.4[^11] | Tài nguyên dịch vụ, mức sử dụng, dự báo[^15] | Chuẩn của ISO/IEC; nội dung chi tiết §8.4.3 còn OPEN[^13] |

Doc nguồn chỉ ra một lỗi phổ biến. Nhiều tổ chức dừng ở tầng một: họ duyệt danh sách việc theo ngân sách, rồi bắt đầu tất cả cùng lúc.[^20] Tầng hai cho thấy cách làm ấy kéo dài thời gian của mọi việc. Tầng ba thì nối ngược lên tầng một. Mỗi việc đưa vào vận hành làm tăng phần sức phải giữ cho hệ thống chạy, và thu hẹp phần sức cho việc mới của các năm sau.[^22]

## Capacity khác capability

Doc nguồn định nghĩa hai từ này tách bạch.[^15]
- *Capacity* là **lượng** nguồn lực sẵn có trong một khoảng thời gian, ví dụ 40 FTE-tháng mỗi quý.
- *Capability*, theo nghĩa dùng ở đây, là **loại** năng lực hay kỹ năng.

Từ định nghĩa, doc rút ra: thiếu capability thì không bù được bằng thêm capacity chung.[^15] Doc cũng lưu ý rằng "business capability" trong kiến trúc doanh nghiệp là một nghĩa khác của cùng chữ.[^15]

PMI đặt cả hai vào một performance domain tên *Capacity and Capability Management*. Đây là một trong sáu domain của *The Standard for Portfolio Management* bản 4 (11/2017). Năm domain còn lại là Strategic Management, Governance, Stakeholder Management, Value Management và Risk Management.[^7] Theo nguồn thứ cấp, mục tiêu của domain là bảo đảm nhu cầu capacity và capability của portfolio khớp với mục tiêu và được năng lực thật của tổ chức đáp ứng.[^8] Bản 5 đang qua giai đoạn lấy ý kiến: bản nháp mở góp ý tháng 5/2026, ANSI public review từ 24/07 tới 07/09/2026.[^9] Tại ngày doc được kiểm (2026-11-04), bản hiện hành vẫn là bản 4.[^9]

ISO 21504:2022 là ấn bản 2, thay bản 2015 và căn chỉnh với ISO 21500:2021 và ISO 21502:2020. Chuẩn này hướng dẫn nguyên tắc quản lý portfolio dự án và chương trình.[^10] Mục lục có tiêu chí chọn và xếp hạng thành phần portfolio, và có báo cáo hiệu quả portfolio.[^20]

Bốn thực hành dưới đây là **tổng hợp của doc**, suy ra từ Little, Kingman và Kanban Guide. Không chuẩn nào ở trên viết chúng thành yêu cầu.[^14]

1. Đo nguồn cung theo kỹ năng, không theo đầu người. Trừ phần giữ hệ thống chạy (run, BAU), nghỉ phép và việc chung (overhead) để ra phần sức dành cho thay đổi.
2. So cầu với cung trước khi duyệt, không phải sau. Một việc đã có tiền nhưng chưa có sức làm thì chưa được bắt đầu.
3. Nút cổ chai quyết định tổng thể. Sức làm của portfolio bằng sức của kỹ năng khan hiếm nhất mà nhiều việc cùng cần, không phải tổng FTE.
4. Khoảng trống capability là đầu vào cho quyết định nguồn lực. Có ba đường: tuyển hoặc đào tạo (chậm), thuê ngoài (mang theo rủi ro bên thứ ba), hoặc cắt bớt nhu cầu.

Độ tin cậy của nhóm thực hành này là trung bình.[^14] Doc xếp nhóm này ở mức tin cậy trung bình vì chúng được suy ra từ Little, Kingman và Kanban Guide, không được chuẩn nào viết thành yêu cầu. Con số cụ thể, ví dụ trừ bao nhiêu phần trăm cho run, là việc của từng tổ chức.

## Little's Law: định lý về trung bình, không phải lời dự báo

**Gốc.** John D. C. Little công bố chứng minh năm 1961 trên *Operations Research*. Quan hệ L = λW đúng khi các trung bình hữu hạn, quá trình dừng chặt (*strictly stationary*) và dòng đến có tính *metrically transitive*.[^1] Theo cách bài đọc ký hiệu, L là số phần tử trung bình trong hệ, λ là tốc độ đến, W là thời gian trung bình một phần tử ở trong hệ.[^18] Doc nguồn dịch sang ngôn ngữ quản lý việc như sau:[^21]

```
Cycle time trung bình = WIP trung bình / Throughput trung bình
```

Doc ghi throughput là λ ở trạng thái ổn định;[^15] bài này hiểu đó là vì việc vào bằng việc ra khi hệ ổn định.[^18] Doc nguồn tính đúng ví dụ mở bài. Mười hai việc dở dang chia bốn việc xong mỗi quý cho cycle time trung bình ba quý. Bắt đầu thêm bốn việc mà throughput không đổi thì cycle time thành bốn quý: mọi việc chậm thêm một quý, và không việc nào xong sớm hơn.[^21]

**Điều định luật không nói.** Năm 2011, Little viết bài nhìn lại 50 năm. Bài nhấn mạnh đây là quan hệ giữa các trung bình dài hạn, và có phân tích riêng cho khoảng thời gian hữu hạn.[^2] Doc nguồn rút ra hai giới hạn.[^21]
- Định luật không dự báo thời gian của một việc cụ thể.
- Định luật không đúng khi hệ mất cân bằng, ví dụ WIP tăng liên tục.

Bài này thêm một giới hạn nữa, cũng suy từ cùng điều kiện. Khi một tổ chức chủ động rút WIP từ mười hai xuống sáu, hệ cũng không dừng. Trong giai đoạn đó, L = λW chỉ là xấp xỉ.[^18]

**Một hệ quả hay bị bỏ qua (suy luận của bài).** Bài này áp cùng quan hệ cho một ranh giới rộng hơn: từ lúc có yêu cầu tới lúc xong, gồm cả hàng chờ chưa bắt đầu, với giả định ranh giới ấy cũng thỏa điều kiện của Little. Nhìn theo ranh giới ấy, giới hạn WIP không tự làm việc xong sớm hơn nếu throughput không đổi. Nó chỉ dời phần chờ ra khỏi ranh giới "đang làm", sang hàng chờ chưa bắt đầu.[^18]

Ví dụ với số giả định:
- Ba việc của ứng dụng xếp sau mười hai việc cũ, throughput bốn việc mỗi quý.
- Theo thứ tự đến trước làm trước, việc cuối cùng của ứng dụng xong sau chừng mười lăm chia bốn, tức 3,75 quý.
- Kết quả ấy giống nhau dù trần WIP là mười lăm hay sáu.[^0][^18]

Vậy giới hạn WIP có lợi ở đâu? Bài này thấy ba chỗ:[^18]
1. **Thời gian chờ trước khi bắt đầu rẻ hơn thời gian chờ khi đã bắt đầu.** Việc chưa bắt đầu chưa tốn sức chuyển qua lại giữa các việc, chưa giữ người, và còn đổi thứ tự được.
2. **Đổi được thứ tự.** Khi trần là sáu, việc quan trọng có thể vào ống trước. Ở ví dụ, nếu ba việc của ứng dụng được ưu tiên vào trước mỗi khi có chỗ, chúng xong chừng giữa quý bốn, thay vì 3,75 quý khi xếp sau mười hai việc cũ.[^0]
3. **Dự báo được.** Kanban Guide đặt SLE trên lịch sử cycle time.[^6][^21] Bài này suy ra: cycle time càng ổn định thì SLE càng đáng tin.[^18]

Bài này không tìm thấy trong doc nguồn số đo thực nghiệm nào cho việc giảm WIP làm tăng throughput, ví dụ nhờ bớt chuyển qua lại giữa các việc. Vì vậy bài không khẳng định điều đó.[^19]

## Kingman: vì sao bận kín sinh ra hàng đợi

**Gốc.** J. F. C. Kingman (1961) đưa ra một xấp xỉ cho thời gian chờ của hàng đợi một máy phục vụ tổng quát (G/G/1). Xấp xỉ chính xác khi hệ gần bão hòa.[^3]

```
W_q ≈ [ρ / (1 − ρ)] × [(c_a² + c_s²) / 2] × τ
      mức bận         độ biến động           thời gian phục vụ
```

Theo cách bài đọc công thức, ρ là mức bận (utilization), c_a và c_s là hệ số biến thiên của khoảng cách giữa hai lần đến và của thời gian phục vụ, τ là thời gian phục vụ trung bình.[^3][^18] Với độ biến động bằng 1, tức trường hợp M/M/1, hệ số đầu cho bảng sau:[^4]

| Mức bận ρ | 50% | 70% | 80% | 90% | 95% |
|---|---|---|---|---|---|
| Thời gian chờ ÷ thời gian phục vụ | 1× | 2,3× | 4× | 9× | 19× |

Từ 80% lên 95%, thời gian chờ tăng gần năm lần, trong khi giờ bận chỉ tăng chừng một phần năm.[^4][^23] Doc nguồn lưu ý ba điều.[^21]
- Công việc tri thức (yêu cầu nghiệp vụ, phân tích, phê duyệt) có độ biến động cao. Số hạng thứ hai vì thế còn đẩy đường cong lên nữa.
- Một tổ chức không phải là một máy phục vụ đơn, nên các con số chỉ cho hướng, không phải lời dự báo.
- Điều vững chắc là **hình dạng đường cong**: càng gần 100%, thời gian chờ càng bùng nổ.

Theo nguồn thứ cấp, Donald Reinertsen (2009), trong *The Principles of Product Development Flow*, dùng chính lập luận này để phê phán việc tôn sùng hiệu suất sử dụng (*worship of efficiency*) và sự mù với hàng đợi (*blindness to queues*).[^5] Doc chỉ đọc được bản tóm tắt sách. Bài này vì vậy không trích nguyên văn Reinertsen.

**Utilization chưa cho biết hệ có nghẽn không.** Doc nối cùng vật lý này sang góc kỹ thuật. Little's Law được dùng để tính kích thước connection pool. Phương pháp USE thì phân biệt utilization với saturation. Theo doc, saturation, tức hàng đợi, mới là tín hiệu đau; utilization thì không.[^21] Áp vào đội người, bài này suy ra: thước đo nên theo dõi là tuổi của việc đang dở (work item age) và độ dài hàng chờ, không phải tỷ lệ giờ bận trên bảng chấm công.[^18]

## Kanban Guide: biến lý thuyết thành luật vận hành

Kanban cho công việc tri thức bắt đầu từ một đội tại Corbis năm 2006, theo chính Kanban Guide.[^17] Bản hiện hành là v2025.5. Bản này thay v2020.12, gọi các chỉ số là "Flow Metrics" và thêm quy ước về giá trị và rủi ro.[^17]

Guide nêu ba điều.[^6]
- **Definition of Workflow** gồm cách kiểm soát WIP và **SLE**.[^6] Theo thân doc, nó còn nêu điểm bắt đầu và kết thúc, các trạng thái và policy; SLE là dự báo cycle time kèm xác suất.[^15][^21]
- Kiểm soát WIP tường minh tạo ra **pull system**: chỉ bắt đầu việc mới khi có tín hiệu còn chỗ.
- Bốn flow metric là bắt buộc: WIP, Throughput, Work Item Age, Cycle Time.

Doc nguồn áp dụng điều này ở tầng portfolio. Đặt một trần WIP cho số việc lớn đang chạy. Một việc mới chỉ được bắt đầu khi có việc khác xong hoặc bị dừng.[^21] Áp vào portfolio là cách đọc của doc.[^21]

So sánh ba nguồn của tầng flow:

| | Little (1961) | Kingman (1961) | Kanban Guide v2025.5 |
|---|---|---|---|
| Loại | Định lý, có chứng minh[^1] | Xấp xỉ, đúng khi gần bão hòa[^3] | Hướng dẫn của Vacanti, Coleman và cộng sự[^6] |
| Nói gì | Quan hệ giữa ba trung bình[^1] | Thời gian chờ theo mức bận và độ biến động[^3] | Luật vận hành: trần WIP, pull, bốn chỉ số, SLE[^6] |
| Điều kiện | Hệ dừng, trung bình hữu hạn[^1] | Một máy phục vụ, tải nặng[^3] | Đã định nghĩa workflow[^6] |
| Không nói | Thời gian của một việc cụ thể[^21] | Số chính xác cho một tổ chức[^21] | Trần WIP bao nhiêu là đúng; doc không ghi Guide có con số nào[^21] |

Little và Kingman là kết quả toán học. Kanban Guide là luật vận hành, không phải bằng chứng thực nghiệm rằng các kết quả ấy đúng cho một đội người.[^18]

## Tầng service capacity: ISO/IEC 20000-1

ISO/IEC 20000-1:2018 là ấn bản 3.[^22] Chuẩn được rà soát và xác nhận lại năm 2023, và có Amd 1:2024.[^12] Capacity management nằm ở §8.4.3, trong §8.4 *Supply and demand*, cùng với §8.4.1 *Budgeting and accounting for services* và §8.4.2 *Demand management*.[^11] Ba chủ đề tiền, nhu cầu và năng lực vì thế được nhóm vào **một** điều khoản.[^11][^22]

So với bản 2011, bản 2018 bỏ yêu cầu phải có capacity plan dạng tài liệu. Thay vào đó là yêu cầu lập kế hoạch capacity: chuẩn đòi kết quả, không đòi một tài liệu cụ thể.[^12] Nội dung chi tiết của §8.4.3, tức những loại nguồn lực phải lập kế hoạch, doc chưa kiểm được từ nguồn gốc.[^13]

Tầng này quan trọng với kế hoạch năm vì một cơ chế doc nêu rõ. Mỗi việc đưa vào vận hành làm tăng sức cần cho phần chạy: người vận hành, hạ tầng, license. Phần ấy thu hẹp sức cho việc mới của các năm sau.[^22] Kế hoạch năm nào không trừ phần chạy tăng thêm của năm trước sẽ hứa quá sức.[^18]

## Hay bị nhầm với gì

| Hay nói | Đúng hơn | Nguồn |
|---|---|---|
| "Tận dụng 100% nguồn lực là hiệu quả" | Với việc biến động, gần 100% thì chờ bùng nổ | [^3][^4][^15] |
| "Thiếu người thì thuê thêm người" | Thiếu capability không bù được bằng capacity chung | [^14][^15] |
| "Little's Law dự báo khi nào việc này xong" | Nó là quan hệ giữa trung bình dài hạn của hệ ổn định | [^2][^21] |
| "Giới hạn WIP làm mọi thứ xong sớm hơn" | Nó rút cycle time từ lúc bắt đầu; tổng thời gian từ lúc yêu cầu chỉ giảm khi throughput tăng hoặc thứ tự đổi | [^18] |
| "Đã duyệt tiền là bắt đầu được" | Chưa có sức làm thì chưa bắt đầu | [^14] |
| "Chuẩn ISO bắt buộc có capacity plan" | Bản 2018 đòi lập kế hoạch, không đòi tài liệu | [^12] |

## Chỗ còn phải đọc cẩn thận

- **Utilization cao vẫn có chỗ đúng.** Với việc ổn định, ít biến động, ví dụ vận hành lặp lại hay xử lý theo lô, doc cho rằng mức bận 85–90% là hợp lý. Phản đối utilization cao chỉ mạnh khi việc biến động: dự án, yêu cầu mới, sự cố.[^16]
- **Thời gian rảnh trông như lãng phí.** Với tài chính, người rảnh 20% trông giống chi phí thừa. Theo doc, lập luận ngược lại cần đo bằng cost of delay và cycle time, không bằng bảng chấm công. Không có dữ liệu về dòng việc thì khó thắng cuộc tranh luận này.[^16]
- **Nhóm nguồn lực chung hay đội ổn định.** Đưa người tới việc (resource pool, phân bổ theo phần trăm) tối đa hóa utilization trên giấy nhưng gây chuyển qua lại giữa các việc. Đưa việc tới đội ổn định giảm ma sát nhưng kém linh hoạt khi nhu cầu đổi loại kỹ năng. Theo doc, không có lời giải chung.[^16]
- **Dự báo bằng ước lượng hay bằng lịch sử.** Kanban dùng lịch sử cycle time để đặt SLE. Theo doc, lịch sử khách quan hơn, nhưng cần đủ dữ liệu và một hệ ổn định, cũng là điều kiện của Little's Law.[^16]
- **Nguồn thứ cấp.** Mục tiêu domain của PMI và lập luận của Reinertsen chỉ đọc được qua nguồn thứ cấp.[^8][^5] Nội dung §8.4.3 của ISO/IEC 20000-1 còn OPEN.[^13] Bản 5 của PMI SPfM sắp ra, và doc ghi cần kiểm lại.[^9]
- **Kingman cho một tổ chức là phép loại suy.** Doc ghi một tổ chức không phải một máy phục vụ đơn, và bảng 4× và 19× chỉ cho hướng.[^21] Bài này thêm: một đội người có nhiều "máy phục vụ" với kỹ năng khác nhau, và việc có thể bị chia nhỏ hay dừng giữa chừng.[^18]

## Áp dụng: kiểm sức làm trước khi hứa một năm

Các bước dưới đây ghép bài tập của doc với các nguồn trên. Thứ tự bước và cách đọc kết quả là suy luận của bài.[^18]

1. **Đếm WIP và throughput.** Đếm số việc đang dở dang và số việc xong trong bốn quý gần nhất. Tính cycle time ngụ ý theo Little's Law, rồi so với thực tế; đây là bài tập của doc.[^1][^24] Bài này cho rằng lệch nhiều thường nghĩa là hệ chưa ổn định, hoặc "việc" chưa được đếm thống nhất.[^18]
2. **Lập bảng cung theo kỹ năng.** Trừ phần giữ hệ thống chạy, nghỉ phép và việc chung. Đặt cạnh bảng cầu theo kỹ năng cho quý tới.[^14][^24]
3. **Tìm kỹ năng nút cổ chai.** Đó là kỹ năng mà nhiều việc cùng cần và có ít người nhất. Thêm sức ở đó trước khi thêm sức chung.[^14]
4. **Đặt trần WIP và luật bắt đầu.** Chỉ bắt đầu việc mới khi một việc xong hoặc bị dừng.[^6][^21] Bài này thêm: khi có chỗ trống, việc ưu tiên vào trước.[^18]
5. **Theo dõi bốn flow metric, nhất là work item age.** Theo cách đọc của bài, việc đang dở mà đã già hơn SLE là một tín hiệu sớm đáng theo dõi.[^6][^18]
6. **Đặt mục tiêu mức bận theo loại việc.** Chỉ đặt mức bận cao cho việc đều đặn, ít biến động.[^16]
7. **Đưa sức làm vào bản đề xuất đầu tư.** Phần "có giao được không" phải chứng minh đủ capacity và capability. Doc lưu ý cycle time dài do WIP cao cũng làm lợi ích đến muộn hơn.[^22]
8. **Cộng phần chạy tăng thêm vào kế hoạch năm sau.** Mỗi hệ thống mới đưa vào vận hành đều làm phần giữ hệ thống chạy lớn thêm.[^22]

Ở ví dụ mở bài, các bước cho một kết quả cụ thể với số giả định.[^0]
- Năm tới đội xong chừng mười sáu việc, kể cả việc đang dở. Trừ bốn việc giữ hệ thống chạy và tám việc đã hẹn, còn bốn chỗ trống.
- Ba việc của ứng dụng đều phải sửa chỗ hệ thống kho nối với hệ thống bán hàng. Chỉ hai người hiểu chỗ ấy.
- Vì vậy, một người hiểu cả hai hệ thống, giá sáu trăm triệu một năm, có ích hơn bốn lập trình viên chung giá hai tỷ.

Trong giả định throughput toàn đội vẫn là bốn việc mỗi quý, người này không làm đội xong thêm việc. Người này giúp ba việc của ứng dụng khỏi phải xếp hàng ở đúng chỗ kẹt.[^0][^18]

Video đi kèm, tập 07 của Boring But Correct, kể cùng chuyện qua mắt giám đốc công nghệ. Bài này là phần nguồn và lập luận đứng sau video.

[^0]: Giả định · Công ty, mười hai việc dở dang, bốn việc mỗi quý, ba việc của ứng dụng, mức bận 80 trên 100, bốn lập trình viên hai tỷ, một người sáu trăm triệu, mười sáu trừ bốn trừ tám, giữa quý bốn là ví dụ minh họa của tập 07, không đến từ nguồn.
[^1]: Verified · [Little (1961), Operations Research 9(3):383–387, abstract trên RePEc](https://ideas.repec.org/a/inm/oropre/v9y1961i3p383-387.html): L = λW nếu các trung bình hữu hạn, quá trình strictly stationary, dòng đến metrically transitive.
[^2]: Verified (qua snippet; PDF bị 403) · [Little (2011), Operations Research 59(3):536–549](https://www.informs.org/content/download/255808/2414681/file/little_paper.pdf): quan hệ của trung bình dài hạn; có phân tích riêng cho khoảng hữu hạn.
[^3]: Verified · [Kingman (1961), Proc. Camb. Phil. Soc. 57(4):902](https://doi.org/10.1017/S0305004100036094), công thức dẫn qua [Wikipedia, Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula): xấp xỉ thời gian chờ G/G/1 = mức bận × độ biến động × thời gian phục vụ; chính xác khi gần bão hòa.
[^4]: Verified (tính toán) · Hệ số ρ/(1−ρ) với ρ = 0,5; 0,7; 0,8; 0,9; 0,95 cho 1×, 2,3×, 4×, 9×, 19×, như doc tự tính từ công thức.
[^5]: Verified (qua thứ cấp) · Reinertsen (2009), *The Principles of Product Development Flow*, qua [slide tóm tắt](https://garden.quintsmart.com/assets/principlesofproductflow-170223063121.pdf): phê phán "worship of efficiency", "blindness to queues", thiếu WIP constraints. Sách có phí. Tin cậy trung bình.
[^6]: Verified · [The Kanban Guide v2025.5](https://kanbanguides.org/the-kanban-guide/), doc đọc trực tiếp: Definition of Workflow gồm cách kiểm soát WIP và SLE; kiểm soát WIP tạo pull system; bốn flow metric bắt buộc.
[^7]: Verified (qua snippet) · [PMI SPfM 4th ed., mục lục O'Reilly](https://www.oreilly.com/library/view/the-standard-for/9781628253962/chapter05.xhtml): domain Portfolio Capacity and Capability Management (Section 5) cùng Strategic, Governance, Stakeholder, Value, Risk.
[^8]: Verified (qua thứ cấp) · [knowledgemap.pm](https://knowledgemap.pm/certifications/pfmp/learning-the-portfolio-knowledge-areas/learn-portfolio-capacity-and-capability-management/) diễn đạt chương 5: nhu cầu capacity và capability của portfolio khớp mục tiêu và được năng lực tổ chức đáp ứng. Bản gốc có phí. Tin cậy trung bình.
[^9]: Verified (qua thứ cấp) · [project-management-knowledge.com](https://project-management-knowledge.com/pmi-portfolio-standard-fifth-edition-public-comment/) và bài đăng LinkedIn của PMI 08/05/2026: bản 5 mở góp ý 05/2026, ANSI public review 24/07–07/09/2026; bản hiện hành vẫn là bản 4 tại 2026-11-04. Tin cậy trung bình.
[^10]: Verified (qua snippet) · [ISO 21504:2022](https://www.iso.org/standard/82867.html) và OBP foreword: ấn bản 2 thay 2015, căn chỉnh với ISO 21500:2021 và 21502:2020; hướng dẫn quản lý portfolio dự án và chương trình.
[^11]: Verified (qua snippet) · Mục lục ISO/IEC 20000-1:2018 (bản tiếng Pháp, mẫu normsplash): §8.4 Supply and demand gồm 8.4.1 Budgeting and accounting for services, 8.4.2 Demand management, 8.4.3 Capacity management.
[^12]: Verified (qua snippet) · [ISO/IEC 20000-1:2018](https://www.iso.org/standard/70636.html) và OBP foreword: bỏ yêu cầu documented capacity plan, thay bằng lập kế hoạch capacity; xác nhận lại 2023; Amd 1:2024.
[^13]: OPEN · Nội dung chi tiết §8.4.3 (những loại nguồn lực phải lập kế hoạch): doc chỉ có nguồn thứ cấp.
[^14]: Thực hành ngành, tổng hợp của doc nguồn, suy ra từ Little, Kingman và Kanban Guide · Trừ run/BAU, nghỉ phép, overhead; so cầu với cung trước khi duyệt; nút cổ chai kỹ năng; ba đường lấp khoảng trống capability; trần WIP ở tầng portfolio. Không phải trích chuẩn. Tin cậy trung bình.
[^15]: Thân doc nguồn, Tổng quan và Thuật ngữ · Ba tầng, câu hỏi và đơn vị đo của từng tầng; "tận dụng 100% nguồn lực không phải là hiệu quả"; định nghĩa capacity, capability, throughput (λ ở trạng thái ổn định), cycle time, SLE; capability ở đây khác business capability; công thức cycle time = WIP / throughput đặt ở §3. Đây là cách doc đọc nguồn.
[^20]: Thân doc nguồn, §1–§2 · Lỗi dừng ở tầng một rồi bắt đầu tất cả cùng lúc; mục lục ISO 21504 có tiêu chí chọn, xếp hạng và báo cáo hiệu quả.
[^21]: Thân doc nguồn, §3 · Dịch L = λW sang cycle time, WIP, throughput; ví dụ 12 ÷ 4 = 3 quý, thêm bốn việc thành bốn quý; hai giới hạn của Little; công việc tri thức biến động cao; tổ chức không phải máy phục vụ đơn; con số chỉ cho hướng; hình dạng đường cong; Definition of Workflow nêu điểm bắt đầu, kết thúc, trạng thái, policy; SLE dựa trên lịch sử cycle time; trần WIP ở tầng portfolio; connection pool, USE, saturation là tín hiệu đau.
[^22]: Thân doc nguồn, §4–§5 · ISO/IEC 20000-1:2018 là ấn bản 3; tiền, nhu cầu, năng lực nhóm vào một điều khoản; mỗi việc đưa vào vận hành làm tăng run capacity và thu hẹp change capacity các năm sau; management case phải chứng minh đủ capacity và capability; cycle time dài làm lợi ích đến muộn.
[^16]: Thân doc nguồn, mục Đánh đổi · Utilization 85–90% hợp lý cho việc ổn định; thời gian rảnh trông như lãng phí, cần đo bằng cost of delay và cycle time; resource pool hay đội ổn định; dự báo bằng ước lượng hay lịch sử. Đây là nhận định của doc.
[^17]: Thân doc nguồn, Diễn tiến · Kanban cho công việc tri thức bắt đầu từ một đội tại Corbis năm 2006, theo Kanban Guide; Kanban Guide 2020.12 rồi v2025.5, gọi là "Flow Metrics", thêm quy ước về giá trị và rủi ro.
[^18]: Suy luận của bài · Hệ không dừng khi rút WIP; Little đúng cho mọi ranh giới; trần WIP dời phần chờ ra hàng chờ chưa bắt đầu; phép tính 15 ÷ 4 cho việc cuối; ba lợi ích của trần WIP; work item age và độ dài hàng chờ là thước đo; Kanban Guide không phải bằng chứng thực nghiệm; kế hoạch năm phải trừ phần chạy tăng thêm; thứ tự các bước áp dụng; người hiểu cả hai hệ thống không tăng throughput mà gỡ chỗ kẹt.
[^19]: OPEN (của bài) · Số đo thực nghiệm rằng giảm WIP làm tăng throughput của đội công nghệ: bài không tìm thấy trong doc nguồn; chưa tìm ở nguồn khác.
[^23]: Phép tính của bài · 95 ÷ 80 − 1 ≈ 0,19, tức chừng một phần năm giờ bận thêm.
[^24]: Thân doc nguồn, Bài tập áp dụng · Đếm việc đang dở và throughput bốn quý, tính cycle time ngụ ý và so thực tế; lập bảng cung theo kỹ năng (trừ run/BAU) và cầu theo kỹ năng; đề xuất trần WIP và luật bắt đầu.
