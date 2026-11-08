---
title: "IT governance khác IT management ở đâu, và ai nên quyết việc gì?"
description: "Đọc lại ISO/IEC 38500:2024, ranh giới governance–management của ISACA và nghiên cứu decision rights của MIT CISR: định nghĩa gốc, chỗ lệch, giới hạn, cách dùng."
station: 1
published: 2026-11-07
verified: 2026-11-04
sources:
  - title: "ISO/IEC 38500:2024. Information technology — Governance of IT for the organization, ấn bản 3 (bản preview)"
    url: https://gso-sims-preview-doc-aws.s3-eu-west-1.amazonaws.com/iso-iec-38500-2024-en.html
  - title: "ISO/IEC JTC 1/SC 40 (2024). White paper on the differences between ISO/IEC 38500:2015 and 38500:2024"
    url: https://committee.iso.org/sites/jtc1sc40/home/projects/wg-1/published-wg1/content-left-area/isoiec-sc-40-wg-1-develops-the-s/white-paper-on-the-differences-b.html
  - title: "ISO/TC 309. ISO 37000:2021 Governance of organizations — Guidance"
    url: https://committee.iso.org/ISO_37000_Governance
  - title: "Weill, P. & Woodham, R. (2002). Don't Just Lead, Govern: Implementing Effective IT Governance. MIT CISR WP 326"
    url: https://cisr.mit.edu/publication/MIT_CISRwp326_ImplementingEffectiveITGov
  - title: "Weill, P. (2004). Don't Just Lead, Govern: How Top-Performing Firms Govern IT. MIT CISR WP 341"
    url: https://cisr.mit.edu/publication/MIT_CISRwp341_HowTopPerfFirmsGovIT
  - title: "ISACA Support (2025). Are governance and management activities the responsibility of the BoD?"
    url: https://support.isaca.org/s/article/Governance-and-management-activities-are-the-responsibility-of-the-BoD-1597877237345
  - title: "ISACA. Intellectual Property and Licensing"
    url: https://www.isaca.org/about-us/intellectual-property-and-licensing
---

"IT governance" dễ bị hiểu là cách phòng công nghệ tự quản lý mình: quy trình duyệt yêu cầu, hội đồng kiến trúc, bảng chấm điểm dự án. Khi hai phòng tranh nhau sức làm của đội công nghệ, câu hỏi thường thành "việc này của ai". Ví dụ giả định đi kèm bài: giám đốc kinh doanh muốn làm tiếp một ứng dụng, giám đốc công nghệ muốn dạy thêm người cho hai hệ thống lõi, đội chỉ nhận thêm được một việc trong quý, và ba ngày trôi qua không ai làm gì.[^0] Bài này đọc lại hai nguồn: chuẩn ISO/IEC 38500:2024 và nghiên cứu decision rights của MIT CISR. Mục đích là trả lời hai câu: governance khác management chính xác ở đâu, và "ai quyết việc gì" nên được thiết kế thế nào.

**Trả lời ngắn:** theo ISO/IEC 38500:2024, governance là hệ thống gồm chỉ đạo, giám sát và trách nhiệm giải trình (3.3); governance of IT là hệ thống qua đó việc dùng IT được quản trị (3.4); management hoàn thành mục tiêu *trong* thẩm quyền mà governance đã đặt (3.7).[^3] Đó không phải việc phòng IT tự quản: governance of IT là một domain của governance tổ chức.[^5] Câu hỏi thực dụng của governance là decision rights. Weill và Woodham định nghĩa IT governance là *"specifying the decision rights and accountability framework to encourage desirable behavior in the use of IT"*.[^7] Weill (2004) khảo sát hơn 250 doanh nghiệp ở 23 quốc gia, với năm loại quyết định và sáu archetype người quyết.[^8] Doc nguồn tóm phát hiện: không có thiết kế tốt nhất chung, và governance IT nên được thiết kế để củng cố mục tiêu hiệu quả đã chọn.[^16]

## Gốc khái niệm: từ một chuẩn Úc tới ba ấn bản ISO

Chuẩn quốc tế cho governance of IT có gốc ở Úc. ISO/IEC 38500:2008 do Standards Australia soạn từ AS 8015:2005 và được JTC 1 chấp nhận theo đường fast-track.[^6] Một số mốc chọn lọc từ mục Diễn tiến của doc nguồn (bỏ COBIT 2019, ISO/IEC 38507:2022 và COBIT 7):[^14]

