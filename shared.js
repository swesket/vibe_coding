// ── i18n ──
const i18n = {
  ko: {
    searchPlaceholder: "사이트 검색...",
    heroEyebrow: "Curated Fashion Destinations",
    heroTitle: "당신의 다음<br/>스타일을 발견하세요",
    heroDesc: "국내외 패션 쇼핑 사이트를 한 곳에서 큐레이션합니다. 카테고리별 쇼핑 가이드와 함께 브랜드, 빈티지, 스트릿까지 탐색하세요.",
    stats: { sites: "큐레이션 사이트", cats: "카테고리", langs: "지원 언어" },
    empty: "검색 결과가 없습니다.",
    countSuffix: "개",
    nav: { sites: "사이트", guide: "가이드", brands: "브랜드", about: "소개", submit: "등록 요청" },
    categories: { all: "전체", korea: "국내 셀렉트샵", luxury: "럭셔리 / 하이엔드", street: "스트릿", vintage: "빈티지 / 중고", sneaker: "스니커즈", global: "글로벌 멀티" },
    guide: {
      title: "패션 쇼핑 가이드",
      desc: "카테고리별로 현명하게 쇼핑하는 방법을 DIGGING 에디터가 직접 정리했습니다.",
      items: [
        { icon: "🇰🇷", title: "국내 셀렉트샵 공략법", body: "무신사, 29CM 등 국내 셀렉트샵은 시즌 세일 시기를 노리는 것이 핵심입니다. 보통 1월과 7월에 대규모 할인이 진행되며, 앱 전용 쿠폰이 웹보다 많은 경우가 대부분입니다. 무신사 랭킹과 29CM 에디터 픽을 참고하면 트렌드 파악에도 도움이 됩니다.", tip: "TIP: 첫 구매 쿠폰은 반드시 챙기세요. 대부분 10~15% 할인을 제공합니다." },
        { icon: "💎", title: "럭셔리 온라인 쇼핑 전략", body: "해외 럭셔리 플랫폼 구매 시 관세(15만원 초과)와 부가세를 반드시 계산하세요. SSENSE와 Mytheresa는 시즌 오프 세일 때 최대 70%까지 할인하며, Farfetch는 다양한 부티크 재고를 비교할 수 있어 품절 상품도 찾기 쉽습니다. 환율이 유리한 시점을 노려 구매하면 추가 절약이 가능합니다.", tip: "TIP: 해외 직구 시 개인통관고유부호를 미리 발급받아두세요." },
        { icon: "🛹", title: "스트릿웨어 드롭 대응법", body: "Supreme, Palace 같은 브랜드는 매주 정해진 시간에 신제품을 '드롭'합니다. 미리 어떤 아이템이 나오는지 리크 계정을 팔로우하고, 사이즈와 컬러를 정해둔 뒤 드롭 시간에 즉시 결제하세요. 망설이면 매진됩니다. Kith와 Beams는 콜라보 제품이 리셀가가 올라가는 경향이 있으므로 관심 있다면 놓치지 마세요.", tip: "TIP: 드롭 10분 전에 결제 정보와 배송지를 미리 저장해두세요." },
        { icon: "👜", title: "빈티지 & 중고 구매 가이드", body: "Grailed과 Vestiaire Collective에서는 판매자 평점과 거래 이력을 반드시 확인하세요. 사진만으로 상태를 판단하기 어려우니 추가 사진을 요청하는 것이 좋습니다. 국내에서는 크림의 검수 서비스를 이용하면 정품 여부 걱정 없이 거래할 수 있습니다. 빈티지 아이템은 사이즈 표기가 현대와 다를 수 있으니 실측을 꼭 확인하세요.", tip: "TIP: 럭셔리 빈티지는 시리얼 넘버 사진을 반드시 요청하세요." },
        { icon: "👟", title: "스니커즈 리셀 시장 읽기", body: "StockX와 GOAT의 시세 그래프를 비교하면 최적의 구매 타이밍을 잡을 수 있습니다. 일반적으로 발매 직후 리셀가가 가장 높고, 2~3주 후 안정됩니다. 한정판이 아니라면 기다리는 것이 유리합니다. Kicks Crew는 정가 대비 저렴한 해외 재고를 보유한 경우가 많으니 먼저 비교해보세요.", tip: "TIP: 국내 발매가와 해외 리셀가 + 배송비를 비교한 뒤 결정하세요." },
        { icon: "🌍", title: "글로벌 SPA 현명하게 활용하기", body: "Zara와 H&M은 매장과 온라인 재고가 다릅니다. 마음에 드는 아이템은 온라인에서 먼저 확인하고, 매장에서 실물 핏을 체크하는 '쇼루밍' 전략이 효과적입니다. ASOS는 학생 할인(10%)과 무료 반품 정책이 강점이며, Uniqlo는 감사제(11월)와 창립기념 세일 시기에 베이직 아이템을 대량 구매하는 것이 가성비 최고입니다.", tip: "TIP: ASOS Premier 가입 시 무제한 익일 배송 혜택을 받을 수 있습니다." }
      ]
    },
    about: {
      title: "DIGGING 소개",
      desc: "DIGGING은 패션을 사랑하는 사람들을 위한 큐레이션 플랫폼입니다. 수많은 쇼핑 사이트 중에서 신뢰할 수 있고 가치 있는 곳만을 직접 선별하여 소개합니다. 단순한 링크 모음이 아닌, 각 사이트의 특성과 활용법까지 함께 제공하는 것이 우리의 차별점입니다.",
      values: [
        { icon: "🔍", title: "직접 검증", desc: "모든 사이트를 에디터가 직접 방문하고 검증합니다." },
        { icon: "🎯", title: "엄선된 큐레이션", desc: "양보다 질. 정말 가치 있는 사이트만 선별합니다." },
        { icon: "🌏", title: "글로벌 커버리지", desc: "한국, 미국, 유럽, 일본 등 전 세계를 아우릅니다." }
      ]
    },
    form: {
      title: "사이트 등록 요청", desc: "운영 중인 패션 쇼핑 사이트를 DIGGING에 등록하고 싶으시다면 아래 양식을 작성해주세요. 검토 후 연락드리겠습니다.",
      siteName: "사이트 이름", siteUrl: "사이트 URL", category: "카테고리", categoryPlaceholder: "카테고리 선택",
      description: "사이트 소개", descPlaceholder: "사이트에 대한 간단한 소개를 작성해주세요.",
      contact: "담당자 이메일", contactPlaceholder: "email@example.com", submit: "등록 요청하기 →",
      successTitle: "요청이 접수되었습니다!", successDesc: "검토 후 등록 여부를 이메일로 안내드리겠습니다. 감사합니다."
    },
    brands: {
      title: "브랜드 검색",
      desc: "좋아하는 브랜드를 검색하면 해당 브랜드를 취급하는 사이트를 한눈에 확인할 수 있습니다.",
      searchPlaceholder: "브랜드 검색...",
      popularTitle: "인기 브랜드",
      resultLabel: "취급 사이트",
      emptyResult: "해당 브랜드를 찾을 수 없습니다."
    },
    vision: { normal: "일반", protanopia: "적록 색약", achromatopsia: "완전 색맹" },
    comments: { title: "커뮤니티", desc: "패션에 대해 자유롭게 이야기해보세요. 좋은 사이트 추천, 쇼핑 후기, 질문 모두 환영합니다." },
    footer: {
      brandDesc: "전 세계 패션 쇼핑 사이트를 큐레이션하는 디깅 플랫폼.",
      navTitle: "메뉴", legalTitle: "정보",
      sites: "사이트 목록", guide: "쇼핑 가이드", brands: "브랜드", about: "소개",
      privacy: "개인정보처리방침", submit: "등록 요청", contact: "문의하기",
      copy: "© 2026 DIGGING. All rights reserved."
    },
    landing: {
      explore: "카테고리별 탐색",
      heroCta: "사이트 둘러보기 →",
      catCards: {
        korea: { icon: "🇰🇷", name: "국내 셀렉트샵" },
        luxury: { icon: "💎", name: "럭셔리 / 하이엔드" },
        street: { icon: "🛹", name: "스트릿" },
        vintage: { icon: "👜", name: "빈티지 / 중고" },
        sneaker: { icon: "👟", name: "스니커즈" },
        global: { icon: "🌍", name: "글로벌 멀티" }
      }
    }
  },
  en: {
    searchPlaceholder: "Search sites...",
    heroEyebrow: "Curated Fashion Destinations",
    heroTitle: "Discover Your<br/>Next Style",
    heroDesc: "We curate the best fashion shopping sites from around the world. Explore brands, vintage, and streetwear with category-specific shopping guides.",
    stats: { sites: "Curated Sites", cats: "Categories", langs: "Languages" },
    empty: "No results found.",
    countSuffix: "",
    nav: { sites: "Sites", guide: "Guide", brands: "Brands", about: "About", submit: "Submit" },
    categories: { all: "All", korea: "Korean Select", luxury: "Luxury / High-End", street: "Streetwear", vintage: "Vintage / Resale", sneaker: "Sneakers", global: "Global Multi" },
    guide: {
      title: "Fashion Shopping Guide",
      desc: "Smart shopping tips curated by DIGGING editors for each category.",
      items: [
        { icon: "🇰🇷", title: "Korean Select Shop Tips", body: "Korean platforms like Musinsa and 29CM run major sales in January and July. App-exclusive coupons often offer better deals than the website. Check Musinsa rankings and 29CM editor picks to stay on top of Korean fashion trends.", tip: "TIP: Always grab the first-purchase coupon — most offer 10-15% off." },
        { icon: "💎", title: "Luxury Online Shopping Strategy", body: "When buying from international luxury platforms, factor in customs duties and taxes. SSENSE and Mytheresa offer up to 70% off during end-of-season sales. Farfetch lets you compare inventory across boutiques worldwide, making it easier to find sold-out pieces.", tip: "TIP: Monitor exchange rates — buying when your currency is strong saves significantly." },
        { icon: "🛹", title: "Streetwear Drop Strategy", body: "Brands like Supreme and Palace drop new items at set times weekly. Follow leak accounts to know what's releasing, decide your size and color beforehand, and check out instantly at drop time. Hesitation means sold out. Kith and Beams collabs tend to appreciate in resale value.", tip: "TIP: Save your payment and shipping info 10 minutes before the drop." },
        { icon: "👜", title: "Vintage & Secondhand Guide", body: "On Grailed and Vestiaire Collective, always check seller ratings and transaction history. Request additional photos since condition is hard to judge from listings alone. For authentication peace of mind, use platforms with verification services like KREAM or Vestiaire.", tip: "TIP: For luxury vintage, always request serial number photos." },
        { icon: "👟", title: "Reading the Sneaker Resale Market", body: "Compare price graphs on StockX and GOAT to find the optimal buying window. Resale prices typically peak right after release and stabilize 2-3 weeks later. If it's not a limited edition, patience pays off. Kicks Crew often has international stock below retail.", tip: "TIP: Compare domestic retail price vs. overseas resale + shipping before deciding." },
        { icon: "🌍", title: "Making the Most of Global SPA", body: "Zara and H&M have different stock online vs. in-store. Try 'showrooming' — browse online first, then check fit in-store. ASOS offers 10% student discount and free returns. Uniqlo's best deals come during their Anniversary Sale in November.", tip: "TIP: ASOS Premier membership gives unlimited next-day delivery." }
      ]
    },
    about: {
      title: "About DIGGING",
      desc: "DIGGING is a curation platform for fashion lovers. We hand-pick only trustworthy and valuable shopping destinations from the vast ocean of online stores. We go beyond simple link aggregation — providing context, usage tips, and expert guides for every site we feature.",
      values: [
        { icon: "🔍", title: "Verified by Editors", desc: "Every site is personally visited and vetted by our team." },
        { icon: "🎯", title: "Quality Over Quantity", desc: "We only feature sites that truly deserve your attention." },
        { icon: "🌏", title: "Global Coverage", desc: "Spanning Korea, US, Europe, Japan, and beyond." }
      ]
    },
    form: {
      title: "Submit Your Site", desc: "Want your fashion shopping site featured on DIGGING? Fill out the form below and we'll review your submission.",
      siteName: "Site Name", siteUrl: "Site URL", category: "Category", categoryPlaceholder: "Select a category",
      description: "Site Description", descPlaceholder: "Tell us briefly about your site.",
      contact: "Contact Email", contactPlaceholder: "email@example.com", submit: "Submit Request →",
      successTitle: "Request submitted!", successDesc: "We'll review your site and get back to you via email. Thank you."
    },
    brands: {
      title: "Brand Search",
      desc: "Search for your favorite brand to see which sites carry it at a glance.",
      searchPlaceholder: "Search brands...",
      popularTitle: "Popular Brands",
      resultLabel: "Available Sites",
      emptyResult: "Brand not found."
    },
    vision: { normal: "Normal", protanopia: "Protanopia", achromatopsia: "Achromatopsia" },
    comments: { title: "Community", desc: "Talk freely about fashion. Site recommendations, shopping reviews, and questions are all welcome." },
    footer: {
      brandDesc: "A curation platform for fashion shopping sites worldwide.",
      navTitle: "Navigate", legalTitle: "Info",
      sites: "Site Directory", guide: "Shopping Guide", brands: "Brands", about: "About Us",
      privacy: "Privacy Policy", submit: "Submit Site", contact: "Contact",
      copy: "© 2026 DIGGING. All rights reserved."
    },
    landing: {
      explore: "Explore by Category",
      heroCta: "Explore Sites →",
      catCards: {
        korea: { icon: "🇰🇷", name: "Korean Select" },
        luxury: { icon: "💎", name: "Luxury / High-End" },
        street: { icon: "🛹", name: "Streetwear" },
        vintage: { icon: "👜", name: "Vintage / Resale" },
        sneaker: { icon: "👟", name: "Sneakers" },
        global: { icon: "🌍", name: "Global Multi" }
      }
    }
  },
  zh: {
    searchPlaceholder: "搜索网站...",
    heroEyebrow: "精选时尚目的地",
    heroTitle: "发现你的<br/>下一个风格",
    heroDesc: "我们精选全球最佳时尚购物网站。探索品牌、复古、街头风格，并获取分类购物指南。",
    stats: { sites: "精选网站", cats: "分类", langs: "支持语言" },
    empty: "未找到搜索结果。",
    countSuffix: "个",
    nav: { sites: "网站", guide: "指南", brands: "品牌", about: "关于", submit: "提交" },
    categories: { all: "全部", korea: "韩国精选店", luxury: "奢侈品 / 高端", street: "街头潮流", vintage: "复古 / 二手", sneaker: "球鞋", global: "全球综合" },
    guide: {
      title: "时尚购物指南",
      desc: "DIGGING编辑为每个分类整理的智慧购物技巧。",
      items: [
        { icon: "🇰🇷", title: "韩国精选店攻略", body: "Musinsa和29CM等韩国平台通常在1月和7月进行大促。App专属优惠券往往比网站更划算。关注Musinsa排行榜和29CM编辑推荐可以快速把握韩国时尚趋势。", tip: "TIP: 首购优惠券必领，大多提供10-15%折扣。" },
        { icon: "💎", title: "奢侈品在线购物策略", body: "从海外奢侈品平台购买时，务必计算关税和增值税。SSENSE和Mytheresa在季末大促时最高可享7折。Farfetch可以比较全球精品店的库存，更容易找到售罄商品。", tip: "TIP: 关注汇率变动，在有利时机购买可节省不少。" },
        { icon: "🛹", title: "街头潮流抢购攻略", body: "Supreme和Palace等品牌每周定时发售新品。提前关注泄露账号了解发售信息，决定好尺码和颜色后在发售时间立即下单。犹豫就会售罄。Kith和Beams的联名产品转售价格往往会上涨。", tip: "TIP: 发售前10分钟保存好支付和配送信息。" },
        { icon: "👜", title: "复古与二手购买指南", body: "在Grailed和Vestiaire Collective上务必查看卖家评分和交易记录。仅凭照片难以判断商品状态，建议要求额外照片。想要正品保障可使用KREAM或Vestiaire的验证服务。", tip: "TIP: 购买奢侈品复古商品时，务必索要序列号照片。" },
        { icon: "👟", title: "球鞋转售市场解读", body: "比较StockX和GOAT的价格走势图可以找到最佳购买时机。转售价通常在发售后达到峰值，2-3周后趋于稳定。如果不是限量款，等待更划算。Kicks Crew经常有低于零售价的海外库存。", tip: "TIP: 购买前比较国内零售价与海外转售价+运费。" },
        { icon: "🌍", title: "善用全球快时尚", body: "Zara和H&M的线上和线下库存不同。先在网上浏览，再去实体店试穿的'展厅策略'很有效。ASOS提供学生9折和免费退货。优衣库11月的感谢祭是大量囤基础款的最佳时机。", tip: "TIP: 加入ASOS Premier可享无限次日达配送。" }
      ]
    },
    about: {
      title: "关于DIGGING",
      desc: "DIGGING是为时尚爱好者打造的策展平台。我们从众多购物网站中精选可靠且有价值的目的地。不仅仅是链接汇总，我们为每个推荐网站提供特色分析和使用建议。",
      values: [
        { icon: "🔍", title: "编辑亲自验证", desc: "每个网站都由编辑亲自访问和审核。" },
        { icon: "🎯", title: "质量优于数量", desc: "只推荐真正值得关注的网站。" },
        { icon: "🌏", title: "全球覆盖", desc: "涵盖韩国、美国、欧洲、日本等地。" }
      ]
    },
    form: {
      title: "提交您的网站", desc: "想让您的时尚购物网站入驻DIGGING？请填写以下表单，我们会审核您的申请。",
      siteName: "网站名称", siteUrl: "网站网址", category: "分类", categoryPlaceholder: "选择分类",
      description: "网站介绍", descPlaceholder: "请简要介绍您的网站。",
      contact: "联系邮箱", contactPlaceholder: "email@example.com", submit: "提交申请 →",
      successTitle: "申请已提交！", successDesc: "我们将审核您的网站并通过邮件回复。感谢您的提交。"
    },
    brands: {
      title: "品牌搜索",
      desc: "搜索您喜欢的品牌，一目了然地查看哪些网站有售。",
      searchPlaceholder: "搜索品牌...",
      popularTitle: "热门品牌",
      resultLabel: "可购买网站",
      emptyResult: "未找到该品牌。"
    },
    vision: { normal: "正常", protanopia: "红绿色弱", achromatopsia: "全色盲" },
    comments: { title: "社区", desc: "与大家自由交流时尚话题。网站推荐、购物评价、提问都欢迎。" },
    footer: {
      brandDesc: "精选全球时尚购物网站的策展平台。",
      navTitle: "导航", legalTitle: "信息",
      sites: "网站目录", guide: "购物指南", brands: "品牌", about: "关于我们",
      privacy: "隐私政策", submit: "提交网站", contact: "联系我们",
      copy: "© 2026 DIGGING. All rights reserved."
    },
    landing: {
      explore: "按分类探索",
      heroCta: "浏览网站 →",
      catCards: {
        korea: { icon: "🇰🇷", name: "韩国精选店" },
        luxury: { icon: "💎", name: "奢侈品 / 高端" },
        street: { icon: "🛹", name: "街头潮流" },
        vintage: { icon: "👜", name: "复古 / 二手" },
        sneaker: { icon: "👟", name: "球鞋" },
        global: { icon: "🌍", name: "全球综合" }
      }
    }
  },
  ja: {
    searchPlaceholder: "サイトを検索...",
    heroEyebrow: "厳選ファッションサイト",
    heroTitle: "次のスタイルを<br/>見つけよう",
    heroDesc: "世界中のベストファッション通販サイトをキュレーション。カテゴリー別ショッピングガイドと共に、ブランド、ヴィンテージ、ストリートを探索しましょう。",
    stats: { sites: "キュレーションサイト", cats: "カテゴリー", langs: "対応言語" },
    empty: "検索結果が見つかりません。",
    countSuffix: "件",
    nav: { sites: "サイト", guide: "ガイド", brands: "ブランド", about: "紹介", submit: "掲載依頼" },
    categories: { all: "すべて", korea: "韓国セレクトショップ", luxury: "ラグジュアリー / ハイエンド", street: "ストリート", vintage: "ヴィンテージ / 中古", sneaker: "スニーカー", global: "グローバル" },
    guide: {
      title: "ファッションショッピングガイド",
      desc: "DIGGINGエディターがカテゴリー別にまとめた賢いショッピングのコツ。",
      items: [
        { icon: "🇰🇷", title: "韓国セレクトショップ攻略", body: "MusinsaやH29CMなどの韓国プラットフォームは、1月と7月に大型セールを実施します。アプリ限定クーポンがウェブより多いケースがほとんどです。Musinsaランキングと29CMエディターズピックを参考にすれば、トレンド把握にも役立ちます。", tip: "TIP: 初回購入クーポンは必ずゲット。ほとんどが10-15%オフです。" },
        { icon: "💎", title: "ラグジュアリーオンライン購入戦略", body: "海外ラグジュアリープラットフォームでの購入時は関税と消費税を必ず計算しましょう。SSENSEとMytheresaはシーズンオフセールで最大70%オフになります。Farfetchは世界中のブティック在庫を比較でき、完売商品も見つけやすいです。", tip: "TIP: 為替レートが有利なタイミングを狙って購入すると追加で節約できます。" },
        { icon: "🛹", title: "ストリートウェアドロップ対策", body: "SupremeやPalaceは毎週決まった時間に新商品をドロップします。リーク情報をフォローし、サイズとカラーを決めておいて、ドロップ時間に即決済しましょう。迷ったら即完売です。KithやBeamsのコラボはリセール価格が上がる傾向があります。", tip: "TIP: ドロップ10分前に決済情報と配送先を保存しておきましょう。" },
        { icon: "👜", title: "ヴィンテージ＆中古購入ガイド", body: "GrailedやVestiaire Collectiveでは、出品者の評価と取引履歴を必ず確認しましょう。写真だけでは状態判断が難しいので、追加写真をリクエストするのがおすすめです。正規品保証が欲しい場合は、KREAMやVestiaireの鑑定サービスを利用しましょう。", tip: "TIP: ラグジュアリーヴィンテージはシリアルナンバーの写真を必ずリクエスト。" },
        { icon: "👟", title: "スニーカーリセル市場の読み方", body: "StockXとGOATの価格推移グラフを比較すれば、最適な購入タイミングが分かります。リセール価格は発売直後が最も高く、2-3週間後に安定します。限定モデルでなければ待つのが有利です。Kicks Crewは定価より安い海外在庫を持っていることが多いです。", tip: "TIP: 国内定価と海外リセール価格+送料を比較してから決めましょう。" },
        { icon: "🌍", title: "グローバルSPAを賢く活用", body: "ZaraやH&Mは店頭とオンラインで在庫が異なります。オンラインで目をつけ、店舗で実際のフィットを確認する「ショールーミング」戦略が効果的です。ASOSは学割10%と無料返品が強み。ユニクロは11月の感謝祭セールでベーシックアイテムをまとめ買いするのがコスパ最高です。", tip: "TIP: ASOS Premierに加入すると無制限の翌日配送が利用できます。" }
      ]
    },
    about: {
      title: "DIGGINGについて",
      desc: "DIGGINGはファッションを愛する人のためのキュレーションプラットフォームです。数多くのショッピングサイトの中から信頼でき、価値あるサイトだけを厳選してご紹介します。単なるリンク集ではなく、各サイトの特徴と活用法まで一緒にお届けするのが私たちの強みです。",
      values: [
        { icon: "🔍", title: "エディターが直接検証", desc: "すべてのサイトをエディターが直接訪問・検証しています。" },
        { icon: "🎯", title: "量より質", desc: "本当に価値あるサイトだけを厳選します。" },
        { icon: "🌏", title: "グローバルカバレッジ", desc: "韓国、アメリカ、ヨーロッパ、日本など世界を網羅。" }
      ]
    },
    form: {
      title: "サイト掲載リクエスト", desc: "運営中のファッションサイトをDIGGINGに掲載しませんか？以下のフォームにご記入ください。審査後ご連絡いたします。",
      siteName: "サイト名", siteUrl: "サイトURL", category: "カテゴリー", categoryPlaceholder: "カテゴリーを選択",
      description: "サイト紹介", descPlaceholder: "サイトについて簡単にご紹介ください。",
      contact: "担当者メールアドレス", contactPlaceholder: "email@example.com", submit: "掲載リクエスト →",
      successTitle: "リクエストを受け付けました！", successDesc: "審査後、メールにてご連絡いたします。ありがとうございます。"
    },
    brands: {
      title: "ブランド検索",
      desc: "お気に入りのブランドを検索して、取り扱いサイトを一目で確認できます。",
      searchPlaceholder: "ブランドを検索...",
      popularTitle: "人気ブランド",
      resultLabel: "取り扱いサイト",
      emptyResult: "該当するブランドが見つかりません。"
    },
    vision: { normal: "通常", protanopia: "赤緑色弱", achromatopsia: "全色盲" },
    comments: { title: "コミュニティ", desc: "ファッションについて自由に語り合いましょう。サイト推薦、お買い物レビュー、質問すべて歓迎です。" },
    footer: {
      brandDesc: "世界中のファッション通販サイトをキュレーションするプラットフォーム。",
      navTitle: "メニュー", legalTitle: "情報",
      sites: "サイト一覧", guide: "ショッピングガイド", brands: "ブランド", about: "紹介",
      privacy: "プライバシーポリシー", submit: "掲載リクエスト", contact: "お問い合わせ",
      copy: "© 2026 DIGGING. All rights reserved."
    },
    landing: {
      explore: "カテゴリー別に探す",
      heroCta: "サイトを見る →",
      catCards: {
        korea: { icon: "🇰🇷", name: "韓国セレクトショップ" },
        luxury: { icon: "💎", name: "ラグジュアリー / ハイエンド" },
        street: { icon: "🛹", name: "ストリート" },
        vintage: { icon: "👜", name: "ヴィンテージ / 中古" },
        sneaker: { icon: "👟", name: "スニーカー" },
        global: { icon: "🌍", name: "グローバル" }
      }
    }
  }
};

