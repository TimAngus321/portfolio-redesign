import { routeConstants } from 'shared/constants';
import Skills from './';
import detailsRoute from "./screens/Details/route";
import settingsRoute from "./screens/Settings/route";

export default {
    path: routeConstants.SKILLS.route,
    component: Skills,
    routes: [
        detailsRoute,
        settingsRoute
    ]
};