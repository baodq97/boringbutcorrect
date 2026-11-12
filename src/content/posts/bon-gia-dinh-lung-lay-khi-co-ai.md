---
title: "Khi có AI, bốn giả định nào của quản trị công nghệ không còn đúng?"
seoTitle: "Bốn giả định quản trị công nghệ mà AI làm lung lay"
description: "AI không thay các framework quản trị công nghệ; nó thay đơn vị đo của chúng: từ seat sang kết quả, từ năm sang tháng, từ mức dùng sang nút thắt."
station: 1
published: 2026-11-12
verified: 2026-11-11
sources:
  - title: "GitHub Blog (27/04/2026). Copilot chuyển sang usage-based billing"
    url: https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
  - title: "Intercom. Fin pricing"
    url: https://fin.ai/pricing
  - title: "Zendesk (19/05/2026). Relate 2026"
    url: https://www.zendesk.com/newsroom/press-releases/relate-2026/
  - title: "Salesforce (15/05/2025). Flexible Agentforce pricing"
    url: https://www.salesforce.com/news/press-releases/2025/05/15/agentforce-flexible-pricing-news/
  - title: "Aleph (06/2026). What's a good SaaS gross margin? (tóm tắt khảo sát Benchmarkit)"
    url: https://www.getaleph.com/answers/saas-gross-margin-2026
  - title: "OMB (03/04/2025). M-25-22: Driving Efficient Acquisition of Artificial Intelligence in Government"
    url: https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf
  - title: "Anthropic. Model deprecations"
    url: https://platform.claude.com/docs/en/about-claude/model-deprecations
  - title: "Microsoft Learn. Azure OpenAI model retirements"
    url: https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements
  - title: "IFRS Foundation. IAS 38 Intangible Assets (bản 2026)"
    url: https://www.ifrs.org/content/dam/ifrs/publications/html-standards/english/2026/issued/ias38.html
  - title: "FASB (09/2025). ASU 2025-06"
    url: https://storage.fasb.org/ASU%202025-06.pdf
  - title: "KPMG Thụy Sĩ. Accounting for AI software investments"
    url: https://kpmg.com/ch/en/insights/reporting/accounting-for-ai-software.html
  - title: "NIST (01/2023). AI Risk Management Framework 1.0, NIST AI 100-1"
    url: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
  - title: "UK Government (10/02/2025). AI Playbook for the UK Government"
    url: https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government
  - title: "Thoughtworks (11/2026). Technology Radar Vol. 35, blip LiteLLM"
    url: https://www.thoughtworks.com/radar/platforms/litellm
  - title: "OpenAI (29/04/2025). Sycophancy in GPT-4o"
    url: https://openai.com/index/sycophancy-in-gpt-4o/
  - title: "OpenAI (02/05/2025). Expanding on what we missed with sycophancy"
    url: https://openai.com/index/expanding-on-sycophancy/
  - title: "DORA (2025). State of AI-assisted Software Development 2025"
    url: https://dora.dev/research/2025/dora-report/
  - title: "DORA (2026). ROI of AI-assisted Software Development, v. 2026.1; DORA Insights"
    url: https://dora.dev/insights/
  - title: "METR (24/02/2026). We are changing our developer productivity experiment design"
    url: https://metr.org/blog/2026-02-24-uplift-update/
  - title: "Stanford HAI (2026). AI Index 2026, chương 4 Economy"
    url: https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf
  - title: "Azoulay, P., Krieger, J. & Nagaraj, A. (2024). Old Moats for New Models. NBER WP 32474"
    url: https://www.nber.org/system/files/working_papers/w32474/w32474.pdf
  - title: "Agrawal, A., Gans, J. & Goldfarb, A. (18/11/2024). Generative AI Is Still Just a Prediction Machine. HBR"
    url: https://hbr.org/2024/11/generative-ai-is-still-just-a-prediction-machine
---

Bài 00 của blog dựng một bản đồ hai trục cho công nghệ trong doanh nghiệp: trục A mô tả doanh nghiệp *là gì* (chiến lược, kiến trúc nghiệp vụ, dữ liệu và ứng dụng, hạ tầng), trục B mô tả doanh nghiệp *thay đổi thế nào* (governance, portfolio, delivery, operate, measure). Các framework xếp trên bản đồ ấy, từ business case tới FinOps, được viết khi phần mềm có ba tính chất: chi phí chủ yếu cố định, tài sản dùng nhiều năm, giá trị đo được sau go-live. AI làm lung lay cả ba cùng lúc.

