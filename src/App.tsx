import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import CourceGolaList from "./components/CourceGolaList";
import NewGoal from "./components/NewGoal";

export interface CourceGoalType {
  title: string;
  desc: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourceGoalType[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    const newGoal: CourceGoalType = {
      id: Math.random(),
      title: goal,
      desc: summary,
    };

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourceGolaList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
