---
title: "Quản lý nhà cung cấp công nghệ: ma trận Kraljic và rủi ro bên thứ ba theo DORA"
description: "Kraljic (1983), DORA Art. 28–31, register of information, concentration risk, exit plan đã kiểm thử: hai cách phân loại nhà cung cấp và chỗ chúng lệch nhau."
station: 1
published: 2026-11-07
verified: 2026-11-04
sources:
  - title: "Regulation (EU) 2022/2554 (DORA), bản chính thức trên EUR-Lex"
    url: https://eur-lex.europa.eu/eli/reg/2022/2554/oj
  - title: "DORA Art. 28–31, bản chép final text (digital-operational-resilience-act.com)"
    url: https://www.digital-operational-resilience-act.com/Article_28.html
  - title: "Joint Committee of the ESAs (18/11/2025). List of designated critical ICT third-party service providers"
    url: https://www.eiopa.europa.eu/document/download/56b1ca78-5dd2-4d36-8377-47a538eb7558_en?filename=List%20of%20designated%20CTPPs.pdf
  - title: "Commission Implementing Regulation (EU) 2024/2956, register of information templates"
    url: https://www.eba.europa.eu/sites/default/files/2026-01/OJ_L_202402956_EN_TXT.pdf
  - title: "Kraljic, P. (1983). Purchasing Must Become Supply Management. Harvard Business Review"
    url: https://hbsp.harvard.edu/product/83509-PDF-ENG
  - title: "ISO 44001:2017; ISO/IEC 27036-1:2021"
    url: https://www.iso.org/standard/72798.html
---

Phần mềm bán hàng mà công ty thuê báo năm tới tăng giá gấp đôi. Hợp đồng còn ba tháng. Không ai trong công ty biết nếu bỏ nhà cung cấp này thì mất bao lâu. Đó là ví dụ giả định đi kèm bài.[^0] Bài này hỏi: một tổ chức nên phân loại nhà cung cấp công nghệ theo tiêu chí nào; các khung hiện có, từ lý thuyết mua hàng tới luật tài chính châu Âu, trả lời câu nào; và chúng lệch nhau ở đâu.

**Trả lời ngắn:** doc nguồn của bài đọc việc quản lý nhà cung cấp qua hai lăng kính dùng chung một vòng đời.[^21]
- *Lăng kính thương mại* hỏi mua gì, từ ai, với đòn bẩy nào. Neo của lăng kính này là ma trận của Kraljic (1983).[^15][^16]
- *Lăng kính rủi ro* hỏi: nếu nhà cung cấp hỏng hay rút đi, chức năng của ta còn chạy không, và ta có ra được không. Với doanh nghiệp bảo hiểm ở EU, lăng kính này là luật: DORA, áp dụng từ 17/01/2025.[^1][^21]

Hai trục phân loại khác nhau, và cần cả hai.[^22] Điểm then chốt của DORA là thuê ngoài không chuyển trách nhiệm.[^3] Yêu cầu tương đương cho bảo hiểm ngoài EU chưa được doc kiểm chứng.[^20]

## Hai lăng kính trên một vòng đời

Doc nguồn vẽ vòng đời một nhà cung cấp thành sáu bước: chiến lược sourcing, phân loại, chọn và due diligence, hợp đồng, theo dõi, thoát. Mỗi bước được đọc qua cả hai lăng kính.[^22]

| Bước | Lăng kính thương mại | Lăng kính rủi ro (DORA) |
|---|---|---|
| Chiến lược | Chiến lược sourcing[^22] | Strategy on ICT third-party risk, Art. 28(2)[^4] |
| Phân loại | Kraljic: profit impact × supply risk[^16] | Có hỗ trợ chức năng quan trọng (CIF) không; register, Art. 28(3)[^5] |
| Chọn | RFP, so sánh TCO[^22] | Trước khi ký: đánh giá CIF, điều kiện giám sát, rủi ro kể cả concentration, due diligence, conflict of interest, Art. 28(4)[^6] |
| Hợp đồng | Cấu trúc giá, SOW, SLA[^19] | Điều khoản tối thiểu, Art. 30(2) và 30(3)[^9] |
| Theo dõi | Scorecard, quan hệ (ISO 44001)[^22] | Audit theo rủi ro, Art. 28(6); register cập nhật[^22][^24] |
| Thoát | Chuyển giao, đấu thầu lại[^22] | Quyền chấm dứt, Art. 28(7); exit plan đã kiểm thử, Art. 28(8)[^7] |

