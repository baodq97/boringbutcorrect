---
title: "AI giúp nhân viên làm nhanh hơn, sao khách vẫn chờ lâu như cũ?"
seoTitle: "AI làm nhân viên nhanh hơn, sao khách vẫn chờ lâu?"
description: "Lợi ích của AI nằm ở nút thắt của dòng giá trị, không ở số giờ tiết kiệm. Đo ở đâu, đo lúc nào để không kết luận sai khi đang ở đáy đường J."
station: 1
published: 2026-11-12
verified: 2026-11-11
sources:
  - title: "Theory of Constraints Institute. Theory of Constraints"
    url: https://www.tocinstitute.org/theory-of-constraints.html
  - title: "Lean Production. Theory of Constraints (năm bước tập trung)"
    url: https://www.leanproduction.com/theory-of-constraints/
  - title: "Lean Enterprise Institute. Lean Lexicon: Value stream"
    url: https://www.lean.org/lexicon-terms/value-stream/
  - title: "Kingman, J. F. C. (1961). The single server queue in heavy traffic. Math. Proc. Cambridge Philos. Soc. 57(4)"
    url: https://doi.org/10.1017/S0305004100036094
  - title: "Little, J. D. C. (1961). A Proof for the Queuing Formula: L = λW. Operations Research 9(3)"
    url: https://ideas.repec.org/a/inm/oropre/v9y1961i3p383-387.html
  - title: "Noy, S. & Zhang, W. (2023). Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence. MIT working paper"
    url: https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1.pdf
  - title: "Brynjolfsson, E., Li, D. & Raymond, L. (2023). Generative AI at Work. NBER WP 31161"
    url: https://www.nber.org/papers/w31161
  - title: "DORA (2025). State of AI-assisted Software Development 2025"
    url: https://dora.dev/research/2025/dora-report/
  - title: "DORA (2026). ROI of AI-assisted Software Development, v. 2026.1"
    url: https://dora.dev/ai/
  - title: "Faros AI (2025). The AI Productivity Paradox Report 2025"
    url: https://www.faros.ai/blog/ai-software-engineering
  - title: "Atlassian (2025). State of Developer Experience Report 2025"
    url: https://www.atlassian.com/blog/developer/developer-experience-report-2025
  - title: "METR (2025). Becker và cộng sự, arXiv 2507.09089"
    url: https://arxiv.org/abs/2507.09089
  - title: "Klarna (27/02/2024). Klarna AI assistant handles two-thirds of customer service chats in its first month"
    url: https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/
  - title: "Ivanova, I. (09/05/2025). As Klarna flips from AI-first to hiring people again... Fortune"
    url: https://fortune.com/2025/05/09/klarna-ai-humans-return-on-investment/
  - title: "Microsoft Learn. Copilot Dashboard"
    url: https://learn.microsoft.com/en-us/viva/insights/org-team-insights/copilot-dashboard
  - title: "Brynjolfsson, E., Rock, D. & Syverson, C. (2021). The Productivity J-Curve. AEJ: Macroeconomics 13(1); NBER WP 25148"
    url: https://www.nber.org/system/files/working_papers/w25148/w25148.pdf
  - title: "McElheran, K., Yang, M.-J., Kroff, Z. & Brynjolfsson, E. (2025). The Rise of Industrial AI in America. Census CES WP 25-27"
    url: https://mackinstitute.wharton.upenn.edu/wp-content/uploads/2025/04/McElheran-et-al.-Industrial_AI_April-20-2025.pdf
  - title: "HM Treasury (2026). Guidance on Developing Business Cases for Projects and Programmes"
    url: https://www.gov.uk/government/publications/guidance-on-developing-business-cases
  - title: "HM Treasury (2026). The Green Book 2026"
    url: https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026
---

Một ngân hàng cho doanh nghiệp nhỏ vay vốn lưu động. Ngân hàng mua một công cụ AI đọc báo cáo tài chính và sao kê của khách, rồi viết sẵn bản nháp *đề xuất cho vay*: văn bản chuyên viên lập cho cấp có thẩm quyền, gồm phân tích tài chính và đề nghị cho vay bao nhiêu, điều kiện gì. Ba tháng sau, dashboard của công cụ báo mỗi tuần tiết kiệm 12 ngày công. Nhưng khách vẫn chờ tiền lâu như cũ, có tuần còn lâu hơn. Đây là một mô hình dựng để minh họa, không phải chuyện của ngân hàng nào; mọi con số của nó là giả định và được tính ra ở dưới.[^0]

**Trả lời ngắn:** AI tăng tốc một bước của quy trình. Doanh nghiệp chỉ được lợi khi bước đó là nút thắt, hoặc khi nút thắt phía sau nhận nổi phần việc AI đẩy thêm. Các nghiên cứu bài đã đọc đều đo AI ở bước *soạn*; bước *duyệt* phía sau gắn với thẩm quyền của một người, nên không nhanh lên theo. Việc soạn nhanh hơn thành hàng đợi trước người duyệt, và hàng đợi gần đầy thì thời gian chờ tăng vọt.[^25] Vì vậy lợi ích phải đo ở đầu ra của cả dòng giá trị (khách nhận được gì, sau bao lâu), không ở mức dùng AI. Và phải lấy mốc trước khi bật công cụ, chỉ kết luận khi chỉ số ở nút thắt đã đổi chiều, vì giai đoạn đầu thường tệ đi trước khi tốt lên. Không nguồn nào cho biết giai đoạn tệ đi ấy sâu bao nhiêu hay kéo dài bao lâu.[^20]

## Tăng tốc một bước không làm cả quy trình nhanh hơn

Theory of Constraints (TOC) bắt đầu từ một câu: *"Every system has a limiting factor or constraint. Focusing improvement efforts to better utilize this constraint is normally the fastest and most effective way to improve profitability."* Tạm dịch: mọi hệ thống có một yếu tố giới hạn; dồn cải tiến vào chỗ đó thường là cách nhanh nhất để tăng lợi nhuận. Cải tiến ở chỗ khác chỉ sinh tồn kho: *"if sales orders are the constraint, optimizing production output can result in overproduction."*[^1]

