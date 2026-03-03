// 인원 선택 컴포넌트

interface InputStepProps {
  participants: number;
  setParticipants: (val: number) => void;
  onFetch: () => void;
  loading: boolean;
}

export function InputStep({
  participants,
  setParticipants,
  onFetch,
  loading,
}: InputStepProps) {
  return (
    <div className="input-section">
      <p className="description">우리는!</p>
      <div className="input-wrapper">
        <input
          type="number"
          value={participants}
          onChange={(e) => setParticipants(Number(e.target.value))}
          min="1"
          className="participants-input"
        />
        <span className="unit">명</span>
      </div>
      <button className="recommend-btn" onClick={onFetch} disabled={loading}>
        {loading ? "찾고있어요!" : "추천 받기"}
      </button>
    </div>
  );
}