Bảng ghép từ sơ đồ §1 của doc và các claim tương ứng. Ở cột lăng kính thương mại, ô hợp đồng (cấu trúc giá, SOW, SLA) là thực hành ngành, không có chuẩn neo.[^19]

Doc chỉ ra chỗ hai lăng kính tách nhau.[^22] Kraljic hỏi "món này quan trọng với lợi nhuận và khó mua tới đâu". CIF hỏi "nếu nó hỏng thì chức năng nào bị ảnh hưởng nghiêm trọng". Ví dụ của doc: một SaaS nhỏ xử lý dữ liệu khách hàng, rẻ, nằm ở ô non-critical theo Kraljic, vẫn có thể là CIF theo DORA.[^22]

## Lăng kính thương mại: Kraljic 1983

**Gốc.** Peter Kraljic viết *"Purchasing Must Become Supply Management"* trên *Harvard Business Review* số tháng 9/1983. Luận điểm: purchasing phải thành supply management, một chức năng chiến lược.[^15] Doc ghi thêm rằng ông khi ấy ở McKinsey, Düsseldorf, và rằng bài viết đòi purchasing chuyển từ chức năng tác nghiệp sang chiến lược.[^29] Ma trận 2×2 xếp thứ cần mua theo hai trục, *profit impact* và *supply risk*, thành bốn nhóm.[^16] Doc mô tả ma trận qua nguồn thứ cấp, vì bài gốc có phí. Độ tin cậy của mô tả ma trận vì vậy là trung bình.[^16]

| | Supply risk thấp | Supply risk cao |
|---|---|---|
| **Profit impact cao** | Leverage: dùng sức mua, đấu thầu, thay vendor được | Strategic: đối tác dài hạn, đồng phát triển, quản trị quan hệ |
| **Profit impact thấp** | Non-critical: chuẩn hóa, tự động hóa mua | Bottleneck: đảm bảo nguồn cung, tìm phương án thay, giảm lock-in |

Nguồn bảng: tên bốn nhóm theo claim #15 của doc[^16]; cách xử lý mỗi ô theo thân doc §2[^22].

**Giới hạn khi chuyển sang phần mềm.** Bài gốc viết về vật tư công nghiệp. Các ví dụ IT mà doc đặt vào từng ô là minh họa của doc, không phải của Kraljic.[^22][^19] Ví dụ: laptop và IaaS commodity ở ô leverage; core platform và hyperscaler chạy hệ thống lõi ở ô strategic; vendor ngách duy trì hệ legacy ở ô bottleneck.[^22] Áp ma trận vào phần mềm là một phép loại suy. Bài này giả định rằng, khi áp vào phần mềm, chỗ cần thận trọng là trục supply risk: rủi ro có thể đến từ dữ liệu và tích hợp đã khóa vào vendor hơn là từ khan hiếm hàng như với vật tư. Đây là giả định của bài, chưa có nguồn đỡ.[^28]

**Phê phán.** Theo nguồn thứ cấp mà doc dẫn, Kraljic bị phê phán là chủ quan, vì điểm số dựa vào phán đoán, và tĩnh, vì ma trận chỉ là ảnh chụp tại một thời điểm.[^26] Doc thêm một giới hạn: ma trận nhìn từ phía bên mua, bỏ qua việc vendor có coi ta là khách hàng quan trọng hay không.[^26]

**Quan hệ cho ô strategic.** ISO 44001:2017 là chuẩn management system cho việc nhận diện, phát triển và quản lý quan hệ hợp tác trong hoặc giữa các tổ chức. Chuẩn có Amd 1:2024 và đang được thay bằng ISO/DIS 44001.[^17] Doc xếp nó là công cụ cho góc strategic của ma trận, không dành cho mọi vendor.[^22]

## Lăng kính rủi ro: DORA

**Phạm vi.** DORA là Regulation (EU) 2022/2554, ký 14/12/2022, áp dụng từ 17/01/2025, áp dụng trực tiếp ở mọi Member State.[^1] Đối tượng là các financial entity; doc kiểm chứng phần doanh nghiệp bảo hiểm, tái bảo hiểm và trung gian bảo hiểm.[^2] Từ phạm vi ấy, bài suy ra một công ty bán lẻ không thuộc luật, và dùng DORA như một danh sách kiểm được viết kỹ, không như nghĩa vụ của mọi doanh nghiệp.[^30]

