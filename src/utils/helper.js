import { SubDomainList } from "./constant";

export const getApps = () =>{
    const subdomain = getSubDomain(window.location.hostname);
    const mainApp = SubDomainList.find((app)=>app.main);

    if(subdomain === "") return mainApp.app;

    const apps = SubDomainList.find((app) => subdomain === app.subDomain);
    return apps ? apps.app : mainApp.app;
}

//  http://url.localhost:5173/shortUrl

export const getSubDomain = (hostname) => {
    const locationParts = hostname.split('.');
    const isLocalhost = locationParts.slice(-1)[0] === "localhost";
    const sliceTill = isLocalhost ? -1 : -2;
    return  locationParts.slice(0, sliceTill).join("");
}