TOC đưa ra năm bước tập trung: Identify (tìm nút thắt), Exploit (tận dụng hết nút thắt bằng nguồn lực sẵn có), Subordinate (cho mọi bước khác phục vụ nút thắt), Elevate (nâng năng lực nút thắt), rồi Repeat (nút thắt dời đi, làm lại).[^2] Áp vào một khoản đầu tư AI, bước trái trực giác nhất là Subordinate. Nếu bước soạn không phải nút thắt, phần tốc độ dư của nó không có giá trị, nên có lúc phải *cố ý* không dùng hết tốc độ của AI. Đó là cách đọc của bài, không phải câu của nguồn.[^25]

### Vì sao chờ tăng vọt chứ không tăng đều

Hai công thức của lý thuyết hàng đợi giải thích phần còn lại. Little's Law: số việc dở dang bằng lượng việc ra mỗi ngày nhân thời gian mỗi việc nằm trong hệ thống. Cùng lượng việc ra mà việc dở dang tăng thì khách chờ lâu hơn.[^3] Kingman: thời gian chờ ở một bước tỉ lệ với ρ/(1−ρ), trong đó ρ là *mức tải*, tức lượng việc đến chia cho năng lực xử lý của bước đó.[^3]

| Mức tải của bước | 50% | 70% | 80% | 87,5% | 90% | 95% |
|---|---|---|---|---|---|---|
| Thời gian chờ, tính theo số lần thời gian xử lý | 1 | 2,3 | 4 | 7 | 9 | 19 |

Bảng tính với hệ số biến động bằng 1, trường hợp đơn giản nhất.[^3] Đường cong phẳng ở dưới 70% rồi dốc đứng sau 85%. Một mức tăng vừa phải lượng việc đổ vào có thể đẩy người duyệt từ vùng phẳng sang vùng dốc. Đó là toàn bộ cơ chế của bài.

## Mô hình: AI giúp lập đề xuất cho vay

Quay lại ngân hàng ở đầu bài. Dòng giá trị có ba giai đoạn khách thấy được; giai đoạn giữa phóng to thành sáu hành động.

<figure class="fig" aria-label="Dòng giá trị cho vay có ba giai đoạn: tiếp nhận nhu cầu, thẩm định và cấp vốn, quản lý khoản vay. Giai đoạn giữa gồm tiếp nhận đủ giấy tờ, lập đề xuất cho vay, chờ phê duyệt, phê duyệt, ký hợp đồng, giải ngân. AI đặt ở bước lập đề xuất; nút thắt là phê duyệt.">
<div class="vmap vmap-three">
<p class="vmap-l">Value stream<small>giai đoạn khách thấy</small></p>
<p class="vmap-s">Tiếp nhận nhu cầu vốn</p>
<p class="vmap-s">Thẩm định và cấp vốn<small>phóng to bên dưới</small></p>
<p class="vmap-s">Quản lý khoản vay</p>
<p class="vmap-l">Lean<small>mọi hành động</small></p>
<div class="vmap-steps"><span>Tiếp nhận, đủ giấy tờ</span><span>Lập đề xuất cho vay</span><span class="wait">Chờ phê duyệt</span><span>Phê duyệt</span><span>Ký hợp đồng</span><span>Giải ngân</span></div>
<p class="vmap-l">Đặt ở đâu<small>trong mô hình</small></p>
<p class="vmap-a vmap-w hit">AI viết nháp ở bước lập đề xuất; nút thắt là người có thẩm quyền phê duyệt</p>
</div>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Hai độ phóng của cùng một khoản vay. Ô nét đứt là chờ, không tạo giá trị. Tên giai đoạn, hành động và vị trí nút thắt là giả định của mô hình.</figcaption>
</figure>

Hai độ phóng này có tên riêng. Theo Lean Enterprise Institute, value stream là *"All of the actions, both value-creating and nonvalue-creating"* để đưa sản phẩm tới khách. Nút thắt được *tìm* ở mức hành động này. Còn lợi ích được *báo cáo* ở mức giai đoạn, nơi khách nhận giá trị.[^26]

### Trước khi bật AI

Tham số giả định: mỗi tuần 14 hồ sơ được trình lên; cấp phê duyệt xử lý được 20 hồ sơ mỗi tuần, mỗi hồ sơ mất 0,25 ngày đọc. Mức tải là 70%, nên theo Kingman mỗi hồ sơ chờ khoảng 2,3 × 0,25 ≈ 0,58 ngày.[^0]

| Bước | Làm (ngày) | Chờ (ngày) | Chờ vì gì |
|---|---|---|---|
| Tiếp nhận, đủ giấy tờ | 1,0 | 2,0 | Khách bổ sung giấy tờ |
| Lập đề xuất cho vay | 2,0 | 0,5 | Chuyên viên đang làm hồ sơ khác |
| Phê duyệt | 0,25 | 0,58 | Hàng đợi trước người duyệt |
| Ký hợp đồng, tài sản bảo đảm | 0,5 | 1,5 | Lịch ký và thủ tục |
| Giải ngân | 0,25 | 1,0 | Kiểm chứng từ trước khi chuyển tiền |
| **Tổng** | **4,0** | **5,58** | |

Thời gian từ lúc khách nộp đủ hồ sơ tới lúc tiền vào tài khoản là khoảng 9,6 ngày. Phê duyệt chưa phải chỗ chờ lâu nhất. Nhưng người duyệt đang ở mức tải 70%, sát vùng dốc. Câu cần hỏi không chỉ là "chờ ở đâu lâu nhất", mà còn là "bước nào còn ít dư địa nhất".[^0]

### Ba kịch bản sau khi bật AI

