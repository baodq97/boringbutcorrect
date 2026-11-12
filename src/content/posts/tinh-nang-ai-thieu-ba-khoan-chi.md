---
title: "Business case cho tính năng AI thường thiếu ba khoản chi nào?"
seoTitle: "Business case tính năng AI thường thiếu ba khoản chi nào?"
description: "Một tính năng AI chạy theo ba đồng hồ mà business case phần mềm thường không tính: chi phí mỗi việc, ngày khai tử model, và độ mất giá của prompt và harness."
station: 1
published: 2026-11-12
verified: 2026-11-11
image: /og/tinh-nang-ai-thieu-ba-khoan-chi.jpg
sources:
  - title: "a16z (12/11/2024). Welcome to LLMflation"
    url: https://a16z.com/llmflation-llm-inference-cost/
  - title: "Epoch AI (12/03/2025). LLM inference prices have fallen rapidly but unequally across tasks"
    url: https://epoch.ai/data-insights/llm-inference-price-trends
  - title: "FinOps Foundation (10/05/2026). Token Economics: The Atomic Unit of AI Value"
    url: https://www.finops.org/insights/token-economics-the-atomic-unit-of-ai-value/
  - title: "FinOps Foundation (cập nhật 28/10/2026). FinOps for AI Overview"
    url: https://www.finops.org/wg/finops-for-ai-overview/
  - title: "Cursor (04/07/2025). Clarifying our pricing"
    url: https://cursor.com/blog/june-2025-pricing
  - title: "GitHub Blog (27/04/2026). Copilot chuyển sang usage-based billing"
    url: https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/
  - title: "Semafor (28/10/2026). Anthropic's key number is its 85% gross margin"
    url: https://www.semafor.com/article/10/28/2026/anthropics-key-number-is-its-85-gross-margin
  - title: "Epoch AI (sửa 06/03/2026). Can AI companies become profitable?"
    url: https://epoch.ai/gradient-updates/can-ai-companies-become-profitable
  - title: "Anthropic. Prompt caching"
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
  - title: "OpenAI. Deprecations"
    url: https://developers.openai.com/api/docs/deprecations
  - title: "Anthropic. Model deprecations"
    url: https://platform.claude.com/docs/en/about-claude/model-deprecations
  - title: "Google Cloud. Model versions and lifecycle"
    url: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions
  - title: "Google AI Studio. Deprecations"
    url: https://aistudio.google.com/docs/deprecations
  - title: "Microsoft Learn (cập nhật 24/07/2026). Foundry Models lifecycle and support policy"
    url: https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements
  - title: "AWS. Amazon Bedrock User Guide: Model lifecycle"
    url: https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle.html
  - title: "Chen, L., Zaharia, M. & Zou, J. (2023). How is ChatGPT's behavior changing over time? arXiv 2307.09009"
    url: https://arxiv.org/abs/2307.09009
  - title: "Anthropic (04/11/2025). Commitments on model deprecation and preservation"
    url: https://www.anthropic.com/research/deprecation-commitments
  - title: "Sutton, R. (13/03/2019). The Bitter Lesson"
    url: http://www.incompleteideas.net/IncIdeas/BitterLesson.html
  - title: "OpenAI. Reasoning best practices"
    url: https://developers.openai.com/api/docs/guides/reasoning-best-practices
  - title: "Anthropic. Prompting best practices"
    url: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
  - title: "Anthropic. Agent SDK overview"
    url: https://platform.claude.com/docs/en/agent-sdk/overview
  - title: "YC Root Access (27/07/2026). Boris Cherny: Building Claude Code"
    url: https://www.ycrootaccess.com/p/boris-cherny-building-claude-code
  - title: "Stop Comparing LLM Agents Without Disclosing the Harness, arXiv 2605.23950 (07/05/2026)"
    url: https://arxiv.org/abs/2605.23950
  - title: "Anthropic (29/09/2025). Effective context engineering for AI agents"
    url: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
  - title: "Manus. Context Engineering for AI Agents: Lessons from Building Manus"
    url: https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
  - title: "Anthropic (19/12/2024). Building effective agents"
    url: https://www.anthropic.com/research/building-effective-agents
  - title: "Google (19/05/2026). Google I/O 2026: Sundar Pichai's opening keynote"
    url: https://blog.google/innovation-and-ai/sundar-pichai-io-2026/
