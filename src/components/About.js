import Pic from "./images/Pic.jpg";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-7 d-flex align-items-center justify-content-center">
          <div>
            
            <div className="contain">
              <p>
                Hello,
                <br />Hi there, I'm Aarush Jain - a 3rd-year Computer Science and Engineering student at VIT Chennai.
                Currently, I am specializing in Cyber Physical Systems which enables me to explore my creativity and innovation in the field of technology.
                <br /> I have always been fascinated by the world of coding and Android development.
                With my skills and experience, I strive to create innovative solutions that make people's lives easier. 
               Besides coding, I am also an avid learner, always seeking new ways to expand my knowledge and expertise.
                <br />
                I'm looking forward to connecting with like-minded individuals.
                Let's collaborate, learn from each other, and create great
                things together!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <img id="pictureself" src={Pic} alt="Aryan" />
        </div>
      </div>
    </div>
  );
}
export default About;
