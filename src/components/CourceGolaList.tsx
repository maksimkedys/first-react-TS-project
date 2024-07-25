import { ReactNode } from "react";
import { type CourceGoalType } from "../App";
import CourceGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourceGolaListProps {
  goals: CourceGoalType[];
  onDeleteGoal: (id: number) => void;
}

function CourceGolaList({ goals, onDeleteGoal }: CourceGolaListProps) {
  if (goals.length === 0)
    return (
      <InfoBox mode="hint">You have no goals yet. Start adding some!</InfoBox>
    );

  return (
    <>
      {goals.length >= 4 && (
        <InfoBox mode="warning" severity="medium">
          You collecting a lot of goals. Don't put too much on your plate!
        </InfoBox>
      )}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourceGoal goal={goal} onDeleteGoal={onDeleteGoal}>
              <p>{goal.desc}</p>
            </CourceGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourceGolaList;
