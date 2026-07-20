// ── Site Detail Content ──
// Rich, original per-site review content (price, shipping/customs, pros/cons, bestFor, verdict)
// in 4 languages. Loaded by site.html only. Structure: siteDetails[url][field][lang].

const siteDetails = {
  "musinsa.com": {
    "priceRange": {
      "ko": "티셔츠 2~5만원대, 아우터 10~40만원대로 폭이 넓고, 1·7월 시즌오프와 무신사 단독 특가에서 인기 브랜드도 30~70% 할인된다.",
      "en": "Wide range — tees roughly KRW 20,000–50,000, outerwear KRW 100,000–400,000 — with popular brands cut 30–70% during the January and July season-off and Musinsa exclusives.",
      "zh": "价位跨度大，T恤约2万~5万韩元，外套约10万~40万韩元，人气品牌在1月和7月的季末特卖及Musinsa独家优惠中常打3~7折。",
      "ja": "価格帯は幅広く、Tシャツは約2〜5万ウォン、アウターは約10〜40万ウォン。人気ブランドも1月・7月のシーズンオフやMusinsa限定セールで30〜70%オフになる。"
    },
    "shipping": {
      "ko": "국내 전용 배송이며 무신사 자체 물류(무신사 스탠다드 등)는 대체로 3만원 안팎부터 무료배송, 입점 브랜드는 배송비·기준이 제각각이다. 브랜드 직배송이 섞여 있어 여러 브랜드를 담으면 배송비가 따로 붙는 경우가 많다.",
      "en": "Domestic Korea shipping only; Musinsa's own logistics (e.g. Musinsa Standard) is usually free above around KRW 30,000, while third-party brands set their own fees. Because many items ship directly from each brand, mixing brands in one cart often means separate shipping charges.",
      "zh": "仅限韩国境内配送；Musinsa自营物流（如Musinsa Standard）通常满约3万韩元免运费，入驻品牌则各自设定运费与门槛。由于不少商品由各品牌直接发货，同一购物车混搭多个品牌时往往要分别付运费。",
      "ja": "配送は韓国国内のみ。Musinsa自社物流（Musinsa Standardなど）は概ね3万ウォン前後から送料無料だが、出店ブランドは送料・条件がまちまち。多くがブランドから直送のため、複数ブランドを一度に買うと送料が別々に加算されることが多い。"
    },
    "pros": {
      "ko": [
        "국내 최대 브랜드 수와 재고",
        "실측 사이즈·후기 데이터가 방대",
        "무신사 스탠다드 등 가성비 PB"
      ],
      "en": [
        "Largest brand and stock selection in Korea",
        "Huge trove of measured sizing and reviews",
        "Strong value private label (Musinsa Standard)"
      ],
      "zh": [
        "韩国规模最大的品牌与库存",
        "海量实测尺寸与用户评价",
        "高性价比自营品牌Musinsa Standard"
      ],
      "ja": [
        "韓国最大級のブランド数と在庫",
        "膨大な実寸データとレビュー",
        "コスパの高いPB（Musinsa Standard）"
      ]
    },
    "cons": {
      "ko": [
        "브랜드별 배송·교환 정책이 제각각",
        "인기 사이즈·색상 조기 품절"
      ],
      "en": [
        "Shipping and return rules vary by brand",
        "Popular sizes and colors sell out fast"
      ],
      "zh": [
        "各品牌配送与退换政策不一",
        "热门尺码与颜色售罄快"
      ],
      "ja": [
        "ブランドごとに配送・交換ルールが異なる",
        "人気サイズ・カラーは早期完売"
      ]
    },
    "bestFor": {
      "ko": "특정 스트리트·캐주얼 브랜드를 실측과 후기까지 비교해 사고 싶은 20~30대에게 최적.",
      "en": "Best for 20s–30s who want to compare street and casual brands down to actual measurements and real reviews.",
      "zh": "最适合想凭实测尺寸和真实评价对比街头、休闲品牌的20~30岁人群。",
      "ja": "実寸とレビューまで見比べてストリート・カジュアル系ブランドを買いたい20〜30代に最適。"
    },
    "verdict": {
      "ko": "무신사는 '검색되는 옷장'이라 부를 만하다. 방대한 후기와 실측 데이터 덕에 사이즈 실패를 줄이기 좋지만, 결국 여러 입점 브랜드의 집합이라 배송·교환 경험은 한 몸처럼 매끄럽지 않다. 브랜드 단위로 장바구니를 나눠 담는 습관이 배송비를 아끼는 핵심이다.",
      "en": "Musinsa is essentially a searchable wardrobe. The depth of reviews and measured specs makes it easy to avoid sizing mistakes, but it's ultimately a collection of independent brands, so shipping and returns never feel like one seamless system. Splitting your cart by brand is the real trick to saving on delivery.",
      "zh": "Musinsa堪称一座「可搜索的衣橱」。丰富的评价和实测数据让你更少踩尺码的坑，但它本质上是众多入驻品牌的集合，配送与退换体验难以像一个整体那样顺畅。按品牌分开下单，才是省运费的关键。",
      "ja": "Musinsaはいわば「検索できるクローゼット」だ。豊富なレビューと実寸データのおかげでサイズ選びの失敗を減らせるが、結局は多数の出店ブランドの集合体で、配送や交換の体験はひとつのシステムのようには滑らかでない。ブランド単位でカートを分けるのが送料を抑える最大のコツだ。"
    }
  },
  "29cm.co.kr": {
    "priceRange": {
      "ko": "티셔츠·상의 3~7만원대, 아우터 15~40만원대로 무신사보다 평균 단가가 높고, 시즌오프 때 감도 높은 브랜드가 20~50% 할인된다.",
      "en": "Higher average pricing than Musinsa — tops around KRW 30,000–70,000, outerwear KRW 150,000–400,000 — with tasteful brands discounted 20–50% during season-off.",
      "zh": "均价高于Musinsa，上衣约3万~7万韩元，外套约15万~40万韩元，季末特卖时高格调品牌打8折至5折。",
      "ja": "平均単価はMusinsaより高め。トップスは約3〜7万ウォン、アウターは約15〜40万ウォンで、シーズンオフには感度の高いブランドが20〜50%オフになる。"
    },
    "shipping": {
      "ko": "국내 배송 중심이며 브랜드·상품별 무료배송 기준이 다르다. PT(콘텐츠)를 통한 기획전·단독 발매가 많아 예약·선주문 배송은 일반 상품보다 오래 걸릴 수 있다.",
      "en": "Mostly domestic Korea shipping, with free-shipping thresholds set per brand and item. Its content-driven curations (PT) feature many exclusive and pre-order drops, so reserved items can take longer to arrive than in-stock goods.",
      "zh": "以韩国国内配送为主，免运费门槛因品牌和商品而异。平台以内容策展（PT）带动大量独家与预售商品，预订款到货往往比现货更慢。",
      "ja": "配送は韓国国内が中心で、送料無料の基準はブランド・商品ごとに異なる。コンテンツ（PT）主導の企画・限定発売が多く、予約・先行注文の商品は在庫品より到着が遅くなることがある。"
    },
    "pros": {
      "ko": [
        "편집·큐레이션 콘텐츠(PT)의 완성도",
        "리빙·뷰티까지 아우르는 감도",
        "덜 흔한 디자이너·라이프스타일 브랜드"
      ],
      "en": [
        "Polished editorial curation (PT features)",
        "Refined taste spanning living and beauty",
        "Lesser-known designer and lifestyle brands"
      ],
      "zh": [
        "编辑策展内容（PT）质感出众",
        "涵盖家居、美妆的整体格调",
        "较少见的设计师与生活方式品牌"
      ],
      "ja": [
        "編集・キュレーション（PT）の完成度",
        "リビング・ビューティまで貫く感度",
        "あまり出回らないデザイナー・ライフスタイル系"
      ]
    },
    "cons": {
      "ko": [
        "동급 상품 대비 가격대가 높은 편",
        "초특가·재고 물량은 무신사보다 적음"
      ],
      "en": [
        "Pricier than comparable items elsewhere",
        "Smaller deep-discount and stock volume than Musinsa"
      ],
      "zh": [
        "同类商品价格偏高",
        "深度折扣与库存量少于Musinsa"
      ],
      "ja": [
        "同等品より価格が高め",
        "大幅値引き・在庫量はMusinsaより少ない"
      ]
    },
    "bestFor": {
      "ko": "가격보다 취향과 브랜드 스토리를 우선하는, 미니멀·감성 무드를 좋아하는 사람에게.",
      "en": "For those who put taste and a brand's story ahead of price, and love a minimal, mood-driven aesthetic.",
      "zh": "适合把品味和品牌故事看得比价格更重、偏爱极简与情绪氛围的人。",
      "ja": "価格より好みとブランドのストーリーを優先し、ミニマルで情緒的なムードを好む人に。"
    },
    "verdict": {
      "ko": "29CM는 쇼핑몰이라기보다 '읽는 편집숍'에 가깝다. 상품마다 붙는 에디토리얼이 구매를 설득하는 힘이 강해, 몰랐던 브랜드를 발견하는 재미가 크다. 다만 그 감도의 대가로 가격은 정직하지 않게 저렴하지 않으니, 세일 타이밍을 노리는 편이 현명하다.",
      "en": "29CM feels less like a store than an editorial shop you read. The essay attached to each product does real work in persuading you to buy, and the joy of discovering an unfamiliar brand is high. The price of that curation is that things aren't honestly cheap, so it pays to wait for a sale.",
      "zh": "29CM与其说是商城，不如说是一家「可阅读的选品店」。每件商品附带的编辑文案很有说服力，发现陌生好品牌的乐趣十足。但这份格调的代价是价格并不实在地便宜，聪明的做法是等季末折扣再出手。",
      "ja": "29CMはショップというより「読む編集店」に近い。商品ごとに添えられたエディトリアルが購買を後押しする力が強く、知らなかったブランドを見つける楽しさが大きい。その感度の代償として価格は正直に安くはないので、セールのタイミングを狙うのが賢い。"
    }
  },
  "wconcept.co.kr": {
    "priceRange": {
      "ko": "블라우스·니트 5~15만원대, 아우터·원피스 15~50만원대로 컨템포러리 디자이너 위주라 단가가 높고, 정기 세일·쿠폰 적용 시 20~40% 인하된다.",
      "en": "Contemporary-designer focused, so pricing runs high — blouses and knits around KRW 50,000–150,000, outerwear and dresses KRW 150,000–500,000 — dropping 20–40% with regular sales and coupons.",
      "zh": "以当代设计师女装为主，价位偏高，衬衫针织约5万~15万韩元，外套连衣裙约15万~50万韩元，逢定期促销与优惠券可减20%~40%。",
      "ja": "コンテンポラリー系デザイナー中心で単価は高め。ブラウス・ニットは約5〜15万ウォン、アウター・ワンピースは約15〜50万ウォンで、定期セールやクーポンで20〜40%下がる。"
    },
    "shipping": {
      "ko": "국내 배송 중심에 정기적으로 무료배송·할인 쿠폰 프로모션을 운영한다. 디자이너 브랜드 특성상 주문제작·예약 상품은 배송이 길어질 수 있어 상세 페이지의 발송 예정일 확인이 필수다.",
      "en": "Mostly domestic Korea shipping, with frequent free-shipping and discount-coupon promotions. Because of the designer-brand nature, made-to-order and reserved pieces can ship slowly, so always check the dispatch date on the product page.",
      "zh": "以韩国国内配送为主，经常推出免运费与折扣券活动。因设计师品牌多为订制或预售，发货可能较慢，务必查看商品页的预计发货日。",
      "ja": "配送は韓国国内が中心で、送料無料・割引クーポンのプロモーションを定期的に実施。デザイナーブランドの性質上、受注生産・予約商品は発送が遅れることがあるため、商品ページの発送予定日の確認が必須。"
    },
    "pros": {
      "ko": [
        "국내 컨템포러리·여성복 디자이너 강세",
        "쿠폰·적립 프로모션이 잦음",
        "오케이션·하객룩 등 격식 스타일에 강함"
      ],
      "en": [
        "Strong in Korean contemporary womenswear designers",
        "Frequent coupon and rewards promotions",
        "Great for occasion and wedding-guest dressing"
      ],
      "zh": [
        "韩国当代女装设计师品牌强",
        "优惠券与积分活动频繁",
        "婚礼、通勤等正式着装很强"
      ],
      "ja": [
        "韓国コンテンポラリー女性服デザイナーに強い",
        "クーポン・ポイント施策が頻繁",
        "式典・お呼ばれなどフォーマルに強い"
      ]
    },
    "cons": {
      "ko": [
        "캐주얼·스트리트 라인은 상대적으로 약함",
        "디자이너 상품은 교환·반품 조건이 까다로운 경우"
      ],
      "en": [
        "Relatively weak in casual and streetwear",
        "Exchange/return terms can be strict on designer items"
      ],
      "zh": [
        "休闲、街头线相对薄弱",
        "设计师商品的退换条件有时较严"
      ],
      "ja": [
        "カジュアル・ストリート系は相対的に弱い",
        "デザイナー商品は交換・返品条件が厳しい場合"
      ]
    },
    "bestFor": {
      "ko": "결혼식·오피스 등 격식 있는 자리의 여성복과 국내 디자이너 브랜드를 찾는 사람에게.",
      "en": "For those seeking womenswear for formal occasions — weddings, the office — and Korean designer labels.",
      "zh": "适合寻找婚礼、职场等正式场合女装以及韩国设计师品牌的人。",
      "ja": "結婚式やオフィスなどフォーマルな場の女性服、韓国デザイナーブランドを探す人に。"
    },
    "verdict": {
      "ko": "W컨셉의 정체성은 '국내 여성 컨템포러리 디자이너의 쇼룸'이다. 하객룩이나 오피스 룩처럼 완성도가 중요한 옷을 살 때 특히 빛나며, 쿠폰을 잘 챙기면 정가의 부담을 크게 덜 수 있다. 반대로 데일리 캐주얼이나 유니섹스를 찾는다면 다른 곳이 낫다.",
      "en": "W Concept's identity is a showroom for Korean women's contemporary designers. It shines most for pieces where polish matters, like wedding-guest or office looks, and stacking coupons meaningfully softens the sting of full price. If you're after everyday casual or unisex staples, look elsewhere.",
      "zh": "W Concept的定位是「韩国当代女装设计师的展厅」。买婚礼客装、通勤装这类讲究完成度的衣服时尤其出彩，善用优惠券能大幅减轻原价压力。反之，若你要的是日常休闲或中性单品，别处更合适。",
      "ja": "W Conceptの正体は「韓国女性コンテンポラリーデザイナーのショールーム」だ。お呼ばれ服やオフィス服のように完成度が重要な服を買うときに特に光り、クーポンを上手に使えば定価の負担を大きく減らせる。逆にデイリーカジュアルやユニセックスを探すなら他が良い。"
    }
  },
  "eql.kr": {
    "priceRange": {
      "ko": "티셔츠·상의 7~20만원대, 아우터 30~80만원대로 한섬 프리미엄 브랜드가 중심이라 전반적으로 고가이며, 세일 폭은 다른 몰보다 보수적이다.",
      "en": "Centered on Handsome's premium labels, so pricing is high overall — tops around KRW 70,000–200,000, outerwear KRW 300,000–800,000 — with more conservative discounts than other malls.",
      "zh": "以韩上（Handsome）旗下高端品牌为主，整体偏贵，上衣约7万~20万韩元，外套约30万~80万韩元，折扣力度比其他商城保守。",
      "ja": "ハンサム（Handsome）のプレミアムブランドが中心で全体的に高価格。トップスは約7〜20万ウォン、アウターは約30〜80万ウォンで、値引き幅は他モールより控えめ。"
    },
    "shipping": {
      "ko": "국내 배송 중심으로, 한섬 브랜드(타임·마인·시스템·랑방 컬렉션 등)의 공식 온라인 창구답게 정품·검수 신뢰도가 높다. 오프라인 백화점 재고와 연계돼 프리미엄 브랜드를 온라인에서 정가·정품으로 받을 수 있다.",
      "en": "Mostly domestic Korea shipping. As the official online channel for Handsome brands (Time, Mine, System, Lanvin Collection, etc.), authenticity and inspection are highly trustworthy, and it's tied to department-store stock so you can buy premium labels online at list price with confidence they're genuine.",
      "zh": "以韩国国内配送为主。作为Handsome旗下品牌（Time、Mine、System、Lanvin Collection等）的官方线上渠道，正品与验货可信度高，并与百货实体库存联动，可在线以正价买到正品高端品牌。",
      "ja": "配送は韓国国内が中心。ハンサムのブランド（Time・Mine・System・Lanvin Collectionなど）の公式オンライン窓口として正規品・検品の信頼性が高く、百貨店の在庫とも連動し、プレミアムブランドをオンラインで正価・正規品として受け取れる。"
    },
    "pros": {
      "ko": [
        "한섬 프리미엄 브랜드 공식 정품 채널",
        "고급 컨템포러리·모던 감성의 큐레이션",
        "백화점급 상품·검수 신뢰도"
      ],
      "en": [
        "Official authentic channel for Handsome premium brands",
        "Refined contemporary and modern curation",
        "Department-store-grade product and inspection trust"
      ],
      "zh": [
        "Handsome高端品牌官方正品渠道",
        "高级当代与现代格调的策展",
        "百货级商品与验货信任度"
      ],
      "ja": [
        "ハンサム・プレミアムブランドの公式正規品チャネル",
        "上質なコンテンポラリー・モダンなキュレーション",
        "百貨店級の商品・検品の信頼性"
      ]
    },
    "cons": {
      "ko": [
        "전반적으로 높은 가격대",
        "파격 세일·초특가가 드묾"
      ],
      "en": [
        "High pricing across the board",
        "Rarely runs steep clearance deals"
      ],
      "zh": [
        "整体价位偏高",
        "极少有大幅清仓特价"
      ],
      "ja": [
        "全体的に高めの価格帯",
        "大幅セール・激安がまれ"
      ]
    },
    "bestFor": {
      "ko": "타임·마인·시스템 등 한섬 브랜드를 백화점 대신 온라인에서 정품으로 사고 싶은 30~40대에게.",
      "en": "For 30s–40s who want to buy Handsome labels like Time, Mine, and System online, authentic, instead of at the department store.",
      "zh": "适合想不去百货、在线购买Time、Mine、System等Handsome正品品牌的30~40岁人群。",
      "ja": "Time・Mine・Systemなどハンサムのブランドを百貨店ではなくオンラインで正規品として買いたい30〜40代に。"
    },
    "verdict": {
      "ko": "EQL은 한섬이라는 배경 덕에 '온라인으로 옮긴 프리미엄 백화점 편집관' 같은 위치다. 브랜드 정통성과 상품 신뢰도가 가장 큰 자산이라, 가품 걱정 없이 컨템포러리 하이엔드를 사려는 사람에게 안심을 준다. 대신 가격은 정직하게 프리미엄이니, 할인보다 브랜드 가치를 사는 곳으로 이해하는 게 맞다.",
      "en": "Backed by Handsome, EQL sits like a premium department-store floor moved online. Brand legitimacy and product trust are its biggest assets, offering peace of mind to anyone buying contemporary high-end without counterfeit worries. In return the pricing is honestly premium, so treat it as a place to buy brand value rather than discounts.",
      "zh": "背靠Handsome的EQL，定位就像「搬到线上的高端百货选品馆」。品牌正统性与商品可信度是它最大的资产，让人无需担心假货即可入手当代高端。相应地，价格是实打实的高端，把它理解为一个买品牌价值而非买折扣的地方更贴切。",
      "ja": "EQLはハンサムを背景に、「オンラインへ移したプレミアム百貨店の編集フロア」のような立ち位置だ。ブランドの正統性と商品の信頼性が最大の資産で、偽物の心配なくコンテンポラリー・ハイエンドを買いたい人に安心を与える。その分、価格は正直にプレミアムなので、割引よりブランド価値を買う場所と捉えるのが正しい。"
    }
  },
  "lookpin.com": {
    "priceRange": {
      "ko": "티셔츠 1~3만원대, 아우터 5~15만원대로 10~20대 남성 캐주얼 중심의 저·중가 구성이며, 저가 브랜드 특가와 쿠폰이 잦다.",
      "en": "Low-to-mid pricing centered on menswear casual for teens and 20s — tees around KRW 10,000–30,000, outerwear KRW 50,000–150,000 — with frequent budget-brand deals and coupons.",
      "zh": "以10~20岁男性休闲为主的中低价位，T恤约1万~3万韩元，外套约5万~15万韩元，低价品牌特价与优惠券频繁。",
      "ja": "10〜20代メンズカジュアル中心の中〜低価格帯。Tシャツは約1〜3万ウォン、アウターは約5〜15万ウォンで、低価格ブランドの特価やクーポンが頻繁。"
    },
    "shipping": {
      "ko": "국내 배송 중심으로 다수의 소호·저가 남성 브랜드가 입점해 브랜드별 배송비·기준이 제각각이다. 소호몰 특성상 일부 상품은 재고·입고 대기로 발송이 지연될 수 있다.",
      "en": "Mostly domestic Korea shipping, with many indie/budget menswear brands on board, so fees and thresholds differ by brand. Given the indie-shop nature, some items may ship late due to restock or inbound delays.",
      "zh": "以韩国国内配送为主，众多个人小众（soho）低价男装入驻，各品牌运费与门槛不一。受小众店铺性质影响，部分商品可能因补货或到货等待而延迟发货。",
      "ja": "配送は韓国国内が中心。多数のソーホー系・低価格メンズブランドが出店しており、送料・基準はブランドごとにまちまち。ソーホーモールの性質上、一部商品は在庫・入荷待ちで発送が遅れることがある。"
    },
    "pros": {
      "ko": [
        "실제 착용 코디 사진 기반 탐색",
        "10~20대 남성 캐주얼 가성비",
        "코디 단위로 아이템을 발견하기 쉬움"
      ],
      "en": [
        "Browsing built on real worn-outfit photos",
        "Great value in teen/20s men's casual",
        "Easy to discover items outfit by outfit"
      ],
      "zh": [
        "基于真实穿搭照片浏览",
        "10~20岁男性休闲高性价比",
        "按整套穿搭发现单品很方便"
      ],
      "ja": [
        "実際の着用コーデ写真ベースで探せる",
        "10〜20代メンズカジュアルのコスパ",
        "コーデ単位でアイテムを見つけやすい"
      ]
    },
    "cons": {
      "ko": [
        "소호 브랜드 위주라 품질 편차가 큼",
        "브랜드별 배송·교환 정책 불일치"
      ],
      "en": [
        "Quality varies widely across indie brands",
        "Inconsistent shipping and return policies per brand"
      ],
      "zh": [
        "以小众品牌为主，品质参差",
        "各品牌配送与退换政策不一致"
      ],
      "ja": [
        "ソーホーブランド中心で品質のばらつきが大きい",
        "ブランドごとに配送・交換ポリシーがバラバラ"
      ]
    },
    "bestFor": {
      "ko": "예산은 넉넉지 않지만 코디 사진을 보고 통째로 스타일을 따라 사고 싶은 10~20대 남성에게.",
      "en": "For teen and 20s men on a modest budget who want to copy a whole look straight from an outfit photo.",
      "zh": "适合预算有限、想照着穿搭照片整套照搬风格的10~20岁男性。",
      "ja": "予算は多くないが、コーデ写真を見てスタイルを丸ごとマネして買いたい10〜20代男性に。"
    },
    "verdict": {
      "ko": "룩핀의 무기는 '옷이 아니라 코디를 판다'는 접근이다. 마네킹컷이 아니라 실제 착장 사진으로 탐색하니, 스타일링이 서툰 입문자가 전체 룩을 그대로 참고하기 좋다. 다만 저가 소호 브랜드 비중이 높은 만큼 후기와 소재 정보를 꼼꼼히 확인하는 습관이 필요하다.",
      "en": "Lookpin's edge is that it sells outfits, not garments. You browse by real styled photos rather than mannequin shots, which is perfect for beginners who struggle with styling and want to lift an entire look as-is. But with so many low-cost indie brands, you'll want the habit of checking reviews and fabric details carefully.",
      "zh": "Lookpin的武器是「卖的不是衣服，而是穿搭」。用真实上身照而非模特图来浏览，很适合不擅长搭配、想直接照搬整套造型的新手。但由于低价小众品牌占比高，务必养成仔细查看评价与面料信息的习惯。",
      "ja": "Lookpinの武器は「服ではなくコーデを売る」という発想だ。マネキンカットではなく実際の着用写真で探せるので、スタイリングが苦手な初心者が全体のルックをそのまま参考にしやすい。ただし低価格のソーホーブランドの比率が高いぶん、レビューと素材情報を丁寧に確認する習慣が必要だ。"
    }
  },
  "a-bly.com": {
    "priceRange": {
      "ko": "티셔츠·상의 1~3만원대, 아우터·원피스 3~10만원대로 10~20대 여성 트렌디 아이템 중심의 저가 구성이며, 앱 쿠폰·타임특가가 상시 열린다.",
      "en": "Budget-priced and centered on trendy womenswear for teens and 20s — tops around KRW 10,000–30,000, outerwear and dresses KRW 30,000–100,000 — with app coupons and flash deals running constantly.",
      "zh": "以10~20岁女性潮流单品为主的低价位，上衣约1万~3万韩元，外套连衣裙约3万~10万韩元，App优惠券与限时特价常年开放。",
      "ja": "10〜20代女性のトレンドアイテム中心の低価格帯。トップスは約1〜3万ウォン、アウター・ワンピースは約3〜10万ウォンで、アプリクーポンやタイムセールが常時開催される。"
    },
    "shipping": {
      "ko": "국내 배송 중심이며 여러 판매자가 입점한 마켓 구조로, 앱 전용 혜택·무료배송 쿠폰이 자주 제공된다. 판매자 직배송이 많아 여러 마켓을 함께 주문하면 배송이 따로 오고 도착 시점도 달라질 수 있다.",
      "en": "Mostly domestic Korea shipping on a multi-seller marketplace model, with frequent app-only perks and free-shipping coupons. Many items ship directly from each seller, so ordering across several shops means separate parcels arriving at different times.",
      "zh": "以韩国国内配送为主，采用多卖家入驻的市集模式，常提供App专属福利与免运费券。多为卖家直发，同时下单多家店铺时会分开发货、到货时间也各异。",
      "ja": "配送は韓国国内が中心で、複数の販売者が出店するマーケット構造。アプリ限定特典や送料無料クーポンが頻繁に提供される。販売者直送が多く、複数のマーケットをまとめて注文すると別々に届き、到着時期も異なることがある。"
    },
    "pros": {
      "ko": [
        "빠른 트렌드 반영과 저렴한 가격",
        "앱 중심의 개인화 추천·쿠폰",
        "패션 외 뷰티·라이프까지 폭넓음"
      ],
      "en": [
        "Fast trend turnover at low prices",
        "App-driven personalized picks and coupons",
        "Broad beyond fashion into beauty and lifestyle"
      ],
      "zh": [
        "潮流反应快、价格便宜",
        "以App为核心的个性化推荐与优惠券",
        "除服饰外延伸至美妆与生活"
      ],
      "ja": [
        "トレンドの反映が速く価格が安い",
        "アプリ中心のパーソナライズ推薦・クーポン",
        "ファッション以外にビューティ・ライフまで幅広い"
      ]
    },
    "cons": {
      "ko": [
        "판매자별 품질·사이즈 편차",
        "여러 마켓 합배송 어려움"
      ],
      "en": [
        "Quality and sizing vary by seller",
        "Hard to combine shipping across shops"
      ],
      "zh": [
        "各卖家品质与尺码差异大",
        "多店铺难以合并配送"
      ],
      "ja": [
        "販売者ごとに品質・サイズのばらつき",
        "複数マーケットの同梱配送が難しい"
      ]
    },
    "bestFor": {
      "ko": "최신 트렌드를 부담 없는 가격으로 빠르게 사고 싶은 10~20대 여성에게.",
      "en": "For teen and 20s women who want the latest trends fast at an easy price.",
      "zh": "适合想以无压力价格快速入手最新潮流的10~20岁女性。",
      "ja": "最新トレンドを気軽な価格でサッと買いたい10〜20代女性に。"
    },
    "verdict": {
      "ko": "에이블리는 '앱 안의 여성 트렌드 마켓'으로, 개인화 추천과 쿠폰으로 저가 트렌디 쇼핑을 게임처럼 만든다. 가격과 속도가 가장 큰 강점이지만, 다수 판매자가 모인 구조라 품질과 사이즈는 후기로 검증해야 실패가 적다. 저가 트렌드를 즐기되 기대치는 가격에 맞추는 게 현명하다.",
      "en": "Ably is a women's trend marketplace inside an app, turning cheap, trendy shopping into something gamified through personalized picks and coupons. Price and speed are its biggest strengths, but with so many sellers pooled together, you should verify quality and sizing through reviews to avoid misses. Enjoy the cheap trends, but keep your expectations calibrated to the price.",
      "zh": "Ably是一座「App里的女性潮流市集」，用个性化推荐和优惠券把低价潮流购物做得像游戏一样。价格与速度是它最大的优势，但因多卖家聚合，品质和尺码需靠评价来验证才少踩雷。享受低价潮流的同时，把期待值对齐到价格才明智。",
      "ja": "Ablyは「アプリの中の女性トレンドマーケット」で、パーソナライズ推薦とクーポンによって低価格のトレンドショッピングをゲームのように楽しくする。価格とスピードが最大の強みだが、多数の販売者が集まる構造ゆえ、品質とサイズはレビューで検証してこそ失敗が減る。低価格のトレンドを楽しみつつ、期待値は価格に合わせるのが賢明だ。"
    }
  },
  "ssense.com": {
    "priceRange": {
      "ko": "컨템포러리 브랜드는 20만~60만원대, 하이엔드 럭셔리는 100만원 이상이며 시즌오프 세일 때는 최대 50~70%까지 내려간다.",
      "en": "Contemporary labels run roughly KRW 200,000–600,000 and high-end luxury tops KRW 1,000,000, with end-of-season sales cutting up to 50–70%.",
      "zh": "当代设计师品牌约合人民币1,000–3,500元，高端奢侈品则超过6,000元，季末促销最高可达5–7折。",
      "ja": "コンテンポラリーは2万～6万円台、ハイエンドラグジュアリーは10万円以上で、シーズンオフには最大50～70%オフになる。"
    },
    "shipping": {
      "ko": "한국 직배송이 가능하며 결제 시 관세·부가세가 포함된 DDP 방식이라 물건 받을 때 추가 세금 폭탄이 없다. DHL/UPS 특송으로 보통 3~6일 소요되고, 일정 금액(약 300달러) 이상이면 무료 배송이라 15만원 초과 과세 구간이라도 예상 총액이 결제 화면에서 확정된다.",
      "en": "It ships directly to Korea on a DDP basis, meaning duties and VAT are bundled into checkout so there are no surprise customs charges on delivery. DHL/UPS express takes about 3–6 days, and orders above roughly USD 300 ship free, so even past Korea's KRW 150,000 taxable threshold your all-in total is locked in at checkout.",
      "zh": "支持直邮韩国，且采用DDP方式在结账时已含关税与增值税，收货时不会被追加征税。DHL/UPS快递通常3–6天送达，订单满约300美元免运费，因此即便超过韩国15万韩元的应税门槛，最终总价也在结账页锁定。",
      "ja": "韓国への直送に対応し、決済時に関税・付加価値税を含むDDP方式のため、受け取り時に追加課税がない。DHL/UPSの特送で通常3～6日、約300ドル以上で送料無料なので、韓国の15万ウォン課税ラインを超えても総額が決済画面で確定する。"
    },
    "pros": {
      "ko": [
        "관세 포함 DDP 결제라 최종 결제액이 곧 총비용 — 국내 통관 스트레스가 없다",
        "스트리트·컨템포러리부터 하이엔드까지 셀렉션 폭이 넓고 사이즈 재고가 안정적",
        "제품 상세·촬영 퀄리티가 높고 앱 UX가 직구 초보에게도 쉽다"
      ],
      "en": [
        "DDP pricing means the checkout total is your true final cost — no customs hassle at home",
        "Selection spans street/contemporary to high-end with reliably deep size stock",
        "Excellent product detail and photography, and an app UX that's beginner-friendly for cross-border buyers"
      ],
      "zh": [
        "DDP含税结算，结账金额即为最终总成本，无需操心国内清关",
        "选品从街头、当代到高端跨度广，尺码库存稳定",
        "商品详情与拍摄质量高，App体验对海淘新手友好"
      ],
      "ja": [
        "関税込みのDDP決済で、決済額がそのまま総費用となり通関のストレスがない",
        "ストリート・コンテンポラリーからハイエンドまで品揃えが広く、サイズ在庫が安定",
        "商品詳細と撮影クオリティが高く、アプリのUXが直輸入初心者にも易しい"
      ]
    },
    "cons": {
      "ko": [
        "반품 시 국제 반송 배송비를 구매자가 부담하는 경우가 많아 사이즈 실패의 비용이 크다",
        "인기 세일 품목은 사이즈가 빠르게 소진되고 재입고가 거의 없다"
      ],
      "en": [
        "Returns often require the buyer to pay international return shipping, so a sizing miss is costly",
        "Popular sale sizes sell out fast and rarely restock"
      ],
      "zh": [
        "退货多需买家承担国际退运费，尺码选错成本较高",
        "热门促销尺码售罄快，几乎不补货"
      ],
      "ja": [
        "返品時に国際返送料を購入者負担とする場合が多く、サイズ失敗のコストが大きい",
        "人気のセール品はサイズがすぐ完売し、再入荷はほぼない"
      ]
    },
    "bestFor": {
      "ko": "총비용을 미리 확정하고 싶고 컨템포러리~하이엔드를 한 곳에서 안전하게 직구하려는 사람.",
      "en": "Shoppers who want their total cost fixed upfront and prefer buying contemporary-to-high-end labels safely in one place.",
      "zh": "希望提前锁定总花费、想在一处安全选购当代至高端品牌的人。",
      "ja": "総費用を先に確定させたく、コンテンポラリー～ハイエンドを一か所で安全に直輸入したい人。"
    },
    "verdict": {
      "ko": "DDP 결제 구조 덕분에 '결제한 금액 = 끝'이라는 점이 직구 초보에게 가장 큰 안심 포인트다. 다만 반품 비용 부담이 있으니 사이즈 가이드를 꼼꼼히 확인하고 첫 주문은 확실한 아이템으로 시작하길 권한다.",
      "en": "The DDP structure — pay once and you're done — is the biggest reassurance for first-time cross-border buyers. Just weigh the return-shipping burden: check the size guide carefully and make your first order something you're sure of.",
      "zh": "DDP结算意味着“付了就结束”，这对海淘新手是最大的安心点。但需权衡退货运费负担，务必仔细核对尺码表，首单建议从有把握的单品入手。",
      "ja": "DDP方式による「決済した額で終わり」という点が直輸入初心者にとって最大の安心材料だ。ただし返品コスト負担があるため、サイズガイドを丁寧に確認し、初回はサイズに確信の持てるアイテムから始めたい。"
    }
  },
  "mytheresa.com": {
    "priceRange": {
      "ko": "정가 위주의 하이엔드 럭셔리 중심이라 대체로 60만원 이상이며, 연 2회 시즌 세일에서 30~50% 할인이 들어간다.",
      "en": "Centered on full-price high-end luxury, so mostly above KRW 600,000, with 30–50% cuts during its twice-yearly seasonal sales.",
      "zh": "以正价高端奢侈品为主，普遍在人民币3,500元以上，每年两次季节大促打3–5折。",
      "ja": "定価中心のハイエンドラグジュアリーが主で概ね6万円以上、年2回のシーズンセールで30～50%オフになる。"
    },
    "shipping": {
      "ko": "한국 직배송을 지원하고 관세·세금이 포함된 DDP로 결제되어 통관 시 추가 청구가 없다. DHL 특송으로 보통 2~4일이면 도착할 만큼 배송이 빠르지만, 15만원 초과분에 대한 세금이 상품가에 반영되어 최종가가 다소 높게 느껴질 수 있다.",
      "en": "It supports direct shipping to Korea on a DDP basis, so duties and tax are prepaid and nothing is billed at customs. DHL express is fast — typically 2–4 days — though the tax on amounts above the KRW 150,000 threshold is baked into the price, which can make the final figure feel higher.",
      "zh": "支持直邮韩国并以DDP结算，关税与税费已预付，清关时不再追加。DHL快递通常2–4天送达，速度很快，但超过15万韩元部分的税费已计入价格，最终金额可能显得偏高。",
      "ja": "韓国直送に対応し、関税・税込みのDDPで決済されるため通関時の追加請求がない。DHL特送で通常2～4日と速いが、15万ウォン超過分の税が商品価格に反映され、最終額がやや高く感じられることがある。"
    },
    "pros": {
      "ko": [
        "더 로우·보테가·구찌 등 하이엔드 라인업이 탄탄하고 신상 입고가 빠르다",
        "DHL 특송 기반이라 도착이 빠르고 포장·검수 상태가 안정적",
        "에디토리얼과 스타일링 제안이 정교해 아이템 코디 참고가 된다"
      ],
      "en": [
        "A strong high-end lineup (The Row, Bottega, Gucci) with fast arrival of new season pieces",
        "DHL-express based, so delivery is quick and packaging/QC are consistently solid",
        "Refined editorials and styling suggestions that genuinely help with outfit ideas"
      ],
      "zh": [
        "The Row、Bottega、Gucci等高端阵容强大，新品到货快",
        "基于DHL快递，到货快且包装与验货状态稳定",
        "编辑内容与搭配建议精致，对造型很有参考价值"
      ],
      "ja": [
        "The Row・ボッテガ・グッチなどハイエンドの品揃えが充実し新作の入荷が早い",
        "DHL特送ベースで到着が速く、梱包・検品の状態が安定している",
        "エディトリアルとスタイリング提案が精緻でコーデの参考になる"
      ]
    },
    "cons": {
      "ko": [
        "세일 폭이 크지 않고 정가 판매 비중이 높아 최저가 직구에는 부적합",
        "반품은 가능하나 절차가 다소 형식적이고 교환보다 환불 후 재구매가 현실적"
      ],
      "en": [
        "Discounts are modest and much is sold at full price, so it's not for bargain-hunting",
        "Returns are accepted but the process is fairly rigid — refund-then-rebuy is more realistic than exchange"
      ],
      "zh": [
        "折扣力度不大，正价销售占比高，不适合追求最低价的海淘",
        "可退货但流程较为刻板，比起换货，退款后重新购买更实际"
      ],
      "ja": [
        "セール幅が小さく定価販売の比率が高いため、最安値の直輸入には不向き",
        "返品は可能だが手続きがやや形式的で、交換より返金後の再購入が現実的"
      ]
    },
    "bestFor": {
      "ko": "신상 하이엔드 럭셔리를 빠르고 안전하게 받고 싶은 정가 구매 성향의 소비자.",
      "en": "Full-price-comfortable shoppers who want new-season high-end luxury delivered fast and safely.",
      "zh": "接受正价、希望快速安全收到当季高端奢侈品的消费者。",
      "ja": "新作ハイエンドラグジュアリーを速く安全に受け取りたい、定価購入志向の消費者。"
    },
    "verdict": {
      "ko": "가격 경쟁력보다 큐레이션 품질과 배송 신뢰도로 승부하는 플랫폼이다. 하이엔드 신상을 놓치기 싫고 통관·배송 리스크를 최소화하고 싶다면 값을 지불할 가치가 있으며, 세일 시즌을 노리면 가성비 균형도 맞출 수 있다.",
      "en": "This platform competes on curation quality and delivery reliability rather than price. If you don't want to miss high-end new arrivals and want minimal customs/shipping risk, it's worth paying for — and timing the sale seasons brings the value into balance.",
      "zh": "该平台靠选品质量与配送可靠性取胜，而非价格。若不想错过高端新品且希望将清关与配送风险降至最低，值得为此买单；瞄准促销季则能兼顾性价比。",
      "ja": "価格競争力よりもキュレーションの質と配送の信頼性で勝負するプラットフォームだ。ハイエンド新作を逃したくなく、通関・配送のリスクを最小化したいなら支払う価値があり、セール時期を狙えばコスパの均衡も取れる。"
    }
  },
  "net-a-porter.com": {
    "priceRange": {
      "ko": "여성 럭셔리 전문으로 대부분 50만원 이상, 디자이너 라인은 100만원을 훌쩍 넘으며 세일 시즌엔 30~50% 할인이 붙는다.",
      "en": "A women's luxury specialist where most pieces exceed KRW 500,000 and designer lines run well past KRW 1,000,000, with 30–50% off in sale season.",
      "zh": "专注女性奢侈品，多数单品超过人民币3,000元，设计师系列远超6,000元，促销季打3–5折。",
      "ja": "女性ラグジュアリー専門で多くが5万円以上、デザイナーラインは10万円を大きく超え、セール時期は30～50%オフになる。"
    },
    "shipping": {
      "ko": "한국 직배송이 되며 관세·부가세 포함 DDP 결제라 받을 때 별도 세금이 청구되지 않는다. DHL 특송으로 3~5일이면 도착하고, 상징적인 블랙 박스 패키징으로 검수·포장 완성도가 높은 편이라 선물 구매에도 무리가 없다.",
      "en": "It ships directly to Korea with DDP checkout that includes duties and VAT, so no separate tax is charged on receipt. DHL express arrives in 3–5 days, and its signature black-box packaging keeps QC and presentation high enough for gifting.",
      "zh": "支持直邮韩国，DDP结算已含关税与增值税，收货时不另行征税。DHL快递3–5天送达，标志性黑色礼盒包装的验货与呈现度高，作为礼物购买也很合适。",
      "ja": "韓国直送に対応し、関税・付加価値税込みのDDP決済のため受け取り時に別途課税がない。DHL特送で3～5日、象徴的なブラックボックス梱包で検品・仕上がりが高く、ギフト購入にも向く。"
    },
    "pros": {
      "ko": [
        "여성 럭셔리 큐레이션의 깊이가 최상급 — 드레스·아우터·백 셀렉션이 특히 강하다",
        "DDP + 프리미엄 패키징으로 통관 걱정 없이 선물용으로도 안심",
        "사이즈·핏 정보와 모델 착용 스펙 표기가 상세해 오구매 확률이 낮다"
      ],
      "en": [
        "Best-in-class depth of women's luxury curation — especially strong on dresses, outerwear and bags",
        "DDP plus premium packaging makes it worry-free even as a gift",
        "Detailed size/fit info and model-spec notes lower the odds of a wrong purchase"
      ],
      "zh": [
        "女性奢侈品选品深度顶级——连衣裙、外套与包袋尤为出色",
        "DDP加高级包装，无需担心清关，作礼物也安心",
        "尺码与版型信息、模特穿着规格标注详尽，降低买错概率"
      ],
      "ja": [
        "女性ラグジュアリーのキュレーションの深さが最高級——ドレス・アウター・バッグが特に強い",
        "DDPとプレミアム梱包で通関の心配なくギフトにも安心",
        "サイズ・フィット情報とモデル着用スペックの表記が詳細で誤購入の確率が低い"
      ]
    },
    "cons": {
      "ko": [
        "남성·유니섹스 라인이 거의 없어 대상 폭이 좁다(남성은 자매 사이트 MR PORTER 이용)",
        "반품 시 국제 반송·재고 처리 기간이 있어 환불이 즉시 이뤄지지는 않는다"
      ],
      "en": [
        "Almost no men's/unisex range, so its scope is narrow (men use its sister site MR PORTER)",
        "Returns involve international return shipping and processing time, so refunds aren't instant"
      ],
      "zh": [
        "几乎没有男装/中性线，覆盖面窄（男士需用姊妹站MR PORTER）",
        "退货涉及国际退运与处理周期，退款并非即时到账"
      ],
      "ja": [
        "メンズ・ユニセックスがほぼなく対象が狭い（男性は姉妹サイトMR PORTERを利用）",
        "返品は国際返送と在庫処理の期間があり、返金は即時ではない"
      ]
    },
    "bestFor": {
      "ko": "완성도 높은 여성 럭셔리를 통관 걱정 없이 사고 싶고 선물 포장까지 고려하는 소비자.",
      "en": "Shoppers wanting polished women's luxury with no customs worries, gift presentation included.",
      "zh": "希望无清关顾虑地购买高完成度女性奢侈品、并考虑礼品包装的消费者。",
      "ja": "完成度の高い女性ラグジュアリーを通関の心配なく買いたく、ギフト梱包まで重視する消費者。"
    },
    "verdict": {
      "ko": "여성 럭셔리에 한정하면 큐레이션·정보·패키징 삼박자가 가장 안정적인 플랫폼 중 하나다. 가격은 정가 중심이라 저렴하진 않지만, DDP와 상세한 핏 정보 덕분에 '실패 없는 직구'를 원하는 사람에게 특히 잘 맞는다.",
      "en": "For women's luxury specifically, it's one of the most consistent platforms across curation, information and packaging. Prices are full-price-leaning and not cheap, but DDP and detailed fit data make it a great fit for anyone who wants a 'no-fail' cross-border purchase.",
      "zh": "仅就女性奢侈品而言，它在选品、信息与包装三方面最为稳定。价格偏正价并不便宜，但凭借DDP与详尽的版型信息，尤其适合追求“零失误海淘”的人。",
      "ja": "女性ラグジュアリーに限れば、キュレーション・情報・梱包の三拍子が最も安定したプラットフォームの一つだ。価格は定価中心で安くはないが、DDPと詳細なフィット情報により「失敗しない直輸入」を求める人に特に合う。"
    }
  },
  "farfetch.com": {
    "priceRange": {
      "ko": "전 세계 부티크가 입점한 마켓플레이스라 가격 편차가 크며, 같은 상품도 판매처에 따라 다르고 부티크별 할인으로 20~60% 세일 매물을 찾을 수 있다.",
      "en": "A marketplace of boutiques worldwide, so prices vary widely — the same item differs by seller, and boutique-level discounts surface 20–60% off deals.",
      "zh": "汇聚全球买手店的市场平台，价格差异大，同款因卖家而异，通过各买手店折扣可找到2–6折的商品。",
      "ja": "世界中のブティックが出店するマーケットプレイスのため価格差が大きく、同じ商品も販売元により異なり、ブティックごとの割引で20～60%オフの出物が見つかる。"
    },
    "shipping": {
      "ko": "한국 직배송을 지원하고 상당수 주문이 관세 포함 DDP로 처리되지만, 상품이 여러 부티크에서 개별 발송되면 배송비·도착 시점이 건별로 달라진다. 배송 기간은 발송지에 따라 3~8일로 편차가 크고, 15만원 초과 과세는 대개 결제에 반영되나 판매처에 따라 예외가 있을 수 있어 결제 화면의 세금 표기를 꼭 확인해야 한다.",
      "en": "It ships to Korea and many orders are handled DDP with duties included, but when items ship from multiple boutiques, shipping cost and arrival times vary per parcel. Delivery ranges 3–8 days depending on origin, and while the tax above KRW 150,000 is usually built in, exceptions exist by seller — so always check the tax line at checkout.",
      "zh": "支持直邮韩国，多数订单以含关税的DDP处理，但商品若从多家买手店分别发货，运费与到货时间会逐件不同。配送因发货地约3–8天不等，超过15万韩元的税通常已计入，但因卖家而异可能有例外，务必核对结账页的税费栏。",
      "ja": "韓国直送に対応し多くの注文が関税込みDDPで処理されるが、複数のブティックから個別発送される場合は送料・到着時期が件ごとに異なる。配送は発送地により3～8日と幅があり、15万ウォン超過の税は通常反映されるが販売元により例外もあるため、決済画面の税表記を必ず確認したい。"
    },
    "pros": {
      "ko": [
        "전 세계 부티크 재고를 한 번에 검색 — 품절 아이템·희귀 사이즈를 찾을 확률이 가장 높다",
        "판매처별 가격 비교가 가능해 같은 제품을 더 싸게 사는 협상력이 생긴다",
        "빈티지·아카이브·소규모 편집숍 물량까지 접근 범위가 압도적으로 넓다"
      ],
      "en": [
        "Search boutique stock worldwide at once — the best odds of finding sold-out items or rare sizes",
        "Cross-seller price comparison gives you leverage to buy the same piece cheaper",
        "Unmatched reach, including vintage, archive and small-boutique stock"
      ],
      "zh": [
        "一次检索全球买手店库存——找到断货单品或稀有尺码的概率最高",
        "可跨卖家比价，为同款争取更低价格提供筹码",
        "覆盖范围极广，连古着、存档与小型买手店货源都能触达"
      ],
      "ja": [
        "世界中のブティック在庫を一度に検索——完売品や希少サイズを見つけられる確率が最も高い",
        "販売元ごとの価格比較ができ、同じ商品をより安く買う交渉力が生まれる",
        "ヴィンテージ・アーカイブ・小規模セレクトショップの在庫までアクセス範囲が圧倒的に広い"
      ]
    },
    "cons": {
      "ko": [
        "여러 부티크에서 나눠 배송되면 배송비·반품 절차가 건별로 복잡해지고 교환이 특히 어렵다",
        "판매처마다 반품 정책·포장·검수 편차가 있어 품질 경험이 일정하지 않다"
      ],
      "en": [
        "Split shipments from multiple boutiques make shipping/returns complex per parcel, with exchanges especially hard",
        "Return policy, packaging and QC vary by seller, so the quality experience isn't uniform"
      ],
      "zh": [
        "多家买手店分开发货时，运费与退货流程逐件变复杂，换货尤其困难",
        "各卖家的退货政策、包装与验货存在差异，品质体验不一致"
      ],
      "ja": [
        "複数ブティックから分割発送されると送料・返品手続きが件ごとに複雑になり、交換が特に難しい",
        "販売元ごとに返品ポリシー・梱包・検品にばらつきがあり、品質体験が一定しない"
      ]
    },
    "bestFor": {
      "ko": "다른 곳에서 품절된 아이템이나 특정 사이즈를 끝까지 찾아내고 가격까지 비교하려는 헌터형 쇼퍼.",
      "en": "Hunter-type shoppers determined to track down sold-out items or a specific size while comparing prices.",
      "zh": "执意找到别处断货单品或特定尺码、并要比价的“猎手型”买家。",
      "ja": "他店で完売した商品や特定サイズを最後まで探し出し、価格まで比較したいハンタータイプの買い物客。"
    },
    "verdict": {
      "ko": "'세상 어딘가엔 있다'는 접근성이 최대 무기로, 재고·사이즈 탐색력에서는 독보적이다. 다만 분할 배송과 판매처별 편차가 실전 리스크이니, 주문 전 판매 부티크·반품 정책·세금 표기를 개별 확인하고 되도록 단일 판매처로 장바구니를 묶는 게 안전하다.",
      "en": "Its killer feature is reach — 'it exists somewhere' — and it's unrivaled for hunting stock and sizes. The real-world risks are split shipments and seller variance, so check each boutique's return policy and tax line before ordering and, where possible, keep your cart to a single seller.",
      "zh": "最大武器是“世上某处总有货”的可得性，在库存与尺码搜寻上无出其右。但分开发货与卖家差异是实战风险，下单前请逐一核对买手店、退货政策与税费栏，并尽量将购物车集中在单一卖家。",
      "ja": "「世界のどこかにはある」というアクセス性が最大の武器で、在庫・サイズの探索力は群を抜く。ただし分割発送と販売元ごとのばらつきが実戦のリスクなので、注文前に販売ブティック・返品ポリシー・税表記を個別に確認し、できるだけ単一の販売元でカートをまとめると安全だ。"
    }
  },
  "doverstreetmarket.com": {
    "priceRange": {
      "ko": "꼼데가르송이 만든 아방가르드 콘셉트스토어답게 디자이너 가격대가 높아 대개 30만원 이상이며, 한정·협업 아이템은 프리미엄이 붙고 세일은 제한적이다.",
      "en": "As the avant-garde concept store built by Comme des Garçons, prices skew high — usually above KRW 300,000 — with premiums on limited/collab pieces and only limited sales.",
      "zh": "作为Comme des Garçons打造的先锋概念店，设计师价位偏高，通常在人民币1,500元以上，限量与联名单品有溢价，促销有限。",
      "ja": "コム デ ギャルソンが手がけるアヴァンギャルドなコンセプトストアらしくデザイナー価格帯が高く概ね3万円以上、限定・コラボ品はプレミアが付き、セールは限定的だ。"
    },
    "shipping": {
      "ko": "한국을 포함한 국제 배송을 지원하지만 SSENSE·Mytheresa 같은 완전 DDP 방식이 아니라 배송지에 따라 관세·부가세가 도착 시 별도로 청구될 수 있으니 15만원 초과 주문은 세금을 미리 계산해두는 게 좋다. 특송 기준 배송은 대략 5~9일이 걸린다.",
      "en": "It ships internationally including Korea, but unlike full-DDP sites such as SSENSE or Mytheresa, duties and VAT may be billed separately on arrival depending on destination — so budget the tax in advance for orders above KRW 150,000. Express delivery takes roughly 5–9 days.",
      "zh": "支持包括韩国在内的国际配送，但不同于SSENSE、Mytheresa这类全DDP站点，关税与增值税可能视目的地在到货时另行征收，故超过15万韩元的订单最好预先估税。快递配送约5–9天。",
      "ja": "韓国を含む国際配送に対応するが、SSENSEやMytheresaのような完全DDP方式ではなく、配送先により関税・付加価値税が到着時に別途請求される場合があるため、15万ウォン超の注文は税を事前に見積もっておくとよい。特送で配送は概ね5～9日かかる。"
    },
    "pros": {
      "ko": [
        "꼼데가르송·준야 와타나베 등 DSM 독점·선행 발매 아이템을 온라인으로 구할 수 있다",
        "일반 셀렉트샵엔 없는 아방가르드·실험적 라인업으로 희소성이 높다",
        "매장 큐레이션 감도가 그대로 반영돼 남들과 겹치지 않는 셀렉션을 만난다"
      ],
      "en": [
        "Access DSM-exclusive and early-release pieces (Comme des Garçons, Junya Watanabe) online",
        "An avant-garde, experimental lineup you won't find at mainstream select shops — genuinely scarce",
        "The in-store curation sensibility carries over, so you get selections that don't overlap with everyone else's"
      ],
      "zh": [
        "可在线购得DSM独家与抢先发售单品（Comme des Garçons、Junya Watanabe）",
        "先锋、实验性的阵容在一般买手店见不到，稀缺性高",
        "门店的选品品味被完整保留，能遇到与他人不撞的单品"
      ],
      "ja": [
        "コム デ ギャルソンやジュンヤ ワタナベなどDSM限定・先行発売アイテムをオンラインで入手できる",
        "一般のセレクトショップにないアヴァンギャルドで実験的なラインナップで希少性が高い",
        "店舗のキュレーション感度がそのまま反映され、人と被らないセレクションに出会える"
      ]
    },
    "cons": {
      "ko": [
        "완전 DDP가 아닐 수 있어 도착 시 관세·부가세가 별도 청구되면 총비용이 예상보다 커진다",
        "재고가 적고 인기 아이템은 순식간에 품절되며 반품·교환 절차가 대형 플랫폼보다 유연하지 않다"
      ],
      "en": [
        "Not necessarily full-DDP, so separate duty/VAT on arrival can push total cost above expectations",
        "Stock is thin, hot items sell out instantly, and returns/exchanges are less flexible than at large platforms"
      ],
      "zh": [
        "未必全程DDP，到货时另收关税与增值税可能使总成本超预期",
        "库存少，热门单品瞬间售罄，退换流程不如大型平台灵活"
      ],
      "ja": [
        "完全DDPとは限らず、到着時に関税・付加価値税が別途請求されると総費用が想定を上回る",
        "在庫が少なく人気アイテムは瞬時に完売し、返品・交換の手続きが大手プラットフォームより柔軟でない"
      ]
    },
    "bestFor": {
      "ko": "꼼데가르송 계열과 아방가르드 디자이너를 좋아하고 희소한 독점 아이템을 위해 관세·재고 리스크를 감수할 수 있는 마니아.",
      "en": "Enthusiasts who love the Comme des Garçons universe and avant-garde designers, and will accept duty/stock risk for scarce exclusives.",
      "zh": "钟爱Comme des Garçons体系与先锋设计师、愿为稀有独家单品承担关税与库存风险的爱好者。",
      "ja": "コム デ ギャルソン系やアヴァンギャルドなデザイナーを好み、希少な限定アイテムのために関税・在庫リスクを許容できるマニア。"
    },
    "verdict": {
      "ko": "가격·편의성으로 접근할 곳이 아니라, 다른 데서 못 구하는 독점·아방가르드 셀렉션을 위해 찾는 큐레이션 특화 스토어다. DDP가 보장되지 않을 수 있으니 15만원 초과 주문은 관세를 미리 계산해 총비용을 잡고, 원하는 아이템이 보이면 재고가 적은 만큼 망설이지 말고 결정하는 편이 낫다.",
      "en": "This isn't a place to approach for price or convenience — it's a curation-first store you visit for exclusive, avant-garde selections you can't get elsewhere. Since DDP isn't guaranteed, budget duties in advance on orders above KRW 150,000, and given the thin stock, don't hesitate once you spot the piece you want.",
      "zh": "这不是为价格或便利而来的地方，而是为别处买不到的独家、先锋选品而来的选品优先门店。由于DDP无保证，超过15万韩元的订单请预先估算关税以确定总成本；鉴于库存稀少，看到心仪单品时不要犹豫。",
      "ja": "価格や利便性で選ぶ場所ではなく、他では手に入らない限定・アヴァンギャルドなセレクションのために訪れるキュレーション特化ストアだ。DDPが保証されない場合があるため15万ウォン超の注文は関税を事前に計算して総費用を把握し、在庫が少ない分、欲しいアイテムを見つけたら迷わず決めるのがよい。"
    }
  },
  "goat.com": {
    "priceRange": {
      "ko": "정가가 아닌 리셀 시세로 거래되어 인기 모델은 프리미엄이 붙지만, 비인기 사이즈나 구형 모델은 정가 이하로도 잡을 수 있습니다.",
      "en": "Priced at resale market value rather than retail, so hyped models carry a premium, but unpopular sizes and older models can be found below retail.",
      "zh": "以转售行情而非原价交易，热门型号会有溢价，但冷门尺码和旧款有时能低于原价入手。",
      "ja": "定価ではなくリセル相場で取引されるため人気モデルはプレミアが付きますが、不人気サイズや旧モデルは定価以下で狙えることもあります。"
    },
    "shipping": {
      "ko": "한국 직배송을 지원하며 결제 통화는 USD입니다. 미화 150달러(미국 출고분은 한미FTA로 200달러) 초과 시 관세·부가세가 부과되고, 인증 절차를 거쳐 대략 7~14일 소요됩니다.",
      "en": "Ships directly to Korea with USD checkout. Duty and VAT apply above USD 150 (USD 200 for US-origin items under the Korea-US FTA), and delivery takes roughly 7-14 days after authentication.",
      "zh": "支持直邮韩国，以美元结算。超过150美元（美国出货享韩美FTA为200美元）需缴关税和增值税，经鉴定后约需7~14天送达。",
      "ja": "韓国への直送に対応し決済はUSDです。150ドル（米国出荷分は韓米FTAで200ドル）超で関税・付加価値税が課され、認証を経て概ね7~14日で届きます。"
    },
    "pros": {
      "ko": [
        "전문 감정팀의 정품 인증으로 가품 리스크가 낮음",
        "동일 모델의 다양한 컨디션·사이즈 재고가 방대함",
        "모델별 가격 이력 차트로 구매 타이밍 판단 가능"
      ],
      "en": [
        "Low counterfeit risk thanks to expert-team authentication",
        "Vast inventory across conditions and sizes for the same model",
        "Per-model price history charts help time your purchase"
      ],
      "zh": [
        "专业鉴定团队正品认证，假货风险低",
        "同一型号的多种成色和尺码库存丰富",
        "各型号价格历史图表助你判断购买时机"
      ],
      "ja": [
        "専門鑑定チームの正規品認証で偽物リスクが低い",
        "同一モデルの様々なコンディション・サイズの在庫が豊富",
        "モデル別の価格履歴チャートで購入タイミングを判断できる"
      ]
    },
    "cons": {
      "ko": [
        "인기 모델은 리셀 프리미엄으로 정가보다 크게 비쌈",
        "단순 변심 반품이 어렵고 환불이 스토어 크레딧으로 처리되는 경우가 있음"
      ],
      "en": [
        "Hyped models cost well above retail due to resale premiums",
        "Change-of-mind returns are hard, and refunds may be issued as store credit"
      ],
      "zh": [
        "热门型号因转售溢价远高于原价",
        "无理由退货困难，退款有时以商店积分形式处理"
      ],
      "ja": [
        "人気モデルはリセルプレミアで定価より大幅に高い",
        "自己都合の返品が難しく、返金がストアクレジット扱いになる場合がある"
      ]
    },
    "bestFor": {
      "ko": "발매가 끝난 한정 스니커즈를 정품 보증받아 확실하게 구하고 싶은 컬렉터.",
      "en": "Collectors who want to reliably secure sold-out limited sneakers with authentication guaranteed.",
      "zh": "希望在正品保证下稳妥入手已售罄限量球鞋的收藏者。",
      "ja": "販売終了した限定スニーカーを正規品保証付きで確実に手に入れたいコレクター。"
    },
    "verdict": {
      "ko": "스니커즈 리셀 시장의 사실상 표준으로, 재고 규모와 감정 신뢰도가 가장 큰 강점입니다. 가격은 시세에 좌우되므로 가격 이력 차트를 활용해 급등 구간을 피하는 것이 핵심입니다.",
      "en": "The de facto standard of the sneaker resale market, with inventory scale and authentication trust as its biggest strengths. Since pricing follows the market, the key is using the price-history charts to avoid buying into spikes.",
      "zh": "球鞋转售市场的事实标准，库存规模和鉴定可信度是最大优势。价格随行情波动，善用价格历史图表避开暴涨区间是关键。",
      "ja": "スニーカーリセル市場の事実上の標準で、在庫規模と鑑定の信頼性が最大の強みです。価格は相場次第なので、価格履歴チャートを使い高騰局面を避けるのが肝心です。"
    }
  },
  "stockx.com": {
    "priceRange": {
      "ko": "주식처럼 실시간 Bid·Ask로 가격이 형성되어 시세가 투명하고, 거래량이 적은 모델은 낮은 Bid를 걸어 저렴하게 낙찰받을 수 있습니다.",
      "en": "Prices form through real-time Bids and Asks like a stock exchange, keeping the market transparent; low-volume models can be won cheaply by placing a low Bid.",
      "zh": "价格如股票般通过实时Bid和Ask形成，行情透明；成交量小的型号可挂低价Bid以低价成交。",
      "ja": "株式のようにリアルタイムのBid・Askで価格が形成され相場が透明で、取引量の少ないモデルは低いBidを置いて安く落札できます。"
    },
    "shipping": {
      "ko": "한국 직배송을 지원하며, 판매자→StockX 인증센터→구매자 2단계를 거치기 때문에 배송이 GOAT보다 다소 느린 편(약 10~15일)입니다. 미화 150달러 초과 시 관세·부가세가 부과됩니다.",
      "en": "Ships directly to Korea, but because items route seller to StockX authentication center to buyer, delivery is somewhat slower than GOAT (about 10-15 days). Duty and VAT apply above USD 150.",
      "zh": "支持直邮韩国，但因需经卖家→StockX鉴定中心→买家两段流程，配送比GOAT略慢（约10~15天）。超过150美元需缴关税和增值税。",
      "ja": "韓国への直送に対応しますが、出品者→StockX認証センター→購入者の2段階を経るため配送はGOATよりやや遅め（約10~15日）です。150ドル超で関税・付加価値税が課されます。"
    },
    "pros": {
      "ko": [
        "시세 차트·거래량이 공개되어 초보자도 적정가를 판단하기 쉬움",
        "스니커즈 외 전자기기·트레이딩 카드까지 카테고리가 넓음",
        "모든 상품이 인증센터 검수 후 배송됨"
      ],
      "en": [
        "Public price charts and volume make fair pricing easy even for beginners",
        "Broad categories beyond sneakers, including electronics and trading cards",
        "Every item is inspected at the authentication center before shipping"
      ],
      "zh": [
        "行情图表和交易量公开，新手也易判断合理价",
        "品类广泛，除球鞋外还有电子产品和交易卡",
        "所有商品经鉴定中心检验后发货"
      ],
      "ja": [
        "相場チャート・取引量が公開され初心者でも適正価格を判断しやすい",
        "スニーカー以外に電子機器・トレーディングカードまでカテゴリーが広い",
        "全商品が認証センターの検品を経て配送される"
      ]
    },
    "cons": {
      "ko": [
        "2단계 물류 구조상 GOAT보다 배송이 오래 걸림",
        "낙찰 후에는 최종 판매로 취소·반품이 사실상 불가능함"
      ],
      "en": [
        "Two-stage logistics make shipping slower than GOAT",
        "After a match it is a final sale, so cancellation and returns are effectively impossible"
      ],
      "zh": [
        "两段式物流导致配送比GOAT更慢",
        "成交后为最终销售，取消和退货基本不可能"
      ],
      "ja": [
        "2段階の物流構造でGOATより配送に時間がかかる",
        "落札後は最終販売で、キャンセル・返品が事実上不可能"
      ]
    },
    "bestFor": {
      "ko": "시세 데이터를 근거로 저점에 Bid를 걸어 합리적으로 구매하려는 실속형 구매자.",
      "en": "Value-minded buyers who want to place low Bids at dips based on market data.",
      "zh": "希望依据行情数据在低点挂Bid理性购买的实惠型买家。",
      "ja": "相場データを根拠に安値でBidを置き、合理的に購入したい実利志向の買い手。"
    },
    "verdict": {
      "ko": "가격 투명성 하나만큼은 리셀 플랫폼 중 최고입니다. 급하지 않다면 Ask를 즉시 사는 대신 Bid로 원하는 가격을 제시해 두는 전략이 유효하며, 대신 배송 기간에 여유를 둬야 합니다.",
      "en": "For sheer price transparency, it is the best among resale platforms. If you are not in a rush, placing a Bid at your target price instead of buying the Ask outright works well, but plan for the longer shipping window.",
      "zh": "单论价格透明度，它在转售平台中最出色。若不急，用Bid挂出目标价而非直接买Ask的策略很有效，但要为较长配送期留出余地。",
      "ja": "価格の透明性だけならリセルプラットフォームで随一です。急がないならAskを即買いせずBidで希望価格を提示する戦略が有効ですが、配送期間には余裕を持つ必要があります。"
    }
  },
  "kickscrew.com": {
    "priceRange": {
      "ko": "리셀 프리미엄보다는 정가 안팎의 소싱가로 판매하며, 시즌오프·쿠폰 세일 시 인기 모델도 합리적인 가격대에 나옵니다.",
      "en": "Prices sit around retail via sourcing rather than resale premiums, and seasonal or coupon sales bring even popular models to reasonable levels.",
      "zh": "以接近原价的采购价销售而非转售溢价，季末或优惠券促销时热门型号也能有合理价位。",
      "ja": "リセルプレミアよりも定価前後のソーシング価格で販売し、シーズンオフやクーポンセール時は人気モデルも手頃な価格帯で出ます。"
    },
    "shipping": {
      "ko": "홍콩 기반으로 한국 직배송을 지원하며, 여러 공급처에서 소싱하기 때문에 상품별 발송지·배송 기간(약 7~15일)에 편차가 있습니다. 미화 150달러 초과 시 과세되며 정품을 보증합니다.",
      "en": "Hong Kong-based with direct shipping to Korea; because items are sourced from multiple suppliers, origin and delivery time (about 7-15 days) vary by item. Duty applies above USD 150, and authenticity is guaranteed.",
      "zh": "总部位于香港，支持直邮韩国；因从多个供货渠道采购，各商品发货地和配送时间（约7~15天）存在差异。超过150美元需缴税，并保证正品。",
      "ja": "香港拠点で韓国への直送に対応し、複数の仕入れ先からソーシングするため商品ごとに発送地・配送期間（約7~15日）に差があります。150ドル超で課税され、正規品を保証します。"
    },
    "pros": {
      "ko": [
        "리셀가가 아닌 소싱가라 인기 모델도 비교적 저렴함",
        "국내에서 품절된 사이즈·모델의 재고를 찾기 쉬움",
        "쿠폰과 프로모션이 잦아 추가 할인 여지가 큼"
      ],
      "en": [
        "Sourcing prices, not resale prices, keep even popular models relatively cheap",
        "Easy to find sizes and models sold out domestically",
        "Frequent coupons and promotions leave room for extra discounts"
      ],
      "zh": [
        "采购价而非转售价，热门型号也相对便宜",
        "易于找到国内已售罄的尺码和型号",
        "优惠券和促销频繁，额外折扣空间大"
      ],
      "ja": [
        "リセル価格ではなくソーシング価格で人気モデルも比較的安い",
        "国内で品切れのサイズ・モデルの在庫を見つけやすい",
        "クーポンやプロモーションが頻繁で追加割引の余地が大きい"
      ]
    },
    "cons": {
      "ko": [
        "소싱처가 다양해 배송 기간·발송지 편차가 큼",
        "반품·교환 정책이 리셀 대형 플랫폼보다 제한적임"
      ],
      "en": [
        "Wide variation in delivery time and origin due to diverse sourcing",
        "Return and exchange policies are more restrictive than major resale platforms"
      ],
      "zh": [
        "货源多样导致配送时间和发货地差异大",
        "退换货政策比大型转售平台更受限"
      ],
      "ja": [
        "ソーシング先が多様で配送期間・発送地の差が大きい",
        "返品・交換ポリシーが大手リセルプラットフォームより限定的"
      ]
    },
    "bestFor": {
      "ko": "국내에 없는 사이즈나 모델을 리셀 프리미엄 없이 합리적으로 구하려는 실속 구매자.",
      "en": "Practical buyers seeking sizes or models unavailable at home without paying resale premiums.",
      "zh": "希望以合理价格入手国内没有的尺码或型号、又不想付转售溢价的实惠型买家。",
      "ja": "国内にないサイズやモデルをリセルプレミアなしで手頃に手に入れたい実利志向の買い手。"
    },
    "verdict": {
      "ko": "리셀보다 셀렉트샵 성격이 강해 인기 모델을 상대적으로 저렴하게 살 수 있는 것이 최대 매력입니다. 다만 상품마다 발송 조건이 다르므로 주문 전 예상 배송 기간과 반품 조건을 반드시 확인하세요.",
      "en": "More select shop than resale, its biggest appeal is buying popular models relatively cheaply. That said, shipping terms differ per item, so always check the estimated delivery time and return conditions before ordering.",
      "zh": "更偏向精选店而非转售，最大魅力是能相对便宜地买到热门型号。但每件商品发货条件不同，下单前务必确认预计配送时间和退货条件。",
      "ja": "リセルよりセレクトショップ色が強く、人気モデルを比較的安く買えるのが最大の魅力です。ただし商品ごとに発送条件が異なるため、注文前に予想配送期間と返品条件を必ず確認しましょう。"
    }
  },
  "sneakersnstuff.com": {
    "priceRange": {
      "ko": "정가 판매가 기본이며 유럽 한정 콜라보가 강점이라 프리미엄보다는 정가 구매 기회가 많고, 시즌 세일 폭이 큰 편입니다.",
      "en": "Retail pricing is the norm, and with Europe-exclusive collabs as its strength there are many at-retail chances rather than premiums, with sizable seasonal sales.",
      "zh": "以原价销售为主，凭借欧洲限定联名，更多是原价购买机会而非溢价，季节性折扣力度较大。",
      "ja": "定価販売が基本で、欧州限定コラボが強みのため、プレミアより定価購入の機会が多く、シーズンセールの幅も大きめです。"
    },
    "shipping": {
      "ko": "스웨덴에서 발송되며 한국 배송을 지원합니다. EU 외 배송 시 현지 부가세(VAT)가 제외되어 표시가보다 저렴해질 수 있으나, 미화 150달러 초과분은 한국에서 관세·부가세가 부과되고 배송은 약 7~14일 걸립니다.",
      "en": "Ships from Sweden with support for Korea delivery. For shipments outside the EU, local VAT is deducted so the price can drop below the listed figure, but amounts above USD 150 incur Korean duty and VAT, with delivery in about 7-14 days.",
      "zh": "从瑞典发货，支持韩国配送。发往欧盟以外时扣除当地增值税(VAT)，价格可能低于标价，但超过150美元部分在韩国需缴关税和增值税，配送约需7~14天。",
      "ja": "スウェーデンから発送され韓国配送に対応します。EU域外への発送では現地の付加価値税(VAT)が控除され表示価格より安くなることがありますが、150ドル超分は韓国で関税・付加価値税が課され、配送は約7~14日かかります。"
    },
    "pros": {
      "ko": [
        "유럽·북유럽 한정 콜라보 등 국내에서 보기 힘든 셀렉션",
        "EU 외 배송 시 VAT 제외로 가격 경쟁력이 생김",
        "오래된 컨셉스토어답게 큐레이션 완성도가 높음"
      ],
      "en": [
        "Europe and Nordic-exclusive collabs rarely seen in Korea",
        "VAT deduction on non-EU shipping adds price competitiveness",
        "Refined curation befitting a long-standing concept store"
      ],
      "zh": [
        "欧洲及北欧限定联名等国内难见的甄选",
        "发往欧盟以外扣除VAT带来价格竞争力",
        "作为老牌概念店，甄选完成度高"
      ],
      "ja": [
        "欧州・北欧限定コラボなど国内で見づらいセレクション",
        "EU域外発送でVAT控除により価格競争力が生まれる",
        "老舗コンセプトストアらしくキュレーションの完成度が高い"
      ]
    },
    "cons": {
      "ko": [
        "유럽 발송이라 배송비·배송 기간 부담이 있음",
        "인기 한정판은 래플(추첨) 방식이라 확정 구매가 어려움"
      ],
      "en": [
        "European origin means higher shipping cost and longer transit",
        "Hyped limited releases use raffles, making guaranteed purchase hard"
      ],
      "zh": [
        "从欧洲发货，运费和配送时间负担较大",
        "热门限量款采用抽签(raffle)方式，难以确定购买"
      ],
      "ja": [
        "欧州発送のため送料・配送期間の負担がある",
        "人気限定品はラッフル(抽選)方式で確実な購入が難しい"
      ]
    },
    "bestFor": {
      "ko": "남들과 겹치지 않는 유럽 한정 콜라보 스니커즈를 찾는 취향이 뚜렷한 마니아.",
      "en": "Discerning enthusiasts hunting Europe-exclusive collab sneakers that no one else has.",
      "zh": "追求与众不同的欧洲限定联名球鞋、品味鲜明的爱好者。",
      "ja": "他人と被らない欧州限定コラボスニーカーを探す、好みのはっきりしたマニア。"
    },
    "verdict": {
      "ko": "물량 승부보다 큐레이션과 유럽 한정 콜라보로 승부하는 곳입니다. VAT 제외로 의외로 가격이 좋을 때가 있으니, 관세 한도(150달러)를 넘는지 계산해 총구매가를 따져보고 결정하는 것이 좋습니다.",
      "en": "It competes on curation and Europe-exclusive collabs rather than sheer volume. VAT deduction can make prices surprisingly good, so calculate whether you cross the USD 150 duty threshold and weigh the all-in cost before deciding.",
      "zh": "它靠甄选和欧洲限定联名取胜而非拼量。扣除VAT后价格有时意外划算，建议先算清是否超过150美元关税线，权衡到手总价再决定。",
      "ja": "物量勝負よりキュレーションと欧州限定コラボで勝負する店です。VAT控除で意外と価格が良いことがあるので、関税ライン(150ドル)を超えるか計算し、総購入額を見極めて決めるとよいでしょう。"
    }
  },
  "asos.com": {
    "priceRange": {
      "ko": "중저가 자체 브랜드와 수백 개 입점 브랜드가 섞여 폭넓은 가격대를 형성하며, 상시 세일과 프로모션 코드로 정가 구매가 오히려 드문 편입니다.",
      "en": "Mid-to-low-price in-house labels mixed with hundreds of stocked brands span a wide range, and with constant sales and promo codes, paying full price is actually rare.",
      "zh": "中低价自有品牌与数百个入驻品牌混合，价格区间宽广，常态促销和优惠码使原价购买反而少见。",
      "ja": "中低価格の自社ブランドと数百の取扱ブランドが混在し幅広い価格帯を形成、常時セールとプロモコードで定価購入はむしろ稀です。"
    },
    "shipping": {
      "ko": "영국에서 한국으로 배송하며 일정 금액 이상 구매 시 무료배송이 적용됩니다. 미화 150달러 초과 시 관세·부가세가 부과되므로 분할 주문으로 한도를 조절하는 전략이 유효하고, 배송은 약 7~12일 걸립니다.",
      "en": "Ships from the UK to Korea with free shipping above a set order value. Duty and VAT apply above USD 150, so splitting orders to stay under the threshold works well; delivery takes about 7-12 days.",
      "zh": "从英国发往韩国，订单满一定金额免运费。超过150美元需缴关税和增值税，因此拆单控制额度的策略有效，配送约需7~12天。",
      "ja": "英国から韓国へ配送し、一定金額以上で送料無料が適用されます。150ドル超で関税・付加価値税が課されるため、分割注文で上限を調整する戦略が有効で、配送は約7~12日かかります。"
    },
    "pros": {
      "ko": [
        "의류·신발·액세서리 SKU가 방대해 선택지가 넓음",
        "세일과 프로모션 코드가 잦아 저렴하게 구매 가능",
        "실측 사이즈 정보와 리뷰가 상세해 사이즈 실패가 적음"
      ],
      "en": [
        "Enormous SKU range across clothing, shoes, and accessories",
        "Frequent sales and promo codes enable cheap buys",
        "Detailed measurements and reviews reduce sizing mistakes"
      ],
      "zh": [
        "服装、鞋履、配饰SKU海量，选择面广",
        "促销和优惠码频繁，可低价购买",
        "实测尺码信息和评价详细，尺码失误少"
      ],
      "ja": [
        "衣類・靴・アクセサリーのSKUが膨大で選択肢が広い",
        "セールやプロモコードが頻繁で安く購入できる",
        "実寸サイズ情報とレビューが詳細でサイズ失敗が少ない"
      ]
    },
    "cons": {
      "ko": [
        "저가 자체 브랜드는 품질·마감 편차가 있음",
        "반품 시 국제 반송 비용과 절차 부담이 있음"
      ],
      "en": [
        "Budget in-house labels vary in quality and finishing",
        "Returns involve international shipping cost and hassle"
      ],
      "zh": [
        "低价自有品牌质量和做工参差不齐",
        "退货涉及国际退运费用和流程负担"
      ],
      "ja": [
        "低価格の自社ブランドは品質・仕上げにばらつきがある",
        "返品時に国際返送の費用と手続きの負担がある"
      ]
    },
    "bestFor": {
      "ko": "트렌디한 옷을 저렴하게 여러 벌 사고 싶은 20~30대 캐주얼 쇼퍼.",
      "en": "20s-30s casual shoppers wanting to buy several trendy pieces cheaply.",
      "zh": "想以低价买齐多件潮流单品的20~30岁休闲购物者。",
      "ja": "トレンド服を安く何着も買いたい20~30代のカジュアル層。"
    },
    "verdict": {
      "ko": "가성비와 물량 면에서 글로벌 멀티숍의 대표주자입니다. 프로모션 코드를 챙기고 관세 한도(150달러)를 넘지 않게 장바구니를 나누면 국내가보다 확실히 저렴하지만, 반품 부담을 감안해 사이즈 정보를 꼼꼼히 확인하세요.",
      "en": "In value and volume it is a flagship global multi-brand shop. Grab promo codes and split carts to stay under the USD 150 duty threshold to beat domestic prices, but check sizing carefully given return friction.",
      "zh": "在性价比和品类量上是全球综合店的代表。用好优惠码并拆分购物车避免超150美元关税线，能明显低于国内价，但考虑退货成本请仔细核对尺码。",
      "ja": "コスパと物量でグローバルマルチショップの代表格です。プロモコードを活用し関税ライン(150ドル)を超えないようカートを分ければ国内価格より確実に安いですが、返品負担を考えサイズ情報を丁寧に確認しましょう。"
    }
  },
  "zara.com": {
    "priceRange": {
      "ko": "패스트패션치고는 다소 높은 중가대이지만, 시즌 종료 세일 시 폭이 크고 트렌드 아이템을 빠르게 저렴히 소진합니다.",
      "en": "Mid-priced and a bit high for fast fashion, but end-of-season sales are steep, clearing trend items quickly and cheaply.",
      "zh": "作为快时尚价格偏中高，但季末折扣力度大，能快速低价清掉潮流单品。",
      "ja": "ファストファッションとしてはやや高めの中価格帯ですが、シーズン末セールは幅が大きく、トレンド品を素早く安く売り切ります。"
    },
    "shipping": {
      "ko": "한국 공식 온라인몰과 오프라인 매장이 있어 직구·관세 부담 없이 국내 배송으로 빠르게 받고, 매장 픽업·반품이 가능합니다. 무료배송 기준 금액과 매장 반품이 있어 사이즈 교환이 수월합니다.",
      "en": "With an official Korean online store and physical shops, you get fast domestic delivery without import or duty hassle, plus in-store pickup and returns. A free-shipping threshold and store returns make size exchanges easy.",
      "zh": "拥有韩国官方线上商城和线下门店，无需海淘和关税负担，国内配送快，可门店自提和退货。有免运门槛和门店退货，换尺码方便。",
      "ja": "韓国の公式オンラインモールと実店舗があり、直輸入・関税の負担なく国内配送で早く受け取れ、店舗受取・返品も可能です。送料無料の基準額と店舗返品があり、サイズ交換が容易です。"
    },
    "pros": {
      "ko": [
        "한국 공식몰 운영으로 관세·직구 걱정이 전혀 없음",
        "런웨이 트렌드를 가장 빠르게 반영한 디자인",
        "매장에서 직접 입어보고 픽업·반품할 수 있음"
      ],
      "en": [
        "Official Korean store means zero duty or import worries",
        "Designs that reflect runway trends the fastest",
        "Try on, pick up, and return directly in stores"
      ],
      "zh": [
        "运营韩国官方商城，完全无关税和海淘顾虑",
        "最快反映T台潮流的设计",
        "可在门店试穿、自提和退货"
      ],
      "ja": [
        "韓国公式モール運営で関税・直輸入の心配が一切ない",
        "ランウェイのトレンドを最も速く反映したデザイン",
        "店舗で直接試着して受取・返品できる"
      ]
    },
    "cons": {
      "ko": [
        "가격 대비 원단·마감 품질이 아쉬울 때가 있음",
        "인기 사이즈·아이템이 빠르게 품절되어 재입고가 드묾"
      ],
      "en": [
        "Fabric and finishing can disappoint relative to price",
        "Popular sizes and items sell out fast with rare restocks"
      ],
      "zh": [
        "面料和做工相对价格有时令人失望",
        "热门尺码和单品售罄快，很少补货"
      ],
      "ja": [
        "価格の割に生地・仕上げの品質が物足りないことがある",
        "人気サイズ・アイテムが早く売り切れ、再入荷が稀"
      ]
    },
    "bestFor": {
      "ko": "최신 트렌드 옷을 관세 걱정 없이 국내 배송으로 빠르게 받아보고 싶은 사람.",
      "en": "Anyone wanting the latest trends fast via domestic delivery without duty worries.",
      "zh": "想通过国内配送快速拿到最新潮流单品、又无关税顾虑的人。",
      "ja": "最新トレンド服を関税の心配なく国内配送で早く受け取りたい人。"
    },
    "verdict": {
      "ko": "한국 공식몰이 있다는 점이 해외 SPA 대비 가장 큰 실전 장점으로, 관세·긴 배송·반품 리스크가 없습니다. 트렌드 반영 속도는 최고지만 인기 사이즈는 금방 빠지니, 마음에 드는 아이템은 세일을 기다리기보다 빠르게 확보하는 편이 낫습니다.",
      "en": "Its official Korean store is the biggest practical edge over overseas SPAs, removing duty, long shipping, and return risk. Trend responsiveness is top-tier, but popular sizes vanish fast, so grabbing a piece you love beats waiting for a sale.",
      "zh": "拥有韩国官方商城是相比海外SPA最大的实战优势，无关税、长配送和退货风险。潮流反映速度一流，但热门尺码很快售罄，喜欢的单品与其等折扣不如尽快入手。",
      "ja": "韓国公式モールがある点が海外SPAに対する最大の実戦的強みで、関税・長い配送・返品リスクがありません。トレンド反映の速さは随一ですが人気サイズはすぐ無くなるので、気に入ったアイテムはセールを待つより早めに確保する方が得策です。"
    }
  },
  "uniqlo.com": {
    "priceRange": {
      "ko": "베이직 아이템 중심의 가성비 중저가대로, 기간 한정 가격과 감사제 세일 때 히트텍·에어리즘 등 시즌 필수템을 크게 할인합니다.",
      "en": "Value-focused mid-to-low pricing centered on basics, with limited-period prices and thanksgiving sales deeply discounting seasonal essentials like Heattech and Airism.",
      "zh": "以基础款为主的高性价比中低价位，限时特价和感谢祭促销时Heattech、Airism等季节必备品大幅打折。",
      "ja": "ベーシック中心のコスパの良い中低価格帯で、期間限定価格や感謝祭セール時にヒートテック・エアリズムなどシーズン必需品を大きく割引します。"
    },
    "shipping": {
      "ko": "한국 공식 온라인몰과 전국 매장을 운영해 관세·직구 부담 없이 국내 배송으로 받고, 일정 금액 이상 무료배송에 매장 반품·교환이 가능합니다. 온라인 주문 매장 수령도 지원합니다.",
      "en": "Runs an official Korean online store and nationwide shops, so you receive items via domestic delivery without duty or import burden, with free shipping above a threshold and in-store returns/exchanges. Online-order store pickup is also supported.",
      "zh": "运营韩国官方线上商城和全国门店，无关税和海淘负担，国内配送收货，满额免运并可门店退换货。也支持线上下单门店自提。",
      "ja": "韓国の公式オンラインモールと全国の店舗を運営し、関税・直輸入の負担なく国内配送で受け取れ、一定金額以上で送料無料、店舗での返品・交換も可能です。オンライン注文の店舗受取にも対応しています。"
    },
    "pros": {
      "ko": [
        "한국 공식몰 운영으로 관세·직구 절차가 전혀 필요 없음",
        "히트텍·에어리즘 등 검증된 기능성 베이직의 가성비가 뛰어남",
        "UT 등 아티스트·브랜드 콜라보 라인의 다양성"
      ],
      "en": [
        "Official Korean store means no duty or import process at all",
        "Outstanding value in proven functional basics like Heattech and Airism",
        "Diverse UT artist and brand collaboration lines"
      ],
      "zh": [
        "运营韩国官方商城，完全无需关税和海淘流程",
        "Heattech、Airism等经验证功能性基础款性价比出众",
        "UT等艺术家和品牌联名系列多样"
      ],
      "ja": [
        "韓国公式モール運営で関税・直輸入の手続きが一切不要",
        "ヒートテック・エアリズムなど実証された機能性ベーシックのコスパが優秀",
        "UTなどアーティスト・ブランドコラボラインの多様性"
      ]
    },
    "cons": {
      "ko": [
        "디자인이 무난·기본에 치우쳐 트렌드성이 약함",
        "인기 콜라보(UT·디자이너 협업)는 발매 직후 빠르게 품절됨"
      ],
      "en": [
        "Designs lean plain and basic, weak on trendiness",
        "Hyped collabs (UT, designer partnerships) sell out fast right after launch"
      ],
      "zh": [
        "设计偏素净基础，潮流性弱",
        "热门联名(UT、设计师合作)发售后很快售罄"
      ],
      "ja": [
        "デザインが無難・ベーシックに偏りトレンド性が弱い",
        "人気コラボ(UT・デザイナー協業)は発売直後に早く売り切れる"
      ]
    },
    "bestFor": {
      "ko": "유행을 덜 타는 고품질 베이직을 합리적 가격에 국내 배송으로 채우려는 실용 소비자.",
      "en": "Practical shoppers stocking high-quality, timeless basics at reasonable prices via domestic delivery.",
      "zh": "想以合理价格通过国内配送补齐不易过时的高质量基础款的实用型消费者。",
      "ja": "流行に左右されにくい高品質ベーシックを手頃な価格で国内配送で揃えたい実用派。"
    },
    "verdict": {
      "ko": "LifeWear 철학대로 기능성 베이직에서 가장 안정적인 선택지이며, 한국 공식몰이 있어 구매 편의성도 최상입니다. 트렌드를 원한다면 아쉬울 수 있으나, 이너·기본기 아이템의 가성비는 대체하기 어렵습니다. 인기 콜라보는 발매일을 노려야 합니다.",
      "en": "True to its LifeWear philosophy, it is the most reliable choice for functional basics, and the Korean official store makes buying maximally convenient. It may disappoint trend-seekers, but the value of its innerwear and staples is hard to match; for hyped collabs, target launch day.",
      "zh": "秉承LifeWear理念，在功能性基础款上是最稳妥的选择，且有韩国官方商城，购买便利性极佳。追求潮流者或许失望，但其内搭和基本款的性价比难以替代；热门联名需盯紧发售日。",
      "ja": "LifeWearの哲学通り機能性ベーシックで最も安定した選択肢であり、韓国公式モールがあり購入の利便性も最高です。トレンドを求めると物足りないかもしれませんが、インナー・基本アイテムのコスパは代替が難しいです。人気コラボは発売日を狙う必要があります。"
    }
  },
  "endclothing.com": {
    "priceRange": {
      "ko": "럭셔리 디자이너와 하이엔드 스트릿을 아우르는 고가대이지만, 시즌 세일 폭이 크고 EU 외 배송 시 부가세 제외로 실구매가가 낮아질 수 있습니다.",
      "en": "High-priced, spanning luxury designers and high-end street, but with steep seasonal sales and VAT deducted on non-EU shipping the effective price can drop.",
      "zh": "涵盖奢侈设计师和高端街头的高价位，但季节折扣力度大，发往欧盟以外扣除增值税后实付价可能更低。",
      "ja": "ラグジュアリーデザイナーとハイエンドストリートを網羅する高価格帯ですが、シーズンセールの幅が大きく、EU域外発送ではVAT控除で実購入価格が下がることがあります。"
    },
    "shipping": {
      "ko": "영국에서 한국으로 직배송하며 DHL 등 특송으로 비교적 빠릅니다(약 4~9일). EU 외 배송이라 주문 시 영국 부가세(VAT)가 빠지지만, 미화 150달러 초과분은 한국에서 관세·부가세가 부과됩니다.",
      "en": "Ships directly from the UK to Korea via express carriers like DHL, so it is relatively fast (about 4-9 days). As a non-EU shipment UK VAT is removed at checkout, but amounts above USD 150 incur Korean duty and VAT.",
      "zh": "从英国经DHL等快递直邮韩国，较快（约4~9天）。因发往欧盟以外，下单时扣除英国增值税(VAT)，但超过150美元部分在韩国需缴关税和增值税。",
      "ja": "英国から韓国へDHLなどの特急便で直送し比較的速いです(約4~9日)。EU域外発送のため注文時に英国のVATが差し引かれますが、150ドル超分は韓国で関税・付加価値税が課されます。"
    },
    "pros": {
      "ko": [
        "럭셔리와 스트릿을 아우르는 수준 높은 큐레이션",
        "EU 외 배송 시 VAT 제외로 정가 대비 가격 경쟁력",
        "DHL 특송 위주라 럭셔리 편집숍치고 배송이 빠름"
      ],
      "en": [
        "High-level curation spanning luxury and street",
        "VAT deduction on non-EU shipping adds price competitiveness vs. retail",
        "DHL express focus makes it fast for a luxury retailer"
      ],
      "zh": [
        "涵盖奢侈与街头的高水准甄选",
        "发往欧盟以外扣除VAT，相对原价有价格竞争力",
        "以DHL快递为主，对奢侈买手店而言配送快"
      ],
      "ja": [
        "ラグジュアリーとストリートを網羅する高水準のキュレーション",
        "EU域外発送でVAT控除により定価比の価格競争力",
        "DHL特急便中心でラグジュアリー編集店としては配送が速い"
      ]
    },
    "cons": {
      "ko": [
        "인기 신상은 래플(추첨) 방식이라 확정 구매가 어려움",
        "고가 상품은 관세·부가세 부담이 크고 반품 배송비가 비쌈"
      ],
      "en": [
        "Hyped drops use raffles, making guaranteed purchase hard",
        "High-value items carry heavy duty/VAT and costly return shipping"
      ],
      "zh": [
        "热门新品采用抽签(raffle)方式，难以确定购买",
        "高价商品关税和增值税负担重，退货运费昂贵"
      ],
      "ja": [
        "人気新作はラッフル(抽選)方式で確実な購入が難しい",
        "高額商品は関税・付加価値税の負担が大きく返品送料も高い"
      ]
    },
    "bestFor": {
      "ko": "럭셔리 디자이너와 하이엔드 스트릿을 한곳에서 안목 있게 쇼핑하려는 상급 소비자.",
      "en": "Advanced shoppers wanting to browse luxury designers and high-end street in one curated place.",
      "zh": "希望在一处有品位地选购奢侈设计师和高端街头的进阶消费者。",
      "ja": "ラグジュアリーデザイナーとハイエンドストリートを一か所で目利きしながら買いたい上級者。"
    },
    "verdict": {
      "ko": "럭셔리와 스트릿을 아우르는 큐레이션과 빠른 DHL 배송이 강점인 상급자용 편집숍입니다. VAT 제외로 국내가보다 유리할 때가 많지만, 고가 특성상 관세를 포함한 총구매가를 반드시 계산하고, 한정 신상은 래플 일정을 미리 챙기세요.",
      "en": "An advanced-level retailer strong on luxury-meets-street curation and fast DHL shipping. VAT deduction often beats domestic prices, but given the high price points always calculate the all-in cost including duty, and track raffle schedules for limited drops.",
      "zh": "以奢侈与街头兼备的甄选和DHL快速配送见长的进阶买手店。扣除VAT后常优于国内价，但因价位高务必计算含关税的到手总价，限量新品请提前留意抽签日程。",
      "ja": "ラグジュアリーとストリートを網羅するキュレーションと速いDHL配送が強みの上級者向け編集店です。VAT控除で国内価格より有利なことが多いですが、高額ゆえ関税を含む総購入額を必ず計算し、限定新作はラッフル日程を事前に押さえましょう。"
    }
  },
  "supremenewyork.com": {
    "priceRange": {
      "ko": "박스로고 티셔츠 5~6만원대, 후디 15~20만원대로 정가 자체는 합리적이지만 시즌 중 세일이 없고 인기 품목은 리셀 시 2~10배 프리미엄이 붙습니다.",
      "en": "Box-logo tees run around 50,000-60,000 KRW and hoodies 150,000-200,000 KRW — retail itself is reasonable, but there are no in-season sales and hyped pieces carry a 2-10x resale premium.",
      "zh": "盒标T恤约5万~6万韩元、卫衣15万~20万韩元，官方定价本身合理，但季中不打折，热门单品转售溢价可达2~10倍。",
      "ja": "ボックスロゴTシャツは5〜6万ウォン台、フーディは15〜20万ウォン台と定価自体は良心的ですが、シーズン中のセールはなく、人気アイテムはリセルで2〜10倍のプレミアムがつきます。"
    },
    "shipping": {
      "ko": "미국·일본·유럽 공식몰만 운영하고 한국 공식 배송이 없어 배송대행지(배대지)가 필수입니다. 매주 목요일 현지시간 오전 드롭에서 인기 품목은 수 초~수 분 내 완판되며 봇 구매가 성행해 정가 확보 난이도가 극도로 높고, 개인통관 시 150달러 초과분에 관세가 부과됩니다.",
      "en": "Only the US, Japan, and EU official stores operate — there is no official shipping to Korea, so a forwarding service is essential. Thursday-morning (local time) drops sell out in seconds to minutes for hyped items, bots dominate, and securing anything at retail is extremely difficult; personal customs clearance taxes the amount over USD 150.",
      "zh": "仅运营美国·日本·欧洲官网，无韩国官方配送，因此必须使用转运集运。每周四当地时间上午发售，热门单品数秒至数分钟售罄，机器人抢购盛行，原价入手难度极高；个人清关时超过150美元的部分需缴关税。",
      "ja": "米国・日本・欧州の公式サイトのみで、韓国への公式配送がないため転送サービス（転送地）が必須です。毎週木曜の現地時間午前のドロップでは人気アイテムが数秒〜数分で完売し、ボット購入が横行して定価確保の難易度は極めて高く、個人通関では150ドル超過分に関税がかかります。"
    },
    "pros": {
      "ko": [
        "스트릿 문화 원류로서의 압도적 상징성과 소장가치",
        "정가 자체는 다른 하이프 브랜드보다 오히려 합리적",
        "루이비통·나이키 등 콜라보 아이템의 높은 리셀 가치"
      ],
      "en": [
        "Unrivaled symbolism and collectibility as the origin point of street culture",
        "Retail pricing is actually reasonable compared to other hype brands",
        "Strong resale value on collabs with Louis Vuitton, Nike, and more"
      ],
      "zh": [
        "作为街头文化源头的压倒性象征意义与收藏价值",
        "官方定价其实比其他潮流品牌更合理",
        "与Louis Vuitton、Nike等联名单品转售价值高"
      ],
      "ja": [
        "ストリートカルチャーの源流としての圧倒的な象徴性とコレクション価値",
        "定価自体は他のハイプブランドよりむしろ良心的",
        "ルイ・ヴィトンやナイキとのコラボアイテムの高いリセルバリュー"
      ]
    },
    "cons": {
      "ko": [
        "봇과 즉시 품절로 정가 구매가 사실상 매우 어려움",
        "리셀 프리미엄이 과도하고 시장에 가품이 많아 진품 확인 필수"
      ],
      "en": [
        "Bots and instant sellouts make retail purchase practically very hard",
        "Resale premiums are excessive and counterfeits are rampant, so authentication is a must"
      ],
      "zh": [
        "机器人和瞬间售罄导致原价购买实际上非常困难",
        "转售溢价过高且市场假货泛滥，务必鉴别真伪"
      ],
      "ja": [
        "ボットと即完売で定価購入が実質的に非常に困難",
        "リセルプレミアムが過剰で市場に偽物も多く、真贋確認が必須"
      ]
    },
    "bestFor": {
      "ko": "드롭 문화와 브랜드 상징성을 즐기며 배송대행 이용에 익숙한 스트릿 마니아.",
      "en": "Street enthusiasts who relish drop culture and brand symbolism and are comfortable using forwarding services.",
      "zh": "享受发售文化与品牌象征意义、且熟悉转运集运的街头爱好者。",
      "ja": "ドロップ文化とブランドの象徴性を楽しみ、転送サービスの利用に慣れたストリートマニア。"
    },
    "verdict": {
      "ko": "스트릿의 정점이지만 구매 진입장벽이 가장 높은 브랜드입니다. 정가 구매에는 준비와 운이 모두 필요하고, 리셀은 높은 프리미엄과 가품 리스크를 감수해야 합니다. 옷 자체보다 문화적 상징성과 소장가치를 우선한다면 도전할 만합니다.",
      "en": "It sits at the summit of streetwear but has the highest barrier to entry. Buying at retail takes both preparation and luck, while resale means accepting steep premiums and counterfeit risk. Worth the chase if you value cultural symbolism and collectibility over the garments themselves.",
      "zh": "它是街头服饰的顶点，但购买门槛也最高。原价入手既要准备也要运气，转售则需承受高溢价和假货风险。若你更看重文化象征意义与收藏价值而非衣物本身，值得一试。",
      "ja": "ストリートの頂点ですが購入のハードルが最も高いブランドです。定価購入には準備と運の両方が必要で、リセルは高いプレミアムと偽物リスクを覚悟する必要があります。服そのものより文化的象徴性とコレクション価値を優先するなら挑戦の価値があります。"
    }
  },
  "kith.com": {
    "priceRange": {
      "ko": "자체 라인 티셔츠 7~9만원, 후디·니트 20~40만원대이며 콜라보 스니커즈는 리셀 프리미엄이 붙지만 시즌 말에는 세일도 진행합니다.",
      "en": "In-house tees run 70,000-90,000 KRW and hoodies/knits 200,000-400,000 KRW; collab sneakers carry resale premiums, but end-of-season sales do happen.",
      "zh": "自有线T恤7万~9万韩元、卫衣及针织20万~40万韩元，联名球鞋有转售溢价，但季末也会打折。",
      "ja": "自社ラインのTシャツは7〜9万ウォン、フーディ・ニットは20〜40万ウォン台で、コラボスニーカーはリセルプレミアムがつきますが、シーズン末にはセールも行われます。"
    },
    "shipping": {
      "ko": "미국 본사몰에서 DHL로 한국 직배송을 지원하며 관세·부가세는 별도입니다. 콜라보 드롭은 빠르게 품절되지만 자체 라인은 상시 재고가 있어 콜라보만 노리지 않으면 구매가 어렵지 않습니다.",
      "en": "The US flagship site ships directly to Korea via DHL, with duties and VAT charged separately. Collab drops sell out fast, but the in-house line is regularly in stock, so purchasing is easy as long as you are not chasing only collabs.",
      "zh": "美国官网通过DHL支持直邮韩国，关税和增值税另计。联名发售会迅速售罄，但自有线常有库存，只要不只盯着联名，购买并不困难。",
      "ja": "米国本社サイトからDHLで韓国への直送に対応し、関税・付加価値税は別途です。コラボドロップは早く完売しますが、自社ラインは常時在庫があり、コラボだけを狙わなければ購入は難しくありません。"
    },
    "pros": {
      "ko": [
        "스트릿과 럭셔리를 절묘하게 섞은 세련된 자체 라인의 높은 완성도",
        "DHL 한국 직배송 지원으로 배송대행 불필요",
        "매장·룩북 수준의 완성도 높은 스타일링 제안"
      ],
      "en": [
        "Highly polished in-house line that blends street and luxury with finesse",
        "Direct DHL shipping to Korea, no forwarding service needed",
        "Store- and lookbook-level styling proposals with strong cohesion"
      ],
      "zh": [
        "巧妙融合街头与奢华、完成度极高的自有线",
        "支持DHL直邮韩国，无需转运集运",
        "达到门店与造型手册水准的高完成度搭配提案"
      ],
      "ja": [
        "ストリートとラグジュアリーを絶妙に融合させた洗練された自社ラインの高い完成度",
        "DHLでの韓国直送に対応し転送サービス不要",
        "店舗・ルックブック級の完成度の高いスタイリング提案"
      ]
    },
    "cons": {
      "ko": [
        "콜라보 한정판은 발매 직후 즉시 품절",
        "관세·부가세 포함 시 체감 가격이 상당히 올라감"
      ],
      "en": [
        "Limited collab pieces sell out immediately on release",
        "With duties and VAT added, the effective price rises considerably"
      ],
      "zh": [
        "联名限量款发售后立即售罄",
        "加上关税和增值税后实际价格明显上升"
      ],
      "ja": [
        "コラボ限定品は発売直後に即完売",
        "関税・付加価値税を含めると体感価格がかなり上がる"
      ]
    },
    "bestFor": {
      "ko": "과도한 하이프보다 완성도 높은 데일리 스트릿을 원하는 20~30대.",
      "en": "Twenty- and thirty-somethings who want polished daily streetwear over excessive hype.",
      "zh": "比起过度炒作，更想要高完成度日常街头风的20~30岁人群。",
      "ja": "過度なハイプよりも完成度の高いデイリーストリートを求める20〜30代。"
    },
    "verdict": {
      "ko": "Supreme보다 접근성이 좋고 옷의 완성도가 높습니다. 콜라보만 노리면 실망할 수 있으나 자체 라인 위주로 보면 실용적이고 소재·마감이 뛰어납니다. 한국으로 직배송이 되는 점이 실전에서 가장 큰 장점입니다.",
      "en": "More accessible than Supreme and higher in garment quality. Chasing only collabs may disappoint, but focused on the in-house line it is practical with excellent fabrics and finishing. Direct shipping to Korea is its biggest real-world advantage.",
      "zh": "比Supreme更容易入手，衣物完成度也更高。只盯着联名可能失望，但以自有线为主则实用且面料做工出色。可直邮韩国是实战中最大的优势。",
      "ja": "Supremeより入手しやすく、服の完成度も高いです。コラボだけを狙うと失望しかねませんが、自社ライン中心で見れば実用的で素材・仕上げが優秀です。韓国へ直送できる点が実戦で最大の強みです。"
    }
  },
  "palaceskateboards.com": {
    "priceRange": {
      "ko": "티셔츠 5~7만원, 후디 15~18만원대로 정가는 합리적이며 정기 세일은 거의 없고 아디다스 등 콜라보는 리셀 프리미엄이 붙습니다.",
      "en": "Tees run 50,000-70,000 KRW and hoodies 150,000-180,000 KRW — retail is reasonable, regular sales are rare, and collabs like Adidas carry resale premiums.",
      "zh": "T恤5万~7万韩元、卫衣15万~18万韩元，定价合理，几乎不定期打折，Adidas等联名有转售溢价。",
      "ja": "Tシャツは5〜7万ウォン、フーディは15〜18万ウォン台で定価は良心的、定期セールはほぼなく、アディダスなどのコラボはリセルプレミアムがつきます。"
    },
    "shipping": {
      "ko": "영국·미국·일본 공식몰을 운영하지만 한국 직배송이 제한적이라 배송대행을 권장합니다. 매주 금요일 현지시간 드롭에서 인기 품목은 빠르게 완판되며, 영국 발송분은 관세 부과에 유의해야 합니다.",
      "en": "It runs UK, US, and Japan official stores, but direct shipping to Korea is limited, so a forwarding service is recommended. Friday (local time) drops see hyped items sell out quickly, and UK-dispatched orders warrant attention to customs duties.",
      "zh": "运营英国·美国·日本官网，但对韩国的直邮有限，建议使用转运集运。每周五当地时间发售，热门单品迅速售罄，英国发货部分需留意关税。",
      "ja": "英国・米国・日本の公式サイトを運営していますが、韓国への直送が限定的なため転送サービスを推奨します。毎週金曜の現地時間のドロップで人気アイテムは早く完売し、英国発送分は関税に注意が必要です。"
    },
    "pros": {
      "ko": [
        "영국식 위트와 유머를 담은 그래픽의 뚜렷한 개성",
        "정가가 합리적이라 정가 구매 시 부담이 적음",
        "Supreme 대비 상대적으로 구매가 수월한 편"
      ],
      "en": [
        "Distinct personality in graphics infused with British wit and humor",
        "Reasonable retail pricing means less burden when buying at full price",
        "Relatively easier to purchase than Supreme"
      ],
      "zh": [
        "融入英式机智与幽默的图案个性鲜明",
        "定价合理，原价购买负担较小",
        "相比Supreme相对更容易入手"
      ],
      "ja": [
        "英国式のウィットとユーモアを込めたグラフィックの明確な個性",
        "定価が良心的で定価購入時の負担が少ない",
        "Supremeに比べて相対的に購入しやすい"
      ]
    },
    "cons": {
      "ko": [
        "한국 직배송이 제한적이라 배송대행이 필요",
        "인기 드롭은 발매 직후 즉시 품절"
      ],
      "en": [
        "Limited direct shipping to Korea means a forwarding service is needed",
        "Popular drops sell out immediately after release"
      ],
      "zh": [
        "对韩国直邮有限，需要转运集运",
        "热门发售款发售后立即售罄"
      ],
      "ja": [
        "韓国への直送が限定的で転送サービスが必要",
        "人気ドロップは発売直後に即完売"
      ]
    },
    "bestFor": {
      "ko": "위트 있는 영국 스트릿 감성과 스케이트 문화를 선호하는 사람.",
      "en": "Those who favor witty British street sensibility and skate culture.",
      "zh": "偏爱机智英式街头感性与滑板文化的人。",
      "ja": "ウィットの効いた英国ストリートの感性とスケートカルチャーを好む人。"
    },
    "verdict": {
      "ko": "Supreme의 대안격으로 정가가 합리적이고 그래픽 개성이 강합니다. 드롭 경쟁은 있지만 상대적으로 여유 있는 편이라 정가 확보 가능성이 더 높습니다. 배송대행에 익숙하다면 만족도가 높은 선택입니다.",
      "en": "A strong alternative to Supreme with reasonable retail and bold graphic identity. There is drop competition, but it is comparatively more relaxed, giving better odds of buying at retail. A satisfying pick if you are comfortable with forwarding services.",
      "zh": "作为Supreme的替代选择，定价合理且图案个性强烈。虽有发售竞争，但相对更从容，原价入手概率更高。若熟悉转运集运，是满意度较高的选择。",
      "ja": "Supremeの代替格として定価が良心的でグラフィックの個性が強いです。ドロップ競争はありますが比較的余裕があり、定価確保の可能性が高めです。転送サービスに慣れていれば満足度の高い選択です。"
    }
  },
  "standardseoul.com": {
    "priceRange": {
      "ko": "국내외 스트릿 브랜드 티셔츠 4~8만원, 아우터 20~40만원대이며 시즌오프·아카이브 세일이 진행됩니다.",
      "en": "Domestic and imported street brand tees run 40,000-80,000 KRW and outerwear 200,000-400,000 KRW, with season-off and archive sales held periodically.",
      "zh": "国内外街头品牌T恤4万~8万韩元、外套20万~40万韩元，会举办过季与库存清仓促销。",
      "ja": "国内外ストリートブランドのTシャツは4〜8万ウォン、アウターは20〜40万ウォン台で、シーズンオフ・アーカイブセールが行われます。"
    },
    "shipping": {
      "ko": "국내 사이트라 당일~2일 내 국내 배송되며 관세나 직구 부담이 전혀 없습니다. 품절 시 재입고가 제한적이며, 서울 한남동 오프라인 매장에서 픽업도 가능합니다.",
      "en": "As a domestic site, it delivers within Korea in same-day to two days with zero customs or import hassle. Restocks are limited once sold out, and in-store pickup is available at the Hannam-dong, Seoul location.",
      "zh": "作为韩国本土网站，当日至2日内韩国境内配送，完全没有关税或海淘负担。售罄后补货有限，也可在首尔汉南洞线下门店自提。",
      "ja": "国内サイトのため当日〜2日で国内配送され、関税や直輸入の負担が一切ありません。完売時の再入荷は限定的で、ソウル漢南洞の実店舗での受け取りも可能です。"
    },
    "pros": {
      "ko": [
        "국내 배송으로 관세·배송대행이 전혀 필요 없음",
        "해외 인디 스트릿 브랜드를 국내에서 큐레이션해 소개",
        "보드 하드웨어·액세서리까지 원스톱 구매 가능"
      ],
      "en": [
        "Domestic shipping means no customs or forwarding service at all",
        "Curates and introduces overseas indie street brands within Korea",
        "One-stop shopping including board hardware and accessories"
      ],
      "zh": [
        "境内配送，完全无需关税或转运集运",
        "在韩国本土策展引入海外独立街头品牌",
        "板类硬件与配件也能一站式购买"
      ],
      "ja": [
        "国内配送のため関税・転送サービスが一切不要",
        "海外インディストリートブランドを国内でキュレーションして紹介",
        "ボードハードウェア・アクセサリーまでワンストップで購入可能"
      ]
    },
    "cons": {
      "ko": [
        "대형 플랫폼 대비 재고와 사이즈 폭이 제한적",
        "인기 아이템은 빠르게 품절되고 재입고가 드묾"
      ],
      "en": [
        "Limited stock and size range compared to large platforms",
        "Popular items sell out fast and restocks are infrequent"
      ],
      "zh": [
        "相比大型平台，库存和尺码范围有限",
        "热门单品迅速售罄，补货较少"
      ],
      "ja": [
        "大型プラットフォームに比べ在庫とサイズ展開が限定的",
        "人気アイテムは早く完売し再入荷がまれ"
      ]
    },
    "bestFor": {
      "ko": "관세 없이 국내에서 해외 인디 스트릿과 보드 문화를 함께 즐기려는 사람.",
      "en": "Those who want to enjoy overseas indie street and board culture within Korea, without customs.",
      "zh": "想在韩国境内免关税同时享受海外独立街头与滑板文化的人。",
      "ja": "関税なしで国内から海外インディストリートとボードカルチャーを一緒に楽しみたい人。"
    },
    "verdict": {
      "ko": "해외 직구의 번거로움 없이 잘 큐레이션된 스트릿 브랜드를 만날 수 있는 국내 셀렉트샵입니다. 재고 폭은 좁지만 셀렉션 안목이 좋고, 한남동 매장은 문화 공간으로서도 방문 가치가 있습니다. 국내 배송이라 사이즈 교환·반품도 편리합니다.",
      "en": "A domestic select shop where you can meet well-curated street brands without the hassle of overseas direct purchase. The stock is narrow, but the curation is sharp, and the Hannam-dong store is worth a visit as a cultural space. Domestic shipping also makes size exchanges and returns easy.",
      "zh": "无需海淘麻烦即可遇见精心策展街头品牌的韩国本土精选店。库存虽窄但选品眼光独到，汉南洞门店作为文化空间也值得一访。境内配送使换码退货也很便利。",
      "ja": "海外直輸入の煩わしさなく、よくキュレーションされたストリートブランドに出会える国内セレクトショップです。在庫幅は狭いですがセレクションの目利きが良く、漢南洞の店舗は文化空間としても訪れる価値があります。国内配送のためサイズ交換・返品も便利です。"
    }
  },
  "beams.co.jp": {
    "priceRange": {
      "ko": "서브레이블별 편차가 커 BEAMS T 티셔츠는 5~8만원, BEAMS PLUS 아우터는 20~50만원대이며 시즌 세일 시 할인이 적용됩니다.",
      "en": "Prices vary widely by sub-label: BEAMS T tees run 50,000-80,000 KRW while BEAMS PLUS outerwear runs 200,000-500,000 KRW, with discounts during seasonal sales.",
      "zh": "各子品牌价差较大，BEAMS T的T恤5万~8万韩元，BEAMS PLUS外套20万~50万韩元，季节促销时享折扣。",
      "ja": "サブレーベルごとの差が大きく、BEAMS TのTシャツは5〜8万ウォン、BEAMS PLUSのアウターは20〜50万ウォン台で、シーズンセール時に割引が適用されます。"
    },
    "shipping": {
      "ko": "일본 공식몰에서 한국 직배송을 지원하며 관세·부가세는 별도이나, 일본 국내 한정 아이템은 배송대행이 필요합니다. 사이즈가 일본 규격이라 실측 표기를 반드시 확인해야 핏 실패를 줄일 수 있습니다.",
      "en": "The Japanese official store ships directly to Korea with duties and VAT charged separately, but Japan-only exclusive items require a forwarding service. Sizing follows Japanese standards, so always check the listed measurements to reduce fit failures.",
      "zh": "日本官网支持直邮韩国，关税与增值税另计，但日本国内限定单品需使用转运集运。尺码采用日本规格，务必确认实测标注以减少版型失误。",
      "ja": "日本の公式サイトから韓国への直送に対応し関税・付加価値税は別途ですが、日本国内限定アイテムは転送サービスが必要です。サイズが日本規格のため、必ず実寸表記を確認するとフィットの失敗を減らせます。"
    },
    "pros": {
      "ko": [
        "아메카지·트래드·스트릿·드레스까지 폭넓은 스타일 스펙트럼",
        "BEAMS PLUS·BEAMS T 등 서브레이블별 뚜렷한 정체성",
        "일본 셀렉트샵 특유의 디테일과 봉제 품질"
      ],
      "en": [
        "Broad style spectrum spanning Amekaji, trad, street, and dress wear",
        "Distinct identity across sub-labels like BEAMS PLUS and BEAMS T",
        "The detailing and construction quality characteristic of Japanese select shops"
      ],
      "zh": [
        "涵盖美式复古·经典·街头·正装的宽广风格谱系",
        "BEAMS PLUS、BEAMS T等各子品牌个性鲜明",
        "日本精选店特有的细节与做工品质"
      ],
      "ja": [
        "アメカジ・トラッド・ストリート・ドレスまで幅広いスタイルスペクトラム",
        "BEAMS PLUS・BEAMS Tなどサブレーベルごとの明確なアイデンティティ",
        "日本セレクトショップ特有のディテールと縫製品質"
      ]
    },
    "cons": {
      "ko": [
        "일본 사이즈 규격이라 핏 확인에 주의가 필요",
        "직배송·배송대행과 관세로 체감 가격이 상승"
      ],
      "en": [
        "Japanese sizing standards require care in checking fit",
        "Direct shipping, forwarding, and customs raise the effective price"
      ],
      "zh": [
        "日本尺码规格，需注意确认版型",
        "直邮·转运集运与关税推高实际价格"
      ],
      "ja": [
        "日本サイズ規格のためフィット確認に注意が必要",
        "直送・転送サービスと関税で体感価格が上昇"
      ]
    },
    "bestFor": {
      "ko": "아메카지·트래드를 기반으로 정제된 일본 셀렉트샵 스타일을 원하는 사람.",
      "en": "Those seeking refined Japanese select-shop style rooted in Amekaji and trad.",
      "zh": "以美式复古·经典为基础、追求精致日本精选店风格的人。",
      "ja": "アメカジ・トラッドをベースに洗練された日本セレクトショップスタイルを求める人。"
    },
    "verdict": {
      "ko": "일본 셀렉트샵의 교과서 같은 존재로 스타일 스펙트럼이 매우 넓습니다. 서브레이블 구조를 이해하면 자신의 취향에 맞는 라인을 고르기 쉽습니다. 일본 사이즈 규격과 관세만 감안하면 디테일과 품질 만족도가 높은 선택입니다.",
      "en": "A textbook example of the Japanese select shop with a very broad style spectrum. Understanding the sub-label structure makes it easy to pick the line that fits your taste. Once you account for Japanese sizing and customs, it is a choice with high satisfaction in detailing and quality.",
      "zh": "堪称日本精选店的教科书，风格谱系极为宽广。理解子品牌结构后，就容易挑到合乎自己口味的产品线。只要考虑到日本尺码规格与关税，就是细节与品质满意度很高的选择。",
      "ja": "日本セレクトショップの教科書的存在でスタイルスペクトラムが非常に広いです。サブレーベルの構造を理解すれば自分の好みに合うラインを選びやすくなります。日本サイズ規格と関税さえ踏まえれば、ディテールと品質の満足度が高い選択です。"
    }
  },
  "grailed.com": {
    "priceRange": {
      "ko": "저가 빈티지 티셔츠 3~5만원대부터 아카이브 라프 시몬스·언더커버 수백만원까지 폭이 넓고, 오퍼(가격 흥정)로 정가보다 낮게 낙찰받는 문화가 정착돼 있습니다.",
      "en": "Ranges widely from $30-50 vintage tees to archival Raf Simons and Undercover pieces worth thousands, with an established offer-culture where haggling below list price is the norm.",
      "zh": "价格跨度极大，从三四十美元的复古T恤到价值数千美元的Raf Simons、Undercover档案单品，并形成了通过出价（Offer）低于标价成交的议价文化。",
      "ja": "3〜5万ウォン台のヴィンテージTシャツから数百万ウォンのアーカイブRaf Simons・Undercoverまで幅広く、オファー（値段交渉）で定価より安く落札する文化が定着しています。"
    },
    "shipping": {
      "ko": "미국 셀러가 대부분이라 한국은 직배송 또는 배송대행지(배대지) 경유가 필요하며, 15만원 초과 시 관·부가세와 통관 수수료가 붙습니다. 결제를 Grailed Payments로 하면 구매자 보호가 적용되지만, PayPal 직거래 유도는 보호 밖이니 피해야 합니다.",
      "en": "Most sellers are US-based, so Korean buyers need direct international shipping or a freight forwarder, and orders over about 150,000 KRW incur customs duty, VAT, and clearance fees. Paying through Grailed Payments grants buyer protection, but sellers who push off-platform PayPal deals fall outside that protection and should be avoided.",
      "zh": "卖家多为美国本土，韩国买家需选择国际直邮或使用转运仓，货值超过15万韩元将产生关税、增值税及清关费用。通过Grailed Payments付款可享买家保护，但引导脱离平台走PayPal私下交易则不在保护范围内，应予避免。",
      "ja": "セラーの大半が米国在住のため、韓国へは直送または転送業者（転送地）経由が必要で、15万ウォン超は関税・付加税と通関手数料がかかります。決済をGrailed Paymentsで行えば購入者保護が適用されますが、PayPalでの個人間取引への誘導は保護対象外なので避けるべきです。"
    },
    "pros": {
      "ko": [
        "아카이브·단종 디자이너 남성복 물량이 세계 최대 수준",
        "오퍼 기능으로 실구매가를 크게 낮출 수 있음",
        "셀러 평점·판매 이력이 투명하게 공개돼 신뢰도 판단이 쉬움"
      ],
      "en": [
        "World-class depth of archival and discontinued designer menswear",
        "Offer function lets you negotiate the real purchase price down significantly",
        "Transparent seller ratings and sales history make trust assessment easy"
      ],
      "zh": [
        "档案级、已停产设计师男装库存量居世界前列",
        "出价功能可大幅压低实际成交价",
        "卖家评分与交易记录透明公开，便于判断可信度"
      ],
      "ja": [
        "アーカイブ・廃番デザイナーメンズの物量が世界最大級",
        "オファー機能で実購入価格を大きく下げられる",
        "セラー評価・販売履歴が透明に公開され信頼性を判断しやすい"
      ]
    },
    "cons": {
      "ko": [
        "개인 셀러 기반이라 전 품목 진품검수가 아니며 인기 브랜드는 가품 리스크 상존",
        "미국발 배송비·관세·배대지 수수료 합산 시 최종 비용이 표시가보다 크게 오를 수 있음"
      ],
      "en": [
        "Peer-to-peer model means not every item is authenticated, and hyped brands carry a persistent counterfeit risk",
        "US shipping, customs, and forwarder fees combined can push the final cost well above the listed price"
      ],
      "zh": [
        "基于个人卖家，并非全部商品都经过正品检验，热门品牌始终存在假货风险",
        "叠加美国运费、关税与转运费后，最终成本可能远高于标价"
      ],
      "ja": [
        "個人セラー基盤のため全品検品ではなく、人気ブランドは常に偽物リスクがある",
        "米国発の送料・関税・転送手数料を合算すると最終費用が表示価格を大きく上回ることがある"
      ]
    },
    "bestFor": {
      "ko": "국내에서 구하기 힘든 아카이브·하이엔드 남성복을 브랜드 지식을 갖고 직구할 수 있는 중급 이상 컬렉터.",
      "en": "Intermediate-and-up male collectors with brand knowledge who want to import archival, hard-to-find high-end menswear.",
      "zh": "具备品牌知识、想直购国内难寻档案级高端男装的中级以上藏家。",
      "ja": "国内では入手困難なアーカイブ・ハイエンドメンズを、ブランド知識を持って直輸入できる中級以上のコレクター。"
    },
    "verdict": {
      "ko": "물량과 가격 협상력 면에서 남성 리셀 시장의 사실상 표준이지만, 진품 판별은 결국 구매자의 안목에 달려 있습니다. 반드시 Grailed Payments로 결제하고 셀러 이력과 실물 사진을 꼼꼼히 확인한다면, 국내 정가 대비 훨씬 유리하게 희귀 아이템을 손에 넣을 수 있는 창구입니다.",
      "en": "In terms of inventory and bargaining power it is effectively the standard of the menswear resale market, but authenticity ultimately rests on the buyer's eye. Always pay via Grailed Payments and scrutinize seller history and real photos, and it becomes a channel to secure rare pieces at far better value than domestic retail.",
      "zh": "在库存量和议价空间上，它实为男装转售市场的事实标准，但真伪最终取决于买家的眼力。只要坚持用Grailed Payments付款并仔细核对卖家记录和实物照片，它就是以远优于国内正价拿下稀有单品的渠道。",
      "ja": "物量と価格交渉力の面で男性リセール市場の事実上の標準ですが、真贋の見極めは結局購入者の眼力次第です。必ずGrailed Paymentsで決済し、セラー履歴と実物写真を入念に確認すれば、国内定価より格段に有利に希少アイテムを手に入れられる窓口になります。"
    }
  },
  "depop.com": {
    "priceRange": {
      "ko": "1~3만원대 빈티지·y2k·중고 의류가 주력으로 진입 장벽이 낮지만, 인기 셀러의 큐레이션 아이템은 프리미엄이 붙기도 합니다.",
      "en": "Dominated by 10,000-30,000 KRW vintage, Y2K, and secondhand pieces with a low entry barrier, though curated items from popular sellers can carry a markup.",
      "zh": "以一两万至三万韩元的复古、Y2K及二手衣物为主，入门门槛低，但人气卖家的精选单品有时会溢价。",
      "ja": "1〜3万ウォン台のヴィンテージ・Y2K・中古衣類が主力で参入障壁は低いものの、人気セラーのキュレーションアイテムはプレミアが付くこともあります。"
    },
    "shipping": {
      "ko": "셀러 대부분이 영국·미국 개인이라 한국 배송은 국제 우편으로 느리고, 저가 품목이라도 합배송이 안 되면 배송비가 상품값을 넘기도 합니다. Depop Payments·PayPal 구매자 보호가 있으니 앱 내 결제를 유지하고, 국내 배대지를 함께 쓰면 관세·배송비를 절약할 수 있습니다.",
      "en": "Most sellers are individuals in the UK or US, so shipping to Korea is slow via international post, and without combined shipping the postage can exceed the item price even for cheap goods. Depop Payments and PayPal offer buyer protection, so keep payment in-app, and pairing with a Korean freight forwarder helps cut customs and shipping costs.",
      "zh": "卖家多为英美个人，发往韩国走国际邮包速度较慢，即便是低价商品，若不能合并发货，运费也可能超过货款。Depop Payments与PayPal提供买家保护，请保持在App内付款，并可搭配韩国转运仓以节省关税和运费。",
      "ja": "セラーの多くが英国・米国の個人のため、韓国への配送は国際郵便で遅く、低価格品でも同梱できないと送料が商品代を超えることがあります。Depop Payments・PayPalの購入者保護があるのでアプリ内決済を維持し、韓国の転送業者を併用すると関税・送料を節約できます。"
    },
    "pros": {
      "ko": [
        "y2k·빈티지·업사이클 등 Z세대 취향 아이템의 발굴 재미가 큼",
        "가격대가 낮아 실험적 스타일에 부담 없이 도전 가능",
        "셀러와 DM으로 실측·상태를 직접 물어보는 소통이 활발"
      ],
      "en": [
        "Great thrill of digging for Y2K, vintage, and upcycled items suited to Gen Z taste",
        "Low price points let you experiment with bold styles risk-free",
        "Active DM communication to ask sellers directly about measurements and condition"
      ],
      "zh": [
        "Y2K、复古、升级改造等契合Z世代口味的单品淘货乐趣十足",
        "价位低，可零负担尝试实验性风格",
        "可通过私信直接向卖家询问实测尺寸与成色，沟通活跃"
      ],
      "ja": [
        "Y2K・ヴィンテージ・アップサイクルなどZ世代好みのアイテム発掘が楽しい",
        "価格帯が低く実験的なスタイルに気軽に挑戦できる",
        "セラーとDMで実寸・状態を直接聞ける活発なやり取り"
      ]
    },
    "cons": {
      "ko": [
        "진품검수 시스템이 없어 브랜드·명품 표기 상품은 가품 위험이 높음",
        "개인 중고 특성상 상태 묘사와 실물의 편차, 반품 거절 사례가 잦음"
      ],
      "en": [
        "No authentication system, so items labeled as branded or luxury carry a high counterfeit risk",
        "As individual secondhand goods, discrepancies between described and actual condition and refused returns are common"
      ],
      "zh": [
        "没有正品检验系统，标注品牌或奢侈品的商品假货风险高",
        "个人二手特性下，成色描述与实物存在偏差、拒绝退货的情况较多"
      ],
      "ja": [
        "真贋検品システムがなく、ブランド・高級品表記の商品は偽物リスクが高い",
        "個人中古の性質上、状態説明と実物の差や返品拒否の事例が多い"
      ]
    },
    "bestFor": {
      "ko": "명품보다 개성 있는 빈티지·y2k 스타일을 저예산으로 즐기려는 10~20대.",
      "en": "Teens and twenties who want to enjoy distinctive vintage and Y2K style on a small budget rather than luxury labels.",
      "zh": "预算有限、追求个性复古与Y2K风格而非奢侈品的10至20岁群体。",
      "ja": "高級品より個性的なヴィンテージ・Y2Kスタイルを低予算で楽しみたい10〜20代。"
    },
    "verdict": {
      "ko": "명품 진품검수를 기대하는 플랫폼이 아니라, 저가 빈티지의 '보물찾기' 경험에 강한 앱입니다. 브랜드 로고가 붙은 고가 상품은 피하고, 노브랜드 빈티지 위주로 접근하며 반드시 앱 내 결제를 유지하면 가성비 좋은 개성 아이템을 만나기에 최적입니다.",
      "en": "This is not a platform to expect luxury authentication from; its strength is the treasure-hunt experience of low-cost vintage. Avoid expensive logo-branded items, focus on no-brand vintage, and always keep payment in-app, and it becomes ideal for finding great-value, characterful pieces.",
      "zh": "它并非期待奢侈品鉴定的平台，强项在于低价复古的'寻宝'体验。避开带品牌Logo的高价商品，聚焦无品牌复古，并始终保持App内付款，便是淘到高性价比个性单品的理想之选。",
      "ja": "高級品の真贋検品を期待するプラットフォームではなく、低価格ヴィンテージの「宝探し」体験に強いアプリです。ブランドロゴ付きの高額品は避け、ノーブランドのヴィンテージ中心に、必ずアプリ内決済を維持すれば、コスパの良い個性的アイテムに出会うのに最適です。"
    }
  },
  "vestiairecollective.com": {
    "priceRange": {
      "ko": "샤넬·에르메스·루이비통 등 럭셔리 중고가 중심으로 리테일 대비 30~70% 저렴하지만, 희소 빈티지는 정가를 웃도는 경우도 있습니다.",
      "en": "Centered on luxury secondhand like Chanel, Hermes, and Louis Vuitton at 30-70% below retail, though scarce vintage can exceed original prices.",
      "zh": "以Chanel、Hermès、LV等奢侈品二手为主，普遍低于零售价30%至70%，但稀有复古款有时会高于原价。",
      "ja": "シャネル・エルメス・ルイヴィトンなどラグジュアリー中古が中心で定価より30〜70%安い一方、希少ヴィンテージは定価を上回る場合もあります。"
    },
    "shipping": {
      "ko": "고가 아이템은 검수센터를 거치는 정품 인증(진품검수 수수료 포함)이 기본이라 안심되지만, 그만큼 배송이 1~2주로 길어집니다. '다이렉트 배송'을 택하면 검수를 건너뛰어 빠르고 저렴하지만 진품 보증이 약해지고, 한국 배송 시 관세·부가세가 별도로 부과됩니다.",
      "en": "For high-value items, authentication through a physical inspection center (with an authentication fee) is standard and reassuring, but it stretches delivery to 1-2 weeks. Choosing 'Direct Shipping' skips inspection for faster, cheaper delivery but weakens authenticity guarantees, and shipping to Korea incurs separate customs duty and VAT.",
      "zh": "高价商品默认经检验中心进行正品认证（含鉴定费），令人安心，但配送因此延长至一到两周。选择'直接配送'可跳过检验，更快更省，但正品保障减弱；发往韩国另需缴纳关税与增值税。",
      "ja": "高額アイテムは検品センターを経る正規品認証（真贋検品手数料込み）が基本で安心ですが、その分配送が1〜2週間と長くなります。「ダイレクト配送」を選べば検品を省いて速く安いものの真贋保証が弱まり、韓国配送時は関税・付加税が別途かかります。"
    },
    "pros": {
      "ko": [
        "물리적 검수센터를 통한 진품 인증으로 명품 중고 중 신뢰도가 높은 편",
        "리테일 대비 큰 폭 할인과 단종 럭셔리 빈티지 물량 확보",
        "가격 제안(Make an Offer) 기능으로 협상 가능"
      ],
      "en": [
        "Authentication via a physical inspection center gives it high trust among luxury resale sites",
        "Steep discounts versus retail plus a strong supply of discontinued luxury vintage",
        "Make-an-Offer function allows price negotiation"
      ],
      "zh": [
        "经实体检验中心正品认证，在奢侈品二手中可信度较高",
        "相比零售大幅折扣，并备有已停产奢侈复古货源",
        "'出价'（Make an Offer）功能可议价"
      ],
      "ja": [
        "物理的な検品センターによる真贋認証で高級中古の中でも信頼度が高い",
        "定価より大幅な割引に加え廃番ラグジュアリーヴィンテージの物量を確保",
        "価格提案（Make an Offer）機能で交渉可能"
      ]
    },
    "cons": {
      "ko": [
        "구매 수수료·진품검수 비용·관세가 더해져 최종가가 표시가보다 상당히 올라감",
        "다이렉트 배송 선택 시 검수를 건너뛰므로 가품·상태 리스크가 커지고 반품 조건이 까다로움"
      ],
      "en": [
        "Buyer fees, authentication costs, and customs add up, pushing the final price well above the listed amount",
        "Choosing Direct Shipping skips inspection, raising counterfeit and condition risk, and return conditions are strict"
      ],
      "zh": [
        "叠加买家手续费、鉴定费与关税后，最终价格远高于标价",
        "选择直接配送会跳过检验，假货与成色风险加大，且退货条件严苛"
      ],
      "ja": [
        "購入手数料・真贋検品費・関税が加わり最終価格が表示価格よりかなり上がる",
        "ダイレクト配送では検品を省くため偽物・状態リスクが高まり返品条件も厳しい"
      ]
    },
    "bestFor": {
      "ko": "검수 기반의 안전한 명품 중고 거래를 원하고, 수수료·대기 시간을 감수할 수 있는 럭셔리 구매자.",
      "en": "Luxury buyers who want safe authenticated secondhand deals and can accept the fees and waiting time.",
      "zh": "希望进行有鉴定保障的安全奢侈品二手交易、并能接受手续费与等待时间的买家。",
      "ja": "検品ベースの安全な高級中古取引を望み、手数料・待ち時間を許容できるラグジュアリー購入者。"
    },
    "verdict": {
      "ko": "글로벌 럭셔리 중고 중 진품검수 인프라가 가장 체계적인 편으로, 가품 불안이 큰 명품 첫 중고 구매에 적합합니다. 다만 수수료와 관세를 합산한 실질 비용을 미리 계산하고, 고가일수록 다이렉트 배송보다 검수 배송을 택하는 것이 안전합니다.",
      "en": "Among global luxury resale sites it has one of the most systematic authentication infrastructures, making it well suited to a first secondhand luxury purchase when counterfeit anxiety is high. Just calculate the real cost including fees and customs in advance, and for pricier items choose inspected shipping over direct shipping.",
      "zh": "在全球奢侈品二手平台中，其正品检验体系较为系统，适合担心假货的首次奢侈品二手购买。只需提前算清含手续费和关税的实际成本，且商品越贵越应选择检验配送而非直接配送更为稳妥。",
      "ja": "グローバルなラグジュアリー中古の中でも真贋検品インフラが最も体系的な部類で、偽物への不安が大きい初めての高級中古購入に適しています。ただし手数料と関税を合算した実質費用を事前に計算し、高額なほどダイレクト配送より検品配送を選ぶのが安全です。"
    }
  },
  "bunjang.co.kr": {
    "priceRange": {
      "ko": "국내 개인 간 중고거래라 신품 대비 저렴한 폭넓은 가격대를 형성하며, 한정판 스니커즈·명품은 시세에 따라 프리미엄이 붙습니다.",
      "en": "As domestic peer-to-peer secondhand trade it spans a wide, below-retail price range, while limited-edition sneakers and luxury goods carry a market-driven premium.",
      "zh": "作为韩国国内个人二手交易，价格区间广泛且低于新品，限量球鞋与奢侈品则随行情溢价。",
      "ja": "国内の個人間中古取引のため新品より安い幅広い価格帯を形成し、限定スニーカー・高級品は相場に応じてプレミアが付きます。"
    },
    "shipping": {
      "ko": "국내 거래라 관세·직구 부담이 없고 배송도 1~3일로 빠르며, '번개페이' 안전결제를 쓰면 상품 수령·확인 후 대금이 지급돼 사기 위험을 크게 줄입니다. 반면 계좌이체 직거래나 대면 직거래는 보호를 받지 못하므로 반드시 안전결제를 이용하는 것이 좋습니다.",
      "en": "As a domestic trade there are no customs or import burdens and delivery is fast at 1-3 days, and using 'Bunjang Pay' escrow releases payment only after you receive and verify the item, greatly reducing fraud risk. Bank-transfer or in-person deals, by contrast, are unprotected, so always use the escrow payment.",
      "zh": "属韩国国内交易，无关税与海淘负担，配送快至1至3天；使用'번개페이'安全支付时，货款在收货确认后才支付，大幅降低诈骗风险。相反，转账私下交易或当面交易不受保护，因此务必使用安全支付。",
      "ja": "国内取引のため関税・直輸入の負担がなく配送も1〜3日と速く、「ボンゲペイ」安全決済を使えば商品受領・確認後に代金が支払われ詐欺リスクを大きく減らせます。一方、口座振込の個人取引や対面直取引は保護されないため、必ず安全決済を利用するのがよいでしょう。"
    },
    "pros": {
      "ko": [
        "국내 최대 중고 물량으로 원하는 아이템을 찾을 확률이 높음",
        "번개페이 안전결제로 온라인 거래 사기 위험을 크게 낮춤",
        "관세·해외배송 없이 빠르고 저렴하게 거래 가능"
      ],
      "en": [
        "Korea's largest secondhand inventory maximizes the odds of finding what you want",
        "Bunjang Pay escrow substantially lowers online transaction fraud risk",
        "Fast, cheap trading with no customs or overseas shipping"
      ],
      "zh": [
        "韩国最大的二手货源，找到心仪单品的概率高",
        "번개페이安全支付大幅降低网络交易诈骗风险",
        "无关税、无海外配送，交易快速又便宜"
      ],
      "ja": [
        "国内最大の中古物量で欲しいアイテムを見つけられる確率が高い",
        "ボンゲペイ安全決済でオンライン取引の詐欺リスクを大きく下げる",
        "関税・海外配送なしで速く安く取引できる"
      ]
    },
    "cons": {
      "ko": [
        "개인 판매 기반이라 명품·한정판은 가품이 섞일 수 있어 번개케어 등 검수 서비스 확인이 필요",
        "대면·계좌이체 직거래 유도 시 사기·상태 분쟁 위험이 크고 보호받기 어려움"
      ],
      "en": [
        "Being individual-seller based, luxury and limited items can include fakes, so check authentication services like Bunjang Care",
        "Pushes toward in-person or bank-transfer deals raise fraud and condition-dispute risk with little protection"
      ],
      "zh": [
        "基于个人卖家，奢侈品与限量款可能混入假货，需确认번개케어等鉴定服务",
        "被引导当面或转账私下交易时，诈骗与成色纠纷风险大且难获保护"
      ],
      "ja": [
        "個人販売基盤のため高級品・限定品は偽物が混じることがあり、ボンゲケアなど検品サービスの確認が必要",
        "対面・口座振込の個人取引に誘導されると詐欺・状態トラブルのリスクが高く保護されにくい"
      ]
    },
    "bestFor": {
      "ko": "관세 부담 없이 국내에서 빠르고 저렴하게 중고 패션·스니커즈를 사고팔려는 모든 사용자.",
      "en": "Anyone who wants to buy and sell secondhand fashion and sneakers domestically, fast and cheap, with no customs burden.",
      "zh": "希望在国内无关税负担、快速又便宜地买卖二手时尚与球鞋的所有用户。",
      "ja": "関税負担なく国内で速く安く中古ファッション・スニーカーを売買したいすべてのユーザー。"
    },
    "verdict": {
      "ko": "국내 중고거래의 사실상 표준으로 물량과 접근성이 압도적이며, 번개페이만 지킨다면 안전성도 상당합니다. 명품·한정판은 반드시 번개케어 검수 옵션을 활용하고 대면·계좌이체 유도는 사기 신호로 간주해 거절하는 것이 핵심 원칙입니다.",
      "en": "It is effectively the standard for domestic secondhand trade, with overwhelming inventory and accessibility, and sticking to Bunjang Pay makes it quite safe. The key principles: always use the Bunjang Care authentication option for luxury and limited items, and treat any push toward in-person or bank-transfer deals as a fraud signal to refuse.",
      "zh": "它实为韩国国内二手交易的事实标准，货源与便利性压倒性，只要坚持번개페이，安全性也相当可靠。核心原则是：奢侈品与限量款务必使用번개케어鉴定选项，并将引导当面或转账交易视为诈骗信号予以拒绝。",
      "ja": "国内中古取引の事実上の標準で物量とアクセス性が圧倒的、ボンゲペイさえ守れば安全性も相当高いです。高級品・限定品は必ずボンゲケア検品オプションを活用し、対面・口座振込への誘導は詐欺のサインと見なして断ることが核心原則です。"
    }
  },
  "kream.co.kr": {
    "priceRange": {
      "ko": "네이버 계열 한정판 리셀 플랫폼으로 인기 스니커즈·스트릿·명품은 정가에 프리미엄이 얹힌 실시간 체결가로 거래됩니다.",
      "en": "A Naver-affiliated limited-edition resale platform where popular sneakers, streetwear, and luxury trade at real-time matched prices with a premium over retail.",
      "zh": "隶属Naver的限量款转售平台，热门球鞋、街头与奢侈品以在零售价上加溢价的实时成交价交易。",
      "ja": "ネイバー系列の限定品リセールプラットフォームで、人気スニーカー・ストリート・高級品は定価にプレミアムが乗った即時約定価格で取引されます。"
    },
    "shipping": {
      "ko": "모든 거래 상품이 자체 검수센터를 거치는 것이 최대 강점으로, 정품·상태 검수 후 구매자에게 발송돼 국내 리셀 중 신뢰도가 매우 높습니다. 다만 구매가 외에 검수비·수수료·배송비가 별도로 붙고, 검수 단계 때문에 수령까지 보통 4~7일이 소요됩니다.",
      "en": "The biggest strength is that every traded item passes through its own inspection center, shipped to the buyer only after authenticity and condition checks, giving it very high trust among domestic resale services. However, inspection fees, commission, and shipping are added on top of the purchase price, and the inspection step means delivery usually takes 4-7 days.",
      "zh": "最大优势在于所有交易商品均经过自有检验中心，通过正品与成色检验后才发货，在韩国国内转售中可信度极高。但购买价之外另收检验费、手续费与运费，且因检验环节收货通常需4至7天。",
      "ja": "すべての取引商品が自社検品センターを経ることが最大の強みで、正規品・状態の検品後に購入者へ発送され、国内リセールの中で信頼度が非常に高いです。ただし購入価格のほかに検品費・手数料・送料が別途かかり、検品工程のため受け取りまで通常4〜7日かかります。"
    },
    "pros": {
      "ko": [
        "전 상품 자체 검수로 가품·하자 리스크가 국내 최저 수준",
        "실시간 체결가·입찰(비드) 시스템으로 투명한 시세 확인 가능",
        "네이버페이 연동 등 국내 결제·환경에 최적화"
      ],
      "en": [
        "In-house inspection of all items keeps counterfeit and defect risk among the lowest domestically",
        "Real-time matched prices and a bid system provide transparent market pricing",
        "Optimized for the domestic environment with Naver Pay integration and more"
      ],
      "zh": [
        "全部商品自有检验，假货与瑕疵风险处于韩国最低水平",
        "实时成交价与竞价（Bid）系统可透明查看行情",
        "对接Naver Pay等，针对韩国本地支付与环境高度优化"
      ],
      "ja": [
        "全商品の自社検品で偽物・不良リスクが国内最低水準",
        "即時約定価格・入札（ビッド）システムで透明な相場確認が可能",
        "ネイバーペイ連携など国内決済・環境に最適化"
      ]
    },
    "cons": {
      "ko": [
        "인기 한정판은 프리미엄과 검수비·수수료가 더해져 정가보다 크게 비쌈",
        "검수를 통과한 제품은 원칙적으로 단순 변심 반품·교환이 불가"
      ],
      "en": [
        "Hyped limited items cost far above retail once premium, inspection fees, and commission are added",
        "Items that pass inspection generally cannot be returned or exchanged for change of mind"
      ],
      "zh": [
        "热门限量款叠加溢价、检验费与手续费后，远高于零售价",
        "通过检验的商品原则上不支持无理由退换货"
      ],
      "ja": [
        "人気限定品はプレミアムと検品費・手数料が加わり定価より大幅に高い",
        "検品を通過した商品は原則として自己都合の返品・交換ができない"
      ]
    },
    "bestFor": {
      "ko": "가품 걱정 없이 검수된 한정판 스니커즈·스트릿·명품을 국내에서 안전하게 사고팔려는 리셀 이용자.",
      "en": "Resale users who want to safely buy and sell authenticated limited-edition sneakers, streetwear, and luxury domestically without counterfeit worries.",
      "zh": "希望在国内无假货顾虑、安全买卖经检验限量球鞋、街头与奢侈品的转售用户。",
      "ja": "偽物の心配なく検品済みの限定スニーカー・ストリート・高級品を国内で安全に売買したいリセール利用者。"
    },
    "verdict": {
      "ko": "국내 한정판 리셀에서 검수 신뢰도만큼은 독보적이라, 가품이 걱정되는 하이프 아이템을 안심하고 거래하기에 최적입니다. 다만 프리미엄·검수비·수수료가 겹쳐 실구매가가 크게 오르고 단순 변심 반품이 어려운 만큼, 시세를 충분히 확인하고 신중히 결정해야 합니다.",
      "en": "For domestic limited-edition resale its authentication credibility is unmatched, making it ideal for trading hype items where counterfeits are a concern with peace of mind. Just note that premium, inspection fees, and commission stack to raise the real price significantly and change-of-mind returns are hard, so check market prices thoroughly and decide carefully.",
      "zh": "在韩国国内限量款转售中，其检验可信度独树一帜，非常适合安心交易担心假货的炒作单品。但需注意溢价、检验费与手续费叠加会大幅推高实际成本，且无理由退货困难，故应充分了解行情并谨慎决定。",
      "ja": "国内の限定品リセールにおいて検品信頼度は群を抜いており、偽物が心配なハイプアイテムを安心して取引するのに最適です。ただしプレミアム・検品費・手数料が重なって実購入価格が大きく上がり、自己都合の返品が難しいため、相場を十分に確認して慎重に判断すべきです。"
    }
  }
};