| Năm | Văn bản | Thay đổi chính |
|---|---|---|
| 2002 | Weill & Woodham, MIT CISR WP 326 | IT governance = decision rights + accountability framework[^7] |
| 2004 | Weill, MIT CISR WP 341 | 5 quyết định × 6 archetype, hơn 250 doanh nghiệp[^8] |
| 2005 | AS 8015 | Chuẩn mô tả governance của ICT mà không mô tả hệ thống quản lý[^14] |
| 2008 | ISO/IEC 38500:2008 | Fast-track từ AS 8015; 6 principles[^2][^6]; model evaluate–direct–monitor[^14] |
| 2015 | ISO/IEC 38500:2015 | Ấn bản 2[^14], vẫn 6 principles[^2] |
| 2021 | ISO 37000 | Governance của tổ chức nói chung, 11 principles[^5] |
| 2024-02 | ISO/IEC 38500:2024 | Ấn bản 3: align với ISO 37000, 11 principles, thêm "engage stakeholders", framework lấy từ TR 38502[^1][^2] |

Điểm cần nhớ khi đọc tài liệu thứ cấp: bộ từ vựng "6 principles + evaluate–direct–monitor" thuộc ấn bản 2008 và 2015, nay đã cũ.[^2][^14] Sáu principle cũ là Responsibility, Strategy, Acquisition, Performance, Conformance và Human Behaviour.[^2] Theo cách đọc của bài, tài liệu nào còn dạy sáu principle này là đang dạy bản trước 2024.[^15]

## Định nghĩa: governance, management, và chỗ hay bị đọc sai

Ấn bản 2024 định nghĩa (clause 3, bản preview):[^3]

| Thuật ngữ | Định nghĩa nguyên văn | Tạm dịch |
|---|---|---|
| Governance (3.3) | *"human-based system comprising directing, overseeing and accountability"* | hệ thống do con người vận hành, gồm chỉ đạo, giám sát và trách nhiệm giải trình |
| Governance of IT (3.4) | *"system by which the current and future use of IT is governed"* | hệ thống qua đó việc dùng IT hiện tại và tương lai được quản trị |
| Management (3.7) | *"fulfilment of the organization's objectives within the authority and accountability established by governance"* | hoàn thành mục tiêu của tổ chức trong thẩm quyền và trách nhiệm giải trình mà governance đặt ra |
| Investment (3.6) | *"allocation of resources to achieve defined objectives and other benefits"* | phân bổ nguồn lực để đạt mục tiêu và lợi ích đã định |

Ba chi tiết trong các định nghĩa này thường bị bỏ qua.

**Direct không độc quyền của governing body.** Theo 3.1, direct là truyền đạt mục đích và kết quả mong muốn: đặt objective, strategy, policy. Management *có thể* đặt chúng nếu được ủy quyền.[^3] Bài suy ra rằng ranh giới vì vậy không nằm ở *loại* văn bản (policy hay quy trình), mà ở *nguồn* thẩm quyền: ai giao quyền cho ai.[^15]

**"Use of IT" gồm cả cầu và cung.** Định nghĩa 3.9 ghi rõ use of IT gồm *demand for* và *supply of* IT.[^3] Theo cách đọc của bài, governance of IT vì thế bao cả phía yêu cầu công nghệ, thường là các phòng kinh doanh, chứ không chỉ phía cung cấp là phòng IT.[^15]

**Investment không chỉ là tiền.** 3.6 nói "allocation of resources", không nói "of money".[^3] Theo cách đọc của bài, sức làm của một đội công nghệ là một nguồn lực, nên chia nó cho việc này hay việc kia cũng là một quyết định đầu tư, dù không có đồng nào được chi thêm.[^15]

### Ba công cụ của chuẩn

Chuẩn đưa cho governing body ba công cụ: principles, model và framework. Nó chỉ nêu nguyên tắc, không mô tả triển khai chi tiết.[^16]

- **Principles (5.2–5.12):** 11 principle, trùng tên với 11 principle của ISO 37000. Khác biệt duy nhất về tên là "Value generation" trong 38500 so với "Value generation model" trong 37000.[^2][^5]
- **Model (6):** governance practice gồm engage stakeholders, evaluate, direct, monitor (6.2), tách khỏi management practice (6.3).[^1][^16]
- **Framework (7.2):** sáu element: Direction, Capability, Policy, Delegation, Performance, Accountability (chỉ kiểm được tên mục).[^4]

