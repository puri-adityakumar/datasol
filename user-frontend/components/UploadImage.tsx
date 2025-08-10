"use client"
import { useState } from "react"
import { supabase } from "@/utils/supabase";
import { v4 as uuidv4 } from 'uuid';

async function uploadToSupabase(file: File) {
    const fileName = `${uuidv4()}-${file.name}`;
    const { data, error } = await supabase.storage.from('task-images').upload(fileName, file);
    if (error) {
        throw error;
    }
    const publicUrl = supabase.storage.from('task-images').getPublicUrl(fileName);
    return publicUrl.data.publicUrl;
}

export function UploadImage({ onImageAdded, image }: {
    onImageAdded: (image: string) => void;
    image?: string;
}) {
    const [uploading, setUploading] = useState(false);

    async function onFileSelect(e: any) {
        setUploading(true);
        try {
            const file = e.target.files[0];
            const url = await uploadToSupabase(file);
            onImageAdded(url);
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