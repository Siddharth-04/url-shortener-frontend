import AppRouter, { SubDomainROuter } from "../AppRouter";

export const SubDomainList = [
    {subDomain:"www",app: AppRouter,main : true},
    {subDomain:"url",app: SubDomainROuter, main : false}
];