Với framework, bảng kiểm chứng chỉ xác nhận *tên* các element. Nội dung chi tiết nằm ngoài bản preview.[^4] Vì vậy bài không diễn giải từng element.

Chuẩn cũng định nghĩa monitor (3.8) là rà soát làm cơ sở cho quyết định và điều chỉnh, gồm cả việc tuân thủ luật, quy định và policy.[^3] Ở đây monitor là rà soát để quyết và chỉnh, không phải duyệt lại từng việc đã giao. Đây là cách đọc của bài.[^15]

## Ranh giới governance–management: ISO và ISACA

ISACA, tổ chức đứng sau COBIT, vẽ cùng ranh giới bằng từ ngữ khác: governance là evaluate, direct, monitor; management là plan, build, run, monitor. ISACA ghi rằng ở phần lớn doanh nghiệp, governance thuộc hội đồng quản trị, còn management thuộc ban điều hành dưới CEO.[^9] Doc nguồn diễn giải chi tiết hơn: governance bảo đảm nhu cầu của stakeholder được *evaluate* để ra mục tiêu cân bằng, *direction* được đặt qua ưu tiên và ra quyết định, *performance và compliance* được monitor; management *"plans, builds, runs and monitors activities"* theo hướng governance đặt.[^18]

| | ISO/IEC 38500:2024 | ISACA (COBIT) |
|---|---|---|
| Loại nguồn | Chuẩn quốc tế, chỉ nêu nguyên tắc[^16] | Khung chi tiết hơn[^17], cần license[^12][^13] |
| Governance | Engage stakeholders, evaluate, direct, monitor[^1][^16] | Evaluate, direct, monitor (EDM)[^9][^11] |
| Management | Management practice (6.3), làm trong thẩm quyền governance đặt[^3][^16] | Plan, build, run, monitor[^9] |
| Ai giữ governance | Governing body (hội đồng quản trị hoặc cấp được ủy quyền, theo doc nguồn)[^18] | Thường là hội đồng quản trị[^9] |
| Phiên bản hiện hành | 38500:2024, ấn bản 3[^1] | COBIT 7 theo ISACA; ngày ra mắt còn mâu thuẫn[^10] |

Hai nguồn đồng ý về ranh giới và lệch nhau về độ chi tiết. 38500 cho governing body nguyên tắc; COBIT cho bộ objective để vận hành. Doc nguồn coi hai khung bổ sung cho nhau.[^19] Theo các nguồn thứ cấp, COBIT 2019 có 40 objective, gồm domain governance EDM và bốn domain management APO, BAI, DSS, MEA. Danh sách này chưa được kiểm trên nguồn của ISACA.[^11]

**Hệ quả cho demand management.** Doc nguồn rút ra một phân chia thực dụng. Chấm điểm, xếp hạng và lập kế hoạch năng lực là management. Quyết định *tiêu chí*, *ngưỡng phê duyệt* và *ai được duyệt khoản nào* là governance (direct và delegation). Một hội đồng duyệt demand thường làm cả hai, nên cần ghi rõ quyền nào được ủy quyền từ đâu.[^16]

## Decision rights: năm quyết định, sáu archetype

Định nghĩa của Weill và Woodham (2002) đặt governance vào decision rights và accountability framework.[^7] Bài đọc nó như một câu hỏi thiết kế: ai được quyết loại việc nào, và ai chịu giải trình.[^15] Weill (2004) khảo sát hơn 250 doanh nghiệp ở 23 quốc gia, dùng năm loại quyết định IT và sáu archetype người quyết.[^8]

| Quyết định IT | Câu hỏi |
|---|---|
| IT principles | IT đóng vai trò gì cho doanh nghiệp |
| IT architecture | Chuẩn hóa, tích hợp dữ liệu và ứng dụng ra sao |
| IT infrastructure | Dịch vụ dùng chung nào |
| Business application needs | Cần ứng dụng nghiệp vụ nào |
| IT investment | Đầu tư bao nhiêu, vào đâu, ưu tiên gì |

| Archetype | Ai quyết |
|---|---|
| Business Monarchy | Lãnh đạo kinh doanh cấp cao |
| IT Monarchy | Lãnh đạo IT |
| Federal | Trung tâm cùng các đơn vị kinh doanh |
| Duopoly | IT cùng một nhóm kinh doanh |
| Feudal | Từng đơn vị kinh doanh tự quyết |
| Anarchy | Từng cá nhân hay nhóm nhỏ |