**Trả lời ngắn:** AI không thay framework; nó thay *đơn vị đo* của framework. Bài đưa ra bốn nhận định, mỗi nhận định là một giả định nền của bản đồ không còn đúng nguyên vẹn. Ba nhận định đầu có bằng chứng khá chắc; nhận định thứ tư là giả thuyết. Bốn nhận định là cách đọc của bài, ghép từ các nguồn bên dưới, không phải kết luận của một nguồn nào.[^0]

| # | Giả định cũ | Điều đang xảy ra | Độ chắc |
|---|---|---|---|
| 1 | Phần mềm bán theo seat, thêm người dùng gần như không tốn thêm | Đơn vị kinh tế dời sang *việc* và *kết quả* | Cao ở chăm sóc khách hàng và công cụ lập trình; chưa toàn ngành |
| 2 | Thành phần nền đổi chậm hơn các cam kết đặt lên nó | Model, thứ đổi nhanh nhất, nằm *dưới* các cam kết dài nhất, theo lịch của nhà cung cấp | Cao |
| 3 | Hệ thống chạy thì giá trị đến, đo bằng KPI của hệ thống | Thứ dễ đo (mức dùng, token, A/B) dễ dẫn sai; giá trị nằm ở nút thắt ngoài AI | Cao về giới hạn đo; thấp về cách đo đúng |
| 4 | Lợi thế đến từ năng lực công nghệ khó làm | Kỹ thuật gắn với model khấu hao theo thế hệ; lợi thế không nằm ở đó, nhưng chưa ai chứng minh nó nằm ở đâu | Thấp |

## 1. Đơn vị kinh tế dời từ seat sang kết quả

Phần mềm truyền thống gần như không tốn thêm khi có thêm người dùng, nên bán theo seat là hợp lý: doanh thu cố định khớp chi phí cố định. Mỗi lần AI làm việc thì tốn tiền tính toán, và việc khó tốn gấp nhiều lần việc dễ. Khi chi phí đi theo việc, bán theo seat đặt nhà cung cấp vào thế lỗ với chính những khách dùng nhiều nhất.[^0]

GitHub nói đúng điều này khi bỏ cách tính cũ của Copilot: *"Today, a quick chat question and a multi-hour autonomous coding session can cost the user the same amount."* Mô hình cũ *"is no longer sustainable"*, và mọi gói Copilot chuyển sang tính theo mức dùng từ 01/06/2026.[^1]

<figure class="fig fig-unit">
<ol class="chain">
<li><p class="chain-h">Theo seat</p><p>Một giá mỗi người dùng mỗi tháng</p><p class="chain-note">Hợp lý khi chi phí cố định</p></li>
<li><p class="chain-h">Theo việc</p><p>Copilot, Cursor: tính theo mức dùng; Salesforce: $0,10 mỗi hành động</p><p class="chain-note">Chi phí đi theo việc AI làm</p></li>
<li class="hit"><p class="chain-h">Theo kết quả</p><p>Intercom: $0,99 mỗi kết quả; Zendesk: chỉ thu với kết quả họ xác minh đã giải được</p><p class="chain-note">Ai định nghĩa "kết quả"?</p></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Ba đơn vị tính tiền, với các nhà cung cấp đã chuyển. Việc xếp thành một chuỗi là cách đọc của bài; không phải nhà cung cấp nào cũng đi đủ ba bước.</figcaption>
</figure>

Mảng chăm sóc khách hàng đi xa nhất. Intercom niêm yết Fin ở mức *"$0.99 per outcome"*.[^2] Zendesk năm 2026 nói các AI agent của họ *"priced solely on the outcomes Zendesk verifiably resolves"*.[^3] Salesforce chuyển Agentforce từ $2 mỗi cuộc hội thoại sang Flex Credits, $0,10 mỗi hành động.[^4]