// ── Theme State ──
let currentTheme = localStorage.getItem('digging-theme') || 'dark';

// ── Vision State ──
let currentVision = localStorage.getItem('digging-vision') || 'normal';

function applyVision(mode) {
  currentVision = mode;
  document.documentElement.dataset.vision = mode;
  localStorage.setItem('digging-vision', mode);
  const btn = document.getElementById('visionBtn');
  if (btn) {
    // Update icon: normal=eye, protanopia=eye with line, achromatopsia=eye-off
    if (mode === 'achromatopsia') {
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
    } else if (mode === 'protanopia') {
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><line x1="2" y1="2" x2="22" y2="22"/></svg>';
    } else {
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
    }
  }
  // Update dropdown active state
  const dropdown = document.getElementById('visionDropdown');
  if (dropdown) {
    dropdown.querySelectorAll('.vision-option').forEach(o => {
      o.classList.toggle('active', o.dataset.vision === mode);
    });
  }
}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('digging-theme', theme);
  const btn = document.getElementById('themeBtn');
  if (btn) {
    btn.innerHTML = theme === 'dark'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
}

// ── Language State ──
const langNames = { ko: 'KO', en: 'EN', zh: 'ZH', ja: 'JA' };
let currentLang = localStorage.getItem('digging-lang') || 'ko';

