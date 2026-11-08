---
title: "Đo hiệu quả công nghệ: DORA metrics, IT balanced scorecard, OKR và Goodhart"
description: "Năm metric DORA (2024), IT BSC (1997), quy tắc OKR của re:Work, SPACE và Goodhart: mỗi công cụ đo trả lời câu nào, và hỏng ra sao khi bị dùng sai câu."
station: 1
published: 2026-11-07
verified: 2026-11-04
sources:
  - title: "DORA. DORA's software delivery performance metrics"
    url: https://dora.dev/guides/dora-metrics/
  - title: "DORA (02/01/2026). A history of DORA's software delivery metrics"
    url: https://dora.dev/insights/dora-metrics-history/
  - title: "Google re:Work. Set goals with OKRs (2016)"
    url: https://rework.withgoogle.com/intl/en/guides/set-goals-with-okrs
  - title: "Van Grembergen, W., Van Bruggen, R. (1997). Measuring and improving corporate information technology through the balanced scorecard, qua abstract IJMED 2015"
    url: https://www.inderscience.com/info/e_inarticle.php?artid=69310
  - title: "Van Grembergen, W., Saull, R. (2001). Information Technology Governance through the Balanced Scorecard"
    url: https://www.irma-international.org/chapter/information-technology-governance-through-balanced/23677/
  - title: "Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., Butler, J. (2021). The SPACE of Developer Productivity. ACM Queue 19(1)"
    url: https://queue.acm.org/detail.cfm?id=3454124
---

Báo cáo tháng của đội công nghệ có ba mươi chỉ số, và cả ba mươi đều xanh. Vậy mà khi hội đồng quản trị hỏi đội làm tốt hay không, không ai trả lời được. Tổng giám đốc đề nghị chọn một con số, số việc đội đóng mỗi tháng, và thưởng theo nó. Đó là ví dụ giả định đi kèm bài.[^0]

Bài này hỏi ba điều:
- Các công cụ đo hiệu quả công nghệ, từ IT balanced scorecard tới DORA metrics và OKR, mỗi cái trả lời câu nào.
- Chúng đã đổi ra sao qua các phiên bản.
- Vì sao một chỉ số tốt lại hỏng khi bị đem ra thưởng phạt.

**Trả lời ngắn:** doc nguồn coi việc đo hiệu quả công nghệ là một hệ nhiều tầng, không phải một bộ KPI.[^20] Mỗi công cụ trả lời một câu hỏi riêng, và hỏng khi bị dùng cho câu hỏi của công cụ khác.[^20] Doc nêu hai lỗi phổ biến nhất, theo nhận định của doc:[^20]
- biến một chỉ số chẩn đoán thành chỉ tiêu thưởng phạt;
- gộp mọi thứ vào một con số.

Doc gọi lỗi thứ nhất là Goodhart's law[^20][^30], và phân biệt hai cách phát biểu: của Goodhart năm 1975 và của Strathern năm 1997.[^11]

## Bảy công cụ, bảy câu hỏi

Bảng dưới là cách doc nguồn xếp các công cụ. Đây là sắp xếp của doc, không phải của một chuẩn.[^20]

| Công cụ | Câu hỏi | Nhịp | Neo |
|---|---|---|---|
| Benefits | Khoản đầu tư có tạo giá trị như business case hứa không? | Theo mốc benefits | Note về vòng đời đầu tư của cùng bộ doc |
| IT balanced scorecard | Chức năng IT có cân bằng giữa đóng góp kinh doanh, người dùng, vận hành và tương lai không? | Năm, quý | Van Grembergen & Van Bruggen (1997)[^8] |
| OKR | Thay đổi nào quan trọng nhất kỳ này, và đã tiến được bao xa? | Quý, năm | Google re:Work (2016)[^6] |
| KPI vận hành | Hoạt động thường ngày có ổn định không? | Tháng, tuần | Thực hành, không có chuẩn chung[^20] |
| SLO | Dịch vụ có đủ tin cậy theo góc nhìn người dùng không? | Liên tục | Note về SLO của cùng bộ doc |
| DORA metrics | Năng lực giao phần mềm của một ứng dụng ra sao? | Liên tục, theo xu hướng | dora.dev, 5 metric (2024)[^1] |
| Flow metrics | Việc chảy qua hệ thống nhanh và ổn định không? | Liên tục | Note về capacity của cùng bộ doc |