Nguồn hai bảng: thân doc nguồn §3; abstract WP 341 xác nhận có năm quyết định và sáu archetype.[^8][^16]

Abstract ghi: doanh nghiệp dẫn đầu về tăng trưởng phân quyền nhiều hơn, doanh nghiệp dẫn đầu về lợi nhuận tập trung quyền nhiều hơn.[^8] Doc nguồn thêm chi tiết: nhóm tăng trưởng đặt năng lực IT trong các đơn vị kinh doanh; ở nhóm lợi nhuận, lãnh đạo kinh doanh cấp cao ra các quyết định IT lớn; không có thiết kế tốt nhất chung; governance IT nên được thiết kế để củng cố mục tiêu hiệu quả đã chọn và nối với governance các tài sản khác.[^16]

Theo cách đọc của bài, phát hiện về tăng trưởng và lợi nhuận là một tương quan trong một mẫu, không phải quan hệ nhân quả và không phải khuyến nghị cho từng công ty.[^15] Bài này, không phải nguồn, rút ra hệ quả sau. Khi một công ty có mục tiêu tăng trưởng nhưng năng lực IT hiếm, ví dụ chỉ hai người hiểu cả hai hệ thống lõi, thì phân quyền xuống các phòng có thể xé nhỏ đúng thứ hiếm nhất. Mục tiêu nói một hướng, ràng buộc nói hướng kia, và nghiên cứu không phân xử giữa hai thứ ấy.[^15][^0]

Ma trận năm quyết định nhân sáu archetype được doc nguồn dùng như một công cụ vẽ hiện trạng. Ví dụ, quyết định investment có thể theo Federal, còn infrastructure theo IT Monarchy. Doc ghi rõ ví dụ này là minh họa, không phải phát hiện của nghiên cứu.[^16]

## Chỗ còn phải đọc cẩn thận

- **Dữ liệu archetype có từ 2004**, trước cloud, agile và AI. Các mô hình sản phẩm và platform hiện nay đẩy nhiều quyết định xuống team. Doc nguồn đề nghị đọc nó như khung chẩn đoán, không như benchmark hiện hành.[^17]
- **Chỉ đọc được bản preview của 38500:2024.** Foreword, Introduction, clause 1–3, mục lục và bibliography đã được kiểm; nội dung chi tiết của 11 principle và sáu element framework thì không.[^4][^16]
- **COBIT 7 chưa rõ trạng thái.** ISACA gọi COBIT 7 là *"current and actively maintained COBIT offering"*, chỉ phát hành qua Publishing Platform.[^13] Ngày ra mắt thì mâu thuẫn: ISACA Support ghi 2026-11-19, một nguồn thứ cấp ghi 2026-10-27. Vòng đời COBIT 2019 kết thúc 2027-12-31.[^10]
- **License hạn chế việc trích COBIT 7.** Dùng COBIT 7 trong AI systems, sản phẩm, đào tạo hay tư vấn cần license; cá nhân chỉ được dùng để tham khảo.[^12] Bài chọn không tái hiện nội dung COBIT 7 vì hạn chế ấy.
- **Vendor framing.** ISACA vừa soạn khung, vừa bán license, chứng chỉ và đào tạo.[^17]
- **Governance không có nghĩa là thêm hội đồng.** Doc nguồn ghi rằng ranh giới governance–management dễ bị hiểu thành "thêm một tầng duyệt", và nhận định rằng phần lớn quyết định được delegate; governance là đặt hướng, giao quyền và đòi giải trình, không phải duyệt từng demand. Nhận định này không có dòng riêng trong bảng kiểm chứng và chưa kiểm được trong bản preview của 38500.[^17]
- **Principle-based hay prescriptive.** 38500 dễ áp cho mọi tổ chức nhưng không nói làm gì vào thứ Hai. COBIT chi tiết hơn nhiều nhưng nặng, cần license và dễ thành checklist hành chính.[^17]

## Áp dụng: thiết kế quyền quyết cho sức làm của đội công nghệ

Các bước dưới đây ghép 38500, ISACA và Weill. Thứ tự bước, việc coi sức làm là một khoản đầu tư, và các ngưỡng là suy luận của bài, không phải của nguồn.[^15]