- **Chỉ bật công cụ.** Lập đề xuất nhanh hơn 35% (2,0 xuống 1,3 ngày), số hồ sơ trình lên tăng 25%, người duyệt đọc mỗi hồ sơ mất thời gian như cũ. Mức tải lên 87,5%, chờ duyệt lên 1,75 ngày.
- **Chỉ bật công cụ, đề xuất khó kiểm hơn.** Người duyệt mất thêm 20% thời gian mỗi hồ sơ, vì phải đối chiếu số liệu AI trích với chứng từ gốc. Năng lực duyệt tụt xuống 16,7 hồ sơ mỗi tuần, ít hơn 17,5 hồ sơ đổ vào. Hàng đợi không bao giờ ổn định: mỗi tuần dồn thêm gần một hồ sơ.
- **Bật công cụ và đổi cách duyệt.** Khoản nhỏ, rủi ro thấp đi luồng duyệt nhanh ở cấp thẩm quyền thấp hơn; mỗi con số trong đề xuất dẫn tới chứng từ gốc; AI đánh dấu điểm bất thường cho người duyệt. Đọc mỗi hồ sơ còn 0,2 ngày, năng lực 25 hồ sơ mỗi tuần, mức tải về 70%, chờ duyệt còn 0,47 ngày.

Mọi tỉ lệ trong ba kịch bản là giả định.[^0]

| | Trước | Chỉ bật công cụ | Đề xuất khó kiểm hơn | Đổi cách duyệt |
|---|---|---|---|---|
| Hồ sơ trình lên mỗi tuần | 14 | 17,5 | 17,5 | 17,5 |
| Mức tải cấp phê duyệt | 70% | 87,5% | khoảng 105% | 70% |
| Chờ phê duyệt (ngày) | 0,58 | 1,75 | tăng mãi | 0,47 |
| **Thời gian tới tiền (ngày)** | **9,6** | **10,1** | **tăng mãi** | **8,7** |
| Hồ sơ giải ngân mỗi tuần | 14 | 17,5 | 16,7 | 17,5 |
| **"Giờ tiết kiệm" trên dashboard** | — | **12 ngày công/tuần** | **12 ngày công/tuần** | **12 ngày công/tuần** |

Đọc bảng theo hàng cuối trước. Dashboard báo cùng một con số ở cả ba kịch bản: 0,7 ngày bớt được mỗi hồ sơ, nhân 17,5 hồ sơ.[^0] Chỉ số mức dùng không phân biệt được kịch bản thành công với kịch bản hàng đợi nổ.

Bốn điều khác rút ra từ bảng, đều là đọc của bài trên mô hình:[^25]

1. **Giải ngân nhiều hơn mà khách chờ lâu hơn.** Khi chỉ bật công cụ, số khoản giải ngân tăng 25% nhưng thời gian tới tiền tăng từ 9,6 lên 10,1 ngày.
2. **Lập đề xuất nhanh hơn 35% chỉ làm cả quy trình nhanh hơn khoảng 9%, và chỉ khi làm đúng.** Bước này chiếm 2 trên 9,6 ngày; phần còn lại là chờ khách, chờ ký, chờ kiểm chứng từ. Lợi ích phải ước tính trên cả dòng giá trị, không trên bước có AI.
3. **Khác biệt nằm ở quyết định về thẩm quyền, không ở công cụ.** Kịch bản thứ tư không dùng AI tốt hơn kịch bản thứ hai. Nó đổi ma trận phê duyệt và chuẩn hóa mẫu đề xuất. Bước Elevate trong kinh doanh thường là đổi quyền quyết định, không phải mua thêm công nghệ.
4. **Sau đó nút thắt dời đi.** Chỗ chờ lâu nhất bây giờ là chờ khách bổ sung giấy tờ, 2 ngày. Khoản đầu tư tiếp theo nên nhìn vào đó, và có thể không cần AI, chỉ cần danh mục giấy tờ rõ từ đầu.

## Bằng chứng nói gì

### Ở mức một nhiệm vụ văn phòng

Noy và Zhang (MIT, 02/03/2023, bản working paper chưa bình duyệt) giao nhiệm vụ viết cho 444 người đi làm có bằng đại học, thuộc các nghề *"marketers, grant writers, consultants, data analysts, human resource professionals, and managers"*, rồi chia ngẫu nhiên một nửa được dùng ChatGPT. Kết quả: *"time taken decreases by 0.8 SDs and output quality rises by 0.4 SDs"*. Và ChatGPT *"restructures tasks towards idea-generation and editing and away from rough-drafting"*: việc dời từ soạn nháp sang lên ý tưởng và biên tập.[^4]

Câu thứ hai là cơ chế của bài ở mức một người: soạn nháp giảm, biên tập và kiểm tăng. Khi người kiểm là *người khác* (cấp duyệt, pháp chế, quản lý trực tiếp), phần việc tăng ấy dồn sang họ. Đó là suy luận của bài từ nghiên cứu, không phải kết luận của tác giả.[^25]

### Ở mức cả quy trình: số đo hiện có chủ yếu từ phát triển phần mềm

Phần mềm có sẵn dấu thời gian cho từng bước, nên đây là nơi có số đo ở mức quy trình nhiều nhất. Hiện tượng có cùng dạng với mô hình cho vay, với code ở vị trí đề xuất cho vay và review ở vị trí phê duyệt. Phép ứng này là của bài.[^25]

- DORA (Google) mô tả đúng kịch bản thứ hai: *"a developer might write code significantly faster using an automated assistant, but that code simply piles up in front of manual security reviews or brittle deployment pipelines."* DORA gọi phần việc kiểm thêm là *verification tax*: *"the tools increase the sheer volume of code produced, which expands the overall review burden"*.[^5]
- Faros AI, công ty bán phần mềm đo hiệu quả kỹ thuật, phân tích dữ liệu của khoảng 10.000 lập trình viên: đội dùng AI nhiều *"complete 21% more tasks and merge 98% more pull requests, but PR review time increases 91%, revealing a critical bottleneck: human approval."* Ở cấp công ty: *"Any correlation between AI adoption and key performance metrics evaporates at the company level."* Đây là dữ liệu tương quan, do một vendor công bố.[^6]
- DORA 2025: *"AI adoption now improves software delivery throughput, a key shift from last year. However, it still increases delivery instability."* Và: *"AI creates localized pockets of productivity that are often lost to downstream chaos."*[^7]
- Atlassian khảo sát 3.500 người (tự báo cáo): *"developers saving 10 hours a week using AI and losing 10 hours a week to inefficiencies."*[^8]