---

Business case của phần mềm truyền thống dựa trên một dạng chi phí quen thuộc: xây một lần, chạy với chi phí gần như cố định, khấu hao trong vài năm. Bài [Business case cho đầu tư công nghệ nên kiểm gì trước khi duyệt?](/ho-so-dau-tu-cong-nghe-truoc-khi-duyet) đi qua các câu hỏi duyệt cho kiểu business case đó. Một tính năng AI đã giao cho khách không có dạng chi phí ấy.

**Trả lời ngắn:** business case cho tính năng AI thường thiếu ba khoản. Một là biên độ chi phí theo *việc*, vì việc khó có thể tốn gấp hàng chục lần việc dễ. Hai là ngân sách đổi model định kỳ, vì mỗi phiên bản model có ngày khai tử do nhà cung cấp đặt, thường trong 12–29 tháng. Ba là ngân sách làm lại prompt và harness sau mỗi thế hệ model. Ba khoản chạy theo ba đồng hồ với tốc độ khác nhau; gom chúng thành một khung là cách đọc của bài.[^0]

| Đồng hồ | Câu hỏi cho business case | Bằng chứng mạnh nhất |
|---|---|---|
| **1. Chi phí** | Một việc tốn bao nhiêu, việc khó nhất tốn gấp bao nhiêu? | Cursor: việc khó nhất tốn gấp "an order of magnitude" việc dễ; phải đổi gói Pro và hoàn tiền |
| **2. Vòng đời model** | Model mình gọi còn sống bao lâu, được báo trước bao lâu? | Báo trước từ 45 ngày (Vertex, Bedrock) tới 6 tháng (OpenAI); Azure: ngày khai tử "aren't extendable" |
| **3. Kỹ thuật** | Prompt, harness, bộ eval còn đúng bao lâu? | Nhóm Claude Code: một bộ eval sống khoảng "one, two, three model generations" |

Bài [Khi có AI, bốn giả định nào của quản trị công nghệ không còn đúng?](/bon-gia-dinh-lung-lay-khi-co-ai) nói vì sao các giả định này lung lay ở tầng tổ chức. Bài này đi vào con số của một tính năng.

## 1. Đồng hồ chi phí: tính theo việc, không theo token

**Giá cho cùng một mức năng lực giảm rất nhanh.** a16z ước giá LLM cho cùng hiệu năng *"is decreasing by 10x every year"*, và tự nhận phương pháp *"far from perfect"*.[^1] Epoch AI đo tốc độ giảm từ 9 tới 900 lần mỗi năm tùy mốc năng lực; mức giảm nhanh nhất rơi vào giai đoạn gần đây nên *"it's less clear that those will persist"*.[^2]

**Nhưng hóa đơn không đi theo giá token.** FinOps Foundation viết rằng một truy vấn qua RAG, model reasoning và ba lần gọi tool có thể tốn *"one to two orders of magnitude more tokens than a direct prompt to a smaller model"*. Kết luận của họ: *"A token may get cheaper; tokens, in aggregate, are not."* Lượng token còn nhảy theo những thay đổi ngoài kế hoạch: *"Token volumes can move by orders of magnitude"* khi sản phẩm đổi, model đổi hoặc người dùng đổi cách dùng.[^3]

