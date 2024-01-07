import { apiSlice } from "../../../redux/api/rootApi";

export const universityApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUniversities : builder.query({
            query: (args) => ({url:'/api/university/get-university', params:{page:args?.currentPage,limit:args.limit, state: args?.selectedState, types: args?.selectedTypes.length !== 0 ? args.selectedTypes : 'default'}})
        }),
        getStates : builder.query({
            query: () => ({url:'/api/state/get-states'})
        }),
        getUniversityCategory : builder.query({
            query: () => ({url:'/api/university-category/get-university-category'})
        })
    }) 
})

export const {useGetUniversitiesQuery, useGetStatesQuery, useGetUniversityCategoryQuery} = universityApiSlice