Doc ghi DORA có năm trụ: ICT risk management, incident reporting, resilience testing, ICT third-party risk, information sharing. Ngoài ra còn khung giám sát nhà cung cấp trọng yếu.[^24] Bài này chỉ đi vào trụ third-party.

**Trách nhiệm không chuyển đi.** Art. 28(1)(a): financial entity *"at all times, remain fully responsible"* cho mọi nghĩa vụ, kể cả khi dịch vụ ICT do bên thứ ba vận hành.[^3] Art. 5(2)(a) đặt trách nhiệm cuối cùng về ICT risk ở management body.[^10] Third-party risk là một phần của ICT risk management framework, áp dụng theo proportionality.[^24]

**Trước, trong và sau hợp đồng.** Bảng dưới tóm tắt các nghĩa vụ chính, theo bảng kiểm chứng của doc; văn bản được đọc qua bản chép final text.[^1]

| Điều | Yêu cầu | Nguồn |
|---|---|---|
| 28(2) | Strategy on ICT third-party risk; microenterprise và một số entity được miễn. Theo thân doc, strategy gồm cả policy cho dịch vụ hỗ trợ CIF | [^4][^24] |
| 28(3) | Register of information cho mọi hợp đồng dịch vụ ICT, ở cấp entity, sub-consolidated, consolidated; phân biệt CIF | [^5] |
| 28(4) | Trước khi ký: đánh giá CIF, điều kiện giám sát, rủi ro kể cả concentration, due diligence, conflict of interest | [^6] |
| 28(7) | Bốn trường hợp phải chấm dứt được hợp đồng | [^7] |
| 28(8) | Exit strategy cho mọi dịch vụ hỗ trợ CIF; exit plan phải được kiểm thử | [^7] |
| 29(1) | Concentration risk: nhà cung cấp khó thay thế, hoặc nhiều hợp đồng CIF với cùng nhà cung cấp hay nhóm liên kết | [^8] |
| 30 | Toàn bộ hợp đồng, kể cả SLA, trong một văn bản; 30(2) điều khoản tối thiểu; 30(3) bổ sung cho CIF | [^9] |
| 30(3)(f) | Hợp đồng CIF có exit với *mandatory adequate transition period* | [^10] |

Doc liệt kê chi tiết các điểm chính của Art. 30.[^23]
- Art. 30(2), cho mọi hợp đồng: mô tả dịch vụ và điều kiện subcontract; vị trí xử lý và lưu dữ liệu; truy cập, khôi phục và trả lại dữ liệu ở định dạng dễ dùng khi nhà cung cấp mất khả năng thanh toán hay ngừng kinh doanh; mô tả mức dịch vụ; quyền chấm dứt và thời hạn báo trước.
- Art. 30(3), thêm cho CIF: SLA có chỉ tiêu định lượng và định tính chính xác; nghĩa vụ báo trước; business contingency plan đã kiểm thử; tham gia TLPT; quyền access, inspection và audit không hạn chế; giai đoạn chuyển tiếp bắt buộc.

Một chỗ dễ đọc nhầm: giai đoạn chuyển tiếp nằm ở 30(3), tức chỉ bắt buộc cho hợp đồng hỗ trợ CIF, không phải cho mọi hợp đồng.[^10][^23]

**Register như dữ liệu cho giám sát.** Mẫu register theo Implementing Regulation (EU) 2024/2956, ngày 29/11/2024. Theo recital (1), dữ liệu register phục vụ cả việc chỉ định nhà cung cấp trọng yếu hằng năm.[^12] Doc đọc ba mục đích: quản trị rủi ro nội bộ, giám sát của cơ quan quốc gia, và quy trình chỉ định hằng năm của ESAs.[^24] Hệ quả, theo doc: register của từng hãng bảo hiểm là đầu vào để EU nhìn ra concentration risk của cả ngành.[^24]

**Nhà cung cấp trọng yếu.** Art. 31 cho ESAs (EBA, EIOPA, ESMA) chỉ định CTPP. Tiêu chí gồm tác động hệ thống, mức quan trọng của các entity phụ thuộc, mức phụ thuộc cho CIF và mức khó thay thế.[^24] Danh sách đầu tiên công bố ngày 18/11/2025, gồm 19 nhà cung cấp.[^11] Theo doc, danh sách có hyperscaler, hãng phần mềm và dịch vụ IT, data center, telco và nhà cung cấp dữ liệu thị trường.[^24] Giám sát CTPP không thay trách nhiệm của financial entity, vì Art. 28(1)(a) vẫn áp dụng.[^3][^24]