**Chỗ vỡ là khi cách bán không khớp cách trả.** Cursor từng bán gói Pro với giới hạn 500 request mỗi tháng. Năm 2025 họ đổi sang $20 mức dùng mỗi tháng tính theo giá API, vì *"the hardest requests cost an order of magnitude more than simple ones"*, rồi hoàn tiền cho người bị tính phí bất ngờ từ 16/06 tới 04/07/2025.[^4] GitHub Copilot đi cùng đường năm 2026.[^5] Cả hai bán theo gói cố định trong khi trả theo token; khi người dùng chuyển sang agent, phần chênh lệch dồn về bên bán.[^0]

**Nhà cung cấp model có đang trợ giá không?** Câu này còn tranh luận. Semafor, dẫn hồ sơ IPO của Anthropic, báo biên gộp 85% *"on the core work of running its existing AI models"*, và con số này *"excludes the cost of training new models"*.[^6] Epoch AI ước biên gộp của GPT-5 *"about 30%"*, và cho rằng gói GPT-5 *"decidedly unprofitable over its full lifecycle"*.[^7] Hai con số đo hai công ty theo hai định nghĩa, không so trực tiếp được. Với bên mua, câu hỏi thực tế hẹp hơn: gói giá cố định mình đang dùng còn giữ được bao lâu. Cursor và Copilot là hai lần câu trả lời là "không lâu".[^0]

**Cách giảm chi phí có nguồn sơ cấp:**

- Chọn model rẻ nhất đạt tiêu chí của từng việc: *"Model routing applies this automatically by sending simple requests to small models."*[^8]
- Cache phần đầu prompt ổn định. Với Claude, đọc cache tốn *"0.1 times the base input tokens price"*; ghi cache tốn 1,25 lần (giữ 5 phút) hoặc 2 lần (giữ 1 giờ).[^9]
- Đặt *"approved model lists, quotas, rate limits, and budget thresholds"*, và review trước khi cho agent tự chủ chạy.[^8]
- Theo dõi bất thường như *"agent loops, prompt changes that double token use"*, đo token mỗi phút ở mức ứng dụng chứ không chỉ chi tiêu theo ngày.[^8]

## 2. Đồng hồ vòng đời model: mỗi snapshot có ngày chết

Một snapshot là một phiên bản model cố định, có ngày trong tên, ví dụ `claude-sonnet-4-5-20250929`. Mỗi nhà cung cấp có chính sách riêng về việc báo trước khi khai tử:

| Nhà cung cấp | Báo trước tối thiểu | Điều cần biết |
|---|---|---|
| OpenAI API | 6 tháng với model GA; 3 tháng với biến thể chuyên biệt và model ảnh | Bản preview có thể chỉ được báo *"much shorter notice"*, ví dụ 2 tuần[^10] |
| Anthropic | *"at least 60 days' notice before model retirement"* với model công khai | Lý do khai tử: *"to ensure capacity for new model releases"*[^11] |
| Google Vertex AI | Model stable có ít nhất 12 tháng; khi đặt ngày khai tử thì cho ít nhất 45 ngày | Gemini API ghi ngày trên bảng là *"earliest possible"*, không có số ngày báo trước cố định[^12] |
| Azure (Foundry) | Ngày khai tử đặt từ lúc ra mắt: 18 tháng với model GA; từ tháng thứ 12 chỉ khách cũ còn dùng | Ngày khai tử *"aren't extendable"*; sau đó *"all inference returns 410 Gone"*[^13] |
| AWS Bedrock | Giai đoạn Legacy 6 tháng hoặc 45 ngày; *"Most models have a 6-month Legacy period"* | *"migration will not happen automatically"*[^14] |

Hình 1 đặt bốn snapshot ra mắt năm 2025 dưới một hợp đồng giả định 36 tháng ký tháng 06/2025. Cả bốn bị khai tử trước khi hợp đồng đi được nửa đường, hoặc đúng ở nửa đường. Ngày khai tử là ngày thật trên trang chính thức; thời hạn 36 tháng là giả định của bài, vì chưa có số liệu về thời hạn hợp đồng điển hình.[^0][^11][^10]

