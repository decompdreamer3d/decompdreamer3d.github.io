import React from 'react';
import { Title } from './components/Title';
import { TeaserSection } from './components/TeaserSection';
import { VideoGrid } from './components/VideoGrid';
import { Dialog } from './components/Dialog';
import { ComparisonDialog } from './components/ComparisonDialog';
import { ComparisonSection } from './components/ComparisonSection';
import { AbstractSection } from './components/sections/AbstractSection';
import { MotivationSection } from './components/sections/MotivationSection';
import { MethodologySection } from './components/sections/MethodologySection';
import { teaserVideo, videoData } from './data/videoData';
import { comparisonData } from './data/comparisonData';

function App() {
  const [selectedVideo, setSelectedVideo] = React.useState<(typeof videoData[0] | typeof teaserVideo) | null>(null);
  const [selectedComparison, setSelectedComparison] = React.useState<typeof comparisonData[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Title />
        
        <TeaserSection 
          teaserVideo={teaserVideo} 
          onVideoSelect={setSelectedVideo} 
        />

        <AbstractSection />
        <MotivationSection />
        <MethodologySection />

        <ComparisonSection 
          onComparisonSelect={setSelectedComparison} 
        />

        <VideoGrid 
          videos={videoData} 
          onVideoSelect={setSelectedVideo} 
        />
      </div>

      {selectedVideo && (
        <Dialog
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          title={selectedVideo.title}
          description={selectedVideo.description || ''}
          subVideos={selectedVideo.subVideos}
        />
      )}

      {selectedComparison && (
        <ComparisonDialog
          isOpen={!!selectedComparison}
          onClose={() => setSelectedComparison(null)}
          title={selectedComparison.title}
          description={selectedComparison.description}
          subVideos={selectedComparison.subVideos}
        />
      )}
    </div>
  );
}

export default App;