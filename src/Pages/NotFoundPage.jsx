import NotFoundContent from './../Components/Notfound/NotFoundContent'
import WindEffect from './../Components/ui/Effect/WindEffect'
import RainFall from './../Components/ui/Effect/RainFall'
export default function NotFoundPage(){
    return <>
        <div className="background">
            <RainFall />
            <WindEffect />
        </div>
        <NotFoundContent />
    </>
}