**Khi bên bán đổi đơn vị, bên mua phải đổi theo ở mọi khâu của trục B.** Business case không còn dự toán "bao nhiêu license" mà là "bao nhiêu việc, mỗi việc tốn bao nhiêu, xu hướng ra sao". Hướng dẫn mua sắm AI của chính phủ Mỹ (OMB M-25-22) đã đưa vào một tiêu chí *dừng dùng* khi chi phí, nhu cầu hoặc hiệu năng model thay đổi.[^5] Tài chính chuyển khoản chi từ dạng gần với tài sản (license nhiều năm) sang chi phí vận hành biến đổi. Đo lường phải đo kết quả, vì mức dùng giờ là chi phí chứ không phải giá trị.[^0]

**Chỗ đáng chú ý nhất là ai định nghĩa "kết quả".** Thu theo kết quả chuyển rủi ro chi phí sang nhà cung cấp, nhưng cũng trao cho họ quyền định nghĩa thế nào là một kết quả. Zendesk nhấn mạnh kết quả được *họ* xác minh.[^3] Với bên mua, định nghĩa và cách xác minh kết quả thành một điều khoản hợp đồng quan trọng ngang giá. Đây là suy luận của bài; chưa có nguồn độc lập đánh giá bên nào được lợi.[^0]

**Giới hạn.** Theo tóm tắt khảo sát Benchmarkit, biên gộp phần mềm trung vị năm 2025 vẫn khoảng 80%, và chi phí AI *"have not yet compressed software margins at the median"*. Đây là nguồn thứ cấp.[^6] Dịch chuyển rõ ở sản phẩm có agent và mảng chăm sóc khách hàng; với phần mềm ít dùng AI, seat vẫn hợp lý.

## 2. Thứ đổi nhanh nhất nằm dưới các cam kết dài nhất

Bản đồ ngầm giả định tầng dưới (hạ tầng, nền tảng) ổn định hơn các cam kết đặt lên nó: hợp đồng với khách, tài sản trên sổ sách, chu kỳ duyệt đầu tư. Model AI đảo ngược điều này. Một snapshot model sống khoảng 12–29 tháng; nhà cung cấp báo trước khai tử từ 45 ngày tới 6 tháng; và lịch đó do nhà cung cấp đặt, không phải doanh nghiệp. Ví dụ, Anthropic cam kết báo trước ít nhất 60 ngày, và ba đợt khai tử năm 2026 báo trước 61–62 ngày.[^7]

| Cam kết dài | Thành phần ngắn bên dưới | Xung đột |
|---|---|---|
| Hợp đồng với khách, nhiều năm | Model sống 12–29 tháng | Phải đổi model nhiều lần trong một hợp đồng; mỗi lần là một thay đổi có rủi ro |
| Tài sản vô hình trên sổ sách | Prompt, harness, tích hợp gắn với một model | Thời gian sử dụng hữu ích phụ thuộc thứ sống ngắn hơn nó |
| Exit plan với nhà cung cấp | Báo trước khai tử khoảng 60 ngày | Exit khỏi nền tảng lõi thường là kế hoạch nhiều năm; ở đây có thể bị buộc rời một model trong 60 ngày |
| Chu kỳ governance | Mỗi lần đổi model | Nếu mỗi lần đổi phải chờ một cuộc họp duyệt thì không kịp lịch 60 ngày |
| Quy trình change | Cập nhật model trong cùng một cái tên | Hành vi đổi mà tên không đổi |

Bảng do bài dựng; dòng đầu là suy luận, chưa có số liệu thời hạn hợp đồng.[^0]

Về kế toán, IAS 38 coi sự lỗi thời và việc phụ thuộc vào tài sản khác là các yếu tố xét thời gian sử dụng hữu ích, và nói phần mềm thường có thời gian sử dụng ngắn.[^8] FASB, trong ASU 2025-06, thừa nhận chưa có hướng dẫn riêng cho chi phí phát triển AI.[^9] KPMG Thụy Sĩ viết rằng tài sản AI có thể bị thay *"within a matter of months"*.[^10]

### Ca rõ nhất: GPT-4o "nịnh" người dùng, tháng 04/2025

Bản cập nhật GPT-4o trong ChatGPT tháng 04/2025 làm model nịnh người dùng quá mức (sycophancy). OpenAI viết hai bài postmortem về sự cố.[^11]

