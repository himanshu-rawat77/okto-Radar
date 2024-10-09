import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import FundCard from './FundCard';
import { loader } from '../assets';
import downloadImage from '../assets/download.jpeg'
import waterImage from '../assets/water.jpeg'

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  // Dummy data for campaigns with added dummy images
  const dummyCampaigns = [
    {
      id: uuidv4(),
      title: "Education for All",
      description: "A campaign to provide education to underprivileged children.",
      target: "10 ETH",
      raised: "3 ETH",
      deadline: "2024-12-31",
      image: downloadImage,
      owner: "0x1234567890ABCDEF"
    },
    {
      id: uuidv4(),
      title: "Clean Water Initiative",
      description: "Bringing clean water to rural areas.",
      target: "5 ETH",
      raised: "1.2 ETH",
      deadline: "2024-11-20",
      image: waterImage,
      owner: "0xFEDCBA0987654321"
    }
  ];

  // If no campaigns are provided, fallback to dummy data
  const displayCampaigns = campaigns.length > 0 ? campaigns : dummyCampaigns;

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({displayCampaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {!isLoading && displayCampaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet
          </p>
        )}

        {!isLoading && displayCampaigns.length > 0 && displayCampaigns.map((campaign) => (
          <FundCard 
            key={uuidv4()}
            {...campaign}
            handleClick={() => handleNavigate(campaign)}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