## Hai trục phân loại: so sánh

| | Kraljic | CIF theo DORA |
|---|---|---|
| Câu hỏi | Ảnh hưởng tới lợi nhuận, rủi ro nguồn cung[^16] | Gián đoạn có ảnh hưởng nghiêm trọng tới hoạt động, tuân thủ, tài chính không[^21] |
| Bản chất | Dựa vào phán đoán của bên mua[^26] | Trục pháp lý quyết định mức yêu cầu hợp đồng[^21] |
| Đơn vị | Thứ cần mua | Chức năng được hỗ trợ |
| Hệ quả | Cách mua: đấu thầu, đối tác, đảm bảo nguồn cung[^22] | Điều khoản tối thiểu, exit plan, register[^9][^7][^5] |
| Giới hạn | Chủ quan, tĩnh, nhìn một phía[^26] | Luật cho financial entity ở EU; doc kiểm phần bảo hiểm[^2]; bảo hiểm ngoài EU chưa kiểm[^20] |

Doc đề nghị một bài tập nối hai trục. Xếp mười hợp đồng IT lớn nhất vào ma trận Kraljic, đánh dấu thêm cột "hỗ trợ CIF?", rồi đếm các ô lệch nhau: non-critical mà là CIF, hoặc strategic mà không phải CIF.[^27] Bài này cho rằng ô lệch thứ nhất đáng ưu tiên kiểm: chi phí thấp dễ làm tổ chức đánh giá thấp tác động nếu dịch vụ gián đoạn.[^31]

## Hợp đồng: phần luật và phần thực hành

Ngoài phần luật, doc ghi cấu trúc thương mại phổ biến là MSA làm khung, SOW cho từng gói việc, và phụ lục SLA. Đây là thực hành ngành, không có chuẩn neo.[^19] Ba kiểu giá chia rủi ro khác nhau:[^19]
- **Time & materials:** rủi ro khối lượng nằm ở bên mua.
- **Fixed price:** rủi ro chuyển sang vendor, nên vendor thường cộng premium và cần phạm vi rõ.
- **Outcome-based:** chỉ dùng được khi kết quả đo được.

Doc nối phần này với commercial case trong Five Case Model. Doc cũng nhắc rằng exit cost và lock-in phải nằm trong TCO ngay từ đầu.[^25]

## Diễn tiến: từ guideline thành luật

- **1983:** Kraljic đưa purchasing lên tầm chiến lược.[^15]
- **2014, rồi 09/2021:** ISO/IEC 27036-1 ấn bản 1, rồi ấn bản 2. 27036 chi tiết hóa các control nhà cung cấp mà ISO/IEC 27002 chỉ nêu chung, cho cả bên mua lẫn bên cung cấp.[^18][^27]
- **2017:** ISO 44001.[^17]
- **01/01/2021:** EIOPA Guidelines on outsourcing to cloud service providers (EIOPA-BoS-20-002), gồm 16 guideline, áp dụng.[^13]
- **14/12/2022:** DORA được ký. Third-party risk từ guideline thành regulation áp dụng trực tiếp.[^1][^27]
- **29/11/2024:** ITS register 2024/2956.[^12]
- **17/01/2025:** DORA áp dụng. Cùng ngày, việc EIOPA rút guideline cloud outsourcing và ICT security có hiệu lực, để tránh trùng với DORA.[^1][^14]
- **18/11/2025:** danh sách 19 CTPP đầu tiên.[^11]
- **Hiện hành (tại 2026-11-04, ngày doc kiểm):** với bảo hiểm ở EU, third-party risk neo vào DORA Art. 28–30, register theo 2024/2956, giám sát CTPP theo Art. 31. Phân loại thương mại vẫn dùng Kraljic.[^27]

Doc ghi DORA Art. 28–30 đã thay EIOPA-BoS-20-002.[^27] Bài suy ra: sau 17/01/2025, tài liệu nội bộ còn dẫn guideline ấy là đang dẫn một hướng dẫn đã bị rút.[^31]

## Chỗ còn phải đọc cẩn thận

