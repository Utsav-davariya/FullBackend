import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLODINARY_CLOUD_NAME,
    api_key: process.env.CLODINARY_API_KEY,
    api_secret: process.env.CLODINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        // file upload in cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // file is successfully uplod on cloudinary 

        fs.unlinkSync(localFilePath)
        return response;
    } 
    catch (error) {
       console.log("error of file",error) // remove the locally saved temoporary file as the upload operation got filed
        return null;
    }
}

export { uploadOnCloudinary }
