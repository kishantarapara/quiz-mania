import TickIcon from "../icons/TickIcon";
import WellDoneIcon from "../icons/WellDoneIcon";
import LowScoreIcon from "../icons/LowScoreIcon";

interface ScoreCardProps {
  score: number;
}

const ScoreCard = ({ score }: ScoreCardProps) => {
  const getPerformanceMessage = () => {
    if (score >= 80) {
      return "Great job!";
    } else if (score >= 60) {
      return "Well done!";
    } else {
      return "Keep practicing!";
    }
  };

  const getScoreColor = () => {
    if (score >= 80) {
      return "text-success";
    } else if (score >= 60) {
      return "text-warning";
    } else {
      return "text-primary";
    }
  };

  const getScoreIcon = () => {
    if (score >= 80) {
      return <TickIcon variant="success" />;
    } else if (score >= 60) {
      return <WellDoneIcon />;
    } else {
      return <LowScoreIcon />;
    }
  };

  const isLowScore = score < 60;
  return (
    <div>
      <div className="mb-8">
        <div className="w-20 h-20 text-red rounded-full bg-neutral-100 mx-auto flex items-center justify-center">
          {getScoreIcon()}
        </div>
      </div>

      {isLowScore ? (
        <div className="mb-12">
          <p className="text-primary-dark text-xl mb-4">
            You successfully completed the Quiz but you need to
          </p>
          <h1 className="text-4xl font-bold text-primary-dark font-thin tracking-widest">
            KEEP
          </h1>
          <h1 className="text-4xl font-bold text-primary-dark font-thin tracking-widest">
            PRACTICING!
          </h1>
        </div>
      ) : (
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary-dark mb-4 weight-100 font-thin tracking-wide md:tracking-wider lg:tracking-widest">
            CONGRATULATION
          </h1>
          <p className="text-primary-dark text-xl">
            You successfully completed the Quiz and holds
          </p>
        </div>
      )}

      <div className="mb-12">
        <h2 className="text-2xl font-medium text-primary-dark mb-4">
          Your Score
        </h2>
        <p className={`text-6xl font-bold ${getScoreColor()}`}>{score}%</p>
        <p className="text-3xl font-bold text-primary-dark mt-4">
          {getPerformanceMessage()}
        </p>
      </div>
    </div>
  );
};

export default ScoreCard;
