"use client"
import { useGlobalContextCrop } from '../Context/culturaStore';

type CropType = {
  _id: string;
  cropName: string;
  cropType: string;
  cropVariety: string;
  plantingDate: string;
  harvestingDate: string;
  description: string;
  imageUrl: string;
  soilType: string;
  climate: string;
  ItShouldNotBeRepeatedForXYears: number;
  selectare: boolean;
  selectareBy?: string;
  fertilizers: string[];
  pests: string[];
  diseases: string[];
};

function RotatieItem() {
  const { crops } = useGlobalContextCrop();

  return (
    <div className='crop-list'>
      {crops.map((crop) => (
        <div key={crop._id} className='crop'>
          <h2>{crop.cropName}</h2>
          <h2>{crop.cropType}</h2>
          <h2>{crop.cropVariety}</h2>
          <div>Planting date: {crop.plantingDate}</div>
          <div>Harvesting date: {crop.harvestingDate}</div>
          <p>{crop.description}</p>
          {crop.imageUrl && (
            <img
              src={'data:image/jpeg;' + crop.imageUrl.substring(2, crop.imageUrl.length - 2)}
              alt={crop.cropName}
              style={{ width: 300, height: 400 }}
            />
          )}
          <div>Soil type: {crop.soilType}</div>
          <div>Climate: {crop.climate}</div>
          <div>It should not be repeated for {crop.ItShouldNotBeRepeatedForXYears} years</div>
          <p>Fertilizers:</p>
          <ul>
            {crop.fertilizers.map((fertilizer, index) => (
              <li key={index}>{fertilizer}</li>
            ))}
          </ul>
          <p>Pests:</p>
          <ul>
            {crop.pests.map((pest, index) => (
              <li key={index}>{pest}</li>
            ))}
          </ul>
          <p>Diseases:</p>
          <ul>
            {crop.diseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
          <p>Adaugat la:</p>
          <div>{new Date(crop.createdAt).toLocaleString('en-US')}</div>
        </div>
      ))}
    </div>
  );
}

export default RotatieItem;
