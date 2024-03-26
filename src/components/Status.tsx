export default function Status ({
    status
} : {
    status: string
}) {
    if (status == "available") {
        return (
            <span className="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                {status}
            </span>
        )
    }
    else if (status == "rented") {
        return (
            <span className="inline-block px-2 py-1 leading-none bg-yellow-200 text-yellow-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                {status}
            </span>
        )
    }
    else if (status == "maintenance") {
        return (
            <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                {status}
            </span>
        )
    }
    else if (status == "broken") {
        return (
            <span className="inline-block px-2 py-1 leading-none bg-red-200 text-red-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                {status}
            </span>
        )
    }
}