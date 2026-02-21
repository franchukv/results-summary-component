import type { CategoryItem } from '../../types/common';
import ResultOverview from '../ResultOverview/ResultOverview';
import ResultSummary from '../ResultSummary/ResultSummary';

const ResultCard = ({ categoryItems }: { categoryItems: CategoryItem[] }) => {
  const averageScore: number =
    categoryItems.length === 0
      ? 0
      : Math.round(
          categoryItems.reduce(
            (totalScore, categoryItem) => totalScore + categoryItem.score,
            0,
          ) / categoryItems.length,
        );

  return (
    <div className="max-w-184 w-full flex flex-col md:flex-row md:shadow-[0_30px_60px_0_rgba(61,108,236,0.15)] rounded-4xl bg-white">
      <ResultOverview averageScore={averageScore} />
      <ResultSummary resultItems={categoryItems} />
    </div>
  );
};

export default ResultCard;