<figure class="fig fig-day" aria-label="Bốn snapshot model ra mắt năm 2025 đều bị khai tử trong khoảng 06/2026 đến 12/2026, trong khi một hợp đồng giả định 36 tháng kéo dài từ 06/2025 tới 06/2028.">
<div class="day-scale" aria-hidden="true"><span>01/2025</span><span>10/2026</span><span>07/2028</span></div>
<div class="day-track"><p class="day-label">Hợp đồng giả định<small>36 tháng, 06/2025–06/2028</small></p><div class="day-bar day-bar-gap" style="margin-left: 11.9%; width: 85.7%"><span>Cam kết với khách</span></div></div>
<div class="day-track"><p class="day-label">claude-sonnet-4<small>05/2025 → 15/06/2026</small></p><div class="day-bar day-bar-sell" style="margin-left: 10.5%; width: 31.2%"><span>~13 tháng</span></div></div>
<div class="day-track"><p class="day-label">claude-opus-4-1<small>08/2025 → 05/08/2026</small></p><div class="day-bar day-bar-sell" style="margin-left: 17%; width: 28.6%"><span>12 tháng</span></div></div>
<div class="day-track"><p class="day-label">claude-sonnet-4-5<small>09/2025 → 30/11/2026</small></p><div class="day-bar day-bar-sell" style="margin-left: 21.2%; width: 33.5%"><span>~14 tháng</span></div></div>
<div class="day-track"><p class="day-label">gpt-5<small>08/2025 → 11/12/2026</small></p><div class="day-bar day-bar-sell" style="margin-left: 17.2%; width: 38.3%"><span>~16 tháng</span></div></div>
<figcaption><span class="fig-no">Hình <span class="no">1</span></span> Ngày bắt đầu lấy từ ngày trong model ID, có thể lệch vài ngày với ngày phát hành; ngày khai tử lấy từ trang deprecation của Anthropic và OpenAI, đọc 2026-11-11. Thanh hợp đồng là giả định của bài.</figcaption>
</figure>

**Đổi model làm gãy code, không chỉ đổi chất lượng.** Trang deprecation của Anthropic ghi các tham số `temperature`, `top_p`, `top_k` bị *"Removed in API version 2026-10-21"*; gửi lên thì *"Returns a 400 error"*. Code cũ đặt các tham số này phải sửa trước khi lên API version mới.[^11]

**Model cùng tên cũng đổi hành vi.** Chen, Zaharia và Zou đo GPT-4 nhận diện số nguyên tố đúng 84% ở bản 03/2023 và 51% ở bản 06/2023, và viết rằng *"when and how these models are updated over time is opaque"*. Một phần sụt giảm đến từ việc GPT-4 kém *"amenity to follow chain-of-thought prompting"*: một kỹ thuật prompt hết tác dụng ngay trong cùng một tên model.[^15] Ở API, ghim snapshot tránh được kiểu đổi ngầm này; đổi lại, snapshot có ngày chết như Hình 1.[^0]

**Lưu weights không phải là lưu quyền truy cập.** Anthropic cam kết lưu weights mọi model công khai *"for, at minimum, the lifetime of Anthropic as a company"*, để giữ khả năng *"make past models available again"*.[^16] Cam kết này không nói khách tiếp tục gọi được API của model đã khai tử.

**Hệ quả cho business case: đổi model là chi phí định kỳ, không phải sự cố.** Mỗi lần đổi tốn một đợt đánh giá model thay thế (Azure khuyên đánh giá trên *"your own application, prompts, and representative data"*[^13]), một đợt sửa prompt, có khi sửa code vì tham số bị bỏ, và một lần phát hành có đường quay về. Ai được quyết đổi và quyết nhanh đến đâu là chuyện governance, bài 08 đã đi vào.[^0]

## 3. Đồng hồ kỹ thuật: phần nào mất giá, phần nào giữ giá

