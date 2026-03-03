// 추천 활동 데이터 (실제 API 대신 사용할 모의 데이터)

import { type Activity } from "./types";

export const mockActivities: Activity[] = [
  {
    activity: "공원에서 배드민턴 치기",
    type: "recreational",
    participants: 2,
    price: 0,
    key: "1",
  },
  {
    activity: "혼자서 조용히 독서하기",
    type: "relaxation",
    participants: 1,
    price: 0,
    key: "2",
  },
  {
    activity: "친구들과 보드게임 카페 가기",
    type: "social",
    participants: 4,
    price: 0.2,
    key: "3",
  },
  {
    activity: "유튜브 보고 파스타 요리하기",
    type: "cooking",
    participants: 1,
    price: 0.1,
    key: "4",
  },
  {
    activity: "한강에서 돗자리 펴고 치맥하기",
    type: "social",
    participants: 2,
    price: 0.3,
    key: "5",
  },
  {
    activity: "카페에서 노트북으로 작업하기",
    type: "education",
    participants: 1,
    price: 0.1,
    key: "6",
  },
  {
    activity: "코인 노래방에서 열창하기",
    type: "music",
    participants: 1,
    price: 0.1,
    key: "7",
  },
];