- **Đa nhà cung cấp và giá.** Theo doc, giảm concentration risk bằng cách chia khối lượng cho nhiều nhà cung cấp thì mất đòn bẩy giá và tăng chi phí tích hợp. Doc ghi Art. 28(2) chỉ nhắc multi-vendor strategy "where applicable", không bắt buộc.[^32]
- **Exit khỏi hyperscaler có thực tế không.** Với dịch vụ hỗ trợ CIF, luật đòi exit plan được kiểm thử.[^7] Doc nhận định rằng với nền tảng cloud lõi, exit thường là kế hoạch chuyển dần qua nhiều năm. Bài kiểm thử hợp lý là chứng minh lấy được dữ liệu ra và có phương án tối thiểu, không phải di chuyển toàn bộ.[^32] Đây là nhận định của doc, không phải hướng dẫn của cơ quan giám sát.
- **Register vendor và inventory ứng dụng.** Register (Art. 28) nhìn từ phía hợp đồng. Inventory ICT asset và đánh giá legacy hằng năm (Art. 8) nhìn từ phía ứng dụng. Theo doc, hai danh sách phải khớp nhau.[^32]
- **Bên mua ít đòn bẩy.** Một hãng bảo hiểm khó đàm phán quyền audit không hạn chế với hyperscaler. Doc ghi Art. 30(3)(e)(ii) cho phép thỏa thuận *"alternative assurance levels"*. Theo doc, giám sát CTPP được thiết kế một phần để bù sự bất cân xứng này.[^32]
- **Nguồn đọc gián tiếp.** Văn bản DORA được đọc qua bản chép final text, không qua EUR-Lex.[^1] Danh sách CTPP và ITS 2024/2956 đọc qua snippet.[^11][^12] Ma trận Kraljic đọc qua nguồn thứ cấp.[^16]
- **Ngoài EU.** Yêu cầu tương đương cho bảo hiểm ở các nước khác chưa được kiểm chứng.[^20]

## Áp dụng: kiểm một nhà cung cấp trước khi gia hạn

Các bước dưới đây dùng câu hỏi của DORA như danh sách kiểm cho một tổ chức không thuộc luật. Thứ tự bước và cách áp là suy luận của bài.[^33]

1. **Lập sổ mọi hợp đồng công nghệ**, kể cả hợp đồng nhỏ, theo tinh thần register của Art. 28(3).[^5][^33]
2. **Xếp mỗi hợp đồng theo hai trục:** ô Kraljic và câu "nếu hỏng thì chức năng nào ngừng". Đánh dấu các ô lệch.[^16][^22][^27]
3. **Tìm chỗ dồn:** một nhà cung cấp giữ nhiều chức năng quan trọng, hoặc một nhà cung cấp khó thay. Đây là câu hỏi của Art. 29(1).[^8][^33]
4. **Thử lấy dữ liệu ra** khỏi những nhà cung cấp giữ chức năng quan trọng, trước khi đàm phán. Thước đo là lấy được dữ liệu ra và có phương án tối thiểu, theo nhận định của doc.[^32][^33]
5. **Đối chiếu hợp đồng với Art. 30(2):** trả dữ liệu ở định dạng dùng được, quyền chấm dứt, thời hạn báo trước. Với chức năng quan trọng, đòi thêm giai đoạn chuyển tiếp như Art. 30(3)(f).[^9][^10][^23]
6. **Đưa exit cost và lock-in vào TCO** khi so gói giá, thay vì chỉ so giá năm đầu.[^25]
7. **Viết exit plan một trang** cho mỗi SaaS giữ chức năng quan trọng: dữ liệu nào, định dạng gì, ai nhận, mất bao lâu, chi phí bao nhiêu.[^27]

Ở ví dụ mở bài, với số giả định:[^0]
- Bài thử cho thấy dữ liệu khách ra được, nhưng đơn cũ ra thiếu mã hàng của hệ thống kho.
- Đổi hẳn cần hai việc, mà năm tới đội công nghệ chỉ còn chỗ cho một.
- Trong giả định này, phương án bài cho là biện minh được là ký một năm và đòi điều khoản trả dữ liệu cùng giai đoạn chuyển tiếp, thay vì khóa ba năm theo mẫu chỉ vì giá thấp hơn.[^33]

Video đi kèm, tập 08 của Boring But Correct, kể cùng chuyện qua mắt giám đốc công nghệ. Bài này là phần nguồn và lập luận đứng sau video.