Gốc của chuyện này hay được dẫn là *The Bitter Lesson* của Sutton: *"general methods that leverage computation are ultimately the most effective"*, và *"building in how we think we think does not work in the long run"*.[^17] Sutton viết về 70 năm nghiên cứu AI, không viết về prompt hay ROI của một đội sản phẩm; áp vào đây là một phép suy rộng. Phần dưới dựa vào tài liệu của chính các nhà cung cấp, không dựa vào Sutton.

**Những gì mất giá nhanh:**

| Kỹ thuật | Nguồn nói gì |
|---|---|
| Prompt "think step by step" cho model reasoning | OpenAI: cách này *"may not enhance performance"*, có khi còn hại; *"Avoid chain-of-thought prompts"*[^18] |
| Viết kiểu "CRITICAL: You MUST use this tool" | Anthropic: model mới *"might now overtrigger"*; cách sửa là *"soften any aggressive language"*[^19] |
| Vòng lặp agent tự viết | Agent SDK cho sẵn *"the same tools, agent loop, and context management that power Claude Code"*[^20] |
| System prompt bù điểm yếu của model cũ | Cherny, nhóm Claude Code: *"we deleted 80% of the system prompt"*; prompt viết cho một model ba tháng trước *"might not translate at all to the next model"*[^21] |
| Bộ eval | Cherny: một eval sống khoảng *"one, two, three model generations"*; eval *"outlive the harness a little bit"*[^21] |

**Những gì vẫn giữ giá:**

- **Harness vẫn quyết định nhiều về hiệu năng.** Một bài position paper năm 2026 lập luận harness *"is often a stronger determinant of agent performance than the model it wraps"*, và cách đánh giá hiện nay *"misattribute harness-level gains to model improvements"*. Đây là lập luận; bài chưa đọc số đo theo từng harness.[^22]
- **Quản lý context.** Anthropic viết khi context dài ra, khả năng *"accurately recall information from that context decreases"*. Manus kể họ đã *"rebuilt our agent framework four times"*, mỗi lần sau khi tìm ra cách dựng context tốt hơn.[^23]
- **Kỷ luật đơn giản.** Anthropic khuyên tìm *"simplest solution possible"* và chỉ thêm phức tạp khi cần.[^24]
- **Quy trình làm lại.** Mỗi lần có model mới, nhóm Claude Code *"delete the entire system prompt and then bring it back line by line"* để đo từng dòng còn đóng góp gì.[^21]

<figure class="fig" aria-label="Một tính năng AI chia làm hai phần: phần đầu tư dài sống lâu hơn một model, và phần ngân sách làm lại mỗi thế hệ model.">
<div class="nest">
<p class="nest-t">Một tính năng AI đã giao cho khách</p>
<div class="nest-2">
<div class="nest">
<p class="nest-t">Đầu tư dài<small>sống lâu hơn một model</small></p>
<p class="vmap-c">Dữ liệu riêng của doanh nghiệp</p>
<p class="vmap-c">Tool và API thiết kế cho nghiệp vụ</p>
<p class="vmap-c">Phân quyền và giới hạn chi phí</p>
<p class="vmap-c">Ca kiểm thử lấy từ lỗi production</p>
<p class="vmap-c">Năng lực đo và làm lại</p>
</div>
<div class="nest">
<p class="nest-t">Ngân sách làm lại<small>mỗi thế hệ model</small></p>
<p class="vmap-c hit">Prompt viết cho một model</p>
<p class="vmap-c hit">Mã harness bù điểm yếu của model</p>
<p class="vmap-c hit">Bộ eval dựng quanh một model</p>
<p class="vmap-c hit">Code gắn với một API version</p>
</div>
</div>
</div>
<figcaption><span class="fig-no">Hình <span class="no">2</span></span> Cách chia của bài, chưa có nghiên cứu đo trực tiếp. Cột trái nên tính như đầu tư; cột phải nên tính như chi phí vận hành lặp lại.</figcaption>
</figure>

