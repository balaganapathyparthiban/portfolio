import RouteConst from "../constants/routes"
import Landing from "../pages/Landing/Landing"

export interface IRoute {
    path: string;
    component: React.FC;
}

const RouteList: IRoute[] = [
    {
        path: RouteConst.landing,
        component: Landing
    },
]

export default RouteList