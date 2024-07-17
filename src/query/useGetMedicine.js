const countries = [
  { code: "AE", en: "United Arab Emirates", ko: "아랍에미리트" },
  { code: "AF", en: "Afghanistan", ko: "아프가니스탄" },
  { code: "ZA", en: "South Africa", ko: "남아프리카 공화국" },
  { code: "ZW", en: "Zimbabwe", ko: "짐바브웨" },
  { code: "US", en: "United States", ko: "미국" },
  { code: "CA", en: "Canada", ko: "캐나다" },
  { code: "MX", en: "Mexico", ko: "멕시코" },
  { code: "BR", en: "Brazil", ko: "브라질" },
  { code: "AR", en: "Argentina", ko: "아르헨티나" },
  { code: "GB", en: "United Kingdom", ko: "영국" },
  { code: "FR", en: "France", ko: "프랑스" },
  { code: "DE", en: "Germany", ko: "독일" },
  { code: "IT", en: "Italy", ko: "이탈리아" },
  { code: "ES", en: "Spain", ko: "스페인" },
  { code: "RU", en: "Russia", ko: "러시아" },
  { code: "CN", en: "China", ko: "중국" },
  { code: "JP", en: "Japan", ko: "일본" },
  { code: "KR", en: "South Korea", ko: "대한민국" },
  { code: "IN", en: "India", ko: "인도" },
  { code: "AU", en: "Australia", ko: "호주" },
  { code: "NZ", en: "New Zealand", ko: "뉴질랜드" },
  { code: "EG", en: "Egypt", ko: "이집트" },
  { code: "NG", en: "Nigeria", ko: "나이지리아" },
  { code: "KE", en: "Kenya", ko: "케냐" },
  { code: "DZ", en: "Algeria", ko: "알제리" },
  { code: "MA", en: "Morocco", ko: "모로코" },
  { code: "SA", en: "Saudi Arabia", ko: "사우디아라비아" },
  { code: "TR", en: "Turkey", ko: "터키" },
  { code: "IR", en: "Iran", ko: "이란" },
  { code: "IQ", en: "Iraq", ko: "이라크" },
  { code: "IL", en: "Israel", ko: "이스라엘" },
  { code: "PK", en: "Pakistan", ko: "파키스탄" },
  { code: "BD", en: "Bangladesh", ko: "방글라데시" },
  { code: "ID", en: "Indonesia", ko: "인도네시아" },
  { code: "TH", en: "Thailand", ko: "태국" },
  { code: "VN", en: "Vietnam", ko: "베트남" },
  { code: "MY", en: "Malaysia", ko: "말레이시아" },
  { code: "PH", en: "Philippines", ko: "필리핀" },
  { code: "SG", en: "Singapore", ko: "싱가포르" },
  { code: "KH", en: "Cambodia", ko: "캄보디아" },
  { code: "LA", en: "Laos", ko: "라오스" },
  { code: "MM", en: "Myanmar", ko: "미얀마" },
  { code: "LK", en: "Sri Lanka", ko: "스리랑카" },
  { code: "NP", en: "Nepal", ko: "네팔" },
  { code: "BT", en: "Bhutan", ko: "부탄" },
  { code: "MV", en: "Maldives", ko: "몰디브" },
  { code: "BN", en: "Brunei", ko: "브루나이" },
  { code: "TL", en: "Timor-Leste", ko: "동티모르" },
  { code: "FJ", en: "Fiji", ko: "피지" },
  { code: "PG", en: "Papua New Guinea", ko: "파푸아뉴기니" },
  { code: "WS", en: "Samoa", ko: "사모아" },
  { code: "TO", en: "Tonga", ko: "통가" },
  { code: "SB", en: "Solomon Islands", ko: "솔로몬 제도" },
  { code: "VU", en: "Vanuatu", ko: "바누아투" },
  { code: "FM", en: "Micronesia", ko: "미크로네시아" },
  { code: "MH", en: "Marshall Islands", ko: "마셜 제도" },
  { code: "PW", en: "Palau", ko: "팔라우" },
  { code: "NR", en: "Nauru", ko: "나우루" },
  { code: "TV", en: "Tuvalu", ko: "투발루" },
  { code: "KI", en: "Kiribati", ko: "키리바시" },
  { code: "PY", en: "Paraguay", ko: "파라과이" },
  { code: "UY", en: "Uruguay", ko: "우루과이" },
  { code: "BO", en: "Bolivia", ko: "볼리비아" },
  { code: "CL", en: "Chile", ko: "칠레" },
  { code: "CO", en: "Colombia", ko: "콜롬비아" },
  { code: "EC", en: "Ecuador", ko: "에콰도르" },
  { code: "PE", en: "Peru", ko: "페루" },
  { code: "VE", en: "Venezuela", ko: "베네수엘라" },
  { code: "GY", en: "Guyana", ko: "가이아나" },
  { code: "SR", en: "Suriname", ko: "수리남" },
  { code: "GF", en: "French Guiana", ko: "프랑스령 기아나" },
  { code: "HT", en: "Haiti", ko: "아이티" },
  { code: "DO", en: "Dominican Republic", ko: "도미니카 공화국" },
  { code: "CU", en: "Cuba", ko: "쿠바" },
  { code: "JM", en: "Jamaica", ko: "자메이카" },
  { code: "TT", en: "Trinidad and Tobago", ko: "트리니다드 토바고" },
  { code: "BB", en: "Barbados", ko: "바베이도스" },
  { code: "BS", en: "Bahamas", ko: "바하마" },
  { code: "AG", en: "Antigua and Barbuda", ko: "앤티가 바부다" },
  { code: "LC", en: "Saint Lucia", ko: "세인트루시아" },
  {
    code: "VC",
    en: "Saint Vincent and the Grenadines",
    ko: "세인트빈센트 그레나딘",
  },
  { code: "GD", en: "Grenada", ko: "그레나다" },
  { code: "BZ", en: "Belize", ko: "벨리즈" },
  { code: "HN", en: "Honduras", ko: "온두라스" },
  { code: "SV", en: "El Salvador", ko: "엘살바도르" },
  { code: "NI", en: "Nicaragua", ko: "니카라과" },
  { code: "CR", en: "Costa Rica", ko: "코스타리카" },
  { code: "PA", en: "Panama", ko: "파나마" },
  { code: "GT", en: "Guatemala", ko: "과테말라" },
  { code: "UA", en: "Ukraine", ko: "우크라이나" },
  { code: "PL", en: "Poland", ko: "폴란드" },
  { code: "CZ", en: "Czech Republic", ko: "체코" },
  { code: "SK", en: "Slovakia", ko: "슬로바키아" },
  { code: "HU", en: "Hungary", ko: "헝가리" },
  { code: "RO", en: "Romania", ko: "루마니아" },
  { code: "BG", en: "Bulgaria", ko: "불가리아" },
  { code: "RS", en: "Serbia", ko: "세르비아" },
  { code: "HR", en: "Croatia", ko: "크로아티아" },
  { code: "BA", en: "Bosnia and Herzegovina", ko: "보스니아 헤르체고비나" },
  { code: "SI", en: "Slovenia", ko: "슬로베니아" },
  { code: "ME", en: "Montenegro", ko: "몬테네그로" },
  { code: "MK", en: "North Macedonia", ko: "북마케도니아" },
  { code: "AL", en: "Albania", ko: "알바니아" },
  { code: "GR", en: "Greece", ko: "그리스" },
];

export async function fetchMedicine(query) {
  await new Promise((r) => setTimeout(r, 2_000)); // 2초 지연
  return countries.filter(
    (country) =>
      country.en.toLowerCase().includes(query.toLowerCase()) ||
      country.ko.toLowerCase().includes(query.toLowerCase())
  );
}