**Cách đọc của bài.** *Mã* harness và prompt khấu hao theo từng thế hệ model; *năng lực* làm harness (đo, bỏ bớt rồi đo lại, quản lý context) và những thứ gắn với nghiệp vụ thì không. Phần sau chưa có nghiên cứu đo trực tiếp.[^0] Hệ quả cho business case: đừng vốn hóa phần sẽ bị model sau thay thế. Một đội không thể chờ model tốt hơn khi khách cần tính năng hôm nay, nên vẫn phải viết prompt và harness; chỉ là ghi nó vào đúng cột. Bài 08 có phần kế toán (IAS 38) cho chuyện này.[^0]

## Chỗ còn phải đọc cẩn thận

- **Chưa có công ty nào được nêu tên là đóng cửa vì chi phí inference.** Bằng chứng hiện có là đổi giá, đặt giới hạn, tạm dừng bán.[^25]
- **Hai con số biên gộp không so được với nhau.** 85% và khoảng 30% là hai công ty, hai định nghĩa; con số 85% đọc qua Semafor, chưa đọc hồ sơ gốc.[^6][^7]
- **Lượng token toàn hệ tăng không phải token mỗi việc tăng.** Google nói họ xử lý 9,7 nghìn tỷ token mỗi tháng năm 2024 và hơn 3,2 triệu tỷ năm 2026, nhưng đó là tổng mọi sản phẩm. Chưa có nguồn sơ cấp đo token mỗi việc tăng nhanh thế nào khi chuyển sang agent.[^26]
- **Tự host model open-weight** cho phép tự quyết lịch khai tử, đổi lại phải gánh GPU và vận hành. Bài chưa có nguồn đo chi phí của phương án này.[^25]
- **Chính sách khai tử đổi thường xuyên.** Bảng ở mục 2 đọc ngày 11/11/2026; trước khi dùng cho một hợp đồng, đọc lại trang gốc.

## Áp dụng: sáu câu hỏi cho business case của một tính năng AI

Sáu câu hỏi là tổng hợp của bài, đặt vào phần kinh tế và phần thương mại của Five Case Model ở bài 04.[^0]

| # | Câu hỏi | Nhìn vào đâu | Dấu hiệu đỏ |
|---|---|---|---|
| 1 | **Một việc tốn bao nhiêu?** | Token của việc điển hình và việc khó nhất trong một tuần chạy thật | Không ai biết việc khó nhất tốn gấp bao nhiêu lần |
| 2 | **Cách bán khớp cách trả chưa?** | Đơn vị khách trả mình, đặt cạnh đơn vị mình trả nhà cung cấp | Bán seat cố định, trả theo token, không có giới hạn theo người dùng |
| 3 | **Dự báo chi phí có tính đến bước nhảy không?** | Kịch bản khi đổi model, đổi prompt, người dùng chuyển sang agent | Dự báo kéo thẳng từ chi phí tháng trước |
| 4 | **Trong thời hạn cam kết phải đổi model mấy lần?** | Ngày khai tử của từng snapshot đang gọi, đặt cạnh thời hạn hợp đồng | Business case không có dòng chi phí đổi model |
| 5 | **Điều khoản khai tử đã nằm trong đánh giá nhà cung cấp chưa?** | Chính sách báo trước, exit plan | Chu kỳ phát hành của mình dài hơn thời gian được báo trước |
| 6 | **Phần nào là tài sản, phần nào là chi phí làm lại?** | Hai cột ở Hình 2 | Prompt và harness được vốn hóa như tài sản nhiều năm |

Câu 2 và 3 nối với bài [Tiền công nghệ nên đọc thế nào: kế toán, TBM hay FinOps?](/tien-cong-nghe-ba-cach-nhin), vì FinOps là nơi chi phí theo mức dùng được theo dõi hằng ngày.

