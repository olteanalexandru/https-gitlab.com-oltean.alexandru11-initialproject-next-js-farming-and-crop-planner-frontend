"use client"
import { useState, useContext } from 'react';
import { useGlobalContextCrop } from '../Context/culturaStore';
import { useGlobalContext } from '../Context/UserStore';
import FileBase from 'react-file-base64';

const RotatieForm = () => {
  const [cropName, setCropName] = useState('');
  const [cropType, setCropType] = useState('');
  const [cropVariety, setCropVariety] = useState('');
  const [plantingDate, setPlantingDate] = useState('');
  const [harvestingDate, setHarvestingDate] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [soilType, setSoilType] = useState('');
<<<<<<< HEAD
  const [fertilizers, setFertilizers] = useState([]);
  const [pests, setPests] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const [ItShouldNotBeRepeatedForXYears, setItShouldNotBeRepeatedForXYears] = useState('');


=======
  const [climate, setClimate] = useState('');
  const [fertilizers, setFertilizers] = useState([]);
  const [pests, setPests] = useState([]);
  const [diseases, setDiseases] = useState([]);
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0

  const { createCrop } = useGlobalContextCrop();
  const { data } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
  
    createCrop({
      cropName,
      cropType,
      cropVariety,
      plantingDate,
      harvestingDate,
      description,
      imageUrl,
      soilType,
      fertilizers,
      pests,
      diseases,
      ItShouldNotBeRepeatedForXYears: !isNaN(parseInt(ItShouldNotBeRepeatedForXYears))
  ? parseInt(ItShouldNotBeRepeatedForXYears)
  : null,
    }, data.token);
                
=======
    if (!cropName || !cropType || !cropVariety || !plantingDate || !harvestingDate || !description || !imageUrl || !soilType || !climate) {
      alert('Ceva lipseste');
      return;
    }

    createCrop({ cropName, cropType, cropVariety, plantingDate, harvestingDate, description, imageUrl, soilType, climate, fertilizers, pests, diseases }, data.token);
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0
    setCropName('');
    setCropType('');
    setCropVariety('');
    setPlantingDate('');
    setHarvestingDate('');
    setDescription('');
    setImageUrl('');
    setSoilType('');
<<<<<<< HEAD
    setFertilizers([]);
setPests([]);
setDiseases([]);
    setItShouldNotBeRepeatedForXYears('');
  };

  return (
<div className="container">
    <section className="form my-5">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="cropName">Nume cultură:</label>
            <input
              type="text"
              name="cropName"
              id="cropName"
              value={cropName}
              onChange={(e) => setCropName(e.target.value)}
              className="form-control"
            />
          </div>
<div className="col-md-6 form-group">
  <label htmlFor="cropType">Tip cultură:</label>
  <select
    name="cropType"
    id="cropType"
    value={cropType}
    onChange={(e) => setCropType(e.target.value)}
    className="form-control"
  >
    <option value="">Alegeți un tip</option>
    <option value="legume">Legume</option>
    <option value="fructe">Fructe</option>
    <option value="cereale">Cereale</option>
    <option value="alte">Altele</option>
  </select>
</div>
</div>
<div className="row">
<div className="col-md-6 form-group">
  <label htmlFor="cropVariety">Soi cultură:</label>
  <input
    type="text"
    name="cropVariety"
    id="cropVariety"
    value={cropVariety}
    onChange={(e) => setCropVariety(e.target.value)}
    className="form-control"
  />
</div>
<div className="col-md-6 form-group">
  <label htmlFor="plantingDate">Data plantării:</label>
  <input
    type="date"
    name="plantingDate"
    id="plantingDate"
    value={plantingDate}
    onChange={(e) => setPlantingDate(e.target.value)}
    className="form-control"
  />
</div>
</div>
<div className="row">
<div className="col-md-6 form-group">
  <label htmlFor="harvestingDate">Data recoltării:</label>
  <input
    type="date"
    name="harvestingDate"
    id="harvestingDate"
    value={harvestingDate}
    onChange={(e) => setHarvestingDate(e.target.value)}
    className="form-control"
  />
</div>
<div className="col-md-6 form-group">
  <label htmlFor="description">Descriere:</label>
  <textarea
    name="description"
    id="description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="form-control"
  />
</div>
</div>
<div className="row">
<div className="col-md-6 form-group">
  <h3 className="text-center mb-4">Adăugați imagine</h3>
  <FileBase
    multiple={false}
    onDone={({ base64 }) => setImageUrl(base64)}
  />
</div>
<div className="col-md-3 form-group">
  <label htmlFor="soilType">Tip de sol:</label>
  <select
    name="soilType"
    id="soilType"
    value={soilType}
    onChange={(e) => setSoilType(e.target.value)}
    className="form-control"
  >
     <option value="">Alegeți un tip de sol</option>
     <option value="argilos">Argilos</option>
     <option value="nisipos">Nisipos</option>
<option value="lutos">Lutos</option>
<option value="podosol">Podosol</option>
</select>
</div>
</div>
<div className="row">
<div className="col-md-6 form-group">
  <label htmlFor="fertilizers">Îngrășăminte folosite:</label>
  <select
    name="fertilizers"
    id="fertilizers"
    multiple
    value={fertilizers}
    onChange={(e) => setFertilizers(Array.from(e.target.selectedOptions, option => option.value))}
    className="form-control"
  >
    <option value="azotat">Azotat</option>
    <option value="fosfat">Fosfat</option>
    <option value="potasic">Potasic</option>
    <option value="organice">Organice</option>
  </select>
</div>
<div className="col-md-6 form-group">
<label htmlFor="pests">Dăunători:</label>
<select
name="pests"
id="pests"
multiple
value={pests}
onChange={(e) => setPests(Array.from(e.target.selectedOptions, option => option.value))}
className="form-control"
>
<option value="">Selectați un dăunător</option>
<option value="afide">Afide</option>
<option value="gandaci">Gândaci</option>
<option value="musculite">Mușculițe</option>
<option value="paianjeni">Păianjeni</option>
</select>
</div>
</div>
<div className="row">
<div className="col-md-6 form-group">
<label htmlFor="diseases">Boli:</label>
<select
name="diseases"
id="diseases"
multiple
value={diseases}
onChange={(e) => setDiseases(Array.from(e.target.selectedOptions, option => option.value))}
className="form-control"
>
<option value="">Selectați o boală</option>
<option value="albina">Albina</option>
<option value="fusarium">Fusarium</option>
<option value="mildiu">Mildiu</option>
<option value="mucegai">Mușcăgai</option>
<option value="oïdium">Oïdium</option>
<option value="plaga">Plagă</option>
<option value="rugină">Rugină</option>
<option value="tulburări">Tulburări</option>
<option value="viroze">Viroze</option>
</select>
</div>
<div className="col-md-6 form-group">
<label htmlFor="ItShouldNotBeRepeatedForXYears">Nu repeta pentru X ani:</label>
<input
type="number"
name="ItShouldNotBeRepeatedForXYears"
id="ItShouldNotBeRepeatedForXYears"
value={ItShouldNotBeRepeatedForXYears}
onChange={(e) => setItShouldNotBeRepeatedForXYears(e.target.value)}
className="form-control"
/>
</div>
</div>
<div className="form-group">
<button className="btn btn-primary btn-block" type="submit">
Adaugă cultură
</button>
</div>
</form>
</section>
</div>
);
};
=======
    setClimate('');
    setFertilizers([]);
    setPests([]);
    setDiseases([]);
  };

  return (
    <div className="container">
      <section className="form my-5">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="cropName">Nume cultură:</label>
              <input
                type="text"
                name="cropName"
                id="cropName"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="cropType">Tip cultură:</label>
              <select
                name="cropType"
                id="cropType"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className="form-control"
              >
                <option value="">Alegeți un tip</option>
                <option value="legume">Legume</option>
                <option value="fructe">Fructe</option>
                <option value="cereale">Cereale</option>
                <option value="alte">Altele</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="cropVariety">Soi cultură:</label>
              <input
                type="text"
                name="cropVariety"
                id="cropVariety"
                value={cropVariety}
                onChange={(e) => setCropVariety(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="plantingDate">Data plantării:</label>
              <input
                type="date"
                name="plantingDate"
                id="plantingDate"
                value={plantingDate}
                onChange={(e) => setPlantingDate(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="harvestingDate">Data recoltării:</label>
              <input
                type="date"
                name="harvestingDate"
                id="harvestingDate"
                value={harvestingDate}
                onChange={(e) => setHarvestingDate(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="description">Descriere:</label>
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <h3 className="text-center mb-4">Adăugați imagine</h3>
              <FileBase
                multiple={false}
                onDone={({ base64 }) => setImageUrl(base64)}
              />
            </div>
            <div className="col-md-3 form-group">
              <label htmlFor="soilType">Tip de sol:</label>
              <select
                name="soilType"
                id="soilType"
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="form-control"
                >
                <option value="">Alegeți un tip de sol</option>
                <option value="argilos">Argilos</option>
                <option value="nisipos">Nisipos</option>
                <option value="aluvial">Aluvial</option>
                <option value="lutos">Lutos</option>
                </select>
                </div>
                <div className="col-md-3 form-group">
                <label htmlFor="climate">Climă:</label>
                <select
                name="climate"
                id="climate"
                value={climate}
                onChange={(e) => setClimate(e.target.value)}
                className="form-control"
                >
                <option value="">Alegeți un tip de climă</option>
                <option value="temperat">Temperat</option>
                <option value="tropical">Tropical</option>
                <option value="subtropical">Subtropical</option>
                <option value="polar">Polar</option>
                </select>
                </div>
                </div>
                <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                Adaugă cultură
                </button>
                </div>
                </form>
                </section>
                
                  </div>
                )
              }
>>>>>>> c7e98a45e20e56d686e7a047d511b9ffbc0495f0

export default RotatieForm;