Bài chưa tìm được số đo tương đương ở mức quy trình cho tín dụng, bảo hiểm hay mua hàng.[^24]

### Bằng chứng ngược, và nó cũng khớp

Khi AI đặt *đúng tại* nút thắt, đầu ra tăng thật. Brynjolfsson, Li và Raymond nghiên cứu 5.179 nhân viên chăm sóc khách hàng được AI gợi ý câu trả lời ngay ở bước giải quyết yêu cầu. Thước đo là số vấn đề giải được mỗi giờ, tức đầu ra của chính bước nút thắt: tăng *"14% on average, including a 34% improvement for novice and low-skilled workers but with minimal impact on experienced and highly skilled workers."* Nghiên cứu cũng ghi AI *"improves customer sentiment, increases employee retention"*.[^9]

Cùng một loại công cụ cho kết quả trái ngược vì vị trí nút thắt khác nhau, không phải vì công cụ tốt hay dở. Đó là cách bài đọc chung các nguồn.[^25] DORA tóm lại bằng một câu: *"We don’t measure AI by the code it writes but by the bottlenecks it clears."*[^10]

## Đo ở đâu

### Bốn loại chỉ số, bốn vai trò

Benefits Dependency Network của Cranfield nối công nghệ với lợi ích qua các thay đổi trong cách làm. Bài dùng bốn lớp theo một cách trình bày phổ biến; tên các lớp chỉ thấy ở nguồn thứ cấp, nguồn gốc xác nhận cấu trúc ends, ways, means.[^12] Cranfield và định nghĩa lợi ích nằm ở bài [Business case cho đầu tư công nghệ nên kiểm gì trước khi duyệt?](/ho-so-dau-tu-cong-nghe-truoc-khi-duyet) Đặt mỗi chỉ số của mô hình vào đúng lớp của nó:

| Chỉ số | Lớp | Có phải lợi ích? | Trong mô hình |
|---|---|---|---|
| Số license, số đề xuất AI viết nháp, tỉ lệ dùng, token, "giờ tiết kiệm" | Công nghệ đã được dùng | Không. Token là chi phí | 12 ngày công/tuần, như nhau ở mọi kịch bản |
| Ma trận thẩm quyền mới, mẫu đề xuất chuẩn hóa, quy tắc phân luồng | Thay đổi để làm được | Không, nhưng thiếu nó thì không có lợi ích | Chỉ có ở kịch bản đổi cách duyệt |
| Mức tải và thời gian chờ ở cấp phê duyệt, tỉ lệ đề xuất bị trả lại | Thay đổi trong vận hành, tín hiệu sớm | Chưa | 70% lên 87,5%, hoặc giữ 70% |
| Thời gian tới tiền, số khoản giải ngân, tỉ lệ khách bỏ ngang | Lợi ích | Có, khi có người chịu và mốc so sánh | 9,6 xuống 8,7 ngày |

Bảng do bài dựng; việc xếp chỉ số vào lớp là đọc của bài.[^25]

<figure class="fig fig-benefit">
<ol class="chain">
<li><p class="chain-h">Công nghệ</p><p>AI viết nháp đề xuất cho vay</p><p class="chain-note">Dashboard đo ở đây</p></li>
<li><p class="chain-h">Thay đổi cách duyệt</p><p>Phân luồng theo rủi ro, mẫu đề xuất dẫn chứng từ gốc</p><p class="chain-note">Phần hay bị bỏ qua</p></li>
<li class="hit"><p class="chain-h">Lợi ích</p><p>Khách nhận tiền sớm hơn</p><dl class="chain-tags"><div><dt>Chỉ số</dt><dd>Trung vị thời gian tới tiền mỗi tuần</dd></div><div><dt>Mốc</dt><dd>9,6 ngày, đo trước khi bật công cụ</dd></div><div><dt>Chịu trách nhiệm</dt><dd>Giám đốc khối khách hàng doanh nghiệp nhỏ</dd></div><div><dt>Chỉ số chặn</dt><dd>Nợ quá hạn của nhóm hồ sơ duyệt luồng nhanh</dd></div></dl></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">2</span></span> Từ công nghệ tới lợi ích trong mô hình. Ba thẻ đầu là những gì HM Treasury yêu cầu cho mỗi lợi ích; thẻ chỉ số chặn là bài đề xuất thêm. Nội dung điền vào là giả định.</figcaption>
</figure>

HM Treasury yêu cầu mỗi lợi ích có loại, người hưởng, thước đo, mốc so sánh và một người chịu trách nhiệm ghi trong benefits register.[^11] Ba lỗi hay gặp khi ghi dòng này cho AI:

- **Ghi "12 ngày công mỗi tuần" là tiền tiết kiệm.** HM Treasury xếp loại này là *non-cash-releasing*: tiền tệ hóa được nhưng không đổi thu chi, trừ khi chi phí thật sự giảm.[^11] Mô hình còn cho thấy thêm một tầng: giờ tiết kiệm ở bước không phải nút thắt có thể chỉ làm hàng đợi dài thêm.[^25]
- **Người chịu trách nhiệm là người quản lý công cụ.** Người đó kiểm soát lớp công nghệ, không kiểm soát thời gian tới tiền hay ma trận thẩm quyền.[^25]
- **Không có chỉ số chặn.** Nếu luồng duyệt nhanh duyệt sai, lợi ích về thời gian được trả bằng nợ xấu, và nợ xấu hiện ra muộn hơn nhiều so với lợi ích.[^25]

### Khi thước đo chỉ có một chiều

