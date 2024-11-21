

const Banner = ({title,subtitle}) => {
    return (
        <div>
               <div className="text-center mt-8">
                <p className="md:text-5xl text-3xl font-bold text-white">{title}</p>
                <p className="mt-3 md:w-3/5 w-11/12 mx-auto text-slate-200 md:text-sm text-xs">{subtitle}</p>
            </div>
        </div>
    );
};

export default Banner;