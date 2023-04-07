import React from 'react'

const AwardWinningDetails = ({data}) => {

    const { icon , text,  text_color } = data

    return (
      <div className="rounded-2xl   ml-5 bg-white shadow-lg overflow- transition duration-300 ease-in-out transform hover:scale-[1.01] p-9">
        <img src={icon} alt="d" className="mb-4" />
        <p className={`font-semibold text-lg text-${text_color}`}>
          {text} 
        </p>
      </div>
    );
  };


export default AwardWinningDetails