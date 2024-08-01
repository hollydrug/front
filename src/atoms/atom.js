import { atom } from 'recoil';

export const detailDataState = atom({
  key: 'detailDataState',
  default: {
    itemSeq: 0,
    itemName: '',
    atpnQesitm: '',
    efcyQesitm: '',
    useMethodQesitm: '',
    intrcQesitm: '',
    seQesitm: '',
    depositMethodQesitm: '',
    itemImage: '',
  },
});

export const presDataArrayState = atom({
  key: 'presDataArrayState',
  default: [
    {
      itemSeq: 202200407,
      itemName: '타이레놀8시간이알서방정(아세트아미노펜)',
      atpnQesitm:
        '이 약에 과민증, 소화성궤양, 심한 혈액 이상 환자, 심한 간장애, 심한 신장(콩팥)장애, 심한 심장기능저하, 아스피린 천식(비스테로이드성 소염(항염)제에 의한 천식발작 유발) 또는 경험자, 바르비탈계 약물 또는 삼환계 항우울제 복용한 환자, 알코올을 복용한 사람, 12세 미만의 소아는 이 약을 복용하지 마십시오.이 약을 복용하기 전에 간장애 또는 경험자, 신장(콩팥)장애 또는 경험자, 소화성궤양의 경험자, 혈액이상 또는 경험자, 출혈경향이 있는 환자, 심장기능이상이 있는 환자, 과민증의 경험자, 기관지천식 환자, 고령자(노인), 임부 또는 수유부, 글루타치온 보유량이 낮은 상태의 환자는 의사 또는 약사와 상의하십시오.',
      efcyQesitm:
        '이 약은 해열 및 감기에 의한 동통(통증)과 두통, 치통, 근육통, 허리통증, 생리통, 관절통의 완화에 사용합니다.',
      useMethodQesitm:
        '12세 이상의 소아와 성인은 1회 2정을 매 8시간마다 복용합니다. 24시간 동안 6정을 초과하지 마십시오.이 약은 서방형 제제이므로 정제를 으깨거나 씹거나 녹이지 말고 그대로 삼켜서 복용하십시오.',
      intrcQesitm:
        '와파린, 플루클록사실린을 복용하는 환자는 의사 또는 약사와 상의하십시오.',
      seQesitm:
        '쇽 증상(호흡곤란, 온몸이 붉어짐, 혈관부기, 두드러기 등), 천식발작, 혈소판감소, 과립구감소, 용혈성빈혈, 메트헤모글로빈혈증, 혈소판기능 저하(출혈시간 연장), 청색증, 과민증상(얼굴부기, 땀이 남, 저혈압), 구역, 구토, 식욕부진, 위장출혈, 소화성궤양, 천공(뚦림), 발진, 피부점막안증후군(스티븐스-존슨증후군), 독성표피괴사증(리엘증후군), AST 상승, ALT 상승, 고정발진 등이 나타나는 경우 복용을 즉각 중지하고 의사 또는 약사와 상의하십시오.',
      depositMethodQesitm:
        '실온에서 보관하십시오. 어린이의 손이 닿지 않는 곳에 보관하십시오.',
      itemImage:
        'https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1OKRXo9l4DN',
    },
    {
      itemSeq: 197700120,
      itemName: '부루펜정200밀리그램(이부프로펜)',
      atpnQesitm:
        '이 약에 과민증 환자, 위장관궤양, 위장관출혈, 심한 혈액이상, 심한 간장애, 심한 신장장애, 심한 심장기능부전, 심한 고혈압, 기관지천식, 아스피린 또는 다른 소염진통제에 의한 천식, 두드러기, 알레르기 반응 경험 환자, 심장동맥 우회로술 전후 통증발생 환자, 임신 말기 3개월 기간의 임부, 수유부, 항암요법으로 고용량 메토트렉세이트를 투여 중인 환자, 갈락토오스 불내성, Lapp 유당분해효소 결핍증 또는 포도당-갈락토오스 흡수장애 등의 유전적인 문제가 있는 환자는 이 약을 복용하지 마십시오.권장용량을 초과하여 복용하지 마십시오.이 약을 복용하기 전에 혈액이상, 출혈경향 환자, 간경화, 간장애, 신장장애, 심장기능부전, 심질환, 고혈압, 전신홍반루푸스, 혼합결합조직질환, 궤양성대장염, 크론병, 노인, 만 2세 미만의 소아, 임부, 수유부, 저용량 아스피린을 복용하는 사람, 수두인 경우 의사 또는 약사와 상의하십시오.감기에 복용할 경우에는 원칙적으로 5일 이내로 복용하며 의사 또는 약사의 지시 없이 통증에 10일 이상(성인) 또는 5일 이상(소아) 복용하지 않고 발열에 3일 이상 복용하지 않습니다.',
      efcyQesitm:
        '이 약은 류마티양 관절염, 연소성 류마티양 관절염, 골관절염(퇴행성 관절질환), 감기로 인한 발열 및 동통, 요통, 월경곤란증, 수술후 동통과 강직성 척추염, 두통, 치통, 근육통, 신경통, 급성통풍, 건선성 관절염, 연조직손상(염좌, 좌상), 비관절 류마티스질환(건염, 건초염, 활액낭염)에 사용합니다.',
      useMethodQesitm:
        '성인은 류마티양 관절염, 골관절염, 강직성 척추염, 연조직손상, 비관절 류마티스질환, 급성통풍, 건선성 관절염에는 1회 1~3정(200~600 mg) 1일 3~4회 1일 최고 16정(3,200 mg)까지 복용할 수 있으며, 연소성 류마티양 관절염에는 1일 체중 kg당 30~40 mg을 3~4회 분할 복용, 경증 및 중등도의 동통이나 감기에는 성인 1회 1~2정(200~400 mg) 1일 3~4회 복용합니다.',
      intrcQesitm:
        '항암요법으로 고용량 메토트렉세이트를 투여중인 환자, 다른 비스테로이드성 소염진통제와 함께 이 약을 복용하지 마십시오.이 약을 복용하기 전에 저용량 아스피린, ACE 저해제 복용자, 리튬, 푸로세미드 및 티아지드계 이뇨제, 저용량 메토트렉세이트, 쿠마린계 항응혈제(와파린 등), 선택적 세로토닌 재흡수억제제를 복용하는 환자는 의사 또는 약사와 상의하십시오.',
      seQesitm:
        '쇽 증상(호흡곤란, 혈압저하 등), 헤마토크리트감소, 헤모글로빈감소, 빈혈, 재생불량성빈혈, 용혈성빈혈, 무과립구증, 과립구감소, 백혈구감소, 혈소판감소, 혈소판기능저하, 호산구증가 등의 혈액장애, 소화성궤양, 위장관궤양, 위장출혈, 천공(뚫림), 궤양성대장염, 혈변, 위염, 췌장염, 혈액구토, 크론병, 식욕부진, 구역, 구토, 복통, 소화불량, 설사, 위부불쾌감, 상복부통증, 구갈, 구내염, 복부팽만감, 구강궤양, 변비, 흑변, 피부점막안증후군(스티븐스-존슨증후군), 독성표피괴사용해, 빈도불명의 호산구증가 및 전신 증후군을 동반한 약물 발진, 혈관신경성 부종, 수포성피부염, 다형홍반, 반구진 발진, 피부 붉어짐, 물집, 발진, 급성전신발진물집증, 간염, 황달, 간기능이상, 간장애, 과민증 또는 아나필락시스 반응, 천식발작, 두드러기, 습진, 자주색반점, 시각장애, 귀먹음, 귀울림, 미각이상, 현기증, 졸음, 어지러움, 우울, 두통, 뇌혈관사고 또는 신경질, 무균성수막염 또는 수막염(심한 두통, 구역, 구토, 불면, 목이 뻣뻣함, 발열 또는 의식장애, 급성신부전, 소변감소, 혈뇨, 요단백, BUN, 혈중크레아티닌의 상승, 고칼륨혈증, 간질성 콩팥염, 콩팥염증후군, 콩팥유두괴사, 요량감소, 전신부종 및 이에 수반하는 숨가쁨, 나른함, 눈주변부기, 얼굴부기, 권태감, 발열, 코피, 부기, 말초부종 등이 나타나는 경우 즉각 복용을 중지하고 의사 또는 약사와 상의하십시오.',
      depositMethodQesitm:
        '실온에서 보관하십시오.어린이의 손이 닿지 않는 곳에 보관하십시오.',
      itemImage:
        'https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1Mxwka5v45V',
    },
  ],
});