1. **Vẽ ma trận hiện trạng.** Năm quyết định ở hàng, archetype ở cột. Đánh dấu chỗ không ai rõ quyền; doc nguồn đề xuất đúng bài tập này.[^16] Bài thêm: đánh dấu cả chỗ hai người cùng nghĩ quyền là của mình.[^15]
2. **Tìm nguồn thẩm quyền của từng quyết định.** Với mỗi ô, hỏi: governing body đã giao quyền này cho ai, bằng văn bản nào? Ngưỡng duyệt tiền thường đã có; quyền chia sức làm thường chưa. Câu sau là quan sát của bài.[^3][^15]
3. **Tách ai đặt tiêu chí khỏi ai áp tiêu chí.** Tiêu chí và ngưỡng là direct và delegation; chấm điểm và xếp hạng là management.[^16]
4. **Chọn archetype theo mục tiêu đã chọn, rồi đối chiếu với ràng buộc của chính mình**, không chép công ty khác hay chép phát hiện năm 2004 như một chuẩn. Đây là gợi ý của bài, dựa trên cách doc nguồn tóm phát hiện và giới hạn dữ liệu 2004.[^15][^16][^17]
5. **Ghi rõ quyền được giao từ đâu**, kể cả khi người xếp việc là một hội đồng.[^16]
6. **Đặt monitor là rà soát kết quả có kỳ hạn**, với thước đo được ghi trước, để làm căn cứ giữ hay sửa luật. Không biến nó thành duyệt lại từng việc.[^3][^15]

Ở ví dụ mở bài, các bước dẫn tới một quyết định cụ thể với số giả định. Hội đồng quản trị ghi thêm quyền cho tổng giám đốc đặt luật chia sức làm. Luật đặt lời hứa giao hàng lên trước doanh thu từ việc mới. Hai giám đốc áp luật để xếp việc mỗi quý; khi bất đồng, tổng giám đốc quyết ngay hôm sau. Quý này đội dạy người thứ ba trước, và ứng dụng lùi một quý.[^0]

Video đi kèm (tập 05 của Boring But Correct) kể cùng chuyện qua mắt giám đốc công nghệ, người là một trong hai bên đang tranh. Bài này là phần nguồn và lập luận đứng sau nó.