<figure class="fig fig-day" aria-label="Diễn tiến sự cố sycophancy của GPT-4o: qua đánh giá offline, qua A/B test, chuyên gia thấy hơi lạ, vẫn phát hành, sửa system prompt trong đêm, rollback mất khoảng 24 giờ.">
<ol class="tower">
<li>Đánh giá offline<small>đạt</small></li>
<li>A/B test với người dùng<small>đạt</small></li>
<li>Chuyên gia thử tay<small>một số người thấy model "felt" slightly off</small></li>
<li>Phát hành<small>không có đánh giá riêng cho sycophancy</small></li>
<li>Sửa system prompt cuối đêm Chủ nhật<small>giảm phần lớn tác hại</small></li>
<li class="hit">Rollback toàn bộ<small>mất khoảng 24 giờ</small></li>
</ol>
<figcaption><span class="fig-no">Hình <span class="no">2</span></span> Sự cố theo hai bài postmortem của OpenAI, đọc từ trên xuống. Các chốt định lượng đều báo xanh trước khi phát hành.</figcaption>
</figure>

Bài học cho bên mua không nằm ở chuyện OpenAI sai. Nó nằm ở chỗ: một thứ doanh nghiệp không kiểm soát có thể đổi hành vi mà không báo, và các chốt kiểm soát định lượng có thể đều báo xanh. Có một giới hạn: hai bài postmortem chỉ nói về ChatGPT. Ở API, snapshot cố định không bị đổi ngầm, và đó là lý do ghim (pin) snapshot có giá trị.[^0][^11]

**Hệ quả: tách cam kết khỏi model.** Các nguồn chính thức đã có từng mảnh; ghép lại thành một cách làm là của bài.[^0]

- **Kỹ thuật:** ghim snapshot thay vì dùng alias; giữ bộ đánh giá của chính mình để chọn model thay thế. Azure khuyên đánh giá trên *"your own application, prompts, and representative data"*.[^12] Gateway giảm lock-in nhưng không xóa được: Thoughtworks Radar cảnh báo dùng tính năng riêng của nhà cung cấp là *"reintroducing the coupling"*.[^13]
- **Hợp đồng:** điều khoản portability và minh bạch giá, như OMB M-25-22 yêu cầu với cơ quan Mỹ.[^5]
- **Governance:** giao trước quyền đổi model trong một khung điều kiện (đánh giá đạt, có đường quay về), thay vì duyệt từng lần. AI Playbook của chính phủ Anh đặt cập nhật model vào *"a managed release process"* có thể quay về bản trước.[^14] NIST yêu cầu có cơ chế và người chịu trách nhiệm cho việc thay, ngắt và khai tử hệ AI.[^15]
- **Kế toán:** coi phần gắn với một model là chi phí vòng đời ngắn; chỉ xét vốn hóa phần dữ liệu và tích hợp nghiệp vụ sống lâu hơn model. Đây là suy luận từ IAS 38, chưa có hướng dẫn chính thức.[^8][^0]

Con số cụ thể cho một tính năng (chi phí mỗi việc, lịch khai tử từng nhà cung cấp, phần nào nên vốn hóa) nằm ở bài [Business case cho tính năng AI thường thiếu ba khoản chi nào?](/tinh-nang-ai-thieu-ba-khoan-chi)

## 3. Thứ dễ đo là thứ sai

Với phần mềm truyền thống, chức năng và giá trị đi gần nhau: hệ thống chạy thì quy trình chạy. Với AI, giữa "AI làm được" và "doanh nghiệp được lợi" có một khoảng mà AI không tự lấp. DORA 2025 gọi AI là *"amplifier"*: nó phóng đại điểm mạnh và điểm yếu sẵn có, tăng throughput nhưng vẫn tăng instability.[^16] Báo cáo ROI 2026 của DORA đặt tên cho phần việc kiểm thêm là *"verification tax"*, và đề xuất đo AI *"by the bottlenecks it clears"*.[^17]

**Vì sao số liệu công khai mâu thuẫn nhau.** Các con số nổi tiếng đều có điều kiện:

