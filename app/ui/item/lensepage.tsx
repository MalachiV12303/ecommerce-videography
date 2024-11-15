import { Lense } from "@/app/lib/db/schema";

export default function LensePage({ len }: { len: Lense }){
    return(
        <>
            <div className="min-h-[78dvh] bg-opacity-5 flex p-8">
                <div className="basis-1/2 flex flex-col justify-center gap-8">
                    <div>
                        <h1 className="text-4xl">{len.name}</h1>
                        <h2 className="text-2xl">{len.brand}</h2>
                    </div>
                    <div className="flex flex-col">
                        <p>Min: {len.details.minfl}</p>
                        <p>Max: {len.details.maxfl}</p>
                        <p>Max AP: {len.details.maxap}</p>
                        <p>Compatible Mounts: {len.details.mount}</p>
                    </div>
                </div>

                <div className="basis-1/2 flex flex-col items-end justify-center">
                    <p>{len.value}</p>
                    <label>
                        <button>
                            {"+"}
                        </button>
                    </label>
                </div>
            </div>
        </>
    )
}