[^0]: Suy luận của bài · Khung ba đồng hồ, hợp đồng giả định 36 tháng ở Hình 1, cách chia hai cột ở Hình 2, cách đọc về mã và năng lực làm harness, và sáu câu hỏi là tổng hợp của người viết từ các nguồn đã dẫn, không phải lời của nguồn.
[^1]: Verified · [a16z, Welcome to LLMflation (12/11/2024)](https://a16z.com/llmflation-llm-inference-cost/): giá cho cùng hiệu năng "is decreasing by 10x every year"; phương pháp "far from perfect". Phân tích của một quỹ đầu tư; tin cậy trung bình.
[^2]: Verified · [Epoch AI (12/03/2025)](https://epoch.ai/data-insights/llm-inference-price-trends): giảm "ranging from 9x to 900x per year" tùy mốc năng lực; mức giảm nhanh nhất "less clear that those will persist".
[^3]: Verified · [FinOps Foundation, Token Economics (10/05/2026)](https://www.finops.org/insights/token-economics-the-atomic-unit-of-ai-value/): "one to two orders of magnitude more tokens than a direct prompt to a smaller model"; "A token may get cheaper; tokens, in aggregate, are not"; "Token volumes can move by orders of magnitude".
[^4]: Verified · [Cursor, Clarifying our pricing (04/07/2025)](https://cursor.com/blog/june-2025-pricing): trước đây giới hạn 500 request mỗi tháng; nay "$20 of frontier model usage per month at API pricing"; "the hardest requests cost an order of magnitude more than simple ones"; hoàn tiền mức dùng bất ngờ từ 16/06 tới 04/07.
[^5]: Verified · [GitHub Blog (27/04/2026)](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/): mô hình premium request "no longer sustainable"; mọi gói chuyển sang usage-based từ 01/06/2026. Chi tiết ở bài 08.
[^6]: Có tranh luận · [Semafor (28/10/2026)](https://www.semafor.com/article/10/28/2026/anthropics-key-number-is-its-85-gross-margin), dẫn hồ sơ IPO của Anthropic: biên gộp 85% "on the core work of running its existing AI models"; "excludes the cost of training new models"; lỗ ròng 80 tỷ USD. Chưa đọc hồ sơ gốc.
[^7]: Có tranh luận · [Epoch AI, Can AI companies become profitable? (sửa 06/03/2026)](https://epoch.ai/gradient-updates/can-ai-companies-become-profitable): biên gộp GPT-5 "about 30%"; gói GPT-5 "decidedly unprofitable over its full lifecycle". Ước tính độc lập.
[^8]: Verified · [FinOps Foundation, FinOps for AI Overview (cập nhật 28/10/2026)](https://www.finops.org/wg/finops-for-ai-overview/): model routing; "approved model lists, quotas, rate limits, and budget thresholds"; theo dõi "agent loops, prompt changes that double token use"; "Monitor tokens per minute at the application level, not only daily spend".
[^9]: Verified · [Anthropic, Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), đọc 2026-11-11: đọc cache "0.1 times the base input tokens price"; ghi cache 1,25 lần (TTL 5 phút), 2 lần (TTL 1 giờ).
[^10]: Verified · [OpenAI, Deprecations](https://developers.openai.com/api/docs/deprecations), đọc 2026-11-11: model GA ít nhất 6 tháng; biến thể chuyên biệt và model ảnh ít nhất 3 tháng; preview "much shorter notice". `gpt-5-2025-08-07` khai tử 11/12/2026.
[^11]: Verified · [Anthropic, Model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations), đọc 2026-11-11: "at least 60 days' notice before model retirement"; "to ensure capacity for new model releases"; ngày khai tử của các snapshot ở Hình 1; `temperature`, `top_p`, `top_k` "Removed in API version 2026-10-21", "Returns a 400 error".
[^12]: Verified · [Google Cloud, Model versions and lifecycle](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions): model stable ít nhất 12 tháng, ít nhất 45 ngày để migrate; [Google AI Studio, Deprecations](https://aistudio.google.com/docs/deprecations): ngày là "earliest possible". Đọc 2026-11-11.
[^13]: Verified · [Microsoft Learn, Foundry Models lifecycle (cập nhật 24/07/2026)](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirements): khai tử 18 tháng sau ra mắt; từ tháng thứ 12 chỉ khách cũ; "aren't extendable"; "all inference returns 410 Gone"; đánh giá trên "your own application, prompts, and representative data".
[^14]: Verified · [AWS, Bedrock Model lifecycle](https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle.html), đọc 2026-11-11: Legacy 6 tháng hoặc 45 ngày; "Most models have a 6-month Legacy period"; "migration will not happen automatically".
[^15]: Verified · [Chen, Zaharia & Zou, arXiv 2307.09009 (2023)](https://arxiv.org/abs/2307.09009), phần abstract: GPT-4 đúng 84% (03/2023) và 51% (06/2023) ở bài số nguyên tố; "when and how these models are updated over time is opaque"; "amenity to follow chain-of-thought prompting".
[^16]: Verified · [Anthropic, Commitments on model deprecation and preservation (04/11/2025)](https://www.anthropic.com/research/deprecation-commitments): lưu weights "for, at minimum, the lifetime of Anthropic as a company"; "make past models available again". Không cam kết quyền truy cập API.
[^17]: Có tranh luận · [Sutton, The Bitter Lesson (13/03/2019)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html): câu trích là nguyên văn; việc áp cho prompt và harness là suy rộng, không phải ý của bài gốc.
[^18]: Verified · [OpenAI, Reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices): prompt chain-of-thought "may not enhance performance"; "Avoid chain-of-thought prompts".
[^19]: Verified · [Anthropic, Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices): với Opus 4.5 và 4.6, ngôn ngữ nhấn mạnh "might now overtrigger"; "soften any aggressive language".
[^20]: Verified · [Anthropic, Agent SDK overview](https://platform.claude.com/docs/en/agent-sdk/overview): "the same tools, agent loop, and context management that power Claude Code".
[^21]: Verified · [YC Root Access, Boris Cherny (27/07/2026)](https://www.ycrootaccess.com/p/boris-cherny-building-claude-code), transcript: "we deleted 80% of the system prompt"; "might not translate at all to the next model"; eval sống "one, two, three model generations"; "evals outlive the harness a little bit"; "delete the entire system prompt and then bring it back line by line". Lời người trong cuộc, một nguồn.
[^22]: Có tranh luận · [arXiv 2605.23950 (07/05/2026)](https://arxiv.org/abs/2605.23950), position paper, phần abstract: harness "is often a stronger determinant of agent performance than the model it wraps"; đánh giá hiện nay "misattribute harness-level gains to model improvements". Số đo theo từng harness chưa đọc.
[^23]: Verified · [Anthropic, Effective context engineering (29/09/2025)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents): "accurately recall information from that context decreases"; [Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus): "rebuilt our agent framework four times". Ngày đăng bài Manus chưa xác định.
[^24]: Verified · [Anthropic, Building effective agents (19/12/2024)](https://www.anthropic.com/research/building-effective-agents): "finding the simplest solution possible, and only increasing complexity when needed".
[^25]: OPEN · Không tìm được nguồn sơ cấp cho một công ty được nêu tên đóng cửa vì chi phí inference, và không có nguồn đo chi phí tự host model open-weight.
[^26]: Verified · [Google I/O 2026, keynote của Sundar Pichai (19/05/2026)](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/): 9,7 nghìn tỷ token mỗi tháng (2024), khoảng 480 nghìn tỷ (2025), hơn 3,2 triệu tỷ (2026). Số tổng mọi sản phẩm Google, do Google tự công bố.
