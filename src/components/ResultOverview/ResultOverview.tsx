const ResultOverview = ({ averageScore }: { averageScore: number }) => {
  return (
    <div className="w-full p-8 flex flex-col items-center gap-6 text-center shadow-[0_30px_60px_0_rgba(61,108,236,0.15)] bg-[linear-gradient(180deg,#75f_0%,#2f2ce9_100%)] rounded-bl-4xl rounded-br-4xl md:max-w-84.5 md:p-11.25 md:rounded-4xl md:justify-center lg:max-w-none">
      <div className="max-w-65 w-full flex flex-col items-center gap-6 md:max-lg:max-w-50 md:gap-8">
        <span className="font-bold text-lg text-navy-200 md:text-[24px]">
          Your Result
        </span>

        <div className="py-8 px-9.5 flex flex-col items-center font-bold text-navy-200/52 rounded-[70px] bg-[linear-gradient(180deg,#4d21c9_0%,rgba(37,33,201,0)_100%)] md:py-13.25 md:px-14.5  md:rounded-[100px]">
          <b className="text-[56px] font-extrabold text-white leading-[100%] md:text-[72px]">
            {averageScore}
          </b>
          <small>of 100</small>
        </div>

        <div className="flex flex-col items-center gap-2 text-navy-200 md:gap-4">
          <span className="font-bold text-[24px] text-white md:text-[32px]">
            Great
          </span>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultOverview;