[^0]: Giả định · Công ty, các giám đốc, một chỗ trống mỗi quý, ba ngày chờ, hai người hiểu cả hai hệ thống và luật chia là ví dụ minh họa của tập 05, không đến từ nguồn.
[^1]: Verified · [ISO/IEC 38500:2024](https://gso-sims-preview-doc-aws.s3-eu-west-1.amazonaws.com/iso-iec-38500-2024-en.html), Foreword (bản preview chính thức): ấn bản 3 (2024-02), thay 38500:2015; principles được elaborate và align với ISO 37000; model thêm "engage stakeholders"; framework lấy từ TR 38502.
[^2]: Verified · Mục lục preview 38500:2024; mục lục ISO OBP 38500:2008; [white paper ISO SC 40](https://committee.iso.org/sites/jtc1sc40/home/projects/wg-1/published-wg1/content-left-area/isoiec-sc-40-wg-1-develops-the-s/white-paper-on-the-differences-b.html): 2024 có 11 principles (5.2–5.12); bản 2008 và 2015 có 6: Responsibility, Strategy, Acquisition, Performance, Conformance, Human Behaviour.
[^3]: Verified · [ISO/IEC 38500:2024](https://gso-sims-preview-doc-aws.s3-eu-west-1.amazonaws.com/iso-iec-38500-2024-en.html), clause 3 (preview): định nghĩa governance, governance of IT, management, evaluate, direct (3.1, gồm câu management có thể đặt objective, strategy, policy nếu được ủy quyền), monitor, use of IT (gồm demand và supply), investment.
[^4]: Verified (chỉ tên mục) · Mục lục 38500:2024: outcomes (effective performance, responsible stewardship, ethical behaviour); framework 6 element (Direction, Capability, Policy, Delegation, Performance, Accountability). Nội dung chi tiết nằm ngoài bản preview.
[^5]: Verified · 38500:2024 Introduction và clause 2; [ISO TC 309, ISO 37000](https://committee.iso.org/ISO_37000_Governance): governance of IT là domain của governance tổ chức; ISO 37000 là normative reference; 11 principle trùng tên.
[^6]: Verified (qua search snippet) · Foreword 38500:2008 trên ISO OBP (qua search snippet): do Standards Australia soạn từ AS 8015:2005, JTC 1 chấp nhận theo fast-track.
[^7]: Verified · [Weill & Woodham (2002), MIT CISR WP 326](https://cisr.mit.edu/publication/MIT_CISRwp326_ImplementingEffectiveITGov), abstract: định nghĩa IT governance.
[^8]: Verified · [Weill (2004), MIT CISR WP 341](https://cisr.mit.edu/publication/MIT_CISRwp341_HowTopPerfFirmsGovIT), abstract đọc trực tiếp: hơn 250 doanh nghiệp, 23 quốc gia; 5 quyết định; 6 archetype; tăng trưởng gắn với phân quyền, lợi nhuận gắn với tập trung. Chỉ các ý này nằm trong claim.
[^9]: Verified (qua search snippet) · [ISACA Support (2025-07-02)](https://support.isaca.org/s/article/Governance-and-management-activities-are-the-responsibility-of-the-BoD-1597877237345): governance evaluate–direct–monitor; management plan–build–run–monitor; governance thường thuộc hội đồng quản trị, management thuộc ban điều hành.
[^10]: OPEN, mâu thuẫn · Trạng thái COBIT 7: [ISACA IP & Licensing](https://www.isaca.org/about-us/intellectual-property-and-licensing) gọi là "current"; ISACA Support ghi ra mắt 2026-11-19; audit-academy.be (thứ cấp) ghi 2026-10-27. Vòng đời COBIT 2019 kết thúc 2027-12-31 (ISACA Support).
[^11]: Chỉ nguồn thứ cấp (doc ghi Verified, tin cậy trung bình) · COBIT 2019: 40 objective, EDM cùng APO, BAI, DSS, MEA (governancedocs.com; cybersigmacs.com). Tin cậy trung bình; chưa kiểm trên nguồn của ISACA.
[^12]: Verified · [ISACA, Intellectual Property and Licensing](https://www.isaca.org/about-us/intellectual-property-and-licensing): dùng COBIT 7 trong AI systems, sản phẩm, đào tạo, tư vấn cần license; cá nhân chỉ dùng để tham khảo.
[^13]: Thân doc nguồn, §4 · COBIT 7 chỉ phát hành qua Publishing Platform, không có PDF; mọi việc dùng cho mục đích tổ chức hay thương mại cần license.
[^14]: Thân doc nguồn, mục Diễn tiến · Mốc AS 8015 (2005) là chuẩn đầu tiên mô tả governance của ICT mà không mô tả hệ thống quản lý; nhận định "6 principles + E-D-M đã cũ" là của doc.
[^15]: Suy luận của bài · Coi sức làm là một khoản đầu tư theo 3.6; cách đọc monitor; hệ quả "mục tiêu tăng trưởng nhưng năng lực hiếm"; quan sát "ngưỡng tiền thường có, quyền chia sức làm thường chưa"; thứ tự các bước áp dụng.
[^16]: Thân doc nguồn, §1–§3 và Bài tập · Ba công cụ của chuẩn; model 6.2 và 6.3; hai bảng của Weill với tên quyết định, câu hỏi, tên archetype; phát hiện chính như doc tóm (không có thiết kế tốt nhất chung, chi tiết của nhóm tăng trưởng và nhóm lợi nhuận, thiết kế để củng cố mục tiêu); hệ quả cho demand management (tiêu chí, ngưỡng, ủy quyền là governance; chấm điểm, xếp hạng là management; ghi rõ quyền ủy quyền từ đâu); ví dụ Federal và IT Monarchy là minh họa; bài tập vẽ ma trận. Đây là cách doc đọc nguồn, không có dòng riêng trong bảng kiểm chứng.
[^17]: Thân doc nguồn, mục Đánh đổi · Dữ liệu 2004 trước cloud, agile, AI, đọc như khung chẩn đoán; vendor framing của ISACA; governance không phải thêm hội đồng, phần lớn quyết định được delegate; principle-based và prescriptive. Đây là nhận định của doc.
[^18]: Thân doc nguồn, Tổng quan và §1 · Governance thuộc governing body (hội đồng quản trị hoặc cấp được ủy quyền); diễn giải chi tiết ranh giới của ISACA và câu trích "plans, builds, runs and monitors activities".
[^19]: Thân doc nguồn, §4 · "Khung COBIT và ISO/IEC 38500 bổ sung cho nhau: 38500 là nguyên tắc cho governing body, còn COBIT là bộ objective chi tiết để vận hành."