Nguồn bảng: thân doc nguồn, Tổng quan.[^20]

## Leading và lagging là tương đối

Doc nguồn xếp các công cụ thành ba tầng:[^21]
- **Tầng chiến lược:** benefits, IT BSC, OKR công ty.
- **Tầng delivery:** DORA metrics, flow metrics, OKR của team.
- **Tầng run:** SLO, error budget, KPI vận hành.

Tầng delivery là leading cho tầng chiến lược.[^21]

DORA tự mô tả năm metric của mình theo hai chiều.[^5]
- Chúng là **leading indicator** cho organizational performance (doc thêm well-being[^21]).
- Chúng là **lagging indicator** cho các thực hành delivery.

Doc rút ra: không có metric leading hay lagging tuyệt đối, chỉ có leading hay lagging so với tầng nào.[^21]

Theo cách doc trích ISO/IEC 38500, governing body *monitor*, rồi *evaluate* và *direct* lại.[^21][^27] Doc nhấn mạnh rằng đo mà không quay về quyết định cắt, tăng hay đổi hướng một initiative thì chỉ là báo cáo.[^21] Bài này chỉ dẫn ISO/IEC 38500 qua cách doc dùng nó; doc dẫn ISO/IEC 38500:2024 và không đưa nó vào bảng kiểm chứng.[^27]

## DORA metrics: lịch sử của năm con số

**Hiện hành.** dora.dev dùng năm metric chia hai factor[^1]; metric thứ năm được thêm năm 2024.[^2]

| Factor | Metric | Định nghĩa theo doc |
|---|---|---|
| Throughput | Change lead time | Từ commit vào version control tới khi deploy production |
| | Deployment frequency | Số lần deploy trong một kỳ, hoặc khoảng cách giữa các lần |
| | Failed deployment recovery time | Thời gian khôi phục sau một deploy hỏng cần can thiệp ngay |
| Instability | Change fail rate | Tỷ lệ deploy cần can thiệp ngay |
| | Deployment rework rate | Tỷ lệ deploy không theo kế hoạch, phát sinh do sự cố production |

Tên metric và factor theo claim #1.[^1] Định nghĩa từng dòng theo thân doc §4.[^22]

**Diễn tiến.** Ngày 02/01/2026, DORA công bố bài "A history of DORA's software delivery metrics". Theo bài này:[^2][^3][^4]
- **2014:** change fail rate không tương quan đủ, nên "IT performance" chỉ dùng ba metric.
- **2015:** tách throughput và stability.
- **2018:** thêm availability, gọi là SDO performance.
- **2021:** báo cáo gọi "reliability" là metric thứ năm. Năm 2026, DORA thừa nhận cách gọi đó **không chính xác**[^3]; doc giải thích là reliability đo vận hành, không đo delivery.[^22]
- **2023:** MTTR được đổi tên và định nghĩa lại thành *failed deployment recovery time*. Theo doc, metric mới chỉ tính sự cố do chính thay đổi gây ra, không tính sự cố bên ngoài như mất data center.[^22]
- **2024:** thêm deployment rework rate, thành năm metric.

Factor thứ hai nay gọi là *instability*, không còn là *stability*.[^1][^22] Hệ quả thực hành: tài liệu nội bộ còn gọi "four keys" với MTTR là đang dùng một phiên bản cũ.[^26]

