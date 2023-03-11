import Image from 'next/image'

export default function Home() {
	return (
		<>
 <div className="container border-colorat">
	<div className="row">
		<div className="col" style={{borderBottom:' 1px darkgray dotted'}}>
			<h3 className="text-center text-primary">
				Lorem ipsum dolor sit amet.
			</h3>
			<p className="text-muted text-center mb-5">
				Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. <br />
        Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit.<br />
         Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <br />
         <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat<br />
           lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.<br />
            <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
			</p>
		</div>
	<div className="row " >
		<div className="col-md-4 text-center ">
			<h3 className="text-center">
        <a href="/goals">
			Lorem ipsum dolor sit . </a>
			<Image src="/images/paris.jpg" alt="Paris" width={500} height={500} className=" rounded img-fluid img"/>
			</h3>
		</div>
		<div className="col-md-4 text-center border-colorat " style={{paddingBottom: '9rem'}}> <h3>
      <a href="/goals"> 
				Lorem ipsum dolor  amet. </a> </h3>
				<Image src="/images/newyork.jpg" alt="New York" width={500} height={500} className=" rounded img-fluid img"/>
				
		</div>
		<div className="col-md-4 text-center ">
			<h3>
        <a href="/goals">
        Lorem  dolor sit amet. </a>
			</h3>
			<Image src="/images/sanfran.jpg" alt="San Francisco" width={500} height={500} className=" rounded img-fluid img"/>
		</div>
	</div>
</div>
<div className="row mb-5 text-center">
  <div className="col" >
<div className="jumbotron" >
  <h2>
   W Hello, world!
  </h2>
  <p>
    Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat<br />
           lectus, id bibendum diam velit et dui.<em /> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.<br />
  </p>
  <p>
    <a className="btn btn-primary btn-large" href="/noutati">Learn more</a>
  </p>
</div>
</div>
</div>
</div>
</>
)
}
