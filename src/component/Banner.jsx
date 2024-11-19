

const Banner = ({title,subtitle}) => {
    return (
        <div>
               <div className="text-center mt-8">
                <p className="text-5xl font-bold text-white">{title}</p>
                <p className="mt-3 w-3/5 mx-auto text-slate-200 text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default Banner;