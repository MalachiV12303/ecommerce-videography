import { formatCurrency } from '@/app/lib/utils'
import { CameraDetail, LenseDetail } from '@/app/lib/definitions'
import Link from 'next/link'

export function StoreItem({ item }: { item: CameraDetail | LenseDetail }) {
    const formattedValue = formatCurrency(item.value ?? '0')
    const params = new URLSearchParams()
    params.set("id", item.id)
    
    if ("megapixels" in item) {
        params.set("itemtype", "cam")
        return (
                <Link href={`/item?${params}`} className="flex snap-start m-4">
                    <div className="basis-3/4">
                        <div className="text-sm sm:text-base">{item.name}</div>
                        <div className="text-xs opacity-75">{item.type}</div>
                        <div className="text-xs opacity-75">{item.brand}</div>
                        <div className="text-xs opacity-75">{item.megapixels}</div>
                    </div>
                    <div className="basis-1/4 flex justify-end">
                        <div className="text-xs sm:text-sm">{formattedValue}</div>
                    </div>
                </Link>
        )
    } else if ("minfl" in item) {
        params.set("itemtype", "len")
        return (
            <Link href={`/item?${params}`} className="flex snap-start m-4">
                    <div className="basis-3/4">
                        <div className="text-sm sm:text-base">{item.name}</div>
                        <div className="text-xs opacity-75">{item.type}</div>
                        <div className="text-xs opacity-75">{item.brand}</div>
                        <div className="text-xs opacity-75">{item.minfl}</div>
                        <div className="text-xs opacity-75">{item.maxfl}</div>
                    </div>
                    <div className="basis-1/4 flex justify-end">
                        <div className="text-xs sm:text-sm">{formattedValue}</div>
                    </div>
                </Link>
        )
    }
    else {
        return (
            <>
                <div>
                    unknown item type
                </div>
            </>
        )
    }


}