[^0]: Giả định · Công ty, phần mềm bán hàng 400 triệu báo 800 triệu, hợp đồng còn ba tháng, kết quả bài thử, hai việc và một chỗ trống, gói ba năm 600 triệu và gói một năm 700 triệu là ví dụ minh họa của tập 08, không đến từ nguồn.
[^1]: Verified · DORA Art. 64, qua [bản chép final text](https://www.digital-operational-resilience-act.com/Article_64.html); [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2022/2554/oj) chặn truy cập tự động: Regulation (EU) 2022/2554, ký 14/12/2022, áp dụng từ 17/01/2025, áp dụng trực tiếp.
[^2]: Verified · DORA Art. 2(1)(n), (o), qua [bản chép](https://www.digital-operational-resilience-act.com/Article_2.html): áp dụng cho insurance và reinsurance undertakings, insurance intermediaries.
[^3]: Verified · DORA Art. 28(1)(a), qua [bản chép](https://www.digital-operational-resilience-act.com/Article_28.html): financial entity luôn chịu trách nhiệm đầy đủ dù dùng dịch vụ ICT bên thứ ba.
[^4]: Verified · DORA Art. 28(2): strategy on ICT third-party risk; trừ microenterprise và một số entity.
[^5]: Verified · DORA Art. 28(3): register of information cho mọi hợp đồng ICT, ở cấp entity, sub-consolidated, consolidated, phân biệt CIF.
[^6]: Verified · DORA Art. 28(4): trước khi ký đánh giá CIF, điều kiện giám sát, rủi ro kể cả concentration, due diligence, conflict of interest.
[^7]: Verified · DORA Art. 28(7), 28(8): bốn trường hợp phải chấm dứt được; exit strategy bắt buộc cho CIF; exit plan phải được kiểm thử.
[^8]: Verified · DORA Art. 29(1), qua [bản chép](https://www.digital-operational-resilience-act.com/Article_29.html): concentration risk là nhà cung cấp khó thay thế, hoặc nhiều hợp đồng CIF với cùng nhà cung cấp hay nhà cung cấp liên kết.
[^9]: Verified · DORA Art. 30, qua [bản chép](https://www.digital-operational-resilience-act.com/Article_30.html): hợp đồng, kể cả SLA, trong một văn bản viết; 30(2) điều khoản tối thiểu; 30(3) bổ sung cho CIF.
[^10]: Verified · DORA Art. 30(3)(f): hợp đồng CIF có exit với mandatory adequate transition period. Art. 5(2)(a), qua [bản chép](https://www.digital-operational-resilience-act.com/Article_5.html): management body chịu trách nhiệm cuối cùng về ICT risk.
[^11]: Verified (qua snippet) · [Joint Committee of the ESAs, List of designated CTPPs](https://www.eiopa.europa.eu/document/download/56b1ca78-5dd2-4d36-8377-47a538eb7558_en?filename=List%20of%20designated%20CTPPs.pdf): công bố 18/11/2025, doc đếm 19 tên.
[^12]: Verified (qua snippet) · [OJ L 2024/2956, bản EBA](https://www.eba.europa.eu/sites/default/files/2026-01/OJ_L_202402956_EN_TXT.pdf), recital (1): mẫu register ngày 29/11/2024; dữ liệu register phục vụ việc chỉ định CTPP hằng năm.
[^13]: Verified (bảng kiểm chứng của doc; danh sách Nguồn của doc ghi PDF đọc qua snippet) · [EIOPA-BoS-20-002](https://www.eiopa.europa.eu/system/files/2020-04/guidelines_on_outsourcing_to_cloud_service_providers_en.pdf), mục lục và đoạn 10: 16 guideline, áp dụng từ 01/01/2021.
[^14]: Verified (qua snippet) · [EIOPA, 19/12/2024](https://www.eiopa.europa.eu/eiopa-revokes-previous-guidelines-avoid-duplications-and-overlaps-dora-2024-12-19_en): rút guideline cloud outsourcing và ICT security & governance, hiệu lực 17/01/2025, để tránh trùng DORA
[^15]: Verified · [HBS Publishing, product 83509](https://hbsp.harvard.edu/product/83509-PDF-ENG): Kraljic, "Purchasing Must Become Supply Management", HBR 09/1983; purchasing phải thành supply management. 
[^16]: Verified (qua thứ cấp) · [Rework, Kraljic Matrix](https://resources.rework.com/libraries/strategic-management/kraljic-matrix), dẫn HBR: hai trục profit impact × supply risk; bốn nhóm strategic, leverage, bottleneck, non-critical. Bài gốc có phí. Tin cậy trung bình.
[^17]: Verified (qua snippet) · [ISO 44001:2017](https://www.iso.org/standard/72798.html): requirements cho collaborative business relationships; Amd 1:2024; đang được thay bằng ISO/DIS 44001.
[^18]: Verified (qua snippet) · [ISO/IEC 27036-1:2021](https://www.iso.org/standard/82905.html): ấn bản 2 thay 2014, phần tổng quan; 27036 chi tiết hóa control nhà cung cấp của 27002, cho cả acquirer lẫn supplier.
[^19]: Thực hành ngành, không có chuẩn neo (tổng hợp của doc) · Ví dụ IT trong ma trận Kraljic; MSA, SOW, SLA; time & materials, fixed price, outcome-based. Tin cậy trung bình.
[^20]: OPEN · Yêu cầu tương đương cho bảo hiểm ngoài EU (ví dụ quy định thuê ngoài của từng nước): doc chưa kiểm chứng.
[^21]: Thân doc nguồn, Tổng quan và Thuật ngữ · Hai lăng kính, câu hỏi và chủ sở hữu của từng lăng kính; với bảo hiểm ở EU lăng kính rủi ro là luật; định nghĩa CIF là trục pháp lý quyết định mức yêu cầu hợp đồng; định nghĩa register, concentration risk, CTPP, exit plan.
[^22]: Thân doc nguồn, §1–§2 · Sơ đồ sáu bước và hai lăng kính; hai trục khác nhau và cần cả hai; ví dụ SaaS nhỏ xử lý dữ liệu khách là CIF; Kraljic ở McKinsey Düsseldorf; cách xử lý từng ô; ví dụ IT là của doc, bài gốc viết về vật tư công nghiệp; ISO 44001 dành cho ô strategic.
[^23]: Thân doc nguồn, §3 · Các điểm chính của Art. 30(2) (a), (b), (d), (e), (h) và Art. 30(3) (a)–(f), như doc liệt kê.
[^24]: Thân doc nguồn, §4 · Năm trụ của DORA; third-party risk trong ICT risk framework theo proportionality; audit theo rủi ro; tiêu chí chỉ định CTPP của Art. 31; các nhóm nhà cung cấp trong danh sách; ba mục đích của register; giám sát CTPP không thay trách nhiệm.
[^25]: Thân doc nguồn, §3 và §5 · Cấu trúc thương mại là đầu vào commercial case trong Five Case Model; exit cost và lock-in phải nằm trong TCO từ đầu.
[^26]: Thân doc nguồn, mục Đánh đổi · Kraljic bị phê phán là chủ quan và tĩnh (doc ghi theo nguồn thứ cấp); ma trận nhìn từ phía bên mua (nhận định của doc).
[^27]: Thân doc nguồn, Diễn tiến và Bài tập áp dụng · Mốc 2014, 2017, 2021, 2022, 2024, 2025 và trạng thái hiện hành tại 2026-11-04; bài tập Kraljic cộng cột CIF; bài tập exit plan một trang.
[^28]: Giả định của bài, chưa có nguồn · Supply risk của phần mềm đến từ dữ liệu và tích hợp nhiều hơn từ khan hiếm hàng.
[^29]: Thân doc nguồn, §2 · Kraljic ở McKinsey, Düsseldorf; purchasing chuyển từ chức năng tác nghiệp sang supply management.
[^30]: Suy luận của bài · Từ phạm vi của DORA, một công ty bán lẻ không thuộc luật; dùng DORA làm danh sách kiểm.
[^31]: Suy luận của bài · Ô lệch non-critical mà là CIF đáng ưu tiên kiểm; tài liệu còn dẫn EIOPA-BoS-20-002 sau 17/01/2025 là dẫn hướng dẫn đã rút.
[^32]: Thân doc nguồn, mục Đánh đổi · Multi-vendor mất đòn bẩy giá, Art. 28(2) "where applicable"; exit khỏi hyperscaler và bài thử hợp lý; register so với inventory (Art. 8); alternative assurance levels, Art. 30(3)(e)(ii). Đây là nhận định của doc.
[^33]: Suy luận của bài · Thứ tự các bước áp dụng; cách áp Art. 28(3), 29(1) cho tổ chức ngoài phạm vi; kết luận của ví dụ mở bài.
