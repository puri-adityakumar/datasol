"use client"
import { BACKEND_URL } from "@/utils";
import axios from "axios";
import { useState } from "react"

export function UploadImage({ onImageAdded, image }: {
    onImageAdded: (image: string) => void;
    image?: string;
}) {
    const [uploading, setUploading] = useState(false);

    async function onFileSelect(e: any) {
        setUploading(true);
        try {
            const file = e.target.files[0];
            
            // TODO: Phase 2 - Implement Cloudinary upload
            // For now, this is a placeholder for Cloudinary integration
            console.log("File selected:", file.name);
            
            // TODO: Implement Cloudinary signature endpoint call
            // const signatureResponse = await axios.get(`${BACKEND_URL}/v1/user/cloudinary-signature`, {
            //     headers: {
            //         "Authorization": localStorage.getItem("token")
            //     }
            // });
            
            // TODO: Upload to Cloudinary with signature
            // const cloudinaryUrl = await uploadToCloudinary(file, signatureResponse.data);
            // onImageAdded(cloudinaryUrl);
            
            // Temporary placeholder for development
            const tempUrl = URL.createObjectURL(file);
            onImageAdded(tempUrl);
        } catch(e) {
            console.log(e)
        }
        setUploading(false);
    }

    if (image) {
        return <img className={"p-2 w-96 rounded"} src={image} />
    }

    return <div>
        <div className="w-40 h-40 rounded border text-2xl cursor-pointer">
                <div className="h-full flex justify-center flex-col relative w-full">
                    <div className="h-full flex justify-center w-full pt-16 text-4xl">
                    {uploading ? <div className="text-sm">Loading...</div> : <>
                        +
                        <input className="w-full h-full bg-red-400 w-40 h-40" type="file" style={{position: "absolute", opacity: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%"}} onChange={onFileSelect} />
                    </>}
                </div>
            </div>
        </div>
    </div>
}