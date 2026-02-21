import type { CategoryItem } from '../../types/common';

const ResultItem = ({ resultItem }: { resultItem: CategoryItem }) => {
  const { category, score, icon } = resultItem;
  const categoryClasses = {
    reaction: 'text-red-400 bg-red-50',
    memory: 'text-yellow-400 bg-yellow-50',
    verbal: 'text-green-500 bg-green-50',
    visual: 'text-blue-800 bg-blue-50',
  };

  return (
    <div
      className={`${categoryClasses[category]} w-full px-4 py-4.5 flex items-center gap-4 rounded-xl md:py-4`}
    >
      <div className="h-5 w-5 min-w-5">
        <img src={icon} alt="" className="w-full h-full object-cover" />
      </div>

      <span className="capitalize">{category}</span>

      <div className="ml-auto font-bold text-navy-950/50">
        <span className="text-navy-950">{score}</span> / 100
      </div>
    </div>
  );
};

export default ResultItem;
