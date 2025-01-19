import React from 'react';
import gridImage from "@/assets/images/grid-image1.png";
import gridImage2 from "@/assets/images/grid-image2.png";

const Skills = () => {
    return (

        <section className="c-space w-full pt-36 mt-32 sm:px-2">
            <div className="flex items-center space-x-4 sm:justify-center">
                <h2 className="font-bold text-7xl text-start md:text-6xl xs:text-5xl">Skills</h2>
                <span
                    className={`xs:hidden h-[3px] w-40 bg-primary dark:bg-purple-500 transition-all duration-300 group-hover:w-52 md:w-32 sm:w-24`}
                ></span>
            </div>


            <div
                className="grid grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 relative rounded-2xl py-16 md:py-8"
                style={{
                    backgroundImage: `url(${gridImage.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}
            >
                {/* Sobreposição de opacidade */}
                <div className="absolute inset-0 z-1 sm:hidden bg-bgLightXl dark:bg-bgDarkXl"  style={{
                    zIndex: 1
                }}/>
                <div className="absolute inset-0 z-1 hidden bg-bgLight sm:block dark:bg-bgDark" style={{
                    zIndex: 1
                }}/>


                {/* Skill Section 1 */}
                <div className="col-span-2 xl:col-span-2 relative">
                    <div
                        className="relative flex flex-col items-center justify-start
        p-4 border-b-5xl border-mid-5xl  border-light dark:border-dark h-[276px] w-full sm:border-b-5xl sm:border-r-0
         xl:items-center xl:justify-center"
                    >
                        <div className="absolute inset-0   bg-black/20 dark:bg-black/40"/>
                        <div className="relative self-end  z-10 w-2/4 text-end lg:w-full  xl:w-full xl:text-center lg:self-end px-4 pb-4">
                            <p className="dark:text-white text-2xl font-bold md:text-base sm:text-xl">Frontend Skills</p>
                            <p className="dark:text-white text-base font-medium md:text-sm sm:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Skill Section 2 */}
                <div className="col-span-1 row-span-2 xl:col-span-2 xl:row-span-1 relative sm:h-64 xl:border-b-5xl dark:border-dark ">
                    <div
                        className="relative flex items-start text-start p-4
                        h-full w-full xl:items-center xl:text-center "
                    >
                        <div className="absolute inset-0  bg-black/20  dark:bg-black/40 "></div>
                        <div className="relative z-10 w-full px-4 pb-4">
                            <p className="dark:text-white text-2xl font-bold md:text-base sm:text-xl">Backend Skills</p>
                            <p className="dark:text-white text-base font-medium md:text-sm sm:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skill Section 3 */}
                <div className="col-span-1 xl:col-span-2 relative ">
                    <div
                        className="relative flex items-end text-start p-4 border-mid-5xl
                        sm:border-r-0 sm:border-b-5xl dark:border-dark h-[276px] w-full xl:items-center xl:text-center"
                    >
                        <div className="absolute inset-0   bg-black/20 dark:bg-black/40 "></div>
                        <div className="relative z-10 w-full px-4 pb-4">
                            <p className="dark:text-white text-2xl font-bold md:text-base sm:text-xl">Soft Skills</p>
                            <p className="dark:text-white text-base font-medium md:text-sm w-4/6 xl:w-full sm:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="col-span-1 xl:col-span-2 relative">
                    <div
                        className="relative flex items-end text-start p-4 border-mid-5xl
                         dark:border-dark xl:border-none  h-[276px] w-full xl:items-center xl:text-center"
                    >
                        <div className="absolute inset-0  bg-black/20 dark:bg-black/40 "></div>
                        <div className="relative z-10 w-full px-4 pb-4">
                            <p className="dark:text-white text-2xl font-bold md:text-base sm:text-xl">Contact</p>
                            <p className="dark:text-white text-base font-medium md:text-sm w-4/6  xl:w-full sm:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
