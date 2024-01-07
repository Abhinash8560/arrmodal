// import { apiSlice } from "@/redux/api/rootApi";
import { apiSlice } from "../../../../redux/api/rootApi";

export const otherLinkApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOtherLink : builder.query({
            query: () => ({url:'other/get-other-link'})
        }),
        // getStates : builder.query({
        //     query: () => ({url:'/api/state/get-states'})
        // }),
        // getUniversityCategory : builder.query({
        //     query: () => ({url:'/api/university-category/get-university-category'})
        // })
    }) 
})

export const {useGetOtherLinkQuery,
//  useGetStatesQuery,
//   useGetUniversityCategoryQuery 
} = otherLinkApiSlice




