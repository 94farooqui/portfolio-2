import React from 'react'

const Portfolio = () => {
  return (
    <div className="flex flex-col bg-background_secondary border border-border_primary rounded-[20px] overflow-hidden px-8 pt-8 pb-24">
      <div>
        <h2 className="text-3xl text-white font-semibold">Portfolio</h2>
        <div className="border-b-[5px] w-[40px]  rounded-full mt-4 border-text_yellow"></div>
      </div>

      <div>
        <ul>
          <li>All</li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio