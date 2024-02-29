import { commonAPI } from "./commonApi";
import { SERVER_URL } from "./server_url";

//add component call Upload video - store video in http://localhost:3000/videos
export const uploadVideoAPI = async (video)=>{
    // send response to add component
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}
// get video api called by view
export const getAllVideosAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/videos`,"")
}

//store watch history by videocard to http://localhost:3000/history
export const saveHistoryAPI = async (videoDetails)=>{
    // send response to add component
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}
// get history to watch component to http://localhost:3000/history
export const getHistoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// Remove history to watch component
export const removeHistoryAPI = async (videoId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
} 
// remove video
export const removeVideoAPI = async (videoId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}

// Save category to category component
export const addCategoryAPI = async (categoryDetails) =>{
    return await commonAPI("POST",`${SERVER_URL}/category`,categoryDetails)
}
// Get category to category component
export const getCategoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}
// Remove category api
export const removeCategoryAPI = async (categoryId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${categoryId}`,{})
}
// Get single video API
export const getAVideoAPI =async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
} 
// Update Category API
export const updateCategoryAPI =async(categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${categoryId}`,updatedCategoryDetails)
} 
// get single Category API
export const getSingleCategoryAPI =async(categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/category/${categoryId}`,"")
} 