Klarna (27/02/2024) công bố trợ lý AI chăm sóc khách hàng làm *"the equivalent work of 700 full-time agents"*. Thông cáo cũng có chỉ số chất lượng của tháng đầu: thời gian giải quyết *"less than 2 mins compared to 11 mins previously"*, *"25% drop in repeat inquiries"*, và *"on par with human agents in regard to customer satisfaction score"*.[^13] Tháng 05/2025, CEO nói với Bloomberg, theo Fortune thuật lại: *"As cost unfortunately seems to have been a too predominant evaluation factor when organizing this, what you end up having is lower quality"*.[^14]

Klarna *có* chỉ số chặn, nhưng là số của tháng đầu, do chính họ công bố. Một năm sau, chính CEO nói chất lượng thấp hơn. Bài đọc ra ba điều: chỉ số chặn phải được đo liên tục; người chịu trách nhiệm chất lượng nên khác người chịu trách nhiệm chi phí; và lượt khách hỏi lại phải tính vào thời gian phục vụ. Không có nguồn cho biết Klarna đã đo gì sau tháng đầu.[^25]

### Dashboard của vendor và cảm nhận của nhân viên

Copilot Dashboard của Microsoft chia chỉ số thành bốn nhóm: *"Readiness, adoption, impact, and sentiment"*.[^15] Nó *có* nhóm impact, nên không thể nói nó chỉ đo mức dùng. Nhưng ba trong bốn nhóm thuộc lớp công nghệ, và impact đo hành vi trong công cụ, không đo ở đầu ra của dòng giá trị. Đó là cách bài xếp, không phải mô tả của Microsoft.[^25]

Khảo sát "nhân viên thấy AI giúp nhanh hơn" cũng không thay được số đo. METR thử nghiệm ngẫu nhiên với 16 lập trình viên giàu kinh nghiệm, trên công cụ đầu năm 2025: *"developers expected AI to speed them up by 24%, and even after experiencing the slowdown, they still believed AI had sped them up by 20%"*, trong khi số đo là chậm hơn 19%. Con số 19% không phải số hiện hành, vì năm 2026 METR đã đổi thiết kế thí nghiệm; điều còn dùng được là khoảng cách giữa cảm nhận và số đo.[^16] DORA cũng ghi phần lớn bằng chứng năng suất của họ là cảm nhận: *"more than 80% of survey respondents reported a perception that AI had increased their productivity"*.[^17]

## Đo lúc nào: đường J

### Vì sao tệ đi trước khi tốt lên

Brynjolfsson, Rock và Syverson viết rằng công nghệ đa dụng cần *"co-invention of new processes, products, business models and human capital"*. Phần đầu tư vô hình này đo kém, nên năng suất *"initially dipping while the investment rate in unmeasured capital is larger"*, rồi mới tăng: hình chữ J.[^18] Trong mô hình cho vay, phần "đồng phát minh" ấy là ma trận thẩm quyền mới, mẫu đề xuất chuẩn hóa, quy tắc phân luồng. Không cái nào nằm trong giá license.[^25]

McElheran, Yang, Kroff và Brynjolfsson (20/04/2025) dùng dữ liệu khoảng 28.500 nhà máy Mỹ: *"We find causal evidence of J-curve-shaped returns, where short-term performance losses precede longer-term gains."* Họ ghi nhận AI *"increases work-in-progress inventory"*, tức việc dở dang tăng, đúng là hàng đợi của mô hình nhìn ở cấp nhà máy. Thiệt hại *"concentrating among older businesses"*, và ở nhóm này *"abandonment of structured production-management practices accounts for roughly one-third of these losses"*. Hai giới hạn: đây là AI công nghiệp, không phải GenAI; và tác giả nói rõ *"we do not directly estimate how long it takes for the J-curve to reverse direction"*.[^19]

DORA áp đường J vào phần mềm: *"a temporary productivity dip and period of instability associated with early adoption"*, *"with the depth of the decline directly correlating to the magnitude of the change"*. DORA cũng nói kích thước và *"the duration before growth accelerates remain unpredictable"*.[^20]

### Những con số không nên trích như dữ liệu

- Mức sụt 15% trong 3 tháng của DORA là *giả định đầu vào* của máy tính ROI mẫu. DORA tự dặn: *"Treat these calculations as a high-uncertainty estimate"*.[^21]
- Thời gian hoàn vốn 6–9 tháng cho đội nhỏ và 12–18 tháng cho triển khai lớn là "rule of thumb" để đặt mục tiêu, không phải số đo.[^21]

### Lợi ích đến nhanh, rủi ro hiện ra chậm

Trong mô hình cho vay, thời gian tới tiền đổi ngay khi cách duyệt đổi. Nợ quá hạn của những khoản đi luồng duyệt nhanh chỉ hiện ra khi các khoản đó tới kỳ trả nợ. Bồi thường bảo hiểm có thể có cùng dạng: chi trả nhanh thấy ngay, chi trả sai thấy muộn hơn. Hệ quả cho lịch đo là mốc kết luận phải chờ chỉ số chặn chậm nhất, không chỉ chờ lợi ích. Đây là suy luận của bài, không có nguồn đo.[^25]

### Lịch đo

<figure class="fig fig-day" aria-label="Bốn mốc đo theo thời gian: trước khi duyệt, trước khi bật công cụ, giai đoạn đầu chỉ chẩn đoán, và kết luận khi chỉ số ở nút thắt đã đổi chiều và chỉ số chặn chậm nhất đã có số.">
<ol class="tower">
<li>Trước khi duyệt<small>kế hoạch đánh giá: chọn nút thắt, lợi ích, chỉ số chặn, điều kiện dừng</small></li>
<li>Trước khi bật công cụ<small>lấy mốc: thời gian tới tiền, mức tải và chờ ở cấp duyệt, tỉ lệ trả lại, nợ quá hạn</small></li>
<li>Giai đoạn đầu<small>chỉ chẩn đoán: tín hiệu sớm có đổi không, thay đổi cách duyệt có xảy ra không; chưa kết luận lợi nhuận</small></li>
<li class="hit">Kết luận<small>khi chỉ số ở nút thắt đã đổi chiều qua nhiều kỳ và chỉ số chặn chậm nhất đã có số</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">3</span></span> Lịch đo đọc từ trên xuống. Mốc đầu theo Green Book; mốc hai và ba theo DORA; điều kiện kết luận là đề xuất của bài.</figcaption>
</figure>

