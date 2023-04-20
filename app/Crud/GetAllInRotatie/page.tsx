import Link from 'next/link';
import Image from 'next/image';

function Continut({ crop }: { crop: any }): JSX.Element {
  return (
    <>
      <div className="thumbnail">
        {/* <Image src={"data:image/jpeg;" + crop.image.substring(2, crop.image.length - 2)} width={500} height={500} className="rounded img-fluid img" alt="Paris" /> */}
        <p>
          <strong>{crop.cropName}</strong>
          <br />
          <strong>{crop.cropType}</strong>
        </p>
        <p>{crop.description} </p>
        <p>Soil type: {crop.soilType}</p>
        <p>It should not be repeated for {crop.ItShouldNotBeRepeatedForXYears} years</p>
      </div>

      <Link href={`/Crud/GetAllInRotatie/SinglePag?crop=${crop._id}`}>
        <button type="button" className="btn btn-primary">
          Vezi mai mult
        </button>
      </Link>
    </>
  );
}
export default Continut;
