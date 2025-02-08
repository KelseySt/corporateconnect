interface ItemFormProps {
    key: number;
    title: string;
    img: string;
}

export default function DeatiledView( {key, title, img }:ItemFormProps,  ) {

    return(
            <div className="flex flex-row h-[480px]">
                <img className="w-[359.3px] object-cover rounded-l-md" src={img} alt={title}/> 

                <div className={`px-4 w-96 flex flex-col gap-3 rounded-r-md shadow-md  bg-white`}>                
                    <div className="flex flex-col h-full">

                        <div>
                            <h2 className="font-bold md:text-lg lg:text-xl pt-6">{title}</h2>
                            <br></br>
                        </div>
                        
                    </div>
                </div>
            </div>
    );
}