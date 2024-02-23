import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

import { ImageType } from "../type/ImageType";
import { ResponseResultType } from "../type/ResponseResultType";

type Status = string | null;

type MyAction = {
    images: ImageType[],
    error: Status,
};

export const fetchImages = createAsyncThunk(
    'text/fetchImages',
    async function(text: string): Promise<MyAction> {

        try {
            const promise = await fetch('https://api.unsplash.com/search/photos?per_page=12&query='+text+'&client_id=nDVGplkkMEoSwSk1i140zjqISvjoULVjs0DcpC_plfU');

            if (!promise.ok){
                throw new Error('Server error');
            }

            const response = await promise.json();

            let images: ImageType[] = [];

            response.results.forEach((result: ResponseResultType, id: number) => {
                images.push({
                    id: id,
                    imageUrl: result.urls.raw,
                    downloadUrl: result.links.download,
                });
            });
            return {
                images: images,
                error: null
            };

        } catch(err) {
            return {
                images: [{
                    id: 0,
                    imageUrl: '',
                    downloadUrl: ''
                }],
                error: err.message,
            };
        }
    }
    
);


type States = {
    images: ImageType[],
    status: Status,
    error: Status
}


const initialState: States = {
    images: [{
        id: 0,
        imageUrl: '',
        downloadUrl: ''
    }],
    status: null,
    error: null
}

const textSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchImages.pending, (state):void => {
            state.status = 'loading';
            state.error = null;
        }),
        builder.addCase(fetchImages.fulfilled, (state, action: PayloadAction<MyAction>):void => {
            state.status = 'resolved';
            state.images = action.payload.images;
        }),
        builder.addCase(fetchImages.rejected, (state, action: PayloadAction<MyAction | unknown>):void => {

        })
    }
});


export default textSlice.reducer;