Mỗi mốc có neo. Green Book 2026 yêu cầu *"develop an evaluation plan as soon as they have identified a preferred option"*, trước khi trình duyệt cuối.[^22] DORA hỏi thẳng *"Do you have a baseline?"*, và coi các chỉ số vận hành là *"operational early warning system"* cần theo dõi *"before looking for lagging financial returns"*.[^23] Điều kiện kết luận ở mốc cuối là đề xuất của bài.[^25]

### Ở mốc rà soát: đang ở đáy hay đang thất bại?

Câu "mình đang ở đáy, đợi thêm" không bao giờ sai nếu không có điều kiện dừng. DORA cảnh báo một lỗi: lãnh đạo *"misinterprets this learning phase as a failure and pulls funding during the inevitable dip"*.[^20] Lỗi ngược lại cũng có thể xảy ra: không bao giờ cắt. Bài đề xuất đọc mỗi mốc rà soát bằng hai câu hỏi.[^25]

<figure class="fig fig-review">
<div class="quad" role="img" aria-label="Ma trận hai chiều. Trục dọc: thay đổi cách duyệt đã xong hay chưa. Trục ngang: tín hiệu sớm ở nút thắt đã đổi hướng hay chưa. Đã xong và đã đổi: đang đi lên, bắt đầu đo lợi ích. Đã xong mà chưa đổi: có thể đang ở đáy hoặc chọn sai nút thắt. Chưa xong mà đã đổi: cải thiện đến từ chỗ khác, kiểm chỉ số chặn. Chưa xong và chưa đổi: không phải đường J, thiếu đầu tư bổ trợ, sửa hoặc dừng.">
<p class="quad-y">Thay đổi cách duyệt đã xong</p>
<div class="quad-cell"><p>Có thể đang ở đáy, hoặc chọn sai nút thắt</p><p class="quad-d">Đo lại mức tải từng bước, thêm một kỳ</p></div>
<div class="quad-cell"><p>Đang đi lên</p><p class="quad-d">Bắt đầu so lợi ích với mốc</p></div>
<div class="quad-cell hit"><p>Không phải đường J</p><p class="quad-d">Thiếu đầu tư bổ trợ: làm thay đổi cách duyệt, hoặc dừng</p></div>
<div class="quad-cell"><p>Cải thiện đến từ chỗ khác</p><p class="quad-d">Kiểm chỉ số chặn và cách đo trước khi tin</p></div>
<p class="quad-x">Tín hiệu sớm ở nút thắt đã đổi hướng</p>
</div>
<figcaption><span class="fig-no">Hình <span class="no">4</span></span> Đọc một mốc rà soát. Ô đỏ là trường hợp hay bị gọi nhầm là đáy đường J. Ma trận là đề xuất của bài, không đến từ nguồn.</figcaption>
</figure>

Với mô hình cho vay, điều kiện viết trước khi duyệt có thể như sau; số tuần và ngưỡng là giả định, tổ chức tự đặt:[^0]

- **Rà soát lần một, khoảng 4 tuần sau khi bật.** Quản trị rủi ro đã duyệt ma trận thẩm quyền mới; mẫu đề xuất chuẩn hóa đã dùng; thời gian chờ duyệt không tăng ba tuần liên tiếp.
- **Rà soát lần hai, khoảng 12 tuần sau khi bật.** Trung vị thời gian tới tiền thấp hơn 9,6 ngày; tỉ lệ đề xuất bị trả lại không cao hơn mốc.
- **Kết luận.** Khi nhóm khoản vay đi luồng nhanh đã qua đủ kỳ trả nợ để so nợ quá hạn với mốc.
- **Dừng hoặc sửa.** Tới lần hai mà ma trận thẩm quyền vẫn chưa đổi và chờ duyệt vẫn tăng: đó là ô đỏ, không phải đáy đường J.

McElheran và cộng sự thấy tổ chức cũ chịu thiệt nặng hơn.[^19] Bài suy ra rằng ở tổ chức cũ, thay đổi lớn, mốc rà soát đầu nên đặt muộn hơn. Không có con số nào cho "muộn hơn bao nhiêu".[^25]

## Cùng cơ chế ở các quy trình kinh doanh khác

Bảng dưới là mẫu bài suy ra từ cơ chế, chưa có số đo cho từng dòng. Dùng nó để đặt câu hỏi, không để trích số.[^24]

| Quy trình | AI làm rẻ bước | Nút thắt dễ dời tới | Lợi ích đo ở đầu ra | Chỉ số chặn |
|---|---|---|---|---|
| Bồi thường bảo hiểm | Đọc hồ sơ tổn thất, ước tính thiệt hại | Giám định viên; duyệt chi trả vượt hạn mức | Thời gian từ báo tổn thất tới chi trả | Chi trả sai, gian lận lọt, khiếu nại |
| Bán hàng B2B, trả lời hồ sơ mời thầu | Soạn đề xuất, bảng giá | Duyệt chiết khấu; pháp chế duyệt điều khoản | Tỉ lệ thắng; thời gian từ yêu cầu tới ký | Biên lợi nhuận của hợp đồng; điều khoản ngoại lệ |
| Mua hàng tới thanh toán | Đọc hóa đơn, đối chiếu đơn hàng và phiếu nhận | Xử lý hóa đơn không khớp; phê duyệt chi | Thời gian chu kỳ thanh toán | Thanh toán sai, trùng |
| Tuyển dụng | Viết mô tả công việc, lọc hồ sơ | Lịch phỏng vấn của quản lý tuyển dụng | Thời gian tới khi người mới bắt đầu làm | Nghỉ việc trong thử việc; thiên lệch khi lọc |
| Nội dung marketing | Soạn bài, biến thể quảng cáo | Duyệt thương hiệu và pháp lý | Nội dung lên kênh đúng lịch chiến dịch | Vi phạm quy định quảng cáo |
| Hợp đồng | Rà soát điều khoản, soạn bản sửa | Luật sư nội bộ; người có thẩm quyền ký | Thời gian từ yêu cầu tới hợp đồng có hiệu lực | Điều khoản rủi ro lọt qua |