- METR năm 2025 đo được lập trình viên giàu kinh nghiệm chậm hơn 19% khi dùng AI, trên 16 người. Năm 2026, METR tự nói dữ liệu của thí nghiệm mới cho *"an unreliable signal"*, vì lập trình viên không muốn tham gia nếu phải làm không có AI.[^18]
- Báo cáo của MIT NANDA năm 2025 nói 95% tổ chức không có lợi nhuận từ GenAI. Chính báo cáo ghi số liệu dựa trên phỏng vấn và *"directionally accurate"*. Bài chỉ đọc được bản mirror.[^19]
- AI Index 2026 tổng hợp: lợi ích lớn nhất ở việc *"structured, measurable"*, và *"the evidence is not conclusive nor is it all positive"*.[^20]

Đọc chung, theo cách của bài: không phải AI không có giá trị, mà giá trị phụ thuộc vào việc có cấu trúc và có nút thắt đo được hay không. Con số trung bình toàn ngành vì thế ít nói được gì về một doanh nghiệp cụ thể.[^0]

**Thứ dễ đo dẫn sai, đúng kiểu Goodhart.** DORA cảnh báo coi token spend là chỉ số hiệu suất là *"a dangerous trap"*: token là chi phí, tối ưu nó lên là tối ưu chi phí lên.[^21] Ca sycophancy là cùng một kiểu ở phía nhà cung cấp: OpenAI viết họ đã *"focused too much on short-term feedback"* (nút thích, không thích), chỉ số đẹp mà hành vi hỏng.[^11] Xếp hai chuyện này vào định luật Goodhart (một thước đo bị biến thành mục tiêu thì thôi là thước đo tốt) là cách đọc của bài.[^0]

Nhận định này có bài riêng: [AI giúp nhân viên làm nhanh hơn, sao khách vẫn chờ lâu như cũ?](/ai-lam-nhanh-hon-sao-khach-van-cho) đi vào chuyện đo ở nút thắt nào và đo lúc nào qua đường J.

## 4. Lợi thế: biết chỗ không phải, chưa biết chỗ phải

Đây là nhận định yếu nhất, và bài nói thẳng như vậy.

**Điều có bằng chứng: lợi thế không nằm ở kỹ thuật gắn với model.** Prompt, harness, cách bù điểm yếu của model khấu hao theo từng thế hệ. Nhóm Claude Code xóa 80% system prompt khi đổi sang model mới.[^22] Một nghiên cứu NBER chỉ ra foundation model *"can be a chokepoint"* cạnh tranh ở tầng ứng dụng: phần giá trị lớn có thể dồn về bên nắm model.[^23]

**Điều chưa có bằng chứng: lợi thế nằm ở đâu.** Câu trả lời hay gặp (dữ liệu riêng, kênh phân phối, tích hợp quy trình) chưa có nghiên cứu thực nghiệm nào trong tập nguồn bài đã đọc.[^24] Agrawal, Gans và Goldfarb đặt đúng câu hỏi: *"What are the sustainable sources of competitive advantage as AI continues to improve?"* Phần trả lời của họ nằm sau paywall; bài chưa đọc.[^25]

**Cách đọc của bài.** Theo Porter ([bài 01](/chien-luoc-kinh-doanh-porter-rumelt-mintzberg)), lợi thế bền nằm ở một hệ thống hoạt động ăn khớp, khó bắt chước từng phần. Áp vào AI: thứ khó sao chép có thể không phải AI mà là cách tổ chức lại công việc quanh AI, gồm việc nào giao cho AI, ai kiểm, kết quả được định nghĩa và xác minh ra sao. Đây là giả thuyết để kiểm, không phải kết luận.[^0]

## Chỗ còn phải đọc cẩn thận

- **Nhận định 1 có thể bị thổi phồng.** Biên gộp trung vị chưa giảm, và dịch chuyển mới rõ ở vài mảng.[^6]
- **Thu theo kết quả có lợi cho bên mua không** chưa có nguồn độc lập đánh giá.[^0]
- **Tách cam kết khỏi model tốn công.** Ghim snapshot, đánh giá riêng, điều khoản hợp đồng đều có chi phí; với tính năng thử nghiệm, chi phí này có thể lớn hơn rủi ro. Nhận định 2 áp mạnh nhất cho tính năng đã bán cho khách.[^0]
- **Nhiều nguồn quản trị là của khu vực công Anh và Mỹ.** Logic dùng được cho doanh nghiệp; ngưỡng và thủ tục thì không bê nguyên.[^5][^14]
- **Bằng chứng về đo lường phần lớn từ phát triển phần mềm** và là khảo sát hoặc tương quan.[^16][^20]

