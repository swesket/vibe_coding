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
    nav: { sites: "사이트", guide: "가이드", brands: "브랜드", blog: "블로그", about: "소개", submit: "등록 요청" },
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
      methodology: {
        title: "큐레이션 프로세스",
        desc: "DIGGING의 모든 사이트는 4단계 검증 프로세스를 거칩니다. 먼저 에디터가 직접 사이트를 방문하여 UI, 상품 퀄리티, 고객 서비스를 평가합니다. 이후 실제 주문을 통해 배송 속도와 포장 상태를 확인하고, 반품·교환 절차의 편의성을 테스트합니다. 마지막으로 커뮤니티 평판과 리뷰를 종합 분석하여 최종 등록 여부를 결정합니다. 이 과정은 분기마다 재검증되며, 기준에 미달하는 사이트는 목록에서 제외됩니다."
      },
      criteria: {
        title: "선정 기준",
        items: [
          "상품 정품 보장 및 투명한 반품 정책을 운영하는가",
          "고유한 브랜드 셀렉션 또는 독점 상품이 있는가",
          "사용자 경험(UI/UX)이 직관적이고 편리한가",
          "배송·결제 시스템이 안정적이고 국제 배송을 지원하는가",
          "에디토리얼 콘텐츠나 스타일링 가이드를 제공하는가",
          "커뮤니티 내 평판과 고객 리뷰가 긍정적인가"
        ]
      },
      story: {
        title: "DIGGING의 탄생",
        desc: "수많은 패션 쇼핑 사이트가 존재하지만, 정말 신뢰할 수 있는 곳을 찾기란 쉽지 않습니다. DIGGING은 이런 고민에서 출발했습니다. 직접 수백 개의 사이트를 방문하고, 주문하고, 반품까지 경험하며 검증한 결과물을 공유하고자 합니다. 패션 초보자부터 마니아까지, 누구나 자신에게 맞는 최적의 쇼핑 목적지를 빠르게 찾을 수 있도록 돕는 것이 우리의 미션입니다."
      },
      values: [
        { icon: "🔍", title: "직접 검증", desc: "모든 사이트를 에디터가 직접 방문하고, 실제 주문과 반품 테스트를 거쳐 신뢰성을 확인합니다. 광고 제휴 여부와 관계없이 객관적 기준으로 평가합니다." },
        { icon: "🎯", title: "엄선된 큐레이션", desc: "양보다 질을 우선합니다. 수백 개 사이트 중 DIGGING의 엄격한 기준을 충족하는 사이트만 선별하여, 쇼핑 결정에 드는 시간과 위험을 줄여드립니다." },
        { icon: "🌏", title: "글로벌 커버리지", desc: "한국, 미국, 유럽, 일본 등 전 세계 주요 패션 마켓을 아우릅니다. 각 지역의 쇼핑 문화와 배송·관세 정보까지 함께 제공하여 해외 직구의 진입 장벽을 낮춥니다." }
      ]
    },
    form: {
      title: "사이트 등록 요청", desc: "운영 중인 패션 쇼핑 사이트를 DIGGING에 등록하고 싶으시다면 아래 양식을 작성해주세요. 검토 후 연락드리겠습니다.",
      siteName: "사이트 이름", siteUrl: "사이트 URL", category: "카테고리", categoryPlaceholder: "카테고리 선택",
      description: "사이트 소개", descPlaceholder: "사이트에 대한 간단한 소개를 작성해주세요.",
      contact: "담당자 이메일", contactPlaceholder: "email@example.com", submit: "등록 요청하기 →",
      successTitle: "요청이 접수되었습니다!", successDesc: "검토 후 등록 여부를 이메일로 안내드리겠습니다. 감사합니다.",
      process: [
        { icon: "📝", title: "1. 양식 제출", desc: "아래 양식에 사이트 정보를 입력하고 제출해주세요. 사이트 이름, URL, 카테고리, 소개글은 필수 항목입니다." },
        { icon: "🔍", title: "2. 에디터 검토", desc: "DIGGING 에디터가 제출된 사이트를 직접 방문하여 상품 퀄리티, UI/UX, 배송 정책, 고객 서비스를 종합적으로 평가합니다." },
        { icon: "✅", title: "3. 등록 완료", desc: "검토 기준을 충족하면 DIGGING 디렉토리에 등록되며, 결과는 이메일로 안내드립니다. 통상 7~14일이 소요됩니다." }
      ]
    },
    brands: {
      title: "브랜드 검색",
      desc: "좋아하는 브랜드를 검색하면 해당 브랜드를 취급하는 사이트를 한눈에 확인할 수 있습니다.",
      searchPlaceholder: "브랜드 검색...",
      popularTitle: "인기 브랜드",
      resultLabel: "취급 사이트",
      emptyResult: "해당 브랜드를 찾을 수 없습니다.",
      intro: "DIGGING의 브랜드 검색 기능을 활용하면 좋아하는 브랜드를 취급하는 사이트를 한 번에 찾을 수 있습니다. Nike, Gucci, Supreme 등 40개 이상의 인기 브랜드를 검색하거나 아래 인기 브랜드 칩을 클릭해보세요. 각 브랜드별로 DIGGING이 검증한 신뢰할 수 있는 쇼핑 사이트 목록과 함께 가격대, 배송 정보를 확인할 수 있습니다."
    },
    vision: { normal: "일반", protanopia: "적록 색약", achromatopsia: "완전 색맹" },
    comments: {
      title: "커뮤니티", desc: "패션에 대해 자유롭게 이야기해보세요. 좋은 사이트 추천, 쇼핑 후기, 질문 모두 환영합니다.",
      guidelinesTitle: "커뮤니티 가이드라인",
      guidelines: [
        "서로 존중하고 예의 바른 언어를 사용해주세요.",
        "광고, 스팸, 자기 홍보 목적의 링크는 삼가주세요.",
        "패션 관련 주제(사이트 추천, 쇼핑 후기, 코디 질문 등)에 집중해주세요.",
        "개인정보(전화번호, 주소 등)를 공유하지 마세요.",
        "허위 정보나 미확인 소문은 퍼뜨리지 말아주세요."
      ]
    },
    blog: {
      title: "블로그",
      desc: "DIGGING 에디터가 직접 작성한 패션 쇼핑 인사이트와 실용 가이드를 만나보세요.",
      readMore: "자세히 보기 →",
      backToList: "← 목록으로",
      articles: [
        {
          id: "customs-shipping",
          title: "2025 해외 직구 관세·배송 완벽 가이드",
          date: "2025-03-15",
          summary: "해외 패션 직구 시 관세 기준, 면세 한도, 플랫폼별 배송 비교까지 — 초보자도 쉽게 따라 할 수 있는 완벽 가이드.",
          body: "<p>해외 직구(직접 구매)는 국내에서 구할 수 없는 한정판 아이템이나 해외 세일 가격을 활용할 수 있는 매력적인 쇼핑 방법입니다. 하지만 관세, 부가세, 배송 옵션 등을 모르면 예상치 못한 비용이 발생할 수 있습니다. 이 가이드에서는 2025년 기준 해외 직구의 모든 것을 정리합니다.</p><h3>관세 기준과 면세 한도</h3><p>한국의 개인 수입 면세 한도는 미화 150달러(미국발은 200달러)입니다. 이 금액을 초과하면 물품 가격 전체에 대해 관세와 부가세가 부과됩니다. 의류의 경우 관세율은 통상 13%이며, 여기에 부가세 10%가 추가됩니다. 예를 들어 300달러짜리 재킷을 구매하면 약 7만 원의 추가 비용이 발생할 수 있습니다.</p><h3>플랫폼별 배송 비교</h3><p>SSENSE는 한국 직배송을 지원하며 관부가세를 미리 계산해 결제 시 포함시킵니다. Farfetch 역시 DDP(관세 포함) 옵션을 제공하여 추가 비용 걱정 없이 구매할 수 있습니다. 반면 END Clothing이나 Mr Porter는 DDU(관세 미포함) 방식이므로 수령 시 별도로 관부가세를 납부해야 합니다.</p><h3>배송 대행지 활용법</h3><p>미국 내 배송만 지원하는 사이트의 경우 배송 대행지를 활용하면 됩니다. 몰테일, 유니옥션 같은 대행 서비스에 가입하면 미국 내 주소를 받을 수 있고, 해당 주소로 배송된 물품을 한국으로 재발송해줍니다. 대행 수수료는 보통 3~5달러이며, 여러 건을 합배송하면 배송비를 절약할 수 있습니다.</p><h3>현명한 직구 팁</h3><p>첫째, 환율을 수시로 확인하세요. 원/달러 환율이 낮을 때 구매하면 같은 가격이라도 원화 기준으로 절약됩니다. 둘째, 카드사별 해외 결제 수수료를 비교하세요. 일부 카드는 해외 결제 수수료가 무료이거나 캐시백을 제공합니다. 셋째, 블랙 프라이데이(11월), 사이버 먼데이, 시즌 엔드 세일(1월, 7월)은 최대 할인 시기이므로 미리 위시리스트를 준비해두세요.</p><h3>반품과 교환</h3><p>해외 직구의 가장 큰 리스크는 반품입니다. 국제 반품 배송비가 비쌀 수 있으므로, 구매 전 반드시 사이즈 가이드를 확인하고, 반품 정책을 꼼꼼히 읽어보세요. SSENSE와 Farfetch는 비교적 관대한 반품 정책을 운영하며, 일부 품목에 한해 무료 반품을 지원합니다. 사이즈가 불확실하다면 동일 브랜드의 국내 매장에서 먼저 피팅해보는 것을 추천합니다.</p>"
        },
        {
          id: "resale-beginners",
          title: "패션 리셀 입문자를 위한 첫 구매 가이드",
          date: "2025-02-20",
          summary: "StockX, GOAT, KREAM 플랫폼 비교부터 정품 검수 과정, 가격 추이 분석까지 — 리셀 시장 첫 발을 내딛는 분들을 위한 종합 안내서.",
          body: "<p>패션 리셀(Resale) 시장은 최근 몇 년간 급성장하며 하나의 거대한 산업이 되었습니다. 한정판 스니커즈, 스트릿웨어 콜라보 제품은 정가의 몇 배에 거래되기도 합니다. 하지만 처음 리셀 시장에 진입하면 어떤 플랫폼을 선택해야 할지, 정품 여부는 어떻게 확인하는지 막막할 수 있습니다.</p><h3>주요 리셀 플랫폼 비교</h3><p>StockX는 '주식 시장' 모델을 도입한 선구자입니다. 구매자와 판매자가 입찰/호가 방식으로 거래하며, 모든 상품은 StockX 인증 센터를 거쳐 정품 검수 후 배송됩니다. 수수료는 구매 시 약 3%의 처리 수수료와 배송비가 별도 부과됩니다. GOAT는 StockX와 유사하지만 '중고 상품'도 취급한다는 점이 차별점입니다. 새 상품뿐 아니라 상태가 좋은 중고 스니커즈도 구매할 수 있어 가격 폭이 넓습니다.</p><p>한국 사용자라면 KREAM이 가장 접근성이 좋습니다. 한국어 인터페이스, 국내 배송, 원화 결제가 가능하며, 검수 기준도 매우 엄격합니다. 다만 StockX나 GOAT 대비 가격이 높은 경우가 있으니 반드시 비교 후 구매하세요.</p><h3>정품 검수 이해하기</h3><p>리셀 플랫폼의 핵심 가치는 정품 보증입니다. StockX는 전 세계 인증 센터에서 전문 감정사가 외관, 라벨, 소재, 접착제 품질까지 확인합니다. KREAM은 국내 검수 센터를 운영하며, 박스 상태, 택(tag) 부착 여부, 제조 결함까지 꼼꼼히 점검합니다. 검수 탈락 시 거래가 취소되고, 판매자에게 페널티가 부과됩니다.</p><h3>가격 추이 분석하는 법</h3><p>리셀 시장에서 가장 중요한 스킬은 가격 추이를 읽는 것입니다. StockX는 12개월간의 거래 내역과 시세 그래프를 제공합니다. 일반적으로 한정판 제품은 발매 직후 가격이 급등하고, 2~4주 후 안정됩니다. 비한정판은 시간이 지날수록 가격이 하락하는 경향이 있습니다. 구매 전 반드시 최근 30일간의 평균 거래가를 확인하고, 현재 최저 호가와 비교하세요.</p><h3>안전한 거래를 위한 체크리스트</h3><p>절대로 플랫폼 외부에서 직거래하지 마세요. 개인 간 직거래는 위조품 리스크가 높고, 분쟁 발생 시 보상받기 어렵습니다. 판매자의 거래 이력과 평점을 확인하고, 상품 사진에서 라벨, 바느질 품질, 색감을 꼼꼼히 비교하세요. 의심스러운 가격(시세보다 현저히 낮은)은 위조품 신호일 수 있습니다.</p><h3>리셀 시장의 미래</h3><p>리셀 시장은 계속 성장하고 있습니다. 나이키의 SNKRS 앱 래플 시스템, 아디다스의 Confirmed 앱 등 브랜드가 직접 희소성을 관리하면서 리셀 시장은 더욱 체계화되고 있습니다. 초보자라면 먼저 소액으로 시작해 플랫폼의 작동 방식을 이해하고, 점차 관심 있는 카테고리를 넓혀가는 것을 추천합니다.</p>"
        },
        {
          id: "drop-calendar",
          title: "스트릿웨어 드롭 캘린더 활용법",
          date: "2025-01-10",
          summary: "드롭 문화란 무엇인지부터 정보 수집, 구매 준비, 리셀 전략까지 — 드롭에서 성공하기 위한 실전 노하우.",
          body: "<p>'드롭(Drop)'은 스트릿웨어 브랜드가 신제품을 정해진 날짜와 시간에 한정 수량으로 출시하는 방식입니다. Supreme, Palace, Stussy 같은 브랜드가 이 방식을 대중화했으며, 최근에는 Nike, adidas 같은 대형 브랜드도 한정판 출시에 드롭 방식을 활용합니다. 드롭 문화를 이해하고 캘린더를 활용하면 원하는 아이템을 놓치지 않을 수 있습니다.</p><h3>드롭 정보 수집 방법</h3><p>드롭 정보는 공식 채널보다 커뮤니티에서 먼저 공개되는 경우가 많습니다. Instagram의 리크(leak) 계정들(@dropsbyjay, @py_rates, @supreme_leaks_news)은 발매 1~2주 전 제품 사진과 예상 가격을 공유합니다. Sole Collector, Hypebeast, Highsnobiety 같은 미디어도 드롭 캘린더를 운영합니다. 한국에서는 카시나(Kasina)와 LSD(Limited Supply & Demand) 인스타그램 계정이 국내 발매 정보를 빠르게 전달합니다.</p><h3>드롭 준비 체크리스트</h3><p>드롭에서 성공하려면 사전 준비가 필수입니다. 먼저, 드롭 당일 사용할 사이트에 미리 회원 가입하고 배송지와 결제 정보를 저장하세요. Supreme은 매주 목요일 오전 11시(미국 ET)에 드롭하며, Palace는 금요일에 진행합니다. 드롭 10분 전에는 브라우저를 열어 페이지를 미리 로드하세요.</p><p>사이즈는 반드시 미리 결정하세요. 드롭 시간에 사이즈를 고민하면 이미 매진됩니다. 인기 아이템은 5초 이내에 매진되는 경우도 있으므로, 원하는 컬러와 사이즈를 확정한 뒤 가장 빠른 동선으로 결제에 도달하는 연습을 하세요.</p><h3>래플(Raffle) 시스템 이해하기</h3><p>래플은 추첨 방식의 판매 시스템입니다. 선착순 드롭과 달리, 정해진 기간 동안 응모한 뒤 당첨자만 구매 권한을 얻습니다. Nike SNKRS 앱, adidas Confirmed 앱, END Clothing, SNS(Sneakersnstuff)가 래플을 자주 진행합니다. 래플의 장점은 서두를 필요가 없다는 것이고, 단점은 당첨 확률이 낮다는 것입니다. 당첨 확률을 높이려면 가능한 많은 래플에 동시 응모하세요.</p><h3>드롭 후 리셀 전략</h3><p>드롭에서 구매한 아이템의 리셀 타이밍도 중요합니다. 일반적으로 발매 직후 1~3일간 리셀 가격이 가장 높습니다. 이 시기에 판매하면 최대 수익을 얻을 수 있습니다. 반면 장기 보유 전략도 있습니다. Supreme Box Logo 티셔츠, Nike x Off-White 콜라보처럼 시간이 지날수록 가치가 오르는 아이템도 있습니다. StockX와 GOAT의 과거 시세 데이터를 분석하면 어떤 아이템이 장기 투자 가치가 있는지 판단할 수 있습니다.</p><h3>주의사항</h3><p>드롭 문화는 재미있지만, 과소비에 주의하세요. '리셀로 돈을 벌겠다'는 목적으로 무리하게 구매하면 오히려 손해를 볼 수 있습니다. 대부분의 아이템은 리셀 프리미엄이 기대만큼 크지 않습니다. 진정으로 원하고 착용할 아이템을 중심으로 구매하고, 리셀은 보너스 정도로 생각하는 것이 건강한 드롭 문화 참여 방법입니다.</p>"
        }
      ]
    },
    footer: {
      brandDesc: "전 세계 패션 쇼핑 사이트를 큐레이션하는 디깅 플랫폼.",
      navTitle: "메뉴", legalTitle: "정보",
      sites: "사이트 목록", guide: "쇼핑 가이드", brands: "브랜드", blog: "블로그", about: "소개",
      privacy: "개인정보처리방침", terms: "이용약관", submit: "등록 요청", contact: "문의하기",
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
    nav: { sites: "Sites", guide: "Guide", brands: "Brands", blog: "Blog", about: "About", submit: "Submit" },
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
      methodology: {
        title: "Our Curation Process",
        desc: "Every site on DIGGING goes through a rigorous 4-step verification process. First, our editors personally visit each site to evaluate UI, product quality, and customer service. Next, we place real orders to assess shipping speed and packaging quality, then test the returns and exchange process for convenience. Finally, we analyze community reputation and reviews to make the final listing decision. This process is re-verified quarterly, and sites that fall below our standards are removed from the directory."
      },
      criteria: {
        title: "Selection Criteria",
        items: [
          "Guarantees product authenticity with a transparent return policy",
          "Offers a unique brand selection or exclusive products",
          "Provides an intuitive and user-friendly shopping experience (UI/UX)",
          "Maintains stable payment and shipping systems with international delivery support",
          "Produces editorial content or styling guides for shoppers",
          "Has a positive community reputation backed by customer reviews"
        ]
      },
      story: {
        title: "The DIGGING Story",
        desc: "There are countless fashion shopping sites out there, but finding ones you can truly trust is surprisingly difficult. DIGGING was born from this frustration. We've personally visited hundreds of sites, placed orders, and even tested returns to verify each one. Our mission is to help everyone — from fashion beginners to seasoned enthusiasts — quickly find the perfect shopping destination that matches their style and needs."
      },
      values: [
        { icon: "🔍", title: "Verified by Editors", desc: "Every site is personally visited by our editorial team, with real orders and return tests to verify reliability. We evaluate objectively regardless of advertising partnerships." },
        { icon: "🎯", title: "Quality Over Quantity", desc: "We prioritize quality over volume. Out of hundreds of sites, only those meeting DIGGING's strict standards are featured, saving you time and reducing risk in your shopping decisions." },
        { icon: "🌏", title: "Global Coverage", desc: "Spanning Korea, US, Europe, Japan, and beyond. We provide regional shopping culture insights along with shipping and customs information to lower the barrier to international shopping." }
      ]
    },
    form: {
      title: "Submit Your Site", desc: "Want your fashion shopping site featured on DIGGING? Fill out the form below and we'll review your submission.",
      siteName: "Site Name", siteUrl: "Site URL", category: "Category", categoryPlaceholder: "Select a category",
      description: "Site Description", descPlaceholder: "Tell us briefly about your site.",
      contact: "Contact Email", contactPlaceholder: "email@example.com", submit: "Submit Request →",
      successTitle: "Request submitted!", successDesc: "We'll review your site and get back to you via email. Thank you.",
      process: [
        { icon: "📝", title: "1. Submit Form", desc: "Fill out the form below with your site details. Site name, URL, category, and description are required fields." },
        { icon: "🔍", title: "2. Editor Review", desc: "Our editorial team personally visits your site to evaluate product quality, UI/UX, shipping policies, and customer service." },
        { icon: "✅", title: "3. Listing Complete", desc: "If your site meets our standards, it will be added to the DIGGING directory. Results are sent via email, typically within 7-14 days." }
      ]
    },
    brands: {
      title: "Brand Search",
      desc: "Search for your favorite brand to see which sites carry it at a glance.",
      searchPlaceholder: "Search brands...",
      popularTitle: "Popular Brands",
      resultLabel: "Available Sites",
      emptyResult: "Brand not found.",
      intro: "Use DIGGING's brand search to instantly find which curated sites carry your favorite brands. Search over 40 popular brands like Nike, Gucci, and Supreme, or click the popular brand chips below. For each brand, you'll see a list of DIGGING-verified trusted shopping sites along with pricing and shipping details."
    },
    vision: { normal: "Normal", protanopia: "Protanopia", achromatopsia: "Achromatopsia" },
    comments: {
      title: "Community", desc: "Talk freely about fashion. Site recommendations, shopping reviews, and questions are all welcome.",
      guidelinesTitle: "Community Guidelines",
      guidelines: [
        "Be respectful and use courteous language.",
        "No advertising, spam, or self-promotional links.",
        "Stay on topic — fashion-related discussions (site reviews, shopping tips, outfit questions) are encouraged.",
        "Do not share personal information (phone numbers, addresses, etc.).",
        "Do not spread false information or unverified rumors."
      ]
    },
    blog: {
      title: "Blog",
      desc: "Original fashion shopping insights and practical guides written by DIGGING editors.",
      readMore: "Read more →",
      backToList: "← Back to list",
      articles: [
        {
          id: "customs-shipping",
          title: "2025 Complete Guide to International Shopping: Customs & Shipping",
          date: "2025-03-15",
          summary: "Everything you need to know about customs duties, duty-free limits, and platform-by-platform shipping comparisons for international fashion shopping.",
          body: "<p>International shopping (direct purchasing from overseas) is an attractive way to access limited-edition items or take advantage of overseas sale prices. However, without understanding customs duties, taxes, and shipping options, unexpected costs can arise. This guide covers everything about international fashion shopping as of 2025.</p><h3>Customs Duties and Duty-Free Limits</h3><p>Korea's personal import duty-free threshold is $150 USD ($200 for shipments from the US). When this amount is exceeded, customs duties and VAT are applied to the entire product value. For clothing, the standard customs rate is approximately 13%, plus 10% VAT. For example, purchasing a $300 jacket could result in approximately $55 in additional fees.</p><h3>Platform-by-Platform Shipping Comparison</h3><p>SSENSE supports direct shipping to Korea and calculates customs duties in advance, including them at checkout. Farfetch also offers a DDP (Delivered Duty Paid) option for worry-free purchasing. In contrast, END Clothing and Mr Porter use DDU (Delivered Duty Unpaid), meaning you'll need to pay customs separately upon delivery.</p><h3>Using Forwarding Services</h3><p>For sites that only ship within the US, forwarding services are the solution. Services like Malltail and Unionion provide you with a US address, and they reship packages to Korea. Forwarding fees are typically $3-5, and consolidating multiple orders saves on shipping costs.</p><h3>Smart Shopping Tips</h3><p>First, monitor exchange rates regularly. Purchasing when the won is strong against the dollar means paying less in local currency. Second, compare international transaction fees across credit cards — some offer zero foreign transaction fees or cashback. Third, Black Friday (November), Cyber Monday, and end-of-season sales (January, July) offer the deepest discounts, so prepare your wishlist in advance.</p><h3>Returns and Exchanges</h3><p>The biggest risk in international shopping is returns. International return shipping can be expensive, so always check size guides and read return policies carefully before purchasing. SSENSE and Farfetch have relatively generous return policies, with some items qualifying for free returns. If you're unsure about sizing, try the same brand at a local store first for reference.</p>"
        },
        {
          id: "resale-beginners",
          title: "First-Time Buyer's Guide to Fashion Resale",
          date: "2025-02-20",
          summary: "From comparing StockX, GOAT, and KREAM platforms to understanding authentication processes and price trend analysis — a comprehensive guide for resale market newcomers.",
          body: "<p>The fashion resale market has experienced explosive growth in recent years, becoming a massive industry. Limited-edition sneakers and streetwear collaborations can trade for multiples of their retail price. But entering the resale market for the first time can be overwhelming — which platform to choose, how to verify authenticity, and when to buy.</p><h3>Major Resale Platform Comparison</h3><p>StockX pioneered the 'stock market' model for sneakers. Buyers and sellers trade through a bid/ask system, and all products pass through StockX authentication centers for verification before shipping. Fees include approximately 3% processing fee plus shipping for buyers. GOAT is similar to StockX but differentiates by also handling used items. You can purchase pre-owned sneakers in good condition, offering a wider price range.</p><p>For Korean users, KREAM offers the best accessibility with a Korean interface, domestic shipping, and KRW payment. Their authentication standards are very strict. However, prices can be higher compared to StockX or GOAT, so always compare before purchasing.</p><h3>Understanding Authentication</h3><p>The core value of resale platforms is authenticity guarantee. StockX employs professional authenticators at global centers who check appearance, labels, materials, and adhesive quality. KREAM operates domestic authentication centers, meticulously inspecting box condition, tag attachment, and manufacturing defects. Failed authentication results in transaction cancellation and seller penalties.</p><h3>How to Analyze Price Trends</h3><p>The most important skill in the resale market is reading price trends. StockX provides 12-month transaction history and price graphs. Generally, limited-edition products see a price surge immediately after release, stabilizing 2-4 weeks later. Non-limited items tend to decrease in price over time. Before purchasing, always check the 30-day average sale price and compare it with the current lowest ask.</p><h3>Safe Transaction Checklist</h3><p>Never trade outside the platform through direct deals. Person-to-person transactions carry high counterfeit risks, and disputes are difficult to resolve. Check the seller's transaction history and ratings, and carefully compare labels, stitching quality, and colors in product photos. Suspiciously low prices (significantly below market value) can signal counterfeits.</p><h3>The Future of Resale</h3><p>The resale market continues to grow. With Nike's SNKRS app raffle system, adidas's Confirmed app, and other brands directly managing scarcity, the resale market is becoming increasingly sophisticated. Beginners should start small to understand how platforms work, then gradually expand into categories that interest them.</p>"
        },
        {
          id: "drop-calendar",
          title: "How to Use Streetwear Drop Calendars Like a Pro",
          date: "2025-01-10",
          summary: "From understanding drop culture to information gathering, purchase preparation, and resale strategy — practical tips for winning at drops.",
          body: "<p>A 'Drop' is the method by which streetwear brands release new products in limited quantities at a set date and time. Brands like Supreme, Palace, and Stussy popularized this approach, and recently even major brands like Nike and adidas use drop-style releases for limited editions. Understanding drop culture and utilizing calendars ensures you never miss the items you want.</p><h3>How to Gather Drop Information</h3><p>Drop information often surfaces in communities before official channels. Instagram leak accounts (@dropsbyjay, @py_rates, @supreme_leaks_news) share product photos and estimated prices 1-2 weeks before release. Media outlets like Sole Collector, Hypebeast, and Highsnobiety also maintain drop calendars. In Korea, Kasina and LSD (Limited Supply & Demand) Instagram accounts quickly relay domestic release information.</p><h3>Drop Preparation Checklist</h3><p>Success at drops requires advance preparation. First, register on the drop site ahead of time and save your shipping and payment information. Supreme drops every Thursday at 11 AM ET, while Palace drops on Fridays. Open your browser and pre-load the page 10 minutes before the drop time.</p><p>Always decide your size beforehand. Deliberating during drop time means the item is already gone. Popular items can sell out within 5 seconds, so confirm your desired color and size, then practice the fastest path to checkout.</p><h3>Understanding Raffle Systems</h3><p>Raffles are a lottery-based selling system. Unlike first-come-first-served drops, you enter during a set period and only winners receive purchase rights. Nike SNKRS, adidas Confirmed, END Clothing, and SNS (Sneakersnstuff) frequently run raffles. The advantage of raffles is no rushing; the disadvantage is low odds. To improve your chances, enter as many raffles as possible simultaneously.</p><h3>Post-Drop Resale Strategy</h3><p>The timing of resale after a successful drop matters significantly. Generally, resale prices are highest during the first 1-3 days after release. Selling during this window yields maximum profit. Alternatively, a long-term hold strategy exists. Items like Supreme Box Logo tees and Nike x Off-White collaborations can appreciate over time. Analyzing historical price data on StockX and GOAT helps determine which items have long-term investment value.</p><h3>Important Reminders</h3><p>Drop culture is exciting, but beware of overspending. Buying aggressively with the sole purpose of 'making money through resale' can backfire. Most items don't carry as much resale premium as expected. Focus on purchasing items you genuinely want to wear, and consider resale as a bonus. That's the healthiest way to participate in drop culture.</p>"
        }
      ]
    },
    footer: {
      brandDesc: "A curation platform for fashion shopping sites worldwide.",
      navTitle: "Navigate", legalTitle: "Info",
      sites: "Site Directory", guide: "Shopping Guide", brands: "Brands", blog: "Blog", about: "About Us",
      privacy: "Privacy Policy", terms: "Terms of Service", submit: "Submit Site", contact: "Contact",
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
    nav: { sites: "网站", guide: "指南", brands: "品牌", blog: "博客", about: "关于", submit: "提交" },
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
      methodology: {
        title: "策展流程",
        desc: "DIGGING的每个网站都经过严格的4步验证流程。首先，编辑亲自访问网站，评估界面、商品品质和客户服务。然后通过实际下单检验配送速度和包装质量，测试退换货流程的便利性。最后综合分析社区口碑和用户评价，做出最终收录决定。此流程每季度重新验证一次，不达标的网站将从目录中移除。"
      },
      criteria: {
        title: "选择标准",
        items: [
          "保障商品正品并运营透明的退货政策",
          "拥有独特的品牌选品或独家商品",
          "用户体验（UI/UX）直观便捷",
          "支付和物流系统稳定，支持国际配送",
          "提供编辑内容或穿搭指南",
          "社区口碑和用户评价积极正面"
        ]
      },
      story: {
        title: "DIGGING的诞生",
        desc: "时尚购物网站数不胜数，但找到真正值得信赖的却并不容易。DIGGING正是源于这一困扰。我们亲自访问了数百个网站，实际下单、退货，将验证结果分享给大家。我们的使命是帮助每一个人——从时尚新手到资深爱好者——快速找到最适合自己的购物目的地。"
      },
      values: [
        { icon: "🔍", title: "编辑亲自验证", desc: "每个网站都由编辑团队亲自访问，通过实际下单和退货测试验证可靠性。无论是否有广告合作关系，均以客观标准评估。" },
        { icon: "🎯", title: "质量优于数量", desc: "我们以质量为先。在数百个网站中，仅收录符合DIGGING严格标准的网站，为您节省选择时间，降低购物风险。" },
        { icon: "🌏", title: "全球覆盖", desc: "涵盖韩国、美国、欧洲、日本等全球主要时尚市场。同时提供各地区的购物文化及配送·关税信息，降低海淘门槛。" }
      ]
    },
    form: {
      title: "提交您的网站", desc: "想让您的时尚购物网站入驻DIGGING？请填写以下表单，我们会审核您的申请。",
      siteName: "网站名称", siteUrl: "网站网址", category: "分类", categoryPlaceholder: "选择分类",
      description: "网站介绍", descPlaceholder: "请简要介绍您的网站。",
      contact: "联系邮箱", contactPlaceholder: "email@example.com", submit: "提交申请 →",
      successTitle: "申请已提交！", successDesc: "我们将审核您的网站并通过邮件回复。感谢您的提交。",
      process: [
        { icon: "📝", title: "1. 提交表单", desc: "在下方表单中填写您的网站信息并提交。网站名称、网址、分类和介绍是必填项。" },
        { icon: "🔍", title: "2. 编辑审核", desc: "DIGGING编辑团队会亲自访问您的网站，对商品品质、界面体验、配送政策和客户服务进行综合评估。" },
        { icon: "✅", title: "3. 收录完成", desc: "通过审核标准后，您的网站将被收录到DIGGING目录中。审核结果将通过邮件通知，通常需要7-14天。" }
      ]
    },
    brands: {
      title: "品牌搜索",
      desc: "搜索您喜欢的品牌，一目了然地查看哪些网站有售。",
      searchPlaceholder: "搜索品牌...",
      popularTitle: "热门品牌",
      resultLabel: "可购买网站",
      emptyResult: "未找到该品牌。",
      intro: "使用DIGGING的品牌搜索功能，即可一站式找到销售您喜爱品牌的网站。搜索Nike、Gucci、Supreme等40多个热门品牌，或点击下方热门品牌标签。每个品牌都会显示经过DIGGING验证的可信购物网站列表，以及价格和配送信息。"
    },
    vision: { normal: "正常", protanopia: "红绿色弱", achromatopsia: "全色盲" },
    comments: {
      title: "社区", desc: "与大家自由交流时尚话题。网站推荐、购物评价、提问都欢迎。",
      guidelinesTitle: "社区准则",
      guidelines: [
        "请互相尊重，使用礼貌的语言。",
        "请勿发布广告、垃圾信息或自我推广链接。",
        "请聚焦时尚相关话题（网站推荐、购物评测、穿搭问题等）。",
        "请勿分享个人信息（电话号码、地址等）。",
        "请勿传播虚假信息或未经证实的谣言。"
      ]
    },
    blog: {
      title: "博客",
      desc: "DIGGING编辑亲自撰写的时尚购物洞察与实用指南。",
      readMore: "阅读更多 →",
      backToList: "← 返回列表",
      articles: [
        {
          id: "customs-shipping",
          title: "2025海外直购关税·配送完全指南",
          date: "2025-03-15",
          summary: "海外时尚直购的关税标准、免税额度、各平台配送比较——新手也能轻松上手的完全指南。",
          body: "<p>海外直购是一种极具吸引力的购物方式，可以获得国内买不到的限量款或享受海外折扣价格。但如果不了解关税、增值税和配送选项，可能会产生意想不到的费用。本指南整理了2025年海外直购的全部要点。</p><h3>关税标准与免税额度</h3><p>韩国个人进口免税额度为150美元（美国发货为200美元）。超过此金额，将对商品全额征收关税和增值税。服装类关税率通常为13%，另加10%增值税。例如，购买一件300美元的夹克，可能产生约55美元的额外费用。</p><h3>各平台配送比较</h3><p>SSENSE支持韩国直邮，并在结账时预先计算并包含关税。Farfetch也提供DDP（含关税）选项，无需担心额外费用。而END Clothing和Mr Porter采用DDU（不含关税）方式，需要在收货时另行缴纳关税。</p><h3>转运服务使用方法</h3><p>对于仅支持美国境内配送的网站，可以使用转运服务。注册Malltail、Unionion等转运服务即可获得美国地址，再将包裹转寄至韩国。转运费通常为3-5美元，多件合并发货可节省运费。</p><h3>聪明购物技巧</h3><p>第一，经常关注汇率变动。在本币汇率有利时购买，同样的价格可以节省更多。第二，比较各信用卡的海外交易手续费——有些卡免手续费或提供返现。第三，黑色星期五（11月）、网络星期一和换季大促（1月、7月）是折扣最大的时期，提前准备好购物清单。</p><h3>退货与换货</h3><p>海外直购最大的风险是退货。国际退货运费可能很高，因此购买前务必查看尺码表和退货政策。SSENSE和Farfetch拥有相对宽松的退货政策，部分商品支持免费退货。如果不确定尺码，建议先到当地门店试穿同品牌商品作为参考。</p>"
        },
        {
          id: "resale-beginners",
          title: "时尚转售入门者首次购买指南",
          date: "2025-02-20",
          summary: "从StockX、GOAT、KREAM平台比较到正品鉴定流程、价格趋势分析——转售市场新手的综合指南。",
          body: "<p>时尚转售市场近年来经历了爆发式增长，已成为一个庞大的产业。限量版球鞋和街头潮牌联名产品的交易价格可达零售价的数倍。但初次进入转售市场，面对平台选择、正品验证等问题，难免会感到困惑。</p><h3>主要转售平台比较</h3><p>StockX率先将&lsquo;股票市场&rsquo;模式引入球鞋交易。买卖双方通过出价/要价系统进行交易，所有商品都经过StockX认证中心验证后才发货。买家需支付约3%的处理费和运费。GOAT与StockX类似，但也销售二手商品，提供更广泛的价格范围。</p><p>韩国用户首选KREAM，提供韩语界面、国内配送和韩元支付。鉴定标准非常严格，但价格可能高于StockX或GOAT，务必比较后再购买。</p><h3>理解正品鉴定</h3><p>转售平台的核心价值是正品保障。StockX在全球认证中心配备专业鉴定师，检查外观、标签、材质和粘合质量。KREAM运营国内鉴定中心，仔细检查鞋盒状态、吊牌和制造缺陷。鉴定不通过则取消交易，并对卖家进行处罚。</p><h3>如何分析价格趋势</h3><p>转售市场最重要的技能是解读价格趋势。StockX提供12个月的交易记录和价格图表。通常限量产品在发售后价格飙升，2-4周后趋于稳定。非限量款则随时间推移价格下降。购买前务必查看近30天平均成交价，并与当前最低要价比较。</p><h3>安全交易清单</h3><p>绝对不要在平台外进行私下交易。个人交易假货风险高，发生纠纷难以维权。检查卖家的交易记录和评分，仔细核对商品照片中的标签、缝线质量和颜色。异常低价（明显低于市场价）可能是假货信号。</p><h3>转售市场的未来</h3><p>转售市场持续增长。随着Nike SNKRS抽签系统、adidas Confirmed等品牌直接管理稀缺性，转售市场日趋成熟。建议新手从小额开始，熟悉平台运作方式后，再逐步拓展感兴趣的品类。</p>"
        },
        {
          id: "drop-calendar",
          title: "街头潮牌发售日历使用攻略",
          date: "2025-01-10",
          summary: "从了解发售文化到信息收集、购买准备和转售策略——在发售中制胜的实战技巧。",
          body: "<p>&lsquo;发售（Drop）&rsquo;是街头潮牌在固定日期和时间以限量方式推出新品的模式。Supreme、Palace、Stussy等品牌将这种方式发扬光大，近年来Nike、adidas等大品牌也在限量款发售中采用这一模式。了解发售文化并善用日历，就不会错过心仪单品。</p><h3>发售信息收集方法</h3><p>发售信息往往在社区中比官方渠道更早公开。Instagram上的泄露账号（@dropsbyjay、@py_rates、@supreme_leaks_news）会在发售前1-2周分享产品照片和预估价格。Sole Collector、Hypebeast、Highsnobiety等媒体也维护着发售日历。在韩国，Kasina和LSD的Instagram账号会快速传达国内发售信息。</p><h3>发售准备清单</h3><p>在发售中成功需要充分准备。首先，提前在发售网站注册账号并保存配送地址和支付信息。Supreme每周四上午11点（美东时间）发售，Palace在周五进行。发售前10分钟打开浏览器预加载页面。</p><p>务必提前决定好尺码。在发售时间犹豫尺码，商品就已经售罄了。热门单品可能在5秒内售罄，因此确定好颜色和尺码后，练习最快的结账路径。</p><h3>理解抽签（Raffle）系统</h3><p>抽签是一种抽奖式销售系统。与先到先得不同，在规定期间内报名，只有中签者才能获得购买权。Nike SNKRS、adidas Confirmed、END Clothing和SNS经常举办抽签。抽签的优点是不用抢，缺点是中签率低。要提高中签率，尽可能同时参加多个抽签。</p><h3>发售后的转售策略</h3><p>成功购买后的转售时机同样重要。通常发售后1-3天内转售价格最高，此时出售可获得最大收益。也可以选择长期持有策略。Supreme Box Logo T恤、Nike x Off-White联名等单品会随时间升值。分析StockX和GOAT的历史价格数据，可以判断哪些单品具有长期投资价值。</p><h3>注意事项</h3><p>发售文化虽然有趣，但要警惕过度消费。以&lsquo;通过转售赚钱&rsquo;为目的大量购买可能适得其反。大多数单品的转售溢价并不如预期。建议以真正想穿的单品为主，将转售视为额外收获。这才是参与发售文化的健康方式。</p>"
        }
      ]
    },
    footer: {
      brandDesc: "精选全球时尚购物网站的策展平台。",
      navTitle: "导航", legalTitle: "信息",
      sites: "网站目录", guide: "购物指南", brands: "品牌", blog: "博客", about: "关于我们",
      privacy: "隐私政策", terms: "服务条款", submit: "提交网站", contact: "联系我们",
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
    nav: { sites: "サイト", guide: "ガイド", brands: "ブランド", blog: "ブログ", about: "紹介", submit: "掲載依頼" },
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
      methodology: {
        title: "キュレーションプロセス",
        desc: "DIGGINGのすべてのサイトは厳格な4段階の検証プロセスを経ています。まずエディターが直接サイトを訪問し、UI、商品クオリティ、カスタマーサービスを評価します。次に実際に注文を行い、配送スピードと梱包状態を確認し、返品・交換手続きの利便性をテストします。最後にコミュニティの評判とレビューを総合分析し、最終的な掲載可否を判断します。このプロセスは四半期ごとに再検証され、基準を下回るサイトはディレクトリから除外されます。"
      },
      criteria: {
        title: "選定基準",
        items: [
          "商品の正規品保証と透明な返品ポリシーを運営しているか",
          "独自のブランドセレクションまたは独占商品があるか",
          "ユーザー体験（UI/UX）が直感的で使いやすいか",
          "決済・配送システムが安定しており国際配送に対応しているか",
          "エディトリアルコンテンツやスタイリングガイドを提供しているか",
          "コミュニティでの評判とカスタマーレビューがポジティブか"
        ]
      },
      story: {
        title: "DIGGINGの誕生",
        desc: "数多くのファッションショッピングサイトが存在しますが、本当に信頼できるサイトを見つけるのは意外と難しいものです。DIGGINGはこの悩みから生まれました。数百のサイトを直接訪問し、注文し、返品まで体験して検証した結果を皆さんと共有したいと考えています。ファッション初心者からマニアまで、誰もが自分に合った最適なショッピング先を素早く見つけられるようサポートすることが私たちのミッションです。"
      },
      values: [
        { icon: "🔍", title: "エディターが直接検証", desc: "すべてのサイトをエディターチームが直接訪問し、実際の注文と返品テストを通じて信頼性を検証しています。広告提携の有無に関わらず客観的な基準で評価します。" },
        { icon: "🎯", title: "量より質", desc: "質を最優先にしています。数百のサイトの中からDIGGINGの厳格な基準を満たすサイトのみを厳選し、ショッピングの意思決定にかかる時間とリスクを軽減します。" },
        { icon: "🌏", title: "グローバルカバレッジ", desc: "韓国、アメリカ、ヨーロッパ、日本など世界の主要ファッション市場を網羅しています。各地域のショッピング文化や配送・関税情報も併せて提供し、海外通販のハードルを下げます。" }
      ]
    },
    form: {
      title: "サイト掲載リクエスト", desc: "運営中のファッションサイトをDIGGINGに掲載しませんか？以下のフォームにご記入ください。審査後ご連絡いたします。",
      siteName: "サイト名", siteUrl: "サイトURL", category: "カテゴリー", categoryPlaceholder: "カテゴリーを選択",
      description: "サイト紹介", descPlaceholder: "サイトについて簡単にご紹介ください。",
      contact: "担当者メールアドレス", contactPlaceholder: "email@example.com", submit: "掲載リクエスト →",
      successTitle: "リクエストを受け付けました！", successDesc: "審査後、メールにてご連絡いたします。ありがとうございます。",
      process: [
        { icon: "📝", title: "1. フォーム送信", desc: "下記フォームにサイト情報を入力して送信してください。サイト名、URL、カテゴリー、紹介文は必須項目です。" },
        { icon: "🔍", title: "2. エディター審査", desc: "DIGGINGエディターチームがサイトを直接訪問し、商品品質、UI/UX、配送ポリシー、カスタマーサービスを総合的に評価します。" },
        { icon: "✅", title: "3. 掲載完了", desc: "審査基準をクリアするとDIGGINGディレクトリに掲載されます。結果はメールでお知らせします。通常7〜14日かかります。" }
      ]
    },
    brands: {
      title: "ブランド検索",
      desc: "お気に入りのブランドを検索して、取り扱いサイトを一目で確認できます。",
      searchPlaceholder: "ブランドを検索...",
      popularTitle: "人気ブランド",
      resultLabel: "取り扱いサイト",
      emptyResult: "該当するブランドが見つかりません。",
      intro: "DIGGINGのブランド検索機能を使えば、お気に入りのブランドを取り扱うサイトを一括で見つけることができます。Nike、Gucci、Supremeなど40以上の人気ブランドを検索するか、下の人気ブランドチップをクリックしてください。各ブランドごとにDIGGINGが検証した信頼できるショッピングサイトのリストと、価格帯や配送情報をご確認いただけます。"
    },
    vision: { normal: "通常", protanopia: "赤緑色弱", achromatopsia: "全色盲" },
    comments: {
      title: "コミュニティ", desc: "ファッションについて自由に語り合いましょう。サイト推薦、お買い物レビュー、質問すべて歓迎です。",
      guidelinesTitle: "コミュニティガイドライン",
      guidelines: [
        "互いを尊重し、丁寧な言葉遣いを心がけてください。",
        "広告、スパム、自己宣伝目的のリンクはご遠慮ください。",
        "ファッション関連のトピック（サイト推薦、ショッピングレビュー、コーディネートの質問など）を中心にお願いします。",
        "個人情報（電話番号、住所など）を共有しないでください。",
        "虚偽の情報や未確認の噂を広めないでください。"
      ]
    },
    blog: {
      title: "ブログ",
      desc: "DIGGINGエディターが直接執筆したファッションショッピングの洞察と実用ガイド。",
      readMore: "詳しく見る →",
      backToList: "← 一覧に戻る",
      articles: [
        {
          id: "customs-shipping",
          title: "2025年 海外通販の関税・配送完全ガイド",
          date: "2025-03-15",
          summary: "海外ファッション通販の関税基準、免税限度額、プラットフォーム別配送比較まで——初心者でも簡単に実践できる完全ガイド。",
          body: "<p>海外通販（直接購入）は、国内で入手できない限定アイテムや海外セール価格を活用できる魅力的なショッピング方法です。しかし関税、付加税、配送オプションを知らないと、予想外の費用が発生する可能性があります。このガイドでは2025年時点の海外通販の全てを整理します。</p><h3>関税基準と免税限度額</h3><p>韓国の個人輸入免税限度額は150米ドル（アメリカ発は200米ドル）です。この金額を超えると、商品全額に対して関税と付加税が課せられます。衣料品の関税率は通常13%で、さらに10%の付加税が加算されます。例えば300ドルのジャケットを購入すると、約55ドルの追加費用が発生する可能性があります。</p><h3>プラットフォーム別配送比較</h3><p>SSENSEは韓国への直送に対応し、関税を事前に計算して決済時に含めます。Farfetchも DDP（関税込み）オプションを提供しているため、追加費用の心配なく購入できます。一方、END ClothingやMr Porterは DDU（関税別）方式のため、受け取り時に別途関税を支払う必要があります。</p><h3>転送サービスの活用法</h3><p>アメリカ国内のみ配送対応のサイトには転送サービスを利用しましょう。Malltail、Unionionなどのサービスに登録するとアメリカ国内の住所が提供され、届いた荷物を韓国に再発送してくれます。転送手数料は通常3〜5ドルで、複数の注文を合わせて発送すれば送料を節約できます。</p><h3>賢いショッピングのコツ</h3><p>第一に、為替レートをこまめにチェックしましょう。自国通貨が強い時に購入すれば、同じ価格でも節約になります。第二に、クレジットカード各社の海外決済手数料を比較しましょう——手数料無料やキャッシュバックを提供するカードもあります。第三に、ブラックフライデー（11月）、サイバーマンデー、シーズンエンドセール（1月、7月）は最大の割引時期ですので、事前にウィッシュリストを準備しておきましょう。</p><h3>返品と交換</h3><p>海外通販の最大のリスクは返品です。国際返品送料が高くつく可能性があるため、購入前に必ずサイズガイドを確認し、返品ポリシーを熟読しましょう。SSENSEとFarfetchは比較的寛大な返品ポリシーを運営しており、一部商品は無料返品に対応しています。サイズが不安な場合は、同ブランドの国内店舗で先にフィッティングすることをおすすめします。</p>"
        },
        {
          id: "resale-beginners",
          title: "ファッションリセル初心者のための購入ガイド",
          date: "2025-02-20",
          summary: "StockX、GOAT、KREAMプラットフォーム比較から正規品鑑定プロセス、価格推移分析まで——リセル市場に初めて足を踏み入れる方への総合ガイド。",
          body: "<p>ファッションリセル市場はここ数年で急成長し、巨大な産業となっています。限定スニーカーやストリートウェアのコラボ商品は定価の何倍もの価格で取引されることも。しかし初めてリセル市場に参入すると、プラットフォーム選びや正規品の確認方法に迷うかもしれません。</p><h3>主要リセルプラットフォーム比較</h3><p>StockXは「株式市場」モデルのパイオニアです。買い手と売り手が入札/売値方式で取引し、すべての商品はStockX認証センターで正規品検査後に発送されます。買い手には約3%の処理手数料と送料がかかります。GOATはStockXと似ていますが、中古品も取り扱う点が差別化ポイントです。状態の良い中古スニーカーも購入でき、価格帯が幅広いのが特徴です。</p><p>韓国ユーザーにはKREAMが最もアクセスしやすいです。韓国語インターフェース、国内配送、ウォン決済が可能で、鑑定基準も非常に厳格です。ただしStockXやGOATより価格が高い場合があるため、必ず比較してから購入しましょう。</p><h3>正規品鑑定を理解する</h3><p>リセルプラットフォームの核心的価値は正規品保証です。StockXは世界中の認証センターで専門鑑定士が外観、ラベル、素材、接着剤の品質まで確認します。KREAMは国内鑑定センターを運営し、箱の状態、タグの有無、製造上の欠陥まで丁寧に検査します。鑑定不合格の場合は取引がキャンセルされ、出品者にペナルティが課せられます。</p><h3>価格推移の分析方法</h3><p>リセル市場で最も重要なスキルは価格推移を読むことです。StockXは12ヶ月間の取引履歴と価格グラフを提供しています。一般的に限定商品は発売直後に価格が急騰し、2〜4週間後に安定します。非限定品は時間の経過とともに価格が下落する傾向があります。購入前に必ず直近30日間の平均取引価格を確認し、現在の最低売値と比較しましょう。</p><h3>安全な取引のためのチェックリスト</h3><p>プラットフォーム外での個人間取引は絶対に避けましょう。個人取引は偽造品のリスクが高く、トラブル発生時の保障が困難です。出品者の取引履歴と評価を確認し、商品写真でラベル、縫製品質、色味を入念に比較しましょう。不審な価格（相場より著しく低い）は偽造品のサインかもしれません。</p><h3>リセル市場の未来</h3><p>リセル市場は成長を続けています。NikeのSNKRSアプリ抽選システム、adidasのConfirmedアプリなど、ブランド自身が希少性を管理することで市場はより体系化されています。初心者はまず少額から始めてプラットフォームの仕組みを理解し、徐々に興味のあるカテゴリーを広げていくことをおすすめします。</p>"
        },
        {
          id: "drop-calendar",
          title: "ストリートウェア ドロップカレンダー活用術",
          date: "2025-01-10",
          summary: "ドロップ文化とは何かから情報収集、購入準備、リセル戦略まで——ドロップで成功するための実践ノウハウ。",
          body: "<p>「ドロップ（Drop）」とは、ストリートウェアブランドが決まった日時に限定数量で新商品をリリースする方式です。Supreme、Palace、Stussyなどがこの方式を広め、最近ではNikeやadidasなどの大手ブランドも限定リリースにドロップ方式を採用しています。ドロップ文化を理解しカレンダーを活用すれば、欲しいアイテムを逃さずに済みます。</p><h3>ドロップ情報の収集方法</h3><p>ドロップ情報は公式チャンネルよりコミュニティで先に公開されることが多いです。Instagramのリークアカウント（@dropsbyjay、@py_rates、@supreme_leaks_news）は発売1〜2週間前に商品写真や予想価格を共有します。Sole Collector、Hypebeast、Highsnobietyなどのメディアもドロップカレンダーを運営しています。韓国ではKasinaやLSDのInstagramアカウントが国内発売情報を素早く発信しています。</p><h3>ドロップ準備チェックリスト</h3><p>ドロップで成功するには事前準備が不可欠です。まず、ドロップ当日使用するサイトに事前に会員登録し、配送先と決済情報を保存しましょう。Supremeは毎週木曜11時（アメリカ東部時間）にドロップ、Palaceは金曜に実施します。ドロップ10分前にはブラウザを開いてページをプリロードしましょう。</p><p>サイズは必ず事前に決めておきましょう。ドロップ時間にサイズを悩んでいるとすでに完売です。人気アイテムは5秒以内に完売することもあるため、希望のカラーとサイズを確定し、最速の決済動線を練習しましょう。</p><h3>ラッフル（抽選）システムの理解</h3><p>ラッフルは抽選方式の販売システムです。先着順のドロップと異なり、決められた期間中にエントリーし、当選者のみが購入権を得ます。Nike SNKRS、adidas Confirmed、END Clothing、SNS（Sneakersnstuff）が頻繁にラッフルを実施しています。ラッフルの利点は急ぐ必要がないこと、欠点は当選確率が低いことです。当選確率を上げるには、可能な限り多くのラッフルに同時エントリーしましょう。</p><h3>ドロップ後のリセル戦略</h3><p>ドロップで購入したアイテムのリセルタイミングも重要です。一般的に発売後1〜3日間がリセール価格のピークです。この時期に売れば最大の利益が得られます。一方、長期保有戦略もあります。Supreme Box Logoティーシャツ、Nike x Off-Whiteコラボなど、時間とともに価値が上がるアイテムもあります。StockXとGOATの過去の価格データを分析すれば、どのアイテムに長期投資価値があるか判断できます。</p><h3>注意事項</h3><p>ドロップ文化は楽しいものですが、過剰消費には注意しましょう。「リセルでお金を稼ぐ」目的で無理に購入すると、かえって損をする可能性があります。ほとんどのアイテムはリセルプレミアムが期待ほど大きくありません。本当に欲しくて着用するアイテムを中心に購入し、リセルはボーナス程度に考えるのが健全なドロップ文化への参加方法です。</p>"
        }
      ]
    },
    footer: {
      brandDesc: "世界中のファッション通販サイトをキュレーションするプラットフォーム。",
      navTitle: "メニュー", legalTitle: "情報",
      sites: "サイト一覧", guide: "ショッピングガイド", brands: "ブランド", blog: "ブログ", about: "紹介",
      privacy: "プライバシーポリシー", terms: "利用規約", submit: "掲載リクエスト", contact: "お問い合わせ",
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
      { href: 'blog.html', label: t.nav.blog, page: 'blog' },
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
  setText('footerNavBlog', ft.blog);
  setText('footerNavAbout', ft.about);
  setText('footerPrivacy', ft.privacy);
  setText('footerTerms', ft.terms);
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
