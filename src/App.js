import { useEffect, useState } from "react";
import Input from "./components/Input";
import Levelup from "./components/Levelup";

function App() {
  // in order to go to the next level
  // the remainingXP === inputXP (first time) must be greater than or equal to the currentLevel requiredXP
  // if remainingXP is greater than or equal to the currentLevel requiredXP
  //    calculate how many points are left and increment the level
  //    example: input === 1400
  //    to reach level 2 : you need to spend 1000
  //    level 2: 400xp is left (pointsLeft = remainingXP - requiredLevelXP)
  //    once you reach next Level (level 2 in this case) restart the function automatically
  

  const [inputXP, setInputXP] = useState(0);
  
  const [remainingXP, setRemainingXP] = useState(null);

  const [barFilling, setBarFilling] = useState(false);
  const [barFilled, setBarFilled] = useState(false);
  const [leveledUp, setLeveledUp] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stats, setStats] = useState({
    level: 1,
    requiredXP: 1000,
  });

  const [step, setStep] = useState(1);
  
  useEffect(() => {
    setRemainingXP(inputXP);
  }, [inputXP]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  useEffect(() => {
    if (remainingXP >= stats.requiredXP && !barFilling) {
      setBarFilling(true);
      const pointsLeft = remainingXP - stats.requiredXP;
      setRemainingXP(pointsLeft);
      setStats((stats) => ({
        level: stats.level + 1,
        requiredXP: stats.requiredXP * 1.3,
      }));

      setBarFilling(true);
      setProgress(0);
    }
  }, [inputXP, stats, remainingXP, barFilling]);

  useEffect(() => {
    setLeveledUp(true);
  }, [stats.level]);

  useEffect(() => {
    setBarFilling(false);
  }, [barFilling, progress]);

  return step === 1 ? (
    <Input
      inputXP={inputXP}
      setInputXP={setInputXP}
      setStep={setStep}
      handleSubmit={handleSubmit}
      remainingXP={remainingXP}
      stats={stats}
    />
  ) : (
    <Levelup
      progress={progress}
      setProgress={setProgress}
      leveledUp={leveledUp}
      setLeveledUp={setLeveledUp}
      inputXP={inputXP}
      remainingXP={remainingXP}
      stats={stats}
      setStats={setStats}
      barFilled={barFilled}
      setBarFilled={setBarFilled}
    />
  );
}

export default App;
