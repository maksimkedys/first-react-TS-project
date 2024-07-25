import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";
import CourceGolaList from "./components/CourceGolaList";

export interface CourceGoalType {
  title: string;
  desc: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourceGoalType[]>([]);

  function handleAddGoal() {
    const newGoal: CourceGoalType = {
      id: Math.random(),
      title: "Buy a car",
      desc: "I love cars",
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
        <h1>Your Cource Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourceGolaList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
