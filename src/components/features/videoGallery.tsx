'use client'

import { useState } from 'react'

interface Video {
  id: string
  title: string
  description: string
}

interface VideoGalleryProps {
  videos: Video[]
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])

  return (
    <div className="flex flex-col space-y-4">
      {/* Video Principal */}
      <div className="w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${selectedVideo.id}`}
          title={selectedVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Lista de Videos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
              selectedVideo.id === video.id
                ? 'ring-2 ring-blue-500 scale-95'
                : 'hover:scale-105'
            }`}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="text-white text-sm font-medium text-center px-2">
                {video.title}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}