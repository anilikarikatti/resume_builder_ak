
import Link from "next/link"

export default function MainPage(){


    return(
        <>
            <div className="h-screen back txt">
                <div className=" w-40 relative  top-[20px] flex flex-row">
                    <div className=" logo h-28 bg-contain"></div>
                    <div className="capitalize ">resume builder</div>
                </div>
                <div className="h-100">
                    <div className="h-80 w-[600px] relative left-[25%] items-center justify-center flex txt1">
                        <p className="text-justify ">
                                    The Best Free Online Resume Builder
                            A Quick and Easy Way to Create Your Professional Resume.  Professional Resume Templates Choose the modern and professional templates. All of which can be customized to your liking. Fast and Easy to Use Our resume builder lets you easily and quickly create a resume using our resume wizard.
                        </p>
                    </div>
                    <div className="bg-blue-500 text-white capitalize  w-56 absolute  left-[45%] h-16 rounded text-lg flex justify-center items-center btn"><Link href="/components/input">create my resume now</Link></div>
                    </div>
            </div>
        </>
    )
}