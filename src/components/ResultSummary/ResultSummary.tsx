import type { CategoryItem } from '../../types/common';
import Button from '../Button/Button';
import ResultItem from '../ResultItem/ResultItem';

const ResultSummary = ({ resultItems }: { resultItems: CategoryItem[] }) => {
  return (
    <div className="w-full p-7.5 pt-6 flex flex-col gap-6 md:py-11.25 md:px-10 md:gap-8">
      <span className="font-bold text-lg md:text-[24px]">Summary</span>

      {resultItems.length > 0 ? (
        <div className="flex flex-col gap-4">
          {resultItems.map((categoryItem) => (
            <ResultItem key={categoryItem.category} resultItem={categoryItem} />
          ))}
        </div>
      ) : (
        'There is no summary for your result'
      )}

      {resultItems.length > 0 && <Button>Continue</Button>}
    </div>
  );
};

export default ResultSummary;
