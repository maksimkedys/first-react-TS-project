import { type CourceGoalType } from "../App";
import CourceGoal from "./CourseGoal";

interface CourceGolaListProps {
  goals: CourceGoalType[];
  onDeleteGoal: (id: number) => void;
}

function CourceGolaList({ goals, onDeleteGoal }: CourceGolaListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourceGoal goal={goal} onDeleteGoal={onDeleteGoal}>
            <p>{goal.desc}</p>
          </CourceGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourceGolaList;