**Giới hạn do chính DORA nêu.**[^5]
- Dùng theo từng ứng dụng hoặc dịch vụ. Gộp nhiều team hay toàn tổ chức là có vấn đề, và so mobile app với mainframe là sai.
- Đặt metric thành mục tiêu là vi phạm Goodhart và dẫn tới gaming.
- Không có "one metric to rule them all". Nên chọn nhiều metric có lực căng lẫn nhau.

Doc thêm hai ý từ cùng hướng dẫn: không dùng ngành của mình làm lá chắn ("ngành bị quản lý chặt nên không thể…"), và chỉ so một team với chính nó theo thời gian.[^22][^23]

## IT balanced scorecard: BSC áp vào phòng IT

**Gốc.** Balanced Scorecard của Kaplan & Norton ra đời năm 1992; mốc này doc ghi ở Diễn tiến và dẫn sang note chiến lược, không có trong bảng kiểm chứng.[^24] Theo abstract mà doc đọc, Van Grembergen & Van Bruggen (1997) áp BSC vào chức năng IT với bốn perspective.[^8]

| Perspective | Câu hỏi | Chỉ số ví dụ (minh họa của doc) |
|---|---|---|
| Corporate / business contribution | IT tạo giá trị kinh doanh gì? | Benefits realised so với business case; tỷ lệ chi cho change so với run |
| User orientation | Người dùng đánh giá IT thế nào? | Mức hài lòng; SLO đạt |
| Operational excellence | Quy trình phát triển và vận hành có hiệu quả không? | DORA metrics; cycle time; chi phí đơn vị (TBM) |
| Future orientation | IT có đủ người và công nghệ cho tương lai không? | Capability gap theo kỹ năng; tỷ lệ nợ kỹ thuật, legacy |

Chỉ tên bốn perspective dựa vào claim #8.[^8] Cột câu hỏi là diễn giải của doc ở §2.[^25] Cột chỉ số là minh họa của doc, không phải danh mục gốc của Van Grembergen.[^12]

Từ abstract chương sách của Van Grembergen & Saull (2001), doc xác nhận hai ý.[^9]
- **Cascade:** BSC của từng business unit nối xuống IT BSC, và chuỗi này phục vụ IT governance cũng như alignment giữa business và IT.
- Một **IT BSC maturity model**.



## OKR: quy tắc, không chỉ là định dạng

Google re:Work (*Set goals with OKRs*, 2016; doc ghi là bản lưu trữ[^31]) nêu các quy tắc sau.[^6]
- Ba tới năm objective, mỗi objective khoảng ba key result.
- Key result chấm điểm trên thang 0.0–1.0. Điểm trung bình 0.6–0.7 là "sweet spot".
- OKR công khai trong tổ chức.
- OKR không đồng nghĩa với đánh giá nhân viên.

Doc rút ra hệ quả.[^28] Nếu gắn điểm OKR vào thưởng hay xếp hạng, quy tắc 0.6–0.7 sụp ngay, vì không ai đặt mục tiêu mà mình chỉ đạt 60%. Doc cũng phân vai: OKR dành cho thay đổi, còn KPI và SLO dành cho trạng thái ổn định cần duy trì. Một KPI chỉ nên thành key result khi muốn dịch chuyển nó. Phân vai này là thực hành ngành, không phải quy tắc của re:Work.[^12]

**Năm OKR vào Google: nguồn lệch.** re:Work ghi "early 2000". Nguồn khác mà doc dẫn (whatmatters.com) ghi 1999.[^7] Bài này không chọn một năm.

## SPACE: năng suất rộng hơn delivery

Forsgren, Storey, Maddila, Zimmermann, Houck và Butler đăng SPACE trên *ACM Queue* 19(1), tháng 3/2021.[^10] Năm chiều của SPACE là:[^10]
- Satisfaction & well-being;
- Performance;
- Activity;
- Communication & collaboration;
- Efficiency & flow.

Doc đọc SPACE như một lời phản đối việc dùng một metric duy nhất, nhất là metric activity như số commit hay số dòng code.[^22]

