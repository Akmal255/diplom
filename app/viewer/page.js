import React from 'react';
import ImageViewer from './ImageViewer';
import ImageDetails from './ImageDetails';
import DownloadButton from './DownloadButton';

const Page = () => {
    return (
        <div className="image-viewer-page">
            <ImageViewer />
            <ImageDetails />
            <DownloadButton />
        </div>
    );
};

export default Page;