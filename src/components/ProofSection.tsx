'use client';

import React, { useState } from 'react';
import { landingContent } from '@/data/landingContent';
import { PlayCircle, Star, Users, X } from 'lucide-react';
import Image from 'next/image';

const ProofSection = () => {
  const { proofs } = landingContent;
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Helper function to extract YouTube ID from Shorts or regular links
  const getYouTubeId = (url: string) => {
    const shortsRegex = /shorts\/([^/?]+)/;
    const match = url.match(shortsRegex);
    if (match) return match[1];
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const standardMatch = url.match(regExp);
    return (standardMatch && standardMatch[2].length === 11) ? standardMatch[2] : null;
  };

  return (
    <section id="proof" className="py-24 bg-premium-light">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-premium-dark">
            {proofs.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            {proofs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {proofs.items.map((item, index) => {
            const videoId = getYouTubeId(item.videoUrl);
            const isPlaying = activeVideo === videoId;

            return (
              <div key={index} className="flex flex-col gap-4 group">
                {/* Vertical Video Container */}
                <div 
                  className="aspect-[9/16] bg-premium-dark rounded-[2rem] border-4 border-white shadow-premium relative cursor-pointer overflow-hidden group/video"
                  onClick={() => videoId && !isPlaying && setActiveVideo(videoId)}
                >
                  {isPlaying ? (
                    <div className="absolute inset-0 z-20 bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                        title={`Depoimento de ${item.name}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveVideo(null);
                        }}
                        className="absolute top-4 right-4 z-30 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <>
                      {videoId ? (
                        <Image
                          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                          alt={`Miniatura depoimento ${item.name}`}
                          fill
                          className="object-cover opacity-60 group-hover/video:opacity-80 transition-opacity duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-accent/5 group-hover/video:bg-accent/10 transition-colors"></div>
                      )}
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                        <PlayCircle className="w-20 h-20 text-accent mb-4 group-hover/video:scale-110 transition-transform shadow-2xl" />
                        <p className="text-white font-black uppercase tracking-widest text-xs">Assistir Depoimento</p>
                      </div>
                      
                      {/* Gradient Overlay for legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                    </>
                  )}
                </div>
                
                <div className="px-4">
                  <p className="font-black text-premium-dark text-lg uppercase leading-tight">{item.name}</p>
                  <p className="text-sm text-accent font-bold uppercase tracking-wider">{item.profession}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-slate-100 shadow-sm">
            <Users className="w-5 h-5 text-accent" />
            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">Mais de 500 vidas impactadas pelo método</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
