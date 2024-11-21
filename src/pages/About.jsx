import React from 'react';

const About = () => {
    return (
        <div>
            <p className="text-center font-bold text-black my-4 text-5xl">Our Team </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-14">

                <div className="bg-[#FFD700] shadow-lg border  rounded-2xl p-4 items-center flex gap-10 ">
                    <div>
                        <img className=" rounded-2xl shadow-lg h-40 w-full object-cover" src="https://i.ibb.co.com/zhMJWKt/439915110-122169011804080750-7654548265192145468-n.jpg" alt="" />
                    </div>
                    <div >
                        <p className=" mt-3 text-3xl font-bold text-black ">Siddique</p>
                        <p className=" font-semibold   text-lg text-black ">Owner and CEO</p>
                    </div>
                </div>
                <div className="bg-[#FFD700] shadow-lg border  rounded-2xl p-4 items-center flex gap-10 ">
                    <div>
                        <img className=" rounded-2xl shadow-lg h-40 w-full object-cover" src="https://i.ibb.co.com/0XmvmRt/10-libros-que-todo-hombre-debe-leer-al-menos-una-vez-en-la-vida.jpg" alt="" />
                    </div>
                    <div >
                        <p className=" mt-3 text-3xl font-bold text-black ">Smith</p>
                        <p className=" font-semibold   text-lg text-black ">Senior Counselor</p>
                    </div>
                </div>
                <div className="bg-[#FFD700] shadow-lg border  rounded-2xl p-4 items-center flex gap-10">
                    <div>
                        <img className=" rounded-2xl shadow-lg h-40 w-full object-cover" src="https://i.ibb.co.com/Vjj5HYr/Charme-d-entreprise-confiant-Un-beau-jeune-homme-d-affaires-afro-am-ricain-debout-l-int-rieur-avec-l.jpg" alt="" />
                    </div>
                    <div >
                        <p className=" mt-3 text-3xl font-bold text-black ">Rafio</p>
                        <p className=" font-semibold   text-lg text-black ">Cheif Executive Manager</p>
                    </div>
                </div>
            </div>

            <div
                    style={{
                        backgroundImage: "url('https://i.ibb.co/Ch60pPY/vecteezy-top-view-of-a-workspace-on-a-blue-desk-1309407.jpg')",
                        backgroundSize: "cover",
                        
                        backgroundPosition: "center",
                        minHeight: "100%",
                        width: "100%",
                        position: "relative",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        backgroundBlendMode: "overlay",
                        padding: "5px",
                        marginTop:"30px "
                    }}
                >

            {/* customer review */}
            <p className="text-center font-bold text-white mb-5 text-5xl">Customer Review </p>




            <div className="bg-[#FFD700] shadow-lg   rounded-2xl p-4 items-center flex flex-col md:flex-row gap-10 w-3/4 mx-auto mb-3 ">
                <div className="md:w-1/5 md:h-fit
        ">
                    <img className=" md:h-full rounded-2xl shadow-lg  w-full object-cover" src="https://i.ibb.co.com/yBpDSzS/Meet-Made-By-Morgen-The-Design-Files-Australia-s-most-popular-design-blog.jpg" alt="" />
                </div>
                <div className="md:w-4/5" >
                    <p className=" mt-3 text-4xl font-bold text-black ">John D. – ★★★★★</p>
                    <p className=" font-bold   text-lg text-black ">“Game-Changer for My Career!”</p>
                    <p className="   text-lg text-black ">"I was lost and unsure about my career path, but this website provided me with personalized guidance that changed everything. The one-on-one counseling sessions were incredibly insightful, and the tools they offered helped me identify my strengths and opportunities.</p>
                </div>
            </div>
            <div className="bg-[#FFD700] shadow-lg   rounded-2xl p-4 items-center flex flex-col md:flex-row gap-10 w-3/4 mx-auto mb-3  ">
                <div className="md:w-1/5 md:h-fit">
                    <img className="md:h-full rounded-2xl shadow-lg  w-full object-cover" src="https://i.ibb.co.com/JrnNqZp/Premium-Photo-Image-of-pleased-businessman-30s-wearing-suit-holding-money-fan-while-working-in-offic.jpg" alt="" />
                </div>
                <div className="md:w-4/5" >
                    <p className=" mt-3 text-4xl font-bold text-black ">Samantha L. – ★★★★★</p>
                    <p className=" font-bold   text-lg text-black ">“Tailored Advice for Every Stage of Your Career”</p>
                    <p className="   text-lg text-black ">"As a mid-career professional, I was looking to switch industries but didn’t know where to start. The resources and career coaches here made the transition seamless. The mock interviews and resume-building services were particularly helpful. </p>
                </div>
            </div>
            <div className="bg-[#FFD700] shadow-lg   rounded-2xl p-4 items-center flex flex-col md:flex-row gap-10 w-3/4 mx-auto mb-3  ">
                <div className="md:w-1/5 md:h-fit">
                    <img className="md:h-full rounded-2xl shadow-lg  w-full object-cover" src="https://i.ibb.co.com/tJJFpG7/Fifty-shades-of-grey-working-ceo-Christian.jpg" alt="" />
                </div>
                <div className="md:w-4/5" >
                    <p className=" mt-3 text-4xl font-bold text-black ">Michael S. – ★★★★★</p>
                    <p className=" font-bold   text-lg text-black ">“Perfect for Students and Recent Graduates!”</p>
                    <p className="   text-lg text-black ">"Being a fresh graduate, I had no idea how to navigate the job market. The career assessment tests and expert advice gave me clarity and confidence.</p>
                </div>
            </div>

            </div>




            {/* Faq */}
            <p className="text-center font-bold text-black my-4 text-7xl">Fa<span className="text-yellow-500 text-9xl">Q</span></p>

            <div className="collapse collapse-arrow bg-[#FFD700] shadow-lg  text-black w-3/4 mx-auto ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">How do I know if career counseling is right for me?</div>
                <div className="collapse-content">
                    <p>Career counseling is ideal for anyone seeking clarity about their career path, whether you're a student, a recent graduate, or a working professional considering a career change. .</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-[#FFD700] shadow-lg  text-black w-3/4 mx-auto ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">What services does your career counseling platform offer?</div>
                <div className="collapse-content">
                    <p> We offer a range of services, including career assessments, resume and cover letter building, mock interviews, one-on-one coaching, and industry-specific career advice. We also provide resources to help with job searching and networking.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-[#FFD700] shadow-lg  text-black w-3/4 mx-auto ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium"> Are the counseling sessions conducted online or in-person?</div>
                <div className="collapse-content">
                    <p>All our counseling sessions are conducted online for your convenience. You can book video or phone consultations with our career coaches at a time that suits you.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFD700] shadow-lg  text-black w-3/4 mx-auto ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">Is your service suitable for international job seekers?</div>
                <div className="collapse-content">
                    <p> Yes, our platform provides guidance for international job markets, including country-specific resume formats, interview tips, and insights into global industries. </p>
                </div>
            </div>

        </div>
    );
};

export default About;