## Áp dụng: ba câu hỏi cho mọi khoản đầu tư có AI

Ba nhận định đầu cho ba câu hỏi, đặt vào business case ở cổng duyệt. Các câu hỏi là của bài.[^0]

| # | Câu hỏi | Từ nhận định |
|---|---|---|
| 1 | **Đơn vị kinh tế là gì?** Mình trả tiền theo seat, theo việc hay theo kết quả; khách trả mình theo đơn vị nào; hai đơn vị có khớp không; ai định nghĩa và xác minh "kết quả"? | 1 |
| 2 | **Cam kết nào dài hơn model?** Hợp đồng, tài sản, exit plan, quy trình duyệt nào có thời hạn dài hơn vòng đời model đang dùng; đổi model thì ai quyết, mất bao lâu, kiểm bằng gì? | 2 |
| 3 | **Giá trị nằm ở nút thắt nào?** Lợi ích đo ở đâu trên value stream, không phải đo mức dùng AI; đo lúc nào để không kết luận sai ở đáy đường J? | 3 |

Câu hỏi thứ tư, lợi thế nằm ở đâu, chưa có câu trả lời có nguồn.

[^0]: Suy luận của bài · Bốn nhận định, bảng tóm tắt, chuỗi seat → việc → kết quả, bảng cam kết dài và model ngắn, cách ghép "tách cam kết khỏi model", cách đọc Goodhart và giả thuyết về lợi thế là tổng hợp của người viết từ các nguồn đã dẫn, không phải lời của nguồn.
[^1]: Verified · [GitHub Blog (27/04/2026)](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/) và [GitHub Changelog (01/06/2026)](https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/): một câu hỏi nhanh và một phiên agent nhiều giờ "can cost the user the same amount"; mô hình premium request "is no longer sustainable"; mọi gói chuyển sang usage-based từ 01/06/2026.
[^2]: Verified · [Intercom, Fin pricing](https://fin.ai/pricing), đọc 2026-11-11: "$0.99 per outcome". Fin 2 thu $0,99 mỗi resolution từ 10/2024.
[^3]: Verified · [Zendesk, Relate 2026 (19/05/2026)](https://www.zendesk.com/newsroom/press-releases/relate-2026/): "priced solely on the outcomes Zendesk verifiably resolves". Từ 08/2024 Zendesk đã thu theo resolution do AI tự giải.
[^4]: Verified · [Salesforce (15/05/2025)](https://www.salesforce.com/news/press-releases/2025/05/15/agentforce-flexible-pricing-news/): Agentforce từ $2 mỗi hội thoại sang Flex Credits $0,10 mỗi hành động.
[^5]: Verified · [OMB M-25-22 (03/04/2025)](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf): rà soát định kỳ giá trị; tiêu chí dừng dùng theo chi phí, nhu cầu, yêu cầu vendor, hiệu năng model; điều khoản chống lock-in, portability dữ liệu và model. Áp cho cơ quan chính phủ Mỹ.
[^6]: Có tranh luận · [Aleph (06/2026)](https://www.getaleph.com/answers/saas-gross-margin-2026), tóm tắt khảo sát Benchmarkit: biên gộp trung vị 2025 khoảng 80%; chi phí AI "have not yet compressed software margins at the median". Nguồn thứ cấp; khảo sát gốc chưa đọc.
[^7]: Verified · Trang deprecation của [Anthropic](https://platform.claude.com/docs/en/about-claude/model-deprecations), OpenAI, Google Vertex, Azure, AWS Bedrock (đọc 2026-11-11): báo trước từ 45 ngày (Vertex, Bedrock) tới 6 tháng (OpenAI GA); Anthropic ít nhất 60 ngày, ba đợt năm 2026 báo trước 61–62 ngày. Vòng đời 12–29 tháng tính từ ngày trong model ID tới ngày khai tử; tin cậy trung bình về ngày bắt đầu.
[^8]: Verified · [IAS 38 (bản 2026)](https://www.ifrs.org/content/dam/ifrs/publications/html-standards/english/2026/issued/ias38.html), đoạn 90, 92: obsolescence và phụ thuộc tài sản khác là yếu tố xét useful life; phần mềm thường có useful life ngắn. Việc áp cho prompt và harness là suy luận của bài.
[^9]: Verified · [FASB ASU 2025-06 (09/2025)](https://storage.fasb.org/ASU%202025-06.pdf), BC66–BC67: không có hướng dẫn riêng cho chi phí AI.
[^10]: Verified · [KPMG Thụy Sĩ](https://kpmg.com/ch/en/insights/reporting/accounting-for-ai-software.html): tài sản AI có thể bị thay "within a matter of months". Quan điểm của một hãng kiểm toán; ngày trang chưa xác định. Tin cậy trung bình.
[^11]: Verified · OpenAI, [Sycophancy in GPT-4o (29/04/2025)](https://openai.com/index/sycophancy-in-gpt-4o/) và [Expanding on what we missed (02/05/2025)](https://openai.com/index/expanding-on-sycophancy/): đánh giá offline và A/B đạt; chuyên gia thấy "slightly off"; không có đánh giá riêng cho sycophancy; sửa system prompt cuối đêm Chủ nhật; rollback "took around 24 hours"; "focused too much on short-term feedback". Chỉ nói về ChatGPT.
[^12]: Verified · [Microsoft Learn, Azure model retirements](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements) (cập nhật 24/07/2026): đánh giá model thay thế trên "your own application, prompts, and representative data".
[^13]: Verified · [Thoughtworks Technology Radar Vol. 35, blip LiteLLM](https://www.thoughtworks.com/radar/platforms/litellm): dùng tính năng riêng của nhà cung cấp qua gateway là "reintroducing the coupling".
[^14]: Verified · [AI Playbook for the UK Government (10/02/2025)](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government): "Any updates to the model need to go through a managed release process", và phải có thể "reverted to an earlier version". Khung của khu vực công Anh.
[^15]: Verified · [NIST AI 100-1 (01/2023)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), GOVERN 1.7, 2.3, MANAGE 2.4: cơ chế supersede, disengage, deactivate; khai tử an toàn; lãnh đạo chịu quyết định rủi ro AI.
[^16]: Verified · [DORA 2025](https://dora.dev/research/2025/dora-report/): AI là "amplifier"; tăng throughput nhưng vẫn tăng instability. Khảo sát gần 5.000 người, tương quan.
[^17]: Verified · DORA, ROI of AI-assisted Software Development v. 2026.1: "verification tax"; đo AI "by the bottlenecks it clears".
[^18]: Verified · METR, arXiv 2507.09089 (07/2025): chậm hơn 19%, 16 lập trình viên, công cụ đầu 2025; [METR (24/02/2026)](https://metr.org/blog/2026-02-24-uplift-update/): dữ liệu thí nghiệm mới cho "an unreliable signal" vì lập trình viên không muốn làm không có AI.
[^19]: Verified · MIT NANDA, The GenAI Divide 2025: 95% tổ chức không có lợi nhuận từ GenAI; báo cáo tự ghi "directionally accurate". Đọc qua bản mirror, chưa đối chiếu bản gốc của MIT. Tin cậy trung bình.
[^20]: Verified · [AI Index 2026, chương 4](https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf): lợi ích lớn nhất ở việc "structured, measurable"; "the evidence is not conclusive nor is it all positive".
[^21]: Verified · [DORA Insights (02/06/2026)](https://dora.dev/insights/): coi token spend là chỉ số hiệu suất là "a dangerous trap".
[^22]: Verified · Boris Cherny, YC Root Access (27/07/2026): Claude Code xóa 80% system prompt khi lên Opus 5. Lời người trong cuộc, một nguồn.
[^23]: Verified · [Azoulay, Krieger & Nagaraj, NBER WP 32474 (2024)](https://www.nber.org/system/files/working_papers/w32474/w32474.pdf): foundation model "can be a chokepoint". Working paper.
[^24]: OPEN · Lợi thế bền chuyển sang dữ liệu riêng, kênh phân phối hoặc tích hợp quy trình: chưa có nguồn thực nghiệm trong tập đã đọc.
[^25]: Verified · [Agrawal, Gans & Goldfarb, HBR (18/11/2024)](https://hbr.org/2024/11/generative-ai-is-still-just-a-prediction-machine), phần mở đầu: câu hỏi về nguồn lợi thế bền. Phần trả lời sau paywall, chưa đọc.