## Goodhart và Strathern: hai câu khác nhau

Doc phân biệt hai phát biểu.[^11]
- **Goodhart (1975)**, trong bối cảnh chính sách tiền tệ Anh: *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."* Tạm dịch: mọi quy luật thống kê quan sát được đều có xu hướng sụp khi bị dùng làm công cụ điều khiển.
- **Strathern (1997)**: *"When a measure becomes a target, it ceases to be a good measure."* Tạm dịch: khi một thước đo thành mục tiêu, nó không còn là thước đo tốt.

Câu thứ hai, câu quen thuộc nhất, là của Strathern chứ không phải nguyên văn của Goodhart.[^11] Cả hai câu chỉ được doc đọc qua hai nguồn thứ cấp thống nhất với nhau, vì bản gốc không truy cập được. Độ tin cậy là trung bình.[^11]

Doc liệt kê bốn biểu hiện trong IT.[^30]
- Ép deployment frequency thì team chia nhỏ deploy vô nghĩa.
- Ép tỷ lệ đóng ticket thì ticket bị đóng sớm rồi mở lại.
- Gắn điểm OKR vào thưởng thì team đặt mục tiêu an toàn (sandbagging).
- Ép % benefits đạt được thì baseline bị chỉnh cho dễ đạt.

Doc cũng chặn một cách đọc sai: Goodhart không có nghĩa là đừng đo, mà là đừng gắn áp lực điều khiển trực tiếp lên proxy.[^23] Theo doc, DORA cảnh báo cả chiều ngược lại: dồn sức xây hệ thống đo chính xác mà quên cải tiến.[^23]

## So sánh: mỗi công cụ hỏng thế nào

| Công cụ | Đơn vị phân tích | Hỏng khi | Nguồn |
|---|---|---|---|
| DORA metrics | Một ứng dụng hay dịch vụ | Gộp toàn tổ chức; đặt làm mục tiêu; so khập khiễng | [^5] |
| OKR | Tổ chức, team | Gắn vào đánh giá nhân viên; dùng như to-do list | [^6][^28][^23] |
| IT BSC | Chức năng IT | Khi IT không còn là đơn vị tách biệt, xung đột với đo theo value stream | [^23] |
| Benefits | Một initiative | Baseline bị chỉnh cho dễ đạt | [^12][^30] |
| Năng suất lập trình viên | Nhiều chiều (SPACE) | Đo bằng một metric activity | [^22] |

## Chỗ còn phải đọc cẩn thận

- **IT BSC hay value stream metrics.** Theo doc, IT BSC đo IT như một chức năng riêng. Tổ chức theo sản phẩm hay value stream thì đo theo dòng giá trị xuyên business và IT. Hai cách có thể mâu thuẫn khi IT không còn là đơn vị tách biệt.[^23]
- **OKR có thể thành nghi thức.** Theo doc, thiếu diagnosis phía trên thì OKR chỉ là danh sách mục tiêu có định dạng đẹp.[^23]
- **Benchmark.** Doc ghi rằng lãnh đạo thường muốn so DORA metrics giữa các team hay với ngành, trong khi DORA khuyến cáo chỉ so một team với chính nó theo thời gian.[^23]
- **Nguồn đọc gián tiếp.** IT BSC đọc qua snippet hay abstract[^8][^9]; SPACE đọc trên ACM Queue, còn DOI kiểm qua snippet.[^10] Goodhart và Strathern đọc qua thứ cấp.[^11] Năm OKR vào Google còn lệch giữa hai nguồn.[^7]
- **Quy tắc thiết kế không phải chuẩn.** Năm quy tắc ở mục Áp dụng là tổng hợp của doc, độ tin cậy trung bình.[^12]

## Áp dụng: dựng lại một báo cáo cho lãnh đạo

