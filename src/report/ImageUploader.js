import React, { useState } from 'react';
import './ImageUploader.css';
import image from './Cat.jpg';
import { useDispatch } from 'react-redux';
import { setUploadedImage } from './store';


const ImageUploader = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;
      setSelectedImage(imageData);
      dispatch(setUploadedImage(imageData)); // 存储图片数据到Redux store
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-uploader">
      <input type="file" onChange={handleImageUpload} />
      <div className="image-preview">
        {selectedImage ? (
          <img src={selectedImage} alt="Uploaded" className="uploaded-image" />
        ) : (
          <img src={image} alt="Default" className="default-image" />
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