// ── Shared rendering ──
function applySharedLang(lang) {
  currentLang = lang;
  localStorage.setItem('digging-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  const t = i18n[lang];
  const page = document.body.dataset.page;

  // nav
  const nav = document.getElementById('nav');
  if (nav) {
    const links = [
      { href: 'sites.html', label: t.nav.sites, page: 'sites' },
      { href: 'guide.html', label: t.nav.guide, page: 'guide' },
      { href: 'brands.html', label: t.nav.brands, page: 'brands' },
      { href: 'about.html', label: t.nav.about, page: 'about' },
      { href: 'submit.html', label: t.nav.submit, page: 'submit' }
    ];
    nav.innerHTML = links.map(l =>
      `<a href="${l.href}"${l.page === page ? ' class="active"' : ''}>${l.label}</a>`
    ).join('');
  }

  // search placeholder
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  // lang button
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = langNames[lang];

  // lang dropdown active state
  const langDropdown = document.getElementById('langDropdown');
  if (langDropdown) {
    langDropdown.querySelectorAll('.lang-option').forEach(o => {
      o.classList.toggle('active', o.dataset.lang === lang);
    });
  }

  // vision dropdown labels
  const visionDropdown = document.getElementById('visionDropdown');
  if (visionDropdown) {
    visionDropdown.querySelectorAll('.vision-option').forEach(o => {
      o.textContent = t.vision[o.dataset.vision];
    });
  }

  // footer
  const ft = t.footer;
  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  setText('footerBrandDesc', ft.brandDesc);
  setText('footerNavTitle', ft.navTitle);
  setText('footerLegalTitle', ft.legalTitle);
  setText('footerNavSites', ft.sites);
  setText('footerNavGuide', ft.guide);
  setText('footerNavBrands', ft.brands);
  setText('footerNavAbout', ft.about);
  setText('footerPrivacy', ft.privacy);
  setText('footerNavSubmit', ft.submit);
  setText('footerContact', ft.contact);
  setText('footerCopy', ft.copy);
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  // lang selector
  const langSelector = document.getElementById('langSelector');
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn) {
    langBtn.addEventListener('click', (e) => { e.stopPropagation(); langSelector.classList.toggle('open'); });
    document.addEventListener('click', () => langSelector.classList.remove('open'));
  }

  if (langDropdown) {
    langDropdown.addEventListener('click', (e) => {
      const opt = e.target.closest('.lang-option');
      if (!opt) return;
      const lang = opt.dataset.lang;
      langSelector.classList.remove('open');
      applySharedLang(lang);
      document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    });
  }

  // theme toggle
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }
  applyTheme(currentTheme);

  // vision selector
  const visionSelector = document.getElementById('visionSelector');
  const visionBtn = document.getElementById('visionBtn');
  const visionDropdown = document.getElementById('visionDropdown');

  if (visionBtn) {
    visionBtn.addEventListener('click', (e) => { e.stopPropagation(); visionSelector.classList.toggle('open'); });
    document.addEventListener('click', () => visionSelector.classList.remove('open'));
  }

  if (visionDropdown) {
    visionDropdown.addEventListener('click', (e) => {
      const opt = e.target.closest('.vision-option');
      if (!opt) return;
      visionSelector.classList.remove('open');
      applyVision(opt.dataset.vision);
    });
  }
  applyVision(currentVision);

  // initial render
  applySharedLang(currentLang);
  document.dispatchEvent(new CustomEvent('langchange', { detail: currentLang }));
});
