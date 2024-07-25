import { type ReactNode } from "react";
import { CourceGoalType } from "../App";

interface CourceGoalProps {
  goal: CourceGoalType;
  children: ReactNode;
  onDeleteGoal: (id: number) => void;
}

function CourceGoal({ goal, onDeleteGoal, children }: CourceGoalProps) {
  return (
    <article>
      <div>
        <h2>{goal.title}</h2>
        {children}
      </div>
      <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
    </article>
  );
}

export default CourceGoal;
