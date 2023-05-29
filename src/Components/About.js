import React from 'react';
import "./About.css";


const About=()=>{

    const handleGithub = (event) => {
        event.preventDefault();
        const url = 'https://github.com/dhananjaychourasiya'; // Replace with your desired URL
        window.open(url, '_blank');
      };

      const handleLinkedin = (event) => {
        event.preventDefault();
        const url = 'https://www.linkedin.com/in/dhananjay-chourasiya-481289ba/'; // Replace with your desired URL
        window.open(url, '_blank');
      };

    return(
        <div className="container-about">
            {/* <h1>About Developer</h1> */}
                <h1 className="course-title">Hi Everyone, Welcome to LearnX</h1>
                <p>
                <h1>Empowering Your Path to Success in the IT Industry</h1></p>
                <p className="course-description">
                    Welcome to our cutting-edge online learning platform! We are thrilled to present a comprehensive range of affordable courses meticulously designed to help you seize exciting job opportunities in today's dynamic IT industry. With extensive research and careful consideration of industry trends, we have created an all-encompassing learning experience that addresses the requirements of the modern IT landscape.
                    <h2>Course Roadmap</h2>
                    Our platform offers a meticulously crafted course roadmap, guiding you through the intricacies of various technologies. Whether you're a beginner or an experienced professional looking to upskill, our courses cover a wide array of in-demand topics. From programming languages and web development frameworks to cloud computing, data science, and cybersecurity, our curriculum encompasses the most sought-after skills in today's job market.
                    <h2>Job Assistance</h2>
                    We understand that securing a rewarding job is a primary goal for learners. That's why our platform provides comprehensive job assistance services to equip you with the necessary tools for success. Our team of experts is dedicated to helping you navigate the job market by offering career guidance, interview preparation, and job placement support. We aim to empower you with the knowledge and resources needed to excel in your job search.
                    One-on-One Support with Industry Experts:
                    At our online learning app, we value the individual learning journey of each student. That's why we offer personalized one-on-one support to address your unique needs. Our experienced instructors are committed to guiding you through the course material, clarifying doubts, and providing tailored feedback to ensure a thorough understanding of the subject matter.
                    <h2>Resume Building</h2>
                    Crafting a compelling resume is essential in today's competitive job market. Our platform offers dedicated resume support, helping you create a professional and polished resume that highlights your skills and accomplishments. Our team of experts can assist you in optimizing your resume to stand out from the crowd and capture the attention of potential employers.
                    <h2>Real-Time Working Project Experience</h2>
                    To bridge the gap between theoretical knowledge and practical application, our courses integrate real-time working project experiences. These projects provide you with hands-on experience in tackling real-world challenges, enabling you to build a robust portfolio that showcases your skills to prospective employers. Through these projects, you will gain invaluable insights and develop the problem-solving abilities necessary for success in the IT industry.
                    Our commitment to your success goes beyond the aforementioned features. Our platform is designed to foster a vibrant community of learners, allowing you to connect with like-minded individuals, share ideas, and collaborate on projects. We also provide access to supplementary resources such as industry webinars, workshops, and guest lectures, ensuring you stay up to date with the latest advancements and emerging trends in the IT field.
                    Whether you are starting your IT career, looking to switch roles, or aiming to enhance your existing skill set, our online learning app is your gateway to a prosperous future in the IT industry. Join us today and unlock a world of opportunities to thrive in the digital age.
                    <br/>
                    <b>Remember, at LearnX, your success is our priority. Let us empower you on your journey to professional excellence.</b>
                <br/>
                </p>
            <form>
                <br></br>

            <div className="about-form-group">
                <input type="text" placeholder="Email"/>
            </div>
            <div className="about-form-group">
                <input type="text" placeholder="Password"/>
            </div>
            <div className="about-form-group">
                <button type="submit" className="btn">Login</button>
                <h4>Forgot Password?</h4>
            </div>
            
            <div className="about-form-register">
                <p>Don't have Account? <br/>Create Account below</p>
                <button type="submit" className="btn">Sign Up</button>
            </div>

            </form>
            <div className="form-connect">
            <p>Let's Connect</p>
            <button type="submit" className="form-connect-github" href="https://github.com/dhananjaychourasiya" onClick={handleGithub}>GitHub</button>
            <button type="submit" className="form-connect-linkedin" href="https://www.linkedin.com/in/dhananjay-chourasiya-481289ba/" onClick={handleLinkedin}>LinkedIn</button>
            </div>
        </div>       
    )
    };    

export default About;