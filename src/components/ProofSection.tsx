'use client';

import React, { useState } from 'react';
import { landingContent } from '@/data/landingContent';
import { PlayCircle, Star, Users, X } from 'lucide-react';
import Image from 'next/image';

const ProofSection = () => {
  const { proofs } = landingContent;
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const allPrints = [
    ...(proofs.instagramPrints || []),
    ...(proofs.whatsappPrints || [])
  ];

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

        {/* Combined Prints Testimonials (Masonry Wall of Love) */}
        {allPrints.length > 0 && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mb-20 [column-fill:_balance] box-border">
            {allPrints.map((print, index) => (
              <div key={index} className="break-inside-avoid mb-6">
                <img
                  src={print.url}
                  alt={print.alt}
                  className="w-full h-auto rounded-2xl border-4 border-white shadow-premium bg-white transition-all duration-300 hover:scale-[1.01] hover:shadow-xl animate-fade-in"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* Transition / Video Section Title */}
        <div className="text-center mb-12 mt-24">
          <h3 className="text-2xl font-black text-premium-dark uppercase tracking-tight mb-2">
            Depoimentos em Vídeo
          </h3>
          <p className="text-slate-500 font-medium">Veja e ouça a história de quem viveu a experiência na prática.</p>
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

        {/* Gallery of Previous Classes */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-premium-dark uppercase tracking-tight mb-2">
              Nossas Turmas Anteriores
            </h3>
            <p className="text-slate-500 font-medium">Imersões presenciais que transformaram clareza em ação.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 px-4 max-w-5xl mx-auto">
            {proofs.gallery?.map((photo, idx) => (
              <div 
                key={idx} 
                className={`relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-300 hover:scale-110 hover:z-10 hover:rotate-0 ${
                  idx % 2 === 0 ? 'rotate-2' : '-rotate-2'
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-slate-100 shadow-sm">
            <Users className="w-5 h-5 text-accent" />
            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">Mais de 100 vidas impactadas pelo método</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProofSection;