Điểm chung của sáu dòng: bước AI làm rẻ là bước *soạn*; nút thắt là người có thẩm quyền *quyết*; lợi ích nằm ở thời gian hoặc kết quả phía khách; chỉ số chặn là đúng thứ người duyệt vốn có mặt để ngăn.[^25]

## Chỗ còn phải đọc cẩn thận

- **Mô hình cho vay rất đơn giản.** Một hàng đợi, biến động bằng 1, các bước khác không đổi. Quy trình thật có nhiều cấp duyệt, hồ sơ đến không đều theo mùa, và các bước sau cũng có thể thành nút thắt. Mô hình chỉ hình dạng của hiện tượng, không cho con số để dùng.[^0]
- **Bằng chứng ở mức quy trình gần như chỉ có ở phần mềm**, và phần lớn là tương quan hoặc khảo sát, có nguồn do vendor công bố. Không nguồn nào chứng minh nhân quả rằng thời gian review *gây ra* việc mất lợi ích ở cấp công ty.[^6][^24]
- **Bằng chứng có đối chứng cho công việc văn phòng là ở mức nhiệm vụ.** Noy và Zhang đo nhiệm vụ viết 20–30 phút trong thí nghiệm trực tuyến, không đo một quy trình đang chạy.[^4]
- **Đường J có bằng chứng nhân quả chỉ ở sản xuất.** Áp sang GenAI là suy diễn theo cùng lý thuyết, chưa có bằng chứng trực tiếp ở cấp doanh nghiệp.[^19][^24]
- **Để AI tự quyết là câu hỏi khác.** Khi AI làm luôn bước duyệt, nút thắt có thể dời sang dữ liệu đầu vào hoặc các ca ngoại lệ dồn cho người. Việc đó còn chạm tới thẩm quyền và quy định ngành, ngoài phạm vi bài.[^25]
- **Năm bước TOC đọc qua trang đào tạo**, không qua sách *The Goal* của Goldratt.[^2]

## Áp dụng: sáu câu cho business case có AI

Ba khoản chi mà business case của tính năng AI hay thiếu nằm ở bài [Business case cho tính năng AI thường thiếu ba khoản chi nào?](/tinh-nang-ai-thieu-ba-khoan-chi)

| # | Câu hỏi | Trả lời cho mô hình cho vay |
|---|---|---|
| 1 | Dòng giá trị nào, khách nhận gì ở đầu ra? | Giai đoạn thẩm định và cấp vốn; tiền vào tài khoản khách |
| 2 | Nút thắt hiện tại ở đâu, còn bao nhiêu dư địa? | Cấp phê duyệt, mức tải 70%; AI ở bước lập đề xuất sẽ đẩy thêm hồ sơ vào đó |
| 3 | Thay đổi cách làm là gì, ai làm, ai có quyền duyệt nó? | Ma trận thẩm quyền mới (quản trị rủi ro duyệt), mẫu đề xuất chuẩn hóa, không thưởng theo số đề xuất |
| 4 | Lợi ích và chỉ số chặn? | Thời gian tới tiền; chặn bằng nợ quá hạn và số ngoại lệ chính sách |
| 5 | Đã có mốc so sánh chưa? | 9,6 ngày, lấy trước khi bật công cụ |
| 6 | Điều kiện kết luận và điều kiện dừng? | Hai lần rà soát, kết luận khi có số nợ quá hạn, điều kiện dừng viết trước khi duyệt |

Sáu câu và thứ tự của chúng là của bài, ghép từ TOC, HM Treasury, Green Book và DORA.[^25] Nếu câu 2 hoặc câu 3 không trả lời được, mô hình dự báo kết quả là kịch bản chỉ bật công cụ, dù dashboard vẫn báo giờ tiết kiệm.