Doc tổng hợp năm quy tắc thiết kế. Đây là thực hành, không phải chuẩn.[^12]
1. **Bắt đầu từ câu hỏi quyết định**, không từ dữ liệu sẵn có. Mỗi metric gắn với một quyết định mà nó có thể làm đổi.
2. **Ghép cặp có lực căng:** throughput với instability, tốc độ với SLO, chi phí đơn vị với mức hài lòng.
3. **Tách đo để học khỏi đo để thưởng phạt.** OKR và DORA metrics thuộc loại đo để học.
4. **Đặt metric ở đúng đơn vị phân tích:** DORA theo ứng dụng, benefits theo initiative, IT BSC theo chức năng.
5. **Ưu tiên outcome hơn output, output hơn activity.**

Doc có ba bài tập đi kèm.[^29]
- Xếp mọi chỉ số đang báo cáo vào bảy công cụ, và đánh dấu chỉ số nào gắn với thưởng phạt.
- Viết một IT BSC bốn perspective, mỗi perspective tối đa ba chỉ số, mỗi chỉ số gắn một quyết định.
- Đo năm metric DORA cho một ứng dụng trong ba tháng.

Bài này bổ sung ngưỡng cho quy tắc 1: với mỗi chỉ số, viết ra ngưỡng và quyết định đi kèm ("nếu vượt X thì làm Y"). Chỉ số nào không viết được dòng ấy là ứng viên để gạch.[^32]

Ở ví dụ mở bài, với số giả định[^0], bài này suy ra:[^33]
- Ba mươi chỉ số chủ yếu đo vận hành thường ngày hoặc công sức, nên không trả lời được câu về lợi ích.
- Rà theo các bước trên, chỉ tám chỉ số gắn được với một quyết định.
- Số việc đóng mỗi tháng được giữ để học, không gắn thưởng.

Video đi kèm, tập 09 của Boring But Correct, kể cùng chuyện qua mắt giám đốc công nghệ. Bài này là phần nguồn và lập luận đứng sau video.

