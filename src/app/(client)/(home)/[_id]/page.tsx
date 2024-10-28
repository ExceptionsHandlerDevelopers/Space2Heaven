const page = () => {
    return (
        <section className="min-h-screen w-full flex-center flex-col">
            <div className="">
                <div className="">
                    Image Carousel
                </div>
                <div className="">
                    <div className="flex-between">
                        <h2 className="">Rooms - <span className="">n</span></h2>
                        <h2 className="">Baths - <span className="">n</span></h2>
                        <h2 className="">Dimensions - <span className="">nxn</span></h2>
                        <h2 className="">Area - <span className="">n</span> sq.ft</h2>
                    </div>
                    <div className="">
                        features list
                    </div>
                    <div className="flex gap-4">
                        <h2 className="">Location</h2> |
                        <p className="">Status - <strong className="">available</strong></p> |
                        <h1 className="">Price</h1>
                    </div>
                    <hr className="" />
                    <div className="">
                        <h1 className="">About</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, est recusandae nemo totam neque ducimus eveniet modi magnam unde eos.</p>
                    </div>
                </div>
                <button className="btn-class">Contact Us</button>
            </div>
            <hr className="" />
            <div className="">
                <h1 className="">Similar</h1>
                <div className="">
                    Properties Carousel
                </div>
            </div>
        </section>
    )
}
export default page