[^0]: Giả định · Mô hình cho vay là ví dụ do bài dựng, không mô tả ngân hàng nào. Mọi số của nó (14 và 17,5 hồ sơ/tuần, năng lực 20, 16,7 và 25 hồ sơ/tuần, 0,25, 0,3 và 0,2 ngày mỗi hồ sơ, thời gian làm và chờ từng bước, 35%, 25%, 20%, 4 và 12 tuần) là tham số giả định; 9,6, 10,1, 8,7 ngày và 12 ngày công/tuần là kết quả tính bằng Little và Kingman, không phải số đo.
[^1]: Verified · [Theory of Constraints Institute](https://www.tocinstitute.org/theory-of-constraints.html): "Every system has a limiting factor or constraint…"; "if sales orders are the constraint, optimizing production output can result in overproduction." Trang của viện, không phải văn bản của Goldratt.
[^2]: Verified · [Lean Production](https://www.leanproduction.com/theory-of-constraints/): năm bước Identify, Exploit, Subordinate, Elevate, Repeat. Nguồn thứ cấp (trang đào tạo); sách *The Goal* chưa đọc. Tin cậy trung bình.
[^3]: Verified · [Little (1961)](https://ideas.repec.org/a/inm/oropre/v9y1961i3p383-387.html) cho L = λW; [Kingman (1961)](https://doi.org/10.1017/S0305004100036094) cho thời gian chờ tỉ lệ với ρ/(1−ρ), công thức đọc qua bản trình bày thứ cấp. Bảng hệ số do bài tính với biến động bằng 1.
[^4]: Verified · [Noy & Zhang (02/03/2023)](https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1.pdf), working paper, "not peer reviewed" ở bản đã đọc: 444 người, sáu nghề, nhiệm vụ viết 20–30 phút; thời gian giảm 0,8 SD, chất lượng tăng 0,4 SD; việc dời từ soạn nháp sang biên tập.
[^5]: Verified · [DORA, ROI of AI-assisted Software Development v. 2026.1](https://dora.dev/ai/): code "piles up in front of manual security reviews"; verification tax làm tăng gánh review.
[^6]: Verified · [Faros AI (23/07/2025)](https://www.faros.ai/blog/ai-software-engineering): khoảng 10.000 lập trình viên; +21% task, +98% PR, thời gian review +91%; tương quan biến mất ở cấp công ty. Vendor, dữ liệu tương quan; tin cậy trung bình.
[^7]: Verified · [DORA 2025](https://dora.dev/research/2025/dora-report/), executive summary: AI tăng throughput nhưng vẫn tăng instability; năng suất cục bộ mất vào "downstream chaos". Dữ liệu khảo sát.
[^8]: Verified · [Atlassian (2025)](https://www.atlassian.com/blog/developer/developer-experience-report-2025): 3.500 người, sáu nước; tiết kiệm 10 giờ và mất 10 giờ mỗi tuần. Tự báo cáo, vendor.
[^9]: Verified · [Brynjolfsson, Li & Raymond, NBER WP 31161](https://www.nber.org/papers/w31161) (04/2023, sửa 11/2023), abstract: 5.179 nhân viên; +14% số vấn đề giải được mỗi giờ, +34% với người mới; tăng hài lòng của khách và giữ chân nhân viên.
[^10]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/): "We don’t measure AI by the code it writes but by the bottlenecks it clears."
[^11]: Verified · [HM Treasury (2026)](https://www.gov.uk/government/publications/guidance-on-developing-business-cases), 7.24, 11.21 và Table 5: loại, người hưởng, thước đo, mốc, benefits register có người chịu; cash-releasing khác non-cash-releasing. Ví dụ "giờ tiết kiệm" là cách bài áp Table 5.
[^12]: Có tranh luận · Benefits Dependency Network (Ward & Daniel, Cranfield): nguồn gốc xác nhận cấu trúc ends, ways, means; tên các lớp chỉ thấy ở nguồn thứ cấp.
[^13]: Verified · [Klarna (27/02/2024)](https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/): 700 nhân viên; dưới 2 phút so với 11 phút; hỏi lại giảm 25%; hài lòng ngang nhân viên. Số tự công bố, của tháng đầu.
[^14]: Verified · [Fortune (09/05/2025)](https://fortune.com/2025/05/09/klarna-ai-humans-return-on-investment/), thuật lại phỏng vấn Bloomberg: "As cost unfortunately seems to have been a too predominant evaluation factor…". Nguồn thứ cấp; bản Bloomberg chưa đọc. Không có nguồn cho việc Klarna "tuyển lại" nhân viên cũ.
[^15]: Verified · [Microsoft Learn, Copilot Dashboard](https://learn.microsoft.com/en-us/viva/insights/org-team-insights/copilot-dashboard): bốn nhóm readiness, adoption, impact, sentiment.
[^16]: Verified · [METR (07/2025)](https://arxiv.org/abs/2507.09089): 16 lập trình viên, công cụ đầu 2025; kỳ vọng nhanh hơn 24%, sau đó vẫn tin nhanh hơn 20%, số đo chậm hơn 19%. Năm 2026 METR đổi thiết kế thí nghiệm; 19% không phải số hiện hành.
[^17]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/), dẫn DORA 2025: hơn 80% người trả lời cảm nhận năng suất tăng. Số cảm nhận.
[^18]: Verified · [Brynjolfsson, Rock & Syverson, NBER WP 25148](https://www.nber.org/system/files/working_papers/w25148/w25148.pdf) (10/2018, sửa 01/2020); bản đăng AEJ: Macroeconomics 13(1):333–372, 2021: co-invention; năng suất giảm trước khi tăng.
[^19]: Verified · [McElheran và cộng sự (20/04/2025)](https://mackinstitute.wharton.upenn.edu/wp-content/uploads/2025/04/McElheran-et-al.-Industrial_AI_April-20-2025.pdf), Census CES WP 25-27: khoảng 28.500 nhà máy; đường J có bằng chứng nhân quả; việc dở dang tăng; thiệt hại tập trung ở doanh nghiệp cũ, một phần ba do bỏ thực hành quản lý có cấu trúc; không ước tính thời gian đảo chiều. AI công nghiệp, không phải GenAI.
[^20]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/): đường J là sụt tạm thời; độ sâu tỉ lệ với mức thay đổi; kích thước và thời gian "remain unpredictable"; lãnh đạo hiểu nhầm và rút tiền giữa đáy. Nhận định của DORA, không phải số đo.
[^21]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/), phụ lục máy tính mẫu: sụt 15% trong 3 tháng là giả định; "Treat these calculations as a high-uncertainty estimate"; hoàn vốn 6–9 và 12–18 tháng là "rule of thumb".
[^22]: Verified · [Green Book 2026](https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2026): lập kế hoạch đánh giá ngay khi chọn phương án, có trước khi trình duyệt cuối. Khung của khu vực công Anh.
[^23]: Verified · [DORA ROI v. 2026.1](https://dora.dev/ai/): "Do you have a baseline?"; chỉ số vận hành là "operational early warning system", theo dõi trước lợi nhuận tài chính.
[^24]: OPEN · Số đo hàng đợi trước người duyệt sau khi dùng GenAI ở tín dụng, bảo hiểm, mua hàng và các quy trình kinh doanh khác; đường J của GenAI ở cấp doanh nghiệp. Bài chưa tìm được nguồn.
[^25]: Suy luận của bài · Ghép từ các nguồn đã dẫn: cách áp năm bước TOC, đọc ba kịch bản, phép ứng giữa phần mềm và quy trình cho vay, bảng bốn lớp chỉ số, cách đọc ca Klarna và dashboard, "rủi ro hiện ra chậm", ma trận rà soát, bảng sáu quy trình và sáu câu áp dụng. Không phải lời của nguồn.
[^26]: Verified · [Lean Enterprise Institute, Lean Lexicon](https://www.lean.org/lexicon-terms/value-stream/): "All of the actions, both value-creating and nonvalue-creating…". Việc tách "tìm nút thắt ở mức hành động, báo cáo lợi ích ở mức giai đoạn" là của bài.
