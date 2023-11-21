export const Card = ({children, ...props}) => {
    return (
        <>
        <div className="shadow-xl border border-black w-2/5 mt-24 mx-auto rounded-lg">
        <div className="flex justify-center items-center py-4">
            <img  {...props} className="mx-auto w-1/4"/>
            <div className="mx-auto">
            {children}
            </div>
        </div>
        </div>
        </>
    )
}