[^0]: Giả định · Công ty, ba mươi chỉ số, đề nghị thưởng theo số việc đóng, tám chỉ số gắn quyết định là ví dụ minh họa của tập 09, không đến từ nguồn.
[^1]: Verified · [dora.dev, DORA metrics guide](https://dora.dev/guides/dora-metrics/), doc đọc trực tiếp: năm metric chia throughput (lead time, deployment frequency, failed deployment recovery time) và instability (change fail rate, deployment rework rate).
[^2]: Verified · [dora.dev, "A history of DORA's software delivery metrics"](https://dora.dev/insights/dora-metrics-history/) (02/01/2026): MTTR đổi tên và định nghĩa lại thành failed deployment recovery time năm 2023; rework rate thêm năm 2024.
[^3]: Verified · Như [^2]: báo cáo 2021 gọi "reliability" là metric thứ năm một cách không chính xác.
[^4]: Verified · Như [^2]: 2014 change fail rate không tương quan đủ, IT performance dùng ba metric; 2015 tách throughput và stability; 2018 thêm availability (SDO performance).
[^5]: Verified · [dora.dev guide](https://dora.dev/guides/dora-metrics/): metric vừa leading (organizational performance) vừa lagging (thực hành delivery); dùng theo ứng dụng; cảnh báo Goodhart, one-metric, so sánh khập khiễng.
[^6]: Verified · [Google re:Work, *Set goals with OKRs*](https://rework.withgoogle.com/intl/en/guides/set-goals-with-okrs), doc đọc trực tiếp: 3–5 objective, khoảng 3 KR; thang 0.0–1.0; sweet spot 0.6–0.7; OKR công khai; không đồng nghĩa với đánh giá nhân viên.
[^7]: Nguồn lệch · re:Work ghi "early 2000"; whatmatters.com (theo note chiến lược của cùng bộ doc) ghi 1999. Tin cậy trung bình.
[^8]: Verified (qua snippet) · Van Grembergen & Van Bruggen (1997), qua abstract IJMED 2015 và chương Van Grembergen 2001 (IRMA): bốn perspective corporate contribution, user orientation, operational excellence, future orientation.
[^9]: Verified (qua snippet) · [IRMA abstract](https://www.irma-international.org/chapter/information-technology-governance-through-balanced/23677/), DOI 10.4018/978-1-878289-90-2.ch013: Van Grembergen & Saull (2001), cascade BU BSC → IT BSC phục vụ IT governance, alignment; IT BSC maturity model.
[^10]: Verified · [queue.acm.org](https://queue.acm.org/detail.cfm?id=3454124); DOI 10.1145/3453928 qua snippet: SPACE, sáu tác giả, ACM Queue 19(1), 03/2021, năm chiều.
[^11]: Verified (qua thứ cấp) · Qua [MASEconomics](https://maseconomics.com/goodharts-law-economics-why-targeting-a-measure-destroys-its-value/) như doc ghi: nguyên văn Goodhart 1975 khác câu quen thuộc của Strathern 1997; hai nguồn thứ cấp thống nhất; bản gốc không truy cập được. Tin cậy trung bình.
[^12]: Thực hành ngành (tổng hợp của doc, claim #12) · Năm quy tắc thiết kế §5; ví dụ chỉ số trong bảng IT BSC; OKR cho thay đổi, KPI cho trạng thái ổn định. Tin cậy trung bình.
[^20]: Thân doc nguồn, Tổng quan · Hệ đo nhiều tầng, không phải bộ KPI; mỗi công cụ một câu hỏi; hai lỗi phổ biến; bảng bảy công cụ. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^21]: Thân doc nguồn, §1 · Ba tầng và vị trí từng công cụ; tầng delivery leading cho tầng chiến lược; leading, lagging là tương đối; vòng monitor, evaluate, direct của ISO/IEC 38500; đo không quay về quyết định chỉ là báo cáo. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^22]: Thân doc nguồn, §4 · Định nghĩa từng metric; failed deployment recovery time không tính sự cố bên ngoài; factor instability; không dùng ngành làm lá chắn; SPACE phản đối một metric activity. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^23]: Thân doc nguồn, mục Đánh đổi · Goodhart không có nghĩa là đừng đo; DORA cảnh báo quên cải tiến; OKR thành nghi thức, "not a shared to-do list"; IT BSC hay value stream metrics; benchmark chỉ so team với chính nó. Đây là nhận định của doc. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^24]: Thân doc nguồn, Diễn tiến · BSC của Kaplan & Norton năm 1992; mốc này không có trong bảng kiểm chứng, doc dẫn note chiến lược của cùng bộ doc. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^25]: Thân doc nguồn, §2 · Câu hỏi của bốn perspective IT BSC. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^26]: Suy luận của bài · "Four keys" với MTTR là phiên bản cũ.
[^27]: Giới hạn của bài · ISO/IEC 38500 chỉ được dẫn qua cách doc dùng; bài không kiểm lại văn bản chuẩn.
[^28]: Thân doc nguồn, §3 · Gắn điểm OKR vào thưởng thì quy tắc 0.6–0.7 sụp; OKR cho thay đổi, KPI và SLO cho trạng thái ổn định. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^29]: Thân doc nguồn, Bài tập áp dụng · Ba bài tập. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^30]: Thân doc nguồn, §6 · Goodhart's law và bốn biểu hiện trong IT. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^31]: Thân doc nguồn, §3 và Nguồn · re:Work (2016) là bản lưu trữ. Doc ở trạng thái draft (người dùng đã chấp thuận); thân doc không ghi độ tin cậy riêng.
[^32]: Suy luận của bài · Bước viết ngưỡng và quyết định cho mỗi chỉ số, bổ sung cho quy tắc 1 của doc.
[^33]: Suy luận của bài · Áp khung của doc vào ví dụ giả định của tập 09.
