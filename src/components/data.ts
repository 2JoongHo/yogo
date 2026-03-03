// 추천 활동 데이터 (실제 API 대신 사용할 모의 데이터)

import { type Activity } from "./types";

export const mockActivities: Activity[] = [
  // 1명
  {
    activity: "혼자서 조용히 독서하기",
    type: "혼자일때 쉬어야지",
    participants: 1,
    key: "1",
  },
  {
    activity: "카페에서 노트북으로 작업하기",
    type: "배움엔 끝이없다",
    participants: 1,
    key: "2",
  },
  {
    activity: "유튜브 보고 파스타 요리하기",
    type: "이참에 요리 연구",
    participants: 1,
    key: "3",
  },
  {
    activity: "코인 노래방에서 열창하기",
    type: "스트레스엔 역시",
    participants: 1,
    key: "4",
  },
  {
    activity: "전시회나 미술관 관람",
    type: "교양엔 이만한게 없지",
    participants: 1,
    key: "5",
  },
  {
    activity: "러닝하기",
    type: "풀코스 도전해봐야지?",
    participants: 1,
    key: "6",
  },
  // 2명
  {
    activity: "공원에서 배드민턴 치기",
    type: "단둘이 운동하자!",
    participants: 2,
    key: "7",
  },
  {
    activity: "그때 표시해둔 맛집투어",
    type: "오늘이야말로 가보자!",
    participants: 2,
    key: "8",
  },
  {
    activity: "차타고 드라이브",
    type: "좋은 선곡 부탁해!",
    participants: 2,
    key: "9",
  },
  {
    activity: "한강에서 돗자리 펴고 치맥하기",
    type: "날씨 좋다 놀러갈까?",
    participants: 2,
    key: "10",
  },
  {
    activity: "원데이 클래스",
    type: "이번엔 뭘 해볼까",
    participants: 2,
    key: "11",
  },
  // 3명
  {
    activity: "캠핑이나 글램핑",
    type: "고기먹고 불멍하자",
    participants: 3,
    key: "12",
  },
  {
    activity: "콘서트 가자",
    type: "좋아하는 가수 누구야?",
    participants: 3,
    key: "13",
  },
  {
    activity: "풋살이나 농구",
    type: "진 팀이 음료수 사기",
    participants: 3,
    key: "14",
  },
  {
    activity: "방탈출 카페",
    type: "힌트 없이 나가보자",
    participants: 3,
    key: "15",
  },
  // 4명
  {
    activity: "보드게임 카페 가기",
    type: "넷이하기 딱 좋다!",
    participants: 4,
    key: "16",
  },
  {
    activity: "볼링",
    type: "2:2 커피 내기?",
    participants: 4,
    key: "17",
  },
  {
    activity: "더블 데이트",
    type: "어색어색",
    participants: 4,
    key: "18",
  },
  {
    activity: "콘솔 게임 파티",
    type: "우정은 여기까지다",
    participants: 4,
    key: "19",
  },

  // 5명
  {
    activity: "롤 ㄱ?",
    type: "다섯명이면 역시",
    participants: 5,
    key: "20",
  },
  {
    activity: "마피아 게임",
    type: "밤이 되었습니다.",
    participants: 5,
    key: "21",
  },
  {
    activity: "주제별 무비 night",
    type: "명징하게 직조해낸",
    participants: 5,
    key: "22",
  },
  {
    activity: "소주에 삼겹살",
    type: "진리의 조합",
    participants: 5,
    key: "23",
  },
];
