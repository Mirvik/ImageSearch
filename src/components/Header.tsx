import { useDispatch } from "react-redux";
import { fetchImages } from "../store/imageSlicer";
import { useRef } from "react";
import { AppDispatch } from "../store/store";
import React from "react";
import { useAppDispatch } from "../hooks/ReduxHook";

export default function Header() {
  const dispatch = useAppDispatch();
  const text = useRef<null | HTMLInputElement>(null);

  return (
    <header className="header">
        <h1 className='text'>Image Search</h1>
        <input
          type="text"
          className='search' 
          ref={text}
          placeholder='For example: office'
        />
        <button className='btn' onClick={() => dispatch(fetchImages(text.current!.value))}>Search</button>
    </header>
  )
}
